/**
 * Bài 2
 * Tính trung bình 5 số
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * number1, number2, number3, number4, number5 (các số cần tính)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến number1, number2, number3, number4, number5, trungbinh
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * trungbinh = (number1 + number2 + number3 + number4 + number5) / 5;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * trungbinh
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

    switch (month) {
        case 1:
            day = 31;
            break;
        case 2:
            day = flag == true ? 29 : 28;
            break;
        case 3:
            day = 31;
            break;
        case 4:
            day = 30;
            break;
        case 5:
            day = 31;
            break;
        case 6:
            day = 30;
            break;
        case 7:
            day = 31;
            break;
        case 8:
            day = 31;
            break;
        case 9:
            day = 30;
            break;
        case 10:
            day = 31;
            break;
        case 11:
            day = 30;
            break;
        case 12:
            day = 31;
            break;
        default:
            day = 0;
            break;
    }
    document.getElementById("txtResult2").innerHTML = "Tháng " + month + "/" + year + " có: " + day + " ngày";
}

document.getElementById("btnTinh2").onclick = timNgay;
