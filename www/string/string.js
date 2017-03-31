/*
 * The function below takes a string as input and should:
 *
 *   1) Replace the word "today" with the current date using the
 *      `toDateString' method (present on date objects).
 *
 *   2) Replace the word "pi" with the numeric value of PI, to the 2nd
 *      decimal place.
 *
 *   3) Count how many occurrences of the letter X (upper and lower
 *      case) are present and append the count to the end of the
 *      string following a space.
 *
 * It should then return the modified string.
 *
 * Example input and output:
 *
 *   "foo pi xx" -> "foo 3.14 xx 2"
 */
processString = function(input) {

  var today = new Date(),
  	matches = input.match(/x/gi),
  	count = 0;

  input = input.replace(/today/i, today.toDateString());

  input = input.replace(/pi/i, Math.PI.toFixed(2));

  count = matches ? matches.length : 0;

  return input + " " + count;

};
