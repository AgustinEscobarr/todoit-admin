import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MaterialModule } from 'src/app/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    TableComponent,
    SideNavComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[TableComponent,SideNavComponent,HeaderComponent]
})
export class DashboardComponentsModule { }
