// Bài tập 4: Tính diện tích và chu vi hình chữ nhật 
// Mô hình 3 khối
/**
 * Khối 1:
 * Chiều dài và chiều rộng hình chữ nhật
 * Khối 2:
 * B1: Tạo biến width, height, area, perimeter
 * B2: Gán giá trị width, height
 * B3: Thiết lập công thức tính diện tích:
 * area = width * height;
 * perimeter= (width + height)*2;
 * B4: In kết quả
 * Khối 3:
 * In chu vi và diện tích hình chữ nhật
 */

var width = 5.5;
var height = 6.6;
var area, perimeter;
area = width * height;
perimeter = (width + height) * 2;
console.log("The perimeter of the rectangle is: " + perimeter);
console.log("The area of the rectangle is: " + area);