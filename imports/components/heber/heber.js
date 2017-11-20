import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './heber.html';





        // $scope.email = "ejemplo@hotmail.com";
        // $scope.age = "Menos de 18 años";
        // $scope.checkSubscribe = true;
        // $scope.mejor = "IT";

       

        // $scope.btnClick = function() {
        //     $scope.addObject.push({
        //         email: $scope.email,
        //         edad: $scope.age,
        //         subscribed: $scope.checkSubscribe ? "Si" : "No",

        //         lamejor: $('#pel').val()
        //     });
        // }

        // $scope.addObject = [ /*Arreglo de objetos*/ {
        //     email: "ejemplo@hotmail.com",
        //     edad: "Menos de 18 años",
        //     subscribed: "Si",
        //     lamejor: "IT"
        // }];


class Controlador {
    constructor(){

        
   this.data = [];

        this.tabla = function() {
            this.dts = [];
            var aux;
            var index = 0;
            for (var i = 0; i < this.fila; i++) {
                var aux = [];
                for (var j = 0; j < this.col; j++) {
                    aux.push(this.fibb(index++));
                }
                this.dts.push(aux);
            }
        }
        this.fibb = function(n) {
            var a = 0,
                b = 1,
                f = 1;
            if (n === 0) {
                return 0;
            }
            for (var i = 2; i <= n; i++) {
                f = a + b;
                a = b;
                b = f;
            }
            return Math.random();
        }


    }
}




  export default angular.module('heberMod', [angularMeteor]).component('heberMapu', {
    templateUrl : 'imports/components/heber/heber.html', controller : Controlador
});