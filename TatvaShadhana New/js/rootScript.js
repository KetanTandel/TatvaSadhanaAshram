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
    .when("/ContactUs", {
        templateUrl: "gujarati/ContactUs.html"
    })
    .when("/Sansodhan", {
        templateUrl: "gujarati/Sansodhan.html"
    })
    .when("/JyotishShastra", {
        templateUrl: "gujarati/JyotishShastra.html"
    })
    .when("/BalKelavani", {
        templateUrl: "gujarati/BalKelavani.html"
    })
    .when("/StreeKelavani", {
        templateUrl: "gujarati/StreeKelavani.html"
    })
    .when("/Yog", {
        templateUrl: "gujarati/Yog.html"
    })
    .when("/Ayurved", {
        templateUrl: "gujarati/Ayurved.html"
    })
    .when("/Pranayam", {
        templateUrl: "gujarati/Pranayam.html"
    })
    .otherwise("/home", {
        templateUrl: "gujarati/home.html"
    })
    //.when("/paris", {
    //    templateUrl: "paris.htm"
    //});
});