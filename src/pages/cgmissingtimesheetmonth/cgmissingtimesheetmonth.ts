import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {CgcompletetimesheetPage} from '../cgcompletetimesheet/cgcompletetimesheet';
import { HttpClient } from '@angular/common/http';
import { RecarehistorymonthdetailsPage } from '../recarehistorymonthdetails/recarehistorymonthdetails';
import { CgmonthtimeentriesPage } from '../cgmonthtimeentries/cgmonthtimeentries';
import { CgreviewPage } from '../cgreview/cgreview';
/**
 * Generated class for the CgmissingtimesheetmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgmissingtimesheetmonth',
  templateUrl: 'cgmissingtimesheetmonth.html',
})
export class CgmissingtimesheetmonthPage {
  monthList:any=[];
  dayList: any=[];
  completedtc:any;
  tcdetails:any;
  scheduleIdct:any;
  timecardIdct:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgmissingtimesheetmonthPage');
    this.monthList=this.navParams.get("clientData");
this.dayList=this.monthList.dayList;
console.log(this.dayList);
  
}



  ionViewWillEnter() {
  



// let loading = this.loadingCtrl.create({
//   content: 'Please wait...'
// });
// loading.present();
    // let client = this.navParams.get("clientData");
    // let employeeId: any = 5;
    // let url = "api/CgCareRecipientsLst/RecipientCareHistoryList?";
    // let myParams = new URLSearchParams();
    // myParams.append("EmployeeId", employeeId);
    // myParams.append("clientId", client.clientId);

    // this.http.get(url + myParams).subscribe(
    //   (data: any) => {
    //     console.log(data);

    //     this.clientData = data;
    //     if (data != null) {
    //       this.clientName = data.clientName;
    //       this.monthlist = data.monthlist;
    //       // this.dayList=data.dayList;
    //loading.dismiss();
    //     }

    //   },
    //   err => {
    //     console.log(err);
    //loading.dismiss();
    //   });


  }



 
  // details(rewvalue,index){
  //   let loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   loading.present();
  //   if(!rewvalue.isSubmitted)
  //   {
  //   this.scheduleIdct =rewvalue.scheduleId; 
  //   this.timecardIdct = rewvalue.timeCardId;
  //   console.log(this.scheduleIdct);
  //   console.log(this.timecardIdct);
  //   let url = "api/Cgtimesheets/cgCompleteTC?";
  //   let myParams = new URLSearchParams();
  //   myParams.append("scheduleId",  this.scheduleIdct.toString());
  //   myParams.append("timecardId",  this.timecardIdct.toString());
  //   this.http.get(url + myParams).subscribe(
  //     (data: any) => {
  //       console.log(data);
       
  //     //  if(data != null)
  //     //  {
  //     //    data.tcstdt = (data.tcstdt).toISOString();
  //     //    data.tceddt = (data.tceddt).toISOString();
  //     //    console.log( data.tcstdt);
  //     //  }
  //     //  this.tcdetails = data
  //       console.log("navepush");
  //       loading.dismiss();
  //       this.navCtrl.push(CgreviewPage,{"revicedvalue":data});
  //     },
  //   err => {
  //     console.log(err);
      
  //   loading.dismiss();
  
  //   });
  // }
   
  //    }

  completesheet(miss){
    console.log("hey");
    
  console.log(miss);
 this.navCtrl.push(CgcompletetimesheetPage,{"scheduleId":miss.scheduleId,"timecardId":miss.timeCardId}); 
  }

}
