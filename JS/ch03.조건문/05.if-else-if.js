/*
*  if ()
*  else if ()
*  ....
*  else
*/

// score
let score = Math.ceil(Math.random() * 60) + 40;    // 41 ~ 100 사이의 정수
let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';

console.log(`점수: ${score}, 학점: ${grade}`)

// 문자열 배열을 이용한 풀이 (개인적)
let grade2 = '     FDCBAA';
let score2 = Math.floor(score/10);
console.log(grade2[score2] + ' : score2['+score2+']');

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어 지면 Buzz, 5와 7 둘다 나누어지면 FizzBuzz 출력
// 위의 경우가 아니면 숫자를 출력

//  score = 25;
let FizzBuzz = '';
if (score%5 ==0 && score%7 ==0) {
    FizzBuzz = `${score}는 5와 7로 나누어져서 FizzBuzz 입니다.`;
} else if (score%5 ==0) {
    FizzBuzz = `${score}는 5로 나누어져서 Fizz 입니다.`;
} else if (score%7 ==0){
    FizzBuzz = `${score}는 7와 나누어져서 Buzz 입니다.`;
} else
    FizzBuzz = `${score}는 7와 5로 나누어 지지않습니다.`;
console.log(FizzBuzz);
