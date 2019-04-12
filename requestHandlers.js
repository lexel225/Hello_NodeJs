/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
const exec = require('child_process').exec;

function start(response) {
  console.log('Request handler \'start\' was called.');

  exec('ls -l', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello start\n');
    response.write(stdout);
    response.end();
  });
}

function upload(response) {
  console.log('Request handler \'upload\' was called.');
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello upload\n');
  response.end();
}

function lexel(response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hi, Lexel\n');
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.lexel = lexel;
