import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPagesModule } from './pages/dashboard-pages.module';
import { DashboardComponent } from './dashboard.component';
import { StatusTravelPipe } from './pipes/status-travel.pipe';



@NgModule({
  declarations: [ DashboardComponent, StatusTravelPipe
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardPagesModule
  ],
  exports:[DashboardPagesModule]
})
export class DashboardModule { }
