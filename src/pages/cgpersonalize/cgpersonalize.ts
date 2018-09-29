import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CgtabpagesPage } from '../cgtabpages/cgtabpages';
import { CgpersonalizephotouploadPage } from '../cgpersonalizephotoupload/cgpersonalizephotoupload';
import { CgtimesheetprofilePage } from '../cgtimesheetprofile/cgtimesheetprofile';


@IonicPage()
@Component({
  selector: 'page-cgpersonalize',
  templateUrl: 'cgpersonalize.html',
})
export class CgpersonalizePage {
  records: record[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records = [
      {
        cgname:"Jessica"     
      }
    ];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpersonalizePage');
  }
  personalize(){
      
    this.navCtrl.push(CgpersonalizephotouploadPage);

}
remind(){
      
  this.navCtrl.push(CgtimesheetprofilePage);

}
}
export class record {
cgname:string;
}