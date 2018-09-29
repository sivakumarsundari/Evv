import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CgblockcalendarrepeatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgblockcalendarrepeat',
  templateUrl: 'cgblockcalendarrepeat.html',
})
export class CgblockcalendarrepeatPage {
repeatop:repeat[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.repeatop=[{
      opt:"Never",
    },
    {
      opt:"Every day",
    },{
      opt:"Every week",
    },{
      opt:"Every two weeks",
    },{
      opt:"Every month",
    },{
      opt:"Every year",
    },];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgblockcalendarrepeatPage');
  }

}
export class repeat{
  opt:String;
}
