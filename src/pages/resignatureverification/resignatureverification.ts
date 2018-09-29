import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams,LoadingController } from "ionic-angular";
import { SignaturePad } from "angular2-signaturepad/signature-pad";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { GlobalPage } from "../global/global";

/**
 * Generated class for the ResignatureverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-resignatureverification",
  templateUrl: "resignatureverification.html"
})
export class ResignatureverificationPage {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  submitTcdet: any;

  private signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController,
    public global:GlobalPage,
    public loadingCtrl: LoadingController,
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ResignatureverificationPage");
  }
  ionViewWillEnter() {
    this.submitTcdet = this.navParams.get("timesheetdetail");
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
    this.submitTcdet.clientSign = this.signaturePad.toDataURL();
  }

  drawstart:boolean=false;
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log("begin drawing");
    this.drawstart=true;
  }
  cancel() {
    this.navCtrl.pop();
    this.navCtrl.pop();
  }
  submittimesheetcompleted() {
    const alert = this.alertCtrl.create({
      cssClass: "buttonCss5",
      title: "Thank you!",
      message: "Your visit details have been signed and submitted for processing.",

      buttons: [
        {
          text: "Ok",
          handler: data => {
            console.log("ok clicked");
            this.navCtrl.pop();
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
  submittimesheet() {
    this.submitTcdet = JSON.stringify(this.submitTcdet);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    // let url = "api/OutcomeEntries/addoutcomedetail";
    let url = "api/ReTimesheet/completeMTC";
    this.http.post(url, this.submitTcdet, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
        this.global.isredashrelaod = true;
        this.submittimesheetcompleted();
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
