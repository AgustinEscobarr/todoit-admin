import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TravelHistoryComponent } from './pages/travel-history/travel-history.component';
import { TravelsComponent } from './pages/travels/travels.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', 
  component: DashboardComponent,
  children:[
    {
    path:'history',
    component:TravelHistoryComponent
    },
    {
      path:'travels',
      component: TravelsComponent
    },
    {
      path:'register',
      component:RegisterComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
