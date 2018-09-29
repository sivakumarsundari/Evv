import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CgdashboardPage } from '../cgdashboard/cgdashboard';
import { CgtimesheetcalendarPage } from '../cgtimesheetcalendar/cgtimesheetcalendar';
import { CgtimesheetcarerecipientsPage } from '../cgtimesheetcarerecipients/cgtimesheetcarerecipients';
import { CgtimesheetprofilePage } from '../cgtimesheetprofile/cgtimesheetprofile';

/**
 * Generated class for the CgtabpagesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgtabpages',
  templateUrl: 'cgtabpages.html'
})
export class CgtabpagesPage {
  highlightElement: HTMLElement;
  cgdashboardRoot = CgdashboardPage;
  cgtimesheetcalendarRoot = CgtimesheetcalendarPage;
  cgtimesheetcarerecipientsRoot = CgtimesheetcarerecipientsPage;
  cgtimesheetprofileRoot = CgtimesheetprofilePage;


  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    //console..log('ionViewDidLoad TabsPage');
   
    this.highlightElement = <HTMLElement>document.querySelector(".tabs .tab-highlight"); 
    this.highlightElement.style.backgroundColor="#F57C00";
   // this.navCtrl.parent.select(2);
   
    // this.tabindex = this.navParams.get("podIndex");
  }
}
