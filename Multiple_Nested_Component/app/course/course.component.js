System.register(['angular2/core', './list/course-list.component'], function(exports_1, context_1) {
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
    var core_1, course_list_component_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_list_component_1_1) {
                course_list_component_1 = course_list_component_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent() {
                    this.cousres = [
                        { id: 1, name: 'Angular1', cost: 250, duration: '24h' },
                        { id: 2, name: 'Angular2', cost: 200, duration: '14h' },
                        { id: 3, name: 'Node', cost: 150, duration: '20h' },
                        { id: 4, name: 'Mean Stack', cost: 350, duration: '20h' },
                        { id: 5, name: 'Gulp', cost: 450, duration: '22h' },
                        { id: 6, name: 'Bootstrap', cost: 400, duration: '14h' },
                        { id: 7, name: 'Jasmine', cost: 200, duration: '16h' },
                        { id: 8, name: 'Karma', cost: 300, duration: '18h' },
                        { id: 9, name: 'Grunt', cost: 350, duration: '14h' },
                        { id: 10, name: 'Knockout', cost: 200, duration: '20h' },
                    ];
                }
                CourseComponent = __decorate([
                    core_1.Component({
                        selector: 'course-comp',
                        templateUrl: 'app/course/course.tpl.html',
                        styleUrls: ['app/course/course.css'],
                        directives: [course_list_component_1.CourseListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
//# sourceMappingURL=course.component.js.map