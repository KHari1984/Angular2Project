import {Component} from 'angular2/core';

@Component({
    selector: 'app-comp',
    templateUrl: 'app/app.tpl.html'
})
export class AppComponent {
    title: string;
    header: string;
    course = {};
    courseNames = ['Anguar 1', 'Anguar 2', 'Anguar 3', 'Anguar 4', 'Anguar 5', 'Anguar 6', 'Anguar 7'];
    courses = [
        {
            id: 1,
            name: "Angular 2",
            duration: "24hr",
            cost: 250
        },
        {
            id: 2,
            name: "Angular 1",
            duration: "20hr",
            cost: 350
        },
        {
            id: 3,
            name: "Bootstrap",
            duration: "14hr",
            cost: 200
        },
        {
            id: 4,
            name: "Gulp",
            duration: "40hr",
            cost: 500
        },
        {
            id: 5,
            name: "Node",
            duration: "20hr",
            cost: 550
        },
    ]
    constructor() {
        this.title = "Welcome TO Edureka !!";
        this.header = "we are learning beta version of angular 2, but in next session we will start with final release";
        this.course = {
            id: 0,
            name: "Angular 2",
            duration: "24hr",
            cost: 250
        };
    }
    clickme(name){
        alert('hi '+name+ ' you have clicked me !!');
    }
    getCourseByID(courseObj){
        alert(courseObj.name +' is the course that you have opted for !! congrats');
    }
}