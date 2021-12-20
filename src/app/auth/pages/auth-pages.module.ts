import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AuthComponentsModule } from '../components/auth-components.module';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthComponentsModule,
    MaterialModule
  ]
})
export class AuthPagesModule { }
