import { generationMathExampleTwo } from "./math-example-two.js";
import { generationMathExample } from "./math-example-one.js";

const answerMathOne = document.querySelector("#answer-math-one");
const answerElements = document.querySelectorAll(".answer-math")
const resultMathOne = document.querySelector("#result-math-one");
const resultMathTwo = document.querySelector("#result-math-two");
const resultGif = document.getElementById("result-gif")
let timeDown = document.querySelector("#timeDown")
const resultmathAnswer = document.getElementById("resultmathAnswer")

const correctAnswersCountMath = document.querySelector("#correcrAnswersCountMats");
const totalAttemptsCountMath = document.querySelector("#totalAttemptsCountMats");

const mathNumberOne = document.querySelector("#math-number-one")
const mathNumberOneBtn = document.querySelector("#math-number-one-btn")
const mathNumberTwoBtn = document.querySelector("#math-number-two-btn")
const mathNumberTwo = document.querySelector("#math-number-two")

mathNumberOneBtn.addEventListener("click", () =>{
    mathNumberOne.classList.toggle("open")
})

mathNumberTwoBtn.addEventListener("click", () =>{
    mathNumberTwo.classList.toggle("open")
})

let correcrAnswersCount = 0;
let totalAttemptsCount = 0;

let countdownTime;
let countdownTimer;
const initialCountdownTime = 5;



const gifsYes = [
    "../gif/1IAK.gif",
    "../gif/2DV.gif",
    "../gif/3gX1.gif",
    "../gif/EisVenturaLike.gif",
    "../gif/fy5Q.gif",
    "../gif/OoO.gif",
    "../gif/R1Md.gif",
    "../gif/ulr.gif",
    "../gif/VJKc.gif",
    "../gif/WXxX.gif",
    "../gif/xz.gif"
]

const gifNo = [
    "../gif/OhNo/1EM9.gif",
    "../gif/OhNo/1HK.gif",
    "../gif/OhNo/1qqc.gif",
    "../gif/OhNo/1tx.gif",
    "../gif/OhNo/1W5R.gif",
    "../gif/OhNo/8meE.gif",
    "../gif/OhNo/Bttr.gif",
    "../gif/OhNo/C2K.gif",
    "../gif/OhNo/Dy.gif",
    "../gif/OhNo/GBjg.gif",
    "../gif/OhNo/Iam.gif",
    "../gif/OhNo/mgV.gif",
    "../gif/OhNo/Mw74.gif",
    "../gif/OhNo/SOog.gif",
    "../gif/OhNo/Z9Jz.gif"
]

document.addEventListener("DOMContentLoaded", function() {
    generationMathExample();
    generationMathExampleTwo();
    setupEventListener();
});

function startCountdown() {
    countdownTime = initialCountdownTime; // Сбросить время до начального значения

    if (countdownTimer) {
        clearInterval(countdownTimer); // Очистить существующий интервал, если он есть
    }

    countdownTimer = setInterval(function() {
        countdownTime--;
        timeDown.textContent = formatTime(countdownTime);
        timeDown.style.display = "flex";

        if (countdownTime <= 0) {
            clearInterval(countdownTimer);
            hideTime();
            // Здесь можно добавить действия при истечении времени
        }
    }, 1000);
}

function formatTime(second){
    let minutes = Math.floor(second / 60);
    let remainingSeconds = second % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function showRandomImageYes(){
    const randomIndex = Math.floor(Math.random() * gifsYes.length);
    const selectedImage = gifsYes[randomIndex]

    resultGif.src = selectedImage;
    resultGif.style.display = "flex";

}

function showRandomImageNo(){
    const randomIndex = Math.floor(Math.random() * gifNo.length);
    const selectedImage = gifNo[randomIndex]

    resultGif.src = selectedImage;
    resultGif.style.display = "flex";
}

function hideGif(){
    resultGif.style.display = "none";
}

function hideTime(){
    timeDown.style.display = "none"
}

function setupEventListener(){
    let currentCorrectResultOne = generationMathExample();
    let currentCorrectResultTwo = generationMathExampleTwo();

    answerElements.forEach(element => {
        element.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                let userAnswer = parseFloat(event.target.value); // Используйте значение элемента, инициировавшего событие
                resultmathAnswer.classList.add("open");
                if (!isNaN(userAnswer)) {
                    totalAttemptsCountMath.textContent = ++totalAttemptsCount;
                    // Проверьте ответ по обоим результатам
                    if (userAnswer === currentCorrectResultOne) {
                        correctAnswersCountMath.textContent = ++correcrAnswersCount;
                        resultMathOne.textContent = "Правильно! Ваш ответ: " + currentCorrectResultOne;
                        startCountdown();
                        showRandomImageYes();
                        resultmathAnswer.style.backgroundColor = "green";
                    } else if (userAnswer === currentCorrectResultTwo) {
                        correctAnswersCountMath.textContent = ++correcrAnswersCount;
                        resultMathTwo.textContent = "Правильно! Ваш ответ: " + currentCorrectResultTwo;
                        startCountdown();
                        showRandomImageYes();
                        resultmathAnswer.style.backgroundColor = "green";
                    } else if(userAnswer !== currentCorrectResultOne){
                        // Ошибка для обоих случаев
                        resultMathOne.textContent = "Неправильно. Правильный ответ: " + currentCorrectResultOne;
                        startCountdown();
                        showRandomImageNo();
                        resultmathAnswer.style.backgroundColor = "red";
                    }else{
                        resultMathTwo.textContent = "Неправильно. Правильный ответ: " + currentCorrectResultTwo;
                        startCountdown();
                        showRandomImageNo();
                        resultmathAnswer.style.backgroundColor = "red";
                    }
                    event.target.value = ""; // Очистите значение текущего элемента
                    setTimeout(() => {
                        hideGif();
                        // Генерируйте новые вопросы только для текущего активного типа задачи
                        currentCorrectResultOne = generationMathExample(); // Новый вопрос для первого примера
                        currentCorrectResultTwo = generationMathExampleTwo(); // Новый вопрос для второго примера
                        resultmathAnswer.classList.remove("open");
                    }, 5000);
                }
            }
        });
    });
}


export {resultMathOne};