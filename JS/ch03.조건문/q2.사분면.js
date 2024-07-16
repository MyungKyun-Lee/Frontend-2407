// 4분면 백준 
// 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)
// 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.
// let rend = Math.random() > 0.5 ? Math.random()*-1: Math.random()*1;
// console.log(rend);

let x = Math.ceil((Math.random() > 0.5 ? Math.random()*-1: Math.random()*1) * 20);   // -1000 ~ 1000 사이의 값
let y = Math.ceil((Math.random() > 0.5 ? Math.random()*-1: Math.random()*1) * 20);   // -1000 ~ 1000 사이의 값
let result = '';
// x = 3;
// y = 0;

if (x>0 && y>0) result = ' Quadrant1 위치함';
else if (x<0 && y>0) result = ' Quadrant2 위치함';
else if (x<0 && y<0) result = ' Quadrant3 위치함';
else if (x>0 && y<0) result = ' Quadrant4 위치함';
else {
    result = ' XY좌표축 위치함'
}

console.log(`x,y(${x},${y})`+result);