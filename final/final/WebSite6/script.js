(function(){
    var app = angular.module("myAppp", ['angular-svg-round-progress', "gridster", "overallTeamReport", "ngStorage"]).controller('demoCtrl', ['$scope', '$interval', '$timeout', '$window', 'roundProgressService', ]);
    var ChartController = function ($scope) {
        $scope.data = [{
            id: 1,
            label: "Team 1",
            fillColor: "rgba(83, 26, 255,0)",
            strokeColor: "#0080FF",
            pointColor: "#0080FF",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#0080FF",
            values: [10, 20, 30, 40, 50, 60, 70, 80, 40, 50, 60, 90]
        },
            {
                id: 2,
                label: "Team 2",
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
            },
        {
            id: 3,
            label: "Team 3",
            fillColor: "rgba(17, 212, 180,0)",
            strokeColor: "rgb(17, 212, 180)",
            pointColor: "rgb(17, 212, 180)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgb(17, 212, 180)",
            values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
        },
        {
            id: 4,
            label: "Team 4",
            fillColor: "rgba(255, 77, 166,0)",
            strokeColor: "#ff4da6",
            pointColor: "#ff4da6",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#ff4da6",
            values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
        },
        {
            id: 5,
            label: "Team 5",
            fillColor: "rgba(255, 117, 26,0)",
            strokeColor: "#ff751a",
            pointColor: "#ff751a",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#ff751a",
            values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
        }
        ];

        var options = {
            responsive: true,
            maintainAspectRatio: true,
        }

        var filler = [];

        for (var i = 0; i < $scope.data.length; i++) {

            var fill = {
                id: $scope.data[i].id,
                label: $scope.data[i].label,
                fillColor: $scope.data[i].fillColor,
                strokeColor: $scope.data[i].strokeColor,
                pointColor: $scope.data[i].pointColor,
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: $scope.data[i].pointHighlightStroke,
                data: $scope.data[i].values
            };

            filler.push(fill);
        }
        var vald = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var d = 0;
        for (var i = 0; i < 12; i++) {
            d = 0;
            for (var j = 0; j < $scope.data.length; j++) {

                vald[i] = vald[i] + $scope.data[j].values[i];

            }
            vald[i] = vald[i] / $scope.data.length;

        }


        var avg = {
            id: $scope.data.length + 1,
            label: "Average",
            fillColor: "rgba(220,220,220,0.4)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: vald
        };
        filler.push(avg);

        $scope.filled = filler;
        var ctx = document.getElementById("c").getContext("2d");
        
        ctx.canvas.height = 100;
        ctx.canvas.width = 200;
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"],
            datasets: filler
        };


        var MyNewChart = new Chart(ctx).Line(data, options);

    };
    var teamCtrl = function ($scope, $interval, $timeout, $window, roundProgressService) {
        $scope.current = 90;
        $scope.max = 100;
        $scope.offset = 1;
        $scope.timerCurrent = 0;
        $scope.uploadCurrent = 0;
        $scope.stroke = 10;
        $scope.radius = 70;
        $scope.isSemi = false;
        $scope.rounded = false;
        $scope.responsive = false;
        $scope.clockwise = true;
        $scope.currentColor = '#2C3E50';
        $scope.bgColor = '#eaeaea';
        $scope.duration = 800;
        $scope.currentAnimation = 'easeOutCubic';
        $scope.animationDelay = 0;
        $scope.increment = function (amount) {
            $scope.current += (amount || 1);
        };

        $scope.animations = [];
        angular.forEach(roundProgressService.animations, function (value, key) {
            $scope.animations.push(key);
        });
        $scope.getStyle = function () {
            var transform = ($scope.isSemi ? '' : 'translateY(-150%) ') + 'translateX(-50%)';
            return {
                
                'top': $scope.isSemi ? 'auto' : '169px',
                'bottom': $scope.isSemi ? '5%' : 'auto',
                'left': '90px',
                'transform': transform,
                '-moz-transform': transform,
                '-webkit-transform': transform,
                'font-size': $scope.radius / 4 + 'px'
            };
        };
        $scope.getColor = function () {
            return $scope.currentColor;
        };
        $scope.showPreciseCurrent = function (amount) {
            $timeout(function () {
                if (amount <= 0) {
                    $scope.preciseCurrent = $scope.current;
                } else {
                    var math = $window.Math;
                    $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
                }
            });
        };
    };

    var data = [{ id: 1, name: "java fundamentals", track: "java", studentid: 528852, teamid: 2, status: "pending" },
    { id: 2, name: "dot net fundamentals", track: "web development", studentid: 528852, teamid: 1, status: "pending" },
    { id: 3, name: "c fundamentals", track: "programming", studentid: 528852, teamid: 3, status: "pending" },
    { id: 4, name: "c++ fundamentals", track: "programming", studentid: 528852, teamid: 2, status: "pending" },
    { id: 5, name: "php fundamentals", track: "web development", studentid: 528852, teamid: 4, status: "pending" },
    { id: 6, name: "c# fundamentals", track: "programming", studentid: 528852, teamid: 5, status: "pending" },
    { id: 7, name: "python fundamentals", track: "web development", studentid: 528852, teamid: 2, status: "pending" },
    { id: 8, name: "ruby fundamentals", track: "web development", studentid: 528852, teamid: 2, status: "pending" },
    { id: 9, name: "angular fundamentals", track: "web design", studentid: 528852, teamid: 1, status: "pending" },
    { id: 10, name: "javascript fundamentals", track: "programming", studentid: 528852, teamid: 1, status: "pending" },
    { id: 11, name: "css fundamentals", track: "web design", studentid: 528852, teamid: 5, status: "pending" },
    { id: 12, name: "html fundamentals", track: "web design", studentid: 528852, teamid: 4, status: "pending" },
    { id: 13, name: "nodejs fundamentals", track: "web development", studentid: 528852, teamid: 4, status: "pending" },
    { id: 14, name: "mvc fundamentals", track: "programming", studentid: 528852, teamid: 3, status: "pending" }];

    var tobeapproved = [];


    var mycontroll = function ($scope) {
        $scope.msg = "Hello World";
        $scope.course_data = data;
        $scope.checkboxvalue = "checked";




        $scope.myfunc = function (obj) {
            var dataValue = obj.target.attributes.data.nodeValue;
            flag = 0;
            for (var i = 0; i < tobeapproved.length; i++) {
                if (tobeapproved[i] == dataValue) {
                    flag = 1;
                }
            }

            if (flag == 1) {

                tobeapproved.pop(dataValue);
            }
            else {
                tobeapproved.push(dataValue);
            }
            
        };


        $scope.approve = function () {
            var flag = 0;
            for (var i = 0; i < tobeapproved.length; i++) {
                var pos = tobeapproved[i];
                if (data[pos - 1].status == "approved") {
                    flag = 1;
                }
                else {
                    data[pos - 1].status = "approved";
                }
               
            }

            if(flag==0)
            {
                tobeapproved = [];

            }
        };


        $scope.reject = function () {
            for (var i = 0; i < tobeapproved.length; i++) {
                var pos = tobeapproved[i];

                data[pos - 1].status = "rejected";
            }

            tobeapproved = [];
        };


    };

    var amlanChart=function ($scope) {
        $scope.data = [{
            id: 1,
            label: "Team 1",
            fillColor: "rgba(83, 26, 255,0)",
            strokeColor: "#531aff",
            pointColor: "#531aff",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#531aff",
            values: [10, 20, 30, 40, 50, 60, 70, 80, 40, 50, 60, 90]
        },
               {
                   id: 2,
                   label: "Team 2",
                   fillColor: "rgba(151,187,205,0)",
                   strokeColor: "rgba(151,187,205,1)",
                   pointColor: "rgba(151,187,205,1)",
                   pointStrokeColor: "#fff",
                   pointHighlightFill: "#fff",
                   pointHighlightStroke: "rgba(151,187,205,1)",
                   values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
               },
           {
               id: 3,
               label: "Team 3",
               fillColor: "rgba(17, 212, 180,0)",
               strokeColor: "rgb(17, 212, 180)",
               pointColor: "rgb(17, 212, 180)",
               pointStrokeColor: "#fff",
               pointHighlightFill: "#fff",
               pointHighlightStroke: "rgb(17, 212, 180)",
               values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
           },
           {
               id: 4,
               label: "Team 4",
               fillColor: "rgba(255, 77, 166,0)",
               strokeColor: "#ff4da6",
               pointColor: "#ff4da6",
               pointStrokeColor: "#fff",
               pointHighlightFill: "#fff",
               pointHighlightStroke: "#ff4da6",
               values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
           },
           {
               id: 5,
               label: "Team 5",
               fillColor: "rgba(255, 117, 26,0)",
               strokeColor: "#ff751a",
               pointColor: "#ff751a",
               pointStrokeColor: "#fff",
               pointHighlightFill: "#fff",
               pointHighlightStroke: "#ff751a",
               values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
           }];



        var options = {
            responsive: false,
            maintainAspectRatio: false,
        };




        var studentdata = [{
            id: 1,
            teamid: 1,
            label: "Student 1",
            values: [10, 40, 30, 50, 60, 60, 70, 40, 30, 20, 30, 20]
        },
                {
                    id: 2,
                    teamid: 2,
                    label: "Student 2",
                    values: [11, 26, 12, 4, 59, 60, 78, 56, 78, 98, 76, 45]
                },
                {
                    id: 3,
                    teamid: 1,
                    label: "Student 3",

                    values: [15, 28, 30, 89, 50, 64, 71, 56, 78, 90, 98, 97]
                },
            {
                id: 4,
                label: "Student 4",
                teamid: 2,
                values: [13, 52, 23, 74, 85, 76, 90, 78, 80, 84, 90, 67]
            },
            {
                id: 5,
                label: "Student 5",
                teamid: 1,
                values: [21, 22, 63, 34, 75, 60, 100, 34, 12, 45, 68, 89]
            }];

        $scope.studentid = 1;
        $scope.teamid = 1;
        var stud_data = [];
        for (var i = 0; i < studentdata.length; i++) {

            if ($scope.studentid == studentdata[i].id && $scope.teamid == studentdata[i].teamid) {
                var fill = {
                    id: studentdata[i].id,
                    label: studentdata[i].label,
                    fillColor: "rgba(255, 77, 166,0)",
                    strokeColor: "#ff4da6",
                    pointColor: "#ff4da6",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#ff4da6",
                    data: studentdata[i].values
                };

                stud_data.push(fill);

            }

        }
        var index = $scope.teamid - 1;

        var team_data = $scope.data[index].values;

        var idd = stud_data.length + 1;

        var team_avg = {
            id: idd,
            label: "Average",
            fillColor: "rgba(220,220,220,0.4)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: team_data
        };

        stud_data.push(team_avg);
        var data2 = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"],
            datasets: stud_data

        };

        var ctx1 = document.getElementById("c2").getContext("2d");
        ctx1.canvas.width = 300;
        ctx1.canvas.height = 200;
        var MyNewChart = new Chart(ctx1).Line(data2, options);







    };


    app.controller("ChartController2", amlanChart);


    app.controller("mycontroller", mycontroll);

    app.controller("ChartController", ChartController);
    app.controller("teamCtrl", teamCtrl);

    angular.module("myAppp").directive("myBadge", function () {
        return {
            scope:{},
            templateUrl: "badges.html"
        }
    });
    //angular.module("myAppp").directive("overallTeamReport", function () {
    //    return {
    //        templateUrl: "overallTeamReport.html",
    //        link: function (scope) {

    //            scope.gridsterOpts = {
    //                columns: 24,
    //                margin: [20, 20],
    //                outerMargin: false,
    //                pushing: true,
    //                floating: true,
    //                swapping: false,
    //                minSizeX: 1
    //            };

    //            scope.widgets = [
    //                {
    //                    title: "My Team",
    //                    sizeX: 3,
    //                    sizeY: 3,
    //                    row: 0,
    //                    col: 0
    //                },
    //                {
    //                    title: "Team Performance",
    //                    sizeX: 2,
    //                    sizeY: 3,
    //                    row: 0,
    //                    col: 3
    //                },
    //                {
    //                    title: "Team Analysis",
    //                    sizeX: 5,
    //                    sizeY: 3,
    //                    row: 3,
    //                    col: 0
    //                }

    //            ];
    //        }
    //    }
    //});
    angular.module("myAppp").directive("myFooter", function () {
        return {
            templateUrl:"footer.html"
        }
    });
}());