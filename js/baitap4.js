/**
 * Bài 4
 * Tìm sinh viên xa nhất
 */

/**
 * Sơ đồ 3 khối:
 * Khối 1: Cho tên, tọa độ nhà 3 sinh viên và trường học
 * ten1, ten2, ten3
 * x0, y0, x1, y1, x2, y2, x3, y3
 * 
 * Khối 2: Các bước xử lý code
 * B1: tạo biến 
 * ten1, ten2, ten3
 * x0, y0, x1, y1, x2, y2, x3, y3
 * d1, d2, d3
 * dMax
 * 
 * B2: gán giá trị cho biến lấy các giá trị từ form
 * B3: Lập công thức tính toán
 * 1: tính các khoảng cách tương ứng d1, d2, d3
 * d1 = Math.sqrt(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2));
   d2 = Math.sqrt(Math.pow((x2 - x0), 2) + Math.pow((y2 - y0), 2));
   d3 = Math.sqrt(Math.pow((x3 - x0), 2) + Math.pow((y3 - y0), 2));
 * 2: tìm số lớn nhất dMax
 * dMax = d1
 * if (dMax < d2) {
 *    dMax = d2
 * }
 * if (dMax < d3) {
 *    dMax = d3
 * }
 * 3: tìm tên học sinh tương ứng tenHocsinh với (d1, d2, d3) == dMax
 * if (dMax == d1) {
 *    tenHocsinh = ten1;
 * }
 * else if (dMax == d2) {
 *    tenHocsinh = ten2;
 * }
 * else{
 *    tenHocsinh = ten3;
 * }
 * 
 * B4: hiển thị kết quả lên IU
 * 
 * Khối 3: Kết quả (Output)
 * tenHocsinh
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
    else{
        tenHocsinh = ten3;
    }
    document.getElementById("txtResult4").innerHTML = "Nhà sinh viên xa nhất: " + tenHocsinh;
}

document.getElementById("btnTinh4").onclick = timHocsinh;