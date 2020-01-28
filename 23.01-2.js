const ALL_BIG_LETTERS = "QWERTYUIOPASDFGHJKLMNBVCXZ";
const logins = ["Mango", "RobotGoogles", "Poly", "Aj4x1sBozz", "Qwerty123"];
const isLoginValid = login =>
  login[0] === login[0].toUpperCase() &&
  login.length >= 4 &&
  login.length <= 16 &&
  Number.isNaN(Number(login[0]));
const isLoginUnique = (allLogins, login) => !allLogins.includes(login);
let pupitr;
const addLogin = (allLogins, login) => {
  if (login === null) {
    return "Отменено пользователем!";
  } else if (!isLoginValid(login)) {
    return "Не соблюдены условия ввода логина!";
  } else if (!isLoginUnique(allLogins, login)) {
    return "Логин с таким именем уже существует!";
  } else {
    allLogins.push(login);
    return "Новый логин создан!";
  }
};
// console.log("Сабака-барабака");
console.log(logins);
do {
  pupitr = prompt("Э, введи логин!");
  console.log(addLogin(logins, pupitr));
} while (pupitr !== null);
console.log(logins);