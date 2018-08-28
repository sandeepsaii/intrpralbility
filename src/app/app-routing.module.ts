import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuerydetailsComponent } from './querydetails/querydetails.component';
import {LoginComponent} from './login/login.component';
import { CardloginComponent } from './cardlogin/cardlogin.component';
import {LoginGuard} from "./login/logingaurd";

const routes: Routes = [
    
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'card',component:CardloginComponent },
    {path:'querydetails', component: QuerydetailsComponent}

     ]

@NgModule({
      imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
          