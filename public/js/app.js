//module
var app = angular.module("fortuneTeller", [])

//controller
app.controller('fortuneTellerCtrl', ['$http', '$scope', function($http, $scope){
    $scope.dealCards = async function () {
        $scope.cardsDealt = true
        await $http.get("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3")
            .then(function (response) { $scope.cards = response.data.cards; });
        console.log($scope.cards);
    }
    $scope.checkInverted = () => {
        let x = Math.floor(Math.random() * 2)
        console.log(x)
        if(x){
            $scope.inverted = true
        } else {
            $scope.inverted = false
        }
    }
    $scope.goBack = () => {
        $scope.cardsDealt = false
    }

    $scope.time = ["Past", "Present", "Future"];
}])