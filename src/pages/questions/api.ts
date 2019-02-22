import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";

@Injectable()
export class api {

    allNewsResponse: any;
    apiURL: string = 'https://lvh.me/api-test';

    constructor(private http: HttpClient) {}

    public getAllSurvey(nextPageUrl){
        this.allNewsResponse = this.http.get(this.apiURL+'?page='+nextPageUrl, {responseType: 'json'});
        return this.allNewsResponse;
    }

}
