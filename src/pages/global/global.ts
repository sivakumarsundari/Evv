import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GlobalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-global',
  templateUrl: 'global.html',
})
@Injectable()
export class GlobalPage {
  public  employeeId :number;
  public  clientId :number;
  public  agencyId :number;
  public  name:string;
  public isClient:boolean;
  public isEmployee:boolean;
  public  galleryPhoto:string;
  public  token:string;
  public iscgdashreload:boolean = false;
  public isredashrelaod:boolean = false;


  constructor() {
  }

  Adddata(appdetails)
  {
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

  }

  Addcleardata()
  {

this.employeeId = null;
this.clientId =null;
this.agencyId = null;
this.name = null;
this.isClient = null;
this.isEmployee = null;
this.galleryPhoto = null;
this.token = null;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GlobalPage');
  }

}
