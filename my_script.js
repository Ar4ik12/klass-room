"use strict"
let searchAge = 0;
let searchName;
let searchTotal = 0;
do {
    const name = prompt("имя");
    if (!name) {
        if (name === null) {
            // alert("Отменено пользователем");
            break;
        } else {
            alert("Введите корректное имя");
            continue;
        }
    }
    const age = prompt("возраст");
    if (Number(!age)) {
        if (age === null) {
            // alert("Отменено пользователем");
            break;
        } else {
            alert("Введен некорректный возраст");
            continue;
        }
    }
    searchTotal++;
    if (age > searchAge) {
        searchAge = age;
        searchName = name
    }
}
while (true)

alert(`В базе ${searchTotal} человек, имя самого старшого человека: ${searchName}, возраст ${searchAge}`);