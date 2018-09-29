import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalPage } from '../global/global';

/**
 * Generated class for the CgmonthtimeentriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgmonthtimeentries',
  templateUrl: 'cgmonthtimeentries.html',
})
export class CgmonthtimeentriesPage {
  mismontcdetails:any;
  isEdit:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global :GlobalPage,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CgmonthtimeentriesPage');
  }
  ionViewWillEnter() {
    this.mismontcdetails= this.navParams.get("monthtimeentry");
    console.log("review valuee");
    console.log(this.mismontcdetails);
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

}
