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
let logEnteries = [];
// DOM
let resultbox = document.querySelector('.result_box'); 
let userInput = document.getElementById('user-input');
let addBtn = document.getElementById('add-btn');
let subBtn = document.getElementById('sub-btn');
let mulBtn = document.getElementById('mul-btn');
let DivBtn = document.getElementById('div-btn');
let calcDescrip = document.querySelector('.calc_descript');



// Gets Input from input field number
function getUserNumberInput(){
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    if(isNaN(currentResult)){ currentResult = 0 }
    resultbox.textContent = `Result : ${currentResult}`
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    }
    logEnteries.push(logEntry);
// Construct the calculation string
calcDescrip.textContent = logEnteries
.map((item,index) => {
    const operator = item.operation === 'ADD' && index !== 0? '+': 
                     item.operation === 'SUBTRACT' ? '-' : 
                     item.operation === 'MULTIPLY' ? '*' : 
                     item.operation === 'DIVIDE' ? '/' : '';
    return `${operator} ${item.number}`; })
.join(' ')
.trim();
}

// Add Numbers
function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult) 
    console.log(logEnteries)
}

// Substract Numbers
function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
    console.log(logEnteries)
}

// Multiply Numbers
function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
    console.log(logEnteries)
}

// Divide Numbers
function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
    console.log(logEnteries)
}

// Event Listeners on every button
addBtn.addEventListener('click',add); 
subBtn.addEventListener('click',subtract); 
mulBtn.addEventListener('click',multiply); 
DivBtn.addEventListener('click',divide); 

// More Operators
// -- Increment 
// ++ Decrement 
// ** Exponentiation
// += Addition Assignment 
// -= Substraction Assignment 
// *= Multiplication Assignment 
// /= Division Assignment 

// More Core Data Types 
// Booleans - true / false - Important for conditional code and situations where you only have 2 options
// Objects - {name: 'Max', age: 31} / Key: Value (Pair) - Important for grouped/ related data, helps you with organizing data
// Arrays - [1, 3, 5] - Important for list data, unknown amounts of data 


// 49 undefined / null / NaN

// undefined -> Default value of uninitialized variables / you shouldn't assign undefined as a value manually

// null -> Never assumed by default / you can assign this is a value if you want to "reset" / "clear" a variable

// Nan -> Technically, it's of type number and can therefore be used in calculations / it yields a new it's the result of invalid calculations (e.g. 3 * 'hi') 