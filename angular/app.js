angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope) {

	$scope.appTitle = "ToDo List";;

	$scope.todos = [
	{'title': 'ToDo Example'}
	];

	$scope.addTodo = function() {
		$scope.todos.push({'title': $scope.newTodo})
		$scope.newTodo = '';
	};

	$scope.removeCompleted = function() {
		var result = confirm('Do you really want to delete?');
		if(result === true) {			
			$scope.todos = $scope.todos.filter(function(item) {
				return !item.done;
			});
		}
	};

	$scope.todoDone = function (todos) {
		return todos.some(function (todo) {
			return todo.done;
		});
	};
}]);