import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactsListComponent, ContactDetailsComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [ContactsListComponent, ContactDetailsComponent],
})
export class ContactsModule {}
