/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
// const exec = require('child_process').exec;

const fs = require('fs');
const formidable = require('formidable');

function start(response) {
  console.log('Request handler \'start\' was called.');

  const body = '<html>'+
  '<head>'+
  '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
  '</head>'+
  '<body>'+
  '<form action="/upload" enctype="multipart/form-data" method="post">'+
  '<input type="file" name="upload" multiple="multiple" />'+
  '<input type="submit" value="Upload .png file, please" />'+
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

function upload(response, request) {
  console.log('Request handler \'upload\' was called.');
  const form = new formidable.IncomingForm();

  console.log('about to parse');
  form.parse(request, function(error, fields, files) {
    console.log('parsing done');

    fs.renameSync(files.upload.path, '/tmp/test.png');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('received image:<br/>');
    response.write('<img src=\'/show\' />');
    response.end();
  });

/**
  const querystring = require('querystring');

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You send: ' + querystring.parse(postData).text);
  response.end();
**/
}

function show(response) {
  console.log('Request handler \'show\' was called.');
  const fs = require('fs');

  fs.readFile('/tmp/test.png', 'binary', function(error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(error + '\n');
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(file, 'binary');
      response.end();
    }
  });
}

function lexel(response) {
  fs.readFile('./tmp/lexel.png', 'binary', function(error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(error + '\n');
      response.end();
    } else {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(file, 'binary');
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
exports.lexel = lexel;
