import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './eduardo.html';

class Controlador {
	constructor() {

	this.tabla = function() {
  this.dts = [];
  var aux;
  var index = 0;
  for (var i = 0; i < this.fil; i++) {
    var aux = [];
    for (var j = 0; j < this.col; j++) {
      aux.push(this.alea(index++));
    }
    this.dts.push(aux);
	  }
	}
  }
}

export default angular.module('eduardoMod', [angularMeteor]).component('eduardoMapu', {
	templateUrl : 'imports/components/eduardo/eduardo.html', controller : Controlador
});