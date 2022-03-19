// cú pháp var [tên biến] = [giá trị];
var bienA = 5;
var bienB = "bien du lieu";
var m = 2.5,
  n = "bien n";
var x, y;

// in giá trị trong () ra màn hình
document.write("<h1>Giá trị: " + bienA + "</h1>");

bienA = "Biến A đã thay đổi giá trị";

document.write("<h1>Giá trị: " + bienA + "</h1>");

// khai báo kiểu hằng số: dùng const
const hangSo = 3;

// 0123456789 abcdef
// alert(0xd);

// NaN
// isNaN()
// kiểm tra tham số truyền vào không phải là số
// nếu là số => false
// nếu không => true
// alert(isNaN("4"));
// alert(isNaN("four"));

// alert("4" === 4);
var random = Math.random();
document.write("<h1>Random: " + random + "</h1>");
// alert(Math.floor(2.9));

// String
var bienString = "Hello world \t Hello JS";
var string1 = new String("Hellow world \n Hello JS");
document.writeln(bienString + "<br>" + string1);
// document.writeln(string1);

// length
var testLength = "12345";
// alert(testLength.length);

// concat
var firstString = " Day la mot xau ky tu ";
var finalString = firstString.concat(
  " Them mot xau ky tu nua ",
  " String thu 3"
);
// alert(finalString);

// upperCase: chuyển chuỗi kí tự sang chữ in hoa
// lowerCase: chuyển chuỗi kí tự sang chữ in thường
var firstString = "     Day la mot xau ky tu         ";
var finalString = firstString.toLowerCase();
// alert(firstString);
// alert(finalString);
// alert(firstString);

// ép kiểu
var bienA = 100;
// alert("Hello" + bienA);

var bienB = String(100);
// alert(typeof bienB);

var bienC = Number("200");
// alert(typeof bienC);

// alert(++bienA);
// alert(--bienA);
// alert(bienA--);

// &&
if (bienA > 5 && bienA < 200) {
  // cả 2 vế thỏa mãn điều kiện true thì mới thực hiện
  // đoạn code này
}

// ||
// &&
if (bienA > 5 || bienA < 200) {
  // chỉ cần 1 trong 2 vế thỏa mãn điều kiện true thì thực hiện
  // đoạn code này
}

// luôn luôn tính cả 2 biểu thức rồi AND 2 kết quả lại
if ((bienA > 5) & (bienA < 200)) {
}

// hàm promp
// var x = prompt();
// var y = prompt();
// console.log(x);
// console.log(typeof x);
//  alert (x);

// lệnh lựa chọn đơn

var bienLuaChon = 0;

// khi mà logic xử lí chỉ có 1 lệnh duy nhất
// có thể bỏ qua {}
if (bienLuaChon === 0) {
  alert("Hello world!");
}

var x = prompt("Hay nhap vao so be hon 100 va lon hon 50:");
console.log("gia tri x", x);
if (x < 51 || x > 99) {
  document.write("<h1>Ban vua nhap gia tri la: " + x + "</h1>");
  document.write(
    "<h2>Gia tri nay khong nam trong" + " khoang tu 50 den 100</h2>"
  );
}

// bài tập
// cho mang arr chứa các giá trị số và string
// hãy tạo giá trị cho mảng arr

var arr = [];

array.forEach((element) => {
  // viết code ở đây
});

// hãy lọc ra các phần tử trong mảng có kiểu số
// sau đó in các phần tử kiểu số đó ra màn hình
