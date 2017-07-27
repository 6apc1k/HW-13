
Function.prototype.bindMe = function(scope) {
  var func = this;

  return function() {
    return func.apply(scope, arguments);
  }
}   