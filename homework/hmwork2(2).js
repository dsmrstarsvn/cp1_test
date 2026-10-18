
let streak = "Lập trình";


let longstreak = streak + " JavaScript";
console.log("Chuỗi sau khi nối: " + longstreak);


let shortstreak = chuoiDaNoi.substring(0, 8);
console.log("Chuỗi sau khi cắt: " + shortstreak);


var doDai = longstreak.length;
console.log("Độ dài của chuỗi đã nối là: " + doDai);

var doDai = shortstreak.length;
console.log("Độ dài của chuỗi đã nối là: " + doDai);


let chuoiNguoiDung = prompt("Vui lòng nhập một chuỗi: ");

if (chuoiNguoiDung !== null) {
    console.log("Chuỗi in hoa: " + chuoiNguoiDung.toUpperCase());
}

var username = "hghg"
var age = 33
console.log(`Tên bạn là ${username} và bạn ${age} tuổi`)


let input = prompt("Vui lòng nhập một câu: ");

if (input !== null) {
    // Thuộc tính .length đếm số ký tự trong chuỗi (bao gồm cả khoảng trắng)
    let soKyTu = input.length; 
    console.log(`Độ dài của câu đó là: ${soKyTu}`);
}