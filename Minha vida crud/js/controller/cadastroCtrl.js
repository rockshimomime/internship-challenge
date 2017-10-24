
(function(){
  'use strict';

    angular.module('myApp').controller('CadastroCtrl', CadastroCtrl);

    CadastroCtrl.$inject = [];
    function CadastroCtrl() {
        var vm = this;
        vm.lista = [];
        vm.edicao = false;

        //Limpa o formulário
        var limpar = function(){
          vm.edicao = false;
          vm.data = {};
        };
        vm.limpar = limpar;

        //Faz o submit do formulário e verifica se é inserção ou edição
        var submitForm = function (data) {
            var item = angular.copy(data);
            if (vm.form.$valid) {
              if(vm.edicao){
                vm.lista[item.index] = item;
              } else {
                vm.lista.push(item);
              }
            }
        };
        vm.submitForm = submitForm;

        //Popula os campos nos campos após o clique na tabela
        var editar = function(item, index){
          var itemToEdit = angular.copy(item);
          vm.data = itemToEdit;
          vm.data.index = index;
          vm.edicao = true;
        };
        vm.editar = editar;

        //Remove o item da tabela
        var remover = function(index){
          vm.edicao = false;
      		vm.lista.splice(index, 1);
        };
        vm.remover = remover;
    }
})();
