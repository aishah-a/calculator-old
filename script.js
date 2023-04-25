// elements
const calculator = document.getElementById('calculator')
const display = document.getElementById('display')
const clearBtn = document.getElementById('clear');
const onBtn = document.getElementById
const decimalBtn = document.getElementById('decimal');

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const operandBtns = document.querySelectorAll('.operand');
const specialBtns = document.querySelectorAll('.special');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtn = document.getElementById('equals');

// CALCULATOR LOGIC

let clickedNum1 = [];
let clickedNum2 = [];
let num1 = null;
let num2 = null;
let chosenOperator = [];
let operator = null;
let result = null;


// store operands
operandBtns.forEach((button) => {
  button.addEventListener('click', storeClickedNum);
});

function storeClickedNum(event) {
  if (clickedNum1.length <= 12 && clickedNum2.length <= 12) {
    // initial operation
    if (operator === null) {
      let clickVal = event.target.textContent;
      clickedNum1.push(clickVal);
      num1 = clickedNum1.join(''); // join clicked nums in array
      num1 = parseInt(num1); // turn string into num
      display.innerText = num1;
      console.log('num1 is ' + num1);
    } else if (operator !== null && num1 !== null) {
      let clickVal = event.target.textContent;
      clickedNum2.push(clickVal);
      num2 = clickedNum2.join(''); // join clicked nums in array
      num2 = parseInt(num2); // turn string into num
      display.innerText = num2;
      console.log('num2 is ' + num2);
    } if (result !== null && num2 !== null) {
      num1 = result;
    }
  } else {
    display.style.fontSize = '30px';
    display.innerText = 'Number is too long!'
  }
}


operatorBtns.forEach((button) => {
  button.addEventListener('click', storeOperator);
});

function storeOperator(event) {
  // inital operation
  if (operator === null) {
    chosenOperator.push(event.target.id);
    operator = chosenOperator.toString();
    console.log(operator);
    return operator;
  } // second operation
  if (operator !== null) {
    operate(num1, num2);
    chosenOperator.pop();
    chosenOperator.push(event.target.id);
    operator = chosenOperator.toString();
    console.log('operator is ' + operator);
    operate(num1, num2);
    return operator;
  }
}

function operate() {
  if (operator === 'add') {
    result = num1 + num2;
  } else if (operator === 'subtract') {
    result = num1 - num2;
  } else if (operator === 'multiply') {
    result = num1 * num2;
  } else if (operator === 'divide') {
    result = num1 / num2;
  }
  display.innerText = result;
  console.log('result is ' + result);
  clickedNum1.length = 0;
  clickedNum2.length = 0;
  num1 = result;
  num2 = null;
}


equalsBtn.addEventListener('click', operate)

// END OF LOGIC



// special buttons
clearBtn.addEventListener('click', clearFn)

function clearFn() {
  clickedNum1.length = 0;
  clickedNum2.length = 0;
  num1 = null;
  num2 = null;
  chosenOperator = [];
  operator = null;
  result = null;
  display.length = 0;
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
