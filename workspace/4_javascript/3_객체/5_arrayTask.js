let users = [
    {name : '류호근', age : 22},
    {name : '강다니엘', age : 33},
    {name : '선우용녀', age : 66},
    {name : '지드래곤', age : 32}
]
// 아래 선언된 함수를 사용해서 users 에 있는 객체의 정보를 출력해보자.
// 단, 30살 이하인 사람들의 정보만 출력해보자! 자유롭게!

// 가이드는, 한 줄만 작성하면 된다.

// 함수 정의
// 매개변수로 넘어온 객체의 이름과 나이를 출력하는 함수 정의.
// 출력 예시
// 이름 : 류호근(3)
// 나이 : 22살
function printInfo(user, callback){
    let nameLen = callback(user.name);
    console.log(user.name + '(' + nameLen + ')');
    console.log(user.age + '살');
}
// 콜백 함수 정의
// 이름을 전달 받아 3글자면 3, 4글자면 4를 리턴!
function len(name){
    return name.length
}