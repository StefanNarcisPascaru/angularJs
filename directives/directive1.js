((appModule) => {
    appModule.directive('grid',()=>{
        return{
            restrict: 'E',
            scope:
                {
                    templateUrl: "=",
                    loadData: "="
                },
            template: '<div ng-include="templateUrl"></div>',
            replace: false,
            transclude: false,
            link: function (scope, elemets, attrs) {
                scope.loadData((items)=>{
                    scope.data=items;
                    });
            },
            controller: function ($scope) {
                console.log($scope.loadData);
            }
        }
    });
})(angular.module('directives'));