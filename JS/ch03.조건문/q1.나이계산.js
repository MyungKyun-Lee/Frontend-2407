// 생년월일에 따른 나이 계산

const bYear = 1991, bMonth = 7, bDay = 17;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;      // JS는 월에 1을 더해주어야 함
let tDay = today.getDate();

let age = 0;
// 현재월이 생일보다 작은 경우
// 현재월이 생일보다 큰 경우
// 현재월이 생일보다 같은 경우 - 현재일과 생일을 비교

if (tMonth-bMonth < 0) {
    age = tYear - bYear -1;
} else if (tMonth-bMonth > 0) {
    age = tYear - bYear;
} else if (tDay-bDay >= 0) {
        age = tYear - bYear;
} else 
        age = tYear - bYear-1;

console.log(`생일: ${bYear}-${bMonth}-${bDay}, 나이: ${age} ${tYear - bYear}`)
