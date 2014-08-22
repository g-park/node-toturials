//같은 위치에 있는 server.js에서 가지고 왔다
var server = require("./server");
var router = require("./router");

server.start(router.route)
