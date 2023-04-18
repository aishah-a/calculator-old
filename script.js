// operator functions
function addFn(num1, num2) { return num1 + num2;}
function subtractFn(num1, num2) { return num1 - num2;}
function multiplyFn(num1, num2) { return num1 * num2;}
function divideFn(num1, num2) { return num1 / num2;}

// elements
const calculator = document.getElementById('calculator')
const display = document.getElementById('display')
const displayUpper = document.getElementById('display_upper');
const displayLower = document.getElementById('display_lower');
const clearBtn = document.getElementById('clear');
const decimalBtn = document.getElementById('decimal');

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addFn);

const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', subtractFn);

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', multiplyFn);

const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', divideFn)

const operandBtns = document.querySelectorAll('.operand');
const specialBtns = document.querySelectorAll('.special');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equals');

// CALCULATOR LOGIC

const clickedNum1 = []
const clickedNum2 = []
let num1;
let num2;
let operator;
let result;

// store operands
operandBtns.forEach((button) => {
  button.addEventListener('click', storeClickedNum);
});


function storeClickedNum(event) {
  if (clickedNum1.length <= 12 && clickedNum2.length <= 12) {
    if (operator === undefined) {
      let clickVal = event.target.textContent;
      clickedNum1.push(clickVal);
      num1 = clickedNum1.join('');
      num1 = parseInt(num1);
      displayLower.innerText = num1;
      console.log(num1); //remove
    }
    if (operator !== undefined) {
      let clickVal = event.target.textContent;
      clickedNum2.push(clickVal);
      num2 = clickedNum2.join('');
      num2 = parseInt(num2);
      displayLower.innerText = num2;
      console.log(num2); //remove
    }
  } else {
    displayLower.style.fontSize = '30px';
    displayLower.innerText = 'Number is too long.'
  }

}

operatorBtns.forEach((button) => {
  button.addEventListener('click', storeOperator);
});

function storeOperator(event) {
  if (operator === undefined) {
    operator = event.target.id
    return operator;
  }
}

function operate() {
  if (operator === 'add') {
    result = addFn(num1, num2);
  } else if (operator === 'subtract') {
    result = subtractFn(num1, num2);
  } else if (operator === 'multiply') {
    result = multiplyFn(num1, num2);
  } else if (operator === 'divide') {
    result = divideFn(num1, num2)
  }
  displayLower.innerText = result;
}

equalsBtn.addEventListener('click', operate)


// END OF LOGIC



clearBtn.addEventListener('click', clearFn)

function clearFn() {
  num2 = null;

  displayLower.innerText = '';
}

// styling buttons


operandBtns.forEach((operandBtn) => {
  operandBtn.addEventListener('mousedown', () => {
    operandBtn.style.backgroundColor = '#FFDBE5';
  })
  operandBtn.addEventListener('mouseup', () => {
    operandBtn.style.backgroundColor = '#FF9EBB';
  })
});

specialBtns.forEach((specialBtn) => {
  specialBtn.addEventListener('mousedown', () => {
    specialBtn.style.backgroundColor = '#AECEEA';
  })
  specialBtn.addEventListener('mouseup', () => {
    specialBtn.style.backgroundColor = '#79ADDC';
  })
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener('mousedown', () => {
    operatorBtn.style.backgroundColor = '#FFE4AD';
  })
  operatorBtn.addEventListener('mouseup', () => {
    operatorBtn.style.backgroundColor = '#FFD275';
  })
});

equals.addEventListener('mousedown', () => {
    equals.style.backgroundColor = '#FFE4AD';
  })
  equals.addEventListener('mouseup', () => {
    equals.style.backgroundColor = '#FFD275';
  });
