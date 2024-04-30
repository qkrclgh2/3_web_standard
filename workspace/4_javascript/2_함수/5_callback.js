function callbackTest1(callback) {
    for(let i=1; i<=3; i++){
        callback(i);
    }
}

function print(number) {
    console.log(`${number}번째 함수 호출`)
}

function printTest(i) {
    console.log(`${i}번째 함수 호출2`)
}

callbackTest1(print);
callbackTest1(printTest);

callbackTest1(function printTest2(i) {
    console.log(`${i}번째 호출중3`);
});

callbackTest1((i) => console.log(`${i}번째 호출중4`));