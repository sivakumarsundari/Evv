import { FullCalendarModule } from 'ng-fullcalendar';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CgtimesheetcalendarPage } from './cgtimesheetcalendar';


@NgModule({
  declarations: [
    CgtimesheetcalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CgtimesheetcalendarPage),
    FullCalendarModule,
  ],
})
export class CgtimesheetcalendarPageModule {}
