import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl: string = 'https://lvh.me/api-test';
  questions: any;
  nextQuestion: object;

  constructor(public http: HttpClient) {
  }

  public getAllSurvey(){
      this.questions = new Promise(resolve => {
          this.http.get(this.apiUrl).subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
      return this.questions;
  }

  public getNextSurvey(page){
      this.nextQuestion = new Promise(resolve => {
          this.http.get(`${this.apiUrl}/${page}`).subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
      return this.nextQuestion;
  }
}
