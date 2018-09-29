import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EligibilitydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eligibilitydetails',
  templateUrl: 'eligibilitydetails.html',
})
export class EligibilitydetailsPage {
det:details[];
eligibledet:eligibilitydetails[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.det=[
      {
        totalhrs:"20 hours",
        remainhrs:"8 Hours",
        Name:"Julie Stevens"
      }
    ];
    this.eligibledet=[{
      date:"7/24",
      name:"Julie",
      sttime:"9:00 am",
      endtime:"11.00 am",
      cmphrs:"2"
    },
    {
      date:"7/20",
      name:"Julie",
      sttime:"10:00 am",
      endtime:"1.00 pm",
      cmphrs:"3"
    },
    {
      date:"7/5",
      name:"Julie",
      sttime:"8:00 am",
      endtime:"10.00 am",
      cmphrs:"2"
    },
    {
      date:"6/23",
      name:"Julie",
      sttime:"7:00 am",
      endtime:"10.00 am",
      cmphrs:"3"
    },
    {
      date:"6/5",
      name:"Julie",
      sttime:"9:00 am",
      endtime:"11.00 am",
      cmphrs:"2"
    },];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EligibilitydetailsPage');
  }

}
export class details{
  totalhrs:any;
  remainhrs:any;
  Name:String;
}
export class eligibilitydetails{
  date:any;
  name:string;
  sttime:any;
  endtime:any;
  cmphrs:any;
}