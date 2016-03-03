/// <reference path="CircularBar.html" />
/// <reference path="CircularBar.html" />
/// <reference path="CircularBar.html" />
"use strict";

angular.module("overallTeamReport", ['angular-svg-round-progress', 'gridster', 'ngStorage']);

angular.module("overallTeamReport").directive("overallTeamReport", function ($localStorage) {
    return {
        restrict: 'E',
        scope:{
            max: '@',
            current: '@'
        },
        templateUrl: "overallTeamReport/overallTeamReport.html",
        link: function (scope, element, attrs) {
            scope.addNewWidget = function (widget)
            {
                var newWidget = angular.copy(widget);
               
                scope.widgets.push(newWidget);
            }

            scope.gridsterOpts = {
                columns: 24,
                margin: [20, 20],
                outerMargin: false,
                pushing: true,
                floating: true,
                swapping: false,
                //minSizeX: 4, // minimum column width of an item
               // maxSizeX: 4, // maximum column width of an item
               // minSizeY: 4, // minumum row height of an item
               // maxSizeY: 4, // maximum row height of an item
            };
            scope.widgetTitles = [];
            scope.widgetsDefinations = [
               
                {
                    title: "Team Analysis",
                    
                            sizeX: 4,
                            sizeY: 4,
                            row: 0,
                            col: 4,
                            template: "<wwa-temperature></wwa-temperature>"
                      
                },
                {
                    title: "Milestone Completed",
                   
                            sizeX: 8,
                            sizeY: 4,
                            row: 4,
                            col: 0,
                            template: "<ps-circularbar></ps-circularbar>"
                     
                },
                {
                    title: "Learning Compliance",
                   
                            sizeX: 8,
                            sizeY: 4,
                            row: 4,
                            col: 0,
                            template: "<ps-circularbar></ps-circularbar>"
                     
                },
                {
                    title: "Master Data",
                    
                            sizeX: 8,
                            sizeY: 4,
                            row: 4,
                            col: 0,
                            template: "<ps-circularbar></ps-circularbar>"
                      
                },
                {
                    title: "Today's Events",
                    
                            sizeX: 8,
                            sizeY: 4,
                            row: 4,
                            col: 0,
                            template: "<ps-circularbar></ps-circularbar>"
                      
                }
                



            ];
            //scope.widgets =  [
            scope.widgets =  [];

            scope.$watch('widgets', function () {
                $localStorage.widgets = scope.widgets;
            }, true);
        }
    }
});

angular.module("overallTeamReport").directive("psCircularbar", function () {
    return {
        templateUrl: 'WebSite6/overallteamReport/CircularBar.html'

    }
});