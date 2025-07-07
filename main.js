/*-------------------------------- Constants --------------------------------*/

let operator = '';
let result = '';

/*-------------------------------- Variables --------------------------------*/

let num1 = '';
let num2 = '';
let isSecondNum = false;

/*------------------------ Cached Element References ------------------------*/

const displayElement = document.querySelector('.display');
const calculatorElement = document.querySelector('#calculator');

/*----------------------------- Event Listeners -----------------------------*/

calculatorElement.addEventListener('click', function (event) {
  const value = event.target.innerText;

  if (!event.target.classList.contains('button')) return;

  if (!isNaN(value)) {
    if (!isSecondNum) {
      num1 += value;
      displayElement.textContent = num1;
    } else {
      num2 += value;
      displayElement.textContent = num2;
    }
  } else if (['+', '-', '*', '/'].includes(value)) {
    operator = value;
    isSecondNum = true;
    displayElement.textContent = operator;
  } else if (value === '=') {
    const n1 = Number(num1);
    const n2 = Number(num2);

    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
    }

    num1 = result.toString();
    num2 = '';
    operator = '';
    isSecondNum = false;

    displayElement.textContent = result;
  } else if (value === 'C') {
    num1 = '';
    num2 = '';
    operator = '';
    result = '';
    isSecondNum = false;
    displayElement.textContent = '';
  }
});

/*-------------------------------- Functions --------------------------------*/
