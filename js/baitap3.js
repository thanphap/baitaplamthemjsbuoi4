/**
 * Bài 3
 * Quy đổi USD sang VND
 *  
*/

/**
 * Sơ đồ 3 khối:
 * Khối 1: cho số nguyên có 3 chữ số
 * number
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến 
 * number
 * hangTram, hangChuc, hangDonvi
 * readNumber
 * 
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * 1: tính số hàng trăm, số hàng chục, số hàng đơn vị
 * hangTram = Math.floor(number / 100);
 * hangChuc = Math.floor(number % 100 / 10);
 * hangDonvi = number % 100 % 10;
 * 2: nếu số hàng trăm > 0 => readNumber = docSo(0, hangTram) + "trăm "
 * 3: Nếu số hàng chục = 0 => readNumber += docSo(0, hangChuc)
 * 4: Nếu hàng chục = 1 => readNumber += "mười "
 * 5: Nếu hàng chục > 1 => readNumber += docSo(0, hangChuc) + "mươi "
 * 6: Nếu hàng đơn vị > 0 => readNumber += docSo(hangChuc, hangDonvi)
 * 
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * readNumber
 * 
 * 
 * function docSo(level, num)
 * switch(num)... case... để chuyển số thành chữ tương ứng
 * level để chuyển cách đọc tương ứng ngữ cảnh 
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
        readNumber += "mười ";
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


function docSo(level, num) {
    var digit = "";
    switch (num) {
        case 0:
            digit = "lẻ ";
            break;
        case 1:
            if (level > 1) {
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
            if (level > 1) {
                digit = "tư ";
            }
            else {
                digit = "bốn ";
            }
            break;
        case 5:
            if (level > 0) {
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