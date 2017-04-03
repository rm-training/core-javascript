// In the index.html file there is a button.  When the button is
// clicked kick off an HTTP GET request to the following URL:
//
//   /api/artists
//
// The response text will be a JSON-encoded array of objects.  Inspect
// the response using the browser debugger and then insert the objects
// into the DOM.  Each artist in the response should be used to create
// a new <li> element in the existing <ul> container (the one with the
// ID of "artists").  Display the name of each artist inside the newly
// created <li> elements.
//
// BONUS #1:
//
// Clicking one of the <li> elements should display all information
// about the clicked artist in the <ul> with the ID of "details".
// (Hint: make another HTTP request to /api/artists/N where N is the
// artist ID.)
//
// BONUS #2:
//
// After displaying a list of artist details, also display a list of
// album names.  A list of albums can be fetched using the following
// URL:
//     /api/artists/N/albums
//
(function() {

	var buttonEl = document.querySelector('button'),
		artistsList = document.getElementById('artists'),
		detailsEl = document.getElementById('details');

	buttonEl.addEventListener('click', function(e) {

		var req = new XMLHttpRequest();
		
		req.addEventListener('load', function(e) {
			var data,
				newEl;

			console.log('Response', req.status, req.responseText);
			
			if (req.status == 200) {

				data = JSON.parse(req.responseText);

				for (var i=0; i<data.length; i++) {
					// create new <li>
					newLi = document.createElement('li'); 
					newLi.appendChild(
						document.createTextNode(data[i].name)
					); 

					// could also just use innerHTML to avoid textNode creation 
					//newLi.innerHTML = data[i].name;

					// BONUS #1:
					// Wrapped in IIFE to protect scope and use data[i].id
					(function(id){
						newLi.addEventListener('click', function(e) {
							showDetailsHandler(id);
						});
					})(data[i].id);

					// @todo
					// BONUS #2
					
					artistsList.appendChild(newLi);
				}
			}
		});

		req.open('GET', '/api/artists');
		req.send(null);

	});

	// Bonus #1:
	var showDetailsHandler = function(artistId) {

		var detailsRequest = new XMLHttpRequest();

		detailsRequest.addEventListener('load', function(e) {
			var data;

			if (detailsRequest.status == 200) {

				data = JSON.parse(detailsRequest.responseText);
				console.log(detailsRequest.responseText);

			}

		});

		detailsRequest.open('GET', '/api/artists/' + artistId);
		detailsRequest.send(null);

	}

})();
