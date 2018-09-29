import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { GlobalPage } from '../global/global';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Storage } from '@ionic/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
// import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CgprofilenewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cgprofilenew',
  templateUrl: 'cgprofilenew.html',
})
export class CgprofilenewPage {
  private profile: FormGroup;
  editt: boolean = false;
  proinfo: pro[];
  cliprodet: any = [];
  latitude: number;
  longitude: number;
  base64Image: string;
  error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
    public http: HttpClient, public global: GlobalPage, private formBuilder: FormBuilder, public alertCtrl: AlertController,
    private geolocation: Geolocation, private camera: Camera,public _DomSanitizer: DomSanitizer, public nativeGeocoder: NativeGeocoder,public storage :Storage) {
    this.profile = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      street1: [''],
      street2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      mobileNo: ['', Validators.required],
      emailId: ['', Validators.required],
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

  ionViewDidLoad() {

    console.log('ionViewDidLoad ReprofilePage');

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    let url = "api/Profilesetup/empprofile?";
    let myParams = new URLSearchParams();
    myParams.append("employeeId", this.global.employeeId.toString());
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
  back() {
    this.navCtrl.pop();
  }
  cancel() {
    this.navCtrl.pop();
  }
  onSubmit123(datavalue) {
    //console.log(this.profile.value)
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    // var requestData = [];
    loading.present();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    let url = 'api/Profilesetup/empprofileedit';
    // var profile = {
    //   'employeeId': this.global.employeeId,
    // }
    // requestData.push(profile);

    this.http.post(url, httpOptions).subscribe(
      (data: any) => {
        console.log(data);
        // this.cliprodet = data;
        this.editt = true;
        loading.dismiss();
      }
      ,
      err => {
        console.log(err);
        loading.dismiss();
      });
 
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
    let url = 'api/Profilesetup/empprofileeditdetail';
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
        this.editt=false;
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
  // onSubmit = function (user) {
  //   console.log(user);

  //   var body = "firstname=" + user.firstname;
  //   this.http.post("api/Profilesetup/empprofile?", body).subscribe((data) => {});

  // }

  getlocation() {
    return this.geolocation
      .getCurrentPosition({ timeout: 5000 })
      .then(resp => {
        console.log("latitude and longitude");

        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.cliprodet.latitude = resp.coords.latitude;
        this.cliprodet.longitude = resp.coords.longitude;
        
        let options: NativeGeocoderOptions = {
          useLocale: true,
          maxResults: 5
        };
      }) .catch(error => {
          this.latitude = null;
          this.longitude = null;
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
  }
  edit() {
    this.editt = true;
  }
  location() {
    this.getlocation().then(data => {
      console.log(data)
      // this.cliprodet.latitude= 
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      let url = "api/Profilesetup/empupdateloc?";
      let myParams = new URLSearchParams();
      myParams.append("employeeId", this.global.employeeId.toString())
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
  edittedProfile:any=[];
  editedProfile(photoval){
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    this.edittedProfile = JSON.stringify(photoval);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "my-auth-token"
      })
    };
    // let url = "api/OutcomeEntries/addoutcomedetail";
    // let url = "api/Cgtimesheets/rwandcomplete";
    let url = 'api/Profilesetup/empprofilpic';
    this.http.post(url, this.edittedProfile, httpOptions).subscribe(
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
        // this.editt=false;
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
    let url = 'api/CgupCmgApt/editEmployeeImage';
    let profile = JSON.stringify({
      'employeeId': this.global.employeeId,
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

}
export class pro {
  img: any;
  name: String;
  care: String;

}
