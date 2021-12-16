import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TravelHistoryComponent } from './pages/travel-history/travel-history.component';
import { TravelsComponent } from './pages/travels/travels.component';

const routes: Routes = [
  { path: '', 
  component: DashboardComponent,
  children:[
    {
    path:'history',
    component:TravelHistoryComponent
    },
    {
      path:'',
      component: TravelsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
