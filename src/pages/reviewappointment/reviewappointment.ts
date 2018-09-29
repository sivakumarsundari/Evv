import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams,LoadingController } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { GlobalPage } from '../global/global';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ReviewappointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-reviewappointment",
  templateUrl: "reviewappointment.html"
})
export class ReviewappointmentPage {
  records: record[];
  records1: record1[];
  reviewdet: any = [];
  currentdate: Date = new Date();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: HttpClient,
    public global:GlobalPage,
    public loadingCtrl: LoadingController,
    public _DomSanitizer: DomSanitizer
  ) {
    this.records = [
      {
        cname: "Jessica Careson",
        starttime: "9:00 AM",
        stoptime: "11:00 AM",
        image: "assets/imgs/jessica.jpg"
      }
    ];
    this.records1 = [
      {
        cname: "Jessica"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReviewappointmentPage");
    this.reviewdet = this.navParams.get("revdetai");
    console.log(this.reviewdet);
  }
  cancelreason:string='';
  showConfirm() {
    const prompt = this.alertCtrl.create({
      title: 'Cancel Appointment!',
      cssClass: "buttonCss3",
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
            this.recipientcancelappt();
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

recipientcancelappt()
{
  console.log("cancel appoinment");
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();

  let url = "api/ReTimesheet/clientcanceSch?";
  let myParams = new URLSearchParams();
  myParams.append("scheduleId", this.reviewdet.scheduleId.toString());
  myParams.append("agencyId", this.reviewdet.agencyId.toString());
  myParams.append("cancelnotes", this.cancelreason);
  this.http.get(url + myParams).subscribe(
    (data: any) => {
      console.log(data);
      this.global.isredashrelaod = true;
      this, this.navCtrl.pop();
      loading.dismiss();
    },
    err => {
      console.log(err);
      alert(err.error);
      loading.dismiss();
    });
}

shboard() {
  this.navCtrl.pop();
  }
  goback()
  {
    this.navCtrl.pop();
  }
}
export class record {
  cname: string;
  starttime: string;
  stoptime: string;
  image: any;
}
export class record1 {
  cname: string;
}
