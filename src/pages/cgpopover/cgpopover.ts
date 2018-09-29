import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the CgpopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgpopover',
  templateUrl: 'cgpopover.html',
})
export class CgpopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController,
    public storage: Storage,public loadingCtrl: LoadingController,public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgpopoverPage');
  }

  logout() {
    let loading = this.loadingCtrl.create({
      content: 'Logging out...'
    });
    console.log();
    this.storage.remove("loginAuth");
    let alert = this.alertCtrl.create({
      title: 'Do you want to Logout?',
      // message: 'Do you want to Logout?',
      // cssClass: "buttonCssa",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            loading.present();
            window.location.reload();

            console.log('Logout');
          }
        }
      ]
    });
    this.viewCtrl.dismiss()
    loading.dismiss();
    err => {
      console.log(err);
      loading.dismiss();
    }
    alert.present();
  }

}
