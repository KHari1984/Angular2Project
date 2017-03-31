import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';
@Component({
    selector: 'course-comp',
    template: `
    <h1>{{title}}</h1>
   
    <strong> Course Name : {{course}}</strong>
    <br>
     <strong> Course Duration: {{duration}} </strong>
    `    
})
export class CourseComponent {
    title: string;

    course: string;
    duration:string;
    constructor(routeParams:RouteParams) {
        this.title = "Welcome To course Component !!";
       
        this.course=routeParams.get("cname");
        this.duration=routeParams.get("duration");
    }
}