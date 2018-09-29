import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalPage } from '../global/global';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the ReprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reprofile',
  templateUrl: 'reprofile.html',
})
export class ReprofilePage {
  public base64Image: string;
  imageURL
 proinfo:pro[];
 private todo : FormGroup;
 isEdit:boolean=false;
 latitude: number;
 longitude: number;
 cliprodet:any = [];
 error: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loadingCtrl: LoadingController,public http: HttpClient,public _DomSanitizer: DomSanitizer,public storage :Storage,
  public global:GlobalPage,private formBuilder: FormBuilder,private geolocation: Geolocation,public alertCtrl: AlertController,private camera:Camera) {
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
  
 
    this.proinfo=[{
      img:"assets/imgs/profile5.jpg",
      name:"Tom Moscow",
      care:"Bathing,Grooming,Eating",
    }];
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ReprofilePage');

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();  
    let url = "api/Profilesetup/clieprofile?";
    let myParams = new URLSearchParams();
    myParams.append("clientNumber", this.global.clientId.toString());
    this.http.get(url + myParams).subscribe(
      (data: any) => {
        console.log(data);
        this.cliprodet = data;
       
        loading.dismiss();
      },
      err => {
        console.log(err);
       loading.dismiss();
      });
  }
  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.global.galleryPhoto = this.base64Image;
     this.UpdateImage(this.base64Image);
    // this.editedProfile(this.global.galleryPhoto);
    }, (err) => {
      console.log(err);
    });
  }
  getphoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.global.galleryPhoto = this.base64Image;
      this.UpdateImageStorage(this.base64Image);
     this.UpdateImage(this.base64Image);
    //  this.editedProfile(this.global.galleryPhoto);
    }, (err) => {
      console.log(err);
    });
  }
  openCamera() {
    const confirm = this.alertCtrl.create({
      title: 'Choose Image Source',
      buttons: [
        {
          text: 'Camera',
          handler: () => {
            this.takePhoto();
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Open Gallery',
          handler: () => {
            this.getphoto();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  UpdateImageStorage(ImageData) {
    this.storage.get("loginAuth").then((val)=>{
      val.userdetail.galleryPhoto = ImageData;
      this.storage.set("loginAuth",val);
    });

  }


  UpdateImage(ImageStr) {
    console.log(ImageStr);
    
    let loading = this.loadingCtrl.create({
      content: 'Image updating please wait...'
    });
    var requestData = [];
    loading.present();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let url = 'api/CgupCmgApt/editClientImage';
    let profile = JSON.stringify({
      'ClientNumber': this.global.clientId,
      'ImageStr': ImageStr.toString(),
    });
    requestData.push(profile);
    console.log(profile);

    
    // let myParams = new URLSearchParams();
    // myParams.append("employeeId", this.global.employeeId.toString());
    // myParams.append("ImageStr", Imagestr.toString());
    this.http.post(url,profile, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
        this.global.galleryPhoto = ImageStr;
        console.log(ImageStr);
        this.UpdateImageStorage(ImageStr);
        // this.storage.set("loginAuth",this.global);
        loading.dismiss();

      },
      err => {
        this.error = err;
        console.log(err);
        loading.dismiss();
      });

  }
  
  getloc(){
    this.geolocation
    .getCurrentPosition({ timeout: 5000 })
    .then(resp => {
      console.log("latitude and longitude");

      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    })
  }
  getlocation() {
    return this.geolocation
      .getCurrentPosition({ timeout: 5000 })
      .then(resp => {
        console.log("latitude and longitude");

        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.cliprodet.latitude = resp.coords.latitude;
        this.cliprodet.longitude = resp.coords.longitude;
        
        // let options: NativeGeocoderOptions = {
        //   useLocale: true,
        //   maxResults: 5
        // };
      }) .catch(error => {
          this.latitude = null;
          this.longitude = null;
          console.log("Error getting location", error);
        });
      }
  
  location() {
    this.getlocation().then(data => {
      console.log(data)
      // this.cliprodet.latitude= 
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      let url = "api/Profilesetup/clientupdateloc?";
      let myParams = new URLSearchParams();
      myParams.append("clientId", this.cliprodet.clientNumber.toString())
      myParams.append("latitude", this.cliprodet.latitude)
      myParams.append("longitudes", this.cliprodet.longitude)
     
      this.http.get(url + myParams).subscribe(
        (data: any) => {
          console.log(data);
          //this.cliprodet = data;
  
          loading.dismiss();
        },
        err => {
          console.log(err);
          loading.dismiss();
        }); 
       console.log(this.latitude);
       console.log(this.longitude);
    })
  }
  edit(){
    this.isEdit=true;
    
  }
  save(){
    this.isEdit=false;
  }
  completedtc:any = [];


  onSubmit(datavalue) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.completedtc = JSON.stringify(datavalue);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    // let url = "api/OutcomeEntries/addoutcomedetail";
    // let url = "api/Cgtimesheets/rwandcomplete";
    let url = 'api/Profilesetup/clientprofileedit';
    this.http.post(url, this.completedtc, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
      
    const alert = this.alertCtrl.create({
            title: "Changes Updated",
            message: "Your changes has been updated successfully.",
            // cssClass: "buttonCss5",
      
            buttons: [
              {
                text: "Ok",
                handler: data => {
                  console.log("ok clicked");
                  loading.dismiss();
                  this.isEdit=false;
                }
              }
            ]
          });
          alert.present();
        
        // alert("success");
        
      },
      err => {
      //  alert("error");
        console.log(err);
        loading.dismiss();
      });
  }
  cancel(){
    // this.todo.reset();
    // this.isEdit=false;
    this.navCtrl.pop();
  }
  back(){
    this.navCtrl.pop();
  }
  logForm(){
    console.log(this.todo.value)
  }
}
export class pro{
  img:any;
  name:String;
  care:String;

}
// export class FormsPage {
//   todo = {}
//   logForm() {
//     console.log(this.todo)
//   }}
