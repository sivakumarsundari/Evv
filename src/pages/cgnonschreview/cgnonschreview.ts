import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { GlobalPage } from '../global/global';
import { CgmulsignaturePage } from '../cgmulsignature/cgmulsignature';
import { CgnonschsignaturePage } from '../cgnonschsignature/cgnonschsignature';
import {HttpHeaders, HttpClient } from '@angular/common/http';

/**
 * Generated class for the CgnonschreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgnonschreview',
  templateUrl: 'cgnonschreview.html',
})
export class CgnonschreviewPage {
  nonschdetails:any;
  isEdit:boolean=false;
  clientId:any;
  EmpId:any;
  date:any;
  stdt:any;
  val:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global :GlobalPage,
    public http: HttpClient, public loadingCtrl: LoadingController,private alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgnonschreviewPage');
  }
  ionViewWillEnter() {
    this.nonschdetails= this.navParams.get("nonschdata");
    console.log("review valuee");
    console.log(this.nonschdetails);

   
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     Authorization: "my-auth-token"
    //   })
    // };
    // let url = "api/OutcomeEntries/addoutcomedetail";
    // let myparams=new URLSearchParams();
    // myparams.append("ClientId",this.clientId);
    // myparams.append("EmpId",this.EmpId);
    // myparams.append("date",this.date);
    // myparams.append("startdate",this.stdt);
    // console.log("hi",myparams);
    
    // let url = "api/Cgmultipletc/nonschreview?";
    // this.http.get(url+myparams).subscribe(
    //   (data: any) => {
    //     console.log("hi")
    //     console.log(data);
    //     loading.dismiss();
    //     this.nonschdetailsoverlap(data);
       
    //   },
    //   err => {
    //     console.log(err);
    //     loading.dismiss();
    //   });
    
  }
  nonschdetailsoverlap(overlapval){
    this.nonschdetails= this.navParams.get("nonschdata");
    if(overlapval==true){
      console.log("value got");
      
      let alert = this.alertCtrl.create({
      
              message: "You've entered time that overlaps with an exsisting time entry",
              cssClass: "buttonCss",
        
              buttons: [
                { 
                  
                  text: "I'll use existing time entry",
                  // cssClass: 'popup-dark',
                  handler: data => {
                    console.log("ok clicked");
                    this.navCtrl.pop();
                   
                  }
                },
                {
                  text: "Replace Time Entry",
                  handler: data => {
                    console.log("ok clicked");
                    this.navCtrl.pop();
                  }
                },
                
              ]
            });
            alert.present();
    }
    
  }
  edit(data){
    console.log(data);
    
    this.isEdit=true;
  }
  save1(nonschdetails){
    // console.log(nonschdetails);
    
    this.isEdit=false;
  }
  canceleditTC(){
    this.isEdit=false;
  }
  submit(submitteddata){
    this.navCtrl.push(CgnonschsignaturePage,{"nonschsubdata":submitteddata})
  }

}
