// 1. 1에서 1000사이에 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되었는가?
//    1234567891011121314...9991000
let numStr = '';
for (let i = 1; i <= 1000; i++)
    numStr += i;

let count1 = 0, count2 = 0;
for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == '1')
        count1++;
    if (numStr[i] == '2')
        count2++;
}
console.log(count1, count2);

let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      // new Array(10).fill(0)
for (let digit of numStr) {
    let num = parseInt(digit);
    countArr[num]++;
}
console.log(countArr);      // 192, 301, 300, ..., 300