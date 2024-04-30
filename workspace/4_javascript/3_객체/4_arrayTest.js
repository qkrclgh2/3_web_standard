// 콜백함수 활용
// 배열을 매개변수로 넘겨 받아,
// 최댓값과 최솟값을 출력해주는 함수.
// 에러가 난 유무에 따라서 콜백함수가
// 다르게 동작 되게끔 구현할 예정
// 결과를 출력해주는 함수가 콜백함수가 될 예정
let numbers = [5, 70, 50, 8, 90, 11, 12, 30]

function getMinMax(numbers, callback) {
    if(numbers.length === 0) {
        callback('배열의 갯수가 0개~!!!!', null, null)
        return;
    }

    let min = numbers[0];
    let max = numbers[0];

    for(let i=1; i<numbers.length; i++) {
        if(numbers[i] < min) {
            min = numbers[i];
        }
        if(numbers[i] > max) {
            max = numbers[i];
        }
    }
    callback(null, min, max)
}

function getResult(error, min, max) {
    if(error) {
        console.log(error)
    }
    else{
        console.log(`최솟값 : ${min}`)
        console.log(`최댓값 : ${max}`)
    }
}

getMinMax(numbers, getResult); 