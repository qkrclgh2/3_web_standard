// id 속성값이 title인 요소 노드 선택하기
const idElement = document.getElementById('title');
console.log(idElement)

// class 속성값이 text인 요소 노드 모두 선택하기
const classElement = document.getElementsByClassName('text');
console.log(classElement)

for(let el of classElement) {
    console.log(el)
}

// p 태그에 해당하는 요소 노드 모두 선택하기
const tagElement = document.getElementsByTagName('p');
console.log(tagElement)