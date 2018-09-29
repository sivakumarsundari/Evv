import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecarehistorymonthdetailsPage } from '../recarehistorymonthdetails/recarehistorymonthdetails';

/**
 * Generated class for the RecarehistorymonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recarehistorymonth',
  templateUrl: 'recarehistorymonth.html',
})

export class RecarehistorymonthPage {
  sliderValue:number = 40;
  full:boolean=false;
  records:record[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.records= [
      {
        day:"April 19",
        cname:"Jessica Careson",
        entry:"6 of 6 Entries Verified",
        click:true
      },
      {
        day:"April 15",
        cname:"Jessica Careson",
        entry:"4 of 6 Entries Verified",
        click:false
      },
      {
        day:"April 10",
        cname:"Jessica Careson",
        entry:"4 of 6 Entries Verified",
        click:false
      },
      // {
      //   day:"April 7",
      //   cname:"Billy Crupt",
      //   entry:"1 of 7 Entries Verified",
      //   click:false
        
      // },
      {
        day:"April 4",
        cname:"Billy Crupt",
        entry:"1 of 6 Entries Verified",
        click:false
      },
      {
        day:"April 1",
        cname:"Billy Crupt",
        entry:"0 of 6 Entries Verified",
        click:false
      }
    ];
  }

   daylist:any=[];
   Monthname:string="";
  ionViewWillEnter() {
    let month = this.navParams.get("monthdata");
      console.log(month);
    this.daylist=month.dayList;
    console.log(this.daylist);
    this.Monthname=month.monthName;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecarehistorymonthPage');
  }
details(){
  this.navCtrl.push(RecarehistorymonthdetailsPage);
}

}
export class record{
  day:string;
  cname:string;
  entry:string;
  click:boolean;
}