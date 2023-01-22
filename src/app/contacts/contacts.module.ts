import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ContactsListComponent, ContactDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ContactsListComponent, ContactDetailsComponent],
})
export class ContactsModule {}
