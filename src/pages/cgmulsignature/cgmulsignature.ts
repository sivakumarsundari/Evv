import { GlobalPage } from './../global/global';
import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController
} from "ionic-angular";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { CgcompletetimesheetPage } from "../cgcompletetimesheet/cgcompletetimesheet";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { Push } from '@ionic-native/push';
import { CgdashboardPage } from '../cgdashboard/cgdashboard';

/**
 * Generated class for the CgmulsignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgmulsignature',
  templateUrl: 'cgmulsignature.html',
})
export class CgmulsignaturePage {
  Signaturevalidations: any;
  signature:any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  completemultible: any;
  private signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public global :GlobalPage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignatureverificationPage");
  }
  ionViewWillEnter() {
    this.completemultible = this.navParams.get("mutisubvalue");
    console.log("review completedtc");
    console.log(this.completemultible);
    this.drawComplete();
  }
  canvasResize() {
    let canvas = document.querySelector("canvas");
    this.signaturePad.set("minWidth", 1);
    this.signaturePad.set("canvasWidth", canvas.offsetWidth);
    this.signaturePad.set("canvasHeight", canvas.offsetHeight);
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.canvasResize();
    this.drawstart=false;
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signature = this.signaturePad.toDataURL();
    this.Signaturevalidations=this.signaturePad.toDataURL();
    // console.log(this.Signaturevalidations);
  }
  drawstart:boolean=false;
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log("begin drawing");
    this.drawstart=true;
  }
  approvealert() {
 
    const alert = this.alertCtrl.create({
      title: "Thank you!",
      message: "Your visit details have been signed and submitted for processing.",
      // cssClass: "buttonCss5",

      buttons: [
        {
          text: "Ok",
          handler: data => {
            console.log("ok clicked");
            this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
            // this.navCtrl.pop();
            // this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  // ngOnInit() {
  //   this.Signaturevalidations=new FormGroup({
    
  //     signaturepad: new FormControl('', [
  //       Validators.required,
  //     ]),
  //   });
  // }


  cgmultible:any;
  datasent:any;

  approve() {
    this.cgmultible = this.completemultible;
     this.datasent = 
      {
        cgmultible:this.cgmultible,signature:this.signature
      }
    
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.datasent = JSON.stringify(this.datasent);
    console.log( this.datasent);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    // let url = "api/OutcomeEntries/addoutcomedetail";
    let url = "api/Cgmultipletc/savemuledittc?";
    this.http.post(url, this.datasent, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
        this.global.iscgdashreload = true;
        this.approvealert();
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }

  cancel() {
    this.navCtrl.pop();
   
    // this.navCtrl.push(CgcompletetimesheetPage);
  }
}
