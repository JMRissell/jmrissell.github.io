$.get( "https://api.github.com/users/jmrissell", function( my_git ) {
	console.log(my_git); // using console logging to see all of the data being returned (not functional)
	$.get( my_git.repos_url, function( repos ) {
		console.log(repos);
		$.each(repos, function( index, repo ) {
  			console.log(repo.name, repo.html_url, repo.updated_at, repo.subscriptions_url);
  			$(".repo-list")
  			.append("<li><a href=" + repo.html_url + ">" + repo.name + "<p>last update:" + repo.updated_at +"</p>" + "</a></li>");

  			$(".extra-info")
  			.append(repo.subscriptions_url);

  			//this would pull in my subscriptions to the "extra-info class" I have in a tag on my 'prject-list.hmtl' file. If

		});
	});
});


//Stuff I ened up not using:
//$.get (repos_url);
//console.log("Name: " + data.name);
//console.log("Link: " + data.html_url);
// $( ".result" ).html( data );
// alert( "Load was performed." );

//strict ajax
// xhttp.open("GET", "https://api.github.com/users/jmrissell", true);
// xhttp.send();