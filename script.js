function addFn(num1, num2) { num1 + num2;}

function subtractFn(num1, num2) { num1 - num2;}

function multiplyFn(num1, num2) { num1 * num2;}

function divideFn(num1, num2) { num1 / num2;}

let firstNum;
let operator;
let secondNum;

const operate = function operate(firstNum, secondNum, operator) {
    // let result = operator(firstNum, secondNum)
}

// click num button
// event listener on button -> on click, run function
// store value of clicked button in variable
// change display content to value of variable

const calculator = document.getElementById('calculator')
const display = document.getElementById('display')

const add = document.getElementById('add');
add.addEventListener('click', addFn);

const subtract = document.getElementById('subtract');
subtract.addEventListener('click', subtractFn);

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', multiplyFn);

const divide = document.getElementById('divide');
divide.addEventListener('click', divideFn)


const numBtn = document.querySelectorAll('.num');

// iterate through each number button
numBtn.forEach((button) => {
  button.addEventListener('click', displayClickedNum);
});

let clickedNum = []

function displayClickedNum(event) {
    clickedNum.push(' ' + event.target.id);
    display.innerText = clickedNum;
    return clickedNum;
}