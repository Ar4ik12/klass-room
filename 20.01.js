'use strict'

const PASSWORD1 = "dasdasd";
const PASSWORD2 = "asddasd";

const name1 = 'Alen';
const name2 = 'Alex';

const userInput = prompt('Input password');

if (userInput === PASSWORD1) {
    console.log(`Привет ${name1}`);
}
else if(userInput === PASSWORD2) {
    console.log(`Привет ${name2}`);
}
else if(userInput === null) {
    console.log(`Отменено пользователем`);
}
else {
    console.log(`Неправильный пароль`);
}