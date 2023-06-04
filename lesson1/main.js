// Task 01
let inp1 = document.querySelector('.inp1');
let out1 = document.querySelector('.out1');
let btn1 = document.querySelector('.btn1');
const task1 = "Привіт,"

btn1.onclick = () => {
  out1.innerHTML = task1 + inp1.value
}

// Task 02
let inp2 = document.querySelector('.inp2');
let btn2 = document.querySelector('.btn2');
let out2 = document.querySelector('.out2');
const year = 2023;

btn2.onclick = () => {
  out2.innerHTML = year - inp2.value
}

// Task 03

let inp3 = document.querySelector('.inp3');
let out3 = document.querySelector('.out3');
let btn3 = document.querySelector('.btn3');
const EU = 0.93;

btn3.onclick = () => {
  out3.innerHTML = +inp3.value * EU
}

// Task 04

let inp4 = document.querySelector('.inp4');
let btn4 = document.querySelector('.btn4');
let out4 = document.querySelector('.out4');
const coef = 4;

btn4.onclick  = () => {
  out4.innerHTML = inp4.value * coef 
}

// Task 05

let inp5 = document.querySelector('.inp5');
let btn5 = document.querySelector('.btn5');
let out5 = document.querySelector('.out5');
const pi = 3.14;

btn5.onclick = () => {
  out5.innerHTML = pi * (inp5.value ** 2)
}
  

// Task 06

let distance = document.querySelector('.distance');
let time = document.querySelector('.time');
let btn6 = document.querySelector('.btn6');
let speed = document.querySelector('.speed');
let task6 = "km / h";
  

btn6.onclick = () => {
  speed.innerHTML = (distance.value / time.valu) + task6
}





