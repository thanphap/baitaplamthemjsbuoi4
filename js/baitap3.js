/**
 * Bài 3
 * Quy đổi USD sang VND
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * soUSD (số USD cần quy đổi)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến giaUSD, soUSD, quydoiVND
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * quydoiVND = giaUSD * soUSD;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * quydoiVND
 */

function readNumber() {
    var number = document.getElementById("number").value;
    var hangTram = 0;
    var hangChuc = 0;
    var hangDonvi = 0;
    var readNumber = "";
    hangTram = Math.floor(number / 100);
    hangChuc = Math.floor(number % 100 / 10);
    hangDonvi = number % 100 % 10;
    console.log(hangTram, hangChuc, hangDonvi);

    if (hangTram > 0) {
        readNumber = docSo(0, hangTram) + "trăm ";
    }

    if (hangTram > 0 && hangChuc == 0 && hangDonvi > 0) {
        readNumber += docSo(0, hangChuc)
    }
    else if (hangChuc == 1) {
        readNumber += "mười "
    }
    else if (hangChuc > 1) {
        readNumber += docSo(0, hangChuc) + "mươi ";
    }

    if (hangDonvi > 0) {
        readNumber += docSo(hangChuc, hangDonvi)
    }

    document.getElementById("txtResult3").innerHTML = "Đọc số: " + readNumber;
}

document.getElementById("btnTinh3").onclick = readNumber;

function docSo(num1, num2) {
    var digit = "";
    switch (num2) {
        case 0:
            digit = "lẻ ";
            break;
        case 1:
            if (num1 > 1) {
                digit = "mốt ";
            }
            else {
                digit = "một ";
            }
            break;
        case 2:
            digit = "hai ";
            break;
        case 3:
            digit = "ba ";
            break;
        case 4:
            if (num1 > 1) {
                digit = "tư ";
            }
            else {
                digit = "bốn ";
            }
            break;
        case 5:
            if (num1 > 0) {
                digit = "lăm ";
            }
            else {
                digit = "năm ";
            }
            break;
        case 6:
            digit = "sáu ";
            break;
        case 7:
            digit = "bảy ";
            break;
        case 8:
            digit = "tám ";
            break;
        case 9:
            digit = "chín ";
            break;
        default:
            digit = "Lỗi nhập số";
            break;
    }
    return digit;
}