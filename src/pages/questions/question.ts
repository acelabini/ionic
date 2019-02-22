import { Component } from '@angular/core';
import {RestProvider} from "../../providers/rest/rest";
import {NavController} from "ionic-angular";
import {Observable} from "rxjs";

@Component({
    selector: 'question',
    templateUrl: 'question.html'
})

export class SurveyQuestions {

    Questions = [];
    page: number;

    constructor(public navCtrl: NavController, public restService: RestProvider) {
        this.getSurvey(1);
    }

    public getSurvey(page) {
        return this.restService.getNextSurvey(page).
        then(results => {
            for (let res of results.data) {
                this.Questions.push(res);
            }
        });
    }

    allSurvey() {
        return this.restService.getAllSurvey().
        then(results => {
            for (let res of results.data) {
                this.Questions.push(res);
            }
        });
        // subscribe(
        //     (res) => {
        //         let posts = res.data;
        //         for (let post of posts) {
        //             console.log(post);
        //             this.Questions.push(post);
        //         }
        //     },
        //     (err) => {
        //         console.log(err);
        //     },
        //     () => console.log('done!')
        // );
    }


    doInfinite(infiniteScroll) {
        // console.log('done!');
        // let nextPageUrl = this.pagenation++;
        // console.log("next page:" + nextPageUrl);
        // this.restService.getAllSurvey(nextPageUrl).subscribe(
        //     data => {
        //         let posts = data.data;
        //         for (let post of posts) {
        //             console.log(post);
        //             this.Questions.push(post);
        //         }
        //     },
        //     err => {
        //         console.log(err);
        //     },
        //     () => console.log('Next Page Loading completed')
        // );
        // infiniteScroll.complete();
    }
}
