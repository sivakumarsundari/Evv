import { IonicStorageModule } from '@ionic/storage';
import { CgtabpagesPage } from '../pages/cgtabpages/cgtabpages';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { CgloginPage } from '../pages/cglogin/cglogin';
import {CgpersonalizePage} from '../pages/cgpersonalize/cgpersonalize';
import { FullCalendarModule } from 'ng-fullcalendar';
import {CgprofilepagePage} from '../pages/cgprofilepage/cgprofilepage';
import {CgtimesheetcalendarPage} from '../pages/cgtimesheetcalendar/cgtimesheetcalendar';
import {CgmissingtimesheetPage} from '../pages/cgmissingtimesheet/cgmissingtimesheet';
import {CgreviewPage} from '../pages/cgreview/cgreview';
import {CgmissingtimesheetmonthPage} from '../pages/cgmissingtimesheetmonth/cgmissingtimesheetmonth';
import {CgcompletetimesheetPage} from '../pages/cgcompletetimesheet/cgcompletetimesheet';
import { CgpersonalizephotouploadPage } from '../pages/cgpersonalizephotoupload/cgpersonalizephotoupload';
import { CgpersonalizephotoeditPage } from '../pages/cgpersonalizephotoedit/cgpersonalizephotoedit';
import { CgpersonalizedetailsPage } from '../pages/cgpersonalizedetails/cgpersonalizedetails';
import { CgpersonalizeexperiencePage } from '../pages/cgpersonalizeexperience/cgpersonalizeexperience';
import { CgpersonalizecertificatePage } from '../pages/cgpersonalizecertificate/cgpersonalizecertificate';
import { CgviewappointmentPage } from '../pages/cgviewappointment/cgviewappointment';
import { CgblockcalendarPage } from '../pages/cgblockcalendar/cgblockcalendar';
import { CgblockcalendarrepeatPage } from '../pages/cgblockcalendarrepeat/cgblockcalendarrepeat';
import { RedashboardPage } from '../pages/redashboard/redashboard';
import { ReviewappointmentPage } from '../pages/reviewappointment/reviewappointment';
import { RecarehistoryPage } from '../pages/recarehistory/recarehistory';
import { RecarehistorymonthPage } from '../pages/recarehistorymonth/recarehistorymonth';
import { RecarehistorymonthdetailsPage } from '../pages/recarehistorymonthdetails/recarehistorymonthdetails';
import { SignatureverificationPage } from '../pages/signatureverification/signatureverification';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ReapprovetimesheetPage } from '../pages/reapprovetimesheet/reapprovetimesheet';
import { ResignatureverificationPage } from '../pages/resignatureverification/resignatureverification';
import { ReprofilePage } from '../pages/reprofile/reprofile';
import {CgdashboardPage} from '../pages/cgdashboard/cgdashboard';
import {CgtimesheetcarerecipientsPage} from '../pages/cgtimesheetcarerecipients/cgtimesheetcarerecipients';
import {CgtimesheetprofilePage} from '../pages/cgtimesheetprofile/cgtimesheetprofile';
import { AuthProvider } from '../providers/auth/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { GlobalPage } from '../pages/global/global';
import { PopoverPage } from '../pages/popover/popover';
import { Geolocation } from '@ionic-native/geolocation';
import {CgprofilenewPage} from '../pages/cgprofilenew/cgprofilenew';
import {CgpopoverPage} from '../pages/cgpopover/cgpopover';
import { EligibilitydetailsPage } from '../pages/eligibilitydetails/eligibilitydetails';
import { ScheduledappointmentPage } from '../pages/scheduledappointment/scheduledappointment';
import { Camera } from '../../node_modules/@ionic-native/camera';
import { NativeGeocoder } from '../../node_modules/@ionic-native/native-geocoder';
// import {TimeModelPage} from '../pages/time-model/time-model';
import {ForgotpasswordPage} from '../pages/forgotpassword/forgotpassword';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CgmultipletimesheetPage } from '../pages/cgmultipletimesheet/cgmultipletimesheet';
import { RemultipletimesheetPage } from '../pages/remultipletimesheet/remultipletimesheet';
import { Push } from '@ionic-native/push';
// import { SettingProvider } from '../providers/setting/setting';
import{Device } from '@ionic-native/device'
import { UserdetailsPage } from '../pages/userdetails/userdetails';
import { AddentriesPage } from '../pages/addentries/addentries';
import { CgmulsignaturePage } from '../pages/cgmulsignature/cgmulsignature';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { CgnonschreviewPage } from '../pages/cgnonschreview/cgnonschreview';
import { CgnonschsignaturePage } from '../pages/cgnonschsignature/cgnonschsignature';
import { CgmonthtimeentriesPage } from '../pages/cgmonthtimeentries/cgmonthtimeentries';
 import { Diagnostic } from '@ionic-native/diagnostic';
 import { LocationAccuracy } from '@ionic-native/location-accuracy';

@NgModule({
  declarations: [
    MyApp,
    CgloginPage,
    CgpersonalizePage,
    CgtabpagesPage,
    CgprofilepagePage,
    CgtimesheetcalendarPage,
    CgmissingtimesheetPage,
    CgmultipletimesheetPage,
    CgnonschsignaturePage,
    CgreviewPage,
    CgmissingtimesheetmonthPage,
    CgcompletetimesheetPage,
    SignatureverificationPage,
    CgpersonalizephotouploadPage,
    CgpersonalizephotoeditPage,
    CgpersonalizedetailsPage,
    CgpersonalizeexperiencePage,
    CgpersonalizecertificatePage,
    CgmonthtimeentriesPage,
    CgviewappointmentPage,
    CgblockcalendarPage,
    CgblockcalendarrepeatPage,
    CgnonschreviewPage,
    RedashboardPage,
    ReviewappointmentPage,
    RecarehistoryPage,
    RecarehistorymonthPage,
    RecarehistorymonthdetailsPage,
    ReapprovetimesheetPage,
    RemultipletimesheetPage,
    ResignatureverificationPage,
    ReprofilePage,
    CgdashboardPage,
    CgtimesheetcarerecipientsPage,
    CgtimesheetprofilePage,
    GlobalPage,
    PopoverPage,
   CgprofilenewPage,
   CgpopoverPage,
   EligibilitydetailsPage,
   ScheduledappointmentPage,
   ForgotpasswordPage,
   UserdetailsPage,
   AddentriesPage,
   CgmulsignaturePage
   
  ],
  imports: [
    FullCalendarModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    SignaturePadModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CgloginPage,
    CgpersonalizePage,
    CgtabpagesPage,
    CgprofilepagePage,
    CgtimesheetcalendarPage,
    CgmissingtimesheetPage,
    CgmultipletimesheetPage,
    CgreviewPage,
    CgmissingtimesheetmonthPage,
    CgcompletetimesheetPage,
    SignatureverificationPage,
    CgpersonalizephotouploadPage,
    CgpersonalizephotoeditPage,
    CgpersonalizedetailsPage,
    CgpersonalizeexperiencePage,
    CgpersonalizecertificatePage,
    CgviewappointmentPage,
    CgnonschsignaturePage,
    CgmonthtimeentriesPage,
    CgblockcalendarPage,
    CgblockcalendarrepeatPage,
    CgnonschreviewPage,
    RedashboardPage,
    ReviewappointmentPage,
    RecarehistoryPage,
    RecarehistorymonthPage,
    RecarehistorymonthdetailsPage,
    ReapprovetimesheetPage,
    ResignatureverificationPage,
    ReprofilePage,
    CgdashboardPage,
    CgtimesheetcarerecipientsPage,
    CgtimesheetprofilePage,
    GlobalPage,
    PopoverPage,
    CgprofilenewPage,
    CgpopoverPage,
    EligibilitydetailsPage,
    ScheduledappointmentPage,
    ForgotpasswordPage,
    UserdetailsPage,
    AddentriesPage,
    CgmulsignaturePage
    // TimeModelPage
    
  ],
  providers: [
    Push,
    StatusBar,
    SplashScreen,
    GlobalPage,
    UserdetailsPage,
    Geolocation,
    LocalNotifications,
   // AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthProvider,
      multi: true
    },
    Camera,
    NativeGeocoder,
    Device ,
    Diagnostic,
    LocationAccuracy
   // SettingProvider,
    // AuthProvider
  ]
})
export class AppModule {}
