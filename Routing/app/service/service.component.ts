import {Component} from 'angular2/core';
import {OnlineComponent}from './onlinecomponent';
import {OfflineComponent} from './offlinecomponent';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';

@RouteConfig([
  {path: '/Online',component:OnlineComponent, name: 'Online',useAsDefault:true},
  {path: '/Offline', component: OfflineComponent, name: 'Offline' },
  ])

@Component({
    selector: 'service-comp',
    template: `
    <h1>{{title}}</h1>
    <h3>{{header}}</h3>
    <nav>
        <ul>
        <li><a [routerLink]="['Online']">Online</a></li>
        <li><a [routerLink]="['Offline']">Offline</a></li>
        </ul>
    </nav>
<div>
    <router-outlet>
           
    </router-outlet>
</div>`,
    directives:[ROUTER_DIRECTIVES]
})
export class serviceComponent {
    title: string;
    header: string;

    constructor() {
        this.title = "Krishnambika Chandrasekharan";
        this.header = "Service Component Nested Project";
    }
}