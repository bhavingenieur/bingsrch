(function(){

var app = angular.module('myapp', []);
var myctrl = function($scope,$http){
  
  $scope.getresults=function(){
		var config = {headers: {
             'Ocp-Apim-Subscription-Key': 'ad5ee2fee96a4594ab5a899b73701bfc'
        }};
		var myq = $scope.myquery;
		myq=encodeURIComponent(myq.trim());$scope.myq=myq;
		var urltogo = 'https://api.cognitive.microsoft.com/bing/v7.0/search?q='+myq+'&responseFilter=Webpages&count=20&offset=0&mkt=en-in';
    
		$http.get(urltogo, config)
		.then(function(response){
			$scope.res_resp=response.data.webPages.value;
			$scope.new_var=true;
      
			})
		
};
};

app.controller('myctrl', myctrl);

})();
