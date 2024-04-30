// 배열
// 대괄호를 이용해서 선언, 자료형이 달라도 상관 없다.
// 배열 안에 배열, 배열 안에 리터럴 등등
let user = ['hogeun', '4656', '류호근', 22, '수원시;']
console.log(user[0])

// 객체 리터럴
// 중괄호를 이용해서 선언하며 key와 value 로 이루어져 있다.
let obj = {
    id : 'hogeun',
    pw : '4656',
    name : '류호근',
    age : 22, 
    loc : '수원시'
}
// console.log(obj);
console.log('나이 : ' + obj.age);