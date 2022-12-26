let form = document.report;
function clickSubmit() {

    if (form.name.value == "" || form.phoneNumber.value == "" || form.message.value == "") {
        alert("필수 입력란이 비어있습니다. 확인해주세요.");
    }
    else if (form.name.value == "고주원" && form.phoneNumber.value == "010 1234 5678" && form.message.value == "사진 보여줘▣") {
        location.href="사진.html";
    }
    else {
        alert('제보해주셔서 감사합니다.');
        setTimeout(function(){document.forms['report'].reset();}, 3000);
    }

    return false;
}