// Bài tập 3: Quy đổi tiền 
// Mô hình 3 khối
/**
 * Khối 1: 
 * Giá usd : 23.500 VND
 * Số tiền usd 
 * Khối 2: 
 * B1: Tạo biến VND_money, USD_money, USD_DENOMINATION, 
 * B2: Gán giá trị USD_money, và hằng số USD_DENOMINATION = 23.500
 * B3: Thiết lập công thức:
 * VND_money = USD_money * USD_DENOMINATION;
 * Khối 3: 
 * In kết quả tiền quy đổi
 */
const USD_DENOMINATION = 23500;
var USD_money = 5;
var VND_money;
VND_money = USD_money * USD_DENOMINATION;
console.log("The total mount after converting " + USD_money + " USD to VND is: " + new Intl.NumberFormat('vi-VN').format(VND_money) + " VND");