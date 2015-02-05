angular.module('finance');


	app.controller('yahooCtrl', function($scope){//, $interval, yahooService){

		$scope.search = ['Quotes', 'Key Stats'];	

		var stockArray = [];
		var symbolArray = [];

		$scope.getSymbol = function(){
	    	yahooService.stockQuote($scope.symbol)
	      		.then(function(stockData){ 			//stockData is coming from the returned promise on yahooService   		
	      			stockArray.push(stockData);
	      		})
	      		symbolArray.push($scope.symbol);
	      		$scope.finalData = stockArray;	      		
	      		$scope.symbol = '';				//this clears the input field	
	      		console.log(symbolArray)      		
		}

		// $interval(function(){
		// 	var arr = symbolArray;
	 //    	for(i = 0; i < arr.length; i++){
	 //      		$scope.getSymbol(arr[i]);
	 //    	}
	 //    }, 1000, 1);
		

		$scope.gridOptions = { 
		    data: 'finalData',
		    filterOptions: $scope.filterOptions,
		    columnDefs: [
		        {field: 'Name', displayName: 'Company Name'},
		        {field: 'Symbol', displayName: 'Symbol'},
		        {field: 'LastTradePriceOnly', displayName: 'Price'},
		        {field: 'Change', displayName: 'Change'},
	    	]
		};

		$scope.filterOptions = {
	    	filterText: ''
		};

		 




	 //  	$scope.dropDown = 'All';
	 //  		function windowH() {
	 //   		var wH = $(window).height();

		// 	$('.gridStyle').css({height: wH});
		// }
	



	
	// 	var stockArray = [];
	// 	var dataToArray = function(stockData) { //parses data.data.results from iTunes into songArray, in the format that ng-Grid asks for.
	// 		var stock = {};
	//    		stock.Name = Name;
	//       	// song.Artist = data[i].artistName;
	//       	// song.Collection = data[i].collectionCensoredName;
	//       	// song.CollectionPrice = data[i].collectionPrice;
	//       	// song.Play = data[i].previewUrl;
	//       	// song.Type = data[i].kind;
	//       	// song.SongName = data[i].trackName;
	//       	stockArray.push(stock);
	//     console.log(stockArray)    
	// }



			// $scope.finalData = {
		// 	data1: parsedData,
		// 	data: [],
		// 	for(var i = 0; parsedData.length; i++){
		// 		dataToArray.push(parsedData)
		// 	}
		// 	return data
		// }

});


