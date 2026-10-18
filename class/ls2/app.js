console.log("Hello World")

// KHỞI TẠO BIẾN
let name = "Hương" ;
// Một biến thực hiện let 2 thì lỗi, let khởi tạo đúng 1 lần cho 1 biến
// ví dụ let name = "An" thì lỗi, name="An" thì không lỗi'
name = "An";
console.log (name)

if (1==1) {
    // let: tạo biến trong {}/hàm, thì phạm vi hoạt động trong ham/{}
    let x=10;       
    //var: dù khởi tạo ở đâu, thì phạm vi hoạt động là cả chương trình
    //  kể cả trong hoặc ngoài hàm
    var y=100;
    console.log(x)
    
}
console.log(y)

// Một biến var 2 lần vẫn bình thường, khác với let
var age =10;
var age =100;

// Hằng số là số không thể thay đổi, nên không thể cập nhật
const pi = 3.14;
console.log(pi)
// Đặt tên biến theo quy tắc camelCase
let fullName= "Phan"
let hoVaTen ="P D H"

//Quy tắc đặt tên biến
// - không số đầu tiên let 5a = 'vegv'
// - không có ký tự đặc biệt let gg^ ="ghgd", tuy nhiên dấu $ thì hợp lệ

let a$ = 19
console.log(a$)
//CÁC KIỂU DỮ LIỆU TRONG JS
//1. Number - cả số nguyên hay số thực đều Number
let a=10
let score = 98.5

//2. String - Chuỗi
let firstname = "Hương"
let firstname1 = 'Hương'
let firstname2 = `Hương`

let random = "3" // cứ thấy nháy là string -> biến random : String

//3.Boolean = true/false
let check = true

//4.Undefined
let t;

//5. NULL
// XÁC ĐỊNH KIỂU DỮ LIỆU BẰNG TYPEOF()
console.log(typeof(t))
console.log(typeof(check))
console.log(typeof(random))