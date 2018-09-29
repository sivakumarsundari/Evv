import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CgpersonalizePage } from '../cgpersonalize/cgpersonalize';
import { HttpClient } from '@angular/common/http';
import { GlobalPage } from '../global/global';
import {CgprofilenewPage} from '../cgprofilenew/cgprofilenew';
import { PopoverController } from 'ionic-angular';
import{CgpopoverPage} from '../cgpopover/cgpopover';
/**
 * Generated class for the CgtimesheetprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgtimesheetprofile',
  templateUrl: 'cgtimesheetprofile.html',
})
export class CgtimesheetprofilePage {
  sliderValue:number = 40;
  tspay:any = [];
  currentdate:Date = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public global:GlobalPage,
    public loadingCtrl: LoadingController,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgtimesheetprofilePage');
  }

  ionViewWillEnter() {
  let employ = 5;
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();
    let url = "api/CgTsPaydetail/gettspayment?";
    let myParams = new URLSearchParams();
    myParams.append("employeeId", this.global.employeeId.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        this.tspay = data;
        this.sliderValue = data.averageverification;
       // this.sliderValue = 97;
       loading.dismiss();

      },
    err => {
      console.log(err);
      loading.dismiss();
    });
  }

  personalize(){
    
    this.navCtrl.push(CgprofilenewPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(CgpopoverPage);
    popover.present({
      ev: myEvent
    });
  }
    
  // test(){
  //   this.navCtrl.push(CgprofilenewPage);
  //       }
  }

