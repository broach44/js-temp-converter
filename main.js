const inputField = document.getElementById('tempInput');
const outputField = document.getElementById('outputArea');
const convertButton = document.getElementById("converter");
const resetButton = document.getElementById("resetBtn");
let convertResult;

// *************** FUNCTIONS *******************
// Returns the value of input inthe the temperature field
const tempToConvert = () => {
  const input = document.getElementById('tempInput');
  return parseInt(input.value);
};
// Formula to convert number from F to C
const toCelsius = (inputNumber) => {
    let newNumber = (inputNumber - 32) * 5 / 9
    return newNumber;
};
// Formula to convert number from C to F
const toFahrenheit = (inputNumber) => {
    let newNumber = (inputNumber * 9)/ 5 + 32;
    return newNumber;
};
// Prints to the Dom in specified div
const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
};
// Colors the celsius output
const colorCelsiusOutput = () => {
  if (parseFloat(convertResult) <= 0) {
    outputField.style.color = 'blue';
  } else if (parseFloat(convertResult) >= 32) {
    outputField.style.color = 'red';
  } else {
    outputField.style.color = 'green';
  };
};
// Colors the fahrenheit ouput
const colorFahrenheitOutput = () => {
  if (parseFloat(convertResult) <= 32) {
    outputField.style.color = 'blue';
  } else if (parseFloat(convertResult) >= 90) {
    outputField.style.color = 'red';
  } else {
    outputField.style.color = 'green';
  };
};
// selects which coloring function to use due to the different ranges
const colorResult = () => {
  if (document.getElementById('fahrenheit').checked) {
    colorCelsiusOutput();
  } else if (document.getElementById('celsius').checked) {
    colorFahrenheitOutput();
  };
};
// selects which formula to use to convert the input number
const determineConverter = (e) => {
  e.preventDefault();
  const inputValue = tempToConvert();
  if (document.getElementById('fahrenheit').checked) {
    convertResult = toCelsius(inputValue) + `&deg; C`;
    } else if (document.getElementById('celsius').checked) {
      convertResult = toFahrenheit(inputValue) + `&deg; F`;
    };
  printToDom('outputArea', convertResult);
  colorResult();
};
// resets form and clears ouput area
const resetForm = (e) => {
  outputField.innerHTML = '';
}
// adds click listeners
const addListeners = () => {
convertButton.addEventListener("click", determineConverter);
resetButton.addEventListener("click", resetForm);
};

const init = () => {
  addListeners();
};

init();
