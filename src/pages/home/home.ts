import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: FirebaseListObservable<any[]>;
  messages: any[];
  username;
  message;

  constructor(public actionSheetController: ActionSheetController, private navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('/messages');

    this.items.subscribe((data) => {
      this.messages = data;
    })

  }

  pushMessage() {
    this.items.push({username: this.username, message: this.message});
  }
}
