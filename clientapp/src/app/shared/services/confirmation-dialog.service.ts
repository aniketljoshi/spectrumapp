import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private modalService: NgbModal) { }

  public confirm(title: string, message: string, dialogSize: 'sm' | 'lg' | 'xl' = 'sm', btnOkText: string = 'OK',
    btnCancelText: string = 'Cancel'): Promise<boolean> {

    const modalRef = this.modalService.open(ConfirmationDialogComponent, { size: dialogSize, backdrop: 'static', keyboard: false, windowClass: 'modal-holder' });

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }
}
