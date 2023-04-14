// operator functions
function addFn(num1, num2) { num1 + num2;}
function subtractFn(num1, num2) { num1 - num2;}
function multiplyFn(num1, num2) { num1 * num2;}
function divideFn(num1, num2) { num1 / num2;}

const operate = function operate(num1, num2, operator) {
}

const calculator = document.getElementById('calculator')
const display = document.getElementById('display')
const displayUpper = document.getElementById('display_upper');
const displayLower = document.getElementById('display_lower');
const clearBtn = document.getElementById('clear')

const add = document.getElementById('add');
add.addEventListener('click', addFn);

const subtract = document.getElementById('subtract');
subtract.addEventListener('click', subtractFn);

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', multiplyFn);

const divide = document.getElementById('divide');
divide.addEventListener('click', divideFn)


const numBtn = document.querySelectorAll('.operand');

// iterate through each number button
numBtn.forEach((button) => {
  button.addEventListener('click', displayClickedNum);
});

let clickedNum = []

function displayClickedNum(event) {
    let clickVal = parseInt(event.target.textContent)
    clickedNum.push(clickVal);
    displayLower.innerText = clickedNum;
    return clickedNum;
}


