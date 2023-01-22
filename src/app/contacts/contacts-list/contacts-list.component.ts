import { Component, OnInit } from '@angular/core';
// import { CONTACTS } from 'src/app/data/contacts-data';
import { ContactModel } from 'src/app/models/ContactModel';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss'],
})
export class ContactsListComponent implements OnInit {
  contacts: ContactModel[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.loadContacts();
  }

  loadContacts() {
    this.contactsService
      .getContacts()
      .subscribe((contacts) => (this.contacts = contacts));
  }

  removeContact(contact: ContactModel, event: Event) {
    event.stopPropagation();
    const conf = confirm('Usunac ten kontakt?');
    if (conf) {
      this.contactsService
        .removeContact(contact.id)
        .subscribe(() => this.loadContacts());
    }
  }
}
