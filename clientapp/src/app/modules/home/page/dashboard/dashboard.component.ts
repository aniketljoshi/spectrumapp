import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Member } from 'src/app/shared/models/member.model';
import { MembersService } from 'src/app/core/services/members.service';
import { Router } from '@angular/router';
import { AppResources } from 'src/app/core/configs/resource/app-resources';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'src/app/shared/services/confirmation-dialog.service';
import { SortEvent } from 'src/app/shared/interface/isortevent';
import { NgbdSortableHeader } from 'src/app/shared/directive/sortable.directive';
import { EventsService } from 'src/app/core/services/events.service';
import { Event } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  members: Member[];
  events: Event[];
  eventModel: Event = new Event();
  translations = AppResources;
  modalReference: NgbModalRef;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(private membersService: MembersService, private router: Router,
    private confirmationDialogService: ConfirmationDialogService, private modalService: NgbModal,
    private eventsService: EventsService) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.membersService.getMembers().subscribe((res) => {
      this.members = res;
    });
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((res) => {
      this.events = res;
    });
  }

  open(content) {
    this.getEvents();
    this.modalService.open(content, { backdrop: 'static', keyboard: false });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.members = this.sort(this.members, column, direction);
  }

  openConfirmationDialog(index) {
    this.confirmationDialogService.confirm(this.translations.common.deleteRequest, this.translations.common.areYouSureYouWantToDelete)
      .then(() => this.deleteMember(index));
  }

  deleteMember(index) {
    this.members.splice(index, 1)
  }

  sort(members: Member[], column: string, direction: string): Member[] {
    if (direction === '') {
      return members;
    } else {
      return [...members].sort((a, b) => {
        // const temp = column.indexOf('.') > -1 ? ('[' + column.split('.')[0]+']'+'['+column.split('.')[1]+']'): '['+column+']';
        const res = this.compare(this.getValue(a, column), this.getValue(b, column));
        return direction === 'asc' ? res : -res;
      });
    }
  }

  getValue(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }

  compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

}
