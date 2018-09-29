import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { CgloginPage } from "../pages/cglogin/cglogin";
import { RedashboardPage } from "../pages/redashboard/redashboard";
import { Storage } from "@ionic/storage";
import { CgtabpagesPage } from "../pages/cgtabpages/cgtabpages";
import { GlobalPage } from "../pages/global/global";
import { Push, PushObject, PushOptions } from "@ionic-native/push";
import { Device } from "@ionic-native/device";
import { UserdetailsPage } from "../pages/userdetails/userdetails";
// import { SettingProvider } from '../providers/setting/setting';
// import { AndroidPermissions } from '@ionic-native/android-permissions';
 

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  selectedTheme: String;
  rootPage: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storage1: Storage,
    public global: GlobalPage,
    private push: Push,
    private device: Device,
    public usedet :UserdetailsPage,
    
  ) {
    platform.ready().then(() => {
      // this.push.hasPermission().then((res: any) => {
      //   if (res.isEnabled) {
      //     console.log("We have permission to send push notifications");
      //   } else {
      //     console.log("We do not have permission to send push notifications");
      //   }
      // });

      // private settings :SettingProvider
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      //   result => console.log('Has permission?',result.hasPermission),
      //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      // );
      // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

      // private androidPermissions: AndroidPermissions
      // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.GEOLOCATION).then(
      //   result => console.log('Has permission?',result.hasPermission),
      //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.GEOLOCATION)
      // );
      
      // this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.GEOLOCATION, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);

      statusBar.styleDefault();
      splashScreen.hide();
      // if(global.employeeId != null || global.clientId != null)
      // {
      //   console.log(global.employeeId);
      //   console.log("global pages");
      //   if(global.isEmployee)
      //   {
      //     this.rootPage=CgtabpagesPage;
      //   }
      //   else if (global.isClient)
      //   {
      //     this.rootPage=RedashboardPage;
      //   }
      //   else
      //   {
      //     this.rootPage = CgloginPage;
      //   }
      // }
      // else
      // {
        console.log('We have permission to send push notifications');
        console.log('We have permission to send push notifications');
        this.push.hasPermission()
        .then((res: any) => {
      
          if (res.isEnabled) {
            console.log('We have permission to send push notifications');
          } else {
            console.log('We do not have permission to send push notifications');
          }
      
        });
        this.usedet.pushsetup();

      console.log("storage page");
      storage1.get("loginAuth").then(val => {
        if (val == null) {
          this.rootPage = CgloginPage;
          //this.rootPage=RedashboardPage;
        } else {
          this.global.Adddata(val);
          if (val.userdetail.isEmployee) {
            this.rootPage = CgtabpagesPage;
            // this.rootPage=RedashboardPage;
          } else {
            this.rootPage = RedashboardPage;
          }
        }
        console.log(val);
        console.log("Stored Data..........................");
      });
     // this.pushsetup();
      // this.settings
      //   .getActiveTheme()
      //   .subscribe(val => (this.selectedTheme = val));
      // }
    });
  }

  
}
