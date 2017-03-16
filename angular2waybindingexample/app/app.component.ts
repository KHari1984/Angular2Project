import {Component} from 'angular2/core';

@Component({
    selector: 'app-comp',
    templateUrl: 'app/app.tpl.html'
})
export class AppComponent {
    title: string;
    header: string;
    name:string="krishna";
    user={};
    fellingWell:boolean=true;
    ageRange:string="under 18";

    constructor() {
        this.title = "Learning Angular2 2 way binding";
        this.header = " Session 3 Practical";
        
    }
    login()
    {
        alert('hello '+this.name+',your password is:'+this.user.uname+'your password is:'+this.user.pwd);
    }
    
}