(function () {
    'use strict';


    angular
        .module('marvel')
        .component('menuComponent', {
            templateUrl: 'app/components/menuComponent/menuComponent.html',
            controller: menuCtrl,
            controllerAs: 'vm'
        });

    menuCtrl.$inject = ['$location'];
    function menuCtrl() {
        var vm = this;
        $('.parallax').parallax();



        }


    })();
