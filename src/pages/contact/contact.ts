import { Component } from '@angular/core';
import {ContactsService} from "./contacts.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contacts: Array<any>;

  constructor(private contactsService:ContactsService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contactsService.getContacts().subscribe((data) => {
      this.contacts = data.json().results;
      console.log(this.contacts);
    })
  }
}
