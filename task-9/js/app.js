const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const poput = document.querySelector('.poput');
const message = document.querySelector(".message");
const input = document.querySelector("#guess-input");
const start = document.querySelector("#guess-btn");
let random;
let counter = 3;
maxNum.innerHTML = "10";
minNum.innerHTML = "1";
poput.innerHTML = "3";

function getRandomArbitrary() {
    random = Math.floor(Math.random() * (10 - 1) + 1);
    return random;
}
getRandomArbitrary();

start.addEventListener("click", gameStart);
function gameStart() {
    // console.log(random);

    if (start.innerHTML === "Новая игра") {
        message.innerHTML = "";
        input.value = "";
        counter = 3;
        poput.innerHTML = counter;
        message.style.color = "black";
        start.innerHTML = "Играть";
    } else if (counter < 2) {
        start.innerHTML = "Новая игра";
        input.value = "";
        message.style.color = "red";
        message.innerHTML = `Вы проиграли`;
        poput.innerHTML = "0";
        getRandomArbitrary();
        // console.log(random);
    } else if (input.value > 10 || input.value < 1) {
        message.style.color = "blue";
        message.innerHTML = `Введите число от 1 до 10`;
        poput.innerHTML = counter;
    } else if (+input.value === random) {
        input.value = "";
        message.innerHTML = `Вы угадали! `;
        poput.innerHTML = counter;
        message.style.color = "green";
        start.innerHTML = "Новая игра";
        getRandomArbitrary();
        // console.log(random);
    } else if (input.value !== random) {
        input.value = "";
        counter--;
        poput.innerHTML = counter;
        message.innerHTML = `Вы не угадали.`;
    }
}