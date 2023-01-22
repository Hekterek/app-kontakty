import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    ContactAddComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [ContactsListComponent, ContactDetailsComponent],
})
export class ContactsModule {}
