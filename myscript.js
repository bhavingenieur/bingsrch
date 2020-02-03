(function(){

var app = angular.module('myapp', []);
var myctrl = function($scope,$http){
  
  $scope.getresults=function(){
		var config = {headers: {
             'Ocp-Apim-Subscription-Key': 'aabcd1234'
        }};
		var myq = $scope.myquery;
		myq=encodeURIComponent(myq.trim());$scope.myq=myq;
		var urltogo = 'https://api.cognitive.microsoft.com/bing/v7.0/search?q='+myq+'&responseFilter=Webpages&count=20&offset=0&mkt=en-in';
    	$scope.new_var=false;	
	  $scope.loading = true;
		$http.get(urltogo, config)
		.then(function(response){
			$scope.res_resp=response.data.webPages.value;
			$scope.new_var=true;
      		$scope.loading = false;
			})
		
};
};

app.controller('myctrl', myctrl);

})();
