import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeclientPage } from './homeclient';

@NgModule({
  declarations: [
    HomeclientPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeclientPage),
  ],
})
export class HomeclientPageModule {}
