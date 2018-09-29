import { Input } from "@angular/compiler/src/core";
import { Component } from "@angular/core";
import { AlertController, ToastController } from 'ionic-angular';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { CgloginPage } from "../cglogin/cglogin";
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-forgotpassword",
  templateUrl: "forgotpassword.html"
})
export class ForgotpasswordPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public http: HttpClient,
    private alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}
  errors: string;
  username: string;
  pswdrstId: number;
  entreotp: boolean = false;
  entrepss: boolean = false;
  otpdetail: number;
  chanpass:string;
  rechanpass:string;
  warning: boolean;
  success: boolean;
  Errors: string;
  Evvid:number;
  newwarning:boolean;
  otpemailsent:string = "";
  ionViewDidLoad() {
    console.log("ionViewDidLoad ForgotpasswordPage");
  }

  login() {
    this.navCtrl.push(CgloginPage);
  }

  checkusername(username) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    console.log(username);

    loading.present();
    let url = "api/Auth/resetpassword?";
    let myParams = new URLSearchParams();
    myParams.append("userName", username);
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);

        this.pswdrstId = data.resetPasswordId;
        this.otpemailsent = data.emaildetail;
        this.entreotp = true;
        loading.dismiss();
      },
      err => {
        this.warning = true;
        this.errors = err.error;
        console.log(err);
        loading.dismiss();
        setTimeout(function () {
          this.warning = false;
        }.bind(this), 6000);
      });
  }

  validateotp() {
    console.log(this.pswdrstId);
    console.log(this.otpdetail);

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();
    let url = "api/Auth/verifyOTP?";
    let myParams = new URLSearchParams();
    myParams.append("ResetpasswordId", this.pswdrstId.toString());
    myParams.append("otp", this.otpdetail.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
       // this.pswdrstId = data;
        this.entrepss = true;
        this.Evvid = data;
        loading.dismiss();
       
      },
      err => {
        this.warning = true;
        this.errors = err.error;
        console.log(err);
        loading.dismiss();
        setTimeout(function () {
          this.warning = false;
        }.bind(this), 6000);
      });
  }

  changereentrepass()
  {
    console.log(this.Evvid);
    console.log(this.chanpass);
    if(this.chanpass == this.rechanpass)
    {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
 
  
      loading.present();
      let url = "api/Auth/changepss?";
      let myParams = new URLSearchParams();
      myParams.append("Evvid", this.Evvid.toString());
      myParams.append("password", this.chanpass);
      this.http.get(url + myParams).subscribe(
        (data: any) => {
          console.log(data);
          loading.dismiss();
          this.sucessalertpw();
          // this.navCtrl.push(CgloginPage);
          
        },
        err => {
          this.errors = err.error;
          this.warning = true;
    
          console.log(err);
          loading.dismiss();
          setTimeout(function () {
            this.warning = false;
          }.bind(this), 6000);
        });
        
    }

    else{
      this.newwarning = true;
      this.Errors ="Enter Password is Mismatching";
      setTimeout(function() {
        this.newwarning = false;
        
    }.bind(this), 6000);
      // const toast = this.toastCtrl.create({
      //   message: 'Enter password is Mismatching',
      //   duration: 5000,
      //   position: 'Top',
      //   showCloseButton:true,
      //   closeButtonText:"x"
      // });
      // toast.present();
     }

  }
///for alert
  sucessalertpw() {
    let alert = this.alertCtrl.create({
      // title: 'Sucess',
      message: 'Password Changed Successfully',
      buttons: [
        // {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // },
        {
          text: 'Login',
          handler: () => {
            console.log('Cancel clicked');
             this.login();
          }
        }
      ]
    });
    alert.present();
  }

}
