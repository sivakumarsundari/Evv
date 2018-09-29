import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ViewController } from 'ionic-angular';
import { RecarehistorymonthPage } from '../recarehistorymonth/recarehistorymonth';
import { HttpClient } from '@angular/common/http';
import { GlobalPage } from '../global/global';

/**
 * Generated class for the RecarehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recarehistory',
  templateUrl: 'recarehistory.html',
})
export class RecarehistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    public loadingCtrl: LoadingController,public viewCtrl:ViewController,public global :GlobalPage ) {
  }

  clientData: any;
  clientName: string;
  monthlist: any = [];
  missingTimeSheet: any = [];
  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let url = "api/ReCareHistory/ReCareMonthList?";
    let myParams = new URLSearchParams();
    myParams.append("clientId", this.global.clientId.toString());

    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);

        this.clientData = data;
        if (data != null) {
          this.monthlist = data;
          console.log("data");

          console.log(this.monthlist);
          
        }
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecarehistoryPage');
  }
  error(monthdata) {
    console.log(monthdata);

    this.navCtrl.push(RecarehistorymonthPage, { "monthdata": monthdata });
  }

}
