import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgpersonalizephotoeditPage } from '../cgpersonalizephotoedit/cgpersonalizephotoedit';
import { CgpersonalizedetailsPage } from '../cgpersonalizedetails/cgpersonalizedetails';
import { CgpersonalizeexperiencePage } from '../cgpersonalizeexperience/cgpersonalizeexperience';
import { CgpersonalizecertificatePage } from '../cgpersonalizecertificate/cgpersonalizecertificate';


@IonicPage()
@Component({
  selector: 'page-cgpersonalizephotoupload',
  templateUrl: 'cgpersonalizephotoupload.html',
})
export class CgpersonalizephotouploadPage { 
  records: record[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records = [
      {
        cgname:"Jessica"     
      }
    ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpersonalizephotouploadPage');
  }
  next(){
      
    this.navCtrl.push(CgpersonalizephotoeditPage);
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