var querystring = require("querystring"),
    fs = require("fs");;
//스타트 관련 url처리하는 곳인가?
function start(response, postData) {


 console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

//업로드 url처리하는 곳인가?
function upload(response, postData) {

  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain","charset":"utf-8"});
  response.write("You've sent: " +  querystring.parse(postData).text);
  response.end();
}

function show(response, postData) {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/1ef2e94b3be2e96dc46459b8d13b9a16", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.show = show;
exports.start = start;
exports.upload = upload;
