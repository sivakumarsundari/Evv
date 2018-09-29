import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CgblockcalendarPage } from '../cgblockcalendar/cgblockcalendar';
import {CgprofilenewPage} from '../cgprofilenew/cgprofilenew';
import { PopoverController } from 'ionic-angular';
import { CgpopoverPage } from '../cgpopover/cgpopover';
/**
 * Generated class for the CgtimesheetcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgtimesheetcalendar',
  templateUrl: 'cgtimesheetcalendar.html',
})
export class CgtimesheetcalendarPage {

  displayEvent: any;
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {
  }
  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listMonth'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2018-03-01',
        },
        {
          title: 'Long Event',
          start: '2018-03-07',
          end: '2018-03-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2018-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2018-03-11',
          end: '2018-03-13'
        },
        {
          title: 'Meeting',
          start: '2018-03-12T10:30:00',
          end: '2018-06-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2018-06-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2018-0-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2018-07-02T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2018-07-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2018-07-18T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2018-06-28'
        }
      ]
    };
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
  blockcal(){
    this.navCtrl.push(CgblockcalendarPage);
  }

  test(){
    this.navCtrl.push(CgprofilenewPage);
        }
        presentPopover(myEvent) {
          let popover = this.popoverCtrl.create(CgpopoverPage);
          popover.present({
            ev: myEvent
          });
        }
}



