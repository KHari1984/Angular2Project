import {Component} from 'angular2/core';

@Component({
    selector:'nav-comp',
    templateUrl:'app/nav/nav.tpl.html',
    styleUrls:['app/nav/nav.css']
})
export class NavComponent {
    navItems = ['Home', 'About', 'Contact', 'Login'];
}