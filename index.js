var server = require("./server.js");
var router = require("./route.js");
var requestHandler = require("./requestHandlers.js");

//請求處理程序的集合
var handle = {};
handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

server.start(router.route, handle);