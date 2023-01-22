import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss'],
})
export class ContactAddComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildContactForm();
  }
  // model logiczny formularza
  private buildContactForm() {
    const surnamePattern: string | RegExp = '^[A-z]{3,10}$';
    const firstNamePattern: string | RegExp = '^[A-z]{3,10}$';
    const phoneNumberPattern: string | RegExp = '^[0-9]{9,15}$';

    this.contactForm = this.fb.group({
      surname: ['', [Validators.required, Validators.pattern(surnamePattern)]],
      firstName: [
        '',
        [Validators.required, Validators.pattern(firstNamePattern)],
      ],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(phoneNumberPattern)],
      ],
    });
  }

  addContact() {
    this.contactsService
      .addContact(this.contactForm.value)
      .subscribe(() => this.router.navigate(['/contacts']));
  }
}
