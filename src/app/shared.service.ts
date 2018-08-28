import {ElementRef, Injectable} from '@angular/core';
import * as Rx from "rxjs";

// Can be injected into a constructor
@Injectable()
export class SharedService {

    private loggedInUser = new Rx.BehaviorSubject<any>('');
    public currentLoggedInUser = this.loggedInUser.asObservable();

    private user = new Rx.BehaviorSubject<any>('');
    public currentUser = this.user.asObservable();



    
    /**
     *
     * @param currentLoggedInUser
     */
    passCurrentLoggedInUser(currentLoggedInUser) {
        return this.loggedInUser.next(currentLoggedInUser);
    }

    /**
     *
     * @param user
     */
    passUser(user) {
        return this.user.next(user);
    }

}
