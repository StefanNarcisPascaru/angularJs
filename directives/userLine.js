((appModule) => {
    appModule.directive('userLine',()=>{
    return{
        restrict: 'A',
        template: '<div>{{user.name}}<span id="plus{{$index}}">+</span>    <span>-</span></div>',
        replace: true,
        transclude: true,
        link: function (scope, element, attrs) {
            console.log(scope);
            console.log(element);
            element.on('mouseenter',()=>{
                element[0].title=scope.user.name+ " is " + scope.user.age + " years old.";
            })

            element.children().eq(0).on('click',()=>{
               scope.user.age ++;
            })
            element.children().eq(1).on('click',()=>{
               scope.user.age --;
            })
            },
        controller: function ($scope) {
        }
    }
});
})(angular.module('directives'));