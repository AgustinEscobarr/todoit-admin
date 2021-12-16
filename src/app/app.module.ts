import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { StatusTravelPipe } from './dashboard/pipes/status-travel.pipe';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [StatusTravelPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
