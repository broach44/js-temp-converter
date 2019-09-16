const toCelsius =  (inputNumber) => {
    const newNumber = (inputNumber - 32) * 5 / 9
    console.log(newNumber);
}

const toFahrenheit =  (inputNumber) => {
    const newNumber = (inputNumber * 9)/ 5 + 32;
    console.log(newNumber);
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log(document.getElementById('celsius').checked, e);
  console.log(document.getElementById('fahrenheit').checked, e);
};

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);

