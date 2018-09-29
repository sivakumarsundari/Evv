import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgpersonalizeexperiencePage } from '../cgpersonalizeexperience/cgpersonalizeexperience';
import { CgpersonalizephotouploadPage } from '../cgpersonalizephotoupload/cgpersonalizephotoupload';
import { CgpersonalizecertificatePage } from '../cgpersonalizecertificate/cgpersonalizecertificate';

/**
 * Generated class for the CgpersonalizedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgpersonalizedetails',
  templateUrl: 'cgpersonalizedetails.html',
})
export class CgpersonalizedetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpersonalizedetailsPage');
  }
  next(){
      
    this.navCtrl.push(CgpersonalizeexperiencePage);

}
photo(){
      
  this.navCtrl.push(CgpersonalizephotouploadPage);

}
exp(){
      
  this.navCtrl.push(CgpersonalizeexperiencePage);

}
certifi(){
      
  this.navCtrl.push(CgpersonalizecertificatePage);

}
cancel(){
  this.navCtrl.pop();
}
}
