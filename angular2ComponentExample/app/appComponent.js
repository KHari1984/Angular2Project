System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.sports = {};
                    this.tennisPlayers = ['Nadal', 'Federer', 'Novak', 'Murray', 'Verdasco'];
                    this.granSlam = [
                        {
                            Name: "Australian Open",
                            Location: "Australia"
                        },
                        {
                            Name: "French Open",
                            Location: "Paris"
                        },
                        {
                            Name: "wimbledon",
                            Location: "London"
                        },
                        {
                            Name: "US Open",
                            Location: "NYC"
                        }
                    ];
                    this.title = "Angular 2.0";
                    this.header = "Krishna Hari First Angular Component Example";
                    this.sports = { id: 1, name: "tennis", players: 2 };
                }
                AppComponent.prototype.getGsById = function (gsObj) {
                    alert("this event is in :" + gsObj.Location);
                };
                AppComponent.prototype.Clickme = function (nam) {
                    alert("hello " + nam);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-comp',
                        templateUrl: 'app/app.tpl.html' }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=appComponent.js.map