let aEl = document.querySelector('a');
let href = aEl.getAttribute('href');

console.log(href);

// 실습
// 네이버 -> 네이버 지도
// href -> https://map.naver.com/p?c=15.00,0,0,0,dh
// target -> _blank

aEl.innerText = '네이버 지도';
aEl.setAttribute('href', 'https://map.naver.com/p?c=15.00,0,0,0,dh');
aEl.setAttribute('target', '_blank');

// 클래스 속성 조작도 가능하나, classList 로 조작하자.
// 그 이유는 이 방식으로는 class 하나만 삭제 불가능!