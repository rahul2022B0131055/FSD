// "use strict";
// function diplay2() {
//     let $ = 2;
//     console.log($);
// }
// diplay2();
// let b = 1.6724667;
// console.log(typeof b);


// let bool = true;
// let str = String(bool);
// console.log(str.charAt(1));

// let str = "12";
// let num = Number(str);
// console.log(num);
// console.log(typeof num);

// const display = function () {
//     let a = confirm("are you okay");
//     console.log(a);
// };

// function display() {
//     const a = prompt("Enter a number");
//     alert(a);
// }
// display();

// const a = '12';
// const b = 12;
// console.log(a == b);
// console.log(a === b);

// const username = "ABCD";
// const paassword = "1234";
// const un = prompt("Enter username");
// const pw = prompt("Enter passowrd");
// (username === un && paassword === pw) ? document.write("Welcome admin") : document.write("Wrong credentials");

const oemail = "ABCD@gmail.com";
const ops = "1234";
const result = document.getElementById("result");
const email = document.getElementById("email");
const password = document.getElementById("password");

function check() {
    let em = email.value;
    let pw = password.value;
    if (em === oemail && pw === ops) {
        alert("Welcome admin");
    }
    else {
        alert("Wrong credentials");
    }
}
function clear() {
    email.value = "";
    password.value = "";
}