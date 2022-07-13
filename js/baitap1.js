/**
 * Bài 1
 * Tính lương nhân viên
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * soNgay (số ngày tính lương)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến soNgay, ngayLuong, luongnv
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * luongnv = soNgay * ngayLuong;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * luongnv
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
    else if(month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11){
        maxDay = 30;
    }
    else{
        maxDay = 31;
    }
        
    if (day1 == 1) {
            nextDay = day1 + 1;
            previousDay = 31;
            nextMonth = month1;
            previousMonth = month1 - 1;
            nextYear = year1;
            previousYear = year1;
        }
        else if (day1 == maxDay) {
            nextDay = 1;
            previousDay = day1 - 1;
            nextMonth = month1 + 1;
            previousMonth = month1;
            nextYear = year1;
            previousYear = year1;
        }
        else if (day1 > 1 && day1 < maxDay) {
            nextDay = day1 + 1;
            previousDay = day1 - 1;
            nextMonth = month1;
            previousMonth = month1;
            nextYear = year1;
            previousYear = year1;
        }

    if (month1 == 1) {
        if (day1 == 1) {
            previousMonth = 12;
            previousYear = year1 - 1;
        }
    }

    if (month1 == 2) {
        if (flag == true) {
            if (day1 == 29) {
                nextDay = 1;
                nextMonth = month1 + 1;
            }
        } else {
            if (day1 == 28) {
                nextDay = 1;
                nextMonth = month1 + 1;
            }
        }
    }

    if (month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11) {
        if (day1 == 30) {
            nextDay = 1;
            nextMonth = month1 + 1;
        }
    }

    if (month1 == 5 || month1 == 7 || month1 == 10 || month1 == 12) {
        if (day1 == 1) {
            previousDay = 30;
        }
    }

    if (month1 == 12) {
        if (day1 == 31) {
            nextMonth = 1;
            nextYear = year1 + 1;
        }
    }

    if(day1 <= maxDay){
        nextTime = nextDay + "/" + nextMonth + "/" + nextYear;
        previousTime = previousDay + "/" + previousMonth + "/" + previousYear;
        document.getElementById("txtResult1").innerHTML = "Ngày tiếp theo: " + nextTime + "<br>Ngày trước đó: " + previousTime;
    }
    else{
        document.getElementById("txtResult1").innerHTML = "Vui lòng xem lại ngày nhập";
    }
    
}

document.getElementById("btnTinh1").onclick = timNgay;