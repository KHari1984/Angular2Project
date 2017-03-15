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
                    this.course = {};
                    this.courseNames = ['Anguar 1', 'Anguar 2', 'Anguar 3', 'Anguar 4', 'Anguar 5', 'Anguar 6', 'Anguar 7'];
                    this.courses = [
                        {
                            id: 1,
                            name: "Angular 2",
                            duration: "24hr",
                            cost: 250
                        },
                        {
                            id: 2,
                            name: "Angular 1",
                            duration: "20hr",
                            cost: 350
                        },
                        {
                            id: 3,
                            name: "Bootstrap",
                            duration: "14hr",
                            cost: 200
                        },
                        {
                            id: 4,
                            name: "Gulp",
                            duration: "40hr",
                            cost: 500
                        },
                        {
                            id: 5,
                            name: "Node",
                            duration: "20hr",
                            cost: 550
                        },
                    ];
                    this.title = "Welcome TO Edureka !!";
                    this.header = "we are learning beta version of angular 2, but in next session we will start with final release";
                    this.course = {
                        id: 0,
                        name: "Angular 2",
                        duration: "24hr",
                        cost: 250
                    };
                }
                AppComponent.prototype.clickme = function (name) {
                    alert('hi ' + name + ' you have clicked me !!');
                };
                AppComponent.prototype.getCourseByID = function (courseObj) {
                    alert(courseObj.name + ' is the course that you have opted for !! congrats');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-comp',
                        templateUrl: 'app/app.tpl.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map