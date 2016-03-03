(function () {
    var app = angular.module("myApp2", []);
    app.controller("MainController2", function ($scope) {
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
        var data = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"],
            datasets: stud_data

        };

        var ctx1 = document.getElementById("c2").getContext("2d");
        ctx1.canvas.width = 300;
        ctx1.canvas.height = 200;
        var MyNewChart = new Chart(ctx1).Line(data, options);







    });



}());