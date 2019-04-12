/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
const http = require('http');
const url = require('url');
const port = process.env.PORT || 8888;

/**
 * Server start function
 * @param {function} route description
 * @param {function} handle description
 */
function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(port);
  console.log('Server has started.');
}

exports.start = start;
