import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  exports: [
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ]
})
export class BootstraptModule { }
