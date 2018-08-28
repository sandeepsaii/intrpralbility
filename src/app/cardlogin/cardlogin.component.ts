import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";


@Component({
    selector: 'app-cardlogin',
    templateUrl: './cardlogin.component.html',
    styleUrls: ['./cardlogin.component.scss'],
})
export class CardloginComponent implements OnInit {

    public currentUser;

    constructor(private sharedService: SharedService) {
    }

    ngOnInit() {
        this.sharedService.currentLoggedInUser.subscribe(user => this.currentUser = user);
        console.log(this.currentUser);
    }


}
