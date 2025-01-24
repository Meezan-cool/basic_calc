// 31
// let defaultResult = 1;
// let currentResult ; // Declaration 
// currentResult = (currentResult + 10) * 3 / 2 - 1;
// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1'
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`
// console.log(calculationDescription);

// function add(num1,num2){
//     const result = num1 + num2;
//     return result;
// }
// currentResult = add(1,2)

// console.log(currentResult)



// 32 - Intro to the Global Declaration
// let defaultResult = 0;
// let currentResult = defaultResult;

// // Pure Function
// function add(num1,num2) {
//     const result = num1 + num2;
//     return result;
// }
// // can't use local/block scope variables (=declared inside of functions) outside of them!
// // alert(result);

// currentResult = add(1,2);

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// console.log(currentResult);

// Shadowed Variables
// let userName = 'Max';
// function greetUser(name) {
//   let userName = name;
//   alert(userName);
// }
// userName = 'Manu';
// greetUser(userName);

// 34 - More about "return" statement
// if function return empty means it will exit function
// function show(bool){
//    if(bool) reuturn
//    else return 'False'
// }

// 35 - Executing Functions Indirectly
// const defaultResult = 0;
// let currentResult = defaultResult;

// // DOM
// let userInput = document.getElementById('user-input');
// let addBtn = document.getElementById('add-btn');

// function add(){
//     currentResult = currentResult + userInput.value;
//     console.log(currentResult)
// }
// addBtn.addEventListener('click',add);

// 37 - Converting Data Types
// const defaultResult = 0;
// let currentResult = defaultResult;

// // DOM
// let userInput = document.getElementById('user-input');
// let addBtn = document.getElementById('add-btn');

// function add(){
//     currentResult = currentResult + +userInput.value;
//     // currentResult = currentResult + Number(userInput.value);
//     // currentResult = currentResult + parseInt(userInput.value);
//     console.log(currentResult)
// }
// addBtn.addEventListener('click',add);

// Imp --- Mixing Numbers & Strings
// + operator
// 3 + '3' => '33'
// 'hi' - 'i' => Nan
// 3 - '3' => 0
// 3 / '3' => 1

// 40 - Splitting Code into Functions
// const defaultResult = 0;
// let currentResult = defaultResult;

// // DOM
// let userInput = document.getElementById('user-input');
// let addBtn = document.getElementById('add-btn');
// let subBtn = document.getElementById('sub-btn');
// let mulBtn = document.getElementById('mul-btn');
// let DivBtn = document.getElementById('div-btn');

// function getUserNumberInput(){
//     return parseInt(userInput.value)
// }

// function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
//     calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
//     if(isNaN(currentResult)){ currentResult = 0 }
//     console.log(currentResult, calcDescription)
// }

// function add(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult + enteredNumber;
//     createAndWriteOutput('+', initialResult, enteredNumber);
// }

// function subtract(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult - enteredNumber;
//     createAndWriteOutput('-', initialResult, enteredNumber);
// }

// function multiply(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult * enteredNumber;
//     createAndWriteOutput('*', initialResult, enteredNumber);
// }

// function divide(){
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult / enteredNumber;
//     createAndWriteOutput('/', initialResult, enteredNumber);
// }

// addBtn.addEventListener('click',add); 
// subBtn.addEventListener('click',subtract); 
// mulBtn.addEventListener('click',multiply); 
// DivBtn.addEventListener('click',divide); 



// 41 - Working with Code Comments
const defaultResult = 0;
let currentResult = defaultResult;
// DOM
let resultbox = document.querySelector('.result_box'); 
let userInput = document.getElementById('user-input');
let addBtn = document.getElementById('add-btn');
let subBtn = document.getElementById('sub-btn');
let mulBtn = document.getElementById('mul-btn');
let DivBtn = document.getElementById('div-btn');

function getUserNumberInput(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    if(isNaN(currentResult)){ currentResult = 0 }
    console.log(currentResult, calcDescription)
    resultbox.textContent = `Result : ${currentResult}`
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click',add); 
subBtn.addEventListener('click',subtract); 
mulBtn.addEventListener('click',multiply); 
DivBtn.addEventListener('click',divide); 
