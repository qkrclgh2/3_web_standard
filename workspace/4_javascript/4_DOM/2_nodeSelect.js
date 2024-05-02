console.log(document) // 문서 자체가 잡힘

// 모든 노드를 탐색
console.log(document.childNodes[1].lastElementChild.childNodes)

// ★ 요소만 탐색
console.log(document.childNodes[1].lastElementChild.children[0])