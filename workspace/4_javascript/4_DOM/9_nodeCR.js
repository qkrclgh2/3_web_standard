// 요소 노드 생성하기
let el = document.createElement('div');
el.innerText = '류호근'
// document.body.appendChild(el);

let chileNodes = document.body.childNodes;
childNodes.forEach((node) => {
    if(node.nodeName === 'A') { // -> nodeName 은 무조건 대문자 반환.
        node.parentNode.removeChild(node);
    }
})