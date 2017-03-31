import {Component} from 'angular2/core';

@Component({
    selector: 'online-comp',
    template: `
    <h1>{{title}}</h1>
    
    `    
})
export class OnlineComponent {
    title: string;
   
    uname:string;
    utype:string;
    constructor() {
        this.title = "Welcome To Online Training !!";
       
    }
}