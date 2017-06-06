((appModule) => {
    appModule.controller('controller1',['$scope', function ($scope) {
        $scope.users=
            [
                {"name":"Stefan", "age":10},
                {"name":"Mihai", "age":9}
            ];
        $scope.getUsers=(cb)=>{
            cb($scope.users);
        }
    }]);
})(angular.module('myApp'));