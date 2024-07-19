// 1. 1에서 1000사이에 0은 몇번, ..., 9는 몇번 사용되었는가?
let sum = 0;
let sumk = '';
for (let k=0; k<10; k++) {
    for (let i=1; i<1000; i++ ) {
        let nstr = String(i);
        if (nstr.indexOf(k) >= 0) {
            sum ++;
            // console.log(k+'['+nstr+'] '+ nstr.indexOf(k));
        }
    }
    sumk += `${k}: ${sum}\r\n`;
    sum = 0;
}
console.log(sumk);

// 2. 2. C:/Workspace/Frontend/JS/ch06.객체/Q2.연습문제.js
//    위 문자열에서 파일명 Q2.연습문제.js 만 분리하세요.
let filePath = '2. C:/Workspace/Frontend/JS/ch06.객체/Q2.연습문제.js'
let filePathArray = filePath.split('/');
console.log(filePathArray.pop());
// console.log(filePathArray);

// 3. 두개의 새자리수를 곱해서 나온 결과가 palindrome일때
//    가장 큰 palindrome 수는 어떤 수를 곱해서 나온 결과인가?
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

let num = '', result='';
let numArry = [];
let numArry2 = [];
for (let i=100; i<=999; i++) {
    for (let k=100; k<=999; k++) {
        num = String(i*k);
        if (isPalindrome(num)) 
        {
            numArry.push(num);
            numArry2.push(`${i} x ${k}`);
        }
    }
}
numArry.sort((a,b) => b-a);
console.log(numArry[0]);


// 4. 다음 문장에서 the 단어는 몇번 사용되었는가?
let centens = 'let sample = \`the grown-ups\' response, this time, was to advise me to lay aside my drawings of boa constrictors, whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to the.\`;'
centens = centens.replace(/[-',.]/g,'').toLowerCase();
console.log(centens);
// console.log(centens.includes('the'));
let cnt = 0;
let temp = '';
for (i=0; i<centens.length-1; i++) {
    temp = centens.substring(i,i+3);
    // console.log(temp);
    if (temp=='the') cnt ++;
}
console.log(`위 문장에서 [the]는 ${cnt}번 사용되었습니다.`);