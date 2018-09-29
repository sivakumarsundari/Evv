import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, LoadingController } from 'ionic-angular';
import { CgmissingtimesheetPage } from '../cgmissingtimesheet/cgmissingtimesheet';
import { HttpClient } from '@angular/common/http';
import { GlobalPage } from '../global/global';
import { ScheduledappointmentPage } from '../scheduledappointment/scheduledappointment';
import { EligibilitydetailsPage } from '../eligibilitydetails/eligibilitydetails';
/**
 * Generated class for the CgprofilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgprofilepage',
  templateUrl: 'cgprofilepage.html',
})
export class CgprofilepagePage {

  contents: content[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController,public global : GlobalPage) {
    this.contents = [{
      name: "Tom Moscow",
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  CurrentDt: Date = new Date();
  clientData: any;
  clientName: string;
  ionViewWillEnter() {
    
    let client = this.navParams.get("clientData");
    let employeeId: any = 5;
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let url = "api/CgCareRecipientsLst/RecipientDetail?";
    let myParams = new URLSearchParams();
    myParams.append("EmployeeId", this.global.employeeId.toString());
    myParams.append("clientId", client.clientId);

    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);

        this.clientData = data;
        
        if (data != null) {
          this.clientName = data.clientName;
        }
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }
  schedule(clientData){
    console.log(clientData)
        this.navCtrl.push(ScheduledappointmentPage,{"clientData":clientData})
  }
  eligibility(){
    this.navCtrl.push(EligibilitydetailsPage)
  }

  alertbutton(clientData) {
    
    this.navCtrl.push(CgmissingtimesheetPage,{"clientData":clientData});
   
  }

}


export class content {
  name: string;
}
