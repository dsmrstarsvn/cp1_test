let n;

do {
    n = Number(prompt("nhập một số nguyên dương n:"));
} while (!Number.isInteger(n) || n <= 0);

let tongChan = 0;
let tongLe = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        tongChan += i;
    } else {
        tongLe += i;
    }
}

console.log(`Tổng của tất cả các số chẵn từ 1 đến ${n} là: ${tongChan}`);
console.log(`Tổng của tất cả các số lẻ từ 1 đến ${n} là: ${tongLe}`);