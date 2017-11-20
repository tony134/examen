import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './examen.html';

class Controlador {
	constructor(){

		
	this.tabla = function() {
	this.dts = [];
	var aux;
	var index = 0;
	for (var i = 0; i < this.fila; i++) {
    var aux = [];
    for (var j = 0; j < this.col; j++) {
      aux.push(this.alea(index++));
    }
    this.dts.push(aux);
  }
}


this.alea = function(m){
var l = Math.round(Math.random()*100);
return l;
}

	}
}


export default angular.module('examenMod', [angularMeteor]).component('examenMapu', {
	templateUrl : 'imports/components/examen/examen.html', controller : Controlador
});