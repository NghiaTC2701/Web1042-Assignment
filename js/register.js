var msv = document.getElementById("msv");
var fname = document.getElementById("name");
var email = document.getElementById("email");
var gender = document.getElementsByName("gender");
var checkboxs = document.getElementsByName("checkbox");
var nation = document.getElementById("nation");
var note = document.getElementById("note");
var genderNho = document.getElementById("gender-nho");
var hobby = document.getElementById("hobby");

var errorID = document.getElementById("error-id");
var errorName = document.getElementById("error-name");
var errorEmail = document.getElementById("error-email");
var errorGender = document.getElementById("error-gender");
var errorCheckBox = document.getElementById("error-checkbox");
var errorNation = document.getElementById("error-nation");
var errorNote = document.getElementById("error-note");
var errors = document.getElementsByClassName("error");
var emailPattern = /\S+@+\S+\.\S+/;

var form = document.getElementById("form");

form.onsubmit = function() {
    var check = true;
    var checkboxsFlag = 0;
    if (msv.value == "") {
        errorID.innerHTML = "Không được để trống mã sinh viên";
        msv.style.backgroundColor = "yellow";
        check = false;
    }
    if (fname.value == "") {
        errorName.innerHTML = "Không được để trống tên";
        fname.style.backgroundColor = "yellow";
        check = false;

    }
    if (email.value == "") {
        errorEmail.innerHTML = "Không được để trống email";
        email.style.backgroundColor = "yellow";
        check = false;
    } else if (email.value.match(emailPattern) == null) {
        errorEmail.innerHTML = "Sai định dạng Email";
        email.style.backgroundColor = "yellow";
        check = false;
    }

    if (!gender[0].checked && !gender[1].checked) {
        errorGender.innerHTML = "Vui lòng chọn giới tính";
        genderNho.style.border = "1px solid red";
        check = false;
    }
    for (var i = 0; i < checkboxs.length; i++) {
        if (checkboxs[i].checked) checkboxsFlag++;
    }
    if (checkboxsFlag == 0) {
        errorCheckBox.innerHTML = "Vui lòng chọn 1 sở thích";
        hobby.style.border = "1px solid red";
        check = false;
    }
    if (nation.value == "") {
        errorNation.innerHTML = "Vui lòng chọn quốc gia";
        nation.style.backgroundColor = "yellow";
        check = false;
    }
    if (note.value < 5) {
        errorNote.innerHTML = "Không được ít hơn 200 chữ"
        note.style.backgroundColor = "yellow";
        check = false;
    }
    if(check==true){
        alert("Đăng kí thành công!");
    }
    return check;
}

function removeAll() {
    msv.style.backgroundColor = "";
    fname.style.backgroundColor = "";
    email.style.backgroundColor = "";
    genderNho.style.border = "";
    hobby.style.border = "";
    nation.style.backgroundColor = "";
    note.style.backgroundColor = "";
    for (e of errors) e.innerHTML = "";
}
function removeID() {
    msv.style.backgroundColor = "";
    errorID.innerHTML = "";
}
function removeName() {
    fname.style.backgroundColor = "";
    errorName.innerHTML = "";
}
function removeEmail() {
    email.style.backgroundColor = "";
    errorEmail.innerHTML = "";
}
function removeGender() {
    genderNho.style.border = "";
    errorGender.innerHTML = "";
}
function removeHobbies() {
    hobby.style.border = "";
    errorCheckBox.innerHTML = "";
}
function removeNation() {
    nation.style.backgroundColor = "";
    errorNation.innerHTML = "";
}
function removeNote() {
    note.style.backgroundColor = "";
    errorNote.innerHTML = "";
}


