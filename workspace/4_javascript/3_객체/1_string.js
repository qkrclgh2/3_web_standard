// length 테스트
let test = 'hello world';
for(let i=0; i<test.length; i++) {
    // console.log(test[i])
}
// 비밀번호 몇 자리 이상 입력해라!

// includes 테스트
let sentence = '나보기가 역겨워 가실 때에는 말 없이 고이 보내드리오리다.'
console.log(sentence.includes('나보기가'))
// 이메일 형식 검사 가능! @

// slice 테스트
let fullName = '류호근';
console.log('성 : ' + fullName.slice(0,1))

// split 테스트
let interest = '축구,배구,야구,농구,당구,볼링';
console.log(interest.split(','))

// trim 테스트
let temp = '    공백   지워지니?   ';
console.log(temp.trim())
// replace 문자열 교체 -> 처음 만나는 하나만!
// replaceAll 은 전부 다 교체!
console.log(temp.replaceAll(' ', ''));