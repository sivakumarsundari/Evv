webpackJsonp([44],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgtabpagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgdashboard_cgdashboard__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgtimesheetcalendar_cgtimesheetcalendar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgtimesheetcarerecipients_cgtimesheetcarerecipients__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgtimesheetprofile_cgtimesheetprofile__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CgtabpagesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgtabpagesPage = /** @class */ (function () {
    function CgtabpagesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cgdashboardRoot = __WEBPACK_IMPORTED_MODULE_2__cgdashboard_cgdashboard__["a" /* CgdashboardPage */];
        this.cgtimesheetcalendarRoot = __WEBPACK_IMPORTED_MODULE_3__cgtimesheetcalendar_cgtimesheetcalendar__["a" /* CgtimesheetcalendarPage */];
        this.cgtimesheetcarerecipientsRoot = __WEBPACK_IMPORTED_MODULE_4__cgtimesheetcarerecipients_cgtimesheetcarerecipients__["a" /* CgtimesheetcarerecipientsPage */];
        this.cgtimesheetprofileRoot = __WEBPACK_IMPORTED_MODULE_5__cgtimesheetprofile_cgtimesheetprofile__["a" /* CgtimesheetprofilePage */];
    }
    CgtabpagesPage.prototype.ionViewDidLoad = function () {
        //console..log('ionViewDidLoad TabsPage');
        this.highlightElement = document.querySelector(".tabs .tab-highlight");
        this.highlightElement.style.backgroundColor = "#F57C00";
        // this.navCtrl.parent.select(2);
        // this.tabindex = this.navParams.get("podIndex");
    };
    CgtabpagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgtabpages',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtabpages\cgtabpages.html"*/'<ion-tabs class="tabs-icon-text" [color]="isAndroid ? \'royal\' : \'primary\'" tabsHighlight="true">\n\n    <ion-tab [root]="cgdashboardRoot" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="cgtimesheetcalendarRoot"  tabIcon="calendar"></ion-tab>\n\n    <ion-tab [root]="cgtimesheetcarerecipientsRoot"  tabIcon="people"></ion-tab>\n\n    <ion-tab [root]="cgtimesheetprofileRoot"  tabIcon="contact"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtabpages\cgtabpages.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CgtabpagesPage);
    return CgtabpagesPage;
}());

//# sourceMappingURL=cgtabpages.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgtimesheetcalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_fullcalendar__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgblockcalendar_cgblockcalendar__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgprofilenew_cgprofilenew__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgpopover_cgpopover__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CgtimesheetcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgtimesheetcalendarPage = /** @class */ (function () {
    function CgtimesheetcalendarPage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    CgtimesheetcalendarPage.prototype.ngOnInit = function () {
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
    };
    CgtimesheetcalendarPage.prototype.clickButton = function (model) {
        this.displayEvent = model;
    };
    CgtimesheetcalendarPage.prototype.eventClick = function (model) {
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
        };
        this.displayEvent = model;
    };
    CgtimesheetcalendarPage.prototype.updateEvent = function (model) {
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
        };
        this.displayEvent = model;
    };
    CgtimesheetcalendarPage.prototype.blockcal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgblockcalendar_cgblockcalendar__["a" /* CgblockcalendarPage */]);
    };
    CgtimesheetcalendarPage.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */]);
    };
    CgtimesheetcalendarPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__cgpopover_cgpopover__["a" /* CgpopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ng_fullcalendar__["a" /* CalendarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ng_fullcalendar__["a" /* CalendarComponent */])
    ], CgtimesheetcalendarPage.prototype, "ucCalendar", void 0);
    CgtimesheetcalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgtimesheetcalendar',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtimesheetcalendar\cgtimesheetcalendar.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <!-- <ion-col col-2 style="padding: 0">\n\n          <button ion-button clear>\n\n            <ion-icon name="person" style="font-size: 30px;color: white" (click)="test()">\n\n              <ion-badge id="notifications-badge" color="danger">3</ion-badge>\n\n            </ion-icon>\n\n          </button>\n\n        </ion-col> -->\n\n        <ion-col  col-10>\n\n          <ion-title style="padding-left:20%">Timesheets</ion-title>\n\n        </ion-col>\n\n        <ion-col col-2 >\n\n          <button ion-button clear style="float: right" (click)="presentPopover($event)">\n\n              <ion-icon name="menu" style="color: white;font-size: 25px;padding-right: 8px"></ion-icon>\n\n            </button>\n\n        <!-- <ion-icon name="menu" style="font-size: 30px;color: white;float: right;" (click)="carehistory()"></ion-icon> -->\n\n      </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content text-center>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-icon name="card" style="float: right;font-size: 30px;" color="primary" (click)="blockcal()"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <div *ngIf="calendarOptions"  >\n\n    <ng-fullcalendar #ucCalendar [options]="calendarOptions" (eventClick)="eventClick($event.detail)" (eventDrop)="updateEvent($event.detail)"\n\n    (eventResize)="updateEvent($event.detail)" (clickButton)="clickButton($event.detail)"></ng-fullcalendar>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtimesheetcalendar\cgtimesheetcalendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], CgtimesheetcalendarPage);
    return CgtimesheetcalendarPage;
}());

//# sourceMappingURL=cgtimesheetcalendar.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgmultipletimesheetPage; });
/* unused harmony export caredetails */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgmulsignature_cgmulsignature__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CgmultipletimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgmultipletimesheetPage = /** @class */ (function () {
    function CgmultipletimesheetPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, global, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this._DomSanitizer = _DomSanitizer;
        this.isCareProvided = true;
        this.isedit = false;
        this.multiplelist = [];
        this.clientid = 0;
        this.clientidget = 0;
        this.currentdate = Date.now();
        this.newtime = false;
        this.cgcaredetails = [
            {
                caredet: "I provided care",
                val: 1
            },
            {
                caredet: "I didn't provided care",
                val: 0
            }
        ];
    }
    CgmultipletimesheetPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.clientidget = this.navParams.get("clientid");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/Cgmultipletc/completemultible?";
        var myParams = new URLSearchParams();
        myParams.append("EmployeeId", this.global.employeeId.toString());
        if (this.clientidget == 0) {
            myParams.append("ClientId", this.clientidget.toString());
        }
        else {
            myParams.append("ClientId", this.clientidget.toString());
        }
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.multiplelist = data["cgmultible"];
            console.log(_this.multiplelist);
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgmultipletimesheetPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgmultipletimesheetPage.prototype.edit = function (cmtc, i) {
        console.log(cmtc);
        this.paticularuser(cmtc, i);
        //   this.cm = JSON.stringify(cmtc);
        //   console.log( this.cm);
        //   const httpOptions = {
        //     headers: new HttpHeaders({
        //       "Content-Type": "application/json",
        //       Authorization: "my-auth-token"
        //     })
        //   };
        //   let url = "api/Cgmultipletc/muledittc";
        // //   let myParams=new URLSearchParams();
        // // myParams.append("tcdetails",this.multceditdet)
        //   this.http.post(url,this.cm, httpOptions).subscribe(
        //     (data: any) => {
        //       console.log(data);
        // })
    };
    CgmultipletimesheetPage.prototype.paticularuser = function (val, t) {
        this.singleuser = val;
        this.j = t;
        // console.log('hi');
        console.log(this.singleuser);
        this.isedit = true;
    };
    CgmultipletimesheetPage.prototype.save1 = function (test) {
        this.isedit = false;
        console.log(test);
        this.isCareProvided = true;
    };
    CgmultipletimesheetPage.prototype.savetcedit = function (muteditdet) {
        var _this = this;
        // this.isedit=false;
        console.log(muteditdet);
        muteditdet.ididntprovided = muteditdet.ididntprovided;
        console.log(muteditdet.ididntprovided);
        if (!muteditdet.ididntprovided && !muteditdet.ismissedforgettc) {
            this.multceditdet = JSON.stringify(muteditdet);
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                    "Content-Type": "application/json",
                    Authorization: "my-auth-token"
                })
            };
            var url = "api/Cgmultipletc/muledittc";
            //   let myParams=new URLSearchParams();
            // myParams.append("tcdetails",this.multceditdet)
            this.http.post(url, this.multceditdet, httpOptions).subscribe(function (data) {
                console.log(data);
                muteditdet.timecardId = data;
                // this.global.iscgdashreload = true;
                // this.navCtrl.pop();
                var alert = _this.alertCtrl.create({
                    title: "Changes Updated",
                    message: "Your Timesheet has been updated successfully.Please complete your visit again.",
                    // cssClass: "buttonCss5",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function (data) {
                                console.log("ok clicked");
                                _this.isedit = false;
                            }
                        }
                    ]
                });
                alert.present();
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.isedit = false;
        }
    };
    CgmultipletimesheetPage.prototype.canceleditTC = function (ct) {
        this.isedit = false;
        // this.navCtrl.pop();
    };
    CgmultipletimesheetPage.prototype.save = function (tc) {
        this.isedit = false;
        // this.navCtrl.pop();
    };
    CgmultipletimesheetPage.prototype.multiblesignaturepage = function (multiblesigndata) {
        console.log(multiblesigndata);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cgmulsignature_cgmulsignature__["a" /* CgmulsignaturePage */], { "mutisubvalue": multiblesigndata });
    };
    CgmultipletimesheetPage.prototype.caredet = function (cd, k) {
        this.isCareProvided = false;
        console.log('hi');
        console.log(cd);
        console.log(k);
    };
    CgmultipletimesheetPage.prototype.timeIn = function (intime) {
        this.newIntime = intime.getTimezoneOffset();
        this.newtime = true;
    };
    CgmultipletimesheetPage.prototype.timeOut = function (inout) {
        this.newOutTime = inout.getTimezoneOffset();
        this.newtime = true;
    };
    CgmultipletimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgmultipletimesheet',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmultipletimesheet\cgmultipletimesheet.html"*/'<ion-header>\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n        <ion-grid>\n\n            <ion-row align-items-center>\n\n                <ion-col col-2 style="padding: 0">\n\n                    <button ion-button clear style="text-transform: none;color: white;padding: 0;margin-left: 5px " (click)="cancel()">Cancel</button>\n\n                </ion-col>\n\n                <ion-col col-10 text-center>\n\n                    <ion-title text-center style="padding-right:23%">Complete Visit</ion-title>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #F5F5F5">\n\n        <div *ngIf="multiplelist!=null">\n\n                <div *ngIf="isedit==false">\n\n                        <ion-grid style="padding-top: 15px" >\n\n                                <ion-row text-center >\n\n                                    <ion-col col-12 >\n\n                                       \n\n                                          <div item-start >\n\n                                            <img  class="imgs" src="assets/imgs/male.png">\n\n                                            <!-- {{i.clientPhoto}} -->\n\n                                          </div></ion-col></ion-row>\n\n                                          <h6 style="margin: 10px;margin-bottom: 0;" text-center>PROVIDED BY</h6>\n\n                                          <p style="margin-top:0;color: gray" text-center><i>{{global.name|uppercase}}</i></p></ion-grid>\n\n                <!-- <ion-item no-lines>\n\n                        <ion-avatar item-start>\n\n                          <img class="img" src="assets/imgs/male.png">\n\n                        </ion-avatar>\n\n                        <p>PROVIDED BY</p>\n\n                        <h2>{{global.name|uppercase}}</h2>\n\n                      </ion-item> -->\n\n                    \n\n\n\n\n\n                <div *ngFor="let mtc of multiplelist;let i=index;" >\n\n                    <!-- <div [ngStyle]="{\'background-color\':mtc.ismissedforgettc==true? \'red\':\'#488aff\'}">  -->\n\n               \n\n           \n\n           \n\n                  \n\n   \n\n       \n\n        \n\n                       <div style="padding-top: 5%">\n\n                                                               <ion-item no-lines style="background-color: white;">\n\n                                              <ion-avatar item-start *ngIf="mtc.clientPhoto!=null;">\n\n                                                <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(mtc.clientPhoto)" >\n\n                                                <!-- {{i.clientPhoto}} -->\n\n                                              </ion-avatar>\n\n                                              <ion-avatar item-start *ngIf="mtc.clientPhoto==null&&mtc.isMale==true;">\n\n                                                <img class="img" src="assets/imgs/male.png">\n\n                                                <!-- {{i.clientPhoto}} -->\n\n                                              </ion-avatar>\n\n                                              <ion-avatar item-start *ngIf="mtc.clientPhoto==null&&mtc.isMale!=true;">\n\n                                                <img class="img" src="assets/imgs/female.png">\n\n                                                <!-- {{i.clientPhoto}} -->\n\n                                              </ion-avatar>\n\n                                            \n\n                                              <p>RECIPIENT OF CARE</p>\n\n                                              <h2>{{mtc.clientName|uppercase}}</h2></ion-item>\n\n                                      \n\n                                            \n\n                                       \n\n                                <ion-item no-lines style="background-color: white;">\n\n                                    <ion-avatar item-start >\n\n                                        <div class="circle" >\n\n                                            <div class="letter">{{mtc.agencyname}}</div>\n\n                                          </div> </ion-avatar>\n\n                                          <p>{{mtc.agencyname}}</p>\n\n                                    <h2>{{mtc.agencyno}}</h2></ion-item>                      \n\n                                  \n\n                                    <ion-item  no-lines style="padding: 3%">\n\n                                            <ion-label>Do you want to submit this timesheet?</ion-label>\n\n                                            <ion-checkbox [(ngModel)]="mtc.istimecatrdtosub" style="margin: 3px 25px 3px 4px"></ion-checkbox>\n\n                                          </ion-item>          \n\n                      </div>\n\n                   \n\n                     \n\n                    \n\n        <ion-row align-items-center style="background-color: white;">\n\n            <ion-col style="padding: 0">\n\n              <p style="  color:gray;  margin-bottom: -3px;margin-left: 8px;font-size: 15px">DATE OF SERVICE</p>\n\n              <h4 style="margin-left: 5px;font-size: 18px">{{mtc.date | date :\'MMMM d, y \'}}</h4>\n\n            </ion-col>\n\n            <ion-col style="padding: 0">\n\n                    <!-- (click)="edit(tcdetails)" (click)="presentConfirm(tcdetails)"-->\n\n                    <ion-icon name="create" style="float: right;margin-right: 10px;"  color="primary" (click)="edit(mtc,i)" >&nbsp;&nbsp;Edit</ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n          <div *ngIf="!mtc.ididntprovided  || mtc.ididntprovided==\'false\'"> \n\n        <ion-grid style="background-color: white;">\n\n            <ion-row>\n\n                <ion-col col-4 *ngIf="newtime==false">\n\n                    <p style="color:gray; margin-bottom: -3px;font-size: 18px">Time in</p>\n\n                    <h4 style="font-size: 18px"> {{mtc.tcstdt| date : \'hh:mm a \'}}</h4>\n\n                </ion-col>\n\n                <ion-col col-4 *ngIf="newtime==true">\n\n                    <p style="color:gray; margin-bottom: -3px;font-size: 18px">Time in</p>\n\n                    <h4 style="font-size: 18px"> {{newIntime| date : \'hh:mm a \'}}</h4>\n\n                </ion-col>\n\n                <ion-col col-4 *ngIf="newtime==false">\n\n                        <p style="color:gray ;margin-bottom: -3px;font-size: 18px">Time out </p>\n\n                        <h4 style="font-size: 18px">{{mtc.tceddt| date :\'hh:mm a \'}}</h4>\n\n                </ion-col>\n\n                <ion-col col-4 *ngIf="newtime==true">\n\n                    <p style="color:gray ;margin-bottom: -3px;font-size: 18px">Time out </p>\n\n                    <h4 style="font-size: 18px">{{newOutTime| date :\'hh:mm a \'}}</h4>\n\n            </ion-col>\n\n                <ion-col col-4>\n\n                        <p style="color:gray; margin-bottom: -3px;font-size: 18px">Total Time</p>\n\n                        <h4 style="font-size: 18px">{{mtc.duration}} Minutes</h4>\n\n                    </ion-col>\n\n            </ion-row>\n\n           \n\n        </ion-grid>\n\n        \n\n\n\n\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: white;margin: 0;color: gray" >ACTIVITIES</h5>\n\n       \n\n\n\n        <ion-grid style="padding: 0;background-color: white;">\n\n               \n\n        <ion-list no-lines style="margin: 0" *ngFor="let jobdet of mtc.jobTaskdet">\n\n                <ion-item>\n\n                   <ion-label>{{jobdet.taskName}}</ion-label>\n\n                    <ion-checkbox [(ngModel)]="jobdet.isCompleted" id="myCheckbox" click="nction()"></ion-checkbox>\n\n            </ion-item></ion-list>\n\n       </ion-grid>\n\n               <ion-row style="padding-bottom: 10px;padding-top: 10px;background-color: white;" >\n\n\n\n                <div class="half">\n\n  \n\n                        <div class="tab" *ngIf="multiplelist!=null">\n\n                            <input id="{{i}}" type="checkbox" name="tabs">\n\n                          <label for="{{i}}">Service Detail&nbsp;&nbsp;- &nbsp;&nbsp;{{mtc.date | date :\'MMMM d\'}}</label>\n\n                          <div class="tab-content">\n\n                            <ion-grid>\n\n                                <ion-row>\n\n                                    <ion-col>\n\n                                        <ion-label style="color:black">Service type </ion-label>\n\n                                    </ion-col>\n\n                                    <ion-col  *ngIf="mtc.jobTaskdet != null">\n\n                                        <ion-label style="color:grey;float: right;margin-right: 2%">{{mtc.jobTaskdet[0].jobName}}</ion-label>\n\n                                    </ion-col> \n\n                                </ion-row>\n\n                                <ion-row>\n\n                                    <ion-col>\n\n                                        <ion-label style="color:black">Ratio(Provider:Recipient) </ion-label>\n\n                                    </ion-col>\n\n                                    <ion-col>\n\n                                        <ion-label style="color:grey;float:right;margin-right:2%">1:{{mtc.rserviceratio}}</ion-label>\n\n                                    </ion-col>\n\n                                </ion-row>\n\n                            </ion-grid>\n\n                    \n\n                            <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >NOTES</h5>\n\n                        <ion-row style=" background-color:#E3F2FD;color:black">\n\n                                <ion-textarea [(ngModel)]="mtc.notes" class="note" placeholder="Enter notes"></ion-textarea>\n\n                        </ion-row>\n\n                        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >SERVICE LOCATION</h5>\n\n\n\n                        <ion-grid text-wrap>\n\n                            <ion-row>\n\n                                <ion-col col-4>\n\n                                    <ion-icon name="home" style="font-size: 20px;color:black">&nbsp;Address</ion-icon>\n\n                                </ion-col>\n\n                                <ion-col text-right col-8>\n\n                                    <ion-label style="float: right;margin-right: 2%;color:black"> {{mtc.street1}}, {{mtc.street2}} </ion-label>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4>\n\n                                    <ion-icon name="podium" style="font-size: 20px;color:black">&nbsp;City</ion-icon>\n\n                                </ion-col>\n\n                                <ion-col text-right col-8>\n\n                                    <ion-label style="float: right;margin-right: 2%;color:black"> {{mtc.city}} </ion-label>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4>\n\n                                    <ion-icon ios="ios-globe-outline" md="md-globe"  style="font-size: 20px;color:black">&nbsp;State</ion-icon>\n\n                                </ion-col>\n\n                                <ion-col text-right col-8>\n\n                                    <ion-label style="float: right;margin-right: 2%;color:black">{{mtc.state}} </ion-label>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                            <ion-row>\n\n                                <ion-col col-4>\n\n                                    <ion-icon name="pin" style="font-size: 20px;color:black">&nbsp;Zip</ion-icon>\n\n                                </ion-col>\n\n                                <ion-col text-right col-8>\n\n                                    <ion-label style="float: right;margin-right: 2%;color:black">{{mtc.zipCode}} </ion-label>\n\n                                </ion-col>\n\n                            </ion-row>\n\n                        </ion-grid>\n\n\n\n                          </div>\n\n                        </div>\n\n                        \n\n                      </div>\n\n\n\n        </ion-row>\n\n     \n\n        </div>\n\n      <!-- <p> sdasfd {{mtc.ididntprovided}}</p>  {{mtc.ididntprovided}} -->\n\n        <div *ngIf="mtc.ididntprovided==\'true\'">\n\n            <h4 style="margin-left: 3%">I didn\'t provide care</h4> </div>\n\n\n\n   \n\n    \n\n   \n\n<!-- \n\n         <div>\n\n                            <button ion-button color="red" [disabled]="buttonState()" style="position:fixed;">button</button>\n\n                            </div> -->\n\n    </div></div>\n\n\n\n\n\n<div *ngIf="isedit==true" style="background-color: #F5F5F5">\n\n        <div>\n\n                <br>\n\n                <ion-card style="padding: 5px">\n\n                  <ion-list>\n\n                        <ion-item no-lines style="margin-left: 0.25%;margin-right: 0.25%;padding: 10px">\n\n                                <ion-avatar item-start *ngIf="singleuser.isMale==true;">\n\n                                        <img class="img" src="assets/imgs/man.png" >\n\n                                        <!-- {{i.clientPhoto}} -->\n\n                                      </ion-avatar>\n\n                                  <ion-avatar item-start *ngIf="!singleuser.isMale==true;">\n\n                                    <img class="img" src="assets/imgs/female.png" >\n\n                                    <!-- {{i.clientPhoto}} -->\n\n                                  </ion-avatar>\n\n                            <p>RECIPIENT OF CARE</p>\n\n                            <h2>{{singleuser.clientName|uppercase}}</h2>\n\n                        </ion-item>\n\n                        <p center text-center>DATE OF SERVICE</p>\n\n                      \n\n                        <h2 center text-center>{{singleuser.date | date :\'MMMM d, y \'}}</h2>\n\n\n\n\n\n\n\n                        <!-- <ion-item no-lines style="padding-top: 5%" > -->\n\n\n\n                            \n\n                           <ion-list no-lines style="padding-top: 5%" radio-group [(ngModel)]="singleuser.ididntprovided" *ngIf="singleuser.ismissedforgettc">\n\n                            <ion-item>\n\n                                <ion-label >I provided care</ion-label>\n\n                                <ion-radio value="false"></ion-radio>\n\n                              </ion-item>\n\n                              <ion-item>\n\n                                <ion-label>I didn\'t provide care</ion-label>\n\n                                <ion-radio value="true" ></ion-radio>\n\n                              </ion-item>\n\n                            </ion-list> \n\n\n\n                                     \n\n                               \n\n                                   \n\n                                              \n\n                        <!-- <div class="container" >\n\n                   \n\n                               \n\n                                <div class="radio">\n\n                                        \n\n                                  <input id="radio-1"  class="formcontrol" name="radio"  value = "false"  [(ngModel)]="singleuser.ididntprovided"  type="radio"   >\n\n                                  <label for="radio-1"  class="radio-label"  >I provided care</label>\n\n                                </div>\n\n                              \n\n                                <div class="radio">\n\n                                  <input id="radio-2"  class="formcontrol" name="radio"  value = "true" [(ngModel)]="singleuser.ididntprovided" type="radio">\n\n                                  <label  for="radio-2"  class="radio-label">I didn\'t provide care</label>\n\n                                </div>\n\n                              \n\n                               \n\n                              </div> -->\n\n                            <!-- </ion-item> -->\n\n                              \n\n                 \n\n                     <ion-item>\n\n                      <ion-label style="font-size: 16px" stacked>Time In</ion-label>\n\n                      <!-- (ionChange) ="timeIn(singleuser.tcstdt)" -->\n\n                      <ion-datetime displayFormat="hh:mm A" [(ngModel)]="singleuser.tcstdt" >{{singleuser.tcstdt}}</ion-datetime>\n\n                    </ion-item>\n\n              \n\n                    <ion-item>\n\n                      <ion-label style="font-size: 16px" stacked>Time Out</ion-label>\n\n                      <ion-datetime displayFormat="hh:mm A" [(ngModel)]="singleuser.tceddt" >{{singleuser.tceddt}}</ion-datetime>\n\n              \n\n                    </ion-item>\n\n              \n\n                  </ion-list>\n\n                  <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >ACTIVITIES</h5>\n\n       \n\n\n\n                  <ion-grid style="padding: 0">\n\n                         \n\n                  <ion-list no-lines style="margin: 0" *ngFor="let job of singleuser.jobTaskdet">\n\n                          <ion-item>\n\n                             <ion-label>{{job.taskName}}</ion-label>\n\n                              <ion-checkbox [(ngModel)]="job.isCompleted" id="myCheckbox" click="nction()"></ion-checkbox>\n\n                      </ion-item></ion-list>\n\n                 </ion-grid>\n\n                 <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0"  >Service Detail</h5>\n\n                <ion-grid>\n\n                       <ion-row>\n\n                           <ion-col>\n\n                               <ion-label style="color:black">Service type </ion-label>\n\n                           </ion-col>\n\n                           <ion-col  *ngIf="singleuser.jobTaskdet != null">\n\n                               <ion-label style="color:grey;float: right;margin-right: 2%">{{singleuser.jobTaskdet[0].jobName}}</ion-label>\n\n                           </ion-col> \n\n                       </ion-row>\n\n                       <ion-row>\n\n                           <ion-col>\n\n                               <ion-label style="color:black">Ratio(Provider:Recipient) </ion-label>\n\n                           </ion-col>\n\n                           <ion-col>\n\n                               <ion-label style="color:grey;float:right;margin-right:2%">1:{{singleuser.rserviceratio}}</ion-label>\n\n                           </ion-col>\n\n                       </ion-row>\n\n                   </ion-grid>\n\n           \n\n                   <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black;" >NOTES</h5>\n\n               <ion-row style=" background-color:#E3F2FD;">\n\n                       <ion-textarea [(ngModel)]="singleuser.notes" class="note" placeholder="Enter notes"></ion-textarea>\n\n               </ion-row>\n\n               <h5 style="padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >SERVICE LOCATION</h5>\n\n\n\n               <ion-grid text-wrap>\n\n                   <ion-row>\n\n                       <ion-col col-4>\n\n                           <ion-icon name="home" style="font-size: 20px;color:black">&nbsp;Address</ion-icon>\n\n                       </ion-col>\n\n                       <ion-col text-right col-8>\n\n                           <ion-label style="float: right;margin-right: 2%;color:black"> {{singleuser.street1}}, {{singleuser.street2}} </ion-label>\n\n                       </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                       <ion-col col-4>\n\n                           <ion-icon name="podium" style="font-size: 20px;color:black">&nbsp;City</ion-icon>\n\n                       </ion-col>\n\n                       <ion-col text-right col-8>\n\n                           <ion-label style="float: right;margin-right: 2%;color:black"> {{singleuser.city}} </ion-label>\n\n                       </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                       <ion-col col-4>\n\n                           <ion-icon ios="ios-globe-outline" md="md-globe"  style="font-size: 20px;color:black">&nbsp;State</ion-icon>\n\n                       </ion-col>\n\n                       <ion-col text-right col-8>\n\n                           <ion-label style="float: right;margin-right: 2%;color:black">{{singleuser.state}} </ion-label>\n\n                       </ion-col>\n\n                   </ion-row>\n\n                   <ion-row>\n\n                       <ion-col col-4>\n\n                           <ion-icon name="pin" style="font-size: 20px;color:black">&nbsp;Zip</ion-icon>\n\n                       </ion-col>\n\n                       <ion-col text-right col-8>\n\n                           <ion-label style="float: right;margin-right: 2%;color:black">{{singleuser.zipCode}} </ion-label>\n\n                       </ion-col>\n\n                   </ion-row>\n\n               </ion-grid>\n\n               <ion-row>\n\n                   <ion-col>\n\n                    <footer class="footer_behind">\n\n                        <button ion-button id="btn" (click)="savetcedit(singleuser)" style="background-color:rgb(0, 153, 255) ">Save</button>\n\n                        <button ion-button id="btn" (click)="canceleditTC()" style="background-color:red ">Cancel</button>\n\n                         </footer> \n\n \n\n                   </ion-col>\n\n               </ion-row>\n\n              \n\n                </ion-card>\n\n              </div>\n\n        </div>\n\n  \n\n</div>\n\n\n\n</ion-content>\n\n<ion-footer style="padding: 5px" [hidden]="isedit">\n\n\n\n    <button ion-button color="primary"   id="myButton" style="text-transform: none" (click)="multiblesignaturepage(multiplelist)" block >Verify</button>\n\n    <!--[(disabled)]="!bath && !groom && !eat" -->\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmultipletimesheet\cgmultipletimesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CgmultipletimesheetPage);
    return CgmultipletimesheetPage;
}());

var caredetails = /** @class */ (function () {
    function caredetails() {
    }
    return caredetails;
}());

//# sourceMappingURL=cgmultipletimesheet.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgloginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgtabpages_cgtabpages__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redashboard_redashboard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgotpassword_forgotpassword__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__userdetails_userdetails__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import {CgprofilenewPage} from '../cgprofilenew/cgprofilenew';
/**
 * Generated class for the CgloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgloginPage = /** @class */ (function () {
    function CgloginPage(navCtrl, navParams, http, storage, global, loadingCtrl, localNotifications, platform, usdet) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.storage = storage;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.usdet = usdet;
        this.user = "";
        this.psw = "";
        this.cname = "Jessica";
        this.pass = 12345;
        this.rname = "tom";
        //       this.platform.ready().then(() => {
        //         this.localNotifications.on('click',(notification,state)=>{
        // alert(notification.data);
        // alert(state);
        //         }
        //         );
        //       });
    }
    CgloginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgloginPage');
    };
    CgloginPage.prototype.login = function () {
        if (this.user == this.cname && this.psw == this.pass) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgtabpages_cgtabpages__["a" /* CgtabpagesPage */]);
        }
        if (this.user == this.rname && this.psw == this.pass) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__redashboard_redashboard__["a" /* RedashboardPage */]);
        }
        if (this.user != this.rname && this.psw != this.pass) {
            alert("Invalid ");
        }
    };
    CgloginPage.prototype.forgot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    CgloginPage.prototype.loginhttp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/Auth/login?";
        var myParams = new URLSearchParams();
        myParams.append("userName", this.user);
        myParams.append("password", this.psw);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.global.Adddata(data);
            _this.storage.set("loginAuth", data);
            // this.storage.get("loginAuth").then((val)=>{
            //   console.log("Stored Data..........................");
            //   console.log(val);
            // });
            console.log(data.userdetail);
            loading.dismiss();
            if (data.userdetail.isEmployee) {
                console.log("employee detail ");
                _this.usdet.devicepushregistration(data.userdetail.employeeId, true);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgtabpages_cgtabpages__["a" /* CgtabpagesPage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
                ;
            }
            else if (data.userdetail.isClient) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__redashboard_redashboard__["a" /* RedashboardPage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
                ;
            }
            else {
                alert("Invalid ");
            }
        }, function (err) {
            _this.warning = true;
            _this.Errors = err.error;
            console.log(err);
            console.log(err.error);
            setTimeout(function () {
                this.warning = false;
                //  console.log(this.warning);
            }.bind(_this), 6000);
            loading.dismiss();
        });
    };
    CgloginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cglogin',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cglogin\cglogin.html"*/'\n\n\n\n\n\n<!-- \n\nbackground: rgb(185,210,224); -->\n\n<ion-content padding class="outer-content" style="background-image:linear-gradient(-180deg, #008fd3 28%, #82f5ec 100%);">\n\n  <div class="container" style="margin-top: 96px;">\n\n        \n\n    <div class="card card-container">\n\n      <ion-grid>\n\n        <ion-row justify-content-center>\n\n            <br/>\n\n            \n\n          <img style="\n\n          width: 68%;\n\n          height: 79%;\n\n                margin:0 auto;"  src="assets/imgs/log.PNG">\n\n        </ion-row>\n\n      </ion-grid>\n\n         \n\n      <ion-title text-center> CASHE TIMESHEETS</ion-title>  \n\n<br/>\n\n<br/>\n\n<p style="color:red;text-align: center;" *ngIf="warning">{{Errors}}</p>    \n\n    \n\n<form class="form-signin">\n\n      <ion-list inset>\n\n         \n\n        <ion-item>\n\n           \n\n           <ion-label>UMPI No.</ion-label>\n\n           <ion-input type="text" name="user" [(ngModel)]="user" style="text-align-last:right"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n           <ion-label>Password</ion-label>\n\n           <ion-input type="password" name="psw" [(ngModel)]="psw" style="text-align-last:right"></ion-input>\n\n         </ion-item>\n\n    \n\n        <br/>\n\n        <br/>\n\n        <button class="btn btn-lg btn-primary" type="submit" (click)="loginhttp();" style="color:white;font-size:18px;">Login</button>\n\n    <!-- /form -->\n\n    <ion-row>\n\n        <ion-col>\n\n          <a href="#" style="color:#0097A7;font-size:14px;display:block;text-align: center" (click)="forgot()">Forgot Password</a>\n\n        </ion-col>\n\n      </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <p style="color:gray;font-size:14px;text-align:center;">powered by Cashe software</p>\n\n      </ion-col>\n\n    </ion-row>\n\n      </ion-list>\n\n    </form>\n\n      \n\n     </div>\n\n     </div> \n\n<!-- \n\n     <button (click)="test()">Push Notifications</button> -->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cglogin\cglogin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__userdetails_userdetails__["a" /* UserdetailsPage */]])
    ], CgloginPage);
    return CgloginPage;
}());

//# sourceMappingURL=cglogin.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedashboardPage; });
/* unused harmony export record */
/* unused harmony export record1 */
/* unused harmony export record2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reapprovetimesheet_reapprovetimesheet__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reprofile_reprofile__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reviewappointment_reviewappointment__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popover_popover__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RedashboardPage = /** @class */ (function () {
    function RedashboardPage(navCtrl, navParams, http, global, popoverCtrl, loadingCtrl, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this._DomSanitizer = _DomSanitizer;
        this.missedsheet = [];
        this.schedulelist = [];
        this.records = [
            {
                cname: "Jessica"
            }
        ];
        this.records1 = [
            {
                rname: "Tom"
            }
        ];
        this.records2 = [
            {
                day: "Today",
                cname: "Jessica Careson",
                starttime: "9:00 AM",
                stoptime: "11:00 AM",
                image: "assets/imgs/jessica.jpg"
            },
            {
                day: "4/23",
                cname: "Jessica Careson",
                starttime: "9:00 AM",
                stoptime: "11:00 AM",
                image: "assets/imgs/jessica.jpg"
            },
            {
                day: "4/27",
                cname: "Jessica Careson",
                starttime: "9:00 AM",
                stoptime: "11:00 AM",
                image: "assets/imgs/jessica.jpg"
            },
            {
                day: "4/30",
                cname: "Jessica Careson",
                starttime: "9:00 AM",
                stoptime: "11:00 AM",
                image: "assets/imgs/jessica.jpg"
            },
            {
                day: "5/4",
                cname: "Jessica Careson",
                starttime: "9:00 AM",
                stoptime: "11:00 AM",
                image: "assets/imgs/jessica.jpg"
            }
        ];
    }
    RedashboardPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    RedashboardPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewwill entre CgdashboardPage');
        console.log(this.global.iscgdashreload);
        if (this.global.isredashrelaod) {
            this.ionViewDidLoad();
            console.log("trur");
        }
        console.log('ionViewDidLoad RedashboardPage');
    };
    RedashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var age = 1;
        var cli = 13;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/ReTimesheet/getschlist?";
        var myParams = new URLSearchParams();
        //myParams.append("agencyid", age.toString());
        myParams.append("clientNumber", this.global.clientId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.global.isredashrelaod = false;
            _this.missedsheet = data["misedsheet"];
            _this.schedulelist = data["list"];
            console.log(_this.missedsheet);
            console.log(_this.schedulelist);
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    RedashboardPage.prototype.approve = function (approvedetail, index) {
        console.log(approvedetail);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reapprovetimesheet_reapprovetimesheet__["a" /* ReapprovetimesheetPage */], { "TimecardId": approvedetail.mTcId, "ScheduleId": approvedetail.mScheduleId, "agencyId": approvedetail.mAgencyId });
        (function (err) {
            console.log(err);
        });
    };
    RedashboardPage.prototype.approvetc = function (tcsubmit) {
        console.log(tcsubmit);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reapprovetimesheet_reapprovetimesheet__["a" /* ReapprovetimesheetPage */], { "TimecardId": tcsubmit.timeCardId, "ScheduleId": tcsubmit.scheduleId, "agencyId": tcsubmit.agencyId });
        (function (err) {
            console.log(err);
        });
    };
    RedashboardPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reprofile_reprofile__["a" /* ReprofilePage */]);
    };
    RedashboardPage.prototype.viewcaregiverappoinment = function (sche) {
        console.log(sche);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reviewappointment_reviewappointment__["a" /* ReviewappointmentPage */], { "revdetai": sche });
    };
    RedashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-redashboard',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\redashboard\redashboard.html"*/'<ion-header>\n\n  <ion-toolbar color="primary"  style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <ion-icon name="contact" style="font-size: 30px;color: white;float: left;" (click)="profile()" ></ion-icon>\n\n        </ion-col>\n\n        <ion-col style="position: unset;">\n\n          <ion-title text-center>Dashboard</ion-title>\n\n        </ion-col>\n\n        <ion-col>\n\n            <button ion-button clear style="float: right" (click)="presentPopover($event)">\n\n                <ion-icon name="menu" style="color: white;font-size: 25px"></ion-icon>\n\n              </button>\n\n          <!-- <ion-icon name="menu" style="font-size: 30px;color: white;float: right;" (click)="carehistory()"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-color: #F5F5F5"> \n\n  <ion-card class="card" *ngFor="let det of missedsheet;let i=index"  style="margin: 10px;padding: 10px;padding-bottom: 0; width: calc(100% - 20px);" (click)="approve(det,i)">\n\n    <!-- <ion-card-content> -->\n\n           <ion-row align-items-start >\n\n               <ion-col col-1>\n\n                 <div>\n\n                   <ion-badge id="missing" class="test" color="danger" >!</ion-badge>\n\n                 </div>\n\n               </ion-col>\n\n               <ion-col col-11>\n\n                 <h2><b>Unapproved Visits</b></h2>\n\n                 <p>For {{det.tcDate| date:\'fullDate\'}}.</p>\n\n                 <!-- <p>It\'s look like you haven\'t submitted timesheet from {{det.tcDate | date: \'d/M/yy\'}}</p> -->\n\n                 <button ion-button style="color:primary;text-transform: none;padding-left: 0px;" clear >Complete it Now</button>\n\n               </ion-col>\n\n             </ion-row>\n\n       <!-- </ion-card-content> -->\n\n     </ion-card>\n\n\n\n  <div text-center>\n\n      <h2 style="margin: 10px;padding-top: 3%"  *ngIf="global.name != null">Hello, {{global.name|uppercase}}</h2>\n\n      <p style="margin-top:0; font-style: italic;color: #4DB6AC ">Upcoming Appointments</p>\n\n    </div>\n\n\n\n    <ion-card *ngFor="let sch of schedulelist" style="margin: 5px;padding: 10px;">\n\n      <ion-item  style="padding: 1px;margin: 0;"  (click)="viewcaregiverappoinment(sch)">\n\n        <ion-avatar item-start *ngIf="sch.employeePhoto!=null;">\n\n          <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(sch.employeePhoto)" >\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="sch.employeePhoto==null&&sch.isMale==true;">\n\n          <img class="img" src="assets/imgs/male.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="sch.employeePhoto==null&&sch.isMale!=true;">\n\n          <img class="img" src="assets/imgs/female.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <!-- <ion-avatar item-start>\n\n          <img style="border:1px solid rgb(206, 52, 10)" src={{sch.employeePhoto}}>\n\n        </ion-avatar> -->\n\n        <!-- <ion-icon name="ios-clock-outline"></ion-icon> -->\n\n        <h2 style="font-weight: 500">{{sch.scheduleDT |date: \'d/M\'}} {{sch.employeeName|uppercase }} </h2>\n\n        <p *ngIf="!sch.isStarted || sch.isCompleted"><i>{{sch.scheduleDT |date: \'h:mm a\'}} - {{sch.schenddt |date: \'h:mm a\'}}</i></p>\n\n        <p *ngIf="sch.isStarted && !sch.isCompleted && !sch.isCancelled" style="color:#2979ff;font-size: 15px;"><i><ion-icon name="code-working" style="color:#2979ff;font-size: 15px;"></ion-icon> In progress</i></p>\n\n        <ion-icon *ngIf="sch.isCancelled" style="color:red;" name="close-circle"> Schedule Cancelled</ion-icon>\n\n   \n\n        <!-- *ngIf="sch.isCompleted && sch.istimesubmitclient && !sch.istimesubmitemp " -->\n\n      </ion-item>\n\n      <button ion-button full style="text-align: center;font-size: 12px;" *ngIf="sch.isCompleted && !sch.istimesubmitclient && sch.istimesubmitemp" (click)="approvetc(sch)" >Approve Timesheet</button>\n\n     \n\n    </ion-card>\n\n     <div class="alert" *ngIf="schedulelist.length==0">\n\n    <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n    <strong>No Schedules are available Today!</strong>\n\n  </div>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\redashboard\redashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */]])
    ], RedashboardPage);
    return RedashboardPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

var record1 = /** @class */ (function () {
    function record1() {
    }
    return record1;
}());

var record2 = /** @class */ (function () {
    function record2() {
    }
    return record2;
}());

//# sourceMappingURL=redashboard.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResignatureverificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ResignatureverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResignatureverificationPage = /** @class */ (function () {
    function ResignatureverificationPage(navCtrl, navParams, http, alertCtrl, global, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 5,
            canvasWidth: 500,
            canvasHeight: 300
        };
        this.drawstart = false;
    }
    ResignatureverificationPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ResignatureverificationPage");
    };
    ResignatureverificationPage.prototype.ionViewWillEnter = function () {
        this.submitTcdet = this.navParams.get("timesheetdetail");
    };
    ResignatureverificationPage.prototype.canvasResize = function () {
        var canvas = document.querySelector("canvas");
        this.signaturePad.set("minWidth", 1);
        this.signaturePad.set("canvasWidth", canvas.offsetWidth);
        this.signaturePad.set("canvasHeight", canvas.offsetHeight);
    };
    ResignatureverificationPage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
        this.canvasResize();
        this.drawstart = false;
    };
    ResignatureverificationPage.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        this.submitTcdet.clientSign = this.signaturePad.toDataURL();
    };
    ResignatureverificationPage.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log("begin drawing");
        this.drawstart = true;
    };
    ResignatureverificationPage.prototype.cancel = function () {
        this.navCtrl.pop();
        this.navCtrl.pop();
    };
    ResignatureverificationPage.prototype.submittimesheetcompleted = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: "buttonCss5",
            title: "Thank you!",
            message: "Your visit details have been signed and submitted for processing.",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("ok clicked");
                        _this.navCtrl.pop();
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    ResignatureverificationPage.prototype.submittimesheet = function () {
        var _this = this;
        this.submitTcdet = JSON.stringify(this.submitTcdet);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // let url = "api/OutcomeEntries/addoutcomedetail";
        var url = "api/ReTimesheet/completeMTC";
        this.http.post(url, this.submitTcdet, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.isredashrelaod = true;
            _this.submittimesheetcompleted();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], ResignatureverificationPage.prototype, "signaturePad", void 0);
    ResignatureverificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-resignatureverification",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\resignatureverification\resignatureverification.html"*/'\n\n<ion-header>\n\n\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <ion-col col-2 style="padding: 0">\n\n             \n\n                <button ion-button clear style="text-transform: none;color: white;font-size: 90%;padding-left: 0" (click)="cancel()">Cancel</button>\n\n             \n\n            </ion-col>\n\n            <ion-col col-10>\n\n    <ion-title text-center style="padding-right:22%">Signature Verification</ion-title>\n\n  </ion-col>\n\n  <!-- <ion-col>\n\n      <ion-icon style="color: white;font-size: 30px;float: right;" name="more"></ion-icon>\n\n  </ion-col> -->\n\n  </ion-row>\n\n  </ion-grid>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n\n    <p style="text-align: center;color: grey">Sign your name using your finger.</p>\n\n    <div text-center>\n\n    <button ion-button clear style="color:primary;text-transform: none;" (click)="ngAfterViewInit();">Clear Signature</button>\n\n  </div>\n\n</ion-content>\n\n<ion-footer style="padding: 5px">\n\n    <button ion-button style="text-transform: none;" block (click)="submittimesheet()"  [disabled]="!drawstart">Approve and Complete</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\resignatureverification\resignatureverification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ResignatureverificationPage);
    return ResignatureverificationPage;
}());

//# sourceMappingURL=resignatureverification.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsPage; });
/* unused harmony export detailsvalue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_push__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdetailsPage = /** @class */ (function () {
    function UserdetailsPage(push, device, alertCtrl, loadingCtrl, http) {
        this.push = push;
        this.device = device;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.useremployee = "";
        this.client = "";
        this.devicedetails = new detailsvalue();
    }
    UserdetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UserdetailsPage");
    };
    UserdetailsPage.prototype.createpushnotifyId = function () {
        var _this = this;
        console.log("functions entred to createpushnotifyId");
        return new Promise(function (resolve, reject) {
            var options = {
                android: {
                    senderID: "88456188271"
                },
                ios: {
                    alert: "true",
                    badge: true,
                    sound: "false"
                },
                windows: {},
                browser: {
                    pushServiceURL: "http://push.api.phonegap.com/v1/push"
                }
            };
            var pushObject = _this.push.init(options);
            console.log("push keysss devicepushregistration");
            pushObject.on("registration").subscribe(function (registration) {
                console.log("Dveice registered", registration);
                _this.devicedetails.pushuserid = registration.registrationId;
                resolve();
            }, function (Error) {
                console.log("functions entred to createpushnotifyId");
                reject();
            });
        });
    };
    UserdetailsPage.prototype.pushsetup = function () {
        var options = {
            android: {
                senderID: "88456188271"
            },
            ios: {
                alert: "true",
                badge: true,
                sound: "false"
            },
            windows: {},
            browser: {
                pushServiceURL: "http://push.api.phonegap.com/v1/push"
            }
        };
        // console.log("device ready");
        // console.log("Device UUID is:fffff ");
        // console.log("Device UUID is: " + this.device);
        // console.log("Device UUID is: " + JSON.stringify(this.device));
        // console.log("Device platform is: " + this.device.platform);
        // console.log("Device model is: " + this.device.model);
        // console.log("Device version is: " + this.device.version);
        // console.log("Device manufacturer is: " + this.device.manufacturer);
        // console.log("Device serial is: " + this.device.serial);
        console.log(this.push);
        var pushObject = this.push.init(options);
        pushObject
            .on("notification")
            .subscribe(function (notification) {
            console.log("Received a notification", notification);
        });
        console.log("push keysss");
        pushObject.on("registration").subscribe(function (registration) {
            console.log("Dveice registered", registration);
            //this.devicedetails.pushuserid = registration.registrationId;
        });
        pushObject
            .on("error")
            .subscribe(function (error) { return console.error("Error with Push plugin", error); });
    };
    UserdetailsPage.prototype.devicepushregistration = function (memberId, isemp) {
        var _this = this;
        console.log(memberId);
        console.log(isemp);
        console.log("functions entred");
        this.createpushnotifyId().then(function (data) {
            console.log("createnotify id entred");
            console.log(data);
            var myparams = new URLSearchParams();
            myparams.append("employeeId", _this.useremployee);
            myparams.append("clientId", _this.client);
            console.log("device ready devicepushregistration");
            console.log("Device UUID is:fffff ");
            console.log("Device UUID is: " + _this.device);
            console.log("Device UUID is: " + JSON.stringify(_this.device));
            console.log("Device platform is: " + _this.device.platform);
            console.log("Device model is: " + _this.device.model);
            console.log("Device version is: " + _this.device.version);
            console.log("Device manufacturer is: " + _this.device.manufacturer);
            console.log("Device serial is: " + _this.device.serial);
            _this.devicedetails.uuid = _this.device.uuid;
            _this.devicedetails.model = _this.device.model;
            _this.devicedetails.devPlat = _this.device.platform;
            _this.devicedetails.version = _this.device.version;
            _this.devicedetails.devmanf = _this.device.manufacturer;
            _this.devicedetails.devserial = _this.device.serial;
            if (isemp) {
                _this.devicedetails.employeeId = memberId;
                _this.devicedetails.clientId = null;
            }
            else {
                _this.devicedetails.clientId = memberId;
                _this.devicedetails.employeeId = null;
            }
            //  this.devicedetails.pushuserid=this.device.pushu
            var loading = _this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading.present();
            //this.devicedetails = JSON.stringify( this.devicedetails);
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                    "Content-Type": "application/json",
                    Authorization: "my-auth-token"
                })
            };
            // let url = "api/OutcomeEntries/addoutcomedetail";
            var url = "api/Auth/savedevicedetails";
            _this.http.post(url, _this.devicedetails, httpOptions).subscribe(function (data) {
                console.log(data);
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        }, function (err) {
            console.log("error function in data");
            console.log(err);
        });
    };
    UserdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-userdetails",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\userdetails\userdetails.html"*/'<!--\n  Generated template for the UserdetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>userdetails</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <p></p> -->\n</ion-content>\n '/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\userdetails\userdetails.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */]])
    ], UserdetailsPage);
    return UserdetailsPage;
}());

var detailsvalue = /** @class */ (function () {
    function detailsvalue() {
    }
    return detailsvalue;
}());

//# sourceMappingURL=userdetails.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the GlobalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlobalPage = /** @class */ (function () {
    function GlobalPage() {
        this.iscgdashreload = false;
        this.isredashrelaod = false;
    }
    GlobalPage.prototype.Adddata = function (appdetails) {
        console.log(appdetails);
        console.log(appdetails.userdetail.name);
        console.log(appdetails.tokenString);
        this.employeeId = appdetails.userdetail.employeeId;
        this.clientId = appdetails.userdetail.clientId;
        this.agencyId = appdetails.userdetail.agencyId;
        this.name = appdetails.userdetail.name;
        this.isClient = appdetails.userdetail.isClient;
        this.isEmployee = appdetails.userdetail.isEmployee;
        this.galleryPhoto = appdetails.userdetail.galleryPhoto;
        this.token = appdetails.tokenString;
    };
    GlobalPage.prototype.Addcleardata = function () {
        this.employeeId = null;
        this.clientId = null;
        this.agencyId = null;
        this.name = null;
        this.isClient = null;
        this.isEmployee = null;
        this.galleryPhoto = null;
        this.token = null;
    };
    GlobalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalPage');
    };
    GlobalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-global',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\global\global.html"*/'<!--\n\n  Generated template for the GlobalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>global</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\global\global.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalPage);
    return GlobalPage;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddentriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgnonschreview_cgnonschreview__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddentriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddentriesPage = /** @class */ (function () {
    function AddentriesPage(navCtrl, navParams, alertCtrl, loadingCtrl, global, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.http = http;
        this.stdt = new Date();
        this.det = [];
        this.reviewload = true;
        this.missednonsch = [];
        this.isCompleted = true;
        this.count = 0;
        this.req = false;
    }
    AddentriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddentriesPage');
    };
    AddentriesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var clientno = this.navParams.get("clientno");
        //this.clientName = client.clientName;
        var url = "api/Cgmultipletc/cdnonschmised?";
        var myParams = new URLSearchParams();
        myParams.append("EmployeeId", this.global.employeeId.toString());
        myParams.append("ClientId", clientno);
        myParams.append("AgencyId", this.global.agencyId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            if (data != null) {
                _this.missednonsch = data.cgnonschedule;
                _this.det = _this.missednonsch.jobTaskdet;
            }
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    AddentriesPage.prototype.review = function (nonschdet) {
        var _this = this;
        if (this.reviewload) {
            console.log(nonschdet);
            var databindval = {
                "ClientId": nonschdet.clientId,
                "EmpId": nonschdet.employeeId,
                "stdtm": nonschdet.tcstdt,
                "ettmdt": nonschdet.tceddt
            };
            var databindval1 = JSON.stringify(databindval);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            console.log(databindval1);
            var httpOptions = {
                headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({
                    "Content-Type": "application/json",
                    Authorization: "my-auth-token"
                })
            };
            var url = "api/Cgmultipletc/nonschreview?";
            this.http.post(url, databindval1, httpOptions).subscribe(function (data) {
                loading_1.dismiss();
                _this.reviewreturn = data;
                _this.reviewload = false;
                console.log(_this.reviewreturn);
                if (_this.reviewreturn != null) {
                    // this.nonschdetailsoverlap(data).subscribe((data1:any)=>
                    // {
                    // });
                    var alert_1 = _this.alertCtrl.create({
                        message: "You've entered time that overlaps with an exsisting time entry",
                        cssClass: "buttonCss",
                        buttons: [
                            {
                                text: "I'll use existing time entry",
                                handler: function (data) {
                                    // overlapval.requesttime=true;
                                    console.log("ok clicked");
                                    // return false;
                                    //  reject();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgnonschreview_cgnonschreview__["a" /* CgnonschreviewPage */], { "nonschdata": nonschdet });
                                    //  this.navCtrl.pop();
                                }
                            },
                            {
                                text: "Replace Time Entry",
                                handler: function (data) {
                                    nonschdet.tcstdt = _this.reviewreturn.startDT;
                                    nonschdet.tceddt = _this.reviewreturn.endDT;
                                    // this.req = true;
                                    // this.reqdata = overlapval;
                                    // overlapval.requesttime = true;
                                    // console.log(overlapval.requesttime);
                                    // resolve();
                                    console.log("ok clicked");
                                    console.log(nonschdet);
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgnonschreview_cgnonschreview__["a" /* CgnonschreviewPage */], { "nonschdata": nonschdet });
                                    // this.navCtrl.pop();
                                }
                            },
                        ]
                    });
                    alert_1.present();
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgnonschreview_cgnonschreview__["a" /* CgnonschreviewPage */], { "nonschdata": nonschdet });
                }
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgnonschreview_cgnonschreview__["a" /* CgnonschreviewPage */], { "nonschdata": nonschdet });
        }
    };
    AddentriesPage.prototype.nction = function (jobdet) {
        console.log("completete");
        console.log(jobdet);
        if (jobdet.isCompleted == false) {
            this.count = this.count + 1;
            if (this.count == this.det.length) {
                console.log("value got");
                this.isCompleted = false;
            }
        }
    };
    AddentriesPage.prototype.nction1 = function (jobdet) {
        console.log("true val");
        this.isCompleted = true;
    };
    AddentriesPage.prototype.nonschdetailsoverlap = function () {
        // return new Promise((resolve, reject) => {
        console.log("value got");
        var alert = this.alertCtrl.create({
            message: "You've entered time that overlaps with an exsisting time entry",
            cssClass: "buttonCss",
            buttons: [
                {
                    text: "I'll use existing time entry",
                    // cssClass: 'popup-dark',
                    handler: function (data) {
                        // overlapval.requesttime=true;
                        console.log("ok clicked");
                        return false;
                        //  reject();
                        //  this.navCtrl.pop();
                    }
                },
                {
                    text: "Replace Time Entry",
                    handler: function (data) {
                        // this.req = true;
                        // this.reqdata = overlapval;
                        // overlapval.requesttime = true;
                        // console.log(overlapval.requesttime);
                        // resolve();
                        console.log("ok clicked");
                        // this.navCtrl.pop();
                    }
                },
            ]
        });
        alert.present();
        //  });
        //  console.log("over", overlapval);
        // console.log("schdet",nonschdet);
        // if(overlapval!=null&&overlapval.requesttime==false){
    };
    AddentriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addentries',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\addentries\addentries.html"*/'<!--\n\n  Generated template for the AddentriesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar  color="primary">\n\n    <ion-title style="padding-left: 10%">Add Time Entry</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n                <ion-avatar item-start *ngIf="missednonsch.clientPhoto!=null;">\n\n                  <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(missednonsch.clientPhoto)" >\n\n                  <!-- {{i.clientPhoto}} -->\n\n                </ion-avatar>\n\n                <ion-avatar item-start *ngIf="missednonsch.clientPhoto==null&&missednonsch.isMale==true;">\n\n                  <img class="img" src="assets/imgs/male.png">\n\n                  <!-- {{i.clientPhoto}} -->\n\n                </ion-avatar>\n\n                <ion-avatar item-start *ngIf="missednonsch.clientPhoto==null&&missednonsch.isMale!=true;">\n\n                  <img class="img" src="assets/imgs/female.png">\n\n                  <!-- {{i.clientPhoto}} -->\n\n                </ion-avatar>\n\n              \n\n                <p>RECIPIENT OF CARE</p>\n\n                <h2>{{missednonsch.clientName|uppercase}}</h2></ion-item>\n\n        <ion-row align-items-center style="background-color: #F5F5F5;">\n\n            <ion-col style="padding: 0">\n\n              <h5 style="padding:10px;padding-top: 15px;margin: 0">SERVICE TIME</h5>\n\n            </ion-col>\n\n         </ion-row>\n\n        <ion-grid *ngIf=" req==false">\n\n                <!-- <ion-row>\n\n                        <ion-col>\n\n                            <ion-label>Date </ion-label>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                                <ion-datetime displayFormat=" MMM DD, YY" [(ngModel)]="missednonsch.date"  style="float: right;margin-right:2%">{{missednonsch.date | date :\'MMM d YY,\'}}</ion-datetime>\n\n                        </ion-col>\n\n                       \n\n                    </ion-row> -->\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Time in</ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <!-- <ion-label style="float: right;margin-right:2%"> {{mtc.date | date :\'MMMM d, y \'}}{{mtc.tcstdt| date :\' h:mm a \'}}</ion-label> -->\n\n                    <ion-datetime displayFormat=" MMM DD, YYYY hh:mm A" [(ngModel)]="missednonsch.tcstdt"  style="float: right;margin-right:2%">{{missednonsch.tcstdt| date :\'h:mm a\'}}</ion-datetime>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Time out  </ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                        <ion-datetime displayFormat=" hh:mm A" [(ngModel)]="missednonsch.tceddt"  style="float: right;margin-right:2%">{{missednonsch.tceddt| date :\'h:mm a\'}}</ion-datetime>\n\n                </ion-col>\n\n               \n\n            </ion-row>\n\n        </ion-grid>\n\n        <ion-grid *ngIf="req==true">\n\n                <!-- <ion-row>\n\n                        <ion-col>\n\n                            <ion-label>Date </ion-label>\n\n                        </ion-col>\n\n                        <ion-col>\n\n                                <ion-datetime displayFormat=" MMM DD, YY" [(ngModel)]="missednonsch.date"  style="float: right;margin-right:2%">{{missednonsch.date | date :\'MMM d YY,\'}}</ion-datetime>\n\n                        </ion-col>\n\n                       \n\n                    </ion-row> -->\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Time in</ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <!-- <ion-label style="float: right;margin-right:2%"> {{mtc.date | date :\'MMMM d, y \'}}{{mtc.tcstdt| date :\' h:mm a \'}}</ion-label> -->\n\n                    <ion-datetime displayFormat="  hh:mm A" [(ngModel)]="reqdata.startDT"  style="float: right;margin-right:2%">{{reqdata.startDT| date :\'h:mm a\'}}</ion-datetime>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Time out  </ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                        <ion-datetime displayFormat="hh:mm A" [(ngModel)]="reqdata.endDT"  style="float: right;margin-right:2%">{{reqdata.endDT| date :\'h:mm a\'}}</ion-datetime>\n\n                </ion-col>\n\n               \n\n            </ion-row>\n\n        </ion-grid>\n\n        \n\n\n\n\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >ACTIVITIES</h5>\n\n       \n\n\n\n        <ion-grid style="padding: 0" *ngIf="missednonsch != null">\n\n               \n\n        <ion-list no-lines style="margin: 0" *ngFor="let jobdet of missednonsch.jobTaskdet">\n\n                <ion-item>\n\n                   <ion-label>{{jobdet.taskName}}</ion-label>\n\n                    <ion-checkbox [(ngModel)]="jobdet.isCompleted" id="myCheckbox" (click)="jobdet.isCompleted ? nction1(jobdet) : nction(jobdet)"></ion-checkbox>\n\n            </ion-item></ion-list>\n\n       </ion-grid>\n\n       <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >NOTES</h5>\n\n       <ion-row style=" background-color:#E3F2FD;">\n\n                <ion-textarea class="note"  [(ngModel)]="missednonsch.notes" placeholder="Enter notes"></ion-textarea> \n\n       </ion-row>\n\n       <!-- [(ngModel)]="tcdetails.notes" -->\n\n      <h5 style="padding:10px;padding-top: 15px;margin: 0;background-color: #F5F5F5;">SERVICE DETAILS</h5>\n\n      <ion-grid>\n\n          <ion-row>\n\n              <ion-col>\n\n                  <ion-label style="color:black">Service type </ion-label>\n\n              </ion-col>\n\n              <ion-col *ngIf="missednonsch.jobTaskdet != null && missednonsch.jobTaskdet[0].jobName != null" >\n\n                  <ion-label style="color:grey;float: right;margin-right: 2%">{{missednonsch.jobTaskdet[0].jobName}}</ion-label>\n\n              </ion-col> \n\n          </ion-row>\n\n          <ion-row>\n\n              <ion-col>\n\n                  <ion-label style="color:black">Ratio(Provider:Recipient) </ion-label>\n\n              </ion-col>\n\n              <ion-col>\n\n                  <ion-label style="color:grey;float:right;margin-right:2%">1:{{missednonsch.rserviceratio}}</ion-label>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n           <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >SERVICE LOCATION</h5>\n\n   \n\n           <ion-grid text-wrap>\n\n               <ion-row>\n\n                   <ion-col col-4>\n\n                       <ion-icon name="home" style="font-size: 20px">&nbsp;Address</ion-icon>\n\n                   </ion-col>\n\n                   <ion-col text-right col-8>\n\n                       <ion-label style="float: right;margin-right: 2%;color:grey"> {{missednonsch.street1}}, {{missednonsch.street2}} </ion-label>\n\n                   </ion-col>\n\n               </ion-row>\n\n               <ion-row>\n\n                   <ion-col col-4>\n\n                       <ion-icon name="podium" style="font-size: 20px">&nbsp;City</ion-icon>\n\n                   </ion-col>\n\n                   <ion-col text-right col-8>\n\n                       <ion-label style="float: right;margin-right: 2%;color:grey"> {{missednonsch.city}} </ion-label>\n\n                   </ion-col>\n\n               </ion-row>\n\n               <ion-row>\n\n                   <ion-col col-4>\n\n                       <ion-icon ios="ios-globe-outline" md="md-globe"  style="font-size: 20px">&nbsp;State</ion-icon>\n\n                   </ion-col>\n\n                   <ion-col text-right col-8>\n\n                       <ion-label style="float: right;margin-right: 2%;color:grey">{{missednonsch.state}} </ion-label>\n\n                   </ion-col>\n\n               </ion-row>\n\n               <ion-row>\n\n                   <ion-col col-4>\n\n                       <ion-icon name="pin" style="font-size: 20px">&nbsp;Zip</ion-icon>\n\n                   </ion-col>\n\n                   <ion-col text-right col-8>\n\n                       <ion-label style="float: right;margin-right: 2%;color:grey">{{missednonsch.zipCode}} </ion-label>\n\n                   </ion-col>\n\n               </ion-row>\n\n           </ion-grid>\n\n          </ion-content>\n\n          <ion-footer style="padding: 5px" >\n\n\n\n              <button ion-button color="primary" [disabled]="isCompleted==false"  id="myButton" style="text-transform: none" (click)="review(missednonsch)" block >Review</button>\n\n              <!--[(disabled)]="!bath && !groom && !eat" -->\n\n          </ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\addentries\addentries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */]])
    ], AddentriesPage);
    return AddentriesPage;
}());

//# sourceMappingURL=addentries.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgnonschreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgnonschsignature_cgnonschsignature__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CgnonschreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgnonschreviewPage = /** @class */ (function () {
    function CgnonschreviewPage(navCtrl, navParams, global, http, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.isEdit = false;
    }
    CgnonschreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgnonschreviewPage');
    };
    CgnonschreviewPage.prototype.ionViewWillEnter = function () {
        this.nonschdetails = this.navParams.get("nonschdata");
        console.log("review valuee");
        console.log(this.nonschdetails);
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     "Content-Type": "application/json",
        //     Authorization: "my-auth-token"
        //   })
        // };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        // let myparams=new URLSearchParams();
        // myparams.append("ClientId",this.clientId);
        // myparams.append("EmpId",this.EmpId);
        // myparams.append("date",this.date);
        // myparams.append("startdate",this.stdt);
        // console.log("hi",myparams);
        // let url = "api/Cgmultipletc/nonschreview?";
        // this.http.get(url+myparams).subscribe(
        //   (data: any) => {
        //     console.log("hi")
        //     console.log(data);
        //     loading.dismiss();
        //     this.nonschdetailsoverlap(data);
        //   },
        //   err => {
        //     console.log(err);
        //     loading.dismiss();
        //   });
    };
    CgnonschreviewPage.prototype.nonschdetailsoverlap = function (overlapval) {
        var _this = this;
        this.nonschdetails = this.navParams.get("nonschdata");
        if (overlapval == true) {
            console.log("value got");
            var alert_1 = this.alertCtrl.create({
                message: "You've entered time that overlaps with an exsisting time entry",
                cssClass: "buttonCss",
                buttons: [
                    {
                        text: "I'll use existing time entry",
                        // cssClass: 'popup-dark',
                        handler: function (data) {
                            console.log("ok clicked");
                            _this.navCtrl.pop();
                        }
                    },
                    {
                        text: "Replace Time Entry",
                        handler: function (data) {
                            console.log("ok clicked");
                            _this.navCtrl.pop();
                        }
                    },
                ]
            });
            alert_1.present();
        }
    };
    CgnonschreviewPage.prototype.edit = function (data) {
        console.log(data);
        this.isEdit = true;
    };
    CgnonschreviewPage.prototype.save1 = function (nonschdetails) {
        // console.log(nonschdetails);
        this.isEdit = false;
    };
    CgnonschreviewPage.prototype.canceleditTC = function () {
        this.isEdit = false;
    };
    CgnonschreviewPage.prototype.submit = function (submitteddata) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgnonschsignature_cgnonschsignature__["a" /* CgnonschsignaturePage */], { "nonschsubdata": submitteddata });
    };
    CgnonschreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgnonschreview',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgnonschreview\cgnonschreview.html"*/'<ion-header text-center>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title style="padding-right: 50px">Review </ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  \n\n  <ion-content style="background-color: white">\n\n    <div *ngIf="nonschdetails!=null">\n\n      <div  *ngIf="isEdit==false">\n\n              <ion-item text-center no-lines>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col offset-6>\n\n              <div class="circle" style="margin-left: -28px">\n\n                <div class="letter">{{nonschdetails.agencyname}}</div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <h1>{{nonschdetails.agencyname}}</h1>\n\n        <p>{{nonschdetails.agencyno}}</p>\n\n      </ion-item>\n\n      <ion-item no-lines style="background-color: #F5F5F5">\n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start *ngIf="nonschdetails.clientPhoto!=null;">\n\n            <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(nonschdetails.clientPhoto)" >\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <ion-avatar item-start *ngIf="nonschdetails.clientPhoto==null&&nonschdetails.isMale==true;">\n\n            <img class="img" src="assets/imgs/male.png">\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <ion-avatar item-start *ngIf="nonschdetails.clientPhoto==null&&nonschdetails.isMale!=true;">\n\n            <img class="img" src="assets/imgs/female.png">\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <p>RECIPIENT OF CARE</p>\n\n          <h2>{{nonschdetails.clientName|uppercase}}</h2>\n\n        </ion-item>\n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start>\n\n            <img class="img" src="assets/imgs/male.png">\n\n          </ion-avatar>\n\n          <p>PROVIDED BY</p>\n\n          <h2>{{global.name|uppercase}}</h2>\n\n        </ion-item>\n\n  \n\n      </ion-item>\n\n      <ion-row align-items-center style="background-color: white;">\n\n        <ion-col style="padding: 0">\n\n          <p style="  color:gray;  margin-bottom: -10px;margin-left: 8px;font-size: 15px">DATE OF SERVICE</p>\n\n          <h4 style="margin-left: 5px;font-size: 18px">{{nonschdetails.date | date :\'MMMM d, y \'}}</h4>\n\n        </ion-col>\n\n        <ion-col style="padding: 0">\n\n               \n\n                <ion-icon name="create" style="float: right;margin-right: 10px;"  color="primary" (click)="edit(nonschdetails)" >&nbsp;&nbsp;Edit</ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n     <hr style="background-color: gainsboro;">\n\n    <ion-grid style="background-color: white;">\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <p style="color:gray; margin-bottom: -5px;font-size: 18px">Time in</p>\n\n                <h4 style="font-size: 18px"> {{nonschdetails.tcstdt| date :\' hh:mm a \'}}</h4>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                    <p style="color:gray ;margin-bottom: -5px;font-size: 18px">Time out </p>\n\n                    <h4 style="font-size: 18px">{{nonschdetails.tceddt| date :\' hh:mm a \'}}</h4>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                    <p style="color:gray; margin-bottom: -5px;font-size: 18px">Total Time</p>\n\n                    <h4 style="font-size: 18px">{{nonschdetails.duration}} Minutes</h4>\n\n                </ion-col>\n\n        </ion-row>\n\n          \n\n      </ion-grid>\n\n      \n\n      <hr style="background-color: gainsboro;">\n\n\n\n      <h5 style="padding:10px;padding-top: 15px;margin: 0;color: gray" >ACTIVITIES</h5>\n\n     \n\n\n\n      <div *ngFor="let i of nonschdetails.jobTaskdet">\n\n          <ion-row align-items-center *ngIf="i.isCompleted">\n\n            <ion-col col-2>\n\n              <ion-icon style="font-weight: 850;font-size: 2rem;color:#4CAF50" name="checkmark"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <ion-label style="margin: 0">{{i.taskName}}</ion-label>\n\n            </ion-col>\n\n          </ion-row></div>\n\n          <hr style="background-color: gainsboro;">\n\n          <h5 style="padding:10px;padding-top: 5px;background-color: white;margin: 0;color: gray">NOTES</h5>\n\n\n\n          <ion-textarea [(ngModel)]="nonschdetails.notes" style="pointer-events: none;background-color: #F5F5F5;border: solid 1px #B0BEC5"></ion-textarea>\n\n             <!-- <ion-row style="padding-bottom: 10px;padding-top: 10px" >\n\n\n\n              <div class="half">\n\n\n\n                      <div class="tab" *ngIf="nonschdetails!=null">\n\n                          <input id="tab1" type="checkbox" name="tabs">\n\n                        <label for="tab1">Service Detail&nbsp;&nbsp;- &nbsp;&nbsp;{{nonschdetails.date | date :\'MMMM d\'}}</label>\n\n                        <div class="tab-content">\n\n                          <ion-grid>\n\n                              <ion-row>\n\n                                  <ion-col>\n\n                                      <ion-label style="color:black">Service type </ion-label>\n\n                                  </ion-col>\n\n                                  <ion-col  *ngIf="nonschdetails.jobTaskdet != null">\n\n                                      <ion-label style="color:grey;float: right;margin-right: 2%">{{nonschdetails.jobTaskdet[0].jobName}}</ion-label>\n\n                                  </ion-col> \n\n                              </ion-row>\n\n                              <ion-row>\n\n                                  <ion-col>\n\n                                      <ion-label style="color:black">Ratio(Provider:Recipient) </ion-label>\n\n                                  </ion-col>\n\n                                  <ion-col>\n\n                                      <ion-label style="color:grey;float:right;margin-right:2%">1:{{nonschdetails.rserviceratio}}</ion-label>\n\n                                  </ion-col>\n\n                              </ion-row>\n\n                          </ion-grid>\n\n                  \n\n                          <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >NOTES</h5>\n\n                      <ion-row style=" background-color:#E3F2FD;color:black">\n\n                              <ion-textarea [(ngModel)]="nonschdetails.notes" class="note" placeholder="Enter notes"></ion-textarea>\n\n                      </ion-row>\n\n                      <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >SERVICE LOCATION</h5>\n\n\n\n                      <ion-grid text-wrap>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon name="home" style="font-size: 20px;color:black">&nbsp;Address</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black"> {{nonschdetails.street1}}, {{nonschdetails.street2}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon name="podium" style="font-size: 20px;color:black">&nbsp;City</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black"> {{nonschdetails.city}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon ios="ios-globe-outline" md="md-globe"  style="font-size: 20px;color:black">&nbsp;State</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black">{{nonschdetails.state}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon name="pin" style="font-size: 20px;color:black">&nbsp;Zip</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black">{{nonschdetails.zipCode}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                      </ion-grid>\n\n\n\n                        </div>\n\n                      </div>\n\n                      \n\n                    </div>\n\n\n\n      </ion-row> -->\n\n   \n\n      </div>\n\n      <!-- <div>\n\n          <h4 style="margin-left: 3%">I didn\'t provide care</h4> </div> -->\n\n\n\n \n\n  \n\n \n\n<!-- \n\n       <div>\n\n                          <button ion-button color="red" [disabled]="buttonState()" style="position:fixed;">button</button>\n\n                          </div> -->\n\n  </div>\n\n\n\n\n\n<div *ngIf="isEdit==true" style="background-color: #F5F5F5">\n\n      <div>\n\n              <br>\n\n              <ion-card style="padding: 5px">\n\n                <ion-list>\n\n                   \n\n                \n\n                   <ion-item>\n\n                    <ion-label style="font-size: 16px" stacked>Time In</ion-label>\n\n                    <ion-datetime displayFormat="hh:mm A" [(ngModel)]="nonschdetails.tcstdt">{{nonschdetails.tcstdt}}</ion-datetime>\n\n                  </ion-item>\n\n            \n\n                  <ion-item>\n\n                    <ion-label style="font-size: 16px" stacked>Time Out</ion-label>\n\n                    <ion-datetime displayFormat="hh:mm A" [(ngModel)]="nonschdetails.tceddt">{{nonschdetails.tceddt}}</ion-datetime>\n\n            \n\n                  </ion-item>\n\n            \n\n                </ion-list>\n\n                \n\n                <div text-center>\n\n                  <button ion-button id="btn" (click)="save1(nonschdetails)" style="background-color:rgb(0, 153, 255) ">Save</button>\n\n                  <button ion-button id="btn" (click)="canceleditTC()" style="background-color:red ">Cancel</button>\n\n                </div>\n\n              </ion-card>\n\n            </div>\n\n      </div>\n\n\n\n      \n\n   \n\n  </ion-content>\n\n  <ion-footer style="padding: 5px">\n\n  \n\n    <p style="color: grey">If this is correct, please sign and submit your timesheet. Remember, it is a federal crime to submit a fraudalent timesheet.</p>\n\n  \n\n    <button ion-button color="primary" style="text-transform: none" (click)="submit(nonschdetails)" block>Verify Visit</button>\n\n  \n\n  \n\n  \n\n  \n\n  \n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgnonschreview\cgnonschreview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CgnonschreviewPage);
    return CgnonschreviewPage;
}());

//# sourceMappingURL=cgnonschreview.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgnonschsignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CgnonschsignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgnonschsignaturePage = /** @class */ (function () {
    function CgnonschsignaturePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 5,
            canvasWidth: 500,
            canvasHeight: 300
        };
        this.drawstart = false;
    }
    CgnonschsignaturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgnonschsignaturePage');
    };
    CgnonschsignaturePage.prototype.ionViewWillEnter = function () {
        this.completemultible = this.navParams.get("nonschsubdata");
        console.log("review completedtc");
        console.log(this.completemultible);
        this.drawComplete();
    };
    CgnonschsignaturePage.prototype.canvasResize = function () {
        var canvas = document.querySelector("canvas");
        this.signaturePad.set("minWidth", 1);
        this.signaturePad.set("canvasWidth", canvas.offsetWidth);
        this.signaturePad.set("canvasHeight", canvas.offsetHeight);
    };
    CgnonschsignaturePage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
        this.canvasResize();
        this.drawstart = false;
    };
    CgnonschsignaturePage.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        this.signature = this.signaturePad.toDataURL();
        this.Signaturevalidations = this.signaturePad.toDataURL();
        // console.log(this.Signaturevalidations);
    };
    CgnonschsignaturePage.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log("begin drawing");
        this.drawstart = true;
    };
    CgnonschsignaturePage.prototype.approvealert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Thank you!",
            message: "Your visit details have been signed and submitted for processing.",
            // cssClass: "buttonCss5",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("ok clicked");
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 4));
                    }
                }
            ]
        });
        alert.present();
    };
    CgnonschsignaturePage.prototype.approve = function () {
        // this.cgmultible = this.completemultible;
        var _this = this;
        console.log("multible data values");
        console.log(this.completemultible);
        this.datasent =
            {
                cgnonschedule: this.completemultible, signature: this.signature
            };
        console.log("data sent");
        console.log(this.datasent);
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.datasent = JSON.stringify(this.datasent);
        console.log(this.datasent);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        var url = "api/Cgmultipletc/nonschmistcsign?";
        this.http.post(url, this.datasent, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.iscgdashreload = true;
            _this.approvealert();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgnonschsignaturePage.prototype.cancel = function () {
        this.navCtrl.pop();
        // this.navCtrl.push(CgcompletetimesheetPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], CgnonschsignaturePage.prototype, "signaturePad", void 0);
    CgnonschsignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cgnonschsignature',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgnonschsignature\cgnonschsignature.html"*/'\n\n<ion-header>\n\n\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n          <ion-col col-2 style="padding: 0">\n\n           <button ion-button clear style="text-transform: none;color: white;font-size: 90%;padding-left: 0" (click)="cancel()">Cancel</button>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n  <ion-title text-center style="padding-right:22%">Signature Verification</ion-title>\n\n</ion-col>\n\n\n\n<!-- <ion-col>\n\n    <ion-icon style="color: white;font-size: 30px;float: right;" name="more"></ion-icon>\n\n</ion-col> -->\n\n</ion-row>\n\n</ion-grid>\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n      <form method=\'post\'>\n\n          \n\n  <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()" ></signature-pad>\n\n  <p style="text-align: center;color: grey">Sign your name using your finger.</p>\n\n  <div text-center>\n\n  <button ion-button clear style="color:primary;text-transform: none;" (click)="ngAfterViewInit();">Clear Signature</button>\n\n</div>\n\n<ion-footer style="padding: 5px">\n\n      <button ion-button style="text-transform: none;" block (click)="approve()" [disabled]="!drawstart">Complete Visit</button>\n\n  </ion-footer>\n\n  </form>\n\n  <!-- [ngStyle]="{\'pointer-events\':this.Signaturevalidations!=null? \'block\':\'none\'}" -->\n\n<!-- <button (click)="approvealert()">zdfdfsfddsf</button> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgnonschsignature\cgnonschsignature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__global_global__["a" /* GlobalPage */]])
    ], CgnonschsignaturePage);
    return CgnonschsignaturePage;
}());

//# sourceMappingURL=cgnonschsignature.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgblockcalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgblockcalendarrepeat_cgblockcalendarrepeat__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgtimesheetcalendar_cgtimesheetcalendar__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CgblockcalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgblockcalendarPage = /** @class */ (function () {
    function CgblockcalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CgblockcalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgblockcalendarPage');
    };
    CgblockcalendarPage.prototype.never = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgblockcalendarrepeat_cgblockcalendarrepeat__["a" /* CgblockcalendarrepeatPage */]);
    };
    CgblockcalendarPage.prototype.save = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgtimesheetcalendar_cgtimesheetcalendar__["a" /* CgtimesheetcalendarPage */]);
    };
    CgblockcalendarPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgblockcalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgblockcalendar',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgblockcalendar\cgblockcalendar.html"*/'\n\n<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid style="padding: 0">\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n          <button ion-button clear style="text-transform: none;color: white;padding: 0;float: left;" (click)="cancel()">Cancel</button>\n\n        </ion-col>\n\n        <ion-col  style="position: unset;">\n\n          <ion-title>Block Calender</ion-title>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button clear style="text-transform: none;color: white;padding: 0;float: right;" (click)="save()">Save</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color:  #F5F5F5">\n\n  <ion-list no-lines style="margin-bottom: 0">\n\n    <ion-item>\n\n      <ion-label>All day</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n    <ion-item text-wrap> \n\n      <ion-label>Starts </ion-label>\n\n      <ion-label  text-end> August 30,2018 4:00 PM </ion-label>       \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Ends </ion-label>\n\n      <ion-label text-end> 7:00 PM </ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Repeat</ion-label>\n\n      <ion-label text-end style="color:gray;" (click)="never()">Never</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Auto Reject Shift-Request</ion-label>\n\n      <ion-toggle></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>           \n\n  <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >NOTES</h5>\n\n<ion-row style=" background-color:#E3F2FD;">\n\n        <ion-textarea class="note" placeholder="Enter notes"></ion-textarea>\n\n</ion-row>  \n\n</ion-content>   \n\n     \n\n      \n\n       \n\n      \n\n        \n\n            \n\n\n\n           \n\n\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgblockcalendar\cgblockcalendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgblockcalendarPage);
    return CgblockcalendarPage;
}());

//# sourceMappingURL=cgblockcalendar.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgblockcalendarrepeatPage; });
/* unused harmony export repeat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CgblockcalendarrepeatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgblockcalendarrepeatPage = /** @class */ (function () {
    function CgblockcalendarrepeatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.repeatop = [{
                opt: "Never",
            },
            {
                opt: "Every day",
            }, {
                opt: "Every week",
            }, {
                opt: "Every two weeks",
            }, {
                opt: "Every month",
            }, {
                opt: "Every year",
            },];
    }
    CgblockcalendarrepeatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgblockcalendarrepeatPage');
    };
    CgblockcalendarrepeatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgblockcalendarrepeat',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgblockcalendarrepeat\cgblockcalendarrepeat.html"*/'\n\n<ion-header text-center>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title style="padding-right: 50px">BlockCalender</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content radio-group style="background-color: #F5F5F5">\n\n   <ion-list>\n\n        <ion-item>\n\n                <ion-label style="color: black">Never</ion-label>\n\n                <ion-radio checked="true" value="Never"></ion-radio>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-label style="color: black">Every day</ion-label>\n\n                <ion-radio  value="Every day"></ion-radio>\n\n              </ion-item>\n\n               <ion-item>\n\n                <ion-label style="color: black">Every week</ion-label>\n\n                <ion-radio value="Every week"></ion-radio>\n\n              </ion-item>\n\n              <ion-item>\n\n                      <ion-label style="color: black">Every two weeks</ion-label>\n\n                      <ion-radio  value="Every two weeks"></ion-radio>\n\n           </ion-item>\n\n           <ion-item>\n\n                  <ion-label style="color: black">Every month</ion-label>\n\n                  <ion-radio value="Every month"></ion-radio>\n\n          </ion-item>\n\n           <ion-item>\n\n              <ion-label style="color: black">Every year</ion-label>\n\n               <ion-radio  value="Every year"></ion-radio>\n\n          </ion-item>\n\n            \n\n        <br><br>\n\n        <ion-item>\n\n            <ion-list style="margin: 0">Custom</ion-list>\n\n        </ion-item>\n\n   </ion-list>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgblockcalendarrepeat\cgblockcalendarrepeat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgblockcalendarrepeatPage);
    return CgblockcalendarrepeatPage;
}());

var repeat = /** @class */ (function () {
    function repeat() {
    }
    return repeat;
}());

//# sourceMappingURL=cgblockcalendarrepeat.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgreviewPage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signatureverification_signatureverification__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CgreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgreviewPage = /** @class */ (function () {
    function CgreviewPage(navCtrl, navParams, global, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this._DomSanitizer = _DomSanitizer;
        this.records = [
            {
                timeIn: "11.00 am",
                timeOut: "2.00 am",
            }
        ];
    }
    CgreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgreviewPage');
    };
    CgreviewPage.prototype.ionViewWillEnter = function () {
        this.reviewdetail = this.navParams.get("revicedvalue");
        console.log("review valuee");
        console.log(this.reviewdetail);
    };
    CgreviewPage.prototype.submit = function (valtocom) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signatureverification_signatureverification__["a" /* SignatureverificationPage */], { "cgvalsubmit": valtocom });
    };
    CgreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgreview',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgreview\cgreview.html"*/'<ion-header text-center>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-title style="padding-right: 50px">Review Visit</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n  <div *ngIf="reviewdetail!=null">\n\n    <ion-item text-center no-lines>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col offset-6>\n\n            <div class="circle" style="margin-left: -28px">\n\n              <div class="letter">{{reviewdetail.agencyname}}</div>\n\n            </div>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <h1>{{reviewdetail.agencyname}}</h1>\n\n      <p>{{reviewdetail.agencyno}}</p>\n\n    </ion-item>\n\n    <ion-item no-lines style="background-color: #F5F5F5">\n\n      <ion-item no-lines style="background-color: #F5F5F5">\n\n        <ion-avatar item-start *ngIf="reviewdetail.clientPhoto!=null;">\n\n          <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(reviewdetail.clientPhoto)" >\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="reviewdetail.clientPhoto==null&&reviewdetail.isMale==true;">\n\n          <img class="img" src="assets/imgs/male.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="reviewdetail.clientPhoto==null&&reviewdetail.isMale!=true;">\n\n          <img class="img" src="assets/imgs/female.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <p>RECIPIENT OF CARE</p>\n\n        <h2>{{reviewdetail.clientName|uppercase}}</h2>\n\n      </ion-item>\n\n      <ion-item no-lines style="background-color: #F5F5F5">\n\n        <ion-avatar item-start>\n\n          <img class="img" src="assets/imgs/male.png">\n\n        </ion-avatar>\n\n        <p>PROVIDED BY</p>\n\n        <h2>{{global.name|uppercase}}</h2>\n\n      </ion-item>\n\n\n\n    </ion-item>\n\n    <ion-grid>\n\n      <ion-row text-center>\n\n        <ion-col col-6 style="border: 1px solid gray">\n\n          <ion-label style="color:grey">DATE OF SERVICE</ion-label>\n\n          <ion-label> {{reviewdetail.date|date:\'MMMM d,yyyy \'}}</ion-label>\n\n        </ion-col>\n\n\n\n        <ion-col col-6 style="border: 1px solid gray">\n\n          <ion-label style="color:grey">TOTAL TIME</ion-label>\n\n          <ion-label>{{reviewdetail.duration}} Min</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row text-center>\n\n        <ion-col col-6 style="border: 1px solid gray">\n\n          <ion-label style="color:grey" *ngIf="reviewdetail.jobTaskdet != null && reviewdetail.jobTaskdet[0].jobName != null">SERVICE TYPE </ion-label>\n\n          <ion-label>{{reviewdetail.jobTaskdet[0].jobName}}</ion-label>\n\n        </ion-col>\n\n        <ion-col col-6 style="border: 1px solid gray">\n\n          <ion-label style="color:grey">RATIO </ion-label>\n\n          <ion-label>1:{{reviewdetail.rserviceratio}}</ion-label>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">ACTIVITIES</h5>\n\n    <div *ngFor="let i of reviewdetail.jobTaskdet">\n\n      <ion-row align-items-center *ngIf="i.isCompleted">\n\n        <ion-col col-2>\n\n          <ion-icon style="font-weight: 850;font-size: 2rem;color:#4CAF50" name="checkmark"></ion-icon>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-label style="margin: 0">{{i.taskName}}</ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row align-items-center *ngIf="!i.isCompleted">\n\n          <ion-col col-2>\n\n            <ion-icon style="font-weight: 850;font-size: 2rem;color:red" name="close"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n            <ion-label style="margin: 0">{{i.taskName}}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n    </div>\n\n    <!-- <ion-item>\n\n            <ion-icon name="md-checkmark" item-start></ion-icon> \n\n          \n\n            <ion-label>Grooming</ion-label>\n\n              \n\n            </ion-item> -->\n\n\n\n\n\n\n\n    <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">NOTES</h5>\n\n\n\n    <ion-textarea [(ngModel)]="reviewdetail.notes" style="pointer-events: none"></ion-textarea>\n\n\n\n    <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">TIME IN</h5>\n\n\n\n    <ion-grid style="padding: 0">\n\n      <ion-row>\n\n        <h4 style="margin: 10px">{{reviewdetail.tcstdt| date :\'h:mm a\'}}</h4>\n\n      </ion-row>\n\n      <ion-row>\n\n        <!-- <p style="margin-bottom:10px;margin-top: 5px;"><i>{{reviewdetail.street1}} {{reviewdetail.street2}} {{reviewdetail.state}} {{reviewdetail.zipCode}}</i></p> -->\n\n      </ion-row>\n\n      <ion-row >\n\n        <!-- <div *ngIf="reviewdetail.isLocdetIntime">\n\n          <ion-icon small name="checkmark-circle" style="color:#4CAF50;float:left;font-size:14px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n        </div> -->\n\n        <ion-item no-lines *ngIf="reviewdetail.isLocdetIntime">\n\n          <div *ngIf="reviewdetail.inTimeMap!=null">\n\n            <!-- <img class="img" [src]="reviewdetail.inTimeMap"> -->\n\n            <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(reviewdetail.inTimeMap)" style=" display: block;\n\n            width: 100%;\n\n            height: 120px;">\n\n          </div>\n\n\n\n          <h2>\n\n            <ion-icon small name="checkmark-circle" style="color:#4CAF50;float:left;font-size:14px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n          </h2>\n\n        </ion-item>\n\n        <div *ngIf="!reviewdetail.isLocdetIntime">\n\n          <ion-icon small name="close-circle" style="color:red;float:left;font-size:14px;" icon-start>&nbsp;&nbsp;LOCATION COULD NOT BE VERIFIED BY GPS</ion-icon>\n\n        </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">TIME OUT</h5>\n\n    <ion-grid style="padding: 0">\n\n      <ion-row>\n\n        <h4 style="margin: 10px;">{{reviewdetail.tceddt| date :\'h:mm a\'}}</h4>\n\n      </ion-row>\n\n      <ion-row>\n\n        <!-- <p style="margin-bottom:10px;margin-top: 5px;"><i>{{reviewdetail.street1}} {{reviewdetail.street2}} {{reviewdetail.state}} {{reviewdetail.zipCode}}</i></p> -->\n\n      </ion-row>\n\n      <ion-row >\n\n        <!-- <div *ngIf="reviewdetail.isLocdetOuttime==true">\n\n          <ion-icon small name="checkmark-circle" style="color:#4CAF50;float:left;font-size:12px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n        </div> -->\n\n        <ion-item no-lines *ngIf="reviewdetail.isLocdetOuttime">\n\n          <div *ngIf="reviewdetail.outTimeMap!=null">\n\n            <!-- <img class="img" [src]="reviewdetail.outTimeMap"> -->\n\n            <img [src]="_DomSanitizer.bypassSecurityTrustUrl(reviewdetail.outTimeMap)"  style=" display: block;\n\n            width: 100%;\n\n            height: 120px;">\n\n          </div>\n\n\n\n          <h2>\n\n            <ion-icon small name="checkmark-circle" style="color:#4CAF50;float:left;font-size:14px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n          </h2>\n\n        </ion-item>\n\n        <div *ngIf="!reviewdetail.isLocdetOuttime">\n\n          <ion-icon small name="close-circle" style="color:red;float:left;font-size:12px;" icon-start>&nbsp;&nbsp;LOCATION COULD NOT BE VERIFIED BY GPS</ion-icon>\n\n        </div>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n \n\n</ion-content>\n\n<ion-footer style="padding: 5px">\n\n\n\n  <p style="color: grey">If this is correct, please sign and submit your timesheet. Remember, it is a federal crime to submit a fraudalent timesheet.</p>\n\n\n\n  <button ion-button color="primary" style="text-transform: none" (click)="submit(reviewdetail)" block>Verify Visit</button>\n\n\n\n\n\n\n\n\n\n\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgreview\cgreview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CgreviewPage);
    return CgreviewPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgreview.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignatureverificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SignatureverificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignatureverificationPage = /** @class */ (function () {
    function SignatureverificationPage(navCtrl, navParams, http, alertCtrl, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 5,
            canvasWidth: 500,
            canvasHeight: 300
        };
        this.drawstart = false;
    }
    SignatureverificationPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignatureverificationPage");
    };
    SignatureverificationPage.prototype.ionViewWillEnter = function () {
        this.completedtc = this.navParams.get("cgvalsubmit");
        console.log("review completedtc");
        console.log(this.completedtc);
        this.drawComplete();
    };
    SignatureverificationPage.prototype.canvasResize = function () {
        var canvas = document.querySelector("canvas");
        this.signaturePad.set("minWidth", 1);
        this.signaturePad.set("canvasWidth", canvas.offsetWidth);
        this.signaturePad.set("canvasHeight", canvas.offsetHeight);
    };
    SignatureverificationPage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
        this.canvasResize();
        this.drawstart = false;
    };
    SignatureverificationPage.prototype.drawComplete = function () {
        console.log("drawComplete");
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        this.completedtc.signature = this.signaturePad.toDataURL();
        this.Signaturevalidations = this.signaturePad.toDataURL();
        // console.log(this.Signaturevalidations);
        // this.drawstart=true;
    };
    SignatureverificationPage.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log("begin drawing");
        this.drawstart = true;
    };
    SignatureverificationPage.prototype.approvealert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Thank you!",
            message: "Your visit details have been signed and submitted for processing.",
            // cssClass: "buttonCss5",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("ok clicked");
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 4));
                    }
                }
            ]
        });
        alert.present();
    };
    // ngOnInit() {
    //   this.Signaturevalidations=new FormGroup({
    //     signaturepad: new FormControl('', [
    //       Validators.required,
    //     ]),
    //   });
    // }
    SignatureverificationPage.prototype.approve = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.completedtc = JSON.stringify(this.completedtc);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        var url = "api/Cgtimesheets/completemisstc";
        this.http.post(url, this.completedtc, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.iscgdashreload = true;
            _this.approvealert();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    SignatureverificationPage.prototype.cancel = function () {
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length() - 3));
        // this.navCtrl.push(CgcompletetimesheetPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignatureverificationPage.prototype, "signaturePad", void 0);
    SignatureverificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-signatureverification",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\signatureverification\signatureverification.html"*/'\n\n<ion-header>\n\n\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n        <ion-grid>\n\n          <ion-row align-items-center>\n\n            <ion-col col-2 style="padding: 0">\n\n             <button ion-button clear style="text-transform: none;color: white;font-size: 90%;padding-left: 0" (click)="cancel()">Cancel</button>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n    <ion-title text-center style="padding-right:22%">Signature Verification</ion-title>\n\n  </ion-col>\n\n \n\n  <!-- <ion-col>\n\n      <ion-icon style="color: white;font-size: 30px;float: right;" name="more"></ion-icon>\n\n  </ion-col> -->\n\n  </ion-row>\n\n  </ion-grid>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n        <form method=\'post\'>\n\n            \n\n    <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()" ></signature-pad>\n\n    <p style="text-align: center;color: grey">Sign your name using your finger.</p>\n\n    <div text-center>\n\n    <button ion-button clear style="color:primary;text-transform: none;" (click)="ngAfterViewInit();">Clear Signature</button>\n\n  </div>\n\n  <ion-footer style="padding: 5px" >\n\n        <button ion-button style="text-transform: none;" block (click)="approve()" [disabled]="!drawstart">Complete Visit</button>\n\n    </ion-footer>\n\n    </form>\n\n    <!-- [ngStyle]="{\'pointer-events\':this.Signaturevalidations!=null? \'block\':\'none\'}" -->\n\n  <!-- <button (click)="approvealert()">zdfdfsfddsf</button> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\signatureverification\signatureverification.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__global_global__["a" /* GlobalPage */]])
    ], SignatureverificationPage);
    return SignatureverificationPage;
}());

//# sourceMappingURL=signatureverification.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgdashboardPage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgviewappointment_cgviewappointment__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgcompletetimesheet_cgcompletetimesheet__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cgprofilenew_cgprofilenew__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__cgpopover_cgpopover__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cgmultipletimesheet_cgmultipletimesheet__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_location_accuracy__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














// import { MinuteSecondsPipe } from '../../pipes/minute-seconds/minute-seconds';






var CgdashboardPage = /** @class */ (function () {
    function CgdashboardPage(navCtrl, navParams, global, alertCtrl, http, storage, loadingCtrl, geolocation, popoverCtrl, _DomSanitizer, locationAccuracy, diagnostic) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.popoverCtrl = popoverCtrl;
        this._DomSanitizer = _DomSanitizer;
        this.locationAccuracy = locationAccuracy;
        this.diagnostic = diagnostic;
        this.show = true;
        this.schedulelist = [];
        this.missedsheet = [];
        this.currentdate = new Date();
        this.currentdateTime$ = __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].interval(1000).map(function (x) { return new Date(); });
        this.records = [
            {
                Apnttime: "9:00 AM"
            },
            {
                Apnttime: "10:00 AM"
            },
            {
                Apnttime: "11:00 AM",
            }
        ];
    }
    CgdashboardPage.prototype.differentmin = function (startDt) {
        console.log(startDt);
        var diff = (new Date(startDt).getTime() - new Date().getTime()) / 1000;
        diff /= 60;
        var hour = Math.floor(diff / 60);
        var min = diff % 60;
        return hour + " hrs" + min + " min";
        // this.current=time;
        // var t= this.currentdate.(time);
        // console.log(t);
        // return t;
    };
    CgdashboardPage.prototype.ConvertHM = function (min) {
        console.log(min);
        return Math.floor(min / 60) + " hrs " + (min % 60) + " min";
    };
    CgdashboardPage.prototype.locationon = function () {
        var _this = this;
        return this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (!isAvailable) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function () { return console.log('Request successful'); }, function (error) { return console.log('Error requesting location permissions', error); });
            }
        }).catch(function (e) {
            console.log(e);
            alert(JSON.stringify(e));
        });
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CgdashboardPage');
    // }
    CgdashboardPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewwill entre CgdashboardPage");
        console.log(this.global.iscgdashreload);
        if (this.global.iscgdashreload) {
            this.ionViewDidLoad();
            console.log("trur");
        }
    };
    CgdashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.show = true;
        var agencyId = 1;
        var employeeId = 5;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        console.log(this.global);
        loading.present();
        var url = "api/Cgtimesheets/getcglist?";
        var myParams = new URLSearchParams();
        myParams.append("agencyid", this.global.agencyId.toString());
        myParams.append("employeeId", this.global.employeeId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            //  this.schedulelist = data;
            _this.schedulelist = data["list"];
            _this.missedsheet = data["misedsheet"];
            _this.global.iscgdashreload = false;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgdashboardPage.prototype.getlocation = function () {
        var _this = this;
        return this.geolocation
            .getCurrentPosition({ timeout: 5000 })
            .then(function (resp) {
            console.log("latitude and longitude");
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        })
            .catch(function (error) {
            _this.latitude = 0;
            _this.longitude = 0;
            console.log("Error getting location", error);
        });
    };
    CgdashboardPage.prototype.doCheckbox = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle("Which planets have you visited?");
        for (var i = 0; i < this.records.length; i++) {
            // console.log(array[i]);
            alert.addInput({
                type: "text",
                label: this.records[i].Apnttime,
                value: this.records[i].Apnttime,
            });
        }
        alert.addButton("Cancel");
        alert.addButton({
            text: "Okay",
            handler: function (data) {
                console.log("Checkbox data:", data);
            }
        });
        alert.present().then(function () {
        });
    };
    CgdashboardPage.prototype.presentAlert = function (item) {
        var _this = this;
        console.log(item);
        this.locationon().then(function (data) {
            console.log(data);
            _this.getlocation();
        });
        console.log(this.records);
        // let isfetch = false;h
        // this.schedulelist.some((element, index) => {
        //   console.log(index);
        //   if (!element.isStarted && !element.isWantStarted && !isfetch && !element.isCancelled) {
        //     element.isWantStarted = true;
        //     isfetch = true;
        //    return true;
        //   } else if ((this.schedulelist.length - 1) == index) {
        var alert = this.alertCtrl.create({
            title: "Activities to Complete",
            subTitle: item.clientName + " needs " + item.jobName + ".",
            message: "Please make sure that your location is turn on before Starting.",
            //title: 'G',
            // subTitle: 'Mike need ' + item.jobName +'.',
            buttons: [
                {
                    text: "Got it,thanks!",
                    handler: function () {
                        // item.start= true;
                        console.log("Start button");
                        _this.starrttimecard(item);
                    }
                }
            ]
        });
        alert.present();
        //     return false;
        //   }
        // })
        // });
        // this.wantedStart1(item.scheduleId).then((data) => {
        // if (data) {
        //   alert("Already started");
        // }
        // if (!data) {
        // }
        //});
    };
    CgdashboardPage.prototype.starrttimecard = function (clientdata) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.getlocation().then(function (data) {
            // alert("testt "+ JSON.stringify(data));
            console.log(clientdata);
            var url = "api/Cgtimesheets/startTC?";
            var myParams = new URLSearchParams();
            myParams.append("scheduleId", clientdata.scheduleId);
            myParams.append("agencyId", clientdata.agencyId);
            myParams.append("latitude", typeof _this.latitude == "undefined" || _this.latitude == null
                ? null
                : _this.latitude.toString());
            myParams.append("longitude", typeof _this.longitude == "undefined" || _this.longitude == null
                ? null
                : _this.longitude.toString());
            _this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                if (data) {
                    clientdata.isStarted = true;
                    clientdata.timeCardId = data;
                    clientdata.tcsdt = new Date();
                }
                //  this.schedulelist = data;
                loading.dismiss();
            }, function (err) {
                console.log(err);
                alert(err.error);
                loading.dismiss();
            });
        });
    };
    CgdashboardPage.prototype.viewclientdetails = function (clientdetails) {
        console.log(clientdetails);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgviewappointment_cgviewappointment__["a" /* CgviewappointmentPage */], {
            ScheduleId: clientdetails.scheduleId,
            agencyId: clientdetails.agencyId,
            isCompleted: clientdetails.isCompleted,
            isCancelled: clientdetails.isCancelled,
            isStarted: clientdetails.isStarted
        });
        (function (err) {
            console.log(err);
        });
    };
    CgdashboardPage.prototype.completetimesheetpagelat = function (ctsplat) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.geolocation
            .getCurrentPosition()
            .then(function (resp) {
            console.log("latitude and longitude stop");
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
            loading.dismiss();
            _this.completetimesheetpage(ctsplat);
        })
            .catch(function (error) {
            _this.latitude = 0;
            _this.longitude = 0;
            console.log("Error getting location", error);
            loading.dismiss();
            _this.completetimesheetpage(ctsplat);
        });
    };
    CgdashboardPage.prototype.completetimesheetpage = function (ctsp) {
        var _this = this;
        this.locationon();
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.getlocation().then(function (data) {
            console.log(ctsp);
            var url = "api/Cgtimesheets/endTC?";
            var myParams = new URLSearchParams();
            myParams.append("timecardId", ctsp.timeCardId);
            myParams.append("agencyId", ctsp.agencyId);
            myParams.append("latitude", typeof _this.latitude == "undefined" || _this.latitude == null
                ? null
                : _this.latitude.toString());
            myParams.append("longitude", typeof _this.longitude == "undefined" || _this.longitude == null
                ? null
                : _this.longitude.toString());
            _this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                ctsp.isCompleted = true;
                ctsp.tctotalhours = data;
                _this.wantedStart();
                loading.dismiss();
            }, function (err) {
                console.log(err);
                alert(err.error);
                loading.dismiss();
            });
        });
        // loading.present();
    };
    CgdashboardPage.prototype.wantedStart = function () {
        var isfetch = false;
        this.schedulelist.some(function (element) {
            if (!element.isStarted &&
                !element.isWantStarted &&
                !isfetch &&
                !element.isCancelled) {
                element.isWantStarted = true;
                isfetch = true;
                return !element.isStarted && !element.isWantStarted;
            }
        });
    };
    CgdashboardPage.prototype.wantedStart1 = function (scheduleId) {
        console.log(scheduleId);
        var isfetch = false;
        this.schedulelist.some(function (element) {
            console.log(element);
            if (element.isStarted &&
                !element.isCompleted &&
                !isfetch &&
                !element.isCancelled &&
                element.scheduleId != scheduleId) {
                //  element.isWantStarted = true;
                isfetch = true;
                return true;
            }
        });
    };
    CgdashboardPage.prototype.SubmitTimesheet = function (tcvalue) {
        console.log(tcvalue);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgcompletetimesheet_cgcompletetimesheet__["a" /* CgcompletetimesheetPage */], {
            scheduleId: tcvalue.scheduleId,
            timecardId: tcvalue.timeCardId
        });
        (function (err) {
            console.log(err);
        });
    };
    CgdashboardPage.prototype.SubmitTimesheetmissed = function (tcmissed) {
        console.log(tcmissed);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgcompletetimesheet_cgcompletetimesheet__["a" /* CgcompletetimesheetPage */], {
            scheduleId: tcmissed.mScheduleId,
            timecardId: tcmissed.mTcId
        });
        (function (err) {
            console.log(err);
        });
    };
    CgdashboardPage.prototype.logout = function () {
        var loading = this.loadingCtrl.create({
            content: "Logging out..."
        });
        console.log();
        this.storage.remove("loginAuth");
        var alert = this.alertCtrl.create({
            title: "Do you want to Logout?",
            // message: 'Do you want to Logout the session?',
            // cssClass: "buttonCssa",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        loading.present();
                        window.location.reload();
                        console.log("Logout");
                    }
                }
            ]
        });
        loading.dismiss();
        (function (err) {
            console.log(err);
            loading.dismiss();
        });
        alert.present();
    };
    // toggle() {
    //   this.show = !this.show;
    // }
    CgdashboardPage.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */]);
    };
    CgdashboardPage.prototype.doConfirm = function (i) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Do you want to end this visit?",
            message: "Please make sure that your location is turn on before Stopping!",
            buttons: [
                {
                    text: "No",
                    handler: function () {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Agree clicked");
                        _this.completetimesheetpage(i);
                        // this.SubmitTimesheet(i);
                    }
                }
            ]
        });
        confirm.present();
    };
    CgdashboardPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_13__cgpopover_cgpopover__["a" /* CgpopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    CgdashboardPage.prototype.multc = function () {
        console.log("from dashboard");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__cgmultipletimesheet_cgmultipletimesheet__["a" /* CgmultipletimesheetPage */], { "clientid": this.global.clientId.toString() });
    };
    CgdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-cgdashboard",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgdashboard\cgdashboard.html"*/'<ion-header text-center>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid style="padding: 0">\n\n      <ion-row align-items-center>\n\n        <!-- <ion-col>\n\n          <button ion-button clear>\n\n            <ion-icon name="person" style="font-size: 30px;color: white" (click)="test()">\n\n              <ion-badge id="notifications-badge" color="danger">3</ion-badge>\n\n            </ion-icon>\n\n          </button>\n\n        </ion-col> -->\n\n        <ion-col  col-10>\n\n          <ion-title style="padding-left:20%">Dashboard</ion-title>\n\n        </ion-col>\n\n        <ion-col col-2 >\n\n          <button ion-button clear style="float: right" (click)="presentPopover($event)">\n\n              <ion-icon name="menu" style="color: white;font-size: 25px;padding-right: 8px"></ion-icon>\n\n            </button>\n\n        <!-- <ion-icon name="menu" style="font-size: 30px;color: white;float: right;" (click)="carehistory()"></ion-icon> -->\n\n      </ion-col>\n\n        <!-- <ion-col>\n\n          <button ion-button clear style="text-transform: none;float: right;padding:5px;color:white" (click)="logout()">Logout</button>\n\n        </ion-col> -->\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-color: #EEEEEE">\n\n  <ion-card class="card" *ngIf="missedsheet.length!=0" style="margin: 10px;padding: 10px;padding-bottom: 0;width: calc(100% - 20px)" >\n\n    <ion-row align-items-start >\n\n      <ion-col col-1>\n\n        <div>\n\n          <ion-badge id="missing" class="test" color="danger" >!</ion-badge>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-11 style="padding-left: 10px">\n\n        <h2><b>{{missedsheet.length}} Timesheets to submit</b></h2>\n\n        <p>Its look like you have some timesheets to complete and submit.</p>\n\n        <button ion-button style="color:primary;text-transform: none;padding-left: 0px;" clear (click)="multc()" >Complete it now</button>\n\n      </ion-col>\n\n    </ion-row> \n\n  \n\n  \n\n  </ion-card>\n\n  <div *ngFor="let det of missedsheet"  >\n\n    <ion-card class="card" [hidden]="det.ismisdforget" style="margin: 10px;padding: 10px;padding-bottom: 0;width: calc(100% - 20px)" (click)="SubmitTimesheetmissed(det)">\n\n               <ion-row align-items-start >\n\n                   <ion-col col-1>\n\n                     <div>\n\n                       <ion-badge id="missing" class="test" color="danger" >!</ion-badge>\n\n                     </div>\n\n                   </ion-col>\n\n                   <ion-col col-11 style="padding-left: 10px">\n\n                     <h2><b>Incomplete Visit Record</b></h2>\n\n                     <p>For {{det.tcDate| date:\'fullDate\'}}.</p>\n\n                     <button ion-button style="color:primary;text-transform: none;padding-left: 0px;" clear >Complete it now</button>\n\n                   </ion-col>\n\n                 </ion-row>\n\n         </ion-card>\n\n        </div>\n\n\n\n  <div text-center>\n\n    <h1 style="margin: 10px;padding-top: 3%">Today</h1>\n\n    <p style="margin-top:0">{{currentdate | date:\'fullDate\'}}</p>\n\n  </div>\n\n  <ion-card *ngFor="let i of schedulelist" style="margin: 5px;padding: 10px;padding-bottom: 0">\n\n    <ion-item (click)="viewclientdetails(i)">\n\n      <ion-avatar item-start *ngIf="i.clientPhoto!=null;">\n\n        <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(i.clientPhoto)" >\n\n        <!-- {{i.clientPhoto}} -->\n\n      </ion-avatar>\n\n      <ion-avatar item-start *ngIf="i.clientPhoto==null&&i.isMale==true;">\n\n        <img class="img" src="assets/imgs/male.png">\n\n        <!-- {{i.clientPhoto}} -->\n\n      </ion-avatar>\n\n      <ion-avatar item-start *ngIf="i.clientPhoto==null&&i.isMale!=true;">\n\n        <img class="img" src="assets/imgs/female.png">\n\n        <!-- {{i.clientPhoto}} -->\n\n      </ion-avatar>\n\n\n\n      <h2 style="color:black;font-weight: 500">{{i.sdt | date: \'h:mm a\'}}: {{i.clientName | uppercase }}</h2>\n\n      <p style="color:black;">{{i.totalhours }} minutes</p>\n\n    </ion-item>\n\n    <div>\n\n      <!-- {{currentdateTime$ | async}} -->\n\n\n\n      <!-- <div *ngIf="!i.isCancelled"> && i.isWantStarted -->\n\n      <div>\n\n        <ion-fab *ngIf="!i.isStarted && !i.isCancelled" style="padding-left: 70%;">\n\n          <button ion-fab style="margin:-30px;background-color: rgb(48, 230, 139); border: 2px solid white;" (click)="presentAlert(i)"> <!--presentAlert(i);-->\n\n            <ion-icon style="font-size:16px;">Start</ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n        <ion-fab *ngIf="i.isStarted && !i.isCompleted" style="padding-left:70%">\n\n          <button ion-fab style="margin:-30px;background-color:red; border: 2px solid white" (click)="doConfirm(i)">\n\n            <ion-icon style="font-size:16px;">Stop</ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n        <ion-fab *ngIf="i.isStarted && i.isCompleted && !i.istimesubmit" style="padding-left:70%">\n\n          <button ion-fab style="margin:-30px;background-color:#FBC02D; border: 2px solid white" (click)="SubmitTimesheet(i)">\n\n            <ion-icon style="font-size:16px;">Submit</ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n      </div>\n\n      <div>\n\n        <p style="float: left;margin-left:70px;color: grey;margin-top: 5px;margin-bottom: 28px;" *ngIf="!i.isStarted"> </p>\n\n        <p style="float: left;margin-left:70px;color: grey;margin-top: 5px;" *ngIf="i.isStarted && !i.isCompleted"> Started at {{i.tcsdt | date:\'h:mm a\'}}</p>\n\n        <!--{{(currentdateTime$ | async) - addDay(i.tcsdt) | date:\'hh:mm\' }}-->\n\n        <ion-icon style="margin-left: 10px;margin: 8px;color:grey" name="checkmark" *ngIf="i.isCompleted && !i.isCancelled"> Duration {{i.tctotalhours}} min</ion-icon>\n\n        <ion-icon style="margin-left: 10px;margin: 8px;color:red" name="close-circle" *ngIf="i.isCancelled"> Appointment Cancelled</ion-icon>\n\n      </div>\n\n    </div>\n\n\n\n  </ion-card>\n\n  <!-- <ion-card style="margin: 8px;padding: 10px;margin-bottom: 15px">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img  class="img" src="assets/imgs/profile3.jpg">\n\n      </ion-avatar>\n\n      <h2>12:00 PM: Sally Hanson</h2>\n\n      <p>4 Hours</p>\n\n    </ion-item>\n\n  </ion-card> -->\n\n  <!-- <ion-card style="margin: 8px;padding: 10px;margin-bottom: 15px">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img  class="img" src="assets/imgs/c.PNG">\n\n      </ion-avatar>\n\n      <h2>4:30PM</h2>\n\n      <p>1 Hour</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img  class="img" src="assets/imgs/profile1.jpg">\n\n      </ion-avatar>\n\n      <h2>Jake Smith</h2>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img  class="img" src="assets/imgs/profile2.jpg">\n\n      </ion-avatar>\n\n      <h2>Beckett Thompson</h2>\n\n    </ion-item>\n\n  </ion-card> -->\n\n\n\n  <!-- <div class=" success alertred " *ngIf="schedulelist.length==0">\n\n\n\n\n\n    <span class="closebtnred" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n    <strong style="color:black;text-align: center;">No pods available Today</strong>\n\n\n\n  </div> -->\n\n\n\n  <div class="alert" *ngIf="schedulelist.length==0">\n\n    <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n    <strong>No Apppointments are available Today!</strong>\n\n  </div>\n\n\n\n   <!-- <button (click)="doCheckbox()">dfggggggggggg</button>  -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgdashboard\cgdashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_diagnostic__["a" /* Diagnostic */]])
    ], CgdashboardPage);
    return CgdashboardPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

// @Pipe({
//   name: 'minuteSeconds'
// })
// export class MinuteSecondsPipe implements PipeTransform {
//   transform(value: number): string {
//     let  temp = value * 60;
//     const hours = Math.floor((temp/3600));
//     const minutes: number = Math.floor((temp/ 60)/60);
//     const seconds=Math.floor(temp % 3600 % 60);
//     return hours + ':' + minutes + ':' + seconds;
//   }
// }
//# sourceMappingURL=cgdashboard.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgviewappointmentPage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CgviewappointmentPage = /** @class */ (function () {
    function CgviewappointmentPage(navCtrl, navParams, alertCtrl, http, glob, loadingCtrl, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.glob = glob;
        this.loadingCtrl = loadingCtrl;
        this._DomSanitizer = _DomSanitizer;
        this.clientdetails = [];
        this.cancelreason = '';
        this.records = [
            {
                Apnttime: "9:00 AM",
                cgname: "Mike Jones",
                duration: "2 hours",
                isstarted: false,
                image: "assets/imgs/profile.jpg"
            }
        ];
    }
    CgviewappointmentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.scheduleIdevv = this.navParams.get("ScheduleId");
        this.agencyId = this.navParams.get("agencyId");
        this.isCompleted = this.navParams.get("isCompleted");
        this.isCancelled = this.navParams.get("isCancelled");
        this.isStarted = this.navParams.get("isStarted");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/Cgtimesheets/getscheclientdet?";
        var myParams = new URLSearchParams();
        myParams.append("ScheduleId", this.scheduleIdevv.toString());
        myParams.append("agencyId", this.agencyId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.clientdetails = data;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgviewappointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgviewappointmentPage');
    };
    CgviewappointmentPage.prototype.cancelapp = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cancel Appointment',
            // cssClass: "buttonCss",
            message: "Why do you want to cancel this appointment?",
            inputs: [
                {
                    name: 'reason',
                },
            ],
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.cancelreason = data.reason;
                        console.log('Ok clicked');
                        console.log(data.reason);
                        _this.cancelappoinment();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    CgviewappointmentPage.prototype.dashboard = function () {
        this.navCtrl.pop();
    };
    CgviewappointmentPage.prototype.cancelappoinment = function () {
        var _this = this;
        console.log("cancel appoinment");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/Cgtimesheets/empcanceSch?";
        var myParams = new URLSearchParams();
        myParams.append("scheduleId", this.clientdetails.scheduleId.toString());
        myParams.append("agencyId", this.clientdetails.agencyId.toString());
        myParams.append("cancelnotes", this.cancelreason);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.glob.iscgdashreload = true;
            _this, _this.navCtrl.pop();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            alert(err.error);
            loading.dismiss();
        });
    };
    CgviewappointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgviewappointment',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgviewappointment\cgviewappointment.html"*/'<ion-header>\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n        <ion-grid>\n\n            <ion-row  align-items-center>\n\n                <ion-col col-10>\n\n                    <ion-title text-center style="padding-left:20%">View Appointment</ion-title>\n\n                </ion-col>\n\n                <ion-col col-2 style="padding: 0">\n\n                    <button ion-button clear (click)="dashboard()"\n\n                     style="text-transform: none;color: white;float: right;" >Done</button>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content  text-center style="background-color: #F5F5F5">\n\n       \n\n    <ion-grid style="background-color: white;" >\n\n        <ion-row text-center >\n\n            <ion-col col-12 >\n\n                <div item-start *ngIf="clientdetails.clientPhoto!=null;">\n\n                    <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(clientdetails.clientPhoto)" >\n\n                    <!-- {{i.clientPhoto}} -->\n\n                  </div>\n\n                  <div item-start *ngIf="clientdetails.clientPhoto==null&&clientdetails.isMale==true;">\n\n                    <img class="img" src="assets/imgs/male.png">\n\n                    <!-- {{i.clientPhoto}} -->\n\n                  </div>\n\n                  <div item-start *ngIf="clientdetails.clientPhoto==null&&clientdetails.isMale!=true;">\n\n                    <img class="img" src="assets/imgs/female.png">\n\n                    <!-- {{i.clientPhoto}} -->\n\n                  </div>\n\n              <!-- src={{clientdetails.clientPhoto}} -->\n\n            </ion-col>\n\n            </ion-row>         \n\n            <h6 style="margin: 10px;margin-bottom: 0;">{{clientdetails.stdt | date: \'h:mm a\'}}: {{clientdetails.clientName | uppercase}}</h6>\n\n            <p style="margin-top:0;color: gray"><i>{{clientdetails.duration}} minutes</i></p>\n\n            <br>\n\n            \n\n            <div *ngIf="isCompleted==false && isStarted==false && isCancelled==false">\n\n        <ion-row text-center style="font-size: 25px;" >\n\n                <ion-col col-2></ion-col>\n\n            <ion-col col-4>\n\n                <ion-icon name="menu" color="primary"></ion-icon>\n\n            </ion-col>\n\n            <!-- <ion-col col-4>\n\n                <ion-icon name="person-add"  color="primary"></ion-icon>\n\n            </ion-col> -->\n\n            <ion-col col-4>\n\n                <ion-icon name="close-circle" color="primary" (click)="cancelapp()"></ion-icon>\n\n            </ion-col>\n\n        </ion-row>\n\n          <ion-row text-center style="color: grey;font-size: 14px;">\n\n                <ion-col col-2></ion-col>\n\n            <ion-col col-4>\n\n              <label>Eligibility</label>\n\n            </ion-col>\n\n            <!-- <ion-col col-4>\n\n                <label>Request Sub</label>\n\n              </ion-col> -->\n\n              <ion-col col-4>\n\n                  <label (click)="cancelapp()">Cancel Appt</label>\n\n                </ion-col>\n\n        </ion-row>\n\n        </div>\n\n        <div *ngIf="isCompleted==false && isStarted==true && isCancelled==false ">\n\n                <ion-icon name="checkmark-circle" style="color: #0aea0a;font-size: 20px">&nbsp;&nbsp;Appointment Started</ion-icon> \n\n            </div>\n\n            <div *ngIf="isCompleted==true && isStarted==true && isCancelled==false">\n\n              <ion-icon name="information-circle" color=primary style="font-size: 20px">&nbsp;&nbsp;Appointment Completed</ion-icon> \n\n          </div>\n\n          <div *ngIf="isCompleted==false && isStarted==false && isCancelled==true">\n\n            <ion-icon name="close-circle" style="color: red;font-size: 20px">&nbsp;&nbsp;Appointment Cancelled</ion-icon> \n\n        </div>\n\n        <br>\n\n    </ion-grid> \n\n        \n\n    \n\n    <ion-grid padding text-wrap>\n\n       \n\n               <p style="margin-left: 0%;\n\n               font-weight: 900;">{{clientdetails.clientName | uppercase}} needs <b *ngFor="let t of clientdetails.clientjt" style="text-align:justify">{{t.taskName}},</b>.</p>\n\n          \n\n        <ion-row align-items-center>\n\n            <ion-col col-2>\n\n                <ion-icon name="pin" style="text-transform: none;font-size: 23px;color:grey"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10 >\n\n                    <ion-label style="text-align: left;margin-left: -1%;font-weight: 500">{{clientdetails.street1}}, {{clientdetails.street2}} {{clientdetails.city}} {{clientdetails.state}} {{clientdetails.zipCode}}</ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row align-items-center>\n\n            <ion-col col-2>\n\n                <ion-icon name="call" style="text-transform: none;font-size: 23px;color:grey"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                    <ion-label style="text-align: left;margin-left: -1%;font-weight: 500">\n\n                            <a href="tel:{{clientdetails.mobileNo}}">{{clientdetails.mobileNo}}</a></ion-label>\n\n            </ion-col>\n\n        </ion-row>           \n\n        <p style="text-align: left;margin-left: 3%;color: gray;font-size: 13px;"><i>Assigned by Sarah B: {{clientdetails.agencyName}} Agency</i></p>\n\n        <ion-row align-items-center>\n\n            <ion-col col-2>\n\n                <ion-icon name="call" style="text-transform: none;font-size: 23px;color:grey"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n                    <ion-label style="text-align: left;margin-left: -1%;font-weight: 500">\n\n                            <a href="tel:{{clientdetails.agencyNo}}">{{clientdetails.agencyNo}}</a></ion-label>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n   \n\n    \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgviewappointment\cgviewappointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CgviewappointmentPage);
    return CgviewappointmentPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgviewappointment.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgmulsignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CgmulsignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgmulsignaturePage = /** @class */ (function () {
    function CgmulsignaturePage(navCtrl, navParams, http, alertCtrl, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.signaturePadOptions = {
            // passed through to szimek/signature_pad constructor
            minWidth: 5,
            canvasWidth: 500,
            canvasHeight: 300
        };
        this.drawstart = false;
    }
    CgmulsignaturePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignatureverificationPage");
    };
    CgmulsignaturePage.prototype.ionViewWillEnter = function () {
        this.completemultible = this.navParams.get("mutisubvalue");
        console.log("review completedtc");
        console.log(this.completemultible);
        this.drawComplete();
    };
    CgmulsignaturePage.prototype.canvasResize = function () {
        var canvas = document.querySelector("canvas");
        this.signaturePad.set("minWidth", 1);
        this.signaturePad.set("canvasWidth", canvas.offsetWidth);
        this.signaturePad.set("canvasHeight", canvas.offsetHeight);
    };
    CgmulsignaturePage.prototype.ngAfterViewInit = function () {
        // this.signaturePad is now available
        this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
        this.canvasResize();
        this.drawstart = false;
    };
    CgmulsignaturePage.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        this.signature = this.signaturePad.toDataURL();
        this.Signaturevalidations = this.signaturePad.toDataURL();
        // console.log(this.Signaturevalidations);
    };
    CgmulsignaturePage.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log("begin drawing");
        this.drawstart = true;
    };
    CgmulsignaturePage.prototype.approvealert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Thank you!",
            message: "Your visit details have been signed and submitted for processing.",
            // cssClass: "buttonCss5",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("ok clicked");
                        _this.navCtrl.popTo(_this.navCtrl.getByIndex(_this.navCtrl.length() - 3));
                        // this.navCtrl.pop();
                        // this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    CgmulsignaturePage.prototype.approve = function () {
        var _this = this;
        this.cgmultible = this.completemultible;
        this.datasent =
            {
                cgmultible: this.cgmultible, signature: this.signature
            };
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.datasent = JSON.stringify(this.datasent);
        console.log(this.datasent);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        var url = "api/Cgmultipletc/savemuledittc?";
        this.http.post(url, this.datasent, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.iscgdashreload = true;
            _this.approvealert();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgmulsignaturePage.prototype.cancel = function () {
        this.navCtrl.pop();
        // this.navCtrl.push(CgcompletetimesheetPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], CgmulsignaturePage.prototype, "signaturePad", void 0);
    CgmulsignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-cgmulsignature',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmulsignature\cgmulsignature.html"*/'\n\n<ion-header>\n\n\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n          <ion-col col-2 style="padding: 0">\n\n           <button ion-button clear style="text-transform: none;color: white;font-size: 90%;padding-left: 0" (click)="cancel()">Cancel</button>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n  <ion-title text-center style="padding-right:22%">Signature Verification</ion-title>\n\n</ion-col>\n\n\n\n<!-- <ion-col>\n\n    <ion-icon style="color: white;font-size: 30px;float: right;" name="more"></ion-icon>\n\n</ion-col> -->\n\n</ion-row>\n\n</ion-grid>\n\n</ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n      <form method=\'post\'>\n\n          \n\n  <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()" ></signature-pad>\n\n  <p style="text-align: center;color: grey">Sign your name using your finger.</p>\n\n  <div text-center>\n\n  <button ion-button clear style="color:primary;text-transform: none;" (click)="ngAfterViewInit();">Clear Signature</button>\n\n</div>\n\n<ion-footer style="padding: 5px">\n\n      <button ion-button style="text-transform: none;" block (click)="approve()" [disabled]="!drawstart">Complete Visit</button>\n\n  </ion-footer>\n\n  </form>\n\n  <!-- [ngStyle]="{\'pointer-events\':this.Signaturevalidations!=null? \'block\':\'none\'}" -->\n\n<!-- <button (click)="approvealert()">zdfdfsfddsf</button> -->\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmulsignature\cgmulsignature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__global_global__["a" /* GlobalPage */]])
    ], CgmulsignaturePage);
    return CgmulsignaturePage;
}());

//# sourceMappingURL=cgmulsignature.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReapprovetimesheetPage; });
/* unused harmony export time */
/* unused harmony export items1 */
/* unused harmony export cmark */
/* unused harmony export content */
/* unused harmony export service */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resignatureverification_resignatureverification__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ModalController } from 'ionic-angular';
// import { TimeModelPage } from '../time-model/time-model';

/**
 * Generated class for the ReapprovetimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReapprovetimesheetPage = /** @class */ (function () {
    function ReapprovetimesheetPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, global, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this._DomSanitizer = _DomSanitizer;
        this.missedtc = [];
        this.isedit = false;
        this.isedit1 = false;
        this.times = [{
                image: "assets/imgs/profile5.jpg",
                worktype: "Recipient of Care",
                name: "Tom Moscow",
            },
            {
                image: "assets/imgs/jessica.jpg",
                worktype: "Provided By",
                name: "Jessica Careson",
            },
        ];
        this.item1 = [{
                image: "assets/imgs/h.png",
                orgname: "HomeCare First",
                connum: "5555-5555-5555",
            }];
        this.mark = [{
                type: "Bathing",
            },
            {
                type: "Grooming",
            },
            {
                type: "Eating",
            },];
        this.contents = [{
                time: "Time In",
                duration: "9:00 AM",
                add: "5151, 1st Avenue Rochester, MN 55555",
                loc: "LOCATION VERIFIED BY GPS",
            },
            {
                time: "Time Out",
                duration: "11:05 AM",
                add: "5151, 1st Avenue Rochester, MN 55555",
                loc: "LOCATION VERIFIED BY GPS",
            },];
        this.services = [{
                servtype: "DATE OF SERVICE",
                quantity: "April 13,2018",
                servtime: "TOTAL TIME",
                duration: "2H 5M",
            },
            {
                servtype: "SERVICE TYPE",
                quantity: "PCA",
                servtime: "RATIO",
                duration: "1:1",
            },];
    }
    ReapprovetimesheetPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad Reapprovetimesheet1Page');
    };
    ReapprovetimesheetPage.prototype.submit = function (subval) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resignatureverification_resignatureverification__["a" /* ResignatureverificationPage */], { "timesheetdetail": subval });
    };
    ReapprovetimesheetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("will entre");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.timecardId = this.navParams.get("TimecardId");
        this.agencyId = this.navParams.get("agencyId");
        this.scheduleId = this.navParams.get("ScheduleId");
        console.log(this.agencyId);
        console.log(this.timecardId);
        console.log(this.scheduleId);
        var url = "api/ReTimesheet/submitMTC?";
        var myParams = new URLSearchParams();
        myParams.append("timecardId", this.timecardId.toString());
        myParams.append("ScheduleId", this.scheduleId.toString());
        myParams.append("agencyId", this.agencyId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.missedtc = data;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    ReapprovetimesheetPage.prototype.cancel = function () {
        this.isedit = false;
        this.navCtrl.pop();
    };
    // edit(date) {
    //   const modal = this.modalCtrl.create(TimeModelPage,{ tcStarttime:date.tcStarttime,tcEndtime:date.tcEndtime});
    //   modal.present();
    // }
    ReapprovetimesheetPage.prototype.edit = function () {
        this.isedit = true;
    };
    ReapprovetimesheetPage.prototype.edittimesheet = function (tcdetails) {
        var _this = this;
        // this.isedit=true;
        this.isedit = false;
        console.log(tcdetails);
        this.tceditdetails = JSON.stringify(tcdetails);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        var url = "api/ReTimesheet/reedittc";
        this.http.post(url, this.tceditdetails, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.isredashrelaod = true;
            _this.isedit = false;
            _this.isedit1 = true;
            var alert = _this.alertCtrl.create({
                title: "Changes Updated",
                message: "Your Timesheet has been updated successfully and sent to caregiver review.",
                // cssClass: "buttonCss5",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log("ok clicked");
                        }
                    }
                ]
            });
            alert.present();
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    ReapprovetimesheetPage.prototype.save = function () {
        this.isedit = false;
        this.isedit1 = true;
    };
    ReapprovetimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reapprovetimesheet',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\reapprovetimesheet\reapprovetimesheet.html"*/'<ion-header text-center>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col col-2 style="padding: 0">\n\n          <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button>\n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-right:22%">Approve Timesheet</ion-title>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content>\n\n  <div *ngIf="missedtc!= null">\n\n    <div *ngIf="isedit==false">\n\n\n\n      <ion-item text-center no-lines>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col offset-6>\n\n              <div class="circle" style="margin-left: -28px">\n\n                <div class="letter">{{missedtc.agencyName}}</div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <h1>{{missedtc.agencyName}}</h1>\n\n        <p>{{missedtc.agenctPhoneNo}}</p>\n\n      </ion-item>\n\n\n\n      <ion-item no-lines style="background-color: #F5F5F5">\n\n        <ion-avatar item-start *ngIf="missedtc.isMale==true;">\n\n          <img class="img" src="assets/imgs/man.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="!missedtc.isMale==true;">\n\n          <img class="img" src="assets/imgs/female.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <p>RECIPIENT OF CARE</p>\n\n        <h2>{{global.name |uppercase}}</h2>\n\n      </ion-item>\n\n      <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start *ngIf="missedtc.employeePhoto!=null;">\n\n              <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(missedtc.employeePhoto)" >\n\n              <!-- {{i.clientPhoto}} -->\n\n            </ion-avatar>\n\n            <ion-avatar item-start *ngIf="missedtc.employeePhoto==null&&missedtc.isMale==true;">\n\n              <img class="img" src="assets/imgs/male.png">\n\n              <!-- {{i.clientPhoto}} -->\n\n            </ion-avatar>\n\n            <ion-avatar item-start *ngIf="missedtc.employeePhoto==null&&missedtc.isMale!=true;">\n\n              <img class="img" src="assets/imgs/female.png">\n\n              <!-- {{i.clientPhoto}} -->\n\n            </ion-avatar>\n\n        <p>PROVIDED BY</p>\n\n        <h2>{{missedtc.employeeName|uppercase}}</h2>\n\n      </ion-item>\n\n\n\n      <ion-grid text-center>\n\n        <ion-row>\n\n          <ion-col col-6 style="border: 1px solid gray">\n\n            <ion-label style="color:grey">DATE OF SERVICE</ion-label>\n\n            <ion-label>{{missedtc.servicedate|date:\'MMMM d,yyyy \'}}</ion-label>\n\n          </ion-col>\n\n          <ion-col col-6 style="border: 1px solid gray">\n\n            <ion-label style="color:grey">TOTAL TIME</ion-label>\n\n            <ion-label>{{missedtc.tctotalhours}} Min</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-6 style="border: 1px solid gray">\n\n            <ion-label style="color:grey">SERVICE TYPE </ion-label>\n\n            <ion-label>PCA Service</ion-label>\n\n            <!-- {{missedtc.taskdonelist[0].jobName}} -->\n\n          </ion-col>\n\n          <ion-col col-6 style="border: 1px solid gray">\n\n            <ion-label style="color:grey">RATIO </ion-label>\n\n            <ion-label>1:{{missedtc.serviceRatio}}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">ACTIVITIES</h5>\n\n      <div *ngFor="let c of missedtc.taskdonelist">\n\n        <ion-row align-items-center>\n\n          <ion-col col-2>\n\n            <ion-icon style="font-weight: 900;font-size: 2rem;color: #0aea0a" name="checkmark"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n            <ion-label style="margin: 0">{{c.taskName}}</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">EMPLOYEE NOTES</h5>\n\n      <!-- <h6 style="padding-left: 10px">{{missedtc.empnotesnotes}}</h6> -->\n\n      <ion-textarea [(ngModel)]="missedtc.empnotesnotes" class="note" style="pointer-events: none;"></ion-textarea>\n\n\n\n      <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">NOTES</h5>\n\n\n\n\n\n      <ion-row style=" background-color:#E3F2FD;">\n\n\n\n        <ion-textarea [(ngModel)]="missedtc.clinotesnotes" class="note" placeholder="Enter your notes here"></ion-textarea>\n\n\n\n      </ion-row>\n\n\n\n      <ion-row align-items-center style="background-color: #F5F5F5;">\n\n        <ion-col style="padding: 0">\n\n          <h5 style="padding:10px;padding-top: 15px;margin: 0">TIME IN</h5>\n\n        </ion-col>\n\n        <ion-col style="padding: 0">\n\n          <ion-icon name="create" style="float: right;margin-right: 10px" (click)="edit()">&nbsp;&nbsp;Edit Time</ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-grid style="padding: 0">\n\n        <ion-row>\n\n          <h3 style="margin: 10px">{{missedtc.tcStarttime| date :\'hh:mm a\'}}</h3>\n\n        </ion-row>\n\n        <ion-row>\n\n          <!-- <p style="margin-bottom:10px;margin-top: 5px;"><i>{{reviewdetail.street1}} {{reviewdetail.street2}} {{reviewdetail.state}} {{reviewdetail.zipCode}}</i></p> -->\n\n        </ion-row>\n\n        <ion-row style="padding-top: 2%">\n\n          <ion-item no-lines *ngIf="missedtc.intimeLocver==true">\n\n            <div>\n\n              <!-- <img class="img" [src]="reviewdetail.inTimeMap"> -->\n\n              <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(missedtc.inTimeMap)" style=" display: block;\n\n                width: 100%;\n\n                height: 120px;">\n\n            </div>\n\n        \n\n            <ion-icon small name="checkmark-circle" style="color:#0aea0a;float:left;font-size:12px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n        \n\n          </ion-item>\n\n          <div *ngIf="!missedtc.intimeLocver==true">\n\n            <ion-icon small name="close-circle" style="color:red;float:left;font-size:12px;margin-left: 10px" icon-start>&nbsp;&nbsp;LOCATION COULD NOT BE VERIFIED BY GPS</ion-icon>\n\n          </div>\n\n        </ion-row>\n\n      </ion-grid>\n\n      <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">TIME OUT</h5>\n\n      <ion-grid style="padding: 0">\n\n        <ion-row>\n\n          <h3 style="margin: 10px">{{missedtc.tcEndtime| date :\'hh:mm a\'}}</h3>\n\n        </ion-row>\n\n        <ion-row style="padding-top: 2%">\n\n        <ion-item no-lines *ngIf="missedtc.outtimeLocver==true">\n\n            <div>\n\n              <!-- <img class="img" [src]="reviewdetail.outTimeMap"> -->\n\n              <img [src]="_DomSanitizer.bypassSecurityTrustUrl(missedtc.outTimeMap)" style=" display: block;\n\n                          width: 100%;\n\n                          height: 120px;">\n\n            </div>\n\n            <h2>\n\n            <ion-icon small name="checkmark-circle" style="color:#0aea0a;float:left;font-size:12px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n          </h2>\n\n          </ion-item>\n\n          <div *ngIf="!missedtc.outtimeLocver==true">\n\n            <ion-icon small name="close-circle" style="color:red;float:left;font-size:12px;margin-left: 10px" icon-start>&nbsp;&nbsp;LOCATION COULD NOT BE VERIFIED BY GPS</ion-icon>\n\n          </div>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n    </div>\n\n  </div>\n\n  \n\n  <div *ngIf="isedit== true" style="background-color: #F5F5F5">\n\n      <br>\n\n    <ion-card  style="padding: 10px">\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-label style="font-size: 16px" stacked>Time In</ion-label>\n\n          <ion-datetime displayFormat="hh:mm A" [(ngModel)]="missedtc.tcStarttime">{{missedtc.tcStarttime}}</ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label style="font-size: 16px" stacked>Time Out</ion-label>\n\n          <ion-datetime displayFormat="hh:mm A" [(ngModel)]="missedtc.tcEndtime">{{missedtc.tcEndtime}}</ion-datetime>\n\n\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n<br>\n\n      <div text-center>\n\n        <button ion-button id="btn" (click)="edittimesheet(missedtc)" style="background-color:rgb(0, 153, 255) ">Save</button>\n\n        <button ion-button id="btn" (click)="cancel()" style="background-color:red ">Cancel</button>\n\n      </div>\n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n<ion-footer style="padding: 5px">\n\n  <p style="color: grey">If this is correct, please sign and submit your timesheet. Remember, it is a federal crime to submit a fraudalent timesheet.</p>\n\n  <button ion-button color="primary" style="text-transform: none" *ngIf="isedit1==false" [disabled]="isedit==true" (click)="submit(missedtc)" full>Verify and Sign</button>\n\n  <button ion-button color="primary" style="text-transform: none" *ngIf="isedit1==true" (click)="submit(missedtc)" full>Resubmit to Employee</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\reapprovetimesheet\reapprovetimesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ReapprovetimesheetPage);
    return ReapprovetimesheetPage;
}());

var time = /** @class */ (function () {
    function time() {
    }
    return time;
}());

var items1 = /** @class */ (function () {
    function items1() {
    }
    return items1;
}());

var cmark = /** @class */ (function () {
    function cmark() {
    }
    return cmark;
}());

var content = /** @class */ (function () {
    function content() {
    }
    return content;
}());

var service = /** @class */ (function () {
    function service() {
    }
    return service;
}());

//# sourceMappingURL=reapprovetimesheet.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReprofilePage; });
/* unused harmony export pro */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the ReprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReprofilePage = /** @class */ (function () {
    function ReprofilePage(navCtrl, navParams, loadingCtrl, http, _DomSanitizer, storage, global, formBuilder, geolocation, alertCtrl, camera) {
        // this.todo = this.formBuilder.group({
        //   firstName: ['', Validators.required],
        //   lastName: ['', Validators.required],
        //   middleName: ['', Validators.required],
        //   street1: ['', Validators.required],
        //   street2: ['', Validators.required],
        //   city: ['', Validators.required],
        //   state: ['', Validators.required],
        //   zipcode: ['', Validators.required],
        //   mobileNo: ['', Validators.required],
        //   emailId: ['', Validators.required],
        //   latitude: [''],
        //   longitude:['']
        // });
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this._DomSanitizer = _DomSanitizer;
        this.storage = storage;
        this.global = global;
        this.formBuilder = formBuilder;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.isEdit = false;
        this.cliprodet = [];
        this.completedtc = [];
        this.proinfo = [{
                img: "assets/imgs/profile5.jpg",
                name: "Tom Moscow",
                care: "Bathing,Grooming,Eating",
            }];
    }
    ReprofilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ReprofilePage');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/Profilesetup/clieprofile?";
        var myParams = new URLSearchParams();
        myParams.append("clientNumber", this.global.clientId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.cliprodet = data;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    ReprofilePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.global.galleryPhoto = _this.base64Image;
            _this.UpdateImage(_this.base64Image);
            // this.editedProfile(this.global.galleryPhoto);
        }, function (err) {
            console.log(err);
        });
    };
    ReprofilePage.prototype.getphoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.global.galleryPhoto = _this.base64Image;
            _this.UpdateImageStorage(_this.base64Image);
            _this.UpdateImage(_this.base64Image);
            //  this.editedProfile(this.global.galleryPhoto);
        }, function (err) {
            console.log(err);
        });
    };
    ReprofilePage.prototype.openCamera = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Choose Image Source',
            buttons: [
                {
                    text: 'Camera',
                    handler: function () {
                        _this.takePhoto();
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Open Gallery',
                    handler: function () {
                        _this.getphoto();
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    ReprofilePage.prototype.UpdateImageStorage = function (ImageData) {
        var _this = this;
        this.storage.get("loginAuth").then(function (val) {
            val.userdetail.galleryPhoto = ImageData;
            _this.storage.set("loginAuth", val);
        });
    };
    ReprofilePage.prototype.UpdateImage = function (ImageStr) {
        var _this = this;
        console.log(ImageStr);
        var loading = this.loadingCtrl.create({
            content: 'Image updating please wait...'
        });
        var requestData = [];
        loading.present();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        var url = 'api/CgupCmgApt/editClientImage';
        var profile = JSON.stringify({
            'ClientNumber': this.global.clientId,
            'ImageStr': ImageStr.toString(),
        });
        requestData.push(profile);
        console.log(profile);
        // let myParams = new URLSearchParams();
        // myParams.append("employeeId", this.global.employeeId.toString());
        // myParams.append("ImageStr", Imagestr.toString());
        this.http.post(url, profile, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.galleryPhoto = ImageStr;
            console.log(ImageStr);
            _this.UpdateImageStorage(ImageStr);
            // this.storage.set("loginAuth",this.global);
            loading.dismiss();
        }, function (err) {
            _this.error = err;
            console.log(err);
            loading.dismiss();
        });
    };
    ReprofilePage.prototype.getloc = function () {
        var _this = this;
        this.geolocation
            .getCurrentPosition({ timeout: 5000 })
            .then(function (resp) {
            console.log("latitude and longitude");
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        });
    };
    ReprofilePage.prototype.getlocation = function () {
        var _this = this;
        return this.geolocation
            .getCurrentPosition({ timeout: 5000 })
            .then(function (resp) {
            console.log("latitude and longitude");
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.cliprodet.latitude = resp.coords.latitude;
            _this.cliprodet.longitude = resp.coords.longitude;
            // let options: NativeGeocoderOptions = {
            //   useLocale: true,
            //   maxResults: 5
            // };
        }).catch(function (error) {
            _this.latitude = null;
            _this.longitude = null;
            console.log("Error getting location", error);
        });
    };
    ReprofilePage.prototype.location = function () {
        var _this = this;
        this.getlocation().then(function (data) {
            console.log(data);
            // this.cliprodet.latitude= 
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            var url = "api/Profilesetup/clientupdateloc?";
            var myParams = new URLSearchParams();
            myParams.append("clientId", _this.cliprodet.clientNumber.toString());
            myParams.append("latitude", _this.cliprodet.latitude);
            myParams.append("longitudes", _this.cliprodet.longitude);
            _this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                //this.cliprodet = data;
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
            console.log(_this.latitude);
            console.log(_this.longitude);
        });
    };
    ReprofilePage.prototype.edit = function () {
        this.isEdit = true;
    };
    ReprofilePage.prototype.save = function () {
        this.isEdit = false;
    };
    ReprofilePage.prototype.onSubmit = function (datavalue) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.completedtc = JSON.stringify(datavalue);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        // let url = "api/Cgtimesheets/rwandcomplete";
        var url = 'api/Profilesetup/clientprofileedit';
        this.http.post(url, this.completedtc, httpOptions).subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "Changes Updated",
                message: "Your changes has been updated successfully.",
                // cssClass: "buttonCss5",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log("ok clicked");
                            loading.dismiss();
                            _this.isEdit = false;
                        }
                    }
                ]
            });
            alert.present();
            // alert("success");
        }, function (err) {
            //  alert("error");
            console.log(err);
            loading.dismiss();
        });
    };
    ReprofilePage.prototype.cancel = function () {
        // this.todo.reset();
        // this.isEdit=false;
        this.navCtrl.pop();
    };
    ReprofilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ReprofilePage.prototype.logForm = function () {
        console.log(this.todo.value);
    };
    ReprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reprofile',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\reprofile\reprofile.html"*/'<!--\n\n  Generated template for the ReprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n          <ion-col>\n\n              <ion-icon name="arrow-back" style="color: white;font-size: 20px;float: left;" (click)="back()" large></ion-icon>\n\n    \n\n            </ion-col>\n\n\n\n    \n\n        <ion-col style="position: unset;" >\n\n          <ion-title text-center>Profile</ion-title>\n\n        </ion-col>\n\n        <ion-col>\n\n            <ion-icon name="create" style="color: white;font-size: 20px;float: right;" (click)="edit()"></ion-icon>\n\n          </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding >\n\n\n\n<div *ngIf="isEdit==false;">\n\n  <ion-grid text-center>\n\n    <ion-row align-items-center>\n\n      <ion-col text-center style="margin-left: 40px">\n\n        <img class="img" src="assets/imgs/man.png" *ngIf="!global.galleryPhoto && cliprodet.isMale==true;">\n\n        <img class="img" src="assets/imgs/female.png" *ngIf="!global.galleryPhoto && !cliprodet.isMale==true;">\n\n        <img class="img" [src]="global.galleryPhoto" *ngIf="global.galleryPhoto" />\n\n        <ion-badge id="badge_camera" (click)="openCamera(global.galleryPhoto)">\n\n          <ion-icon name="camera" style="font-size: 16px">\n\n          </ion-icon>\n\n        </ion-badge>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <h5 style="margin: 10px" text-center>{{cliprodet.firstName|uppercase}} {{cliprodet.middleName|uppercase}} {{cliprodet.lastName|uppercase}}</h5>\n\n  <!-- <p text-center>\n\n    <b>Caring Needed: {{i.care}}</b>\n\n  </p> -->\n\n\n\n\n\n  <ion-row text-center>\n\n      <ion-col col-2>\n\n        <ion-icon name="pin" style="color: gray;font-size:  20px;margin-left: 5%;margin-top: 5px;"></ion-icon>\n\n      </ion-col>\n\n      <ion-col  col-10 text-wrap>\n\n          <ion-label style="text-align: left;font-weight: 500">{{cliprodet.street1}} {{cliprodet.street2}} , {{cliprodet.city}}, {{cliprodet.state}}, {{cliprodet.zipcode}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div *ngIf="cliprodet.clientlocimage!=null">\n\n        <img [src]="_DomSanitizer.bypassSecurityTrustUrl(cliprodet.clientlocimage)" style=" display: block;\n\n               width: 100%;\n\n               height: 120px;">\n\n </div>\n\n\n\n\n\n\n\n    <ion-row text-center>\n\n        <ion-col col-2>\n\n          <ion-icon name="ios-call" style="color: gray;font-size:  20px;margin-left: 5%;margin-top: 5px;"></ion-icon>\n\n        </ion-col>\n\n        <ion-col  col-10 text-wrap>\n\n            <ion-label style="text-align: left;font-weight: 500">\n\n                <a href="tel:{{cliprodet.mobileNo}}">{{cliprodet.mobileNo}}</a></ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n\n\n      \n\n    <ion-row text-center>\n\n        <ion-col col-2>\n\n          <ion-icon name="mail" style="color: gray;font-size:  20px;margin-left: 5%;margin-top: 5px;"></ion-icon>\n\n        </ion-col>\n\n        <ion-col  col-10 text-wrap>\n\n            <ion-label style="text-align: left;font-weight: 500">\n\n                <a href="mailto:{{cliprodet.emailId}}">{{cliprodet.emailId}}</a></ion-label>\n\n        </ion-col>\n\n      </ion-row>\n\n      </div>\n\n      <div *ngIf="isEdit==true;">\n\n          <!-- <ion-grid>\n\n              <ion-row text-center style="padding-top:3%;">\n\n                <ion-col text-center style="margin-left: 38px">\n\n                  <ion-avatar item-start *ngIf="!cliprodet.isMale==true;">\n\n                    <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(cliprodet.clientPhoto)" > -->\n\n                      <!-- {{i.clientPhoto}} -->\n\n                    <!-- </ion-avatar>\n\n                  <img class="img" src="assets/imgs/female.png" *ngIf="cliprodet.isMale==true;"> -->\n\n                  <!-- <img class="img" src={{cliprodet.clientPhoto}}> -->\n\n                  <!-- <ion-badge id="camera" (click)="openCamera()"><ion-icon name="camera"></ion-icon></ion-badge>\n\n                </ion-col>\n\n              </ion-row>\n\n              \n\n            </ion-grid> -->\n\n          <div  (ngSubmit)="logForm()">\n\n              <!-- [formGroup]="todo" -->\n\n              <ion-item>\n\n                  <ion-label stacked>First Name</ion-label>\n\n                <ion-input type="text"[(ngModel)]="cliprodet.firstName"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label stacked>Last Name</ion-label>\n\n                  <ion-input type="text"[(ngModel)]="cliprodet.lastName"></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                  <ion-label stacked>Middle Name</ion-label>\n\n                  <ion-input type="text"[(ngModel)]="cliprodet.middleName"></ion-input>\n\n              </ion-item>\n\n              <br/>\n\n              <div text-center>\n\n\n\n                  <button ion-button outline  (click)="location()">Get Location</button>\n\n                </div>\n\n              <ion-item>\n\n                  <ion-label stacked>Latitude</ion-label>\n\n                  <ion-input type="text" [(ngModel)]="cliprodet.latitude"></ion-input>\n\n                 \n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>Longitude</ion-label>\n\n                    <ion-input type="text" [(ngModel)]="cliprodet.longitude"></ion-input>\n\n                   \n\n                  </ion-item>\n\n              <ion-item>\n\n              <ion-label stacked>Street1</ion-label>\n\n              <ion-input type="text"[(ngModel)]="cliprodet.street1"></ion-input>\n\n          \n\n            </ion-item>\n\n             <ion-item>\n\n              <ion-label stacked>Street2</ion-label>\n\n              <ion-input type="text"[(ngModel)]="cliprodet.street2"></ion-input>\n\n             \n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label stacked>City</ion-label>\n\n                <ion-input type="text"[(ngModel)]="cliprodet.city"></ion-input>\n\n               \n\n              </ion-item> \n\n              <ion-item>\n\n                  <ion-label stacked>State</ion-label>\n\n                  <ion-input type="text"[(ngModel)]="cliprodet.state"></ion-input>\n\n              \n\n                </ion-item> \n\n                <ion-item>\n\n                    <ion-label stacked>Zipcode</ion-label>\n\n                    <ion-input type="text"[(ngModel)]="cliprodet.zipcode"></ion-input>\n\n              \n\n                  </ion-item>\n\n              \n\n                <ion-item>\n\n                    <ion-label stacked>Mobile Number</ion-label>\n\n                    <ion-input type="text"[(ngModel)]="cliprodet.mobileNo"></ion-input>\n\n                   \n\n                  </ion-item>\n\n              \n\n                <ion-item>\n\n                    <ion-label stacked>E-Mail Id</ion-label>\n\n                    <ion-input type="text"[(ngModel)]="cliprodet.emailId"></ion-input>\n\n                   \n\n                  </ion-item>\n\n                  \n\n\n\n            \n\n\n\n         <ion-row text-center style="padding-top: 15%">\n\n<ion-col col-9 push-1>\n\n    <button ion-button  Style="width: 100px;display: inline-block;text-transform: capitalize;" (click)="onSubmit(cliprodet)">Save</button>\n\n    <button ion-button color="danger" Style="width: 100px;display: inline-block;text-transform: capitalize;" (click)="cancel()">Cancel</button>\n\n</ion-col>\n\n           \n\n        \n\n\n\n           <!-- <ion-col col-6>\n\n             <button ion-button type="submit"   style="width: 75px">Save</button> -->\n\n             <!-- [disabled]="!todo.valid" -->\n\n           <!-- </ion-col>\n\n           <ion-col col-6>\n\n              <button ion-button style="background-color: red;width: 75px">Cancel</button> -->\n\n              <!-- [disabled]="!todo.valid" -->\n\n           <!-- </ion-col> -->\n\n         </ion-row>\n\n         <!-- <button >Take a Picture</button> -->\n\n\n\n      <!-- Latest Picture:\n\n      <img [src]="base64Image" *ngIf="base64Image" /> -->\n\n                \n\n      </div></div>\n\n          \n\n  <!-- <table>\n\n         \n\n              <tbody>\n\n              <tr>\n\n                <td style="text-align: center"><b>Street</b></td>\n\n                 <td style="text-align: center">{{cliprodet.street1}} {{cliprodet.street2}}</td>\n\n              </tr>\n\n                <tr>\n\n                <td style="text-align: center"><b>City</b></td>\n\n                 <td style="text-align: center">{{cliprodet.city}}</td>\n\n              </tr>\n\n                <tr>\n\n                <td style="text-align: center"><b>State</b></td>\n\n                 <td style="text-align: center">{{cliprodet.state}}</td>\n\n              </tr>\n\n              <tr>\n\n                <td style="text-align: center"><b>Zipcode</b></td>\n\n                 <td style="text-align: center">{{cliprodet.zipcode}}</td>\n\n              </tr>\n\n                  <tr>\n\n                <td style="text-align: center"><b>Mobile</b></td>\n\n                 <td style="text-align: center">{{cliprodet.mobileNo}}</td>\n\n              </tr>\n\n                <tr>\n\n                <td style="text-align: center"><b>Email</b></td>\n\n                 <td style="text-align: center">{{cliprodet.emailId}}</td>\n\n              </tr>\n\n              </tbody>\n\n            </table> -->\n\n\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\reprofile\reprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
    ], ReprofilePage);
    return ReprofilePage;
}());

var pro = /** @class */ (function () {
    function pro() {
    }
    return pro;
}());

// export class FormsPage {
//   todo = {}
//   logForm() {
//     console.log(this.todo)
//   }}
//# sourceMappingURL=reprofile.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewappointmentPage; });
/* unused harmony export record */
/* unused harmony export record1 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ReviewappointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewappointmentPage = /** @class */ (function () {
    function ReviewappointmentPage(navCtrl, navParams, alertCtrl, http, global, loadingCtrl, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this._DomSanitizer = _DomSanitizer;
        this.reviewdet = [];
        this.currentdate = new Date();
        this.cancelreason = '';
        this.records = [
            {
                cname: "Jessica Careson",
                starttime: "9:00 AM",
                stoptime: "11:00 AM",
                image: "assets/imgs/jessica.jpg"
            }
        ];
        this.records1 = [
            {
                cname: "Jessica"
            }
        ];
    }
    ReviewappointmentPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ReviewappointmentPage");
        this.reviewdet = this.navParams.get("revdetai");
        console.log(this.reviewdet);
    };
    ReviewappointmentPage.prototype.showConfirm = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cancel Appointment!',
            cssClass: "buttonCss3",
            message: "Why do you want to cancel this appointment?",
            inputs: [
                {
                    name: 'reason',
                },
            ],
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.cancelreason = data.reason;
                        console.log('Ok clicked');
                        console.log(data.reason);
                        _this.recipientcancelappt();
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ReviewappointmentPage.prototype.recipientcancelappt = function () {
        var _this = this;
        console.log("cancel appoinment");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/ReTimesheet/clientcanceSch?";
        var myParams = new URLSearchParams();
        myParams.append("scheduleId", this.reviewdet.scheduleId.toString());
        myParams.append("agencyId", this.reviewdet.agencyId.toString());
        myParams.append("cancelnotes", this.cancelreason);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.global.isredashrelaod = true;
            _this, _this.navCtrl.pop();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            alert(err.error);
            loading.dismiss();
        });
    };
    ReviewappointmentPage.prototype.shboard = function () {
        this.navCtrl.pop();
    };
    ReviewappointmentPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    ReviewappointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-reviewappointment",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\reviewappointment\reviewappointment.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row  align-items-center>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-left:20%">View Appointment</ion-title>\n\n        </ion-col>\n\n        <ion-col col-2 style="padding: 0">\n\n          <button ion-button clear (click)="goback()"\n\n            style="text-transform: none;color: white;float: right;" >Done</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content text-center *ngFor="let i of records" style="background-color: #F5F5F5">\n\n\n\n  \n\n  <ion-grid style="background-color: white;">\n\n      <p style="color: grey">{{currentdate | date:\'fullDate\'}}</p>\n\n\n\n      <ion-row text-center >\n\n          <ion-col col-12>\n\n            <div item-start *ngIf="reviewdet.employeePhoto!=null;">\n\n              <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(reviewdet.employeePhoto)" >\n\n              <!-- {{i.clientPhoto}} -->\n\n            </div>\n\n            <div item-start *ngIf="reviewdet.employeePhoto==null&&reviewdet.isMale==true;">\n\n              <img class="img" src="assets/imgs/male.png">\n\n              <!-- {{i.clientPhoto}} -->\n\n            </div>\n\n            <div item-start *ngIf="reviewdet.employeePhoto==null&&reviewdet.isMale!=true;">\n\n              <img class="img" src="assets/imgs/female.png">\n\n              <!-- {{i.clientPhoto}} -->\n\n            </div>\n\n          </ion-col>\n\n          </ion-row>         \n\n          <h6 style="margin: 10px;margin-bottom: 0;">{{reviewdet.employeeName|uppercase}}</h6>\n\n          <p style="margin-top:0;color: grey"><i>{{reviewdet.schstartdt|date:\'hh:mm a\'}} - {{reviewdet.schenddt|date:\'hh:mm a\'}}</i></p>\n\n          <br>\n\n          <div *ngIf="!reviewdet.isStarted && !reviewdet.isCompleted && !reviewdet.isCancelled">\n\n      <ion-row text-center style="font-size: 25px;" >\n\n          <ion-col col-6>\n\n            <a href="tel:{{reviewdet.agenctPhoneNo}}">   <ion-icon name="call"  color="primary"></ion-icon></a>\n\n          </ion-col>\n\n          <ion-col col-6 >\n\n              <!-- [ngStyle]=" {\'opacity\':(!isstaffjoin || ispodended) ? \'0.5\': \'\' } -->\n\n              <ion-icon  name="close-circle" color="primary" (click)="showConfirm()" [ngStyle]="{\'pointer-events\':(reviewdet.isStarted || reviewdet.isCancelled)? \'none\':\'\' }"></ion-icon>\n\n          </ion-col>\n\n      </ion-row>\n\n        <ion-row text-center style="color: grey;font-size: 14px;">\n\n          <ion-col col-6>\n\n              <label>Agency:{{reviewdet.agenctPhoneNo}} </label>\n\n            </ion-col>\n\n            <ion-col col-6  [ngStyle]="{\'pointer-events\':(reviewdet.isStarted || reviewdet.isCancelled)? \'none\':\'\' }">\n\n                <label (click)="showConfirm()">Cancel Appt</label>\n\n              </ion-col>\n\n      </ion-row>\n\n      </div>\n\n      <div *ngIf="reviewdet.isStarted && !reviewdet.isCompleted && !reviewdet.isCancelled">\n\n        <ion-icon name="checkmark-circle" style="color: #0aea0a;font-size: 20px">&nbsp;&nbsp;Appointment Started</ion-icon> \n\n    </div>\n\n    <div *ngIf="reviewdet.isCompleted && !reviewdet.isCancelled">\n\n      <ion-icon name="information-circle" color=primary style="font-size: 20px">&nbsp;&nbsp;Appointment Completed</ion-icon> \n\n  </div>\n\n  <div *ngIf="reviewdet.isCancelled">\n\n    <ion-icon name="close-circle" style="color: red;font-size: 20px">&nbsp;&nbsp;Appointment Cancelled</ion-icon> \n\n</div>\n\n    <br>\n\n      <!-- <ion-row text-center style="color: grey;font-size: 14px;">\n\n        <ion-col col-6>\n\n            <label></label>\n\n          </ion-col>\n\n          <ion-col col-6>\n\n              \n\n            </ion-col>\n\n    </ion-row> -->\n\n  </ion-grid>       \n\n  <p style="text-align: left;margin-left: 5%;font-weight: 900" padding >\n\n    {{reviewdet.employeeName|uppercase}} from {{reviewdet.agencyName|uppercase}} will help you with {{reviewdet.jobname}}.</p>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\reviewappointment\reviewappointment.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ReviewappointmentPage);
    return ReviewappointmentPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

var record1 = /** @class */ (function () {
    function record1() {
    }
    return record1;
}());

//# sourceMappingURL=reviewappointment.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recarehistory_recarehistory__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, viewCtrl, alertCtrl, storage, loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.carehistory = function () {
        var _this = this;
        //  this.navCtrl.push(RecarehistoryPage);
        this.viewCtrl.dismiss().then(function () {
            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__recarehistory_recarehistory__["a" /* RecarehistoryPage */]);
        });
    };
    PopoverPage.prototype.logout = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging out...'
        });
        console.log();
        this.storage.remove("loginAuth");
        var alert = this.alertCtrl.create({
            title: 'Do you want to Logout?',
            //  message: 'Do you want to Logout the session?',
            // cssClass: "buttonCssa",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        loading.present();
                        window.location.reload();
                        console.log('Logout');
                    }
                }
            ]
        });
        this.viewCtrl.dismiss();
        loading.dismiss();
        (function (err) {
            console.log(err);
            loading.dismiss();
            _this.viewCtrl.dismiss();
        });
        alert.present();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\popover\popover.html"*/'<!--\n\n  Generated template for the PopoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>popover</ion-title>\n\n  </ion-navbar> -->\n\n\n\n</ion-header> \n\n<ion-content padding>\n\n    <ion-list  style="margin: -23px;">\n\n      <ion-item (click)="carehistory()">\n\n          <ion-icon name="ios-time-outline" name="md-time" color=primary style=" font-size: 20px;">&nbsp;&nbsp;Care History</ion-icon>\n\n      </ion-item>\n\n      <ion-item (click)="logout()">\n\n          <ion-icon name="md-log-out" color=primary style=" font-size:20px;" >&nbsp;&nbsp;Logout</ion-icon>\n\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecarehistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recarehistorymonth_recarehistorymonth__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RecarehistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecarehistoryPage = /** @class */ (function () {
    function RecarehistoryPage(navCtrl, navParams, http, loadingCtrl, viewCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.global = global;
        this.monthlist = [];
        this.missingTimeSheet = [];
    }
    RecarehistoryPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/ReCareHistory/ReCareMonthList?";
        var myParams = new URLSearchParams();
        myParams.append("clientId", this.global.clientId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.clientData = data;
            if (data != null) {
                _this.monthlist = data;
                console.log("data");
                console.log(_this.monthlist);
            }
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    RecarehistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecarehistoryPage');
    };
    RecarehistoryPage.prototype.error = function (monthdata) {
        console.log(monthdata);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recarehistorymonth_recarehistorymonth__["a" /* RecarehistorymonthPage */], { "monthdata": monthdata });
    };
    RecarehistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recarehistory',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\recarehistory\recarehistory.html"*/'<ion-header text-center>\n\n  <ion-navbar color="primary" style="padding: 0" hideBackButton="true">\n\n    \n\n        <ion-buttons left>\n\n            <button  ion-button icon-only (click)="viewCtrl.dismiss()">\n\n                <ion-icon name="arrow-back"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n   \n\n        <ion-title style="padding-right:10%">Care History</ion-title>\n\n      <!-- </ion-col>\n\n      <ion-col></ion-col> -->\n\n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content style="background-color: #F5F5F5;">\n\n\n\n  <ion-list text-wrap *ngFor="let mn of monthlist" style="padding: 2px;padding-top: 5%;">\n\n\n\n    <ion-item (click)="error(mn)" style="border:1px solid #607D8B;padding: 6px;">\n\n      <ion-label style="font-size:17px;margin: 0">\n\n        <ion-row align-items-center>\n\n          <!-- <div class="circle" style="margin-right: 5px">\n\n                  <div class="letter">{{mn.monthName}}</div>\n\n                </div> -->\n\n          <b>{{mn.monthName}} {{ mn.year}}</b>\n\n          <ion-badge id="missing" class="test" color="danger" *ngIf="mn.isMissingTimeSheet">!</ion-badge>\n\n        </ion-row>\n\n      </ion-label>\n\n      <ion-label style="color: gray;font-size:17px;margin: 0" text-right>{{mn.dayList.length}} Timesheets\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <!-- <ion-item>\n\n      <ion-label>March</ion-label>\n\n      <ion-label style="color: gray;" text-right>9 Timesheets\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </ion-label>>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>February</ion-label>\n\n      <ion-label style="color: gray;" text-right>8 Timesheets\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </ion-label>>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>January</ion-label>\n\n      <ion-label style="color: gray;" text-right>9 Timesheets\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </ion-label>>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>December 2017</ion-label>\n\n      <ion-label style="color: gray;" text-right>5 Timesheets\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </ion-label>>\n\n    </ion-item> -->\n\n  </ion-list>\n\n  <div class="alert" *ngIf="monthlist.length==0">\n\n    <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n    <strong>No Care History is available!</strong>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\recarehistory\recarehistory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */]])
    ], RecarehistoryPage);
    return RecarehistoryPage;
}());

//# sourceMappingURL=recarehistory.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecarehistorymonthPage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recarehistorymonthdetails_recarehistorymonthdetails__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecarehistorymonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecarehistorymonthPage = /** @class */ (function () {
    function RecarehistorymonthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sliderValue = 40;
        this.full = false;
        this.daylist = [];
        this.Monthname = "";
        this.records = [
            {
                day: "April 19",
                cname: "Jessica Careson",
                entry: "6 of 6 Entries Verified",
                click: true
            },
            {
                day: "April 15",
                cname: "Jessica Careson",
                entry: "4 of 6 Entries Verified",
                click: false
            },
            {
                day: "April 10",
                cname: "Jessica Careson",
                entry: "4 of 6 Entries Verified",
                click: false
            },
            // {
            //   day:"April 7",
            //   cname:"Billy Crupt",
            //   entry:"1 of 7 Entries Verified",
            //   click:false
            // },
            {
                day: "April 4",
                cname: "Billy Crupt",
                entry: "1 of 6 Entries Verified",
                click: false
            },
            {
                day: "April 1",
                cname: "Billy Crupt",
                entry: "0 of 6 Entries Verified",
                click: false
            }
        ];
    }
    RecarehistorymonthPage.prototype.ionViewWillEnter = function () {
        var month = this.navParams.get("monthdata");
        console.log(month);
        this.daylist = month.dayList;
        console.log(this.daylist);
        this.Monthname = month.monthName;
    };
    RecarehistorymonthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecarehistorymonthPage');
    };
    RecarehistorymonthPage.prototype.details = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__recarehistorymonthdetails_recarehistorymonthdetails__["a" /* RecarehistorymonthdetailsPage */]);
    };
    RecarehistorymonthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recarehistorymonth',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\recarehistorymonth\recarehistorymonth.html"*/'<ion-header text-center>\n\n  <ion-navbar color="primary" style="padding: 0">\n\n    <ion-title style="padding-right: 10%">{{Monthname}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content  style="background-color:#EEEEEE;padding-top: 2%">\n\n\n\n    <ion-card style="margin: 5px;padding: 10px;padding-top: 5%" *ngFor="let i of daylist" (click)="details()">\n\n      <ion-grid style="padding: 0px;">\n\n        <ion-row>\n\n          <ion-col col-9>\n\n            <h2  style="font-weight: 500">{{i.scheduleDT | date:\'MMMM dd\'}}:{{i.employeeName}}</h2>\n\n            <p style="color: grey" *ngIf="!i.isMissingTimeSheet">{{i.totalEntry}} of {{i.verifiedEntry}} Entries Verified</p>\n\n           <ion-icon name="information-circle" style="color: red;padding-top: 2%" *ngIf="i.isMissingTimeSheet"> Timesheet not submitted </ion-icon>\n\n          </ion-col>\n\n          <ion-col col-3 text-right>\n\n            <ion-item>\n\n              <ion-range [(ngModel)]="i.sliderValue">\n\n\n\n              </ion-range>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card>\n\n    <div class="alert" *ngIf="daylist.length==0">\n\n      <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n      <strong>No timesheet are available for this month!</strong>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\recarehistorymonth\recarehistorymonth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RecarehistorymonthPage);
    return RecarehistorymonthPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=recarehistorymonth.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecarehistorymonthdetailsPage; });
/* unused harmony export items */
/* unused harmony export items1 */
/* unused harmony export cmark */
/* unused harmony export content */
/* unused harmony export service */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecarehistorymonthdetailsPage = /** @class */ (function () {
    function RecarehistorymonthdetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = [{
                image: "assets/imgs/man.png",
                worktype: "Recipient of Care",
                name: "Barnes",
            },
            {
                image: "assets/imgs/female.png",
                worktype: "Provided By",
                name: "Julie Stevens",
            },
        ];
        this.item1 = [{
                //  image:"assets/imgs/h.PNG",
                orgname: "HomeCare First",
                connum: "5555-5555-5555",
            },];
        this.mark = [{
                type: "Bathing",
            },
            {
                type: "Grooming",
            },
        ];
        this.contents = [{
                time: "Time In",
                duration: "9.00 am",
                add: "5151, 1st Avenue Rochester, MN 55555",
                loc: "LOCATION VERIFIED BY GPS",
            },
            {
                time: "Time Out",
                duration: "11.00 am",
                add: "5151, 1st Avenue Rochester, MN 55555",
                loc: "LOCATION VERIFIED BY GPS",
            },];
        this.services = [{
                servtype: "DATE OF SERVICE",
                quantity: "April 19,2018",
                servtime: "TOTAL TIME",
                duration: "2H 5M",
            },
            {
                servtype: "SERVICE TYPE",
                quantity: "PCA",
                servtime: "RATIO",
                duration: "1:1",
            },
        ];
    }
    RecarehistorymonthdetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecarehistorymonthdetailsPage');
    };
    RecarehistorymonthdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recarehistorymonthdetails',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\recarehistorymonthdetails\recarehistorymonthdetails.html"*/'\n\n<ion-header text-center>\n\n\n\n    <ion-navbar color="primary" style="padding: 0%;">\n\n      <ion-title  style="padding-right: 10%">April 7</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n   <ion-list align-items-center no-lines>\n\n     <ion-item text-center>\n\n      <p style="font-size: 75%">YOU APPROVED THIS TIMESHEET ON </p>\n\n      <h2><b>April 7,2018,11.30 am</b></h2>\n\n     </ion-item>\n\n     <ion-item text-center>\n\n      <ion-range >\n\n\n\n      </ion-range>\n\n       <p><i>Only 1 of 6 entries could be verified</i></p>\n\n     </ion-item>\n\n   </ion-list>\n\n   \n\n  \n\n    \n\n          <ion-grid text-center>\n\n            <ion-row>\n\n              <ion-col offset-6>\n\n                <div class="circle" style="margin-left: -28px">\n\n                  <div class="letter">Cashe</div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n            <h1>PCA Cashe Agency</h1>\n\n            <p>13345678</p>\n\n          </ion-grid>\n\n\n\n        \n\n\n\n\n\n        \n\n                    \n\n     \n\n    <ion-list>\n\n<ion-item style="margin-left: 0.25%;margin-right: 0.25%" *ngFor="let i of item">\n\n    <ion-avatar item-start>\n\n      <img style="border:1px solid rgb(206, 52, 10)" src={{i.image}}>\n\n    </ion-avatar>\n\n    <p>{{i.worktype}}</p>\n\n    <h2>{{i.name}}</h2>\n\n</ion-item>   \n\n</ion-list>\n\n<ion-grid text-center>\n\n<ion-row *ngFor="let s of services">\n\n<ion-col col-6 style="border:1px solid gray;">\n\n  <p style="color:grey" >{{s.servtype}}</p>\n\n  <ion-label >{{s.quantity}}</ion-label>\n\n</ion-col> \n\n\n\n  <ion-col col-6 style="border:1px solid gray;">\n\n    <p style="color:grey" >{{s.servtime}}</p>\n\n    <ion-label >{{s.duration}}</ion-label>\n\n</ion-col> \n\n</ion-row>\n\n</ion-grid>\n\n<h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">ACTIVITIES  COMPLETED</h5>\n\n     <ion-list no-lines >\n\n      <ion-item *ngFor="let c of mark">\n\n          <ion-icon name="md-close" style="color:red" item-start small></ion-icon>\n\n          <ion-label >{{c.type}}</ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-icon name="md-checkmark" item-start small></ion-icon>\n\n              <ion-label >Eating</ion-label>\n\n          </ion-item>\n\n    \n\n        <ion-item>\n\n            <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">NOTES</h5>\n\n           <ion-row style=" background-color:#E3F2FD;">\n\n  <ion-textarea  class="note" placeholder="Enter your notes here">I also ran Errands.</ion-textarea>\n\n </ion-row>\n\n        </ion-item>\n\n        <ion-item *ngFor="let t of contents">\n\n            <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">{{t.time}}</h5>\n\n            <ion-grid style="margin-left: 5px">\n\n                <ion-row>\n\n                <h3 style="margin-top: 5px;margin-bottom: 5px;">{{t.duration}}</h3>\n\n                </ion-row>\n\n                <ion-row style="padding-top: 2%">\n\n             <ion-icon small name="close-circle" style="color:red;float:left;font-size:12px;">&nbsp;&nbsp;{{t.loc}}</ion-icon></ion-row></ion-grid>\n\n      </ion-item>      \n\n </ion-list>\n\n        </ion-content>\n\n        \n\n      \n\n  '/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\recarehistorymonthdetails\recarehistorymonthdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RecarehistorymonthdetailsPage);
    return RecarehistorymonthdetailsPage;
}());

var items = /** @class */ (function () {
    function items() {
    }
    return items;
}());

var items1 = /** @class */ (function () {
    function items1() {
    }
    return items1;
}());

var cmark = /** @class */ (function () {
    function cmark() {
    }
    return cmark;
}());

var content = /** @class */ (function () {
    function content() {
    }
    return content;
}());

var service = /** @class */ (function () {
    function service() {
    }
    return service;
}());

//# sourceMappingURL=recarehistorymonthdetails.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cglogin_cglogin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(navCtrl, navParams, loadingCtrl, http, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.entreotp = false;
        this.entrepss = false;
        this.otpemailsent = "";
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ForgotpasswordPage");
    };
    ForgotpasswordPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cglogin_cglogin__["a" /* CgloginPage */]);
    };
    ForgotpasswordPage.prototype.checkusername = function (username) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        console.log(username);
        loading.present();
        var url = "api/Auth/resetpassword?";
        var myParams = new URLSearchParams();
        myParams.append("userName", username);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.pswdrstId = data.resetPasswordId;
            _this.otpemailsent = data.emaildetail;
            _this.entreotp = true;
            loading.dismiss();
        }, function (err) {
            _this.warning = true;
            _this.errors = err.error;
            console.log(err);
            loading.dismiss();
            setTimeout(function () {
                this.warning = false;
            }.bind(_this), 6000);
        });
    };
    ForgotpasswordPage.prototype.validateotp = function () {
        var _this = this;
        console.log(this.pswdrstId);
        console.log(this.otpdetail);
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        var url = "api/Auth/verifyOTP?";
        var myParams = new URLSearchParams();
        myParams.append("ResetpasswordId", this.pswdrstId.toString());
        myParams.append("otp", this.otpdetail.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            // this.pswdrstId = data;
            _this.entrepss = true;
            _this.Evvid = data;
            loading.dismiss();
        }, function (err) {
            _this.warning = true;
            _this.errors = err.error;
            console.log(err);
            loading.dismiss();
            setTimeout(function () {
                this.warning = false;
            }.bind(_this), 6000);
        });
    };
    ForgotpasswordPage.prototype.changereentrepass = function () {
        var _this = this;
        console.log(this.Evvid);
        console.log(this.chanpass);
        if (this.chanpass == this.rechanpass) {
            var loading_1 = this.loadingCtrl.create({
                content: "Please wait..."
            });
            loading_1.present();
            var url = "api/Auth/changepss?";
            var myParams = new URLSearchParams();
            myParams.append("Evvid", this.Evvid.toString());
            myParams.append("password", this.chanpass);
            this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                loading_1.dismiss();
                _this.sucessalertpw();
                // this.navCtrl.push(CgloginPage);
            }, function (err) {
                _this.errors = err.error;
                _this.warning = true;
                console.log(err);
                loading_1.dismiss();
                setTimeout(function () {
                    this.warning = false;
                }.bind(_this), 6000);
            });
        }
        else {
            this.newwarning = true;
            this.Errors = "Enter Password is Mismatching";
            setTimeout(function () {
                this.newwarning = false;
            }.bind(this), 6000);
            // const toast = this.toastCtrl.create({
            //   message: 'Enter password is Mismatching',
            //   duration: 5000,
            //   position: 'Top',
            //   showCloseButton:true,
            //   closeButtonText:"x"
            // });
            // toast.present();
        }
    };
    ///for alert
    ForgotpasswordPage.prototype.sucessalertpw = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            // title: 'Sucess',
            message: 'Password Changed Successfully',
            buttons: [
                // {
                //   text: 'Cancel',
                //   role: 'cancel',
                //   handler: () => {
                //     console.log('Cancel clicked');
                //   }
                // },
                {
                    text: 'Login',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.login();
                    }
                }
            ]
        });
        alert.present();
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-forgotpassword",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\forgotpassword\forgotpassword.html"*/'<!-- \n\nbackground: rgb(185,210,224); -->\n\n<ion-content padding class="outer-content" style="background-image:linear-gradient(-180deg, #008fd3 28%, #82f5ec 100%);">\n\n  <div class="container" style="margin-top: 96px;">\n\n\n\n    <div class="card card-container">\n\n      <ion-grid>\n\n        <ion-row justify-content-center>\n\n          <br/>\n\n\n\n          <img style="\n\n          width: 68%;\n\n          height: 79%;\n\n                margin:0 auto;" src="assets/imgs/log.PNG">\n\n        </ion-row>\n\n\n\n        <p style="color:red;font-size: 15px;text-align: center" *ngIf="warning">{{errors}}</p>\n\n      </ion-grid>\n\n\n\n      <ion-title text-center>Forgot Password</ion-title>\n\n      <br/>\n\n      <br/>\n\n\n\n      <!-- *ngIf ="!entreotp && !entrepss" class="form-signin" -->\n\n\n\n      <ion-list inset *ngIf ="!entreotp && !entrepss">\n\n\n\n        <ion-item>\n\n          <ion-label>User Name</ion-label>\n\n          <ion-input type="text" name="user" style="text-align-last:right" [(ngModel)]="username"></ion-input>\n\n        </ion-item>\n\n\n\n        <br/>\n\n        <br/>\n\n        <button ion-button block (click)="checkusername(username)" style="color:white;font-size:16px;">Proceed</button>\n\n\n\n        <!-- <button class="btn btn-lg btn-primary" centre (click)="checkusername(username)" type="submit" style="color:white;font-size:16px;">Proceed</button> -->\n\n        <!-- /form -->\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <a href="#" style="color:#0097A7;font-size:14px;display:block;text-align: center" (click)="login()">Cancel</a>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n\n\n\n\n      <!-- *ngIf ="entreotp && !entrepss" -->\n\n\n\n      <ion-list inset *ngIf ="entreotp && !entrepss">\n\n          <div class="success alertred">\n\n              <span class="closebtnred" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n              <p style="color:black;">Temporary password has been sent to {{otpemailsent}}</p>\n\n         </div>\n\n\n\n        <!-- <p style="color:green;font-size: 15px;text-align: center"></p> -->\n\n        <ion-item>\n\n          <ion-label>OTP</ion-label>\n\n          <ion-input type="password" maxlength="5" pattern="/^[0-9]{1,7}$/{2}" [(ngModel)]="otpdetail" text-right></ion-input>\n\n        </ion-item>\n\n\n\n        <br/>\n\n        <br/>\n\n        <button ion-button block  (click)="validateotp()" style="color:white;font-size:18px;">Validate</button>\n\n        <!-- <button class="btn btn-lg btn-primary" type="submit" (click)="validateotp()" style="color:white;font-size:18px;">Validate</button> -->\n\n        <!-- /form -->\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <a href="#" style="color:#0097A7;font-size:14px;display:block;text-align: center" (click)="login()">Cancel</a>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n\n\n\n\n      <!-- *ngIf ="entrepss" -->\n\n\n\n      <ion-list inset *ngIf ="entrepss">\n\n          <p *ngIf="newwarning" style="color:red;font-size:14px;text-align: center;">{{Errors}}</p>\n\n          \n\n        <ion-item>\n\n          <ion-label>EntrePassword</ion-label>\n\n          <ion-input type="password" name="changepss" style="text-align-last:right" [(ngModel)]="chanpass"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Re-entrePassword</ion-label>\n\n          <ion-input type="password" name="repass" style="text-align-last:right" [(ngModel)]="rechanpass"></ion-input>\n\n        </ion-item>\n\n\n\n        <br/>\n\n        <br/>\n\n        <button ion-button block  (click)="changereentrepass()" style="color:white;font-size:18px;">Proceed</button>\n\n        <!-- <button class="btn btn-lg btn-primary" (click)="changereentrepass()" type="submit" style="color:white;font-size:18px;">Proceed</button> -->\n\n        <!-- /form -->\n\n\n\n        <ion-row>\n\n          <ion-col>\n\n            <a href="#" style="color:#0097A7;font-size:14px;display:block;text-align: center" (click)="login()">Cancel</a>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list>\n\n      <!-- <button ion-button block (click)="presentAlert()">Block Button</button> -->\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\forgotpassword\forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgmissingtimesheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgmissingtimesheetmonth_cgmissingtimesheetmonth__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgprofilenew_cgprofilenew__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addentries_addentries__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cgmultipletimesheet_cgmultipletimesheet__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CgmissingtimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgmissingtimesheetPage = /** @class */ (function () {
    function CgmissingtimesheetPage(navCtrl, navParams, http, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.monthlist = [];
        this.missingTimeSheet = [];
    }
    CgmissingtimesheetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgmissingtimesheetPage');
    };
    CgmissingtimesheetPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var client = this.navParams.get("clientData");
        this.clientName = client.clientName;
        this.ismale = client.isMale;
        var employeeId = 5;
        console.log(this.clientName);
        console.log(this.global.employeeId);
        this.clientNumber = client.clientId;
        console.log(this.clientNumber);
        var url = "api/CgCareRecipientsLst/RecipientCareHistoryList?";
        var myParams = new URLSearchParams();
        myParams.append("EmployeeId", this.global.employeeId.toString());
        myParams.append("clientId", client.clientId);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log("hi");
            console.log(data);
            _this.clientData = data;
            if (data != null) {
                _this.monthlist = data.monthlist;
                _this.missingTimeSheet = data.missingTimeSheet;
            }
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgmissingtimesheetPage.prototype.complete = function () {
        console.log("missingTimeSheet");
        console.log(this.clientNumber);
        //   alert(miss);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__cgmultipletimesheet_cgmultipletimesheet__["a" /* CgmultipletimesheetPage */], { "clientid": this.clientNumber });
        // ,"scheduleId":miss.scheduleid,"timecardId":miss.timecardId
        // this.navCtrl.push(Cgreview1Page);
    };
    CgmissingtimesheetPage.prototype.error = function (clientData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgmissingtimesheetmonth_cgmissingtimesheetmonth__["a" /* CgmissingtimesheetmonthPage */], { "clientData": clientData });
    };
    CgmissingtimesheetPage.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */]);
    };
    CgmissingtimesheetPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__addentries_addentries__["a" /* AddentriesPage */], { "clientno": this.clientNumber });
    };
    CgmissingtimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgmissingtimesheet',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmissingtimesheet\cgmissingtimesheet.html"*/'<ion-header text-center>\n\n\n\n  <ion-navbar color="primary">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n          <ion-title style="padding-left: 25%">Time Entires</ion-title>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <ion-icon name="add" style="color: white;font-size: 20px;float: right;padding-right: 15px" (click)="add()"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content style="background-color: #F5F5F5;">\n\n  <!-- <ion-item no-lines style="margin-left: 0.25%;margin-right: 0.25%;padding: 10px">\n\n     <ion-avatar item-start *ngIf="client.clientPhoto!=null;">\n\n        <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(client.clientPhoto)" >\n\n    \n\n      </ion-avatar> -->\n\n      <!-- <ion-avatar item-start *ngIf="ismale==true;">\n\n        <img class="img" src="assets/imgs/male.png"> -->\n\n        <!-- {{i.clientPhoto}} -->\n\n      <!-- </ion-avatar>\n\n      <ion-avatar item-start *ngIf="ismale!=true;">\n\n        <img class="img" src="assets/imgs/female.png"> -->\n\n        <!-- {{i.clientPhoto}} -->\n\n      <!-- </ion-avatar>\n\n    <p>RECIPIENT OF CARE</p>\n\n    <h2>{{clientName|uppercase}}</h2>\n\n</ion-item> --> \n\n<ion-card class="card" style="margin: 10px;padding: 10px;padding-bottom: 0" (click)="complete()">\n\n  <!-- *ngFor="let miss of missingTimeSheet"  -->\n\n     <ion-card-content style="padding-bottom: 0;padding-top: 0;padding-right: 0">\n\n        <ion-row align-items-start >\n\n            <ion-col col-1>\n\n              <div>\n\n                <ion-badge id="missing" class="test" color="danger" >!</ion-badge>\n\n              </div>\n\n            </ion-col>\n\n            <ion-col col-11 style="padding-left: 10px">\n\n              <h2><b>{{missingTimeSheet.length}} Timesheets to submit</b></h2>\n\n              <p>Its look like you have some timesheets to complete and submit.</p>\n\n              <button ion-button style="color:primary;text-transform: none;padding-left: 0px;" clear  >Complete it now</button>\n\n            </ion-col>\n\n          </ion-row>\n\n            <!-- <ion-row align-items-start >\n\n                <ion-col col-1>\n\n                  <div>\n\n                    <ion-badge id="missing" class="test" color="danger">!</ion-badge>\n\n                  </div>\n\n                </ion-col>\n\n                <ion-col col-11>\n\n                  <h2><b>Incomplete visit record</b></h2>\n\n               \n\n                  <p>For {{miss.scheduleddDt| date:\'fullDate\'}}.</p>\n\n                  <button ion-button style="color:primary;text-transform: none;padding-left: 0px;" clear >Complete it now</button>\n\n                </ion-col>\n\n              </ion-row> -->\n\n        </ion-card-content>\n\n      </ion-card>\n\n\n\n    <!-- <ion-list lines style="margin: 0"  *ngFor="let miss of missingTimeSheet">\n\n  <ion-grid style="padding: 0">\n\n    <ion-row align-items-start >\n\n      <ion-col col-2>\n\n        <div>\n\n          <ion-badge id="missing" class="test" color="danger">!</ion-badge>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-10 style="padding: 0">\n\n        <h4 style="margin-top: 10px">Missing Timesheet</h4>\n\n        <p style="margin-bottom: 0;margin-top: 10px">It\'s look like you haven\'t submitted {{clientName}} timesheet from {{miss.scheduleddDt | date:\'d/M/yy\'}}</p>\n\n        <button ion-button style="color:primary;text-transform: none;padding-left: 0px;" clear (click)="complete(miss)">Complete it now</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid><hr style="margin: 0">\n\n  </ion-list> -->\n\n\n\n\n\n  <ion-list style="padding-top: 10px" *ngFor="let mon of monthlist">\n\n    <ion-item (click)="error(mon)"  style="padding: 5px;border: 1px solid #607D8B">\n\n      <ion-label  style="font-size:17px;margin: 0">\n\n        <ion-row align-items-center>\n\n          <div class="circle" style="margin-right: 6px">\n\n              <div class="letter">{{mon.monthName}}</div>\n\n            </div>\n\n        <b>{{mon.monthName}} {{mon.year}}</b>\n\n        <span class="dot"></span>\n\n        </ion-row>\n\n      </ion-label>\n\n      <ion-label style="color: gray;font-size: 17px;margin: 0" text-right>{{mon.dayList.length}} Timesheets</ion-label>\n\n    </ion-item>\n\n   \n\n    <!-- <ion-item>\n\n           <ion-label>March</ion-label>\n\n           <ion-label style="color: gray;" text-right>5 Timesheets</ion-label>>\n\n         </ion-item>\n\n         <ion-item>\n\n             <ion-label>February</ion-label>\n\n             <ion-label style="color: gray;" text-right>2 Timesheets</ion-label>>\n\n           </ion-item>\n\n           <ion-item>\n\n               <ion-label>January</ion-label>\n\n               <ion-label style="color: gray;" text-right>6 Timesheets</ion-label>>\n\n             </ion-item>\n\n             <ion-item>\n\n                 <ion-label>December 2017</ion-label>\n\n                 <ion-label style="color: gray;" text-right>2 Timesheets</ion-label>>\n\n               </ion-item> -->\n\n               </ion-list>\n\n               <div class="alert" *ngIf="monthlist.length==0">\n\n                  <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n                  <strong>No Care History is available!</strong>\n\n                </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmissingtimesheet\cgmissingtimesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */]])
    ], CgmissingtimesheetPage);
    return CgmissingtimesheetPage;
}());

//# sourceMappingURL=cgmissingtimesheet.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgmissingtimesheetmonthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgcompletetimesheet_cgcompletetimesheet__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CgmissingtimesheetmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgmissingtimesheetmonthPage = /** @class */ (function () {
    function CgmissingtimesheetmonthPage(navCtrl, navParams, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.monthList = [];
        this.dayList = [];
    }
    CgmissingtimesheetmonthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgmissingtimesheetmonthPage');
        this.monthList = this.navParams.get("clientData");
        this.dayList = this.monthList.dayList;
        console.log(this.dayList);
    };
    CgmissingtimesheetmonthPage.prototype.ionViewWillEnter = function () {
        // let loading = this.loadingCtrl.create({
        //   content: 'Please wait...'
        // });
        // loading.present();
        // let client = this.navParams.get("clientData");
        // let employeeId: any = 5;
        // let url = "api/CgCareRecipientsLst/RecipientCareHistoryList?";
        // let myParams = new URLSearchParams();
        // myParams.append("EmployeeId", employeeId);
        // myParams.append("clientId", client.clientId);
        // this.http.get(url + myParams).subscribe(
        //   (data: any) => {
        //     console.log(data);
        //     this.clientData = data;
        //     if (data != null) {
        //       this.clientName = data.clientName;
        //       this.monthlist = data.monthlist;
        //       // this.dayList=data.dayList;
        //loading.dismiss();
        //     }
        //   },
        //   err => {
        //     console.log(err);
        //loading.dismiss();
        //   });
    };
    // details(rewvalue,index){
    //   let loading = this.loadingCtrl.create({
    //     content: 'Please wait...'
    //   });
    //   loading.present();
    //   if(!rewvalue.isSubmitted)
    //   {
    //   this.scheduleIdct =rewvalue.scheduleId; 
    //   this.timecardIdct = rewvalue.timeCardId;
    //   console.log(this.scheduleIdct);
    //   console.log(this.timecardIdct);
    //   let url = "api/Cgtimesheets/cgCompleteTC?";
    //   let myParams = new URLSearchParams();
    //   myParams.append("scheduleId",  this.scheduleIdct.toString());
    //   myParams.append("timecardId",  this.timecardIdct.toString());
    //   this.http.get(url + myParams).subscribe(
    //     (data: any) => {
    //       console.log(data);
    //     //  if(data != null)
    //     //  {
    //     //    data.tcstdt = (data.tcstdt).toISOString();
    //     //    data.tceddt = (data.tceddt).toISOString();
    //     //    console.log( data.tcstdt);
    //     //  }
    //     //  this.tcdetails = data
    //       console.log("navepush");
    //       loading.dismiss();
    //       this.navCtrl.push(CgreviewPage,{"revicedvalue":data});
    //     },
    //   err => {
    //     console.log(err);
    //   loading.dismiss();
    //   });
    // }
    //    }
    CgmissingtimesheetmonthPage.prototype.completesheet = function (miss) {
        console.log("hey");
        console.log(miss);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgcompletetimesheet_cgcompletetimesheet__["a" /* CgcompletetimesheetPage */], { "scheduleId": miss.scheduleId, "timecardId": miss.timeCardId });
    };
    CgmissingtimesheetmonthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgmissingtimesheetmonth',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmissingtimesheetmonth\cgmissingtimesheetmonth.html"*/'\n\n<ion-header text-center>\n\n\n\n    <ion-navbar color="primary" style="padding: 0">\n\n    <ion-title style="padding-right: 10%" *ngIf="monthList!=null">{{monthList.monthName}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content text-wrap style="background-color: F5F5F5">\n\n  <div *ngFor="let miss of dayList;let index=i;">\n\n    <ion-card style="margin: 5px;padding: 10px;"  (click)=" !miss.isSubmitted && completesheet(miss,i)" >\n\n      <!-- if(idx > 0) {removeSelected(item.spId)} -->\n\n       <ion-grid  >\n\n          <ion-row >\n\n            <ion-col col-9>\n\n                <h2 style="font-weight: 500">{{miss.scheduleDT | date:\'MMMM dd\'}}</h2>\n\n                <p style="color: grey;font-size:15px" *ngIf="miss.isSubmitted">{{miss.verifiedEntry}} of {{miss.totalEntry}} Entries Verified</p>\n\n                <p style="color:red;font-size:15px;font-weight: 500" *ngIf="!miss.isSubmitted"><ion-icon name="close-circle"></ion-icon> Timesheet not submitted</p>\n\n    \n\n            </ion-col>\n\n            <ion-col col-3 text-right>\n\n                <ion-item no-lines>\n\n\n\n                    <ion-range [(ngModel)]="miss.sliderValue" color=“danger” pin=“true” ></ion-range>\n\n                   \n\n                  </ion-item>\n\n            </ion-col>\n\n          </ion-row> \n\n        </ion-grid>\n\n          </ion-card></div>\n\n          <!-- <ion-card style="padding: 10px;margin: 10px">\n\n            <ion-grid>\n\n              <ion-row align-items-center (click)="completesheet()" >\n\n                <ion-col col-1 >                    \n\n                   <ion-badge id="error" class="test" color="danger">!</ion-badge>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <h2>April 10</h2>\n\n                    <p style="color: grey">Not Submitted</p>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n          </ion-card>\n\n          <ion-card style="padding: 10px;margin: 10px">\n\n              <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-8>\n\n                      <h2>April 1</h2>\n\n                      <p style="color: grey">4 of 6 Entries Verified</p>\n\n                  </ion-col>\n\n                  <ion-col col-4 text-right>\n\n                      <ion-item no-lines>\n\n                          <ion-range [(ngModel)]="sliderValue" color=“danger” pin=“true” ></ion-range>\n\n                          </ion-item>\n\n                        </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n            </ion-card> -->\n\n            <br/>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmissingtimesheetmonth\cgmissingtimesheetmonth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CgmissingtimesheetmonthPage);
    return CgmissingtimesheetmonthPage;
}());

//# sourceMappingURL=cgmissingtimesheetmonth.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpersonalizephotoeditPage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgpersonalizedetails_cgpersonalizedetails__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgpersonalizeexperience_cgpersonalizeexperience__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgpersonalizecertificate_cgpersonalizecertificate__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CgpersonalizephotoeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgpersonalizephotoeditPage = /** @class */ (function () {
    function CgpersonalizephotoeditPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = [
            {
                cgname: "Jessica"
            }
        ];
    }
    CgpersonalizephotoeditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpersonalizephotoeditPage');
    };
    CgpersonalizephotoeditPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */]);
    };
    CgpersonalizephotoeditPage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */]);
    };
    CgpersonalizephotoeditPage.prototype.exp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */]);
    };
    CgpersonalizephotoeditPage.prototype.certifi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */]);
    };
    CgpersonalizephotoeditPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgpersonalizephotoeditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpersonalizephotoedit',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizephotoedit\cgpersonalizephotoedit.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col col-2 style="padding: 0">         \n\n          <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button> \n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-right:22%">Personalize Profile</ion-title>\n\n        </ion-col>\n\n       </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div style="padding:20px" >\n\n    <span class="dot"></span>\n\n    <span class="circle" (click)="detail()"></span>\n\n    <span class="circle" (click)="exp()"></span>\n\n    <span class="circle" (click)="certifi()"></span>\n\n  </div>\n\n\n\n  <h1 *ngFor="let i of records">{{i.cgname}},start by adding a photo of yourself.</h1>\n\n\n\n  <ion-grid style="padding-top:30px;">\n\n    <ion-row justify-content-center>\n\n      <img class="imgs"  src="assets/imgs/pic.png"/>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n<h1>Looks good!</h1>\n\n<p style="color: gray">When you\'re satisfied with your photo, tap next.</p>\n\n\n\n</ion-content>\n\n<ion-footer style="padding: 5px;">\n\n  <button ion-button style="text-transform: none;"  (click)="next()" block>Next</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizephotoedit\cgpersonalizephotoedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgpersonalizephotoeditPage);
    return CgpersonalizephotoeditPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgpersonalizephotoedit.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgprofilepagePage; });
/* unused harmony export content */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgmissingtimesheet_cgmissingtimesheet__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scheduledappointment_scheduledappointment__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eligibilitydetails_eligibilitydetails__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CgprofilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgprofilepagePage = /** @class */ (function () {
    function CgprofilepagePage(navCtrl, navParams, http, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.CurrentDt = new Date();
        this.contents = [{
                name: "Tom Moscow",
            }];
    }
    CgprofilepagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    CgprofilepagePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var client = this.navParams.get("clientData");
        var employeeId = 5;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/CgCareRecipientsLst/RecipientDetail?";
        var myParams = new URLSearchParams();
        myParams.append("EmployeeId", this.global.employeeId.toString());
        myParams.append("clientId", client.clientId);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.clientData = data;
            if (data != null) {
                _this.clientName = data.clientName;
            }
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgprofilepagePage.prototype.schedule = function (clientData) {
        console.log(clientData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__scheduledappointment_scheduledappointment__["a" /* ScheduledappointmentPage */], { "clientData": clientData });
    };
    CgprofilepagePage.prototype.eligibility = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__eligibilitydetails_eligibilitydetails__["a" /* EligibilitydetailsPage */]);
    };
    CgprofilepagePage.prototype.alertbutton = function (clientData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgmissingtimesheet_cgmissingtimesheet__["a" /* CgmissingtimesheetPage */], { "clientData": clientData });
    };
    CgprofilepagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgprofilepage',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgprofilepage\cgprofilepage.html"*/'<ion-header text-center>\n\n  <ion-navbar color="primary">\n\n    <ion-title style="padding-right: 50px" *ngIf="clientData!=null">{{clientName| uppercase}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n  \n\n<ion-content>\n\n  <div *ngIf="clientData!=null">\n\n  <ion-grid padding  style="background-color: #F5F5F5;" >\n\n    <ion-row text-center style="padding-top:3%">\n\n      <ion-col col-12>\n\n        <ion-avatar  *ngIf="clientData.isMale==true;">\n\n          <img class="img" src="assets/imgs/man.png" >\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n    <ion-avatar *ngIf="!clientData.isMale==true;">\n\n      <img class="img" src="assets/imgs/female.png" >\n\n      <!-- {{i.clientPhoto}} -->\n\n    </ion-avatar>       \n\n      </ion-col>\n\n    </ion-row>\n\n    <h6 style="margin: 10px;margin-bottom: 0"  text-center>{{ clientData.clientName| uppercase }}</h6>\n\n    <!-- <p  text-center *ngIf="clientData.lastAppointment <=CurrentDt"><b>Next-Appointment: {{clientData.lastAppointment | date:\'d/M/yy\'}}</b></p> -->\n\n    <!-- <p  text-center  *ngIf="clientData.lastAppointment > CurrentDt"><b>Last-Appointment: {{clientData.lastAppointment | date:\'d/M/yy\'}}</b></p> -->\n\n    <p style="margin: 5px"  text-center *ngIf="clientData.lastAppointment"><b>Next-Appointment: {{clientData.lastAppointment | date:\'MM/dd/yy\'}}</b></p>\n\n<br>\n\n    <ion-row text-center>\n\n      <ion-col col-2>\n\n        <ion-icon name="pin" style="color: gray;font-size:  20px;margin-left: 5%"></ion-icon>\n\n      </ion-col>\n\n      <ion-col  col-10 text-wrap>\n\n          <ion-label style="text-align: left;font-weight: 500">{{clientData.street}}</ion-label>\n\n        \n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row text-center>\n\n      <ion-col col-2>\n\n        <ion-icon name="call" style="color: gray;font-size:  20px;margin-left: 5%"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-10>\n\n        <ion-label style="text-align: left;font-weight: 500">\n\n            <a href="tel:{{clientData.mobileNo}}">{{clientData.mobileNo}}</a></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row text-center>\n\n      <ion-col col-2 >\n\n        <ion-icon style="color: gray;font-size: 20px;margin-left: 5%" name="mail" icon-start></ion-icon>\n\n      </ion-col>\n\n      <ion-col  col-10 text-wrap>\n\n        <ion-label style="text-align: left;font-weight: 500">\n\n            <a href="mailto:{{clientData.mail}}">{{clientData.mail}}</a></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n     </ion-grid> \n\n     <!-- (click)="eligibility()" -->\n\n  <ion-list style="margin-bottom: 0">\n\n    <ion-item (click)="eligibility()">\n\n      <ion-label >Eligibility</ion-label>\n\n      <ion-label   style="color:gray;font-size: 14px" text-right>8 Hours remaining</ion-label>\n\n    </ion-item>\n\n    \n\n    <ion-item >\n\n      <ion-label  (click)="schedule(clientData)">Scheduled Appointment</ion-label>\n\n    </ion-item>\n\n    <ion-item (click)="alertbutton(clientData)">\n\n      <ion-label style="padding: 15px;margin: 0;padding-left: 2px">Time Entires<ion-badge *ngIf="clientData.missingTimeSheetCount>0" id="alert" class="test" color="danger">!</ion-badge></ion-label>\n\n      <ion-label style="color:gray;" text-right>{{clientData.missingTimeSheetCount}} Timesheets</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n</div>\n\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgprofilepage\cgprofilepage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */]])
    ], CgprofilepagePage);
    return CgprofilepagePage;
}());

var content = /** @class */ (function () {
    function content() {
    }
    return content;
}());

//# sourceMappingURL=cgprofilepage.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduledappointmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ScheduledappointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScheduledappointmentPage = /** @class */ (function () {
    function ScheduledappointmentPage(navCtrl, glob, alertCtrl, http, navParams, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.glob = glob;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.schedulelist = [];
        // this.clientData = data;
        // if (data != null) {
        this.cancelreason = '';
        // this.records2 = [
        //   {
        //     day:"Today",
        //     cname:"Barnes",
        //     starttime:"9:00 AM",
        //     stoptime:"11:00 AM",
        //     image:"assets/imgs/man.png"
        //   },
        //   {
        //     day:"6/23",
        //     cname:"Barnes",
        //     starttime:"11:00 AM",
        //     stoptime:"12:00 AM",
        //     image:"assets/imgs/man.png"
        //   },
        //   {
        //     day:"6/27",
        //     cname:"Barnes",
        //     starttime:"8:00 AM",
        //     stoptime:"11:00 AM",
        //     image:"assets/imgs/man.png"
        //   },
        //   {
        //     day:"5/30",
        //     cname:"Barnes",
        //     starttime:"8:30 AM",
        //     stoptime:"11:30 AM",
        //     image:"assets/imgs/man.png"
        //   },
        //   {
        //     day:"5/15",
        //     cname:"Barnes",
        //     starttime:"7:00 AM",
        //     stoptime:"10:00 AM",
        //     image:"assets/imgs/man.png"
        //   }
        // ];
    }
    ScheduledappointmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScheduledappointmentPage');
    };
    ScheduledappointmentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var client = this.navParams.get("clientData");
        console.log(client);
        var employeeId = 5;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/CgCareRecipientsLst/UpcomingAppt?";
        var myParams = new URLSearchParams();
        myParams.append("clientId", client.clientId);
        myParams.append("EmployeeId", this.global.employeeId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            // console.log('hi');
            _this.schedulelist = data;
            // console.log(  this.schedulelist )
            // if (this.clientData  != null) {
            //   this.clientName = this.clientData.clientName;
            //   console.log( this.clientName )
            // }
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    ScheduledappointmentPage.prototype.cancelapp = function (i) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Cancel Appointment',
            // cssClass: "buttonCss",
            message: "Why do you want to cancel this appointment?",
            inputs: [
                {
                    name: 'reason',
                },
            ],
            buttons: [
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.cancelreason = data.reason;
                        console.log('Ok clicked');
                        console.log(data.reason);
                        _this.cancelappoinment(i);
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ScheduledappointmentPage.prototype.cancelappoinment = function (candet) {
        var _this = this;
        console.log(candet);
        console.log("cancel appoinment");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/CgCareRecipientsLst/upcomingcanceSch?";
        var myParams = new URLSearchParams();
        myParams.append("scheduleId", candet.scheduleId.toString());
        myParams.append("agencyId", candet.agencyId.toString());
        myParams.append("cancelnotes", this.cancelreason);
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.glob.iscgdashreload = true;
            _this, _this.navCtrl.pop();
            loading.dismiss();
        }, function (err) {
            console.log(err);
            alert(err.error);
            loading.dismiss();
        });
    };
    ScheduledappointmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-scheduledappointment',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\scheduledappointment\scheduledappointment.html"*/'<ion-header text-center>\n\n    <ion-navbar color="primary"  >\n\n      \n\n            <ion-title style="padding-right:50px">Schedule</ion-title></ion-navbar></ion-header>\n\n         \n\n  <ion-content style="background-color: rgb(231, 226, 226)">\n\n  \n\n    <h2 text-center>Hello,{{global.name|uppercase}}</h2>\n\n    <p text-center style="margin-top: 0">Upcoming Appointments</p>\n\n  \n\n    \n\n    <ion-card class="card" *ngFor="let i of schedulelist" style="margin: 5px;padding: 10px;padding-bottom: 0;">\n\n      <!-- <ion-item text-wrap *ngFor="let i of displaydata" (click)="viewapp(i)"> -->\n\n      <ion-item  style="padding: 0">\n\n        <ion-avatar item-start *ngIf="i.isMale==true;">\n\n          <img class="img" src="assets/imgs/man.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <ion-avatar item-start *ngIf="!i.isMale==true;">\n\n          <img class="img" src="assets/imgs/female.png">\n\n          <!-- {{i.clientPhoto}} -->\n\n        </ion-avatar>\n\n        <h2 style="font-weight: 500">{{i.clientName| uppercase }}</h2>\n\n        <p *ngIf="!i.isCancelled">{{i.sdt|  date:\'shortDate\'}} </p>\n\n        <p *ngIf="!i.isCancelled">{{i.sdt| date:\'h:mm a\'}} - {{i.edt| date:\'h:mm a\'}}</p>\n\n        <ion-icon style="color:red;font-size: 18px" name="close-circle" *ngIf="i.isCancelled"> Schedule Cancelled</ion-icon>\n\n        <div  *ngIf="!i.isCancelled">\n\n          <div>\n\n            <ion-fab style="padding-left: 70%;" >\n\n              <button ion-fab style="margin:-45px;background-color: rgb(48, 230, 139); border: 2px solid white;"  (click)="cancelapp(i)"> <!--presentAlert(i);-->\n\n                <ion-icon style="font-size:16px;">Cancel</ion-icon>\n\n              </button></ion-fab></div></div>\n\n     \n\n      </ion-item></ion-card>\n\n  <div class="alert" *ngIf="schedulelist.length==0">\n\n    <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n    <strong>No Apppointments are available Today!</strong>\n\n  </div>\n\n    \n\n  </ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\scheduledappointment\scheduledappointment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalPage */]])
    ], ScheduledappointmentPage);
    return ScheduledappointmentPage;
}());

// export class record2 {
//   day:string;
//   cname:string;
//   starttime:string;
//   stoptime:string;
//   image:any;
// } 
//# sourceMappingURL=scheduledappointment.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EligibilitydetailsPage; });
/* unused harmony export details */
/* unused harmony export eligibilitydetails */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EligibilitydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EligibilitydetailsPage = /** @class */ (function () {
    function EligibilitydetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.det = [
            {
                totalhrs: "20 hours",
                remainhrs: "8 Hours",
                Name: "Julie Stevens"
            }
        ];
        this.eligibledet = [{
                date: "7/24",
                name: "Julie",
                sttime: "9:00 am",
                endtime: "11.00 am",
                cmphrs: "2"
            },
            {
                date: "7/20",
                name: "Julie",
                sttime: "10:00 am",
                endtime: "1.00 pm",
                cmphrs: "3"
            },
            {
                date: "7/5",
                name: "Julie",
                sttime: "8:00 am",
                endtime: "10.00 am",
                cmphrs: "2"
            },
            {
                date: "6/23",
                name: "Julie",
                sttime: "7:00 am",
                endtime: "10.00 am",
                cmphrs: "3"
            },
            {
                date: "6/5",
                name: "Julie",
                sttime: "9:00 am",
                endtime: "11.00 am",
                cmphrs: "2"
            },];
    }
    EligibilitydetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EligibilitydetailsPage');
    };
    EligibilitydetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-eligibilitydetails',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\eligibilitydetails\eligibilitydetails.html"*/'<!--\n\n  Generated template for the EligibilitydetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header text-center>\n\n\n\n  <ion-navbar  color=primary>\n\n    <ion-title style="padding-right: 50px" >Eligibility</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content style="  background-color: #f5f5f5;">\n\n   <ion-grid *ngFor="let i of det" style="padding-top: 3%" text-center>\n\n      <ion-row text-center  >\n\n          <ion-col text-center>\n\n             <img  class="img" src="assets/imgs/female.png">\n\n          </ion-col>          \n\n      </ion-row>\n\n      <h6 style="margin: 10px;margin-bottom: 0"  text-center>{{i.Name |uppercase}}</h6>\n\n       <h5 style="font-size: 1.6rem">Totals Hours of Service:{{i.totalhrs}}</h5>\n\n        <p style="font-size: 1.6rem;margin: 5px;">Remaining Hours: {{i.remainhrs}}</p>\n\n\n\n   </ion-grid>\n\n      \n\n            \n\n      \n\n        \n\n\n\n        \n\n         \n\n  <ion-card *ngFor="let i of eligibledet">\n\n    <ion-grid >\n\n      <ion-row>\n\n        <ion-col col-8>\n\n          <h2 style="font-weight: 500">{{i.date}}:{{i.name}}</h2>\n\n          <p>{{i.sttime}}-{{i.endtime}}</p>\n\n        </ion-col>\n\n        <ion-col col-4 >\n\n          <h3  style="font-size:1.8rem ">{{i.cmphrs}} Hours</h3>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n\n\n\n\n\n\n \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\eligibilitydetails\eligibilitydetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EligibilitydetailsPage);
    return EligibilitydetailsPage;
}());

var details = /** @class */ (function () {
    function details() {
    }
    return details;
}());

var eligibilitydetails = /** @class */ (function () {
    function eligibilitydetails() {
    }
    return eligibilitydetails;
}());

//# sourceMappingURL=eligibilitydetails.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgtimesheetcarerecipientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgprofilepage_cgprofilepage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgprofilenew_cgprofilenew__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cgpopover_cgpopover__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cgcompletetimesheet_cgcompletetimesheet__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the CgtimesheetcarerecipientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgtimesheetcarerecipientsPage = /** @class */ (function () {
    function CgtimesheetcarerecipientsPage(navCtrl, navParams, http, loadingCtrl, global, popoverCtrl, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.isstart = false;
        this.isstop = false;
        this.iscompleted = false;
        this.displaydata = [];
        this.Date = new Date();
        this.currentdate = new Date();
        this.currentdateTime$ = __WEBPACK_IMPORTED_MODULE_9_rxjs__["Observable"].interval(1000).map(function (x) { return new Date(); });
    }
    CgtimesheetcarerecipientsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var agencyId = 1;
        var employeeId = 5;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        var url = "api/CgCareRecipientsLst/RecipientList?";
        var myParams = new URLSearchParams();
        myParams.append("employeeId", this.global.employeeId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.displaydata = data.careRecipientList;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgtimesheetcarerecipientsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CgtimesheetcarerecipientsPage");
    };
    CgtimesheetcarerecipientsPage.prototype.differentmin = function (startDt) {
        console.log(startDt);
        var diff = (new Date(startDt).getTime() - new Date().getTime()) / 1000;
        diff /= 60;
        var hour = Math.floor(diff / 60);
        var min = diff % 60;
        return hour + " hrs" + min + " min";
        // this.current=time;
        // var t= this.currentdate.(time);
        // console.log(t);
        // return t;
    };
    CgtimesheetcarerecipientsPage.prototype.ConvertHM = function (min) {
        console.log(min);
        return Math.floor(min / 60) + " hrs " + min % 60 + " min";
    };
    CgtimesheetcarerecipientsPage.prototype.viewapp = function (client) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgprofilepage_cgprofilepage__["a" /* CgprofilepagePage */], { clientData: client });
    };
    CgtimesheetcarerecipientsPage.prototype.test = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */]);
    };
    CgtimesheetcarerecipientsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__cgpopover_cgpopover__["a" /* CgpopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    CgtimesheetcarerecipientsPage.prototype.getlocation = function () {
        var _this = this;
        return this.geolocation
            .getCurrentPosition({ timeout: 5000 })
            .then(function (resp) {
            console.log("latitude and longitude");
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        })
            .catch(function (error) {
            _this.latitude = 0;
            _this.longitude = 0;
            console.log("Error getting location", error);
        });
    };
    CgtimesheetcarerecipientsPage.prototype.start = function (item) {
        var _this = this;
        console.log(item);
        this.getlocation();
        var alert = this.alertCtrl.create({
            title: "Activities to Complete",
            subTitle: item.clientName + " needs " + item.jobName + ".",
            message: "Please make sure that your location is turn on before Starting.",
            //title: 'G',
            // subTitle: 'Mike need ' + item.jobName +'.',
            buttons: [
                {
                    text: "Got it,thanks!",
                    handler: function () {
                        _this.isstart = true;
                        _this.startvisit(item);
                        console.log("Start button");
                    }
                }
            ]
        });
        alert.present();
    };
    CgtimesheetcarerecipientsPage.prototype.stop = function (i) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Do you want to end this visit?",
            message: "Please make sure that your location is turn on before Stopping!",
            buttons: [
                {
                    text: "No",
                    handler: function () {
                        console.log("Disagree clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        _this.isstop = true;
                        _this.iscompleted = true;
                        _this.getlocation();
                        console.log("Agree clicked");
                        _this.stopvisit(i);
                    }
                }
            ]
        });
        confirm.present();
    };
    CgtimesheetcarerecipientsPage.prototype.submit = function () {
        console.log();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__cgcompletetimesheet_cgcompletetimesheet__["a" /* CgcompletetimesheetPage */]);
    };
    CgtimesheetcarerecipientsPage.prototype.startvisit = function (clientdata) {
        var _this = this;
        // var tcId = new tcId();
        // var tcstartdt = new tcstartdt();
        //   clientdata.nonsch.tcId = 40;
        console.log(clientdata);
        if (clientdata.nonsch == null) {
            clientdata.nonsch = { tcstartdt: new Date() };
        }
        else {
            clientdata.nonsch.tcstartdt = new Date();
        }
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.getlocation().then(function (data) {
            // alert("testt "+ JSON.stringify(data));
            console.log(clientdata);
            var url = "api/CgCareRecipientsLst/startTCnosch?";
            var myParams = new URLSearchParams();
            myParams.append("employeeId", _this.global.employeeId.toString());
            myParams.append("clientId", clientdata.clientId);
            myParams.append("agencyId", _this.global.agencyId.toString());
            console.log(_this.global.employeeId.toString());
            console.log(clientdata.clientId);
            console.log(_this.global.agencyId.toString());
            myParams.append("latitude", typeof _this.latitude == "undefined" || _this.latitude == null
                ? null
                : _this.latitude.toString());
            myParams.append("longitude", typeof _this.longitude == "undefined" || _this.longitude == null
                ? null
                : _this.longitude.toString());
            _this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                // var tcId = new tcId();
                clientdata.nonsch.tcstartdt = new Date();
                clientdata.nonsch.tcstopdt = null;
                // var tcstartdt = new tcstartdt();
                clientdata.nonsch.tcId = data;
                clientdata.nonsch.tcstartdt = new Date();
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        });
    };
    CgtimesheetcarerecipientsPage.prototype.stopvisit = function (clientdata) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // clientdata.nonsch.tcstopdt = new Date();
        // clientdata.nonsch.isCompleted =true;
        loading.present();
        this.getlocation().then(function (data) {
            // alert("testt "+ JSON.stringify(data));
            console.log(clientdata);
            var url = "api/CgCareRecipientsLst/stopTcnosch?";
            var myParams = new URLSearchParams();
            myParams.append("timecardId", clientdata.nonsch.tcId);
            myParams.append("agencyId", _this.global.agencyId.toString());
            console.log(clientdata.agencyId);
            myParams.append("latitude", typeof _this.latitude == "undefined" || _this.latitude == null
                ? null
                : _this.latitude.toString());
            myParams.append("longitude", typeof _this.longitude == "undefined" || _this.longitude == null
                ? null
                : _this.longitude.toString());
            _this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                clientdata.nonsch.tcstopdt = new Date();
                clientdata.nonsch.isCompleted = true;
                _this.global.iscgdashreload = true;
                // if (data) {
                //   clientdata.isStarted = true;
                //   clientdata.timeCardId = data;
                //   clientdata.tcsdt = new Date();
                // }
                //  this.schedulelist = data;
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
        });
    };
    CgtimesheetcarerecipientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-cgtimesheetcarerecipients",template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtimesheetcarerecipients\cgtimesheetcarerecipients.html"*/'<ion-header text-center>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid style="padding: 0">\n\n      <ion-row align-items-center>\n\n        <!-- <ion-col col-2 style="padding: 0">\n\n          <button ion-button clear>\n\n            <ion-icon name="person" style="font-size: 30px;color: white" (click)="test()">\n\n            <ion-badge id="notifications-badge" color="danger">3</ion-badge>\n\n            </ion-icon>\n\n          </button> -->\n\n        <!-- </ion-col> -->\n\n        <ion-col col-10>\n\n          <ion-title style="padding-left:20%">Care Recipients</ion-title>\n\n        </ion-col>\n\n        <ion-col col-2>\n\n          <button ion-button clear style="float: right" (click)="presentPopover($event)">\n\n            <ion-icon name="menu" style="color: white;font-size: 25px;padding-right: 8px"></ion-icon>\n\n          </button>\n\n          <!-- <ion-icon name="menu" style="font-size: 30px;color: white;float: right;" (click)="carehistory()"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content style="background-color: #EEEEEE">\n\n  <br>\n\n  <ion-card class="card" *ngFor="let i of displaydata" style="margin: 5px;padding: 10px;padding-bottom: 0;">\n\n    <!-- <ion-item text-wrap *ngFor="let i of displaydata" (click)="viewapp(i)"> -->\n\n    <ion-item (click)="viewapp(i)" style="padding: 0">\n\n      <ion-avatar item-start *ngIf="i.isMale==true;">\n\n        <img class="img" src="assets/imgs/man.png">\n\n        <!-- {{i.clientPhoto}} -->\n\n      </ion-avatar>\n\n      <ion-avatar item-start *ngIf="!i.isMale==true;">\n\n        <img class="img" src="assets/imgs/female.png">\n\n        <!-- {{i.clientPhoto}} -->\n\n      </ion-avatar>\n\n      <h2 style="font-weight: 500">{{i.clientName| uppercase }}</h2>\n\n      <p> Next appointment {{i.nextAppointDt | date:\'MM/d/yy\' }}</p>\n\n    </ion-item>\n\n    <div>\n\n      <!-- <div *ngIf="i.nonsch != null "> -->\n\n          <!-- <div *ngIf="i.nonsch == \'demotesr\' "> -->\n\n              <div *ngIf="i.nonsch != null "> \n\n        <!-- <ion-fab *ngIf="i.nonsch.tcstartdt != null && i.nonsch.tcstopdt != null && !i.nonsch.isCompleted" style="padding-left: 80%;"> -->\n\n            <ion-fab *ngIf="i.nonsch.tcstartdt != null && i.nonsch.tcstopdt != null" style="padding-left: 80%;">\n\n          <button ion-fab style="margin:-30px;background-color: rgb(48, 230, 139); border: 2px solid white;" (click)="start(i);">\n\n            <ion-icon style="font-size:12px;">Start Visit</ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n        <ion-fab *ngIf="i.nonsch.tcstartdt != null && i.nonsch.tcstopdt == null" style="padding-left:80%">\n\n          <button ion-fab style="margin:-30px;background-color:red; border: 2px solid white" (click)="stop(i)">\n\n            <ion-icon style="font-size:16px;">Stop</ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n        <!-- <ion-fab *ngIf="i.nonsch.isCompleted" style="padding-left:80%">\n\n          <button ion-fab style="margin:-30px;background-color:#FBC02D; border: 2px solid white" (click)="submit(i)">\n\n            <ion-icon style="font-size:16px;">Submit</ion-icon>\n\n          </button>\n\n        </ion-fab> -->\n\n      </div>\n\n      <!-- <div *ngIf="i.nonsch == \'demotesr\'"> -->\n\n          <div *ngIf="i.nonsch == null">\n\n        <ion-fab *ngIf="i.nonsch == null" style="padding-left: 80%;">\n\n          <button ion-fab style="margin:-30px;background-color: rgb(48, 230, 139); border: 2px solid white;" (click)="start(i);">\n\n            <ion-icon style="font-size:12px;">Start Visit</ion-icon>\n\n          </button>\n\n        </ion-fab>\n\n      </div>\n\n    </div>\n\n    <div>\n\n      <p style="float: left;margin-left:70px;color: grey;margin-top: 5px;margin-bottom: 28px;" *ngIf="isstart==false"> </p>\n\n      <p style="float: left;margin-left:70px;color: grey;margin-top: 5px;" *ngIf="isstart==true&& iscompleted==false"> Started at {{Date|date:\'shortTime\'}}</p>\n\n      <!--{{(currentdateTime$ | async) - addDay(i.tcsdt) | date:\'hh:mm\' }}-->\n\n      <ion-icon style="margin-left: 10px;margin: 8px;color:grey" name="checkmark" *ngIf="iscompleted==true"> Duration 0 min</ion-icon>\n\n    </div>\n\n\n\n  </ion-card>\n\n  <!-- <ion-item text-wrap  (click)="viewapp()">\n\n    <ion-avatar item-start >\n\n      <img class="img" src="assets/imgs/profile5.jpg">\n\n      <ion-badge item-start id="error" color="danger">!</ion-badge>\n\n    </ion-avatar>\n\n    <h2>Tom Mascow</h2>\n\n    <p>Next Appointment 04/26/18</p> \n\n  </ion-item> -->\n\n  <div class="alert" *ngIf="displaydata.length==0">\n\n    <span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span>\n\n    <strong>No Care Recipients are available!</strong>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtimesheetcarerecipients\cgtimesheetcarerecipients.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
    ], CgtimesheetcarerecipientsPage);
    return CgtimesheetcarerecipientsPage;
}());

//# sourceMappingURL=cgtimesheetcarerecipients.js.map

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 210;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addentries/addentries.module": [
		862,
		43
	],
	"../pages/cgblockcalendar/cgblockcalendar.module": [
		863,
		42
	],
	"../pages/cgblockcalendarrepeat/cgblockcalendarrepeat.module": [
		864,
		41
	],
	"../pages/cgcompletetimesheet/cgcompletetimesheet.module": [
		865,
		40
	],
	"../pages/cgdashboard/cgdashboard.module": [
		866,
		39
	],
	"../pages/cglogin/cglogin.module": [
		867,
		38
	],
	"../pages/cgmissingtimesheet/cgmissingtimesheet.module": [
		868,
		37
	],
	"../pages/cgmissingtimesheetmonth/cgmissingtimesheetmonth.module": [
		869,
		36
	],
	"../pages/cgmonthtimeentries/cgmonthtimeentries.module": [
		870,
		35
	],
	"../pages/cgmulsignature/cgmulsignature.module": [
		871,
		34
	],
	"../pages/cgmultipletimesheet/cgmultipletimesheet.module": [
		872,
		33
	],
	"../pages/cgnonschreview/cgnonschreview.module": [
		873,
		32
	],
	"../pages/cgnonschsignature/cgnonschsignature.module": [
		874,
		31
	],
	"../pages/cgpersonalize/cgpersonalize.module": [
		875,
		30
	],
	"../pages/cgpersonalizecertificate/cgpersonalizecertificate.module": [
		876,
		29
	],
	"../pages/cgpersonalizedetails/cgpersonalizedetails.module": [
		877,
		28
	],
	"../pages/cgpersonalizeexperience/cgpersonalizeexperience.module": [
		878,
		27
	],
	"../pages/cgpersonalizephotoedit/cgpersonalizephotoedit.module": [
		879,
		26
	],
	"../pages/cgpersonalizephotoupload/cgpersonalizephotoupload.module": [
		880,
		25
	],
	"../pages/cgpopover/cgpopover.module": [
		881,
		24
	],
	"../pages/cgprofilenew/cgprofilenew.module": [
		882,
		23
	],
	"../pages/cgprofilepage/cgprofilepage.module": [
		883,
		22
	],
	"../pages/cgreview/cgreview.module": [
		884,
		21
	],
	"../pages/cgtabpages/cgtabpages.module": [
		885,
		20
	],
	"../pages/cgtimesheetcalendar/cgtimesheetcalendar.module": [
		886,
		19
	],
	"../pages/cgtimesheetcarerecipients/cgtimesheetcarerecipients.module": [
		887,
		18
	],
	"../pages/cgtimesheetprofile/cgtimesheetprofile.module": [
		888,
		17
	],
	"../pages/cgviewappointment/cgviewappointment.module": [
		889,
		16
	],
	"../pages/eligibilitydetails/eligibilitydetails.module": [
		890,
		15
	],
	"../pages/forgotpassword/forgotpassword.module": [
		891,
		14
	],
	"../pages/global/global.module": [
		892,
		13
	],
	"../pages/popover/popover.module": [
		893,
		12
	],
	"../pages/reapprovetimesheet/reapprovetimesheet.module": [
		894,
		11
	],
	"../pages/recarehistory/recarehistory.module": [
		895,
		10
	],
	"../pages/recarehistorymonth/recarehistorymonth.module": [
		896,
		9
	],
	"../pages/recarehistorymonthdetails/recarehistorymonthdetails.module": [
		897,
		8
	],
	"../pages/redashboard/redashboard.module": [
		898,
		7
	],
	"../pages/remultipletimesheet/remultipletimesheet.module": [
		899,
		6
	],
	"../pages/reprofile/reprofile.module": [
		900,
		5
	],
	"../pages/resignatureverification/resignatureverification.module": [
		901,
		4
	],
	"../pages/reviewappointment/reviewappointment.module": [
		902,
		3
	],
	"../pages/scheduledappointment/scheduledappointment.module": [
		903,
		2
	],
	"../pages/signatureverification/signatureverification.module": [
		904,
		1
	],
	"../pages/userdetails/userdetails.module": [
		905,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 254;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgprofilenewPage; });
/* unused harmony export pro */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











// import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the CgprofilenewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgprofilenewPage = /** @class */ (function () {
    function CgprofilenewPage(navCtrl, navParams, loadingCtrl, http, global, formBuilder, alertCtrl, geolocation, camera, _DomSanitizer, nativeGeocoder, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.global = global;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.camera = camera;
        this._DomSanitizer = _DomSanitizer;
        this.nativeGeocoder = nativeGeocoder;
        this.storage = storage;
        this.editt = false;
        this.cliprodet = [];
        this.completedtc = [];
        this.edittedProfile = [];
        this.profile = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            middleName: [''],
            lastName: [''],
            street1: [''],
            street2: [''],
            city: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            zipcode: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            mobileNo: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            emailId: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            latitude: [''],
            longitude: ['']
        });
        this.proinfo = [{
                img: "assets/imgs/profile5.jpg",
                name: "Tom Moscow",
                care: "Bathing,Grooming,Eating",
            }];
        this.base64Image = this.global.galleryPhoto;
    }
    CgprofilenewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ReprofilePage');
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/Profilesetup/empprofile?";
        var myParams = new URLSearchParams();
        myParams.append("employeeId", this.global.employeeId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.cliprodet = data;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgprofilenewPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    CgprofilenewPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgprofilenewPage.prototype.onSubmit123 = function (datavalue) {
        var _this = this;
        //console.log(this.profile.value)
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // var requestData = [];
        loading.present();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        var url = 'api/Profilesetup/empprofileedit';
        // var profile = {
        //   'employeeId': this.global.employeeId,
        // }
        // requestData.push(profile);
        this.http.post(url, httpOptions).subscribe(function (data) {
            console.log(data);
            // this.cliprodet = data;
            _this.editt = true;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgprofilenewPage.prototype.onSubmit = function (datavalue) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.completedtc = JSON.stringify(datavalue);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        // let url = "api/Cgtimesheets/rwandcomplete";
        var url = 'api/Profilesetup/empprofileeditdetail';
        this.http.post(url, this.completedtc, httpOptions).subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "Changes Updated",
                message: "Your changes has been updated successfully.",
                // cssClass: "buttonCss5",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log("ok clicked");
                            loading.dismiss();
                            _this.editt = false;
                        }
                    }
                ]
            });
            alert.present();
            // alert("success");
        }, function (err) {
            //  alert("error");
            console.log(err);
            loading.dismiss();
        });
    };
    // onSubmit = function (user) {
    //   console.log(user);
    //   var body = "firstname=" + user.firstname;
    //   this.http.post("api/Profilesetup/empprofile?", body).subscribe((data) => {});
    // }
    CgprofilenewPage.prototype.getlocation = function () {
        var _this = this;
        return this.geolocation
            .getCurrentPosition({ timeout: 5000 })
            .then(function (resp) {
            console.log("latitude and longitude");
            console.log(resp.coords.latitude);
            console.log(resp.coords.longitude);
            _this.cliprodet.latitude = resp.coords.latitude;
            _this.cliprodet.longitude = resp.coords.longitude;
            var options = {
                useLocale: true,
                maxResults: 5
            };
        }).catch(function (error) {
            _this.latitude = null;
            _this.longitude = null;
            console.log("Error getting location", error);
        });
        //   this.nativeGeocoder.reverseGeocode(this.cliprodet.latitude, this.cliprodet.longitude, options)
        //     .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
        //     .catch((error: any) => console.log(error));
        // })
        // .catch(error => {
        //   this.latitude = 0;
        //   this.longitude = 0;
        //   console.log("Error getting location", error);
        // });
    };
    CgprofilenewPage.prototype.edit = function () {
        this.editt = true;
    };
    CgprofilenewPage.prototype.location = function () {
        var _this = this;
        this.getlocation().then(function (data) {
            console.log(data);
            // this.cliprodet.latitude= 
            var loading = _this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading.present();
            var url = "api/Profilesetup/empupdateloc?";
            var myParams = new URLSearchParams();
            myParams.append("employeeId", _this.global.employeeId.toString());
            myParams.append("latitude", _this.cliprodet.latitude);
            myParams.append("longitudes", _this.cliprodet.longitude);
            _this.http.get(url + myParams).subscribe(function (data) {
                console.log(data);
                //this.cliprodet = data;
                loading.dismiss();
            }, function (err) {
                console.log(err);
                loading.dismiss();
            });
            console.log(_this.latitude);
            console.log(_this.longitude);
        });
    };
    CgprofilenewPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.global.galleryPhoto = _this.base64Image;
            _this.UpdateImage(_this.base64Image);
            // this.editedProfile(this.global.galleryPhoto);
        }, function (err) {
            console.log(err);
        });
    };
    CgprofilenewPage.prototype.editedProfile = function (photoval) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.edittedProfile = JSON.stringify(photoval);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        // let url = "api/OutcomeEntries/addoutcomedetail";
        // let url = "api/Cgtimesheets/rwandcomplete";
        var url = 'api/Profilesetup/empprofilpic';
        this.http.post(url, this.edittedProfile, httpOptions).subscribe(function (data) {
            console.log(data);
            var alert = _this.alertCtrl.create({
                title: "Changes Updated",
                message: "Your changes has been updated successfully.",
                // cssClass: "buttonCss5",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log("ok clicked");
                            loading.dismiss();
                            // this.editt=false;
                        }
                    }
                ]
            });
            alert.present();
            // alert("success");
        }, function (err) {
            //  alert("error");
            console.log(err);
            loading.dismiss();
        });
    };
    CgprofilenewPage.prototype.getphoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.global.galleryPhoto = _this.base64Image;
            _this.UpdateImageStorage(_this.base64Image);
            _this.UpdateImage(_this.base64Image);
            //  this.editedProfile(this.global.galleryPhoto);
        }, function (err) {
            console.log(err);
        });
    };
    CgprofilenewPage.prototype.openCamera = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Choose Image Source',
            buttons: [
                {
                    text: 'Camera',
                    handler: function () {
                        _this.takePhoto();
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Open Gallery',
                    handler: function () {
                        _this.getphoto();
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    CgprofilenewPage.prototype.UpdateImageStorage = function (ImageData) {
        var _this = this;
        this.storage.get("loginAuth").then(function (val) {
            val.userdetail.galleryPhoto = ImageData;
            _this.storage.set("loginAuth", val);
        });
    };
    CgprofilenewPage.prototype.UpdateImage = function (ImageStr) {
        var _this = this;
        console.log(ImageStr);
        var loading = this.loadingCtrl.create({
            content: 'Image updating please wait...'
        });
        var requestData = [];
        loading.present();
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        var url = 'api/CgupCmgApt/editEmployeeImage';
        var profile = JSON.stringify({
            'employeeId': this.global.employeeId,
            'ImageStr': ImageStr.toString(),
        });
        requestData.push(profile);
        console.log(profile);
        // let myParams = new URLSearchParams();
        // myParams.append("employeeId", this.global.employeeId.toString());
        // myParams.append("ImageStr", Imagestr.toString());
        this.http.post(url, profile, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.galleryPhoto = ImageStr;
            console.log(ImageStr);
            _this.UpdateImageStorage(ImageStr);
            // this.storage.set("loginAuth",this.global);
            loading.dismiss();
        }, function (err) {
            _this.error = err;
            console.log(err);
            loading.dismiss();
        });
    };
    CgprofilenewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgprofilenew',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgprofilenew\cgprofilenew.html"*/'<!--\n\n  Generated template for the ReprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-toolbar color="primary">\n\n\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col>\n\n            <ion-icon name="arrow-back" style="color: white;font-size: 20px;float: left;" (click)="back()" large></ion-icon>\n\n        </ion-col>\n\n        <ion-col style="position: unset;">\n\n          <ion-title text-center>Profile</ion-title>\n\n        </ion-col>\n\n        <ion-col>\n\n          \n\n          <ion-icon name="create" style="color: white;font-size: 20px;float: right;" (click)="edit()"></ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div *ngIf="editt==false">\n\n    <!-- <ion-grid>\n\n      <ion-row text-center style="padding-top:3%">\n\n        <ion-col text-center>\n\n          <img class="img" src="assets/imgs/man.png" *ngIf="cliprodet.isMale==true;">\n\n          <img class="img" src="assets/imgs/female.png" *ngIf="!cliprodet.isMale==true;"> -->\n\n          <!-- <img class="img" src={{cliprodet.clientPhoto}}> -->\n\n        <!-- </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n    <ion-grid text-center>\n\n      <ion-row align-items-center>\n\n        <ion-col text-center style="margin-left: 40px">\n\n          <img class="img" src="assets/imgs/man.png" *ngIf="!global.galleryPhoto && cliprodet.isMale==true;">\n\n          <img class="img" src="assets/imgs/female.png" *ngIf="!global.galleryPhoto && !cliprodet.isMale==true;">\n\n          <img class="img" [src]="global.galleryPhoto" *ngIf="global.galleryPhoto" />\n\n          <ion-badge id="badge_camera" (click)="openCamera(global.galleryPhoto)">\n\n            <ion-icon name="camera" style="font-size: 16px">\n\n            </ion-icon>\n\n          </ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n\n\n    <h5 style="margin: 10px" text-center>{{cliprodet.firstName|uppercase}} {{cliprodet.middleName|uppercase}} {{cliprodet.lastName|uppercase}}</h5>\n\n    <!-- <p text-center>\n\n    <b>Caring Needed: {{i.care}}</b>\n\n  </p> -->\n\n\n\n    <ion-row text-center align-items-center>\n\n      <ion-col col-2>\n\n        <ion-icon name="pin" style="color: gray;font-size:  20px;margin-left: 5%;margin-top:-5px;"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-10 text-wrap>\n\n        <ion-label style="text-align: left;font-weight: 500">{{cliprodet.street1}} {{cliprodet.street2}} , {{cliprodet.city}}, {{cliprodet.state}}, {{cliprodet.zipcode}}</ion-label>\n\n      </ion-col>\n\n      \n\n    </ion-row>\n\n    <div *ngIf="cliprodet.empmapimage!=null">\n\n      <!-- <img class="img" [src]="reviewdetail.outTimeMap"> -->\n\n      <img [src]="_DomSanitizer.bypassSecurityTrustUrl(cliprodet.empmapimage)" style=" display: block;\n\n                  width: 100%;\n\n                  height: 120px;">\n\n    </div>\n\n\n\n\n\n    <ion-row text-center align-items-center>\n\n      <ion-col col-2>\n\n        <ion-icon name="ios-call" style="color: gray;font-size:  20px;margin-left: 5%;margin-top: 5px;"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-10 text-wrap>\n\n        <ion-label style="text-align: left;font-weight: 500">\n\n            <a href="tel:{{cliprodet.mobileNo}}">{{cliprodet.mobileNo}}</a></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n\n\n    <ion-row text-center align-items-center>\n\n      <ion-col col-2>\n\n        <ion-icon name="mail" style="color: gray;font-size:  20px;margin-left: 5%;margin-top: 5px;"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-10 text-wrap>\n\n        <ion-label style="text-align: left;font-weight: 500">\n\n            <a href="mailto:{{cliprodet.emailId}}">{{cliprodet.emailId}}</a></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <!-- <ion-item>\n\n      <ion-icon name="football" item-start large></ion-icon>\n\n      <p style="text-align: justify;">{{cliprodet.street1}} {{cliprodet.street2}} , {{cliprodet.city}}, {{cliprodet.state}}, {{cliprodet.zipcode}}</p>\n\n    </ion-item>  -->\n\n\n\n  </div>\n\n  <div *ngIf="editt==true">\n\n\n\n    <!-- <ion-grid text-center>\n\n      <ion-row align-items-center>\n\n        <ion-col text-center style="margin-left: 40px">\n\n          <img class="img" src="assets/imgs/man.png" *ngIf="!global.galleryPhoto">\n\n          <img class="img" [src]="global.galleryPhoto" *ngIf="global.galleryPhoto" />\n\n          <ion-badge id="badge_camera" (click)="openCamera()">\n\n            <ion-icon name="camera" style="font-size: 16px">\n\n            </ion-icon>\n\n          </ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n    <!-- <ion-grid text-center>\n\n      <ion-row align-items-center>\n\n        <ion-col text-center style="margin-left: 40px">\n\n          <img class="img" src="assets/imgs/man.png" *ngIf="!global.galleryPhoto && cliprodet.isMale==true;">\n\n          <img class="img" src="assets/imgs/female.png" *ngIf="!global.galleryPhoto && !cliprodet.isMale==true;">\n\n          <img class="img" [src]="global.galleryPhoto" *ngIf="global.galleryPhoto" />\n\n          <ion-badge id="badge_camera" (click)="openCamera()">\n\n            <ion-icon name="camera" style="font-size: 16px">\n\n            </ion-icon>\n\n          </ion-badge>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid> -->\n\n\n\n\n\n   <!-- <button ion-button (click)="UpdateImageStorage(\'TestString\')">Save</button> -->\n\n    <form [formGroup]="profile">\n\n        <!-- (ngSubmit)="onSubmit(cliprodet)" -->\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>First Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.firstName" formControlName="firstName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Middle Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.middleName" formControlName="middleName"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Last Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.lastName" formControlName="lastName"></ion-input>\n\n      </ion-item>\n\n      <br/>\n\n      <br/>\n\n      <div text-center>\n\n        <button ion-button (click)="location()">Get Location</button>\n\n      </div>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Latitude</ion-label>\n\n        <ion-input type="number" [(ngModel)]="cliprodet.latitude" formControlName="latitude"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Longitude</ion-label>\n\n        <ion-input type="number" [(ngModel)]="cliprodet.longitude" formControlName="longitude"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Street 1</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.street1" formControlName="street1"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Street 2</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.street2" formControlName="street2"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>City</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.city" formControlName="city"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>State</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.state" formControlName="state"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Zipcode</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.zipcode" formControlName="zipcode"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Contact No.</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.mobileNo" formControlName="mobileNo"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Mail Id</ion-label>\n\n        <ion-input type="text" [(ngModel)]="cliprodet.emailId" formControlName="emailId"></ion-input>\n\n      </ion-item>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button style="background-color: red" block (click)="cancel()">Cancel</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button type="submit" block [disabled]="!profile.valid" (click)="onSubmit(cliprodet)">Save</button>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgprofilenew\cgprofilenew.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], CgprofilenewPage);
    return CgprofilenewPage;
}());

var pro = /** @class */ (function () {
    function pro() {
    }
    return pro;
}());

//# sourceMappingURL=cgprofilenew.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CgpopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgpopoverPage = /** @class */ (function () {
    function CgpopoverPage(navCtrl, navParams, alertCtrl, storage, loadingCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
    }
    CgpopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpopoverPage');
    };
    CgpopoverPage.prototype.logout = function () {
        var loading = this.loadingCtrl.create({
            content: 'Logging out...'
        });
        console.log();
        this.storage.remove("loginAuth");
        var alert = this.alertCtrl.create({
            title: 'Do you want to Logout?',
            // message: 'Do you want to Logout?',
            // cssClass: "buttonCssa",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        loading.present();
                        window.location.reload();
                        console.log('Logout');
                    }
                }
            ]
        });
        this.viewCtrl.dismiss();
        loading.dismiss();
        (function (err) {
            console.log(err);
            loading.dismiss();
        });
        alert.present();
    };
    CgpopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpopover',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpopover\cgpopover.html"*/'<!--\n\n  Generated template for the CgpopoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>cgpopover</ion-title>\n\n  </ion-navbar> -->\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list style="margin: -23px;">\n\n    <ion-item>\n\n        <ion-icon name="md-settings" color=primary style=" font-size: 20px;">&nbsp;&nbsp;Settings</ion-icon>\n\n    </ion-item>\n\n    <ion-item (click)="logout()">\n\n        <ion-icon name="md-log-out" color=primary style=" font-size:20px;" >&nbsp;&nbsp;Logout</ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpopover\cgpopover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], CgpopoverPage);
    return CgpopoverPage;
}());

//# sourceMappingURL=cgpopover.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpersonalizephotouploadPage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgpersonalizephotoedit_cgpersonalizephotoedit__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgpersonalizedetails_cgpersonalizedetails__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgpersonalizeexperience_cgpersonalizeexperience__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgpersonalizecertificate_cgpersonalizecertificate__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CgpersonalizephotouploadPage = /** @class */ (function () {
    function CgpersonalizephotouploadPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = [
            {
                cgname: "Jessica"
            }
        ];
    }
    CgpersonalizephotouploadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpersonalizephotouploadPage');
    };
    CgpersonalizephotouploadPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizephotoedit_cgpersonalizephotoedit__["a" /* CgpersonalizephotoeditPage */]);
    };
    CgpersonalizephotouploadPage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */]);
    };
    CgpersonalizephotouploadPage.prototype.exp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */]);
    };
    CgpersonalizephotouploadPage.prototype.certifi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */]);
    };
    CgpersonalizephotouploadPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgpersonalizephotouploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpersonalizephotoupload',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizephotoupload\cgpersonalizephotoupload.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col col-2 style="padding: 0">         \n\n          <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button> \n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-right:22%">Personalize Profile</ion-title>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div style="padding:20px">\n\n    <span class="dot"></span>\n\n    <span class="circle" (click)="detail()"></span>\n\n    <span class="circle" (click)="exp()"></span>\n\n    <span class="circle" (click)="certifi()"></span>\n\n  </div>\n\n\n\n  <h1 *ngFor="let i of records">{{i.cgname}},start by adding a photo of yourself.</h1>\n\n  \n\n  <ion-grid style="padding-top:30px;">\n\n    <ion-row justify-content-center>\n\n      <img class="imgs"  src="assets/imgs/pic1.png">\n\n    </ion-row>\n\n  </ion-grid>\n\n   \n\n</ion-content>\n\n\n\n<ion-footer style="padding: 5px;">\n\n  <button ion-button style="text-transform: none;" (click)="next()" block>Next</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizephotoupload\cgpersonalizephotoupload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgpersonalizephotouploadPage);
    return CgpersonalizephotouploadPage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgpersonalizephotoupload.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgmonthtimeentriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CgmonthtimeentriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgmonthtimeentriesPage = /** @class */ (function () {
    function CgmonthtimeentriesPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
        this.isEdit = false;
    }
    CgmonthtimeentriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgmonthtimeentriesPage');
    };
    CgmonthtimeentriesPage.prototype.ionViewWillEnter = function () {
        this.mismontcdetails = this.navParams.get("monthtimeentry");
        console.log("review valuee");
        console.log(this.mismontcdetails);
    };
    CgmonthtimeentriesPage.prototype.edit = function (data) {
        console.log(data);
        this.isEdit = true;
    };
    CgmonthtimeentriesPage.prototype.save1 = function (nonschdetails) {
        // console.log(nonschdetails);
        this.isEdit = false;
    };
    CgmonthtimeentriesPage.prototype.canceleditTC = function () {
        this.isEdit = false;
    };
    CgmonthtimeentriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgmonthtimeentries',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmonthtimeentries\cgmonthtimeentries.html"*/' <ion-header text-center>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title style="padding-right: 50px">Review </ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n<!--   \n\n  <ion-content style="background-color: white">\n\n    <h1>{{mismontcdetails.scheduleDT}}</h1></ion-content> -->\n\n    <!--<div *ngIf="nonschdetails!=null">\n\n      <div  *ngIf="isEdit==false">\n\n              <ion-item text-center no-lines>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col offset-6>\n\n              <div class="circle" style="margin-left: -28px">\n\n                <div class="letter">{{nonschdetails.agencyname}}</div>\n\n              </div>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <h1>{{nonschdetails.agencyname}}</h1>\n\n        <p>{{nonschdetails.agencyno}}</p>\n\n      </ion-item>\n\n      <ion-item no-lines style="background-color: #F5F5F5">\n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start *ngIf="nonschdetails.clientPhoto!=null;">\n\n            <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(nonschdetails.clientPhoto)" >\n\n      \n\n          </ion-avatar>\n\n          <ion-avatar item-start *ngIf="nonschdetails.clientPhoto==null&&nonschdetails.isMale==true;">\n\n            <img class="img" src="assets/imgs/male.png">\n\n       \n\n          </ion-avatar>\n\n          <ion-avatar item-start *ngIf="nonschdetails.clientPhoto==null&&nonschdetails.isMale!=true;">\n\n            <img class="img" src="assets/imgs/female.png">\n\n         \n\n          </ion-avatar>\n\n          <p>RECIPIENT OF CARE</p>\n\n          <h2>{{nonschdetails.clientName|uppercase}}</h2>\n\n        </ion-item>\n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start>\n\n            <img class="img" src="assets/imgs/male.png">\n\n          </ion-avatar>\n\n          <p>PROVIDED BY</p>\n\n          <h2>{{global.name|uppercase}}</h2>\n\n        </ion-item>\n\n  \n\n      </ion-item>\n\n      <ion-row align-items-center style="background-color: white;">\n\n        <ion-col style="padding: 0">\n\n          <p style="  color:gray;  margin-bottom: -10px;margin-left: 8px;font-size: 15px">DATE OF SERVICE</p>\n\n          <h4 style="margin-left: 5px;font-size: 18px">{{nonschdetails.date | date :\'MMMM d, y \'}}</h4>\n\n        </ion-col>\n\n        <ion-col style="padding: 0">\n\n               \n\n                <ion-icon name="create" style="float: right;margin-right: 10px;"  color="primary" (click)="edit(nonschdetails)" >&nbsp;&nbsp;Edit</ion-icon>\n\n        </ion-col>\n\n      </ion-row>\n\n     <hr style="background-color: gainsboro;">\n\n    <ion-grid style="background-color: white;">\n\n        <ion-row>\n\n            <ion-col col-4>\n\n                <p style="color:gray; margin-bottom: -5px;font-size: 18px">Time in</p>\n\n                <h4 style="font-size: 18px"> {{nonschdetails.tcstdt| date :\' h:mm a \'}}</h4>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                    <p style="color:gray ;margin-bottom: -5px;font-size: 18px">Time out </p>\n\n                    <h4 style="font-size: 18px">{{nonschdetails.tceddt| date :\' h:mm a \'}}</h4>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                    <p style="color:gray; margin-bottom: -5px;font-size: 18px">Total Time</p>\n\n                    <h4 style="font-size: 18px">{{nonschdetails.duration}} Minutes</h4>\n\n                </ion-col>\n\n        </ion-row>\n\n          \n\n      </ion-grid>\n\n      \n\n      <hr style="background-color: gainsboro;">\n\n\n\n      <h5 style="padding:10px;padding-top: 15px;margin: 0;color: gray" >ACTIVITIES</h5>\n\n     \n\n\n\n      <ion-grid style="padding: 0">\n\n             \n\n      <ion-list no-lines style="margin: 0" *ngFor="let jobdet of nonschdetails.jobTaskdet">\n\n              <ion-item>\n\n                 <ion-label>{{jobdet.taskName}}</ion-label>\n\n                  <ion-checkbox [(ngModel)]="jobdet.isCompleted" id="myCheckbox" click="nction()"></ion-checkbox>\n\n          </ion-item></ion-list>\n\n     </ion-grid>\n\n             <ion-row style="padding-bottom: 10px;padding-top: 10px" >\n\n\n\n              <div class="half">\n\n\n\n                      <div class="tab" *ngIf="nonschdetails!=null">\n\n                          <input id="tab1" type="checkbox" name="tabs">\n\n                        <label for="tab1">Service Detail&nbsp;&nbsp;- &nbsp;&nbsp;{{nonschdetails.date | date :\'MMMM d\'}}</label>\n\n                        <div class="tab-content">\n\n                          <ion-grid>\n\n                              <ion-row>\n\n                                  <ion-col>\n\n                                      <ion-label style="color:black">Service type </ion-label>\n\n                                  </ion-col>\n\n                                  <ion-col  *ngIf="nonschdetails.jobTaskdet != null">\n\n                                      <ion-label style="color:grey;float: right;margin-right: 2%">{{nonschdetails.jobTaskdet[0].jobName}}</ion-label>\n\n                                  </ion-col> \n\n                              </ion-row>\n\n                              <ion-row>\n\n                                  <ion-col>\n\n                                      <ion-label style="color:black">Ratio(Provider:Recipient) </ion-label>\n\n                                  </ion-col>\n\n                                  <ion-col>\n\n                                      <ion-label style="color:grey;float:right;margin-right:2%">1:{{nonschdetails.rserviceratio}}</ion-label>\n\n                                  </ion-col>\n\n                              </ion-row>\n\n                          </ion-grid>\n\n                  \n\n                          <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >NOTES</h5>\n\n                      <ion-row style=" background-color:#E3F2FD;color:black">\n\n                              <ion-textarea [(ngModel)]="nonschdetails.notes" class="note" placeholder="Enter notes"></ion-textarea>\n\n                      </ion-row>\n\n                      <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0;color:black" >SERVICE LOCATION</h5>\n\n\n\n                      <ion-grid text-wrap>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon name="home" style="font-size: 20px;color:black">&nbsp;Address</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black"> {{nonschdetails.street1}}, {{nonschdetails.street2}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon name="podium" style="font-size: 20px;color:black">&nbsp;City</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black"> {{nonschdetails.city}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon ios="ios-globe-outline" md="md-globe"  style="font-size: 20px;color:black">&nbsp;State</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black">{{nonschdetails.state}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                          <ion-row>\n\n                              <ion-col col-4>\n\n                                  <ion-icon name="pin" style="font-size: 20px;color:black">&nbsp;Zip</ion-icon>\n\n                              </ion-col>\n\n                              <ion-col text-right col-8>\n\n                                  <ion-label style="float: right;margin-right: 2%;color:black">{{nonschdetails.zipCode}} </ion-label>\n\n                              </ion-col>\n\n                          </ion-row>\n\n                      </ion-grid>\n\n\n\n                        </div>\n\n                      </div>\n\n                      \n\n                    </div>\n\n\n\n      </ion-row>\n\n   \n\n      </div>\n\n   \n\n  </div>\n\n\n\n\n\n<div *ngIf="isEdit==true" style="background-color: #F5F5F5">\n\n      <div>\n\n              <br>\n\n              <ion-card style="padding: 5px">\n\n                <ion-list>\n\n                   \n\n                \n\n                   <ion-item>\n\n                    <ion-label style="font-size: 16px" stacked>Time In</ion-label>\n\n                    <ion-datetime displayFormat="hh:mm A" [(ngModel)]="nonschdetails.tcstdt">{{nonschdetails.tcstdt}}</ion-datetime>\n\n                  </ion-item>\n\n            \n\n                  <ion-item>\n\n                    <ion-label style="font-size: 16px" stacked>Time Out</ion-label>\n\n                    <ion-datetime displayFormat="hh:mm A" [(ngModel)]="nonschdetails.tceddt">{{nonschdetails.tceddt}}</ion-datetime>\n\n            \n\n                  </ion-item>\n\n            \n\n                </ion-list>\n\n                \n\n                <div text-center>\n\n                  <button ion-button id="btn" (click)="save1(nonschdetails)" style="background-color:rgb(0, 153, 255) ">Save</button>\n\n                  <button ion-button id="btn" (click)="canceleditTC()" style="background-color:red ">Cancel</button>\n\n                </div>\n\n              </ion-card>\n\n            </div>\n\n      </div>\n\n\n\n      \n\n   \n\n  </ion-content>\n\n  <ion-footer style="padding: 5px">\n\n  \n\n    <p style="color: grey">If this is correct, please sign and submit your timesheet. Remember, it is a federal crime to submit a fraudalent timesheet.</p>\n\n  \n\n    <button ion-button color="primary" style="text-transform: none" (click)="submit(nonschdetails)" block>Verify Visit</button>\n\n  \n\n  \n\n  \n\n  \n\n  \n\n  </ion-footer> -->'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgmonthtimeentries\cgmonthtimeentries.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalPage */]])
    ], CgmonthtimeentriesPage);
    return CgmonthtimeentriesPage;
}());

//# sourceMappingURL=cgmonthtimeentries.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpersonalizePage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgpersonalizephotoupload_cgpersonalizephotoupload__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgtimesheetprofile_cgtimesheetprofile__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CgpersonalizePage = /** @class */ (function () {
    function CgpersonalizePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = [
            {
                cgname: "Jessica"
            }
        ];
    }
    CgpersonalizePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpersonalizePage');
    };
    CgpersonalizePage.prototype.personalize = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizephotoupload_cgpersonalizephotoupload__["a" /* CgpersonalizephotouploadPage */]);
    };
    CgpersonalizePage.prototype.remind = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgtimesheetprofile_cgtimesheetprofile__["a" /* CgtimesheetprofilePage */]);
    };
    CgpersonalizePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpersonalize',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalize\cgpersonalize.html"*/'<ion-header text-center>\n\n  <ion-navbar color="primary">\n\n    <ion-title style="padding-right:10%">Personalize</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center *ngFor="let i of records">\n\n\n\n  <h1  style="padding-top:20px;">Welcome,{{i.cgname}}!</h1>\n\n  <p>\n\n    Please take a minute to personalize your profile as a way to introduce yourself to your care recipients.\n\n  </p>\n\n  <br><br><br>\n\n        \n\n  <button ion-button large style="text-transform: none" block (click)="personalize()">Personalize Profile</button>\n\n  <button ion-button  clear style="text-transform: none;" block (click)="remind()" >Remind me later</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalize\cgpersonalize.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgpersonalizePage);
    return CgpersonalizePage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgpersonalize.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpersonalizedetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgpersonalizeexperience_cgpersonalizeexperience__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgpersonalizephotoupload_cgpersonalizephotoupload__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgpersonalizecertificate_cgpersonalizecertificate__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CgpersonalizedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgpersonalizedetailsPage = /** @class */ (function () {
    function CgpersonalizedetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CgpersonalizedetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpersonalizedetailsPage');
    };
    CgpersonalizedetailsPage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */]);
    };
    CgpersonalizedetailsPage.prototype.photo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgpersonalizephotoupload_cgpersonalizephotoupload__["a" /* CgpersonalizephotouploadPage */]);
    };
    CgpersonalizedetailsPage.prototype.exp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */]);
    };
    CgpersonalizedetailsPage.prototype.certifi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */]);
    };
    CgpersonalizedetailsPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgpersonalizedetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpersonalizedetails',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizedetails\cgpersonalizedetails.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col col-2 style="padding: 0">         \n\n          <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button> \n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-right:22%">Personalize Profile</ion-title>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div style="padding:20px">\n\n    <span class="dot" (click)="photo()"></span>\n\n    <span class="dot"></span>\n\n    <span class="circle" (click)="exp()"></span>\n\n    <span class="circle" (click)="certifi()"></span>\n\n  </div>\n\n\n\n  <h1>Next, let\'s add some personal details.</h1>\n\n\n\n  <ion-list style="padding-top: 30px">\n\n    <ion-item>\n\n      <ion-label style="color: black">Gender</ion-label>\n\n      <ion-select [(ngModel)]="gender">\n\n        <ion-option value="m">Male</ion-option>\n\n        <ion-option value="f">Female</ion-option>\n\n        <ion-option value="o">Others</ion-option> \n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label style="color: black">Frangance-free</ion-label>\n\n      <ion-select [(ngModel)]="fragance-free">\n\n        <ion-option value="y">Yes</ion-option>\n\n        <ion-option value="n">No</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer style="padding: 5px;">\n\n  <button ion-button style="text-transform: none;"  (click)="next()" full>Next</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizedetails\cgpersonalizedetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgpersonalizedetailsPage);
    return CgpersonalizedetailsPage;
}());

//# sourceMappingURL=cgpersonalizedetails.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemultipletimesheetPage; });
/* unused harmony export time */
/* unused harmony export items1 */
/* unused harmony export cmark */
/* unused harmony export content */
/* unused harmony export service */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resignatureverification_resignatureverification__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { ModalController } from 'ionic-angular';
// import { TimeModelPage } from '../time-model/time-model';

/**
 * Generated class for the RemultipletimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RemultipletimesheetPage = /** @class */ (function () {
    function RemultipletimesheetPage(navCtrl, navParams, http, loadingCtrl, global, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this._DomSanitizer = _DomSanitizer;
        this.missedtc = [];
        this.isedit = false;
        this.isedit1 = false;
        this.times = [{
                image: "assets/imgs/profile5.jpg",
                worktype: "Recipient of Care",
                name: "Tom Moscow",
            },
            {
                image: "assets/imgs/jessica.jpg",
                worktype: "Provided By",
                name: "Jessica Careson",
            },
        ];
        this.item1 = [{
                image: "assets/imgs/h.png",
                orgname: "HomeCare First",
                connum: "5555-5555-5555",
            }];
        this.mark = [{
                type: "Bathing",
            },
            {
                type: "Grooming",
            },
            {
                type: "Eating",
            },];
        this.contents = [{
                time: "Time In",
                duration: "9:00 AM",
                add: "5151, 1st Avenue Rochester, MN 55555",
                loc: "LOCATION VERIFIED BY GPS",
            },
            {
                time: "Time Out",
                duration: "11:05 AM",
                add: "5151, 1st Avenue Rochester, MN 55555",
                loc: "LOCATION VERIFIED BY GPS",
            },];
        this.services = [{
                servtype: "DATE OF SERVICE",
                quantity: "April 13,2018",
                servtime: "TOTAL TIME",
                duration: "2H 5M",
            },
            {
                servtype: "SERVICE TYPE",
                quantity: "PCA",
                servtime: "RATIO",
                duration: "1:1",
            },];
    }
    RemultipletimesheetPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad Reapprovetimesheet1Page');
    };
    RemultipletimesheetPage.prototype.submit = function (subval) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resignatureverification_resignatureverification__["a" /* ResignatureverificationPage */], { "timesheetdetail": subval });
    };
    RemultipletimesheetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("will entre");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.timecardId = this.navParams.get("TimecardId");
        this.agencyId = this.navParams.get("agencyId");
        this.scheduleId = this.navParams.get("ScheduleId");
        console.log(this.agencyId);
        console.log(this.timecardId);
        console.log(this.scheduleId);
        var url = "api/ReTimesheet/submitMTC?";
        var myParams = new URLSearchParams();
        myParams.append("timecardId", this.timecardId.toString());
        myParams.append("ScheduleId", this.scheduleId.toString());
        myParams.append("agencyId", this.agencyId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.missedtc = data;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    RemultipletimesheetPage.prototype.cancel = function () {
        this.isedit = false;
        this.navCtrl.pop();
    };
    // edit(date) {
    //   const modal = this.modalCtrl.create(TimeModelPage,{ tcStarttime:date.tcStarttime,tcEndtime:date.tcEndtime});
    //   modal.present();
    // }
    RemultipletimesheetPage.prototype.edit = function () {
        this.isedit = true;
    };
    RemultipletimesheetPage.prototype.edittimesheet = function (tcdetails) {
        var _this = this;
        // this.isedit=true;
        this.isedit = false;
        console.log(tcdetails);
        this.tceditdetails = JSON.stringify(tcdetails);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        var url = "api/ReTimesheet/reedittc";
        this.http.post(url, this.tceditdetails, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.global.isredashrelaod = true;
            _this.isedit = false;
            _this.isedit1 = true;
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    RemultipletimesheetPage.prototype.save = function () {
        this.isedit = false;
        this.isedit1 = true;
    };
    RemultipletimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-remultipletimesheet',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\remultipletimesheet\remultipletimesheet.html"*/'<ion-header text-center>\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n      <ion-grid>\n\n        <ion-row align-items-center>\n\n          <ion-col col-2 style="padding: 0">\n\n            <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button>\n\n          </ion-col>\n\n          <ion-col col-10>\n\n            <ion-title text-center style="padding-right:22%">Approve Timesheet</ion-title>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  \n\n  \n\n  \n\n  <ion-content>\n\n    <div *ngIf="missedtc!= null">\n\n      <div *ngIf="isedit==false">\n\n  \n\n        <ion-item text-center no-lines>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col offset-6>\n\n                <div class="circle" style="margin-left: -28px">\n\n                  <div class="letter">{{missedtc.agencyName}}</div>\n\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n          <h1>{{missedtc.agencyName}}</h1>\n\n          <p>{{missedtc.agenctPhoneNo}}</p>\n\n        </ion-item>\n\n  \n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start *ngIf="missedtc.isMale==true;">\n\n            <img class="img" src="assets/imgs/man.png">\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <ion-avatar item-start *ngIf="!missedtc.isMale==true;">\n\n            <img class="img" src="assets/imgs/female.png">\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <p>RECIPIENT OF CARE</p>\n\n          <h2>{{global.name |uppercase}}</h2>\n\n        </ion-item>\n\n        <ion-item no-lines style="background-color: #F5F5F5">\n\n          <ion-avatar item-start *ngIf="missedtc.isMale==true;">\n\n            <img class="img" src="assets/imgs/man.png">\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <ion-avatar item-start *ngIf="!missedtc.isMale==true;">\n\n            <img class="img" src="assets/imgs/female.png">\n\n            <!-- {{i.clientPhoto}} -->\n\n          </ion-avatar>\n\n          <p>PROVIDED BY</p>\n\n          <h2>{{missedtc.employeeName|uppercase}}</h2>\n\n        </ion-item>\n\n  \n\n        <ion-grid text-center>\n\n          <ion-row>\n\n            <ion-col col-6 style="border: 1px solid gray">\n\n              <ion-label style="color:grey">DATE OF SERVICE</ion-label>\n\n              <ion-label>{{missedtc.servicedate|date:\'MMMM d,yyyy \'}}</ion-label>\n\n            </ion-col>\n\n            <ion-col col-6 style="border: 1px solid gray">\n\n              <ion-label style="color:grey">TOTAL TIME</ion-label>\n\n              <ion-label>{{missedtc.tctotalhours}} Min</ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col col-6 style="border: 1px solid gray">\n\n              <ion-label style="color:grey">SERVICE TYPE </ion-label>\n\n              <ion-label>PCA Service</ion-label>\n\n              <!-- {{missedtc.taskdonelist[0].jobName}} -->\n\n            </ion-col>\n\n            <ion-col col-6 style="border: 1px solid gray">\n\n              <ion-label style="color:grey">RATIO </ion-label>\n\n              <ion-label>1:{{missedtc.serviceRatio}}</ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">ACTIVITIES</h5>\n\n        <div *ngFor="let c of missedtc.taskdonelist">\n\n          <ion-row align-items-center>\n\n            <ion-col col-2>\n\n              <ion-icon style="font-weight: 900;font-size: 2rem;color: #0aea0a" name="checkmark"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <ion-label style="margin: 0">{{c.taskName}}</ion-label>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">EMPLOYEE NOTES</h5>\n\n        <!-- <h6 style="padding-left: 10px">{{missedtc.empnotesnotes}}</h6> -->\n\n        <ion-textarea [(ngModel)]="missedtc.empnotesnotes" class="note" style="pointer-events: none;"></ion-textarea>\n\n  \n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">NOTES</h5>\n\n  \n\n  \n\n        <ion-row style=" background-color:#E3F2FD;">\n\n  \n\n          <ion-textarea [(ngModel)]="missedtc.clinotesnotes" class="note" placeholder="Enter your notes here"></ion-textarea>\n\n  \n\n        </ion-row>\n\n  \n\n        <ion-row align-items-center style="background-color: #F5F5F5;">\n\n          <ion-col style="padding: 0">\n\n            <h5 style="padding:10px;padding-top: 15px;margin: 0">TIME IN</h5>\n\n          </ion-col>\n\n          <ion-col style="padding: 0">\n\n            <ion-icon name="create" style="float: right;margin-right: 10px" (click)="edit()">&nbsp;&nbsp;Edit</ion-icon>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-grid style="padding: 0">\n\n          <ion-row>\n\n            <h3 style="margin: 10px">{{missedtc.tcStarttime| date :\'hh:mm a\'}}</h3>\n\n          </ion-row>\n\n          <ion-row>\n\n            <!-- <p style="margin-bottom:10px;margin-top: 5px;"><i>{{reviewdetail.street1}} {{reviewdetail.street2}} {{reviewdetail.state}} {{reviewdetail.zipCode}}</i></p> -->\n\n          </ion-row>\n\n          <ion-row style="padding-top: 2%">\n\n            <ion-item no-lines *ngIf="missedtc.intimeLocver==true">\n\n              <div>\n\n                <!-- <img class="img" [src]="reviewdetail.inTimeMap"> -->\n\n                <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(missedtc.inTimeMap)" style=" display: block;\n\n                  width: 100%;\n\n                  height: 120px;">\n\n              </div>\n\n          \n\n              <ion-icon small name="checkmark-circle" style="color:#0aea0a;float:left;font-size:12px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n          \n\n            </ion-item>\n\n            <div *ngIf="!missedtc.intimeLocver==true">\n\n              <ion-icon small name="close-circle" style="color:red;float:left;font-size:12px;margin-left: 10px" icon-start>&nbsp;&nbsp;LOCATION COULD NOT BE VERIFIED BY GPS</ion-icon>\n\n            </div>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0">TIME OUT</h5>\n\n        <ion-grid style="padding: 0">\n\n          <ion-row>\n\n            <h3 style="margin: 10px">{{missedtc.tcEndtime| date :\'hh:mm a\'}}</h3>\n\n          </ion-row>\n\n          <ion-row style="padding-top: 2%">\n\n          <ion-item no-lines *ngIf="missedtc.outtimeLocver==true">\n\n              <div>\n\n                <!-- <img class="img" [src]="reviewdetail.outTimeMap"> -->\n\n                <img [src]="_DomSanitizer.bypassSecurityTrustUrl(missedtc.outTimeMap)" style=" display: block;\n\n                            width: 100%;\n\n                            height: 120px;">\n\n              </div>\n\n              <h2>\n\n              <ion-icon small name="checkmark-circle" style="color:#0aea0a;float:left;font-size:12px;" icon-start>&nbsp;&nbsp;LOCATION VERIFIED BY GPS</ion-icon>\n\n            </h2>\n\n            </ion-item>\n\n            <div *ngIf="!missedtc.outtimeLocver==true">\n\n              <ion-icon small name="close-circle" style="color:red;float:left;font-size:12px;margin-left: 10px" icon-start>&nbsp;&nbsp;LOCATION COULD NOT BE VERIFIED BY GPS</ion-icon>\n\n            </div>\n\n          </ion-row>\n\n        </ion-grid>\n\n  \n\n      </div>\n\n    </div>\n\n    \n\n    <div *ngIf="isedit== true" style="background-color: #F5F5F5">\n\n      <div *ngIf="missedtc!= null">\n\n          <br>\n\n          <ion-card  style="padding: 10px">\n\n            <ion-list>\n\n                <ion-item no-lines style="background-color: #F5F5F5">\n\n                    <ion-avatar item-start *ngIf="missedtc.isMale==true;">\n\n                      <img class="img" src="assets/imgs/man.png">\n\n                      <!-- {{i.clientPhoto}} -->\n\n                    </ion-avatar>\n\n                    <ion-avatar item-start *ngIf="!missedtc.isMale==true;">\n\n                      <img class="img" src="assets/imgs/female.png">\n\n                      <!-- {{i.clientPhoto}} -->\n\n                    </ion-avatar>\n\n                    <p>PROVIDED BY</p>\n\n                    <h2>{{missedtc.employeeName|uppercase}}</h2>\n\n                  </ion-item>\n\n      \n\n              <ion-item>\n\n                <ion-label style="font-size: 16px" stacked>Time In</ion-label>\n\n                <ion-datetime displayFormat="hh:mm A" [(ngModel)]="missedtc.tcStarttime">{{missedtc.tcStarttime}}</ion-datetime>\n\n              </ion-item>\n\n      \n\n              <ion-item>\n\n                <ion-label style="font-size: 16px" stacked>Time Out</ion-label>\n\n                <ion-datetime displayFormat="hh:mm A" [(ngModel)]="missedtc.tcEndtime">{{missedtc.tcEndtime}}</ion-datetime>\n\n      \n\n              </ion-item>\n\n      \n\n            </ion-list>\n\n      <br>\n\n            <div text-center>\n\n              <button ion-button id="btn" (click)="edittimesheet(missedtc)" style="background-color:rgb(0, 153, 255) ">Save</button>\n\n              <button ion-button id="btn" (click)="cancel()" style="background-color:red ">Cancel</button>\n\n            </div>\n\n          </ion-card>\n\n        </div>\n\n\n\n      </div>\n\n       \n\n  </ion-content>\n\n  <ion-footer style="padding: 5px">\n\n    <p style="color: grey">If this is correct, please sign and submit your timesheet. Remember, it is a federal crime to submit a fraudalent timesheet.</p>\n\n    <button ion-button color="primary" style="text-transform: none" *ngIf="isedit1==false" [disabled]="isedit==true" (click)="submit(missedtc)" full>Verify and Sign</button>\n\n    <button ion-button color="primary" style="text-transform: none" *ngIf="isedit1==true" (click)="submit(missedtc)" full>Resubmit to Employee</button>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\remultipletimesheet\remultipletimesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */]])
    ], RemultipletimesheetPage);
    return RemultipletimesheetPage;
}());

var time = /** @class */ (function () {
    function time() {
    }
    return time;
}());

var items1 = /** @class */ (function () {
    function items1() {
    }
    return items1;
}());

var cmark = /** @class */ (function () {
    function cmark() {
    }
    return cmark;
}());

var content = /** @class */ (function () {
    function content() {
    }
    return content;
}());

var service = /** @class */ (function () {
    function service() {
    }
    return service;
}());

//# sourceMappingURL=remultipletimesheet.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(536);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_cgtabpages_cgtabpages__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(859);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cglogin_cglogin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cgpersonalize_cgpersonalize__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cgprofilepage_cgprofilepage__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cgtimesheetcalendar_cgtimesheetcalendar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cgmissingtimesheet_cgmissingtimesheet__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cgreview_cgreview__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cgmissingtimesheetmonth_cgmissingtimesheetmonth__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cgcompletetimesheet_cgcompletetimesheet__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cgpersonalizephotoupload_cgpersonalizephotoupload__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cgpersonalizephotoedit_cgpersonalizephotoedit__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cgpersonalizedetails_cgpersonalizedetails__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cgpersonalizeexperience_cgpersonalizeexperience__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_cgpersonalizecertificate_cgpersonalizecertificate__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_cgviewappointment_cgviewappointment__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_cgblockcalendar_cgblockcalendar__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_cgblockcalendarrepeat_cgblockcalendarrepeat__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_redashboard_redashboard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reviewappointment_reviewappointment__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_recarehistory_recarehistory__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_recarehistorymonth_recarehistorymonth__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_recarehistorymonthdetails_recarehistorymonthdetails__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_signatureverification_signatureverification__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_signaturepad__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_reapprovetimesheet_reapprovetimesheet__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_resignatureverification_resignatureverification__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_reprofile_reprofile__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_cgdashboard_cgdashboard__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_cgtimesheetcarerecipients_cgtimesheetcarerecipients__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_cgtimesheetprofile_cgtimesheetprofile__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_auth_auth__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_http__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_popover_popover__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_geolocation__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_cgprofilenew_cgprofilenew__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_cgpopover_cgpopover__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_eligibilitydetails_eligibilitydetails__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_scheduledappointment_scheduledappointment__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__node_modules_ionic_native_camera__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__node_modules_ionic_native_native_geocoder__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_forgotpassword_forgotpassword__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_local_notifications__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_cgmultipletimesheet_cgmultipletimesheet__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_remultipletimesheet_remultipletimesheet__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_push__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_device__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_userdetails_userdetails__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_addentries_addentries__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_cgmulsignature_cgmulsignature__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_cgnonschreview_cgnonschreview__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_cgnonschsignature_cgnonschsignature__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_cgmonthtimeentries_cgmonthtimeentries__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_diagnostic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__ionic_native_location_accuracy__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































// import {TimeModelPage} from '../pages/time-model/time-model';





// import { SettingProvider } from '../providers/setting/setting';









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cglogin_cglogin__["a" /* CgloginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cgpersonalize_cgpersonalize__["a" /* CgpersonalizePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_cgtabpages_cgtabpages__["a" /* CgtabpagesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cgprofilepage_cgprofilepage__["a" /* CgprofilepagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cgtimesheetcalendar_cgtimesheetcalendar__["a" /* CgtimesheetcalendarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cgmissingtimesheet_cgmissingtimesheet__["a" /* CgmissingtimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_cgmultipletimesheet_cgmultipletimesheet__["a" /* CgmultipletimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_cgnonschsignature_cgnonschsignature__["a" /* CgnonschsignaturePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cgreview_cgreview__["a" /* CgreviewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cgmissingtimesheetmonth_cgmissingtimesheetmonth__["a" /* CgmissingtimesheetmonthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cgcompletetimesheet_cgcompletetimesheet__["a" /* CgcompletetimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_signatureverification_signatureverification__["a" /* SignatureverificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cgpersonalizephotoupload_cgpersonalizephotoupload__["a" /* CgpersonalizephotouploadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cgpersonalizephotoedit_cgpersonalizephotoedit__["a" /* CgpersonalizephotoeditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_cgmonthtimeentries_cgmonthtimeentries__["a" /* CgmonthtimeentriesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cgviewappointment_cgviewappointment__["a" /* CgviewappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cgblockcalendar_cgblockcalendar__["a" /* CgblockcalendarPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cgblockcalendarrepeat_cgblockcalendarrepeat__["a" /* CgblockcalendarrepeatPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_cgnonschreview_cgnonschreview__["a" /* CgnonschreviewPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_redashboard_redashboard__["a" /* RedashboardPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reviewappointment_reviewappointment__["a" /* ReviewappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_recarehistory_recarehistory__["a" /* RecarehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_recarehistorymonth_recarehistorymonth__["a" /* RecarehistorymonthPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_recarehistorymonthdetails_recarehistorymonthdetails__["a" /* RecarehistorymonthdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_reapprovetimesheet_reapprovetimesheet__["a" /* ReapprovetimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_53__pages_remultipletimesheet_remultipletimesheet__["a" /* RemultipletimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_resignatureverification_resignatureverification__["a" /* ResignatureverificationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_reprofile_reprofile__["a" /* ReprofilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_cgdashboard_cgdashboard__["a" /* CgdashboardPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_cgtimesheetcarerecipients_cgtimesheetcarerecipients__["a" /* CgtimesheetcarerecipientsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_cgtimesheetprofile_cgtimesheetprofile__["a" /* CgtimesheetprofilePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_global_global__["a" /* GlobalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_cgpopover_cgpopover__["a" /* CgpopoverPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_eligibilitydetails_eligibilitydetails__["a" /* EligibilitydetailsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_scheduledappointment_scheduledappointment__["a" /* ScheduledappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_userdetails_userdetails__["a" /* UserdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_addentries_addentries__["a" /* AddentriesPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_cgmulsignature_cgmulsignature__["a" /* CgmulsignaturePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10_ng_fullcalendar__["b" /* FullCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_40__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_31_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/addentries/addentries.module#AddentriesPageModule', name: 'AddentriesPage', segment: 'addentries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgblockcalendar/cgblockcalendar.module#CgblockcalendarPageModule', name: 'CgblockcalendarPage', segment: 'cgblockcalendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgblockcalendarrepeat/cgblockcalendarrepeat.module#CgblockcalendarrepeatPageModule', name: 'CgblockcalendarrepeatPage', segment: 'cgblockcalendarrepeat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgcompletetimesheet/cgcompletetimesheet.module#CgcompletetimesheetPageModule', name: 'CgcompletetimesheetPage', segment: 'cgcompletetimesheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgdashboard/cgdashboard.module#CgdashboardPageModule', name: 'CgdashboardPage', segment: 'cgdashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cglogin/cglogin.module#CgloginPageModule', name: 'CgloginPage', segment: 'cglogin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgmissingtimesheet/cgmissingtimesheet.module#CgmissingtimesheetPageModule', name: 'CgmissingtimesheetPage', segment: 'cgmissingtimesheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgmissingtimesheetmonth/cgmissingtimesheetmonth.module#CgmissingtimesheetmonthPageModule', name: 'CgmissingtimesheetmonthPage', segment: 'cgmissingtimesheetmonth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgmonthtimeentries/cgmonthtimeentries.module#CgmonthtimeentriesPageModule', name: 'CgmonthtimeentriesPage', segment: 'cgmonthtimeentries', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgmulsignature/cgmulsignature.module#CgmulsignaturePageModule', name: 'CgmulsignaturePage', segment: 'cgmulsignature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgmultipletimesheet/cgmultipletimesheet.module#CgmultipletimesheetPageModule', name: 'CgmultipletimesheetPage', segment: 'cgmultipletimesheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgnonschreview/cgnonschreview.module#CgnonschreviewPageModule', name: 'CgnonschreviewPage', segment: 'cgnonschreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgnonschsignature/cgnonschsignature.module#CgnonschsignaturePageModule', name: 'CgnonschsignaturePage', segment: 'cgnonschsignature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpersonalize/cgpersonalize.module#CgpersonalizePageModule', name: 'CgpersonalizePage', segment: 'cgpersonalize', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpersonalizecertificate/cgpersonalizecertificate.module#CgpersonalizecertificatePageModule', name: 'CgpersonalizecertificatePage', segment: 'cgpersonalizecertificate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpersonalizedetails/cgpersonalizedetails.module#CgpersonalizedetailsPageModule', name: 'CgpersonalizedetailsPage', segment: 'cgpersonalizedetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpersonalizeexperience/cgpersonalizeexperience.module#CgpersonalizeexperiencePageModule', name: 'CgpersonalizeexperiencePage', segment: 'cgpersonalizeexperience', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpersonalizephotoedit/cgpersonalizephotoedit.module#CgpersonalizephotoeditPageModule', name: 'CgpersonalizephotoeditPage', segment: 'cgpersonalizephotoedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpersonalizephotoupload/cgpersonalizephotoupload.module#CgpersonalizephotouploadPageModule', name: 'CgpersonalizephotouploadPage', segment: 'cgpersonalizephotoupload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgpopover/cgpopover.module#CgpopoverPageModule', name: 'CgpopoverPage', segment: 'cgpopover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgprofilenew/cgprofilenew.module#CgprofilenewPageModule', name: 'CgprofilenewPage', segment: 'cgprofilenew', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgprofilepage/cgprofilepage.module#CgprofilepagePageModule', name: 'CgprofilepagePage', segment: 'cgprofilepage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgreview/cgreview.module#CgreviewPageModule', name: 'CgreviewPage', segment: 'cgreview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgtabpages/cgtabpages.module#CgtabpagesPageModule', name: 'CgtabpagesPage', segment: 'cgtabpages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgtimesheetcalendar/cgtimesheetcalendar.module#CgtimesheetcalendarPageModule', name: 'CgtimesheetcalendarPage', segment: 'cgtimesheetcalendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgtimesheetcarerecipients/cgtimesheetcarerecipients.module#CgtimesheetcarerecipientsPageModule', name: 'CgtimesheetcarerecipientsPage', segment: 'cgtimesheetcarerecipients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgtimesheetprofile/cgtimesheetprofile.module#CgtimesheetprofilePageModule', name: 'CgtimesheetprofilePage', segment: 'cgtimesheetprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cgviewappointment/cgviewappointment.module#CgviewappointmentPageModule', name: 'CgviewappointmentPage', segment: 'cgviewappointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/eligibilitydetails/eligibilitydetails.module#EligibilitydetailsPageModule', name: 'EligibilitydetailsPage', segment: 'eligibilitydetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/global/global.module#GlobalPageModule', name: 'GlobalPage', segment: 'global', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reapprovetimesheet/reapprovetimesheet.module#ReapprovetimesheetPageModule', name: 'ReapprovetimesheetPage', segment: 'reapprovetimesheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recarehistory/recarehistory.module#RecarehistoryPageModule', name: 'RecarehistoryPage', segment: 'recarehistory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recarehistorymonth/recarehistorymonth.module#RecarehistorymonthPageModule', name: 'RecarehistorymonthPage', segment: 'recarehistorymonth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recarehistorymonthdetails/recarehistorymonthdetails.module#RecarehistorymonthdetailsPageModule', name: 'RecarehistorymonthdetailsPage', segment: 'recarehistorymonthdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/redashboard/redashboard.module#RedashboardPageModule', name: 'RedashboardPage', segment: 'redashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remultipletimesheet/remultipletimesheet.module#RemultipletimesheetPageModule', name: 'RemultipletimesheetPage', segment: 'remultipletimesheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reprofile/reprofile.module#ReprofilePageModule', name: 'ReprofilePage', segment: 'reprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resignatureverification/resignatureverification.module#ResignatureverificationPageModule', name: 'ResignatureverificationPage', segment: 'resignatureverification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviewappointment/reviewappointment.module#ReviewappointmentPageModule', name: 'ReviewappointmentPage', segment: 'reviewappointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scheduledappointment/scheduledappointment.module#ScheduledappointmentPageModule', name: 'ScheduledappointmentPage', segment: 'scheduledappointment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signatureverification/signatureverification.module#SignatureverificationPageModule', name: 'SignatureverificationPage', segment: 'signatureverification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/userdetails/userdetails.module#UserdetailsPageModule', name: 'UserdetailsPage', segment: 'userdetails', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_cglogin_cglogin__["a" /* CgloginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cgpersonalize_cgpersonalize__["a" /* CgpersonalizePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_cgtabpages_cgtabpages__["a" /* CgtabpagesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_cgprofilepage_cgprofilepage__["a" /* CgprofilepagePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cgtimesheetcalendar_cgtimesheetcalendar__["a" /* CgtimesheetcalendarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cgmissingtimesheet_cgmissingtimesheet__["a" /* CgmissingtimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_cgmultipletimesheet_cgmultipletimesheet__["a" /* CgmultipletimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cgreview_cgreview__["a" /* CgreviewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cgmissingtimesheetmonth_cgmissingtimesheetmonth__["a" /* CgmissingtimesheetmonthPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cgcompletetimesheet_cgcompletetimesheet__["a" /* CgcompletetimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_signatureverification_signatureverification__["a" /* SignatureverificationPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cgpersonalizephotoupload_cgpersonalizephotoupload__["a" /* CgpersonalizephotouploadPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cgpersonalizephotoedit_cgpersonalizephotoedit__["a" /* CgpersonalizephotoeditPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_cgviewappointment_cgviewappointment__["a" /* CgviewappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_cgnonschsignature_cgnonschsignature__["a" /* CgnonschsignaturePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_cgmonthtimeentries_cgmonthtimeentries__["a" /* CgmonthtimeentriesPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_cgblockcalendar_cgblockcalendar__["a" /* CgblockcalendarPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_cgblockcalendarrepeat_cgblockcalendarrepeat__["a" /* CgblockcalendarrepeatPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_cgnonschreview_cgnonschreview__["a" /* CgnonschreviewPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_redashboard_redashboard__["a" /* RedashboardPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reviewappointment_reviewappointment__["a" /* ReviewappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_recarehistory_recarehistory__["a" /* RecarehistoryPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_recarehistorymonth_recarehistorymonth__["a" /* RecarehistorymonthPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_recarehistorymonthdetails_recarehistorymonthdetails__["a" /* RecarehistorymonthdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_reapprovetimesheet_reapprovetimesheet__["a" /* ReapprovetimesheetPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_resignatureverification_resignatureverification__["a" /* ResignatureverificationPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_reprofile_reprofile__["a" /* ReprofilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_cgdashboard_cgdashboard__["a" /* CgdashboardPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_cgtimesheetcarerecipients_cgtimesheetcarerecipients__["a" /* CgtimesheetcarerecipientsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_cgtimesheetprofile_cgtimesheetprofile__["a" /* CgtimesheetprofilePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_global_global__["a" /* GlobalPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_cgpopover_cgpopover__["a" /* CgpopoverPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_eligibilitydetails_eligibilitydetails__["a" /* EligibilitydetailsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_scheduledappointment_scheduledappointment__["a" /* ScheduledappointmentPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_userdetails_userdetails__["a" /* UserdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_57__pages_addentries_addentries__["a" /* AddentriesPage */],
                __WEBPACK_IMPORTED_MODULE_58__pages_cgmulsignature_cgmulsignature__["a" /* CgmulsignaturePage */]
                // TimeModelPage
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_41__pages_global_global__["a" /* GlobalPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_userdetails_userdetails__["a" /* UserdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_local_notifications__["a" /* LocalNotifications */],
                // AndroidPermissions,
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_38__providers_auth_auth__["a" /* AuthProvider */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_48__node_modules_ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_49__node_modules_ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_62__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_63__ionic_native_location_accuracy__["a" /* LocationAccuracy */]
                // SettingProvider,
                // AuthProvider
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpersonalizeexperiencePage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgpersonalizecertificate_cgpersonalizecertificate__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgpersonalizephotoupload_cgpersonalizephotoupload__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgpersonalizedetails_cgpersonalizedetails__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CgpersonalizeexperiencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgpersonalizeexperiencePage = /** @class */ (function () {
    function CgpersonalizeexperiencePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = [
            {
                experience: "With Behaviors"
            },
            {
                experience: "Working with Children"
            },
            {
                experience: "Making Transfers"
            },
            {
                experience: "With Alzheimer's"
            }
        ];
    }
    CgpersonalizeexperiencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpersonalizeexperiencePage');
    };
    CgpersonalizeexperiencePage.prototype.next = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */]);
    };
    CgpersonalizeexperiencePage.prototype.photo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgpersonalizephotoupload_cgpersonalizephotoupload__["a" /* CgpersonalizephotouploadPage */]);
    };
    CgpersonalizeexperiencePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */]);
    };
    CgpersonalizeexperiencePage.prototype.certifi = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizecertificate_cgpersonalizecertificate__["a" /* CgpersonalizecertificatePage */]);
    };
    CgpersonalizeexperiencePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgpersonalizeexperiencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpersonalizeexperience',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizeexperience\cgpersonalizeexperience.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col col-2 style="padding: 0">         \n\n          <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button> \n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-right:22%">Personalize Profile</ion-title>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div style="padding:20px">\n\n    <span class="dot" (click)="photo()"></span>\n\n    <span class="dot" (click)="detail()"></span>\n\n    <span class="dot"></span>\n\n    <span class="circle" (click)="certifi()"></span>\n\n  </div>\n\n\n\n  <h1>Tell us about your experience.</h1>\n\n\n\n  <ion-list style="padding-top: 30px">\n\n    <ion-item>\n\n      <ion-label text-wrap>Years of Experience</ion-label>\n\n      <ion-label text-right>5</ion-label>>\n\n    </ion-item>\n\n    <ion-item *ngFor="let i of records">\n\n      <ion-label>{{i.experience}}</ion-label>\n\n      <ion-checkbox item-end></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer style="padding: 5px;">\n\n  <button ion-button style="text-transform: none;"  (click)="next()" block>Next</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizeexperience\cgpersonalizeexperience.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgpersonalizeexperiencePage);
    return CgpersonalizeexperiencePage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgpersonalizeexperience.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgpersonalizecertificatePage; });
/* unused harmony export record */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgpersonalizephotoupload_cgpersonalizephotoupload__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cgpersonalizedetails_cgpersonalizedetails__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgpersonalizeexperience_cgpersonalizeexperience__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgtimesheetprofile_cgtimesheetprofile__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CgpersonalizecertificatePage = /** @class */ (function () {
    function CgpersonalizecertificatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.records = [
            {
                certificate: "CPR-Certified"
            },
            {
                certificate: "CNA"
            },
            {
                certificate: "Drivers Licence"
            },
            {
                certificate: "First Aid"
            },
            {
                certificate: "Person-Centered Training"
            }
        ];
    }
    CgpersonalizecertificatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgpersonalizecertificatePage');
    };
    CgpersonalizecertificatePage.prototype.finish = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cgtimesheetprofile_cgtimesheetprofile__["a" /* CgtimesheetprofilePage */]);
    };
    CgpersonalizecertificatePage.prototype.photo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgpersonalizephotoupload_cgpersonalizephotoupload__["a" /* CgpersonalizephotouploadPage */]);
    };
    CgpersonalizecertificatePage.prototype.detail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cgpersonalizedetails_cgpersonalizedetails__["a" /* CgpersonalizedetailsPage */]);
    };
    CgpersonalizecertificatePage.prototype.exp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgpersonalizeexperience_cgpersonalizeexperience__["a" /* CgpersonalizeexperiencePage */]);
    };
    CgpersonalizecertificatePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgpersonalizecertificatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgpersonalizecertificate',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizecertificate\cgpersonalizecertificate.html"*/'<ion-header>\n\n  <ion-toolbar color="primary" style="padding: 0">\n\n    <ion-grid>\n\n      <ion-row align-items-center>\n\n        <ion-col col-2 style="padding: 0">         \n\n          <button ion-button clear style="text-transform: none;color: white" (click)="cancel()">Cancel</button> \n\n        </ion-col>\n\n        <ion-col col-10>\n\n          <ion-title text-center style="padding-right:22%">Personalize Profile</ion-title>\n\n        </ion-col>\n\n       </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding text-center>\n\n\n\n  <div style="padding:20px">\n\n    <span class="dot" (click)="photo()"></span>\n\n    <span class="dot" (click)="detail()"></span>\n\n    <span class="dot" (click)="exp()"></span>\n\n    <span class="dot" ></span>\n\n  </div>\n\n\n\n  <h1>What certificates, licences and training do you have?</h1>\n\n\n\n  <ion-list style="padding-top: 30px"> \n\n    <ion-item *ngFor="let i of records">\n\n      <ion-label>{{i.certificate}}</ion-label>\n\n      <ion-checkbox item-end></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer style="padding: 5px;">\n\n  <button ion-button style="text-transform: none;"  (click)="finish()" block>Finish</button>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgpersonalizecertificate\cgpersonalizecertificate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CgpersonalizecertificatePage);
    return CgpersonalizecertificatePage;
}());

var record = /** @class */ (function () {
    function record() {
    }
    return record;
}());

//# sourceMappingURL=cgpersonalizecertificate.js.map

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 258,
	"./af.js": 258,
	"./ar": 259,
	"./ar-dz": 260,
	"./ar-dz.js": 260,
	"./ar-kw": 261,
	"./ar-kw.js": 261,
	"./ar-ly": 262,
	"./ar-ly.js": 262,
	"./ar-ma": 263,
	"./ar-ma.js": 263,
	"./ar-sa": 264,
	"./ar-sa.js": 264,
	"./ar-tn": 265,
	"./ar-tn.js": 265,
	"./ar.js": 259,
	"./az": 266,
	"./az.js": 266,
	"./be": 267,
	"./be.js": 267,
	"./bg": 268,
	"./bg.js": 268,
	"./bm": 269,
	"./bm.js": 269,
	"./bn": 270,
	"./bn.js": 270,
	"./bo": 271,
	"./bo.js": 271,
	"./br": 272,
	"./br.js": 272,
	"./bs": 273,
	"./bs.js": 273,
	"./ca": 274,
	"./ca.js": 274,
	"./cs": 275,
	"./cs.js": 275,
	"./cv": 276,
	"./cv.js": 276,
	"./cy": 277,
	"./cy.js": 277,
	"./da": 278,
	"./da.js": 278,
	"./de": 279,
	"./de-at": 280,
	"./de-at.js": 280,
	"./de-ch": 281,
	"./de-ch.js": 281,
	"./de.js": 279,
	"./dv": 282,
	"./dv.js": 282,
	"./el": 283,
	"./el.js": 283,
	"./en-au": 284,
	"./en-au.js": 284,
	"./en-ca": 285,
	"./en-ca.js": 285,
	"./en-gb": 286,
	"./en-gb.js": 286,
	"./en-ie": 287,
	"./en-ie.js": 287,
	"./en-il": 288,
	"./en-il.js": 288,
	"./en-nz": 289,
	"./en-nz.js": 289,
	"./eo": 290,
	"./eo.js": 290,
	"./es": 291,
	"./es-do": 292,
	"./es-do.js": 292,
	"./es-us": 293,
	"./es-us.js": 293,
	"./es.js": 291,
	"./et": 294,
	"./et.js": 294,
	"./eu": 295,
	"./eu.js": 295,
	"./fa": 296,
	"./fa.js": 296,
	"./fi": 297,
	"./fi.js": 297,
	"./fo": 298,
	"./fo.js": 298,
	"./fr": 299,
	"./fr-ca": 300,
	"./fr-ca.js": 300,
	"./fr-ch": 301,
	"./fr-ch.js": 301,
	"./fr.js": 299,
	"./fy": 302,
	"./fy.js": 302,
	"./gd": 303,
	"./gd.js": 303,
	"./gl": 304,
	"./gl.js": 304,
	"./gom-latn": 305,
	"./gom-latn.js": 305,
	"./gu": 306,
	"./gu.js": 306,
	"./he": 307,
	"./he.js": 307,
	"./hi": 308,
	"./hi.js": 308,
	"./hr": 309,
	"./hr.js": 309,
	"./hu": 310,
	"./hu.js": 310,
	"./hy-am": 311,
	"./hy-am.js": 311,
	"./id": 312,
	"./id.js": 312,
	"./is": 313,
	"./is.js": 313,
	"./it": 314,
	"./it.js": 314,
	"./ja": 315,
	"./ja.js": 315,
	"./jv": 316,
	"./jv.js": 316,
	"./ka": 317,
	"./ka.js": 317,
	"./kk": 318,
	"./kk.js": 318,
	"./km": 319,
	"./km.js": 319,
	"./kn": 320,
	"./kn.js": 320,
	"./ko": 321,
	"./ko.js": 321,
	"./ky": 322,
	"./ky.js": 322,
	"./lb": 323,
	"./lb.js": 323,
	"./lo": 324,
	"./lo.js": 324,
	"./lt": 325,
	"./lt.js": 325,
	"./lv": 326,
	"./lv.js": 326,
	"./me": 327,
	"./me.js": 327,
	"./mi": 328,
	"./mi.js": 328,
	"./mk": 329,
	"./mk.js": 329,
	"./ml": 330,
	"./ml.js": 330,
	"./mn": 331,
	"./mn.js": 331,
	"./mr": 332,
	"./mr.js": 332,
	"./ms": 333,
	"./ms-my": 334,
	"./ms-my.js": 334,
	"./ms.js": 333,
	"./mt": 335,
	"./mt.js": 335,
	"./my": 336,
	"./my.js": 336,
	"./nb": 337,
	"./nb.js": 337,
	"./ne": 338,
	"./ne.js": 338,
	"./nl": 339,
	"./nl-be": 340,
	"./nl-be.js": 340,
	"./nl.js": 339,
	"./nn": 341,
	"./nn.js": 341,
	"./pa-in": 342,
	"./pa-in.js": 342,
	"./pl": 343,
	"./pl.js": 343,
	"./pt": 344,
	"./pt-br": 345,
	"./pt-br.js": 345,
	"./pt.js": 344,
	"./ro": 346,
	"./ro.js": 346,
	"./ru": 347,
	"./ru.js": 347,
	"./sd": 348,
	"./sd.js": 348,
	"./se": 349,
	"./se.js": 349,
	"./si": 350,
	"./si.js": 350,
	"./sk": 351,
	"./sk.js": 351,
	"./sl": 352,
	"./sl.js": 352,
	"./sq": 353,
	"./sq.js": 353,
	"./sr": 354,
	"./sr-cyrl": 355,
	"./sr-cyrl.js": 355,
	"./sr.js": 354,
	"./ss": 356,
	"./ss.js": 356,
	"./sv": 357,
	"./sv.js": 357,
	"./sw": 358,
	"./sw.js": 358,
	"./ta": 359,
	"./ta.js": 359,
	"./te": 360,
	"./te.js": 360,
	"./tet": 361,
	"./tet.js": 361,
	"./tg": 362,
	"./tg.js": 362,
	"./th": 363,
	"./th.js": 363,
	"./tl-ph": 364,
	"./tl-ph.js": 364,
	"./tlh": 365,
	"./tlh.js": 365,
	"./tr": 366,
	"./tr.js": 366,
	"./tzl": 367,
	"./tzl.js": 367,
	"./tzm": 368,
	"./tzm-latn": 369,
	"./tzm-latn.js": 369,
	"./tzm.js": 368,
	"./ug-cn": 370,
	"./ug-cn.js": 370,
	"./uk": 371,
	"./uk.js": 371,
	"./ur": 372,
	"./ur.js": 372,
	"./uz": 373,
	"./uz-latn": 374,
	"./uz-latn.js": 374,
	"./uz.js": 373,
	"./vi": 375,
	"./vi.js": 375,
	"./x-pseudo": 376,
	"./x-pseudo.js": 376,
	"./yo": 377,
	"./yo.js": 377,
	"./zh-cn": 378,
	"./zh-cn.js": 378,
	"./zh-hk": 379,
	"./zh-hk.js": 379,
	"./zh-tw": 380,
	"./zh-tw.js": 380
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 562;

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgcompletetimesheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cgreview_cgreview__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_common__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the CgcompletetimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgcompletetimesheetPage = /** @class */ (function () {
    function CgcompletetimesheetPage(navCtrl, navParams, http, loadingCtrl, alertCtrl, global, _DomSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.global = global;
        this._DomSanitizer = _DomSanitizer;
        this.scheduleIdct = [];
        this.isedit = false;
        this.currentdate = Date.now();
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CgcompletetimesheetPage');
    // }
    CgcompletetimesheetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        // this.scheduleIdct = this.navParams.get("missingTimeSheet");
        // console.log("cgcomtc");
        // console.log(this.scheduleIdct);
        this.scheduleIdct = this.navParams.get("scheduleId");
        this.timecardIdct = this.navParams.get("timecardId");
        console.log(this.scheduleIdct);
        console.log(this.timecardIdct);
        var url = "api/Cgtimesheets/cgCompleteTC?";
        var myParams = new URLSearchParams();
        myParams.append("scheduleId", this.scheduleIdct.toString());
        myParams.append("timecardId", this.timecardIdct.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            //  if(data != null)
            //  {
            //    data.tcstdt = (data.tcstdt).toISOString();
            //    data.tceddt = (data.tceddt).toISOString();
            //    console.log( data.tcstdt);
            //  }
            _this.tcdetails = data;
            console.log("navepush");
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    // nction () {
    //     $('#myCheckbox').click(function () {
    //       $('#myButton').prop("disabled", !$("#myCheckbox").prop("checked")); 
    //     })
    //     alert();
    //   }
    CgcompletetimesheetPage.prototype.review = function (rewvalue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cgreview_cgreview__["a" /* CgreviewPage */], { "revicedvalue": rewvalue });
    };
    CgcompletetimesheetPage.prototype.canceleditTC = function () {
        this.isedit = false;
        // this.navCtrl.pop();
    };
    CgcompletetimesheetPage.prototype.edit = function () {
        this.isedit = true;
    };
    CgcompletetimesheetPage.prototype.savetcedit = function (tcdetails) {
        var _this = this;
        this.isedit = false;
        console.log(tcdetails);
        this.tceditdetails = JSON.stringify(tcdetails);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpHeaders */]({
                "Content-Type": "application/json",
                Authorization: "my-auth-token"
            })
        };
        var url = "api/Cgtimesheets/reedittc";
        this.http.post(url, this.tceditdetails, httpOptions).subscribe(function (data) {
            console.log(data);
            if (data > 0) {
                console.log("timecard greater");
                tcdetails.timecardId = data;
            }
            _this.global.iscgdashreload = true;
            // this.navCtrl.pop();
            var alert = _this.alertCtrl.create({
                title: "Changes Updated",
                message: "Your Timesheet has been updated successfully.Please complete your visit again.",
                // cssClass: "buttonCss5",
                buttons: [
                    {
                        text: "Ok",
                        handler: function (data) {
                            console.log("ok clicked");
                        }
                    }
                ]
            });
            alert.present();
        }, function (err) {
            console.log(err);
        });
    };
    CgcompletetimesheetPage.prototype.buttonState = function () {
        return !this.tcdetails.jobTaskdet.some(function (jobdet) { return jobdet.isCompleted; });
    };
    //   tester:boolean=true;
    //  buttonState() {
    //     alert();
    //     this.tester= !this.tcdetails.jobTaskdet.some( jobdet=>jobdet.isCompleted);
    //   }
    CgcompletetimesheetPage.prototype.presentConfirm = function (tcdetails1) {
        console.log(tcdetails1);
        var dd = tcdetails1.tcstdt;
        var dt = new Date(dd);
        var timeoly = dt.getTime();
        console.log(timeoly);
        var datePipe = new __WEBPACK_IMPORTED_MODULE_4__node_modules_angular_common__["d" /* DatePipe */]('en-US');
        var timeVar = datePipe.transform(tcdetails1.tcstdt, 'h:mm a');
        console.log(timeVar);
        this.ionViewDidLoad();
        var alert = this.alertCtrl.create({
            title: tcdetails1.tcstdt,
            // data.tcstdt =  tcdetails1.tcstdt,
            inputs: [
                {
                    name: 'tcstdt',
                    placeholder: 'time',
                    type: 'time',
                    //value:
                    value: timeVar
                },
                {
                    name: 'tcstdt',
                    placeholder: 'time',
                    type: 'time'
                }
            ],
            buttons: [
                {
                    text: 'save',
                    role: 'cancel',
                    handler: function (data) {
                        // this.tcdetails(data);
                        // console.log(data);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        alert.present();
    };
    CgcompletetimesheetPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    CgcompletetimesheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgcompletetimesheet',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgcompletetimesheet\cgcompletetimesheet.html"*/'<ion-header>\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n        <ion-grid>\n\n            <ion-row align-items-center>\n\n                <ion-col col-2 style="padding: 0">\n\n                    <button ion-button clear style="text-transform: none;color: white;padding: 0;margin-left: 5px " (click)="cancel()">Cancel</button>\n\n                </ion-col>\n\n                <ion-col col-10 text-center>\n\n                    <ion-title text-center style="padding-right:23%">Complete Visit</ion-title>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <div *ngIf="tcdetails!=null">\n\n       \n\n      <div *ngIf="isedit==false">\n\n\n\n        <ion-item no-lines style="margin-left: 0.25%;margin-right: 0.25%;padding: 10px">\n\n            <ion-avatar item-start *ngIf="tcdetails.clientPhoto!=null;">\n\n                <img class="img" [src]="_DomSanitizer.bypassSecurityTrustUrl(tcdetails.clientPhoto)" >\n\n                <!-- {{i.clientPhoto}} -->\n\n              </ion-avatar>\n\n              <ion-avatar item-start *ngIf="tcdetails.clientPhoto==null&&tcdetails.isMale==true;">\n\n                <img class="img" src="assets/imgs/male.png">\n\n                <!-- {{i.clientPhoto}} -->\n\n              </ion-avatar>\n\n              <ion-avatar item-start *ngIf="tcdetails.clientPhoto==null&&tcdetails.isMale!=true;">\n\n                <img class="img" src="assets/imgs/female.png">\n\n                <!-- {{i.clientPhoto}} -->\n\n              </ion-avatar>\n\n            <p>RECIPIENT OF CARE</p>\n\n            <h2>{{tcdetails.clientName|uppercase}}</h2>\n\n        </ion-item>\n\n\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >ACTIVITIES</h5>\n\n        <!-- *ngFor="let jobdet of i.jobTaskdet" -->\n\n        <ion-grid style="padding: 0">\n\n                <!-- <ion-row align-items-center *ngFor="let jobdet of i.jobTaskdet">\n\n                <ion-list radio-group [(ngModel)]="jobdet.isCompleted">\n\n                        <ion-item>\n\n                          <ion-label>{{jobdet.taskName}}</ion-label>\n\n                          <ion-radio value="friends" ></ion-radio>\n\n                        </ion-item>\n\n                      \n\n                       \n\n                      </ion-list>\n\n                      </ion-row> -->\n\n                    \n\n\n\n                      <ion-list no-lines style="margin: 0" *ngFor="let jobdet of tcdetails.jobTaskdet">\n\n\n\n                            <ion-item>\n\n                              <ion-label>{{jobdet.taskName}}</ion-label>\n\n                              <ion-checkbox [(ngModel)]="jobdet.isCompleted" id="myCheckbox" click="nction()"></ion-checkbox>\n\n                            </ion-item>\n\n                           \n\n                            <!-- <button ion-button color="primary" id="myButton" style="text-transform: none" (click)="review(i)" block disabled>Review</button> -->\n\n                            </ion-list>\n\n\n\n                            \n\n<!-- \n\n            <ion-row align-items-center >\n\n                <ion-col col-2 text-right>\n\n                    <div style="display: inline-block;">\n\n                        <input  type="checkbox"  [(ngModel)]="jobdet.isCompleted" checked="jobdet.isCompleted" />\n\n                        <div class="myCheckbox"></div> \n\n                    </div>\n\n                </ion-col>\n\n                <ion-col col-10>\n\n                    <p>{{jobdet.taskName}}</p>\n\n                </ion-col>\n\n            </ion-row> -->\n\n\n\n\n\n            <!-- <ion-row align-items-center>\n\n                            <ion-col col-2 text-right>\n\n                                    <div style="display: inline-block;">\n\n                                            <input type="checkbox" name="group2" [(ngModel)]="eat" checked="false"/>\n\n                                            <div class="myCheckbox" ></div>\n\n                                          </div>\n\n                            </ion-col>\n\n                            <ion-col col-10>\n\n                                    <p >Eating</p>\n\n                            </ion-col>\n\n                        </ion-row> -->\n\n        </ion-grid>\n\n\n\n\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >SERVICE DETAIL</h5>\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Service type </ion-label>\n\n                </ion-col>\n\n                <ion-col *ngIf="tcdetails.jobTaskdet != null && tcdetails.jobTaskdet[0].jobName != null">\n\n                    <ion-label style="color:grey;float: right;margin-right: 2%">{{tcdetails.jobTaskdet[0].jobName}}</ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Ratio(Provider:Recipient) </ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-label style="color:grey;float:right;margin-right:2%">1:{{tcdetails.rserviceratio}}</ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >NOTES</h5>\n\n    <ion-row style=" background-color:#E3F2FD;">\n\n            <ion-textarea [(ngModel)]="tcdetails.notes" class="note" placeholder="Enter notes"></ion-textarea>\n\n    </ion-row>\n\n    <ion-row align-items-center style="background-color: #F5F5F5;">\n\n            <ion-col style="padding: 0">\n\n              <h5 style="padding:10px;padding-top: 15px;margin: 0">SERVICE TIME</h5>\n\n            </ion-col>\n\n            <ion-col style="padding: 0">\n\n                    <!-- (click)="edit(i)" (click)="presentConfirm(i)"-->\n\n                    <ion-icon name="create" style="float: right;margin-right: 10px" (click)="edit(tcdetails)" >&nbsp;&nbsp;Edit Time</ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Time in</ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-label style="float: right;margin-right:2%"> {{tcdetails.date | date :\'MMMM d, y \'}}{{tcdetails.tcstdt| date :\' h:mm a \'}}</ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col>\n\n                    <ion-label>Time out </ion-label>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <ion-label style="float: right;margin-right: 2%">{{tcdetails.tceddt| date :\' h:mm a \'}}</ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n        <h5 style="padding:10px;padding-top: 15px;background-color: #F5F5F5;margin: 0" >SERVICE LOCATION</h5>\n\n\n\n        <ion-grid text-wrap>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-icon name="home" style="font-size: 20px">&nbsp;Address</ion-icon>\n\n                </ion-col>\n\n                <ion-col text-right col-8>\n\n                    <ion-label style="float: right;margin-right: 2%;color:grey"> {{tcdetails.street1}}, {{tcdetails.street2}} </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-icon name="podium" style="font-size: 20px">&nbsp;City</ion-icon>\n\n                </ion-col>\n\n                <ion-col text-right col-8>\n\n                    <ion-label style="float: right;margin-right: 2%;color:grey"> {{tcdetails.city}} </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-icon ios="ios-globe-outline" md="md-globe"  style="font-size: 20px">&nbsp;State</ion-icon>\n\n                </ion-col>\n\n                <ion-col text-right col-8>\n\n                    <ion-label style="float: right;margin-right: 2%;color:grey">{{tcdetails.state}} </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-4>\n\n                    <ion-icon name="pin" style="font-size: 20px">&nbsp;Zip</ion-icon>\n\n                </ion-col>\n\n                <ion-col text-right col-8>\n\n                    <ion-label style="float: right;margin-right: 2%;color:grey">{{tcdetails.zipCode}} </ion-label>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n<!-- \n\n         <div>\n\n                            <button ion-button color="red" [disabled]="buttonState()" style="position:fixed;">button</button>\n\n                            </div> -->\n\n    </div>\n\n\n\n</div>\n\n <div *ngIf="isedit==true" style="background-color: #F5F5F5">\n\n    <br>\n\n  <ion-card style="padding: 10px">\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Time In</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" [(ngModel)]="tcdetails.tcstdt">{{tcdetails.tcstdt}}</ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label style="font-size: 16px" stacked>Time Out</ion-label>\n\n        <ion-datetime displayFormat="hh:mm A" [(ngModel)]="tcdetails.tceddt">{{tcdetails.tceddt}}</ion-datetime>\n\n\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n<br>\n\n    <div text-center>\n\n      <button ion-button id="btn" (click)="savetcedit(tcdetails)" style="background-color:rgb(0, 153, 255) ">Save</button>\n\n      <button ion-button id="btn" (click)="canceleditTC()" style="background-color:red ">Cancel</button>\n\n    </div>\n\n  </ion-card>\n\n</div>\n\n</ion-content>\n\n<ion-footer style="padding: 5px">\n\n\n\n    <button ion-button color="primary" [disabled]="isedit==true"  id="myButton" style="text-transform: none" (click)="review(tcdetails)" block >Review</button>\n\n    <!--[(disabled)]="!bath && !groom && !eat" -->\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgcompletetimesheet\cgcompletetimesheet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__global_global__["a" /* GlobalPage */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
    ], CgcompletetimesheetPage);
    return CgcompletetimesheetPage;
}());

//# sourceMappingURL=cgcompletetimesheet.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgtimesheetprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cgprofilenew_cgprofilenew__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cgpopover_cgpopover__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CgtimesheetprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CgtimesheetprofilePage = /** @class */ (function () {
    function CgtimesheetprofilePage(navCtrl, navParams, http, global, loadingCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.global = global;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.sliderValue = 40;
        this.tspay = [];
        this.currentdate = new Date();
    }
    CgtimesheetprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CgtimesheetprofilePage');
    };
    CgtimesheetprofilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var employ = 5;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var url = "api/CgTsPaydetail/gettspayment?";
        var myParams = new URLSearchParams();
        myParams.append("employeeId", this.global.employeeId.toString());
        this.http.get(url + myParams).subscribe(function (data) {
            console.log(data);
            _this.tspay = data;
            _this.sliderValue = data.averageverification;
            // this.sliderValue = 97;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    CgtimesheetprofilePage.prototype.personalize = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cgprofilenew_cgprofilenew__["a" /* CgprofilenewPage */]);
    };
    CgtimesheetprofilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__cgpopover_cgpopover__["a" /* CgpopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    CgtimesheetprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cgtimesheetprofile',template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtimesheetprofile\cgtimesheetprofile.html"*/'\n\n<ion-header text-center>\n\n    <ion-toolbar color="primary" style="padding: 0">\n\n        <ion-grid style="padding: 0">\n\n          <ion-row align-items-center>\n\n            <!-- <ion-col>\n\n               <button ion-button clear style="float: left;">\n\n                <ion-icon name="person" style="font-size: 30px;color: white;">\n\n                  <ion-badge id="notifications-badge" color="danger">3</ion-badge>\n\n                </ion-icon>\n\n              </button>\n\n            </ion-col> -->\n\n            <ion-col col-10>\n\n    <ion-title style="padding-left:20%">{{global.name|uppercase}}</ion-title>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <button ion-button clear style="float: right" (click)="presentPopover($event)">\n\n          <ion-icon name="menu" style="color: white;font-size: 25px;padding-right: 8px"></ion-icon>\n\n        </button>\n\n    <!-- <ion-icon name="menu" style="font-size: 30px;color: white;float: right;" (click)="carehistory()"></ion-icon> -->\n\n  </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n \n\n  <ion-grid>\n\n   <ion-row align-items-center >\n\n      <ion-col style="padding: 0" col-9>\n\n        <ion-item  no-lines>\n\n          <ion-avatar item-start >\n\n            \n\n          <img class="img" src="assets/imgs/man.png"  *ngIf="!global.galleryPhoto"/>\n\n          <img class="img" [src]="global.galleryPhoto" *ngIf="global.galleryPhoto"/>\n\n        </ion-avatar>\n\n        <h2 style="margin: 0">{{global.name|uppercase}}</h2>\n\n        </ion-item>\n\n      </ion-col>\n\n     <ion-col style="padding: 0" col-2>\n\n        \n\n        <button ion-button small style=" text-transform: none;float: right; padding: 5px;" (click)="personalize()">Profile</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n    <br/>\n\n  <ion-grid style="background-color:#E0E0E0;">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        \n\n        <ion-item no-lines style="background-color:#E0E0E0;">\n\n          <ion-range [(ngModel)]="sliderValue" color=“danger” pin=“true” ></ion-range>\n\n         \n\n        </ion-item >\n\n        <p style="color:#757575;font-size:14px;text-align:center">Average Verification Quality</p>\n\n      </ion-col>\n\n   \n\n      <ion-col col-6>\n\n      <h1 style="color:black;font-size:32px;text-align:center">{{tspay.timesheetverified}}</h1>\n\n         <p style="color:#757575;font-size:14px;text-align:center">Timesheets Verified this month</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <ion-grid style="background-color:#E0E0E0;">\n\n    <ion-row>\n\n      <ion-col col-6 style="background-color:#FFCCBC">   \n\n            <h1 style="color:#E64A19;font-size:32px;text-align:center">{{tspay.remaininghours}}</h1>\n\n          <p style="color:#757575;font-size:14px;text-align:center">Hours remaining this month</p>\n\n      </ion-col>\n\n    \n\n      <ion-col col-6> \n\n      <h1 style="color:black;font-size:32px;text-align:center"><sup style="color:black;font-size: 20px;">$</sup>1010</h1>\n\n        <p style="color:#757575;font-size:14px;text-align:center"> Money Earned on {{currentdate | date:\'MMMM\'}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-grid>\n\n  \n\n     \n\n      <ion-card-content>\n\n     \n\n            <ion-grid>\n\n                <ion-row>\n\n                  <ion-col col-1 >\n\n                      <ion-badge id="missing" class="test" color="danger">!</ion-badge>\n\n                  </ion-col>\n\n              \n\n                  <ion-col col-11 >\n\n                      <p style="margin-top: -2px;margin-left: 10px ;text-align: justify">When you reach the {{tspay.totalhours}} monthly limit your remaining shifts will be rescheduled and you will be unable to accept any new shifts for this month.</p>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n     \n\n         \n\n       \n\n      </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\pages\cgtimesheetprofile\cgtimesheetprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], CgtimesheetprofilePage);
    return CgtimesheetprofilePage;
}());

//# sourceMappingURL=cgtimesheetprofile.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_cglogin_cglogin__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_redashboard_redashboard__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cgtabpages_cgtabpages__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_global_global__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_userdetails_userdetails__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// import { SettingProvider } from '../providers/setting/setting';
// import { AndroidPermissions } from '@ionic-native/android-permissions';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage1, global, push, device, usedet) {
        var _this = this;
        this.storage1 = storage1;
        this.global = global;
        this.push = push;
        this.device = device;
        this.usedet = usedet;
        platform.ready().then(function () {
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
            _this.push.hasPermission()
                .then(function (res) {
                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');
                }
                else {
                    console.log('We do not have permission to send push notifications');
                }
            });
            _this.usedet.pushsetup();
            console.log("storage page");
            storage1.get("loginAuth").then(function (val) {
                if (val == null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_cglogin_cglogin__["a" /* CgloginPage */];
                    //this.rootPage=RedashboardPage;
                }
                else {
                    _this.global.Adddata(val);
                    if (val.userdetail.isEmployee) {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_cgtabpages_cgtabpages__["a" /* CgtabpagesPage */];
                        // this.rootPage=RedashboardPage;
                    }
                    else {
                        _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_redashboard_redashboard__["a" /* RedashboardPage */];
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Sbna\Desktop\Evv source\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sbna\Desktop\Evv source\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_global_global__["a" /* GlobalPage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_11__pages_userdetails_userdetails__["a" /* UserdetailsPage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__(861);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_global_global__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, global) {
        this.http = http;
        this.global = global;
        // url:string ="http://192.168.101.11/";
        this.url = "http://localhost:21116/";
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.intercept = function (request, next) {
        // if(this.auth.UserID!=null||this.auth.UserID==''){
        console.log("auth page data");
        // console.log( this.UserID)
        request = request.clone({
            url: this.url + request.url,
            setHeaders: {
                Authorization: "Bearer " + this.global.token
            }
        });
        return next.handle(request);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__pages_global_global__["a" /* GlobalPage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[531]);
//# sourceMappingURL=main.js.map