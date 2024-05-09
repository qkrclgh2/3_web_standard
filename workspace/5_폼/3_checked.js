let boxes = document.fruits.querySelectorAll("[type='checkbox']")
console.log(boxes);

boxes[1].checked = true;
boxes[3].checked = true;

boxes.forEach((box) => {
    if(box.checked === true) {
        console.log(box.value)
    }
})

let radios = document.foods.querySelectorAll("[type='radio']")
radios[1].checked = true;
radios[3].checked = true;