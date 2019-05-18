import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeedetailsPage } from './employeedetails';

@NgModule({
  declarations: [
    EmployeedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeedetailsPage),
  ],
})
export class EmployeedetailsPageModule {}
