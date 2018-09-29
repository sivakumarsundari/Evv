import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedashboardPage } from './redashboard';

@NgModule({
  declarations: [
    RedashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(RedashboardPage),
  ],
})
export class RedashboardPageModule {}
