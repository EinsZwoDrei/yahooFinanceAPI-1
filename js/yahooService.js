angular.module('finance');

app.service('yahooService', function($http, $q){

  this.stockQuote = function(symbol){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22' + symbol + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    })
      .then(function(data){
        console.log(data); 
        deferred.resolve(data.data.query.results.quote);
      });
    return deferred.promise;
  };

  // this.repeat = function(arr){
  //   var deferred = $q.defer();
  //     for(i = 0; i < arr.length; i++){
  //       if(arr[i] === symbol){
  //         arr[i].splice(i, 1)
  //       }
  //       deferred.resolve(array)
  //     }
  //   return deferred.promise;
  // };


  // this.keyStats = function(symbol){
  // 	var deferred = $q.defer();
  // 	$http({
  // 		method: 'GET',
  // 		url: 'https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.keystats%20WHERE%20symbol%3D' + symbol + '&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
  // 	})
  // 		.then(function(data){
  // 			console.log(data);
  // 			return deferred.resolve(data);
  // 		});
  // 	return deferred.promise;
  // }






});