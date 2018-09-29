import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GlobalPage } from '../global/global';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ScheduledappointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduledappointment',
  templateUrl: 'scheduledappointment.html',
})
export class ScheduledappointmentPage {
  // records2:record2[];
  clientData: any;
  clientId: any;
  schedulelist: any = [];
  clientName: string;
  constructor(public navCtrl: NavController, public glob: GlobalPage, public alertCtrl: AlertController, public http: HttpClient, public navParams: NavParams, public loadingCtrl: LoadingController, public global: GlobalPage) {
    // this.records2 = [
    //   {
    //     day:"Today",
    //     cname:"Barnes",
    //     starttime:"9:00 AM",
    //     stoptime:"11:00 AM",
    //     image:"assets/imgs/man.png"
    //   },
    //   {
    //     day:"6/23",
    //     cname:"Barnes",
    //     starttime:"11:00 AM",
    //     stoptime:"12:00 AM",
    //     image:"assets/imgs/man.png"
    //   },
    //   {
    //     day:"6/27",
    //     cname:"Barnes",
    //     starttime:"8:00 AM",
    //     stoptime:"11:00 AM",
    //     image:"assets/imgs/man.png"
    //   },
    //   {
    //     day:"5/30",
    //     cname:"Barnes",
    //     starttime:"8:30 AM",
    //     stoptime:"11:30 AM",
    //     image:"assets/imgs/man.png"
    //   },
    //   {
    //     day:"5/15",
    //     cname:"Barnes",
    //     starttime:"7:00 AM",
    //     stoptime:"10:00 AM",
    //     image:"assets/imgs/man.png"
    //   }
    // ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduledappointmentPage');
  }
  ionViewWillEnter() {

    let client = this.navParams.get("clientData");
    console.log(client)
    let employeeId: any = 5;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let url = "api/CgCareRecipientsLst/UpcomingAppt?";
    let myParams = new URLSearchParams();
    myParams.append("clientId", client.clientId);
    myParams.append("EmployeeId", this.global.employeeId.toString());



    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        // console.log('hi');


        this.schedulelist = data;
        // console.log(  this.schedulelist )


        // if (this.clientData  != null) {
        //   this.clientName = this.clientData.clientName;
        //   console.log( this.clientName )
        // }
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }
  // this.clientData = data;
  // if (data != null) {
  cancelreason: string = '';
  cancelapp(i) {
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

            this.cancelappoinment(i);

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
  cancelappoinment(candet) {
    console.log(candet);
    console.log("cancel appoinment");
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let url = "api/CgCareRecipientsLst/upcomingcanceSch?";
    let myParams = new URLSearchParams();
    myParams.append("scheduleId", candet.scheduleId.toString());
    myParams.append("agencyId", candet.agencyId.toString());
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
// export class record2 {
//   day:string;
//   cname:string;
//   starttime:string;
//   stoptime:string;
//   image:any;
// }