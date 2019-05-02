import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegemployeePage } from './regemployee';

@NgModule({
  declarations: [
    RegemployeePage,
  ],
  imports: [
    IonicPageModule.forChild(RegemployeePage),
  ],
})
export class RegemployeePageModule {}
