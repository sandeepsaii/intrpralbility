import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from "./environments/environment";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';


/**
 * rest api queries
 */
@Injectable()
export class DataService<Type> {
    private resolveSuffix: string = '?resolve=true';
    private actionUrl: string;
    private options: object;
    private headers: HttpHeaders;

    /**
     *
     * @param {HttpClient} httpClient
     */
    constructor(private httpClient: HttpClient) {
        this.actionUrl = environment.ServerWithApiUrl;
        this.headers = new HttpHeaders();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.options = {
            headers: this.headers,
            withCredentials: true
        };
    }

    /**
     *
     * @return {Promise<Object>}
     */
    checkUserWallet() {
        return this.httpClient.get('http://localhost:3000/api/wallet', this.options).toPromise()
    }


    /**
     * import card to rest server
     *
     * @param file
     * @return {Promise<Object>}
     */
    importCard(file) {
        const formData = new FormData();
        formData.append('card', file);
        this.headers.set('Content-Type', 'multipart/form-data');
        return this.httpClient.post('http://localhost:3000/api/wallet/import', formData, this.options).toPromise();
    }

     /**
     *
     * @return {Promise<Object>}
     */
    getCurrentUser() {
        return this.httpClient.get('http://localhost:3000/api/system/ping', this.options).toPromise()
            .then((data) => {
                return data['participant'];
            })
            .then((participant) => {
               let email = participant.substr(participant.lastIndexOf('#') + 1);
                return this.httpClient.get('http://localhost:3000/api/hie/'+email, this.options).toPromise()
            
            });
    }

}