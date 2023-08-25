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
    let passLenth=Passwordlength.value;
    if(passLenth>20){
        passLenth=20;
    }
    newData();
    for (let i = 0; i < passLenth; i++) {
        let random = Math.floor(Math.random() * newArr.length);
        password += eval(`getRandom${newArr[random]}()`);
    };
    result.value = password;
    password = '';
    while (newArr.length > 0) {
        newArr.pop();
    }
    createRipple(event);
}



function copy() {
    const value = result.value;
    navigator.clipboard.writeText(value);
    value == '' ? alert('Please generate password') : alert('Password copied to clipboard');
}




function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");

    const ripples = button.getElementsByClassName("ripple");
    if (ripples.length > 0) {
      button.removeChild(ripples[0]);
    }

    button.appendChild(ripple);
  }