import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

    private userDetails:any;
 private headers: Headers;
constructor(private http:Http,private route: ActivatedRoute,private router: Router) { 
this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
}
 public setUser(user){
        this.userDetails = user;
    }
    public getUser(){
          return this.userDetails;
    }
    public isLoggedIn(){
        if(this.userDetails){
            return true;
        }
        else{
            return false;
        }
    }
    logout(){
        this.userDetails = null;
        this.router.navigate(['']);
    }
}




 
   /* login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
 
                return user;
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}*/
