
let users = [
    { id: 1, ten: "Nguyen Van A" },
    { id: 2, ten: "Tran Thi B" }
];
console.log("Mảng ban đầu:", users);


users.push({ id: 3, ten: "Le Van C" });
console.log("Sau khi thêm:", users);


let idCanCapNhat = 2;
let index = users.findIndex(user => user.id === idCanCapNhat);
if (index !== -1) {
    users[index].ten = "Tran Thi Be";
}
console.log("Sau khi cập nhật tên:", users);


let idCanXoa = 1;
users = users.filter(user => user.id !== idCanXoa);
console.log("Sau khi xóa user:", users);


let person = {
    ten: "Hoang Van D",
    tuoi: 25,
    thanhPho: "Hồ Chí Minh"
};
console.log("Object person ban đầu:", person);


person.email = "hoangvand@example.com";
console.log("Sau khi thêm email:", person);


delete person.tuoi;
console.log("Sau khi xóa tuổi:", person);