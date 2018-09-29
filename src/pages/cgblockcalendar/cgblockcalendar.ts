import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgblockcalendarrepeatPage } from '../cgblockcalendarrepeat/cgblockcalendarrepeat';
import { CgtimesheetcalendarPage } from '../cgtimesheetcalendar/cgtimesheetcalendar';

/**
 * Generated class for the CgblockcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgblockcalendar',
  templateUrl: 'cgblockcalendar.html',
})
export class CgblockcalendarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgblockcalendarPage');
  }
  never(){
    this.navCtrl.push(CgblockcalendarrepeatPage);
  }
  save(){
    this.navCtrl.push(CgtimesheetcalendarPage);
  }
  cancel(){
    this.navCtrl.pop()
  }
}
