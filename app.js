const display = document.querySelector('#output');
const btnTypes = {
  number: ['1','2','3','4','5','6','7','8','9','0','.'],
  operator: ['+', '-', '/', 'x'],
  action: ['del', 'reset', '=']
}

let buttons = document.getElementsByTagName('button');
for (let button of buttons)
  button.addEventListener('click', handleClick);

function handleClick(event) {
  let btn = event.target;
  let btnVal = btn.innerText.toLowerCase();

  if (btnVal) updateCalc(inputType(btnVal));
}

function updateCalc(userInput) {
 let {input, type} = userInput;
 switch (type) {
  case 'number':
    updateDisplay(input);
    break;
  case 'operator':
      if (validInput(input))
        updateDisplay(input);
      break;
  case 'action':
    handleAction(input);
    break;
 }
}

function updateDisplay(input) {
  if (display.innerText == '0' ||
      display.innerText == 'Infinity') { 
        display.innerText = input;
  } else display.innerText += input;
}

function validInput(input) {
  let displayData = display.innerText;
  let prevInput = displayData[displayData.length - 1];

  if (inputType(prevInput)['type'] == 'operator' &&
      inputType(input)['type'] == 'operator') return false;
  else if (displayData == '0') return false;
  
  return true;
}

function handleAction(action) {
  let displayData = display.innerText;
  switch (action) {
    case 'del':
      display.innerText = 
      displayData.slice(0, displayData.length - 1);
      if (displayData.length < 2) display.innerText = '0';
      break;
    case 'reset':
      display.innerText = 0;
      break;
    case '=':
      try { display.innerText = eval(display.innerText); }
      catch(err) { alert(err); }
      break;
  }
}

function inputType(input) {
  // This function does not get the actual input type
  // of an HTML element, instead it checks if an input
  // belongs to any type listed in the 'btnTypes' Object
  // and then returns an object containing the input and it's type.
  for (let type of Object.keys(btnTypes)) {
    let typeList = btnTypes[type];
    if (typeList.includes(input))
      return {input: input, type};
  } 
}