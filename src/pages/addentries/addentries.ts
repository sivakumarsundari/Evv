import { Component } from '@angular/core';
import { GlobalPage } from '../global/global';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CgmulsignaturePage } from '../cgmulsignature/cgmulsignature';
import { CgnonschreviewPage } from '../cgnonschreview/cgnonschreview';

/**
 * Generated class for the AddentriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addentries',
  templateUrl: 'addentries.html',
})
export class AddentriesPage {
  stdt: Date = new Date();
  det:any=[];
  reviewload: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public global: GlobalPage, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddentriesPage');
  }

  missednonsch: any = [];
  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let clientno = this.navParams.get("clientno");
    //this.clientName = client.clientName;


    let url = "api/Cgmultipletc/cdnonschmised?";
    let myParams = new URLSearchParams();
    myParams.append("EmployeeId", this.global.employeeId.toString());
    myParams.append("ClientId", clientno);
    myParams.append("AgencyId", this.global.agencyId.toString());

    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        if (data != null) {
          this.missednonsch = data.cgnonschedule;
          this.det=this.missednonsch.jobTaskdet;
        }


        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }

  //   review(){
  //     if(this.stdt!=this.stdt)
  //      this.navCtrl.pop();
  //     else{
  //     let alert = this.alertCtrl.create({

  //       message: "You've entered time that overlaps with an exsisting time entry",
  //       cssClass: "buttonCss",

  //       buttons: [
  //         { 

  //           text: "I'll use existing time entry",
  //           // cssClass: 'popup-dark',
  //           handler: data => {
  //             console.log("ok clicked");
  //             this.navCtrl.pop();

  //           }
  //         },
  //         {
  //           text: "Replace Time Entry",
  //           handler: data => {
  //             console.log("ok clicked");
  //             this.navCtrl.pop();
  //           }
  //         },

  //       ]
  //     });
  //     alert.present();
  // }
  //   }
  reviewreturn: any;
  review(nonschdet) {
    if (this.reviewload) {
      console.log(nonschdet);
      var databindval = {
        "ClientId": nonschdet.clientId,
        "EmpId": nonschdet.employeeId,
        "stdtm": nonschdet.tcstdt,
        "ettmdt": nonschdet.tceddt
      };
      var databindval1 = JSON.stringify(databindval);
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      console.log(databindval1);
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: "my-auth-token"
        })
      };
      let url = "api/Cgmultipletc/nonschreview?";
      this.http.post(url, databindval1, httpOptions).subscribe(
        (data: any) => {
          loading.dismiss();
          this.reviewreturn = data;
          this.reviewload = false;
          console.log(this.reviewreturn);
          if (this.reviewreturn != null) {
            // this.nonschdetailsoverlap(data).subscribe((data1:any)=>
            // {

            // });
            let alert = this.alertCtrl.create({

              message: "You've entered time that overlaps with an exsisting time entry",
              cssClass: "buttonCss",

              buttons: [
                {

                  text: "I'll use existing time entry",
                  handler: data => {
                    // overlapval.requesttime=true;
                    console.log("ok clicked");
                    // return false;
                    //  reject();
                    this.navCtrl.push(CgnonschreviewPage, { "nonschdata": nonschdet });
                    //  this.navCtrl.pop();

                  }
                },
                {
                  text: "Replace Time Entry",
                  handler: data => {
                    nonschdet.tcstdt = this.reviewreturn.startDT;
                    nonschdet.tceddt = this.reviewreturn.endDT;
                    // this.req = true;
                    // this.reqdata = overlapval;
                    // overlapval.requesttime = true;
                    // console.log(overlapval.requesttime);
                    // resolve();
                    console.log("ok clicked");
                    console.log(nonschdet);
                    
                    this.navCtrl.push(CgnonschreviewPage, { "nonschdata": nonschdet });
                    // this.navCtrl.pop();
                  }
                },

              ]
            });
            alert.present();


          }
          else{
            this.navCtrl.push(CgnonschreviewPage, { "nonschdata": nonschdet });
          }
          

        },
        err => {
          console.log(err);
          loading.dismiss();
        });
    }
    else {
      this.navCtrl.push(CgnonschreviewPage, { "nonschdata": nonschdet });
    }



  }
  isCompleted:boolean=true;
  count:number=0;
  nction(jobdet){
    console.log("completete");
    console.log(jobdet);
    if(jobdet.isCompleted==false){
      this.count=this.count+1;
      if(this.count==this.det.length){
        console.log("value got");
        
        this.isCompleted=false;
      }
     
      
    }
    
  }
  nction1(jobdet){
    console.log("true val");
    
      this.isCompleted=true;
  
    
  }
  req: boolean = false;
  reqdata: any;
  nonschdetailsoverlap() {
    // return new Promise((resolve, reject) => {
    console.log("value got");

    let alert = this.alertCtrl.create({

      message: "You've entered time that overlaps with an exsisting time entry",
      cssClass: "buttonCss",

      buttons: [
        {

          text: "I'll use existing time entry",
          // cssClass: 'popup-dark',
          handler: data => {
            // overlapval.requesttime=true;
            console.log("ok clicked");
            return false;
            //  reject();
            //  this.navCtrl.pop();

          }
        },
        {
          text: "Replace Time Entry",
          handler: data => {
            // this.req = true;
            // this.reqdata = overlapval;
            // overlapval.requesttime = true;
            // console.log(overlapval.requesttime);
            // resolve();
            console.log("ok clicked");
            // this.navCtrl.pop();
          }
        },

      ]
    });
    alert.present();

    //  });
    //  console.log("over", overlapval);
    // console.log("schdet",nonschdet);


    // if(overlapval!=null&&overlapval.requesttime==false){

  }
  // else{
  //   this.navCtrl.push(CgnonschreviewPage,{"nonschdata":nonschdet})
  // }

}


