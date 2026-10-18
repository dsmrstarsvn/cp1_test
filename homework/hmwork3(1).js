// 1. In ra hình tam giác số

let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

// 2. Hiển thị chuỗi đối xứng

let inputStr = "abc";
let symStr = inputStr;


for (let i = inputStr.length - 2; i >= 0; i--) {
    symStr += inputStr[i];
}

console.log(symStr);