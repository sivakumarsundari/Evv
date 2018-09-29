import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { GlobalPage } from '../../pages/global/global';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider implements HttpInterceptor {
  // url:string ="http://192.168.101.11/";
   url: string = "http://localhost:21116/";
  // url: string = "http://evv.cashesoftware.us:8002/"
  // url:string ="/WebAPI/"; 
// url:string ="";
// url:string ="http://demo10.sbnatech.in:90/";
// UserID:string="eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJKdWxpZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdXNlcmRhdGEiOiI0IiwibmJmIjoxNTMxMTE2MjAwLCJleHAiOjE1MzExMTk4MDAsImlhdCI6MTUzMTExNjIwMH0.Ii3b9dQHf9Nko9lipBlM-odr-kdRmL65DWvHl1oy5GE5vFtEv7z9P1BdSsv7Xj5v7I1fuM3qLMEu7FIl1-6Gag";
//  url:string ="http://192.168.101.11:90/WebAPI/";
//  UserID:string = this.global.token;
public navCtrl: NavController;
jwtHelper: JwtHelper = new JwtHelper();
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // if(this.auth.UserID!=null||this.auth.UserID==''){
    console.log("auth page data")
    // console.log( this.UserID)
  request = request.clone({
    url: this.url + request.url,
    setHeaders: {
      Authorization: `Bearer ${this.global.token}`
    }
  })
  return next.handle(request);
}

  constructor(public http: HttpClient ,public global :GlobalPage) {
    console.log('Hello AuthProvider Provider');
  }

}
