import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MaterialModule } from 'src/app/material.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ChangeTravelComponent } from './dialogs/change-travel/change-travel.component';
import { EditUserComponent } from './dialogs/edit-user/edit-user.component';
import { MatInputModule } from '@angular/material/input';
import {  MatFormFieldModule } from "@angular/material/form-field";





@NgModule({
  declarations: [
    TableComponent,
    SideNavComponent,
    HeaderComponent,
    ChangeTravelComponent,
    EditUserComponent,
    
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    
  ],
  exports:[TableComponent,SideNavComponent,HeaderComponent, EditUserComponent]
})
export class DashboardComponentsModule { }
