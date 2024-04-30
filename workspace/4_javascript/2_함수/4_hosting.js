test();
function test() {
    console.log('이 함수... 호이스팅 될까?')
}

// test2(); -> 함수가 아닙니다 에러!
// console.log(test2) -> undefined
// 함수가 객체로 담기기 전에!
// 이유는 변수가 호이스팅이 됐을 뿐.
var test2 = function() {
    console.log('이 녀석은.. 될까?')
}