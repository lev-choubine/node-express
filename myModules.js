function addTen(num){
    let result = num+ 10;
    return result;
}

function drinkTea(tea){
   console.log(`I am drinking some ${tea} now.`);
}

function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

module.exports = {
    addTen,
    drinkTea,
    multiply
}