//http 관련 모듈을 http 객체에 담는다
var http = require("http");

//스타트 함수를 만들어 외부에서 사용할 수 있도록 한다
function start() {

  function onRequest(request, response) {
    console.log("Request received.");

    //해더 설정
    response.writeHead(200, {"Content-Type": "text/plain"});
    //바디부분을 설정
    response.write("Hello World");
    //끝내기
    response.end();

    /*만약에 요청에 대한 자세한 사항이 있다면 request 객체를 사용할 수 있다*/

  }

  //onReqeust함수의 인자로 두개가 들어오는데
  //첫번째는 요청값(request), 두번째는 반환값(response)이다
  http.createServer(onRequest).listen(8888);

  //서버의 시작을 알린다
  console.log("Server has started.");
}
//주석은 이렇게 다는 건가?
exports.start = start;
