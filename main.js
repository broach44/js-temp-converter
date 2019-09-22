// const inputNumber = document.getElementById('tempInput').value;
const inputField = document.getElementById('tempInput');
const outputField = document.getElementById('outputArea');

const tempToConvert = () => {
  const input = document.getElementById('tempInput');
  return parseInt(input.value);
};
const toCelsius = (inputNumber) => {
    let newNumber = (inputNumber - 32) * 5 / 9
    return newNumber;
}
const toFahrenheit = (inputNumber) => {
    let newNumber = (inputNumber * 9)/ 5 + 32;
    return newNumber;
}
const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innerHTML = toPrint;
};
// Get a reference to the button element in the DOM
const convertButton = document.getElementById("converter");
const resetButton = document.getElementById("resetBtn")
// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  e.preventDefault();
  const inputValue = tempToConvert();
  let convertResult;
  if (document.getElementById('fahrenheit').checked) {
    convertResult = toCelsius(inputValue) + `&deg; C`;
    }   else if (document.getElementById('celsius').checked) {
        convertResult = toFahrenheit(inputValue) + `&deg; F`;
    };
  printToDom('outputArea', convertResult);
  if (convertResult <= (0 + `&deg; C`) || convertResult <= (32 + `&deg; F`)) {
    const selectedDiv = document.getElementById('outputArea');
    selectedDiv.style.color = 'blue';
  } else if (convertResult >= (32 + `&deg; C`) || convertResult >= (90 + `&deg; F`)) {
    const selectedDiv = document.getElementById('outputArea');
    selectedDiv.style.color = 'red';
  }
};

const resetForm = (e) => {
  //when the button is clicked
  console.log('form reset clicked');
  outputField.innerHTML = '';
}

// // Assign a function to be executed when the button is clicked
convertButton.addEventListener("click", determineConverter);
resetButton.addEventListener("click", resetForm);
