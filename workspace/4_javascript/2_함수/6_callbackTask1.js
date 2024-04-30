// 숫자를 하나 전달하면 객체를 리턴하도록 만드는데,
// 콜백1 : 해당 숫자가 '짝수'인지 '홀수'인지
// 콜백2 : 1 ~ 숫자까지의 합을 받아오기.
// 객체의 키값은 마음대로 해도 된다.

function test(num, callback1, callback3) {
    let type = callback1(num);
    let sum = callback2(num);
    // let gop = callback3(num);
    let obj = {
        여부 : type,
        합 : sum
    }
    return obj;
}

function checkType(num) {
    return num%2==1 ? '홀수' : '짝수';
}

function getSum(num) {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

// function getgop(num) {
//     let gop = 0;
//     for(let i=1; i<=num; i++) {
//         gop * i;
//     }
//     return gop;
// }

console.log(test(10,checkType, getSum));