// 표시 되던 말던 텍스트인 친구만 들고 옴
console.log(document.getElementById('container').textContent)

// 화면에 표시되는 텍스트만 가지고 옴
console.log(document.getElementById('container').innerText)

// 해당 노드의 컨텐츠 부분을 가지고 옴.
console.log(document.getElementById('container').innerHTML)

let content = '<p>새롭게 추가해준 p 태그 본문</p>'
document.getElementById('container').innerHTML= content;