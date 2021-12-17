import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import{MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';









@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule ,
    FormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule
    
  ],
  exports:[
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule ,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
