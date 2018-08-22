import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuerydetailsComponent } from './querydetails/querydetails.component';
import {LoginComponent} from './login/login.component';
//import { CardloginComponent } from './cardlogin/cardlogin.component';

const routes: Routes = [
    
    {path:'',component:LoginComponent},
    {path:'querydetails', component: QuerydetailsComponent}

     ]

@NgModule({
      imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
          