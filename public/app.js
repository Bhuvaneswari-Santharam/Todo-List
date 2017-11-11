(function(){
    var app = angular.module('nodeTodos',[]);
    app.controller('todoController',['$scope','$http',function($scope,$http){
        

        $http.get('/api/todos/test14').success(function(data){
           
            //console.log(data);
           // mlist.todos = data;
            
            $scope.todos = data;
            //console.log(mlist.todos[0]);
        });
    }]);

    


    
})();