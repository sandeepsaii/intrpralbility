import { Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from './model';


@Component({
 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  model: any = {};
  loading = false;
  todaytime=new Date();

  returnUrl: string;
  simpleForm: FormGroup;
  OrganizationID;
	 registerForm: FormGroup;
	newUser = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: ServicesService) {}

    ngOnInit(){
      this.simpleForm = this.fb.group({
      simpleFormEmailEx: ['', [Validators.required, Validators.email]],
      simpleFormPasswordEx: ['',Validators.required],
    });
    this.registerForm = this.fb.group({
      $class:"orgparticipant.Addparticipant",
       user: this.fb.group({
        $class: "orgparticipant.hie",
      OrganisationID: ['', Validators.required],
      OrganisationName: ['', Validators.required],
      OrganisationCode: ['', Validators.required],
      OrganisationType: ['', Validators.required],
      OrganisationCounty: ['', Validators.required],
      OrganisationCountry:['', Validators.required],
      ParentOrganisationID: ['', Validators.required],
      ContactPerson: ['', Validators.required],
      AddressLine1:['', Validators.required],
      AddressLine2:['', Validators.required],
      CityName:['', Validators.required],
      StateCode:['', Validators.required],
      ZipCode:['', Validators.required],
      ContactPhone:['', Validators.required],
      EmailID:['', Validators.required],
      Fax:['', Validators.required],
      WebsiteURL:['',Validators.required],
      TIN:['', Validators.required],
      CCN:['', Validators.required],
      SSN:['', Validators.required],
      NPI:['', Validators.required],
      EIN:['', Validators.required],
      IsInternal:['', Validators.required],
      IsActive:['', Validators.required],
      CreatedDate:this.todaytime,
      ModifiedDate: this.todaytime,
      ProviderCommercialNumber:['', Validators.required],
      LocationNumber:['', Validators.required],
      NCPDPNumber:['', Validators.required],
      OtherIdentifier:['', Validators.required],
      ProviderUPINNumber:['', Validators.required],
      StateLicenseNumber:['', Validators.required]
    }),
    });
    console.log(this.registerForm.value);
  }

//ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   // }

     //get f() { return this.simpleForm.controls; }
    isLoggedIn() {
      console.log(this.simpleForm.controls.value)
        //this.loading = true;
        //this.authenticationService.isLoggedIn(this.model.username, this.model.password)
            //.subscribe(
              //  data => {
                //    this.router.navigate([this.returnUrl]);
                //},
                //error => {
                  //
                    //this.loading = false;
                //});
    }
    

  toggleSignPage() {
  	this.newUser = !this.newUser;
  }

  register(){
  	
    //this.router.navigateByUrl('querydetails');

  	console.log(this.registerForm.value);
  }


}
