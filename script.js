let buttonsCon = document.querySelector(".buttons");
let hint = document.querySelector(".hint");
let newGameBtn = document.querySelector(".newGame");
let win = false;
let attempsCon = document.querySelector(".attempsNum");
let attemps = 5;
for (let i = 1; i < 21; i++) {
    let button = document.createElement("button");
    button.innerHTML = i;
    buttonsCon.appendChild(button);
}
let secretNumber = getRandomNumber(1, 20);
buttonsCon.onclick = function (event) {
    let target = event.target;
    if (
        target.tagName == "BUTTON" &&
        target.classList.length == 0 &&
        win == false
    ) {
        console.log(target.innerHTML);
        let userNumber = target.innerHTML;
        if (userNumber > secretNumber) {
            attemps = attemps - 1;
            hint.innerHTML =
                "Ты ошибся, у тебя -1 попытка. Секретное число меньше";
            target.classList.add("wrong");
            win = false;
        } else if (userNumber < secretNumber) {
            attemps = attemps - 1;
            hint.innerHTML =
                "Ты ошибся, у тебя -1 попытка. Секретное число больше";
            target.classList.add("wrong");
            win = false;
        } else if (userNumber == secretNumber) {
            hint.innerHTML =
                "Ура, ты угадал, ты можешь нажать на кнопку Новая игра. Ты победил";
            target.classList.add("right");
            win = true;
        }
        attempsCon.textContent = attemps;
        if (attemps == 0) {
            hint.innerHTML =
                "У тебя закончились попытки, ты не можешь больше играть. Нажми на кнопку Новая игра попробуй еще раз.";
            let buttons = buttonsCon.querySelectorAll("button");
            buttons.forEach(function (button) {
                if(button.textContent == secretNumber) {
                    button.classList.add("right")
                }else{
                    button.classList.add("wrong")
                }
            });

            newGameBtn.disabled = false;
        }
    }
};
newGameBtn.onclick = function (event) {
    attemps = 5;
    attempsCon.innerHTML = "5"
    secretNumber = getRandomNumber(1, 20);
    win = false;
    let buttons = buttonsCon.querySelectorAll("button");
    hint.innerHTML = "Я буду подсказывать";
    buttons.forEach(function (button) {
        button.classList.remove("wrong", "right");
    });
};
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1) Добавить в игру попытки, сделать так изначально было например 5 попыток. Написать об этом на экране
// 2) Когда человек ошибается отнимать попытки и изменить текст на экране тоже
// 3) Когда человек теряет все попытки, сделать так, чтобы написало "Ты проиграл" и больше нельзя было играть
// 4) После поражения показать человеку правильный ответ (правильная кнопка должна стать желтой и светиться)
