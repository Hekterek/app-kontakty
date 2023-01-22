import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './contacts/contact-add/contact-add.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsListComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
  { path: 'contact-add', component: ContactAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
