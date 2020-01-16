import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Member } from 'src/app/shared/models/member.model';
import { MembersService } from 'src/app/core/services/members.service';
import { Router } from '@angular/router';
import { AppResources } from 'src/app/core/configs/resource/app-resources';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'src/app/shared/services/confirmation-dialog.service';
import { SortEvent } from 'src/app/shared/interface/isortevent';
import { NgbdSortableHeader } from 'src/app/shared/directive/sortable.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  members: Member[];
  translations = AppResources;
  modalReference: NgbModalRef;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  
  constructor(private membersService: MembersService, private router: Router
    , private confirmationDialogService: ConfirmationDialogService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getMembers();
  }

  getMembers(){
    this.membersService.getMembers().subscribe((res) => {
      this.members = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    console.log(column);
    console.log(direction);
  }

  openConfirmationDialog() {
    this.confirmationDialogService.confirm(this.translations.common.deleteRequest, this.translations.common.areYouSureYouWantToDelete)
    .then((confirmed) => console.log('User confirmed:', confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
