// // INTRO //
console.log("")
console.log("Welcome to Node CLI Calculator App")
console.log("")
console.log("Please read the acceptance criteria to get started.")
console.log("")


// ASK WHAT OPERATION THEY WANT COMPLETE //
const prompt = require("prompt-sync")();
// // ASK FOR USER NAME //
const namePrompt = prompt("Who are you?")
console.log(`Welcome ${namePrompt}`)
let counter = 1;
while (counter > 0) {
  const opr = prompt(
    "Enter operator ( either Add, Subtract, Multiply or Divide ): "
    );

  // ASK USER FOR FIRST NUMBER //
  const num1 = prompt("Enter first number: ");

  // ASK USER FOR SECOND NUMBER //
  const num2 = prompt("Enter second number: ");

  // COMPLETE OPERATION / DISPLAY OUTPUT //
  const calculate = (opr, num1, num2) => {
    const firstNumber = Number(num1);
    const secondNumber = Number(num2);
    switch (opr.toLowerCase()) {
      case "add":
        return firstNumber + secondNumber;
      case "subtract":
        return firstNumber - secondNumber;
      case "multiply":
        return firstNumber * secondNumber;
      case "divide":
        return firstNumber / secondNumber;
      default:
        return 0;
    }
  };
  console.log(calculate(opr, num1, num2));

  const contPrompt = prompt(`Would you like to continue? Y/N: `)
  if (contPrompt == `Y` || contPrompt == `y`) {
    counter += 1
  } else if (contPrompt == `N` || contPrompt == `n`) {
    counter = 0
  }
}

