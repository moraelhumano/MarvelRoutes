(function () {
    'use strict';

    angular
        .module('marvel')
        .component('comicsComponent', {
            templateUrl: 'app/components/comicsComponent/comicsComponent.html',
            controller: comicsCtrl,
            controllerAs: 'vm'
        });


        function comicsCtrl(marvelData) {
        var vm = this;

        vm.superheros = null;

        marvelData.get()
        .$promise
            .then(function(response){
                vm.superheros = response.data.results;
                console.log(vm.superheros)
            })
            $('.carousel').carousel();
    }


    })();
