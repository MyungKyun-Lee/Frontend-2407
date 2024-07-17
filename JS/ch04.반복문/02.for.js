let summerFruits = ['수박','참외','복숭아','포도'];

// for (let i = 0; i<=3; i++) {
//     console.log(summerFruits[i]);
// }
// for (let i = 0; i<4; i++) {
//     console.log(summerFruits[i]);
// }
for (let i = 0; i< summerFruits.length; i++) {
    console.log(summerFruits[i]);
}

// 1에서 100사이의 정수의 합 구하기
let sum100 = 0;
for (let i=1; i<=100; i++) {
    sum100 += i;
}
console.log(`1에서 100사이의 정수의 합 = ${sum100}`);

// 1에서 100사이의 홀수의 합 구하기
let sumOdd = 0;
// for (let i=1; i<=100; i++) {
//     if (i%2 == 1)
//         sumOdd +=i;
// }
for (let i=1; i<=100; i +=2) {
    sumOdd += i;
}
console.log(`1에서 100사이의 홀수의 합 = ${sumOdd}`);

// 학습 연습
// sumOdd = 0;
// for (let i=2; i<=100; i +=2) {
for (let i=2, sumOdd=0; i<=100; i +=2) {
    sumOdd += i;
    console.log(`1에서 100사이의 짝수의 = ${sumOdd}`);
}
console.log(`1에서 100사이의 짝수의 합합= ${sumOdd}`);  // <--- sumOdd 변수가 for 외부변수로 내부합과 다름

// 1에서 100사이의 짝수의 합 구하기
let sumEven = 0;
for (let i=2; i <= 100; i +=2) {
    sumEven += i;
}
console.log(`1에서 100사이의 짝수의 합 = ${sumEven}`);

// 1에서 100사이의 배수의 합 구하기
let sumTree = 0;
for (let i = 3; i<=100; i+=3) {
    sumTree += i;
}
console.log(`1에서 100사이의 3배수의 합 = ${sumTree}`);

// 200에서 100사이의 5의 배수의 합
let sum5 = 0;
for (let i = 200; i>=100; i-=5) {
    sum5 += i;
}
console.log(`1에서 100사이의 5의 배수의 합 = ${sum5}`);

// 하루는 몇분이냐?
let sumMinute = 0;
for (let hour = 0; hour <=23; hour++) {
    for (let minute=1;minute <=60; minute++) {
        sumMinute++;
    }
    // console.log(sumMinute);
}
console.log(`하루는 ${sumMinute}분 입니다.`);