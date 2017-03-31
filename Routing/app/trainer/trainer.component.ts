import {Component} from 'angular2/core';
@Component({
    selector: 'trainer-comp',
    template: `
    <h1>{{title}}</h1>
    <h3>{{header}}</h3>
    `    
})
export class TrainerComponent {
    title: string;
    header: string;
    constructor() {
        this.title = "Welcome To trainer Component !!";
        this.header = "this is trainer component";
    }
}