// 자바 스크립트의 주석(comment)
console.log('hello World!!!');
/*
* 반복문 - 여러줄에 걸처서 주석을 작성하는 경우 사용
*/
// 편하게 주석다는 법 - 마우스로 선택후 Ctrl+ / 치면 '//' 자동 표시됨

let sum=0;
for (let i=1; i<=100; i++){
    sum += i;
}
console.log('1에서 100까지의 합은 ',sum);




var name = "홍길동";
if (name !== "임꺾정") {
    var name = "임꺾정";
}
console.log(name);


let name2 = "홍길동";
if (name2 !== "임꺾정") {
    let name = "임꺾정";
}
console.log(name2);