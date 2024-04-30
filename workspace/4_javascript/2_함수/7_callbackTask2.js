let products = [
    {품목:'마우스', 가격:'50000', 수량:5},
    {품목:'키보드', 가격:'100000', 수량:3},
    {품목:'모니터', 가격:'250000', 수량:2},
    {품목:'노트북', 가격:'1550000', 수량:1}
]

// 함수를 정의한다.
// 해당 배열을 전달하면 
// 품목 객체를 새롭게 리턴 받아보자.
// 예시 : 품목:마우스, 총가격:250000
// 매개변수로 마우스와 callback 함수를 전달받는 함수.
// 콜백 -> 품목 이름이 넘어온걸로 가격과 수량을 구해서
// 두 수를 곱해서 리턴해주는 친구를 만들어라.
function test(proName, callback){
    let total = callback(proName);
    let result = {
        품목 : proName,
        총가격 : total
    }
    return result;
}

function getTotal(proName){
    for(pro of products){
        if(pro.품목 == proName){
            return pro.가격 * pro.수량
        }
    }
}

console.log(test('마우스', getTotal));
