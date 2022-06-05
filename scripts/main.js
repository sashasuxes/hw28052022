const screen = document.querySelector('.main');

const step1Text = 'не пора ли подкрепиться пока все спят и никто не видит?';
const step1BtnA = 'нет, пожалуй в другой раз';
const step1BtnB = 'конечно!';

const step2Text = 'Отлично!';
const step2BtnA = 'пойти на кухню в тапках';
const step2BtnB = 'да ну их, пойду так!';

const step3Text = 'Правильное решение, ты в три прыжка оказался на кухне!';
const step3TextTrauma = 'Упс. Вот она где - потерянная племянником деталь от LEGO! Поход к холодильнику отменяется, предстоит искать йод в аптечке';
const step3BtnA = 'Открыть холодильник';
const step3BtnB = 'Закрыть холодильник';

const toLateText = 'пока вы думали, вы снова уснули (голодным). Перезагрузите страницу, чтобы попробовать еще раз';

const cancelText = 'ок, хороших снов. Перезагрузите страницу, чтобы попробовать еще раз';



let step = 1;
let refrigeratorIsOpen = false;

function noFood(text) {
    screen.innerHTML = '<p>' + text + '</p>';
}

function chooseFood() {
    const inp = document.querySelector('input[name="pName"]');
    const inpVal = inp.value;
    let notice = document.querySelector('.text');
    if (inpVal === "Колбаса") {
        notice.insertAdjacentHTML('afterend', '<p id="two">Вы взяли колбасу</p>');
        // notice.textContent = "Вы взяли колбасу";

    }
    else if (inpVal === "Сыр") {
        notice.insertAdjacentText('afterend', " Вы взяли сыр ");
        // notice.textContent = "Вы взяли сыр";
    }
    else if (inpVal === "Борщ") {
        notice.textContent = "Вы взяли борщ";
    }
    else if (inpVal === "Бананы") {
        notice.textContent = "Вы взяли бананы";
    }
    else if (inpVal === "Яблоки") {
        notice.textContent = "Вы взяли яблоки";
    }
    else if (inpVal === "Кола") {
        notice.textContent = "Вы взяли колу";
    }
    else if (inpVal === "Живчик") {
        notice.textContent = "Вы взяли живчик";
    } else {
        notice.textContent = "такой фигни у тебя в холодильнике нет!";
    }

}

function Ref() {
    const lBtn = document.querySelector('.leftBtn');
    const rBtn = document.querySelector('.rightBtn');
    if (refrigeratorIsOpen === true) {
        lBtn.addEventListener('click', () => {
            text = "Холодильник уже открыт!";
            typeSteps(text, step3BtnA, step3BtnB);
            const groceryList = '<ul> <li>Колбаса</li> <li>Сыр</li> <li>Борщ</li> <li>Бананы</li> <li>Яблоки</li> <li>Кола</li> <li>Живчик</li> </ul>';
            screen.innerHTML += groceryList + '<label for="item"> Выберите продукт </label> <input type="text" id="pName" name="pName"> <br><br> <button type="button" class="btn"> Взять </button>';
            thirdStep();
            const btn = document.querySelector('.btn');

            btn.addEventListener('click', chooseFood);
        });

    } else {
        lBtn.addEventListener('click', () => {
            refrigeratorIsOpen = true;
            text = "Вы открыли холодильник!";
            typeSteps(text, step3BtnA, step3BtnB);
            const groceryList = '<ul> <li>Колбаса</li> <li>Сыр</li> <li>Борщ</li> <li>Бананы</li> <li>Яблоки</li> <li>Кола</li> <li>Живчик</li> </ul>';
            screen.innerHTML += groceryList + '<label for="item"> Выберите продукт </label> <input type="text" id="pName" name="pName"> <br><br> <button type="button" class="btn"> Взять </button>';
            thirdStep();

            const btn = document.querySelector('.btn');

            btn.addEventListener('click', chooseFood);

        });
    }

    if (refrigeratorIsOpen === false) {
        rBtn.addEventListener('click', () => {
            text = "Холодильник уже закрыт!";
            typeSteps(text, step3BtnA, step3BtnB);
            thirdStep();
        });
    } else {
        rBtn.addEventListener('click', () => {
            refrigeratorIsOpen = false;
            text = "Вы закрыли холодильник!";
            typeSteps(text, step3BtnA, step3BtnB);
            thirdStep();
        });

    }
}



function typeSteps(text, btn1Text, btn2Text) {
    screen.innerHTML = '<p class="text">' + text + '</p>' + '<br>' + '<button class="leftBtn">' + btn1Text + '</button>' + '<button class="rightBtn">' + btn2Text + '</button>';
    if (step === 1) {
        firstStep();
    }

    if (step === 2) {
        secondStep();
    }

    if (step === 3) {
        thirdStep();
    }
}



function firstStep() {
    const lBtn = document.querySelector('.leftBtn');
    const rBtn = document.querySelector('.rightBtn');
    const toLate = setTimeout(noFood, 10000, toLateText);
    lBtn.addEventListener('click', () => {
        clearTimeout(toLate);
        screen.textContent = cancelText;
    });
    rBtn.addEventListener('click', () => {
        clearTimeout(toLate);
        step = step + 1;
        typeSteps(step2Text, step2BtnA, step2BtnB);

    });

}


function secondStep() {
    const lBtn = document.querySelector('.leftBtn');
    const rBtn = document.querySelector('.rightBtn');
    lBtn.addEventListener('click', () => {
        step = step + 1;
        typeSteps(step3Text, step3BtnA, step3BtnB);
    });
    rBtn.addEventListener('click', () => {
        screen.textContent = step3TextTrauma;
    });

}

function thirdStep() {

    const lBtn = document.querySelector('.leftBtn');
    const rBtn = document.querySelector('.rightBtn');
    Ref();

}



typeSteps(step1Text, step1BtnA, step1BtnB);
