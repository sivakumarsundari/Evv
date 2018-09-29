import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgpersonalizedetailsPage } from '../cgpersonalizedetails/cgpersonalizedetails';
import { CgpersonalizeexperiencePage } from '../cgpersonalizeexperience/cgpersonalizeexperience';
import { CgpersonalizecertificatePage } from '../cgpersonalizecertificate/cgpersonalizecertificate';
import { CgpersonalizephotouploadPage } from '../cgpersonalizephotoupload/cgpersonalizephotoupload';

/**
 * Generated class for the CgpersonalizephotoeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgpersonalizephotoedit',
  templateUrl: 'cgpersonalizephotoedit.html',
})
export class CgpersonalizephotoeditPage {
  records: record[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records = [
      {
        cgname:"Jessica"     
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpersonalizephotoeditPage');
  }
  next(){
      
    this.navCtrl.push(CgpersonalizedetailsPage);

}
detail(){
      
  this.navCtrl.push(CgpersonalizedetailsPage);

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
export class record {
  cgname:string;
  }
