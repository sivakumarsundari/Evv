import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import {CgreviewPage} from '../cgreview/cgreview'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { DatePipe } from '../../../node_modules/@angular/common';
import { GlobalPage } from './../global/global';
import { DomSanitizer } from '@angular/platform-browser';
import { moduleProvideDef } from '@angular/core/src/view';
import { CgmulsignaturePage } from '../cgmulsignature/cgmulsignature';
// import { add, subtract } from 'add-subtract-date';
// import { dateDataSortValue } from 'ionic-angular/umd/util/datetime-util';

/**
 * Generated class for the CgmultipletimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgmultipletimesheet',
  templateUrl: 'cgmultipletimesheet.html',
})
export class CgmultipletimesheetPage {
  cgcaredetails:caredetails[];
  // public multiplelist:Array<any> ;
  // multiplelist:any=[];
  scheduleIdct:number;
  timecardIdct:number;
  clientName:string;
  isCareProvided:boolean=true;
  tcdetails:any;
  isedit:boolean=false;
  multiplelist:any=[];
  clientid:any=0;
  clientidget:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient, public loadingCtrl: LoadingController,private alertCtrl: AlertController,
    public global :GlobalPage,public _DomSanitizer: DomSanitizer) {
      this.cgcaredetails = [
        {
        caredet:"I provided care",
        val:1
        },
        {
          caredet:"I didn't provided care",
          val:0
          }
      ];
  }
  currentdate=Date.now();
val:any;
ionViewWillEnter() {
  

 
  
 
this.clientidget=this.navParams.get("clientid")
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();
  let url = "api/Cgmultipletc/completemultible?";
  let myParams = new URLSearchParams();

  myParams.append("EmployeeId", this.global.employeeId.toString());
  if(this.clientidget==0){
    myParams.append("ClientId",this.clientidget.toString())
  }
  else
  {
    myParams.append("ClientId",this.clientidget.toString())
  }



  this.http.get(url + myParams).subscribe(
    (data: any) => {
      console.log(data);
      this.multiplelist=data["cgmultible"];
// this.timeIn(this.multiplelist[0].tcsdt)

      console.log(this.multiplelist);
      

      
      
      loading.dismiss();
    },
    err => {
      console.log(err);
      loading.dismiss();
    });
}
cancel(){
  this.navCtrl.pop();
}
cm:any;
j:number;
edit(cmtc,i){
  console.log(cmtc)
 
   this.paticularuser(cmtc,i);
//   this.cm = JSON.stringify(cmtc);
//   console.log( this.cm);
//   const httpOptions = {
//     headers: new HttpHeaders({
//       "Content-Type": "application/json",
//       Authorization: "my-auth-token"
//     })
//   };
//   let url = "api/Cgmultipletc/muledittc";
// //   let myParams=new URLSearchParams();
// // myParams.append("tcdetails",this.multceditdet)
  
//   this.http.post(url,this.cm, httpOptions).subscribe(
//     (data: any) => {
     
//       console.log(data);
// })
}
singleuser:any;

paticularuser(val,t){
    this.singleuser=val;
    this.j=t;
    // console.log('hi');
    console.log(this.singleuser);
    
    
     this.isedit=true;
}
multceditdet:any;
save1(test){
  this.isedit=false;
  console.log(test);
  this.isCareProvided=true;
  
}
savetcedit(muteditdet){
 // this.isedit=false;
  console.log(muteditdet);
  muteditdet.ididntprovided =muteditdet.ididntprovided;
  console.log(muteditdet.ididntprovided);
  if(!muteditdet.ididntprovided && !muteditdet.ismissedforgettc)
  {
  this.multceditdet = JSON.stringify(muteditdet);
  const httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token"
    })
  };
  let url = "api/Cgmultipletc/muledittc";
//   let myParams=new URLSearchParams();
// myParams.append("tcdetails",this.multceditdet)
  
  this.http.post(url,this.multceditdet, httpOptions).subscribe(
    (data: any) => {
      console.log(data);
      muteditdet.timecardId = data;
    
      // this.global.iscgdashreload = true;
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
              this.isedit=false;
            
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
  else
  {
    this.isedit=false;
  }
  
}
canceleditTC(ct){
  this.isedit=false;
 // this.navCtrl.pop();
}

save(tc){
  this.isedit=false;
 // this.navCtrl.pop();
}

multiblesignaturepage(multiblesigndata)
{
  console.log(multiblesigndata);
this.navCtrl.push(CgmulsignaturePage ,{"mutisubvalue" :multiblesigndata })
}

caredet(cd,k){
  this.isCareProvided=false;
  console.log('hi');
  console.log(cd);
  console.log(k);
  
  
  
}

newtime:boolean=false;
newIntime:any;
newOutTime:any;
timeIn(intime){
  console.log(intime);
  // var d = new Date();
  // console.log(d);
  
  //  this.newIntime= d.setHours(d.getHours() - 48);
   
  //  this.newIntime= d.setUTCHours(d.getUTCHours() - 48);
  //  d.setUTCHours(d.getUTCHours() - 48)
  //  console.log(this.newIntime);
   
 this.newIntime=intime - 4*1000*60*60;
//  this.newIntime=new Date(intime.setMinutes(-new Date().getTimezoneOffset()));
 
 console.log(this.newIntime);
 
 this.newtime=true;

}
timeOut(inout){
  // this.newOutTime=(inout - 86400000);
  this.newtime=true;
 
 }

}
export class caredetails{
  caredet:string;
  val:any;
}
