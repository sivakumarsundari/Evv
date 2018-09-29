import { SignaturePadModule } from 'angular2-signaturepad';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResignatureverificationPage } from './resignatureverification';

@NgModule({
  declarations: [
    ResignatureverificationPage,
  ],
  imports: [
    IonicPageModule.forChild(ResignatureverificationPage),
    SignaturePadModule,
  ],
})
export class ResignatureverificationPageModule {}
