var Resource = require('deployd/lib/resource')
  , util = require('util');

function Hello(settings) {
  Resource.apply(this, arguments);
}
util.inherits(Hello, Resource);
module.exports = Hello;

Hello.prototype.handle = function (ctx, next) {
  if(ctx.req && ctx.req.method !== 'GET') return next();

  ctx.done(null, {hello: 'world'});
}