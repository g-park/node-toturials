
//스타트 관련 url처리하는 곳인가?
function start() {

  console.log("Request handler 'start' was called.");

 function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);

  return "Hello Start";
}

//업로드 url처리하는 곳인가?
function upload() {

  console.log("Request handler 'upload' was called.");

  return "Helle Upload";
}

exports.start = start;
exports.upload = upload;
