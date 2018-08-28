import { Validators, FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ServicesService } from '../services.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from './model';
import {DataService} from '../data.service';



@Component({
 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public isUserAuthenticated = false;
  public isUserLoggedIn = false;
  public authenticationUrl;
  public loginInProgress = false;
  public isLoading = false;
  private errorMessage;

  @ViewChild('card') card: ElementRef;


  model: any = {};
  loading = false;
  todaytime=new Date();

  returnUrl: string;
  simpleForm: FormGroup;
  	 registerForm: FormGroup;
	newUser = false;
  constructor(private fb: FormBuilder,private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: ServicesService,private httpClient: HttpClient,private dataService: DataService<any>) {
      this.authenticationUrl = this.sanitizer.bypassSecurityTrustUrl('http://localhost:3000/auth/google');
    }

    ngOnInit(){
      
    if (localStorage.getItem('data')) {
      localStorage.removeItem('data');
  }
  this.route.queryParams.subscribe((queryParams) => {
    if (queryParams['iul']) {
        this.isUserAuthenticated = true;
    }
  })

  this.route.queryParams.subscribe((queryParams) => {
      if (queryParams['authenticated']) {
          this.isUserAuthenticated = true;
      return this.router.navigate(['/login'],{queryParams:{iul:"true"}})
              .then(() => {
                alert('user wallet')

                  return this.checkUserWallet();
              }).catch((error) => {
                  this.handleError(error);
              });
      }
  })
    
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
    
  }

    

  toggleSignPage() {
  	this.newUser = !this.newUser;
  }



   /**
     *
     * @param event
     */
    importCard(event) {
      this.loginInProgress = true;
      let fileList: FileList = event.target.elements[0].files;
      if (fileList.length > 0) {
          let file: File = fileList[0];
          let fileExtension = file.name.substr(file.name.lastIndexOf('.') + 1);
          if (fileExtension === 'card') {
              this.dataService.importCard(file)
                  .then(() => {
                      this.isLoading = true;
                      return this.getCurrentUser()
                          .then(() => {
                              this.isUserLoggedIn = true;
                             this.goToHome();
                              this.isLoading = false;
                          })
                          .catch((error) => {
                              this.handleError(error);
                          });
                  })
                  .then(() => {
                      this.loginInProgress = false;
                  })
                  .catch((error) => {
                      this.handleError(error);
                  });
          } else {
              this.loginInProgress = false;
              this.errorMessage = 'Bitte laden Sie eine gültige Datei hoch. Format: (.card)';
          }

      } else {
          this.loginInProgress = false;
          this.errorMessage = 'Bitte laden Sie eine card hoch. Format: (.card)';
      }
  }


    /**
     *
     * @return {Promise<void>}
     */
    checkUserWallet() {
      return this.dataService.checkUserWallet()
          .then((results) => {
              if (results['length'] > 0) {
                  this.isLoading = true;
                  alert("i am from checkwallet")
                  return this.getCurrentUser()
                      .then(() => {
                          this.isUserLoggedIn = true;
                         this.goToHome();
                          this.isLoading = false;
                      })
                      .catch((error) => {
                          this.handleError(error);
                      });
              }
          })
  }

  goToHome() {
    let event = new MouseEvent('click', {bubbles: true});
    this.card.nativeElement.dispatchEvent(event);
}


    /**
     *
     * @return {Promise<void>}
     */
    getCurrentUser() {
        alert("iam from get current user")
      return this.dataService.getCurrentUser()
           .then((user) => {
               console.log(user)
               alert(user)

              let data = {
                  user: user
              };
              localStorage.setItem('data', JSON.stringify(data));
          });
  }
   


  
  showLoginInProgress() {
    this.loginInProgress = true;   
}

  register(){
  	console.log(this.registerForm.value);
  }

  /**
     *
     * @param error
     */
    handleError(error: any): any {
      this.errorMessage = 'your id is not authenticated please re-check and confirm';
      console.log(error);
  }


}
