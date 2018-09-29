import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CgdashboardPage } from '../cgdashboard/cgdashboard';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { GlobalPage } from '../global/global';
import { DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-cgviewappointment',
  templateUrl: 'cgviewappointment.html',
})
export class CgviewappointmentPage {
  records: record[];
  clientdetails: any = [];
  scheduleIdevv: number;
  agencyId: number;
  isCompleted: boolean;
  isCancelled: boolean;
  isStarted: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public http: HttpClient, public glob: GlobalPage,
    public loadingCtrl: LoadingController,public _DomSanitizer: DomSanitizer) {
    this.records = [
      {

        Apnttime: "9:00 AM",
        cgname: "Mike Jones",
        duration: "2 hours",
        isstarted: false,
        image: "assets/imgs/profile.jpg"
      }
    ];
  }
  ionViewWillEnter() {
    this.scheduleIdevv = this.navParams.get("ScheduleId");
    this.agencyId = this.navParams.get("agencyId");
    this.isCompleted = this.navParams.get("isCompleted");
    this.isCancelled = this.navParams.get("isCancelled");
    this.isStarted = this.navParams.get("isStarted");
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let url = "api/Cgtimesheets/getscheclientdet?";
    let myParams = new URLSearchParams();
    myParams.append("ScheduleId", this.scheduleIdevv.toString());
    myParams.append("agencyId", this.agencyId.toString());

    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        this.clientdetails = data;
        loading.dismiss();

      },
      err => {
        console.log(err);
        loading.dismiss();

      });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CgviewappointmentPage');
  }
  cancelreason: string = '';
  cancelapp() {
    const prompt = this.alertCtrl.create({
      title: 'Cancel Appointment',
      // cssClass: "buttonCss",
      message: "Why do you want to cancel this appointment?",
      inputs: [
        {
          name: 'reason',
          // placeholder: 'Enter reason to Cancel Appointment...'
        },
      ],
      buttons: [
      
        {
          text: 'Ok',
          handler: data => {
            this.cancelreason = data.reason;
            console.log('Ok clicked');
            console.log(data.reason);

            this.cancelappoinment();

          }
        },
       {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    prompt.present();
  }


  dashboard() {

    this.navCtrl.pop();
  }
  cancelappoinment() {
    console.log("cancel appoinment");
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let url = "api/Cgtimesheets/empcanceSch?";
    let myParams = new URLSearchParams();
    myParams.append("scheduleId", this.clientdetails.scheduleId.toString());
    myParams.append("agencyId", this.clientdetails.agencyId.toString());
    myParams.append("cancelnotes", this.cancelreason);
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        this.glob.iscgdashreload = true;
        this, this.navCtrl.pop();
        loading.dismiss();

      },
      err => {
        console.log(err);
        alert(err.error);
        loading.dismiss();

      });
  }
}
export class record {
  Apnttime: string;
  cgname: string;
  duration: string;
  isstarted: boolean;
  image: any;
}
