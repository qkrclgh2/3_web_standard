// 클래스 추가
let title = document.querySelector('#title'); // 노드 선택
title.classList.add('add', 'add2'); // 여러 개도 한 번에 추가 가능

// 클래스 삭제
let text1 = document.querySelector('#text1'); // 노드 선택
text1.classList.remove('add'); // 여러 개도 한 번에 추가 가능

// 클래스 토글
let text2 = document.querySelector('#text2'); // 노드 선택
setInterval(function(){
    text2.classList.toggle('add');
}, 1000);