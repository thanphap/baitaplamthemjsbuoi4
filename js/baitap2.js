/**
 * Bài 2
 * Tính số ngày trong tháng
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: cho 2 giá trị tháng, năm
 * month, year
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến 
 * month, year, flag, day
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * 1: Kiểm tra năm nhập vào có phải năm nhuận không
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
 * 2: Nếu tháng 2 thì xét năm nhuận và gán số ngày tương ứng
 * day = flag == true ? 29 : 28;
 * 3: Nếu các tháng 4, 6, 9, 11 thì gán số ngày là day = 30
 * 4: Các tháng còn lại gán day = 31
 * 
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * day
 * 
 */

function timNgay() {
    var month = Number(document.getElementById("month2").value);
    var year = Number(document.getElementById("year2").value);
    var flag = false;
    var day = 0;

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                flag = true;
            } else {
                flag = false;
            }
        }
        else {
            flag = true;
        }
    }

    if (month == 2) {
        day = flag == true ? 29 : 28;
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        day = 30;
    }
    else {
        day = 31;
    }

    document.getElementById("txtResult2").innerHTML = "Tháng " + month + "/" + year + " có: " + day + " ngày";
}

document.getElementById("btnTinh2").onclick = timNgay;
