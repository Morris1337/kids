const TaskMathTwo = document.getElementById("Task-math-two")
const resultMathtwo = document.querySelector("#result-math-two");
const submitAnswer = document.querySelector("#submitAnswer")

let min = 1;
let max = 10;


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generationMathExampleTwo(){
    TaskMathTwo.textContent = '';

    let a = getRandomNumber(min, max);
    let b = getRandomNumber(min, max);
    let c = getRandomNumber(min, max);

    if( a < b){
        [a, b] = [b, a] 
    }

    let exampleVariant = [
        `В автобусе ехали ${a} детей, на остановки к ним подсели еще ${b} детей.
        Сколько всего детей ехало в автобусе?`,
        `В автобусе ехали ${a} детей, на остановки из автобуса вышло ${b} детей.
        Сколько всего детей ехало в автобусе`,
        `На детской площадке играло ${a} детей, ${c} поругались и ушли с площадки.
        Сколько детей осталось на площадке?`,
        `На детской площадке играло ${a} детей, ${c} Позвали еще ${b} детей.
        Сколько детей осталось на площадке?`,
        ` Autobusā brauca ${a} bērni, un autobusa pieturā viņiem pievienojās vēl ${b} bērni.
        Cik bērnu bija autobusā?`,
        ` Autobusā brauca ${a} bērni, un ${b} bērni izkāpa no autobusa pieturā.
        Cik bērnu bija autobusā?`,
        `Rotaļu laukumā spēlēja ${a} bērni, ${c} izcēlās strīdu, un viņi pameta rotaļu laukumu.
        Cik bērnu ir palikuši rotaļu laukumā?`,
`        Bija ${a} bērni, kas spēlēja rotaļu laukumā, ${c} pasauca vēl ${b} bērni.
        Cik bērnu ir palikuši rotaļu laukumā?`
    ]

    const randomExampleIndex = Math.floor(Math.random() * exampleVariant.length)
    const selectExample = exampleVariant[randomExampleIndex]

    let correctResult;
    switch(randomExampleIndex){
        case 0:
        case 1:
        case 4:
        case 5:
            correctResult = a + b;
            break;
        case 2:
        case 6:
            correctResult = a - c;
            break
        case 3:
        case 7:
            correctResult = a + b;
            break
    }

    const TaskMathOnePlace = document.createElement("div")
    TaskMathOnePlace.classList.add("example-style")
    TaskMathOnePlace.style.width = "300px";
    TaskMathOnePlace.style.height = "fit-content";

    TaskMathOnePlace.textContent = selectExample;
    TaskMathTwo.appendChild(TaskMathOnePlace)
    resultMathtwo.textContent = "";

    return correctResult;
}

function isCorrectExample(userExample, a, b, operation) {
    // Парсинг примера пользователя
    const userAnswer = parseUserExample(userExample);

    // Вычисление правильного ответа
    let correctAnswer;
    if (operation === 'addition') {
        correctAnswer = a + b;
    } else if (operation === 'subtraction') {
        correctAnswer = a - b;
    } else {
        // Обработка других типов операций
    }

    // Сравнение ответа пользователя с правильным ответом
    return userAnswer === correctAnswer;
}

function parseUserExample(example) {
    // Простой парсер для примера в формате "1 + 2 = 3"
    // Убираем пробелы и разбиваем строку
    const parts = example.replace(/\s+/g, '').split('=');

    // Часть до и после '='
    const expression = parts[0];
    const userAnswer = parseInt(parts[1], 10);

    // Вы можете добавить более сложную логику для обработки выражения, если это необходимо
    // Например, использовать регулярные выражения для извлечения чисел и операций

    return userAnswer;
}



