import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewclientsPage } from './viewclients';

@NgModule({
  declarations: [
    ViewclientsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewclientsPage),
  ],
})
export class ViewclientsPageModule {}
