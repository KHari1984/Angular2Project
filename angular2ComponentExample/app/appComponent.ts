import {Component} from 'angular2/core';

@Component({
    selector:'app-comp',
    template:`<h1>{{title}}</h1>
    <h2>{{header}}</h2>`
})
export class AppComponent{
    title:string;
    header:string;
    constructor()
    {
        this.title="Angular 2.0";
        this.header="Krishna Hari first angular Component Example";
    }
}