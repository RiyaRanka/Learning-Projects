const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialCharacters = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button clicked 
const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"));
        // If output has "%", replace with '/100 before evaluating.
    }
    else if (btnValue === "AC") {
        output = "";
    }
    else if (btnValue === "DEL") {
        // If DEL button is clicked, remove the last character from the output
        output = output.toString().slice(0, -1);
    }
    else {
        // If output is empty and button is specialCharacters then return 
        if (output === "" && specialCharacters.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Add even listener to buttons, call calculate() on click
buttons.forEach((button) => {
    // Button click listener calls calculate() with dataset value  as argument
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
