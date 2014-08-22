var http = require("http");

function onRequest(request, response) {
  console.log("onRequest 함수 호출...");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("garam's node.js 프로젝트!");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");
