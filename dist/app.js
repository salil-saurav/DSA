"use strict";
//  adding the number till n 
const addUpto = (num) => {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
};
//  2nd Option 
const addUptoTwo = (num) => {
    return num * (num + 1) / 2;
};
console.log(addUptoTwo(2));
//# sourceMappingURL=app.js.map