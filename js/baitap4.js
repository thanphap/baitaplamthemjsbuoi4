/**
 * Bài 4
 * Tính diện tích, chu vi hình chữ nhật
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Dữ liệu có sẵn (Input)
 * chieuDai, chieuRong (chiều dài, chiều rộng HCN)
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến chieuDai, chieuRong, dienTich, chuVi
 * B2: gán giá trị cho biến lấy từ id html tương ứng
 * B3: Lập công thức tính toán
 * dienTich = chieuDai*chieuRong;
 * chuVi = (chieuDai+chieuRong)*2;
 * B4: thông báo kết quả ở id tương ứng của html
 * 
 * Khối 3: Kết quả (Output)
 * dienTich, chuVi
 * 
 */

function timHocsinh() {
    var ten1 = document.getElementById("ten1").value;
    var ten2 = document.getElementById("ten2").value;
    var ten3 = document.getElementById("ten3").value;
    var x0 = Number(document.getElementById("x0").value);
    var y0 = Number(document.getElementById("y0").value);
    var x1 = Number(document.getElementById("x1").value);
    var y1 = Number(document.getElementById("y1").value);
    var x2 = Number(document.getElementById("x2").value);
    var y2 = Number(document.getElementById("y2").value);
    var x3 = Number(document.getElementById("x3").value);
    var y3 = Number(document.getElementById("y3").value);
    var tenHocsinh = "";
    var d1 = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
    var d2 = Math.sqrt(Math.pow((x2 - x0), 2) + Math.pow((y2 - y0), 2));
    var d3 = Math.sqrt(Math.pow((x3 - x0), 2) + Math.pow((y3 - y0), 2));
    var dMax = d1;

    console.log(d1,d2,d3);
    
    if (dMax < d2) {
        dMax = d2;
    }
    if (dMax < d3) {
        dMax = d3;
    }
    console.log(dMax);

    if (dMax == d1) {
        tenHocsinh = ten1;
    }
    else if (dMax == d2) {
        tenHocsinh = ten2;
    }
    else if (dMax == d3) {
        tenHocsinh = ten3;
    }
    document.getElementById("txtResult4").innerHTML = tenHocsinh;
}

document.getElementById("btnTinh4").onclick = timHocsinh;