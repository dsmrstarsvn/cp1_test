// KHAI BÁO MẢNG
let wag = [] // Mảng rỗng
let students = ["Salah", "Kaka"]
let score =[6, 7, 6, 8, 9] 
//      0                       1   2           3
let tths =["Salah", 7, true, "HCM"]
// index - element : chỉ số - giá trị
// index bắt đầu từ 0 và tăng dần
console.log(tths[1])

//=================DUYỆT PHẦN TỬ======================
let danhSachHocSinh = ['An', 'Bình', 'Châu']
for (let i = 0 ; i < danhSachHocSinh.length ; i++) {
    console.log(danhSachHocSinh[i])
}

//====================THÊM PHẦN TỬ===================
let a1 = [6, 10, 3]
a1.push(5, 10) // thêm phần tử vào cuối danh sách
console.log(a1)

//====================CẬP NHẬT PHẦN TỬ===================
let a2 = [6, 9, 10, 99]
a2[2] = "Giá trị mới"
console.log(a2)

//====================TÌM KIẾM PHẦN TỬ===================
const fruits = ['apple', 'banana', 'orange', 'apple']
console.log(fruits.indexOf('banana')); // Kết quả: 1
console.log(fruits.indexOf('apple')); // Kết quả: 0
console.log(fruits.indexOf('grape')); // Kết quả: -1

//==============LỆNH SPLICE - CÓ THỂ THÊM, SỬA, XÓA=======================

// thêm
let arr1=[1,2,3,4]
arr1.splice(1,0,"Phần tử mới") // tại vị trí 1, xóa 0 phần tử, thêm "Phần tử mới" tại vị trí này
console.log(arr1)

//xóa
let arr2=[1,2,3,4]
arr2.splice(1, 1) //tại vị trí 1, xóa 1 phần tử
console.log(arr2)

//thay đổi phần tử
let arr3=[1,2,3,4]
arr1.splice(1,1,"Gía trị mới") //tại vị trí 1, xóa 1 phần tử, thêm phần tử "Giá trị mới" tại vị trí này
console.log(arr3)

// xóa nhiều phần tử
let arr4=[1,2,3,4]
arr4.splice(1,3) //tại vị trí 1, xóa 3 phần tử
console.log(arr4)

//============================ĐỐI TƯỢNG TRONG JS======================
let person = {
    firstName : "Dank",
    lastName: "Sao",
    dob: 15
}
console.log(person.firstName)
console.log(person["firstName"])
console.log(person)
//============duyệt đối tượng=============
for (let key in person){
    console.log(key)
}

//========================DANH SÁCH ĐỐI TƯỢNG=======================
let hocSinh =[
    {firstName : "Dank",lastName: "Sao", dob: 15},
    {firstName: "Krillin", lastName: "Trần", dob:17}
]
console.log(hocSinh)