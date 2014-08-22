//http 관련 모듈을 http 객체에 담는다
var http = require("http");//처음부터 모듈을 사용하고 있다
/*
http 변수이기 때문에 어떤것으로 받더라도 상관없다.
ex) var foo = require("http");
*/

//url 모듈은 URL의 각각의 부분 (예를들면 URL path와 query string) 을 뽑아낼 수 있는 메소드를 제공
var url = require("url");

//스타트 함수를 만들어 외부에서 사용할 수 있도록 한다
function start(route, handle) {

  function onRequest(request, response) {

    var postData = "";

    //받을 데이터의 인코딩을 UTF-8로 세팅
    request.setEncoding("utf8");
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");

    //새로운 POST 데이터 청크가 올 때마다 postData 변수에 차곡차곡 쌓는 역할을 하는 “data” 이벤트 listener를 추가
    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+ postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

    // //해더 설정
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // //바디부분을 설정
    // response.write("Hello World");
    // //끝내기
    // response.end();

  }

  //onReqeust함수의 인자로 두개가 들어오는데
  //첫번째는 요청값(request), 두번째는 반환값(response)이다
  http.createServer(onRequest).listen(8888);

  //서버의 시작을 알린다
  console.log("Server has started.");
}
//주석은 이렇게 다는 건가?
exports.start = start;
