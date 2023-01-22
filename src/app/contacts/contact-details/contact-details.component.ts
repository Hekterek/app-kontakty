import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contactDetails: any = {};
  constructor(
    private contacsService: ContactsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.loadContact();
    console.log(this.contactDetails);
  }
  loadContact(): void {
    const id = this.route.snapshot.params['id'];
    this.contacsService
      .getContact(id)
      .subscribe((contact) => (this.contactDetails = contact[0]));
  }
}
