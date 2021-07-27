// Bài tập 5: Tính tổng 2 ký số
// Mô hình 3 khối
/**
 * Khối 1: 
 * số có 2 chữ số ab
 * Khối 2:
 * B1: Tạo biến num, sum
 * B2: Gán giá trị cho num
 * B3: Thiết lập công thức:
 * Hàng chục thì sẽ lây num bằng cách lấy num chia lấy nguyên cho 10
 * Hàng đơn vị thì sẽ lấy num chia lấy dư cho 10
 * sum = num % 10 + Math.floor(num/10);
 * B4: In kết quả
 * Khối 3:
 * In tổng
 */
var num = 99;
var sum;
sum = num % 10 + Math.floor(num / 10);
console.log("The sum of the digits of " + num + " is: " + sum);