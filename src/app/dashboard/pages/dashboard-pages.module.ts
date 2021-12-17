import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponentsModule } from '../components/dashboard-components.module';
import { TravelHistoryComponent } from './travel-history/travel-history.component';
import { MaterialModule } from 'src/app/material.module';
import { TravelsComponent } from './travels/travels.component';
import { StatusTravelPipe } from '../pipes/status-travel.pipe';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [TravelHistoryComponent, TravelsComponent, RegisterComponent],
  imports: [
    CommonModule,
    DashboardComponentsModule,
    MaterialModule
  ],
  providers:[StatusTravelPipe]
  ,
  exports:[DashboardComponentsModule]
})
export class DashboardPagesModule { }
