'use strict';

module.exports.handler = function(event, context, cb) {
  console.log(event);
  console.log(context);

  let message = `You said: ${event.body.message}`;
  return cb(null, {
    message: message
  });
};
