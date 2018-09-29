import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignatureverificationPage } from '../signatureverification/signatureverification';
import { GlobalPage } from '../global/global';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the CgreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgreview',
  templateUrl: 'cgreview.html',
})
export class CgreviewPage {
  records:record[];
  reviewdetail:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public global:GlobalPage,public _DomSanitizer: DomSanitizer) {
    this.records=[
      {
         timeIn:"11.00 am",
         timeOut:"2.00 am",
    }
  ];
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CgreviewPage');
  }
  ionViewWillEnter() {
    this.reviewdetail = this.navParams.get("revicedvalue");
    console.log("review valuee");
    console.log(this.reviewdetail);
  }
  submit(valtocom){
    this.navCtrl.push(SignatureverificationPage,{"cgvalsubmit":valtocom});
    
  }s
  
}
export class record{
  timeIn:String;
  timeOut:String;
}