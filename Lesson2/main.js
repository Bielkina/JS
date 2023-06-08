// Task 1

let btn1 = document.querySelector(".btn1");
let inp1 = document.querySelector(".first-addend");
let inp2 = document.querySelector(".second-addend");
let out1 = document.querySelector(".out1");

btn1.onclick = () => {
    let result = (parseFloat(inp1.value) + parseFloat(inp2.value)).toFixed(2);
    //parseFloat сприймає число з крапкою
    //toFixed округляє дріб до заданої у дужках кількості знаків (2)
    out1.innerHTML = result;

// Працює лише з крапкою (.), кому (,) не сприймає
}

// Task 2
                        //VAR1

// let step1 = "1"
// let step2 = 2

// let btn2 = document.querySelector(".btn2");
// let out2 = document.querySelector(".out2");

// btn2.onclick = () => {
//    let result2 = +step1 + step2
//    out2.innerHTML = result2;
// }
                        //VAR2

let addend1 = document.querySelector(".addend1");
let addend2 = document.querySelector(".addend2");
let btn2 = document.querySelector(".btn2");
let out2 = document.querySelector(".out2");

btn2.onclick = () => {
    let result2 = +addend1.value + +addend2.value
       out2.innerHTML = result2 
}
// VAR2 не дуже правильне рішення, бо обидва доданки перетворені на числа за допомогою "+"

//  Task 3

let addend3 = document.querySelector(".addend3");
let btn3 = document.querySelector(".btn3");
let out3 = document.querySelector(".out3");

btn3.onclick = () => {
    let number1 = +addend3.value % 10;
    //Залишає всі значення після порядку числа 10
    // тобто якщо 123456 12 прибере, залишить 3456
    let number2 = Math.floor(+addend3.value / 10) ;
    // функція Math.floor() для отримує цілу частину від ділення
    // тобто 123/10=12,3 0,3 прибере, залишить 12
    let result3 = number1 + (number2 % 10).toString() + (Math.floor(number2 / 10).toString())
    out3.innerHTML = result3;
    //toString() виводить числа у рядок без операції додавання
}

//  Task 4

let card4 = document.querySelector(".card4");
let btn4 = document.querySelector(".btn4");
let out4 = document.querySelector(".out4");
const file = 820

btn4.onclick = () => {
    let infMb = +card4.value * 1024
    let result4 = Math.floor(infMb / file)



    out4.innerHTML = "На вашій флешці знаходиться: " + result4 + " файли"
}



