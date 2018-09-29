import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CgdashboardPage } from './cgdashboard';
// import { MinuteSecondsPipe } from '../../pipes/minute-seconds/minute-seconds';
// import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CgdashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(CgdashboardPage),
    
   
  ],
})
export class CgdashboardPageModule {}
