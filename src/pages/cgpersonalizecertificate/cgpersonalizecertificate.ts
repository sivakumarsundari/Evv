import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgpersonalizephotouploadPage } from '../cgpersonalizephotoupload/cgpersonalizephotoupload';
import { CgpersonalizedetailsPage } from '../cgpersonalizedetails/cgpersonalizedetails';
import { CgpersonalizeexperiencePage } from '../cgpersonalizeexperience/cgpersonalizeexperience';
import { CgtimesheetprofilePage } from '../cgtimesheetprofile/cgtimesheetprofile';


@IonicPage()
@Component({
  selector: 'page-cgpersonalizecertificate',
  templateUrl: 'cgpersonalizecertificate.html',
})
export class CgpersonalizecertificatePage {
  records: record[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records = [
      {
        certificate:"CPR-Certified"
      },
      {
        certificate:"CNA"
      },
      {
        certificate:"Drivers Licence"
      },
      {
        certificate:"First Aid"
      },
      {
        certificate:"Person-Centered Training"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpersonalizecertificatePage');
  }
  finish(){
      
    this.navCtrl.push(CgtimesheetprofilePage);

}
photo(){
      
  this.navCtrl.push(CgpersonalizephotouploadPage);

}
detail(){
      
  this.navCtrl.push(CgpersonalizedetailsPage);

}
exp(){
      
  this.navCtrl.push(CgpersonalizeexperiencePage);

}
cancel(){
  this.navCtrl.pop();
}

}
export class record {
  certificate:string;
  }

