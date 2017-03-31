import {Component} from 'angular2/core';
import {RouteData} from 'angular2/router'
@Component({
    selector: 'home-comp',
    template: `
    <h1>{{title}}</h1>
    <h3>{{header}}</h3>
    <strong> User Name : {{name}}</strong>
    <br>
     <strong> User Type: {{isAdmin}} </strong>
    `    
})
export class HomeComponent {
    title: string;
    header: string;
    isAdmin:boolean;
    name:string;
    constructor(routedata:RouteData) {
        this.title = "Welcome Krishna's Project!!";
        this.header = "This is Home :)";
        this.isAdmin=routedata.get("isAdmin");
        this.name=routedata.get("unam");
    }
}