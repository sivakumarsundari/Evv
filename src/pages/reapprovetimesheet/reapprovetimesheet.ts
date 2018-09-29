import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ResignatureverificationPage } from '../resignatureverification/resignatureverification';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalPage } from '../global/global';
// import { ModalController } from 'ionic-angular';
// import { TimeModelPage } from '../time-model/time-model';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the ReapprovetimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reapprovetimesheet',
  templateUrl: 'reapprovetimesheet.html',
})
export class ReapprovetimesheetPage {
  times:time[];  
  item1:items1[];
  mark:cmark[];
  contents:content[];
  services:service[];
  agencyId:number;
  timecardId:number;
  scheduleId:number;
  missedtc:any=[];

  isedit:boolean=false;
  isedit1:boolean=false;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient, public loadingCtrl: LoadingController,private alertCtrl: AlertController,
  public global:GlobalPage,public _DomSanitizer: DomSanitizer) {
      this.times=[{
        image:"assets/imgs/profile5.jpg",
        worktype:"Recipient of Care",
        name:"Tom Moscow",
      },
      {
        image:"assets/imgs/jessica.jpg",
        worktype:"Provided By",
        name:"Jessica Careson",
      },
    ];
    this.item1=[{
      image:"assets/imgs/h.png",
      orgname:"HomeCare First",
      connum:"5555-5555-5555",
      
  }];
    this.mark=[{
      type:"Bathing",
    },
    {
      type:"Grooming",
    },
    {
      type:"Eating",
    },];
    this.contents=[{
      time:"Time In",
      duration:"9:00 AM",
      add:"5151, 1st Avenue Rochester, MN 55555",
      loc:"LOCATION VERIFIED BY GPS",
    },
    {
      time:"Time Out",
      duration:"11:05 AM",
      add:"5151, 1st Avenue Rochester, MN 55555",
      loc:"LOCATION VERIFIED BY GPS",
    },];
    this.services=[{
      servtype:"DATE OF SERVICE",
      quantity:"April 13,2018",
      servtime:"TOTAL TIME",
      duration:"2H 5M",
    },
    {
      servtype:"SERVICE TYPE",
      quantity:"PCA",
      servtime:"RATIO",
      duration:"1:1",
    },];
    }  
    
    ionViewWillEnter() {
    console.log('ionViewDidLoad Reapprovetimesheet1Page');
  }
  submit(subval){
    this.navCtrl.push(ResignatureverificationPage,{"timesheetdetail":subval});
  }
  ionViewDidLoad() {
    console.log("will entre")
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    
    this.timecardId = this.navParams.get("TimecardId");
    this.agencyId = this.navParams.get("agencyId");
    this.scheduleId = this.navParams.get("ScheduleId");
    console.log(this.agencyId )
    console.log(this.timecardId )
    console.log(this.scheduleId )
    let url = "api/ReTimesheet/submitMTC?";
    let myParams = new URLSearchParams();
    myParams.append("timecardId", this.timecardId.toString());
    myParams.append("ScheduleId", this.scheduleId.toString());
    myParams.append("agencyId", this.agencyId.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        this.missedtc = data;
        loading.dismiss();
   
      },
    err => {
      console.log(err);
      loading.dismiss();
    });

  }
  cancel(){
    this.isedit=false;
    this.navCtrl.pop();
  }
  // edit(date) {
  //   const modal = this.modalCtrl.create(TimeModelPage,{ tcStarttime:date.tcStarttime,tcEndtime:date.tcEndtime});
  //   modal.present();
  // }
  edit(){
    this.isedit=true;
  }
  tceditdetails:any;
  edittimesheet(tcdetails){
   // this.isedit=true;
   this.isedit=false;
   console.log(tcdetails);
   this.tceditdetails = JSON.stringify(tcdetails);
   const httpOptions = {
     headers: new HttpHeaders({
       "Content-Type": "application/json",
       Authorization: "my-auth-token"
     })
   };
   let url = "api/ReTimesheet/reedittc";
   this.http.post(url, this.tceditdetails, httpOptions).subscribe(
     (data: any) => {
       console.log(data);
       this.global.isredashrelaod = true;
       this.isedit=false;
    this.isedit1=true;
    const alert = this.alertCtrl.create({
      title: "Changes Updated",
      message: "Your Timesheet has been updated successfully and sent to caregiver review.",
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
       this.navCtrl.pop();
     },
     err => {
       console.log(err);
      
     });
  }
  save(){
    this.isedit=false;
    this.isedit1=true;
  }
  
}
export class time{
  image:any;
  worktype:String;
  name:String;

}
export class items1{
  orgname:String;
  connum:any;
  image:any;
}
export class cmark{
  type:String;
}
export class content{
  time:String;
  duration:any;
  add:String;
  loc:String;
}
export class service{
  servtype:String;
  quantity:any;
  servtime:String;
  duration:any;
}
 

