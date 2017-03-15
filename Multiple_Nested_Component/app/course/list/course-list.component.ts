import {Component, Input} from 'angular2/core';
@Component({
    selector: 'course-list',
    templateUrl: 'app/course/list/course-list.tpl.html',
    styleUrls:['app/course/list/course-list.css']
})
export class CourseListComponent {
    @Input() courseItems;
}