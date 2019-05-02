import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegclientPage } from './regclient';

@NgModule({
  declarations: [
    RegclientPage,
  ],
  imports: [
    IonicPageModule.forChild(RegclientPage),
  ],
})
export class RegclientPageModule {}
