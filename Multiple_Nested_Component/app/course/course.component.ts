import {Component} from 'angular2/core';
import {CourseListComponent} from './list/course-list.component';
@Component({
    selector: 'course-comp',
    templateUrl: 'app/course/course.tpl.html',
    styleUrls: ['app/course/course.css'],
    directives:[CourseListComponent]
})
export class CourseComponent {
    cousres = [
        { id: 1, name: 'Angular1', cost: 250, duration: '24h' },
        { id: 2, name: 'Angular2', cost: 200, duration: '14h' },
        { id: 3, name: 'Node', cost: 150, duration: '20h' },
        { id: 4, name: 'Mean Stack', cost: 350, duration: '20h' },
        { id: 5, name: 'Gulp', cost: 450, duration: '22h' },
        { id: 6, name: 'Bootstrap', cost: 400, duration: '14h' },
        { id: 7, name: 'Jasmine', cost: 200, duration: '16h' },
        { id: 8, name: 'Karma', cost: 300, duration: '18h' },
        { id: 9, name: 'Grunt', cost: 350, duration: '14h' },
        { id: 10, name: 'Knockout', cost: 200, duration: '20h' },


    ];
}