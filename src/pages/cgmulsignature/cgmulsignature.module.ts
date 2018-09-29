import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CgmulsignaturePage } from './cgmulsignature';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    CgmulsignaturePage,
  ],
  imports: [
    IonicPageModule.forChild(CgmulsignaturePage),
    SignaturePadModule
  ],
})
export class CgmulsignaturePageModule {}
