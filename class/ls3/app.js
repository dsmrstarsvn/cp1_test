let result1 = 0/0 // NaN
let result2 = 1/0 //Inf
let result3 = -1/0 //-Inf

console.log(result1)
console.log(result2)
console.log(result3)

//================= TOÁN TỬ ===============
let x=19    //Phép gán : gán giá trị 19 cho x, phép gán 1 dấu =
let y=10    //Phép gán : gán giá trị 10 cho y, phép gán 1 dấu =
console.log (x*y)
console.log (x/y)

let a = 10
a+=5 ; //a mới = a cũ + 5
a-=5 ; //a mới = a cũ - 5
a*=5 ; //a mới = a cũ * 5
a/=5 ; //a mới = a cũ / 5

//============= SO SÁNH -> trả về true / false ==========

let x1= 10
let y1 = 5
console.log(x > y) // true
console.log(x == y) // x bằng y ko? => false
console.log(x != y) // x khác y ko?? => true

let n = 1 // number
let m = "1" // string 
let p = true // boolean - true là 1, false là 0
console.log(n==p) // so sánh == - chỉ cần so sánh giá trị : True
console.log(n===p) // so sánh === - phải cùng kiểu dữ liệu và giá trị : False

// && : and ; || : or
let a1 = true
let b1 = false
console.log (a1 && b1) // Kết quả : false
console.log (a1 && true) // Kết quả : true
console.log (true || false)

//=================CÂU ĐIỀU KIỆN=================
nhietDo = 44
if (nhietDo > 40) {
    console.log("nongqua")
}
else if (nhietDo > 30) {
    console.log ("binhthuong")
}
else {
    console.log("lanhqua")
}

//==========VÒNG LẶP FOR 
for (let i=3; i<10; i++){
    console.log(i)
}
//==========VÒNG LẶP WHILE 

let j=1
while (6<0){
    console.log(j);
    j++;
}

//==========VÒNG LẶP do WHILE 

let t=1
do {
    console.log(t)
    t++
} while(6<0)