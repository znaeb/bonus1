// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {

	// Magic!
	//$.getJSON("http://www.mattbowytz.com/simple_api.json",function(data) { alert(data);});
	$.getJSON( "http://www.mattbowytz.com/simple_api.json?data=all", function( data ) {
		var $programming=[];
		var $interests= [];
		$interests=data.data.interests;
		$programming=data.data.programming;
		//alert( "JSON Data: " + $.parseJSON() );
		$("#mainForm").keyup(function (input) {

			//alert( "Handler for .keydown() called."+ data); //haha success
			//alert(document.getElementsByClassName("flexsearch-input")[0].value);
			var $contentsHolder=document.getElementById("search");
			var $contents=document.getElementById("search").value;
			if($contents!="") {

				var searchList = [];
				//alert(document.getElementById("search").value); //search-box content
				//alert($interests[0]	);
				for (var $i = 0; $i < $interests.length; $i++) {
					var $location = $interests[$i].toLowerCase().search($contents.toLowerCase());
					if ($location === 0)searchList.push($interests[$i]);
				}
				for ($i = 0; $i < $programming.length; $i++) {
					$location = $programming[$i].toLowerCase().search($contents.toLowerCase());
					if ($location === 0)searchList.push($programming[$i]);
				}
				//alert(searchList); just need to display it now
				//var $drop=document.getElementById("search");
				var $search = document.getElementById('autoComp');
				$search.innerHTML ="";

				if (searchList.length > 0) {
					//$search.innerHTML = "<select name=\"sometext\" multiple=\"multiple\" class=\"flexsearch-dropdown\">";
					//$contentsHolder.value.replace($contentsHolder.value,"pp");
					for ($i = 0; $i < searchList.length; $i++) {
						$search.innerHTML = $search.innerHTML + "\n<a href='https://www.google.com/#q="+searchList[$i]+"'>" + searchList[$i] + "</a><br>";
						//$contentsHolder.value.replace($contentsHolder.value,"pp");
						//"<option>text2</option>" +
						//"<option>text3</option>" +
						//"<option>text4</option>" +
						//"<option>text5</option>" +
					}
					//$search.innerHTML = $search.innerHTML + "\n</select>";
					// 	$contentsHolder.value.replace($contentsHolder.value,"pp");
					//$contentsHolder.value="pp";
				}
			}else{
				$search = document.getElementById('autoComp');
				$search.innerHTML ="";
				$search.hide();
			}

		});


			//var items = [];
			//$.each( data, function( key, val ) {
			//	items.push( "<li id='" + key + "'>" + val + "</li>" );
			//});


			console.log('Keepin\'n it clean with an external script!');

	})
})();
