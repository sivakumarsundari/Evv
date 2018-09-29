import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";
import { CgprofilepagePage } from "../cgprofilepage/cgprofilepage";
import { HttpClient } from "@angular/common/http";
import { GlobalPage } from "../global/global";
import { CgprofilenewPage } from "../cgprofilenew/cgprofilenew";
import { PopoverController } from "ionic-angular";
import { CgpopoverPage } from "../cgpopover/cgpopover";
import { Geolocation } from "@ionic-native/geolocation";
import { CgcompletetimesheetPage } from "../cgcompletetimesheet/cgcompletetimesheet";
import { Observable } from "rxjs";
import { Time } from "@angular/common";

/**
 * Generated class for the CgtimesheetcarerecipientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-cgtimesheetcarerecipients",
  templateUrl: "cgtimesheetcarerecipients.html"
})
export class CgtimesheetcarerecipientsPage {
  isstart: boolean = false;
  isstop: boolean = false;
  iscompleted: boolean = false;
  latitude: number;
  longitude: number;
  displaydata: any = [];
  currentdateTime$: Observable<any>;

  Date = new Date();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public global: GlobalPage,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    private geolocation: Geolocation
  ) {
    this.currentdateTime$ = Observable.interval(1000).map(x => new Date());
  }

  ionViewWillEnter() {
    let agencyId: any = 1;
    let employeeId: any = 5;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    let url = "api/CgCareRecipientsLst/RecipientList?";
    let myParams = new URLSearchParams();

    myParams.append("employeeId", this.global.employeeId.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);

        this.displaydata = data.careRecipientList;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CgtimesheetcarerecipientsPage");
  }
  currentdate: Date = new Date();

  current: Time;
  differentmin(startDt) {
    console.log(startDt);

    var diff = (new Date(startDt).getTime() - new Date().getTime()) / 1000;
    diff /= 60;

    var hour = Math.floor(diff / 60);
    var min = diff % 60;

    return hour + " hrs" + min + " min";
    // this.current=time;
    // var t= this.currentdate.(time);
    // console.log(t);
    // return t;
  }

  ConvertHM(min) {
    console.log(min);

    return Math.floor(min / 60) + " hrs " + min % 60 + " min";
  }

  viewapp(client) {
    this.navCtrl.push(CgprofilepagePage, { clientData: client });
  }

  test() {
    this.navCtrl.push(CgprofilenewPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CgpopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  getlocation() {
    return this.geolocation
      .getCurrentPosition({ timeout: 5000 })
      .then(resp => {
        console.log("latitude and longitude");

        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      })
      .catch(error => {
        this.latitude = 0;
        this.longitude = 0;
        console.log("Error getting location", error);
      });
  }
  start(item) {
    console.log(item);
    this.getlocation();
    let alert = this.alertCtrl.create({
      title: "Activities to Complete",
      subTitle: item.clientName + " needs " + item.jobName + ".",
      message:
        "Please make sure that your location is turn on before Starting.",
      //title: 'G',
      // subTitle: 'Mike need ' + item.jobName +'.',
      buttons: [
        {
          text: "Got it,thanks!",
          handler: () => {
            this.isstart = true;
            this.startvisit(item);
            console.log("Start button");
          }
        }
      ]
    });
    alert.present();
  }
  stop(i) {
    let confirm = this.alertCtrl.create({
      title: "Do you want to end this visit?",
      message:
        "Please make sure that your location is turn on before Stopping!",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",

          handler: () => {
            this.isstop = true;
            this.iscompleted = true;
            this.getlocation();
            console.log("Agree clicked");
            this.stopvisit(i);
          }
        }
      ]
    });
    confirm.present();
  }
  submit() {
    console.log();
    this.navCtrl.push(CgcompletetimesheetPage);
  }

  startvisit(clientdata) {
    // var tcId = new tcId();
    // var tcstartdt = new tcstartdt();
    //   clientdata.nonsch.tcId = 40;
    console.log(clientdata);
    if (clientdata.nonsch == null) {
      clientdata.nonsch = { tcstartdt: new Date() };
    } else {
      clientdata.nonsch.tcstartdt = new Date();
    }

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.getlocation().then(data => {
      // alert("testt "+ JSON.stringify(data));
      console.log(clientdata);
      let url = "api/CgCareRecipientsLst/startTCnosch?";
      let myParams = new URLSearchParams();
      myParams.append("employeeId", this.global.employeeId.toString());
      myParams.append("clientId", clientdata.clientId);
      myParams.append("agencyId", this.global.agencyId.toString());
      console.log(this.global.employeeId.toString());
      console.log(clientdata.clientId);
      console.log(this.global.agencyId.toString());
     
      myParams.append(
        "latitude",
        typeof this.latitude == "undefined" || this.latitude == null
          ? null
          : this.latitude.toString()
      );
      myParams.append(
        "longitude",
        typeof this.longitude == "undefined" || this.longitude == null
          ? null
          : this.longitude.toString()
      );
      this.http.get(url + myParams).subscribe(
        (data: any) => {
          console.log(data);
          // var tcId = new tcId();
          clientdata.nonsch.tcstartdt = new Date();
          clientdata.nonsch.tcstopdt = null;
          // var tcstartdt = new tcstartdt();
          clientdata.nonsch.tcId = data;
          clientdata.nonsch.tcstartdt = new Date();
          loading.dismiss();
        },
        err => {
          console.log(err);
          loading.dismiss();
        }
      );
    });
  }

  stopvisit(clientdata) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // clientdata.nonsch.tcstopdt = new Date();
    // clientdata.nonsch.isCompleted =true;
    loading.present();
    this.getlocation().then(data => {
      // alert("testt "+ JSON.stringify(data));
      console.log(clientdata);
      let url = "api/CgCareRecipientsLst/stopTcnosch?";
      let myParams = new URLSearchParams();
      myParams.append("timecardId", clientdata.nonsch.tcId);
      myParams.append("agencyId", this.global.agencyId.toString());
      console.log(clientdata.agencyId);
      myParams.append(
        "latitude",
        typeof this.latitude == "undefined" || this.latitude == null
          ? null
          : this.latitude.toString()
      );
      myParams.append(
        "longitude",
        typeof this.longitude == "undefined" || this.longitude == null
          ? null
          : this.longitude.toString()
      );
      this.http.get(url + myParams).subscribe(
        (data: any) => {
          console.log(data);
          clientdata.nonsch.tcstopdt = new Date();
          clientdata.nonsch.isCompleted = true;
          this.global.iscgdashreload = true;
          // if (data) {
          //   clientdata.isStarted = true;
          //   clientdata.timeCardId = data;
          //   clientdata.tcsdt = new Date();
          // }
          //  this.schedulelist = data;
          loading.dismiss();
        },
        err => {
          console.log(err);
          loading.dismiss();
        }
      );
    });
  }
}
