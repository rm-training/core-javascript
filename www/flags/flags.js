/*
 * Read the index.html file and locate all of the elements that have
 * text content containing the word "FLAG" followed by a number ("#1",
 * "#2", etc.)
 *
 * Using the standard DOM methods, move these elements into the `ul'
 * element that is inside the `div' with the ID of `#bucket'.  Move
 * the entire element, not just the text content.  Ensure you maintain
 * proper HTML structure by enclosing the FLAG elements in `li'
 * elements when necessary.
 *
 * The FLAG elements in the `ul' should be listed in ascending
 * (numeric) order.
 *
 * Tips:
 *
 * Move them one at a time.  Some of them will have to be moved by
 * selecting a parent element and then using the traversal methods to
 * find the correct FLAG element.
 *
 * Hint: you can use:
 *
 *   - getElementById
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 *
 *   - getElementsByTagName
 *     https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
 *
 *   - getElementsByClassName
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 *
 *   - querySelector
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 *   - querySelectorAll
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 *   - createElement
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *
 *   - appendChild
 *     https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 *
 * and all the parent, child and sibling selectors, along with the DOM
 * traversal properties such as:
 *
 *   - parentNode
 *   - previousSibling
 *   - nextSibling
 *   - firstChild
 *   - lastChild
 *   - childNodes
 *
 * Which you can read about here:
 *
 *    https://developer.mozilla.org/en-US/docs/Web/API/Node
 *
 *
 * BONUS:
 *
 * Rewrite your solution.  This time instead of selecting each flag
 * individually, write a function that recursively walks the DOM tree
 * and moves the flags as they are found.  Don't forget to sort the
 * flags so they are in the correct order in the bucket.
 */
(function() { // Keep this line.

  var bucketUl = document
      .getElementById('bucket')
      .querySelector('ul'),
  	newEl,
  	newLi;

  // flag 1
  newEl = document.querySelector('li.foo');
  bucketUl.appendChild(newEl);

  // flag 2
  newEl = document.querySelector('#articles p a span');
  newLi = document.createElement('li');
  bucketUl.appendChild(newLi.appendChild(newEl));

  // flag 3
  newEl = document.querySelector('.footer div div div div');
  newLi = document.createElement('li');
  bucketUl.appendChild(newLi.appendChild(newEl));

  // flag 4
  newEl = document.querySelector('#article-3 span');
  newLi = document.createElement('li');
  bucketUl.appendChild(newLi.appendChild(newEl));

  // flag 5
  // i cheated here (did I?) with a nth-child selector
  // otherwise I have to walk it...or search an array...
  //newEl = document.querySelector('#article-3 p:nth-child(4)');
  
  newEl = document.querySelectorAll('#article-3 p');
  console.log(newEl);
  newLi = document.createElement('li');
  bucketUl.appendChild(newLi.appendChild(newEl[2]));

})(); // Keep this line too.
