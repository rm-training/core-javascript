/******************************************************************************/
// EXERCISE:
//
// The `Parse' function below will be called multiple times with a
// varying number of arguments.  The function should return the number
// of arguments that could successfully be parsed as integers.
Parse = function() {

  var args = Array.prototype.slice.call(arguments),
  	validIntegersCount = 0;

  for (var i=0; i<args.length; i++) {
  	if (!isNaN(parseInt(args[i]))) {
  		validIntegersCount++;
  	}
  }

  return validIntegersCount;

};
