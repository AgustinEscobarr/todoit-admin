import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MaterialModule } from 'src/app/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ChangeTravelComponent } from './dialogs/change-travel/change-travel.component';




@NgModule({
  declarations: [
    TableComponent,
    SideNavComponent,
    HeaderComponent,
    ChangeTravelComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[TableComponent,SideNavComponent,HeaderComponent]
})
export class DashboardComponentsModule { }
