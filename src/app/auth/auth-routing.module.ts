import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NoLoginGuard } from '../guards/no-login.guard';

const routes: Routes = [
  { path: '',
   component: AuthComponent,
   canActivate:[NoLoginGuard],
   children:[
     {
       path:'',
       component:LogInComponent
     }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
