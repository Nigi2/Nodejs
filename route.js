//Router
function route(handle, pathname) {//將handle這個物件注入到route()函數中
	console.log("About to route a request for " + pathname);
	//判斷url位置，導向正確請求程序[requestHandler.js]
	if(typeof handle[pathname] === 'function') {
		handle[pathname]();
	}
	else {
		console.log("No request handler found for " + pathname);
	}
}

exports.route = route;