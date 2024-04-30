let a = 10;
const b = 20;

function test() {
    let a = 50;
    // a = 50;
    const b = 49;
    console.log(`함수 내부 a : ${a}`);
    console.log(`함수 내부 b : ${b}`);
}
test();
console.log(`함수 외부 a : ${a}`);
console.log(`함수 외부 b : ${b}`);