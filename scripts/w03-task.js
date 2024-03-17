/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers(){
let addNumber1 = Number(document.querySelector('#add1').value);
let addNumber2 = Number(document.querySelector('#add2').value);
document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}
function subtractNumbers(){
let subtractNumber1 = Number(document.querySelector('#subtract1').value);
let subtractNumber2 = Number(document.querySelector('#subtract2').value);
document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => {
    return num1 * num2;
};
const multiplyNumbers = () => {
    let multiplyFactor1 = Number(document.querySelector('#factor1').value);
    let multiplyFactor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(multiplyFactor1, multiplyFactor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => {
    return num1/num2;
};
const divideNumbers = () => {
    let divisionDividend = Number(document.querySelector('#dividend').value);
    let divisionDivisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(divisionDividend, divisionDivisor);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', ()=>{
    let numericSubtotal = Number(document.querySelector('#subtotal').value);
    let isMembership = document.querySelector('#member');
    if(isMembership.checked){
        numericSubtotal = numericSubtotal - (20/100 * numericSubtotal);
    }
    document.querySelector('#total').innerHTML = `$ ${numericSubtotal.toFixed(2)}`
});



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = numbersArray;



/* Output Odds Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter((number) => number%2 === 0);

/* Output Evens Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter((number) => number%2 > 0);


/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multipliedArray;


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = multipliedArray.reduce((sum, number) => sum + number);
