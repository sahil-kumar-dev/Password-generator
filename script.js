const result = document.getElementById('result');
const Passwordlength = document.getElementById('length');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const symbols = document.getElementById('symbols');
const numbers = document.getElementById('numbers');



function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}
function getRandomSymbols() {
    const symbols = '!@#$%&*()?';
    let num = Math.floor(Math.random() * symbols.length);
    return symbols[num];
}

const arr = ['Lowercase', 'Uppercase', 'Number', 'Symbols'];
let newArr = [];
function newData() {
    if (lowercase.checked) {
        newArr.push(arr[0]);
    }
    if (uppercase.checked) {
        newArr.push(arr[1]);
    }
    if (numbers.checked) {
        newArr.push(arr[2]);
    }
    if (symbols.checked) {
        newArr.push(arr[3]);
    }
}



let password = '';

function generate() {
    newData();
    console.log(newArr);
    for (let i = 0; i < Passwordlength.value; i++) {
        let random = Math.floor(Math.random() * newArr.length);
        password += eval(`getRandom${newArr[random]}()`);
    };
    result.value = password;
    password = '';
    while(newArr.length>0){
        newArr.pop();
    }
}



function copy() {
    const value = result.value;
    navigator.clipboard.writeText(value);

    value == '' ? alert('Please generate password') : alert('Password copied to clipboard');
}
