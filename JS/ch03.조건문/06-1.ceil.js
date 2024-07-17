/*
Math.round(값) - 값을 반올림합니다.
Math.ceil(값)  - 값을 올림합니다.
Math.floor(값) - 값을 내림합니다.
Math.trunc(값) - 값을 내림합니다. (소수점이하 절삭)
Math.parseInt(값) - 값을 정수로 바꿉니다. (값이 소숫점이 있는 숫자일 경우엔 소숫점 이하를 잘라버립니다. 내림)
*/

let score = Math.random() * 50;   // 51 ~ 100 사이의 정수
let grade = '';

console.log(score);

grade = Math.round(score*10);
console.log('Math.round = ' + grade);

grade = Math.ceil(score*10);
console.log('Math.ceil = ' + grade);

grade = Math.floor(score*10);
console.log('Math.floor = ' + grade);

grade = Math.trunc(score*10);
console.log('Math.trunc = ' + grade);

grade = parseInt(score*10);
console.log('parseInt = ' + grade);


function toCelsius(f) {
    return (5/9) * (f-32);
}
let value = toCelsius;  // 함수이름만 놓으면 출력시 text로 인식
console.log(value);

let x = 9007199254740992 === 9007199254740993;
console.log(x);