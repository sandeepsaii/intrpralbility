import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, NO_ERRORS_SCHEMA,ModuleWithProviders } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { QuerydetailsComponent } from './querydetails/querydetails.component';
import { FormsModule, ReactiveFormsModule, FormControlDirective } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ServicesService } from './services.service';
import { CardloginComponent } from './cardlogin/cardlogin.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import {SharedService} from './shared.service'


@NgModule({
  declarations: [
    AppComponent,
    QuerydetailsComponent, 
    LoginComponent,
    CardloginComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
     NgbModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ServicesService, DataService,SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
