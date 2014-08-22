//같은 위치에 있는 server.js에서 가지고 왔다
var server = require("./server");

//url를 변경하게 만듦
var router = require("./router");

//
var requestHandlers = require("./requestHandlers");

var handle = {}

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route,handle);
