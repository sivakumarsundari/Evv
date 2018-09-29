import { Component, Pipe, PipeTransform } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { AlertController } from "ionic-angular";
import { CgviewappointmentPage } from "../cgviewappointment/cgviewappointment";
import { CgcompletetimesheetPage } from "../cgcompletetimesheet/cgcompletetimesheet";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { GlobalPage } from "../global/global";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import { Time } from "@angular/common";
import { Geolocation } from "@ionic-native/geolocation";
import { CgprofilenewPage } from "../cgprofilenew/cgprofilenew";
// import { MinuteSecondsPipe } from '../../pipes/minute-seconds/minute-seconds';
import { PopoverController } from "ionic-angular";
import { CgpopoverPage } from "../cgpopover/cgpopover";
import { DomSanitizer } from "@angular/platform-browser";
import { CgmultipletimesheetPage } from "../cgmultipletimesheet/cgmultipletimesheet";
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Diagnostic } from '@ionic-native/diagnostic';


@IonicPage()
@Component({
  selector: "page-cgdashboard",
  templateUrl: "cgdashboard.html"
})
export class CgdashboardPage {
  records: record[];
  public show: boolean = true;
  someCondition: boolean;
  latitude: number;
  longitude: number;
  schedulelist: any = [];
  missedsheet: any = [];
  currentdateTime$: Observable<any>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public global: GlobalPage,
    private alertCtrl: AlertController,
    public http: HttpClient,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    public popoverCtrl: PopoverController,
    public _DomSanitizer: DomSanitizer,
    private locationAccuracy: LocationAccuracy,
    private diagnostic: Diagnostic,
  ) {
    this.currentdateTime$ = Observable.interval(1000).map(x => new Date());
    this.records = [
      {
        Apnttime: "9:00 AM"
      },
      {
        Apnttime: "10:00 AM"
      },
      {

        Apnttime: "11:00 AM",
      }
    ];
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

    return Math.floor(min / 60) + " hrs " + (min % 60) + " min";
  }

  locationon()
  {
    return this.diagnostic.isLocationEnabled().then(
      (isAvailable) => {
      if(!isAvailable){
            // the accuracy option will be ignored by iOS
            this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
              () => console.log('Request successful'),
              error => console.log('Error requesting location permissions',error)
            );
      }

      }).catch( (e) => {
      console.log(e);
      alert(JSON.stringify(e));
      });
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CgdashboardPage');
  // }
  ionViewWillEnter() {
    console.log("ionViewwill entre CgdashboardPage");
    console.log(this.global.iscgdashreload);
    if (this.global.iscgdashreload) {
      this.ionViewDidLoad();
      console.log("trur");
    }
  }
  ionViewDidLoad() {
    this.show = true;
    let agencyId: any = 1;
    let employeeId: any = 5;
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    console.log(this.global);

    loading.present();
    let url = "api/Cgtimesheets/getcglist?";
    let myParams = new URLSearchParams();
    myParams.append("agencyid", this.global.agencyId.toString());
    myParams.append("employeeId", this.global.employeeId.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        //  this.schedulelist = data;
        this.schedulelist = data["list"];
        this.missedsheet = data["misedsheet"];
        this.global.iscgdashreload = false;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
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

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Which planets have you visited?");
    for (let i = 0; i < this.records.length; i++) {
     // console.log(array[i]);
      alert.addInput({
        type: "text",
        label: this.records[i].Apnttime,
         value: this.records[i].Apnttime,
        // checked: true
      });
    }

    alert.addButton("Cancel");
    alert.addButton({
      text: "Okay",
      handler: data => {
        console.log("Checkbox data:", data);
   
      }
    });
    alert.present().then(() => {
      
    });
  }

  presentAlert(item) {
    console.log(item);
    this.locationon().then((data)=>{
      console.log(data);
      
      this.getlocation();
    });
    
    console.log(this.records);
    // let isfetch = false;h
    // this.schedulelist.some((element, index) => {

    //   console.log(index);

    //   if (!element.isStarted && !element.isWantStarted && !isfetch && !element.isCancelled) {
    //     element.isWantStarted = true;
    //     isfetch = true;

    //    return true;
    //   } else if ((this.schedulelist.length - 1) == index) {
    let alert = this.alertCtrl.create({
      title: "Activities to Complete",
      subTitle: item.clientName + " needs " + item.jobName + ".",
      message:
        "Please make sure that your location is turn on before Starting." ,
      //title: 'G',
      // subTitle: 'Mike need ' + item.jobName +'.',
      buttons: [
        {
          text: "Got it,thanks!",
          handler: () => {
            // item.start= true;

            console.log("Start button");
            this.starrttimecard(item);
          }
        }
      ]
    });
    alert.present();
    //     return false;
    //   }
    // })

    // });
    // this.wantedStart1(item.scheduleId).then((data) => {
    // if (data) {
    //   alert("Already started");
    // }
    // if (!data) {

    // }
    //});
  }
  starrttimecard(clientdata) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.getlocation().then(data => {
      // alert("testt "+ JSON.stringify(data));
      console.log(clientdata);

      let url = "api/Cgtimesheets/startTC?";
      let myParams = new URLSearchParams();
      myParams.append("scheduleId", clientdata.scheduleId);
      myParams.append("agencyId", clientdata.agencyId);
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

          if (data) {
            clientdata.isStarted = true;
            clientdata.timeCardId = data;
            clientdata.tcsdt = new Date();
          }
          //  this.schedulelist = data;
          loading.dismiss();
        },
        err => {
          console.log(err);
          alert(err.error);
          loading.dismiss();
        }
      );
    });
  }

  viewclientdetails(clientdetails) {
    console.log(clientdetails);
    this.navCtrl.push(CgviewappointmentPage, {
      ScheduleId: clientdetails.scheduleId,
      agencyId: clientdetails.agencyId,
      isCompleted: clientdetails.isCompleted,
      isCancelled: clientdetails.isCancelled,
      isStarted: clientdetails.isStarted
    });
    err => {
      console.log(err);
    };
  }
  completetimesheetpagelat(ctsplat) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log("latitude and longitude stop");

        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        loading.dismiss();
        this.completetimesheetpage(ctsplat);
      })
      .catch(error => {
        this.latitude = 0;
        this.longitude = 0;
        console.log("Error getting location", error);
        loading.dismiss();
        this.completetimesheetpage(ctsplat);
      });
  }

  completetimesheetpage(ctsp) {
    this.locationon();
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();

    this.getlocation().then(data => {
      console.log(ctsp);

      let url = "api/Cgtimesheets/endTC?";
      let myParams = new URLSearchParams();
      myParams.append("timecardId", ctsp.timeCardId);
      myParams.append("agencyId", ctsp.agencyId);
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
          ctsp.isCompleted = true;
          ctsp.tctotalhours = data;
          this.wantedStart();
          loading.dismiss();
        },
        err => {
          console.log(err);
          alert(err.error);
          loading.dismiss();
        }
      );
    });
    // loading.present();
  }

  wantedStart() {
    let isfetch = false;
    this.schedulelist.some(element => {
      if (
        !element.isStarted &&
        !element.isWantStarted &&
        !isfetch &&
        !element.isCancelled
      ) {
        element.isWantStarted = true;
        isfetch = true;
        return !element.isStarted && !element.isWantStarted;
      }
    });
  }

  wantedStart1(scheduleId) {
    console.log(scheduleId);

    let isfetch = false;
    this.schedulelist.some(element => {
      console.log(element);
      if (
        element.isStarted &&
        !element.isCompleted &&
        !isfetch &&
        !element.isCancelled &&
        element.scheduleId != scheduleId
      ) {
        //  element.isWantStarted = true;
        isfetch = true;
        return true;
      }
    });
  }

  SubmitTimesheet(tcvalue) {
    console.log(tcvalue);
    this.navCtrl.push(CgcompletetimesheetPage, {
      scheduleId: tcvalue.scheduleId,
      timecardId: tcvalue.timeCardId
    });
    err => {
      console.log(err);
    };
  }

  SubmitTimesheetmissed(tcmissed) {
    console.log(tcmissed);
    this.navCtrl.push(CgcompletetimesheetPage, {
      scheduleId: tcmissed.mScheduleId,
      timecardId: tcmissed.mTcId
    });
    err => {
      console.log(err);
    };
  }

  logout() {
    let loading = this.loadingCtrl.create({
      content: "Logging out..."
    });
    console.log();
    this.storage.remove("loginAuth");
    let alert = this.alertCtrl.create({
      title: "Do you want to Logout?",
      // message: 'Do you want to Logout the session?',
      // cssClass: "buttonCssa",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            loading.present();
            window.location.reload();

            console.log("Logout");
          }
        }
      ]
    });
    loading.dismiss();
    err => {
      console.log(err);
      loading.dismiss();
    };
    alert.present();
  }

  // toggle() {
  //   this.show = !this.show;
  // }

  test() {
    this.navCtrl.push(CgprofilenewPage);
  }

  doConfirm(i) {
    let confirm = this.alertCtrl.create({
      title: "Do you want to end this visit?",
      message:"Please make sure that your location is turn on before Stopping!",
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
            console.log("Agree clicked");
            this.completetimesheetpage(i);
           // this.SubmitTimesheet(i);
          }
        }
      ]
    });
    confirm.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CgpopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  multc(){
    console.log("from dashboard");
    
    this.navCtrl.push(CgmultipletimesheetPage,{"clientid":this.global.clientId.toString()})
  }
}
export class record {
  Apnttime: string;
  // cgname: string;
  // duration: string;
  // isstarted: boolean;
  // image: any;
}
// @Pipe({
//   name: 'minuteSeconds'
// })
// export class MinuteSecondsPipe implements PipeTransform {

//   transform(value: number): string {
//     let  temp = value * 60;
//     const hours = Math.floor((temp/3600));
//     const minutes: number = Math.floor((temp/ 60)/60);
//     const seconds=Math.floor(temp % 3600 % 60);
//     return hours + ':' + minutes + ':' + seconds;
//   }
// }
