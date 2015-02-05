angular.module('finance');

app.service('searchService', function($http, $q){

  this.quote = function(symbol){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22' + symbol + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    })
      .then(function(stockData){
        deferred.resolve(stockData.data.query.results.quote);
        console.log(stockData)
      });
    return deferred.promise;
  }

  this.keyStats = function(symbol){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22' + symbol + '%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
    })
      .then(function(keyData){
        console.log(keyData)
        deferred.resolve(keyData.data.query.results.quote);
      });
    return deferred.promise;
  }

});