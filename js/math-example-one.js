import { resultMathOne } from "./math.js";

let correctResult;

const TaskMathOne = document.querySelector("#Task-math-one");

export function generationMathExample() {
    TaskMathOne.textContent = '';

    let operations = ["+", "-"];

    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;

    let operation = operations[Math.floor(Math.random() * operations.length)];

    if (operation === "/" && num2 === 0) {
        num2 = 1;
    }

    if (operation === "-" && num1 < num2) {
        [num1, num2] = [num2, num1];
    }

    let example = num1 + " " + operation + " " + num2;

    switch (operation) {
        case "+":
            correctResult = num1 + num2;
            break;
        case "-":
            correctResult = num1 - num2;
            break;
    }

    const TaskMathOnePlace = document.createElement("div")
    TaskMathOnePlace.classList.add("example-style")
    TaskMathOnePlace.textContent = example;
    TaskMathOne.appendChild(TaskMathOnePlace)
    resultMathOne.textContent = "";

    return correctResult
}