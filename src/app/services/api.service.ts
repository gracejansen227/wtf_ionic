import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

// TODO change this name to be more specific
export class ApiService {

    baseUrl = 'https://localhost:3000/api/';

    constructor(
        private http: HttpClient
    ) {};

    // Change name of this function and add funtion to do post
    getAllData(apiItem: String) : any {
        return this.http.get(this.baseUrl+apiItem, { responseType: 'json'});
    }
    
}