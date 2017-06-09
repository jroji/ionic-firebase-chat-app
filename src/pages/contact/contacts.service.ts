import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ContactsService {
  constructor(private http: Http) {

  }

  getContacts() {
    return this.http.get('https://randomuser.me/api/?results=10')
  }
}
