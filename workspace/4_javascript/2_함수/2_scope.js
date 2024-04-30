// console.log('==== 전역 스코프 ====')
// var data1 = 49;
// function func1(){
//     console.log(`함수 안 data : ${data1}`)
// }
// func1();
// console.log(`함수 안 data : ${data1}`)

// console.log('==== 지역 스코프 ====')
// function func2(){
//     var data2 = 49;
//     console.log(`함수 안 data : ${data2}`)
// }
// func2();
// console.log(`함수 안 data : ${data2}`)

// console.log('==== 블록 스코프 ====')
// console.log('==== let ====')
// let temp1 = 94;
// {
//     let temp2 = 49;
//     console.log(`함수 안 temp1 : ${temp1}`)
//     console.log(`함수 안 temp2 : ${temp2}`)
// }
// console.log(`함수 밖 temp1 : ${temp1}`)
// console.log(`함수 밖 temp2 : ${temp2}`)

console.log('==== 블록 스코프 ====')
console.log('==== var ====')
var temp1 = 94;
{
    var temp2 = 49;
    console.log(`함수 안 temp1 : ${temp1}`)
    console.log(`함수 안 temp2 : ${temp2}`)
}
console.log(`함수 밖 temp1 : ${temp1}`)
console.log(`함수 밖 temp2 : ${temp2}`)