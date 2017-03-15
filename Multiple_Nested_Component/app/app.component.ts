import {Component} from 'angular2/core';
import {NavComponent} from './nav/nav.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {CourseComponent} from './course/course.component';

@Component({
    selector: 'app-comp',
    templateUrl: 'app/app.tpl.html',
    directives:[NavComponent,SidebarComponent,CourseComponent]
})
export class AppComponent {
    title: string;
    header: string;
    constructor() {
        this.title = "Welcome TO Edureka !!";
        this.header = "we are learning beta version of angular 2";    
    } 
    
}