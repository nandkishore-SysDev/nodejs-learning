let i = 1;

while (i < 4) {
    console.log(i);
    i += 1;
}

let num = 0, sum =0;

while (num >= 0) {
    sum += num;

    num = parseInt(prompt("Enter a number:"));
}

console.log(`The sum is ${sum}`);

let u = 3;

do {
    console.log(u);
     1--;
} while (u > 0);