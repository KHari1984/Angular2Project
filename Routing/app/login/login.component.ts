import {Component} from 'angular2/core';


@Component({
    selector: 'login-comp',
    templateUrl:'app/Login/login.tpl.html'
    
})
export class LoginComponent {
    title:string;
    header:string;
   
    constructor() {
        this.title = "Krishnambika Chandrasekharan";
        this.header = "Login nested";
        
    
    }
}