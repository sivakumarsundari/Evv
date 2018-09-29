import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,LoadingController } from 'ionic-angular';
import { RecarehistoryPage } from '../recarehistory/recarehistory';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { App } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
  
})
export class PopoverPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,
    public alertCtrl: AlertController,public storage: Storage,public loadingCtrl: LoadingController,
    public app: App) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');

  }
  carehistory(){
    //  this.navCtrl.push(RecarehistoryPage);
     this.viewCtrl.dismiss().then(() => {
      this.app.getRootNav().push(RecarehistoryPage);
    });
  }
  
  logout() {
    let loading = this.loadingCtrl.create({
      content: 'Logging out...'
    });
    console.log();
    this.storage.remove("loginAuth");
    let alert = this.alertCtrl.create({
      title: 'Do you want to Logout?',
      //  message: 'Do you want to Logout the session?',
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
     this.viewCtrl.dismiss()
    }
    alert.present();
  }
  }