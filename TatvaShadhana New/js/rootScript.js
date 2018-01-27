/// <reference path="angular.min.js" />
var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "gujarati/home.html"
    })
    .when("/AboutUs", {
        templateUrl: "gujarati/AboutUs.html"
    })
    //.when("/paris", {
    //    templateUrl: "paris.htm"
    //});
});