import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AuthComponentsModule } from '../components/auth-components.module';



@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthComponentsModule
  ]
})
export class AuthPagesModule { }
