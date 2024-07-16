/*
Math.round(값) - 값을 반올림합니다.
Math.ceil(값) - 값을 올림합니다.
Math.floor(값) - 값을 내림합니다.
Math.parseInt(값) - 값을 정수로 바꿉니다. (값이 소숫점이 있는 숫자일 경우엔 소숫점 이하를 잘라버립니다. 내림)
*/
// 여러개 값중에 하나를 선택
let score = Math.ceil(Math.random() * 50) + 50;   // 51 ~ 100 사이의 정수
let grade = '';

grade = Math.floor(score/10);
// grade = parseInt(score/10);
switch(grade) {
    case 10 :
    case 9 :
        grade = 'A';
        break;
    case 8 :
        grade = 'B';
        break;
    case 7 :
        grade = 'C';
        break;
    case 6 :
        grade = 'D';
        break;
    default : 
        grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);

// +, 0, - 성적 시스템
let sign = '';
if (score % 10 >= 7) 
    sign = '+'
else if (score % 10 >= 3)
    sign = '0';
else
    sign = '-';
console.log(`점수: ${score}, 학점: ${grade+sign}`);

switch(parseInt(score/10)) {
    case 10:
        grade = 'A+'; break;
    case 9:
        grade = 'A' + sign; break;
    case 8:
        grade = 'B' + sign; break;
    case 7:
        grade = 'C' + sign; break;
    case 6:
        grade = 'D' + sign; break;
    default:
        grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);

score = Math.ceil(Math.random() * 10) + 90;   // 91 ~ 100 사이의 정수
switch(true) {
    case score >= 97 :
        grade = 'A+';
        break;
    case score >= 93 :
        grade = 'A0';
        break;
    case score >= 90 :
        grade = 'A-';
        break;
    default : 
        grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);
