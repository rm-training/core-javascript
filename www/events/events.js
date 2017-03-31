// In the index.html file there are several elements containing the
// text "Click Me".  Those elements are followed by another element
// containing the number zero, which we'll call the "counter".
//
// Inside the anonymous function below, write the necessary code so
// that clicking any "Click Me" element will increment its paired
// counter. 
//
// BONUS 1: Create a new element on the page that displays the sum of
// all other counters.
//
// BONUS 2: When the global counter goes above 10 add the "goal" class
// to it.  Doing so should make it turn red.
(function() {

  var buttons = document.querySelectorAll('button');

  // make sure to loop through that array-like element collection
  for (var i=0; i<buttons.length; i++) {
  	
  	buttons[i].addEventListener('click', function(e) {
  		
  		// safety, is it a span?
	  	if (this.nextElementSibling.nodeName === 'SPAN') {
	  		// coerce to number and set

	  		// fancy coerce
		  	//this.nextElementSibling.innerHTML = +this.nextElementSibling.innerHTML + 1;

		  	// normal coerce
	  		this.nextElementSibling.innerHTML = Number(this.nextElementSibling.innerHTML) + 1;

	  	}
  	});
  }

  var spanButton = document.getElementById('click-me');

  spanButton.addEventListener('click', function(e) {
	  this.nextElementSibling.innerHTML = +this.nextElementSibling.innerHTML + 1;
  });

  var anchorEls = document.getElementsByTagName('a');

  for (var i=0; i<anchorEls.length; i++) {
	  anchorEls[i].addEventListener('click', function(e) {
		  this.nextElementSibling.innerHTML = +this.nextElementSibling.innerHTML + 1;
	  });
  }

  // BONUS 1: Create a global counter
  var containerEl = document.getElementById('container'),
  	newP = document.createElement('p');
  
  newP.innerHTML = 0;

  // prepend it
  containerEl.insertBefore(newP, containerEl.firstChild);

  // @todo - then update all our event handlers to update THIS guy as well

  // BONUS 2: When global counter is above 10, add "goal" class to it and color it red

  

})();
