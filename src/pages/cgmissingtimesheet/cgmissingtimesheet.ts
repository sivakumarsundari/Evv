import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CgreviewPage } from '../cgreview/cgreview';
import { CgmissingtimesheetmonthPage } from '../cgmissingtimesheetmonth/cgmissingtimesheetmonth';
import { HttpClient } from '@angular/common/http';
import {CgcompletetimesheetPage} from '../cgcompletetimesheet/cgcompletetimesheet';
import { GlobalPage } from '../global/global';
import {CgprofilenewPage} from '../cgprofilenew/cgprofilenew';
import { AddentriesPage } from '../addentries/addentries';
import { CgmultipletimesheetPage } from '../cgmultipletimesheet/cgmultipletimesheet';
/**
 * Generated class for the CgmissingtimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgmissingtimesheet',
  templateUrl: 'cgmissingtimesheet.html',
})
export class CgmissingtimesheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController, public global :GlobalPage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgmissingtimesheetPage');
  }
  clientData: any;
  clientName: string;
  CName: String;
  monthlist: any = [];
  missingTimeSheet: any =[];
  clientNumber:number;
  ismale:any;
  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let client = this.navParams.get("clientData");
    this.clientName = client.clientName;
    this.ismale=client.isMale;
    let employeeId: any = 5;
    console.log(this.clientName);
    console.log(this.global.employeeId);
    this.clientNumber = client.clientId;
    console.log(this.clientNumber);
    
    let url = "api/CgCareRecipientsLst/RecipientCareHistoryList?";
    let myParams = new URLSearchParams();
    myParams.append("EmployeeId", this.global.employeeId.toString());
    myParams.append("clientId", client.clientId);

    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log("hi");
        
        console.log(data);

        this.clientData = data;
        if (data != null) {
         
          
          this.monthlist = data.monthlist;
          this.missingTimeSheet=data.missingTimeSheet;
        }
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }

  complete() {
    console.log("missingTimeSheet");
    console.log(this.clientNumber);
    
 //   alert(miss);
  this.navCtrl.push(CgmultipletimesheetPage,{"clientid": this.clientNumber}); 
  // ,"scheduleId":miss.scheduleid,"timecardId":miss.timecardId
   // this.navCtrl.push(Cgreview1Page);
  }

  error(clientData) {
    
     this.navCtrl.push(CgmissingtimesheetmonthPage,{"clientData":clientData});
     }

     
     test(){
      this.navCtrl.push(CgprofilenewPage);
          }
 add(){
    this.navCtrl.push(AddentriesPage,{"clientno":this.clientNumber});
       }

    }

