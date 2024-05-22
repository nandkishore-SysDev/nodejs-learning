// JavaScript break Statement

while (true) {
    let num = Number(prompt("Enter a number: "));

    if (num == 0) {
        break;
    }
    console.log(num);
}


//JavaScript break With for Loop

for (let i = 0; i <= 5; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

let sum = 0;

while (true) {
    let num = Number(prompt("Enter a number: "));

    if (num < 0) {
        break;
    } else {
        sum += num;
    }
}

console.log('sum: ${sum}');