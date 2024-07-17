let output = '';
const size = 5;

for (let i=1; i <= size; i++) {
    output += `${i}:`;
    for (let k = size; k > i; k--) {
        output += ' ';
    }
    for (let k = 0; k < 2*i-1; k++) {
        output += '*';
    }
    output += '\n';
    // console.log(output);
}
for (let i=size-1; i > 0; i--) {
    output += `${i}:`;
    for (let k=size; k>i; k--) {
        output += ' ';
    }
    for (let k=0; k < 2*i-1; k++) {
        output += '*';
    }
    output += '\n';
    // console.log(output);
}
console.log(output);