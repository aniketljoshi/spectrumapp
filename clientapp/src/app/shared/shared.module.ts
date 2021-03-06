import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { BootstraptModule } from './components/bootstrap/bootstrap.module';
import { NgbdSortableHeader } from './directive/sortable.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    NgbdSortableHeader
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BootstraptModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ConfirmationDialogComponent,
    BootstraptModule,
    NgbdSortableHeader
  ],
  entryComponents: [ConfirmationDialogComponent]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
