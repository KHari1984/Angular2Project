import {Component} from 'angular2/core';

@Component({
    selector: 'sidebar-comp',
    templateUrl: 'app/sidebar/sidebar.tpl.html',
    styleUrls: ['app/sidebar/sidebar.css']
})
export class SidebarComponent {
    sidebarItems = ['Angular 1', 'Angular 2', 'Bootstrap', 'Gulp', 'Node', 'Grunt', 'Knockout'];
}