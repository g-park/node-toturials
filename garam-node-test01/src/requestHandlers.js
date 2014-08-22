
//스타트 관련 url처리하는 곳인가?
function start() {

  console.log("Request handler 'start' was called.");

}

//업로드 url처리하는 곳인가?
function upload() {

  console.log("Request handler 'upload' was called.");

}

exports.start = start;
exports.upload = upload;
