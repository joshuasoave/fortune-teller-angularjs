var app = angular.module("fortuneTeller", [])

app.controller('fortuneTellerCtrl', ['$http', '$scope', function($http, $scope){
    $scope.dealCards = function () {
        console.log('hi');
        $http.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3")
            .then(function (response) { $scope.cards = response.data; });
        var cards = $scope.cards;
        console.log(cards);
    }
}])