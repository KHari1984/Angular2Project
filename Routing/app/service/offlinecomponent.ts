import {Component} from 'angular2/core';

@Component({
    selector: 'offline-comp',
    template: `
    <h1>{{title}}</h1>
    
    `    
})
export class OfflineComponent {
    title: string;
   
    uname:string;
    utype:string;
    constructor() {
        this.title = "Welcome To Offline Training!!";
       
    }
}