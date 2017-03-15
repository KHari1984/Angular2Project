import {Component} from 'angular2/core';

@Component({
    selector:'app-comp',
    templateUrl:'app/app.tpl.html'})
export class AppComponent{
    title:string;
    header:string;
    sports = {};
    tennisPlayers=['Nadal','Federer','Novak','Murray','Verdasco'];
    granSlam=[

    {
        Name:"Australian Open",
    Location:"Australia"
    },

    {
        Name:"French Open",
    Location:"Paris"
    },

    {
        Name:"wimbledon",
    Location:"London"
},
{
        Name:"US Open",
    Location:"NYC"
    }
    ]
    constructor()
    {
        this.title="Angular 2.0";
        this.header="Krishna Hari First Angular Component Example";
        this.sports={id:1,name:"tennis",players:2};
    }
    getGsById(gsObj)
    {
        alert("this event is in :" +gsObj.Location);
    }
    Clickme(nam)
    {
        alert("hello "+nam);
    }
}
