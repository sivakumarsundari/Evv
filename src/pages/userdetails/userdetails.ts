import { details } from "./../eligibilitydetails/eligibilitydetails";
import { Component, Injectable } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { Push, PushObject, PushOptions } from "@ionic-native/push";
import { Device } from "@ionic-native/device";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { Observable } from "rxjs";

/**
 * Generated class for the UserdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-userdetails",
  templateUrl: "userdetails.html"
})
@Injectable()
export class UserdetailsPage {
  useremployee: any = "";
  client: any = "";
  public devicedetails: detailsvalue;
  constructor(
    private push: Push,
    private device: Device,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http: HttpClient
  ) {
    this.devicedetails = new detailsvalue();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserdetailsPage");
  }

 createpushnotifyId()
{
  console.log("functions entred to createpushnotifyId" );
return new Promise((resolve,reject)=>{
  const options: PushOptions = {
    android: {
      senderID: "88456188271"
    },
    ios: {
      alert: "true",
      badge: true,
      sound: "false"
    },
    windows: {},
    browser: {
      pushServiceURL: "http://push.api.phonegap.com/v1/push"
    }
  };
  const pushObject: PushObject = this.push.init(options);
  console.log("push keysss devicepushregistration");

  pushObject.on("registration").subscribe((registration: any) => {
    console.log("Dveice registered", registration);
    this.devicedetails.pushuserid = registration.registrationId;
    resolve();
  },(Error)=>{
    console.log("functions entred to createpushnotifyId" );
    reject();
  })
})

}

  pushsetup() {
    const options: PushOptions = {
      android: {
        senderID: "88456188271"
      },
      ios: {
        alert: "true",
        badge: true,
        sound: "false"
      },
      windows: {},
      browser: {
        pushServiceURL: "http://push.api.phonegap.com/v1/push"
      }
    };
    // console.log("device ready");
    // console.log("Device UUID is:fffff ");
    // console.log("Device UUID is: " + this.device);
    // console.log("Device UUID is: " + JSON.stringify(this.device));
    // console.log("Device platform is: " + this.device.platform);
    // console.log("Device model is: " + this.device.model);
    // console.log("Device version is: " + this.device.version);
    // console.log("Device manufacturer is: " + this.device.manufacturer);
    // console.log("Device serial is: " + this.device.serial);
console.log(this.push)
    const pushObject: PushObject = this.push.init(options);

    pushObject
      .on("notification")
      .subscribe((notification: any) =>{

        
        console.log("Received a notification", notification)
      }
       
      );
    console.log("push keysss");

    pushObject.on("registration").subscribe((registration: any) => {
      console.log("Dveice registered", registration);
      //this.devicedetails.pushuserid = registration.registrationId;
    });

    pushObject
      .on("error")
      .subscribe(error => console.error("Error with Push plugin", error));
  }

  devicepushregistration(memberId,isemp) {
    console.log(memberId);
    console.log(isemp);
    console.log("functions entred");
    this.createpushnotifyId().then((data)=>{
      console.log("createnotify id entred");
      console.log(data);
      let myparams = new URLSearchParams();
    myparams.append("employeeId", this.useremployee);
    myparams.append("clientId", this.client);
console.log("device ready devicepushregistration");
    console.log("Device UUID is:fffff ");
    console.log("Device UUID is: " + this.device);
    console.log("Device UUID is: " + JSON.stringify(this.device));
    console.log("Device platform is: " + this.device.platform);
    console.log("Device model is: " + this.device.model);
    console.log("Device version is: " + this.device.version);
    console.log("Device manufacturer is: " + this.device.manufacturer);
    console.log("Device serial is: " + this.device.serial);

    this.devicedetails.uuid = this.device.uuid;
    this.devicedetails.model = this.device.model;
    this.devicedetails.devPlat = this.device.platform;
    this.devicedetails.version = this.device.version;
    this.devicedetails.devmanf = this.device.manufacturer;
    this.devicedetails.devserial = this.device.serial;
    if(isemp)
    {
      this.devicedetails.employeeId = memberId;
      this.devicedetails.clientId = null;
    }
    else
    {
      this.devicedetails.clientId = memberId;
      this.devicedetails.employeeId = null;
    }

    //  this.devicedetails.pushuserid=this.device.pushu
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    //this.devicedetails = JSON.stringify( this.devicedetails);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    // let url = "api/OutcomeEntries/addoutcomedetail";
    let url = "api/Auth/savedevicedetails";
    this.http.post(url , this.devicedetails, httpOptions).subscribe(
      (data: any) => {
        console.log(data);

        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
    },(err)=>{
      console.log("error function in data")
      console.log(err)
    })


    
  }
}

export class detailsvalue {
  public employeeId: number;
  public clientId: number;
  public uuid: string;
  public devPlat: string;
  public model: string;
  public version: string;
  public devmanf: string;
  public devserial: string;
  public pushuserid: string;
}
