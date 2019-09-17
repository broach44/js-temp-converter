// const inputNumber = document.getElementById('tempInput').value;
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
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  e.preventDefault();
  const inputValue = tempToConvert();
  let convertResult;
  if (document.getElementById('fahrenheit').checked) {
      convertResult = toCelsius(inputValue) + `&deg; C`;

  }  else if (document.getElementById('celsius').checked) {
      convertResult = toFahrenheit(inputValue) + `&deg; F`;
  };
  printToDom('outputArea', convertResult);
};

// // Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

