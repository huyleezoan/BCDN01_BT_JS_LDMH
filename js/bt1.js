// Bài tập 1: tính tiền lương nhân viên
// Mô hình 3 khối
/**
 * Khối 1:
 * Số ngày làm
 * lương 1 ngày: 100.000
 * KHối 2:
 * B1: Tạo biến day, totalSalary,payRoll
 * B2: Tạo biến và gán giá trị SALARY_PER_DAY = 100000, day
 * B3: Thiết lập công thức tính lương
 * payRoll =   SALARY_PER_DAY * day;
 * B4: In kết quả
 * Khối 3:
 * In tiền lương nhân viên
 */

const SALARY_PER_DAY = 100000;
var day = 100;
var payRoll;
payRoll = day * SALARY_PER_DAY;
console.log("The total salary of the employee is: " + new Intl.NumberFormat('vi-VN').format(payRoll));
