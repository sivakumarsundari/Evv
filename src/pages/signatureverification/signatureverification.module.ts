import { SignaturePadModule } from 'angular2-signaturepad';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignatureverificationPage } from './signatureverification';

@NgModule({
  declarations: [
    SignatureverificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SignatureverificationPage),
    SignaturePadModule,
  ],
})
export class SignatureverificationPageModule {}
