var data = document.getElementById("data");
var checkall = document.getElementById("checkall");
var mucGia = document.getElementById("muc-gia");
var rows = data.getElementsByTagName("tr");
var tiens = document.getElementsByClassName("tien"); //Cột thành tiền
var soLuong = document.getElementsByName("soLuong"); //số lượng của sản phẩm
var tongTien = document.getElementById("tongTien");
var checkboxes = document.getElementsByName("checkbox");

//Hiển thị sản phẩm theo mức giá :  "none" or ""
function styleDisplay(dis) {
    for (e of rows) e.style.display = dis;
}
//Lấy mức giá
function layMucGia(duoi, tren) {
    styleDisplay("none");
    if (tren == 0) {
        tren = Infinity // gán mức giá vô cùng
    } else if (duoi == 0 && tren == 0) {
        styleDisplay("");
    }
    for (var i = 0; i < rows.length; i++) {
        var gia = rows[i].children[2].innerText;
        if (gia > duoi && gia <= tren) {
            rows[i].style.display = "";
        }
    }
}
//Hiện thị sản phẩm theo mức giá
function ShowSanPham() {
    switch (mucGia.value) {
        case "1": {
            layMucGia(0, 50);
            break;
        } case "2": {
            layMucGia(50, 100);
            break;
        } case "3": {
            layMucGia(100, 300);
            break;
        } case "4": {
            layMucGia(300, 500);
            break;
        } case "5": {
            layMucGia(500, 0);
            break;
        } case "6": {
            layMucGia(0, 0);
            break;
        }
    }
}

function checkGia(source) {
    var row = source.parentElement.parentElement;
    var moSoLuong = row.getElementsByTagName("input")[1];
    if (source.checked == true) {
        moSoLuong.disabled = false;
    } else {
        moSoLuong.disabled = true;
    row.getElementsByTagName("input")[1].value = 0;
    countTien();
    }
}

function checkGiaAll() {
    if (checkall.checked == true) {
        for (var i = 0; i < rows.length; i++) {
            rows[i].getElementsByTagName("input")[0].checked = true;
            rows[i].getElementsByTagName("input")[1].disabled = false;
            rows[i].getElementsByTagName("input")[1].value = 0;
        }
    } else {
        for (var i = 0; i < rows.length; i++) {
            rows[i].getElementsByTagName("input")[0].checked = false;
            rows[i].getElementsByTagName("input")[1].disabled = true;
            tiens[i].innerText=0;
            tongTien.innerHTML = 0;
        }
    }
}
function countTien() {
    var sum = 0;
    for (var i = 0; i < rows.length; i++) {
        var gia = rows[i].getElementsByTagName("td")[2].innerText;
        tiens[i].innerText = soLuong[i].value * gia;
        sum += Number(tiens[i].innerText);
    }
    tongTien.innerHTML = sum;
}