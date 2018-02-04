var request = require('request').defaults({
  jar: true
});

var AJAXURL = "https://zs1.yayi365.cn/ya/hospital/todayNewReservation";
var num1 = 30;
var num2 = 100;

var count2 = 0;

function Data(url) {
  var O = new Object();
  O.headers = {
    "Connection": "close"
  };
  O.url = url;
  O.method = 'Get';
  O.json = true;
  return O;
}
var dataFunc = Data(AJAXURL);

function repeat() {
  for (var i = 0; i < num2; i++) {
    request(dataFunc, callback);
  }
}
for (var j = 0; j < num1; j++) {
  repeat();
}

function callback(error, response, data) {
  if (!error && response.statusCode == 200) {
    // console.log(data)
    console.log(count2++)
  } else console.log('error')
}