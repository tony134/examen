import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './main.html';

class Controlador {
	constructor(){

		


	}
}


export default angular.module('mainMod', [angularMeteor]).component('mainMapu', {
	templateUrl : 'imports/components/main/main.html', controller : Controlador
});