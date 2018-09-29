import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgpersonalizecertificatePage } from '../cgpersonalizecertificate/cgpersonalizecertificate';
import { CgpersonalizephotouploadPage } from '../cgpersonalizephotoupload/cgpersonalizephotoupload';
import { CgpersonalizedetailsPage } from '../cgpersonalizedetails/cgpersonalizedetails';

/**
 * Generated class for the CgpersonalizeexperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgpersonalizeexperience',
  templateUrl: 'cgpersonalizeexperience.html',
})
export class CgpersonalizeexperiencePage {
  records: record[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records = [
      {
        experience:"With Behaviors"
      },
      {
        experience:"Working with Children"
      },
      {
        experience:"Making Transfers"
      },
      {
        experience:"With Alzheimer's"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpersonalizeexperiencePage');
  }
  next(){
      
    this.navCtrl.push(CgpersonalizecertificatePage);

}
photo(){
      
  this.navCtrl.push(CgpersonalizephotouploadPage);

}
detail(){
      
  this.navCtrl.push(CgpersonalizedetailsPage);

}

certifi(){
      
  this.navCtrl.push(CgpersonalizecertificatePage);

}
cancel(){
  this.navCtrl.pop();
}
}
export class record {
  experience:string;
  }

