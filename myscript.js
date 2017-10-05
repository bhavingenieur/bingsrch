(function(){

var app = angular.module("Myapp",[]);

var myctrl = function($scope,$http,$location){
	$scope.mytext = "hello";
	$scope.new_var=null;
	$scope.zorm=function(){
		var config = {headers: {
             'Ocp-Apim-Subscription-Key': '851a4ef093104471b8a58b9e909a4f7a'
        }};
		var myq = $scope.myquery;
		myq=encodeURIComponent(myq.trim());$scope.myq=myq;
		var urltogo = 'https://api.cognitive.microsoft.com/bing/v5.0/search?q='+myq+'&responseFilter=Webpages&count=20&offset=0&mkt=en-in';
		$http.get(urltogo, config)
		.then(function(response){
			$scope.res_resp=response.data.webPages.value;
			$scope.new_var=true;
			})
		
		};
	
	
};

app.controller("myctrl", myctrl);
})();
