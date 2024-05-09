function check(event){
    event.preventDefault(); // 태그에 이미 있는 동작을 중지.

    let uname = document.loginForm.uname.value;
    let age = document.loginForm.age.value;
    let gender = document.loginForm.gender.value;

    console.log(uname);
    console.log(age);
    console.log(gender);

    // 유효성 검사
    if(uname === ''){
        alert('이름을 입력하세요!');
        document.loginForm.uname.focus();
        return false;
    }

    if(age === ''){
        alert('나이를 입력하세요!');
        document.loginForm.age.focus();
        return false;
    }

    alert('전송 완료');
    alert(age);
    document.loginForm.submit();
    return true;
}

// 콘솔창에서 진행해 봄.
// document.loginForm.gender.querySelectorAll('option')[0].selected = true;