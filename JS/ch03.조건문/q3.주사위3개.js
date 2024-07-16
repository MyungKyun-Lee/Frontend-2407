// 주사위 3개 - 백준도장 2480
// 1 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 2 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 3 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

let d1 = Math.ceil(Math.random() * 6);   // 1 ~ 6 사이의 값
let d2 = Math.ceil(Math.random() * 6);   // 1 ~ 6 사이의 값
let d3 = Math.ceil(Math.random() * 6);   // 1 ~ 6 사이의 값
let maxDice = 0;

if ( d1 == d2 && d1 == d3) {
    money = 10000 + d1 * 1000 ;
} else if ( d1 == d2 || d1==d3 || d2==d3) {
    if (d1==d2) money = 1000 + d1 * 100;
    if (d1==d3) money = 1000 + d1 * 100;
    if (d2==d3) money = 1000 + d2 * 100;
} else {
    // if (d1 > d2 && d1 > d3) money = d1 * 100;
    // if (d2 > d1 && d2 > d3) money = d2 * 100;
    // if (d3 > d1 && d3 > d2) money = d3 * 100;

    // maxDice = d1 > d2 ? d1 : d2;
    // maxDice = maxDice > d3 ? maxDice : d3;
    // money = maxDice * 100;

    maxDice = Math.max(d1,d2,d3);
    money = maxDice * 100;
}
console.log(`주사위1(${d1}) 주사위2(${d2}) 주사위3(${d3}) : 상금은 ${money}원 입니다.`);

switch (true) {
    case ( d1 == d2 && d1==d3 && d2==d3) :
        money = 10000 + d1 * 1000 ; break;
    case (d1==d2) :
        money = 1000 + d1 * 100; break;
    case (d1==d3) :
        money = 1000 + d1 * 100; break;
    case (d3==d2) :
        money = 1000 + d2 * 100; break;
    case (d1 > d2 && d1 > d3) :
        money = d1 * 100; break;
    case (d2 > d1 && d2 > d3) :
        money = d2 * 100; break;
    case (d3 > d1 && d3 > d2) :
        money = d3 * 100; break;
}
console.log(`주사위1(${d1}) 주사위2(${d2}) 주사위3(${d3}) : 상금은 ${money}원 입니다.`);


d1=2;
d2=2;
d3=2;
if ( d1 == d2 == d3) {                          // 에러 없이 실행은 되는데 false
    console.log( `equal ${d1},${d2},${d3}`);  
}
console.log(`ret ${d1},${d2},${d3}  ${d1 == d2 == d3}`);