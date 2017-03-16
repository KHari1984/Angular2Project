import {Component} from 'angular2/core';

@Component({
    selector: 'sidebar-comp',
    templateUrl: 'app/sidebar/sidebar.tpl.html',
    styleUrls: ['app/sidebar/sidebar.css']
})
export class SidebarComponent {
    sidebarItems = ['Project 1', 'Project 2', 'Project 3','Project 4'];
}