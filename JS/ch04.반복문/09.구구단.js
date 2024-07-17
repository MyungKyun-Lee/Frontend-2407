// 구구단
let gugudan = [];
for (i=2; i<=9; i++)  {
    let line = '';
    for (k=1; k<=9; k++) {
        // console.log(`${i} X ${k} = ${i*k}`);
        // line = i + ' X ' + k + ' = ' + i*k;
        line = `${i} X ${k} = ${i*k}`;
        // console.log(line);
    }
    gugudan.push(line);
}
console.log(gugudan);

// 다이아몬드 그리기
let N=5;
for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++) 
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N - 1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++) 
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}