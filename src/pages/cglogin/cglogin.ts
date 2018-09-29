import { Notification } from 'rxjs/Rx';
import { Component, state } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, LoadingController,Platform } from 'ionic-angular';
import {CgpersonalizePage} from '../cgpersonalize/cgpersonalize';
import { CgtabpagesPage } from '../cgtabpages/cgtabpages';
import { RedashboardPage } from '../redashboard/redashboard';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { GlobalPage } from '../global/global';
import {ForgotpasswordPage} from '../forgotpassword/forgotpassword';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { UserdetailsPage } from '../userdetails/userdetails';
// import {CgprofilenewPage} from '../cgprofilenew/cgprofilenew';
/**
 * Generated class for the CgloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cglogin',
  templateUrl: 'cglogin.html',
})
export class CgloginPage {
  warning: boolean;
  Errors: any;
  user:any="";
  psw:any="";
  cname:String="Jessica";
  pass:any=12345;
  rname:String="tom";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient,public storage :Storage , public global:GlobalPage,
    public loadingCtrl: LoadingController,private localNotifications: LocalNotifications,private platform:Platform,public usdet :UserdetailsPage) {

//       this.platform.ready().then(() => {
//         this.localNotifications.on('click',(notification,state)=>{
// alert(notification.data);
// alert(state);
//         }
//         );
//       });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgloginPage');
  }
 
  login(){
    if(this.user==this.cname&&this.psw==this.pass){
      this.navCtrl.push(CgtabpagesPage);
     }
     if(this.user==this.rname&&this.psw==this.pass){
      this.navCtrl.push(RedashboardPage);
     }
     if(this.user!=this.rname&&this.psw!=this.pass){
      alert("Invalid ")
     }
     
}

forgot(){
  this.navCtrl.push(ForgotpasswordPage);
  }
  
loginhttp()
     {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      let url = "api/Auth/login?";
      let myParams = new URLSearchParams();
      myParams.append("userName", this.user);
      myParams.append("password", this.psw);
      this.http.get(url + myParams).subscribe(
        (data: any) => {
          console.log(data);
          this.global.Adddata(data);
          this.storage.set("loginAuth",data);

          // this.storage.get("loginAuth").then((val)=>{
          //   console.log("Stored Data..........................");
          //   console.log(val);
           
          // });

          

          console.log(data.userdetail);
          loading.dismiss();
          if(data.userdetail.isEmployee)
          {console.log("employee detail ");
          this.usdet.devicepushregistration(data.userdetail.employeeId,true);
            this.navCtrl.push(CgtabpagesPage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(0, index);
            });;
          }
         else if(data.userdetail.isClient)
          {
            this.navCtrl.push(RedashboardPage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(0, index);
            });;
          }
          else{
            alert("Invalid ")
          }
        }
        ,
      err => {
        this.warning = true;
        this.Errors = err.error;
        console.log(err);
        console.log(err.error);
        setTimeout(
          function () {
            this.warning = false;
            //  console.log(this.warning);
          }.bind(this),
          6000
        );
       loading.dismiss();
      }
    );
     }

  //   test(){
  //     this.platform.ready().then(() => {
  //       this.localNotifications.schedule({
  //         id: 1,
  //         title:'HIII',
  //         text: 'Delayed ILocalNotification',
  //         trigger: {at: new Date(new Date().getTime() + 3600)},
  //         led: 'FF0000',
  //         sound: null,
  //         data:{"id":1,"name":"Mr.360"}
  //      });
  //   });
  // }

}