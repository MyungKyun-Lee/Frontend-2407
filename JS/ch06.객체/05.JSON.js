// JSON - Javascript Object Notation
// 이기종 컴퓨터간에 데이터를 주고 받는 표준 - XML(eXtensivble Markup Langeage)
// 실제는 json 이 업계 표준임(de facto standard)

let name = 'James', age = 27, job = '프로그래머';
let person = {name: name, age:age, job:job};
let newPerson = {name, age, job};                   // key 이름과 변수명이 같으면 하나만 사용가능
console.log(person, newPerson);

let externalForm = JSON.stringify(person);
console.log('externalForm: ' + externalForm);

let internalForm = JSON.parse(externalForm);
console.log(internalForm);

console.log('----------- 배열추가 ---------------');
let personArray = [person, {name: 'Maria', age: 25, job: '디자이너'}];
console.log(JSON.stringify(personArray));
console.log(personArray);

// comparator
// (a-b) => a-b   오름차순
// (a-b) => b-a   내림차순
console.log('----------- sort ---------------');
personArray.sort((a,b) => b.name - a.name);
console.log(personArray);
personArray.sort((a,b) => a.age - b.age);
console.log(personArray);