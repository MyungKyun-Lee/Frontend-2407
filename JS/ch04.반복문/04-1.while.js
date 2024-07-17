let i = 1;
let sum =0;
while (i <= 100) {
    sum = sum + i;
    // i = i + 1;
    break;
    i++;
}
console.log(sum);

sum = 0;
for (let k=1; k <= 100; k++) {
    sum = sum + k;
    break;
}
console.log(sum);