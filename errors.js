'use strict'; /*jslint node: true, es5: true, indent: 2 */

var APIError = exports.APIError = function(code, message) {
  this.code = code;
  this.message = message;
};
APIError.prototype.toString = function() {
  return this.code + ': ' + this.message;
};
