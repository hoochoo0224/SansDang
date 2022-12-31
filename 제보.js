let form = document.report;
function clickSubmit() {

    if (form.name.value == "" || form.phoneNumber.value == "" || form.message.value == "") {
        alert("필수 입력란이 비어있습니다. 확인해주세요.");
    }
    else if (form.name.value == "사진" && form.phoneNumber.value == "24" && form.message.value == "pw:ilovesans") {
        location.href="사진㉾.html";
    }
    else {
        alert('제보해주셔서 감사합니다.');
        setTimeout(function(){document.forms['report'].reset();}, 3000);
    }

    return false;
}