import {Component} from 'angular2/core';

@Component({
    selector: 'app-comp',
    templateUrl: 'app/app.tpl.html'
})
export class AppComponent {
    title: string;
    header: string;
    name:string="Krishnambika";
    user={};
    constructor() {
        this.title = "Hello !!";
        this.header = "We are learning angular 2";
    
    };
    login()
    {
        alert('hello');
    }
    }    