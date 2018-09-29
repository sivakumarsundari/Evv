import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddentriesPage } from './addentries';

@NgModule({
  declarations: [
    AddentriesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddentriesPage),
  ],
})
export class AddentriesPageModule {}
