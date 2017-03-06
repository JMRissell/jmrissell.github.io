$.get( "https://api.github.com/users/jmrissell", function( my_git ) {
	console.log(my_git);
	$.get( my_git.repos_url, function( repos ) {
		console.log(repos);
		$.each(repos, function( index, repo ) {
  			console.log(repo.name, repo.html_url);
  			$(".repo-list")
  			.append("<li><a href=" + repo.html_url + ">" + repo.name + "</a></li>");
		});
	});
	//$.get (repos_url);
		//console.log("Name: " + data.name);
		//console.log("Link: " + data.html_url);

 // $( ".result" ).html( data );
 // alert( "Load was performed." );
});

//strict ajax
// xhttp.open("GET", "https://api.github.com/users/jmrissell", true);
// xhttp.send();