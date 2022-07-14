/**
 * Bài 1
 * Tìm ngày tháng năm tiếp theo
 */

/**
 * Sơ đồ 3 khối: cho 3 giá trị ngày, tháng, năm
 * Khối 1: 
 * day1, month1, year1
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến:
 * nextDay, previousDay
 * nextMonth, previousMonth
 * nextYear, previousYear
 * nextTime, previousTime
 * flag, maxDay
 * 
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * 1: Kiểm tra năm nhập có phải năm nhuận hay không
 *  if (year % 4 == 0) {
 *       if (year % 100 == 0) {
 *           if (year % 400 == 0) {
 *               flag = true;
 *           } else {
 *               flag = false;
 *           }
 *       }
 *       else {
 *           flag = true;
 *       }
 *   }
 * 2: Kiểm tra tháng và gán số lượng ngày lớn nhất của tháng đó
 * 3: tính và gán giá trị cho ngày tháng năm trước đó và tiếp theo
 *   nextDay = day1 + 1;
 *   previousDay = day1 - 1;
 *   nextMonth = month1;
 *   previousMonth = month1;
 *   nextYear = year1;
 *   previousYear = year1;
 * 4: Kiểm tra ngày đầu tháng thì tính ngày và tháng trước đó
 * 5: Kiểm tra ngày cuối tháng thì tính ngày và tháng sau đó
 * 6: nếu tháng 1 và ngày 1 thì tính tháng và năm trước đó
 * 7: nếu tháng 12 và ngày 31 thì tính tháng và năm sau đó
 * 8: Nếu (0 < ngày nhập < Ngày lớn nhất) thì in ra ngày tháng năm tiếp theo và trước đó
 *    Ngược lại thông báo ngày nhập chưa hợp lệ
 * 
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * nextTime, previousTime
 * 
 */

function timNgay() {

    var day1 = Number(document.getElementById("day1").value);
    var month1 = Number(document.getElementById("month1").value);
    var year1 = Number(document.getElementById("year1").value);
    var nextDay = 0;
    var previousDay = 0;
    var nextMonth = 0;
    var previousMonth = 0;
    var nextYear = 0;
    var previousYear = 0;
    var nextTime = "";
    var previousTime = "";
    var flag = false;
    var maxDay = 0;

    if (year1 % 4 == 0) {
        if (year1 % 100 == 0) {
            if (year1 % 400 == 0) {
                flag = true;
            } else {
                flag = false;
            }
        }
        else {
            flag = true;
        }
    }

    if (month1 == 2) {
        maxDay = flag == true ? 29 : 28;
    }
    else if (month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11) {
        maxDay = 30;
    }
    else {
        maxDay = 31;
    }

    nextDay = day1 + 1;
    previousDay = day1 - 1;
    nextMonth = month1;
    previousMonth = month1;
    nextYear = year1;
    previousYear = year1;

    if (day1 == 1) {
        if (month1 == 5 || month1 == 7 || month1 == 10 || month1 == 12) {
            previousDay = 30;
        }
        else {
            previousDay = 31;
        }
        previousMonth = month1 - 1;
    }
    else if (day1 == maxDay) {
        nextDay = 1;
        nextMonth = month1 + 1;
    }

    if (month1 == 1 && day1 == 1) {
        previousMonth = 12;
        previousYear = year1 - 1;
    }

    if (month1 == 12 && day1 == 31) {
        nextMonth = 1;
        nextYear = year1 + 1;
    }

    if (day1 > 0 && day1 <= maxDay) {
        nextTime = nextDay + "/" + nextMonth + "/" + nextYear;
        previousTime = previousDay + "/" + previousMonth + "/" + previousYear;
        document.getElementById("txtResult1").innerHTML = "Ngày tiếp theo: " + nextTime + "<br>Ngày trước đó: " + previousTime;
    }
    else {
        document.getElementById("txtResult1").innerHTML = "Vui lòng xem lại ngày nhập";
    }
}

document.getElementById("btnTinh1").onclick = timNgay;