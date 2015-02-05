angular.module('finance');

	app.controller('searchCtrl', function($scope, $routeParams, searchService){		

		var quoteArray = [];
		var keyStatsArray = [];

		$scope.getSymbol = function(){			
			searchService.quote($scope.symbol)
	      		.then(function(stockData){ 			//stockData is coming from the returned promise on searchService   		
	   				quoteArray.push(stockData);
	   				// console.log(quoteArray)
	   			})
	   		searchService.keyStats($scope.symbol)
	      		.then(function(data){ 			  		
	      			keyStatsArray.push(data);
	      		})								
	   		$scope.quoteData = quoteArray;
	   		$scope.keyStatsData = keyStatsArray;
	   		$scope.symbol = ''; 				//this clears the input field
	   		$scope    	
		}; 				

		if($routeParams.term === 'quote'){
			$scope.gridOptions = { 
				data: 'quoteData',
				filterOptions: $scope.filterOptions,
			    columnDefs: [
		        {field: 'Name', displayName: 'Company Name'},
		        {field: 'Symbol', displayName: 'Symbol'},
		        {field: 'LastTradePriceOnly', displayName: 'Price'},
		        {field: 'Change', displayName: 'Change'},
		    	]
			}
		}
		if($routeParams.term === 'keystats'){
			$scope.gridOptions = { 
				data: 'keyStatsData',
				filterOptions: $scope.filterOptions,
			    columnDefs: [
			    {field: 'Symbol', displayName: 'Symbol'},
		        {field: 'DaysHigh', displayName: 'Daily High'},
		        {field: 'DaysLow', displayName: 'Daily Low'},
		        {field: 'MarketCapitalization', displayName: 'Market Cap'},
		        {field: 'Volume', displayName: 'Daily Volume'},
		    	]
			}
		}	

		$scope.filterOptions = {
	    	filterText: ''
		};

	});
