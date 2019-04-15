/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
// const exec = require('child_process').exec;

function start(response, postData) {
  console.log('Request handler \'start\' was called.');

  const body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" method="post">'+
  '<textarea name="text" rows="20" cols="60"></textarea>'+
  '<input type="submit" value="Submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
/**
  exec('ls -l', function(error, stdout, stderr) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello start\n');
    response.write(stdout);
    response.end();
  });
**/
}

function upload(response, postData) {
  console.log('Request handler \'upload\' was called.');

  const querystring = require('querystring');

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You send: ' + querystring.parse(postData).text);
  response.end();
}

function lexel(response, postData) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hi, Lexel\n');
  response.end();
}

exports.start = start;
exports.upload = upload;
exports.lexel = lexel;
