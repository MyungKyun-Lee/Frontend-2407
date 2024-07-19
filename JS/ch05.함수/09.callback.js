// 콜백(callback) 함수
function callThreeTimes(callback) {
    for (let i = 0; i < 3; i++)
        callback();
}

const cb = function() {
    console.log('함수가 호출되었습니다.');
}

callThreeTimes(cb);

callThreeTimes(function() {console.log('익명함수가 호출되었습니다.');});

callThreeTimes(() => {console.log('화살표 함수가 호출되었습니다.');});

// *강의 외  다른 예제*
function findUserAndCallBack(id, cb) {
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }
  
  findUserAndCallBack(1, function (user) {
    console.log("user:", user);
  });
  