import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { ReapprovetimesheetPage } from '../reapprovetimesheet/reapprovetimesheet';
import { RecarehistoryPage } from '../recarehistory/recarehistory';
import { ReprofilePage } from '../reprofile/reprofile';
import { PopoverController } from 'ionic-angular';


import { HttpClient } from '@angular/common/http';
import { ReviewappointmentPage } from '../reviewappointment/reviewappointment';
import { GlobalPage } from '../global/global';
import { PopoverPage } from '../popover/popover';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-redashboard',
  templateUrl: 'redashboard.html',
})
export class RedashboardPage {
records:record[];
records1:record1[];
records2:record2[];
missedsheet:any = [];
schedulelist:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient ,public global:GlobalPage,public popoverCtrl: PopoverController,
    public loadingCtrl: LoadingController,public _DomSanitizer: DomSanitizer,) {
    this.records = [
      {
      cname:"Jessica"
      }
    ];
    this.records1 = [
      {
      rname:"Tom"
      }
    ];
    this.records2 = [
      {
        day:"Today",
        cname:"Jessica Careson",
        starttime:"9:00 AM",
        stoptime:"11:00 AM",
        image:"assets/imgs/jessica.jpg"
      },
      {
        day:"4/23",
        cname:"Jessica Careson",
        starttime:"9:00 AM",
        stoptime:"11:00 AM",
        image:"assets/imgs/jessica.jpg"
      },
      {
        day:"4/27",
        cname:"Jessica Careson",
        starttime:"9:00 AM",
        stoptime:"11:00 AM",
        image:"assets/imgs/jessica.jpg"
      },
      {
        day:"4/30",
        cname:"Jessica Careson",
        starttime:"9:00 AM",
        stoptime:"11:00 AM",
        image:"assets/imgs/jessica.jpg"
      },
      {
        day:"5/4",
        cname:"Jessica Careson",
        starttime:"9:00 AM",
        stoptime:"11:00 AM",
        image:"assets/imgs/jessica.jpg"
      }
    ];
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  
  ionViewWillEnter() {
    console.log('ionViewwill entre CgdashboardPage');
    console.log(this.global.iscgdashreload);
    if(this.global.isredashrelaod)
    {this.ionViewDidLoad ();
    console.log("trur");
    
    }
    console.log('ionViewDidLoad RedashboardPage');
  }
  ionViewDidLoad() {
    let age = 1;
    let cli = 13;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let url = "api/ReTimesheet/getschlist?";
    let myParams = new URLSearchParams();
    //myParams.append("agencyid", age.toString());
    myParams.append("clientNumber", this.global.clientId.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        this.global.isredashrelaod = false;
        this.missedsheet = data["misedsheet"];
        this.schedulelist = data["list"];
        console.log(this.missedsheet);
        console.log( this.schedulelist);
        loading.dismiss();
      },
   err => {
        console.log(err);
        loading.dismiss();
      });
  }
  approve(approvedetail,index){
  
    console.log(approvedetail)
    this.navCtrl.push(ReapprovetimesheetPage,{"TimecardId":approvedetail.mTcId,"ScheduleId":approvedetail.mScheduleId,"agencyId":approvedetail.mAgencyId});
    
    err => {
      console.log(err);
    }
  }
  approvetc(tcsubmit)
  {
    console.log(tcsubmit);
   
    this.navCtrl.push(ReapprovetimesheetPage,{"TimecardId":tcsubmit.timeCardId,"ScheduleId":tcsubmit.scheduleId,"agencyId":tcsubmit.agencyId});
    
    err => {
      console.log(err);
    }
  }
  profile(){
   this.navCtrl.push(ReprofilePage);

  }
  viewcaregiverappoinment(sche)
  {
    console.log(sche);
    this.navCtrl.push(ReviewappointmentPage,{"revdetai":sche});
   
  }
}
export class record {
  cname:string;
}
export class record1 {
  rname:string;
}
export class record2 {
  day:string;
  cname:string;
  starttime:string;
  stoptime:string;
  image:any;
}