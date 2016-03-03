// Code goes here

'use strict';
var app = angular.module('demo', ['angular-svg-round-progress']).controller('demoCtrl', ['$scope', '$interval', '$timeout', '$window', 'roundProgressService', ]);
var teamCtrl = function ($scope, $interval, $timeout, $window, roundProgressService) {
    $scope.current = 90;
    $scope.max = 100;
    $scope.offset = 1;
    $scope.timerCurrent = 0;
    $scope.uploadCurrent = 0;
    $scope.stroke = 10;
    $scope.radius = 40;
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
            'top': $scope.isSemi ? 'auto' : '58%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
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
var learningCtrl = function ($scope, $interval, $timeout, $window, roundProgressService) {
    $scope.current = 60;
    $scope.max = 100;
    $scope.offset = 1;
    $scope.timerCurrent = 0;
    $scope.uploadCurrent = 0;
    $scope.stroke = 10;
    $scope.radius = 40;
    $scope.isSemi = false;
    $scope.rounded = false;
    $scope.responsive = false;
    $scope.clockwise = true;
    $scope.currentColor = '#33ccff';
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
            'top': $scope.isSemi ? 'auto' : '58%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
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
var roleCtrl = function ($scope, $interval, $timeout, $window, roundProgressService) {
    $scope.current = 20;
    $scope.max = 100;
    $scope.offset = 1;
    $scope.timerCurrent = 0;
    $scope.uploadCurrent = 0;
    $scope.stroke = 10;
    $scope.radius = 40;
    $scope.isSemi = false;
    $scope.rounded = false;
    $scope.responsive = false;
    $scope.clockwise = true;
    $scope.currentColor = '#993366';
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
            'top': $scope.isSemi ? 'auto' : '58%',
            'bottom': $scope.isSemi ? '5%' : 'auto',
            'left': '50%',
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

app.controller("teamCtrl", teamCtrl);
app.controller("roleCtrl", roleCtrl);
app.controller("learningCtrl", learningCtrl);