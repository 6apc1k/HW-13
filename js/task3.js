function compose() {
   return Array.prototype.reduceRight.call(arguments, function (previousFn, fn) {
       return function () {
           var args = arguments ;
           return fn(previousFn.apply(null, args));
       };
   });
}
module.exports = compose;