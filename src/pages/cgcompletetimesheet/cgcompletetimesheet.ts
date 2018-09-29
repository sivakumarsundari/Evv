import { Time } from '@angular/common';
import { NgModel } from '@angular/forms/src/directives';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {CgreviewPage} from '../cgreview/cgreview'
import { CgmissingtimesheetmonthPage } from '../cgmissingtimesheetmonth/cgmissingtimesheetmonth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CgmissingtimesheetPage} from '../cgmissingtimesheet/cgmissingtimesheet';
declare var $: any;
import { AlertController } from 'ionic-angular';
import { DatePipe } from '../../../node_modules/@angular/common';
import { GlobalPage } from './../global/global';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the CgcompletetimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgcompletetimesheet',
  templateUrl: 'cgcompletetimesheet.html',
})
export class CgcompletetimesheetPage {
  scheduleIdct:any=[];
  timecardIdct:number;
  clientName:string;
  tcdetails:any;
  isedit:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient, public loadingCtrl: LoadingController,private alertCtrl: AlertController,
    public global :GlobalPage,public _DomSanitizer: DomSanitizer) {
  }
  currentdate=Date.now();
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CgcompletetimesheetPage');
  // }
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    // this.scheduleIdct = this.navParams.get("missingTimeSheet");
    // console.log("cgcomtc");
    // console.log(this.scheduleIdct);
    
    this.scheduleIdct=this.navParams.get("scheduleId")
    this.timecardIdct = this.navParams.get("timecardId");
    console.log(this.scheduleIdct);
    console.log(this.timecardIdct);
    let url = "api/Cgtimesheets/cgCompleteTC?";
    let myParams = new URLSearchParams();
    myParams.append("scheduleId",  this.scheduleIdct.toString());
    myParams.append("timecardId",  this.timecardIdct.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
       
      //  if(data != null)
      //  {
      //    data.tcstdt = (data.tcstdt).toISOString();
      //    data.tceddt = (data.tceddt).toISOString();
      //    console.log( data.tcstdt);
      //  }
       this.tcdetails = data
        console.log("navepush");
        loading.dismiss();
      },
    err => {
      console.log(err);
      
    loading.dismiss();
  
    });
}

  
// nction () {
//     $('#myCheckbox').click(function () {
//       $('#myButton').prop("disabled", !$("#myCheckbox").prop("checked")); 
//     })
//     alert();
//   }

  review(rewvalue){
   this.navCtrl.push(CgreviewPage,{"revicedvalue":rewvalue});
    }
  

    canceleditTC(){
      this.isedit=false;
     // this.navCtrl.pop();
    }
    edit(){
      this.isedit=true;
    }
    tceditdetails:any;
    savetcedit(tcdetails){
      this.isedit=false;
      console.log(tcdetails);
      this.tceditdetails = JSON.stringify(tcdetails);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "my-auth-token"
        })
      };
      let url = "api/Cgtimesheets/reedittc";
      this.http.post(url, this.tceditdetails, httpOptions).subscribe(
        (data: any) => {
          console.log(data);
          if(data >0)
          {
            console.log("timecard greater");
            
            tcdetails.timecardId = data;
          }
          this.global.iscgdashreload = true;
          // this.navCtrl.pop();
          const alert = this.alertCtrl.create({
            title: "Changes Updated",
            message: "Your Timesheet has been updated successfully.Please complete your visit again.",
            // cssClass: "buttonCss5",
      
            buttons: [
              {
                text: "Ok",
                handler: data => {
                  console.log("ok clicked");
                
                }
              }
            ]
          });
          alert.present();
        },
        err => {
          console.log(err);
         
        });
      
    }

 buttonState() {
    return !this.tcdetails.jobTaskdet.some( jobdet=>jobdet.isCompleted);
  }

//   tester:boolean=true;
//  buttonState() {
//     alert();
//     this.tester= !this.tcdetails.jobTaskdet.some( jobdet=>jobdet.isCompleted);
   
//   }
 
presentConfirm(tcdetails1) {
  console.log(tcdetails1);
  let dd = tcdetails1.tcstdt;
  let dt= new Date(dd);
  let timeoly= dt.getTime();
  console.log(timeoly);
  let datePipe = new DatePipe('en-US');

    let timeVar = datePipe.transform(tcdetails1.tcstdt, 'h:mm a');

    console.log(timeVar);
  
  this.ionViewDidLoad();
  let alert = this.alertCtrl.create({
    title: tcdetails1.tcstdt,
   // data.tcstdt =  tcdetails1.tcstdt,
    inputs: [
      {
        name: 'tcstdt',
        placeholder: 'time',
        type: 'time',
        //value:
         value:timeVar
      },
      {
        name: 'tcstdt',
        placeholder: 'time',
        type: 'time'
      }
    ],
    buttons: [
      {
        text: 'save',
        role: 'cancel',
        handler: data => {
          // this.tcdetails(data);
          // console.log(data);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      } ,
  
     
    ]
  });
  alert.present();
}
cancel(){
  this.navCtrl.pop();
}
}
