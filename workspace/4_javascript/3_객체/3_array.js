let scores = [100, 80, 90, 50, 45, 49]
console.log(scores)

// push, pop
scores.push(500)
console.log(scores)

scores.pop()
console.log(scores)

// forEach
scores.forEach(score => console.log(score))
scores.forEach(function (score){
    console.log(score)
})

// filter
let awesome = scores.filter(score => score >= 80)
console.log(awesome)

// map
// 점수를 보고 등급으로 나누기
let grades = scores.map(getGrade)
console.log(grades)

function getGrade(score) {
    let result;
    if(score >= 90) {
        result = 'A'
    }
    else if(score >= 70) {
        result = 'B'
    }
    else {
        result = 'C'
    }
    return result;
}
