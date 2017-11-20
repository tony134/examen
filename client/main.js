import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import examenMapu from '../imports/components/examen/examen';
import heberMapu from '../imports/components/heber/heber';
import eduardoMapu from '../imports/components/eduardo/eduardo';
import mainMapu from '../imports/components/main/main';
var app = angular.module('mapu', [angularMeteor,uiRouter, examenMapu.name, heberMapu.name, eduardoMapu.name, mainMapu.name]);

app.controller('contr', ["$scope", function($scope){
	

}]);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider.state('main', {
		url : "/",
		template : "<main-mapu></main-mapu>"
		})
	.state('heber',{
		url : "/heber",
		template : "<heber-mapu></heber-mapu>"
	})
	.state('eduardo',{
		url : "/eduardo",
		template : "<eduardo-mapu></eduardo-mapu>"
	})
	.state('antonio',{
		url : "/antonio",
		template : "<examen-mapu></examen-mapu>"
	})
});
