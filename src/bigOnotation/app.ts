//  adding the number till n 

const addUpto = (num: number): number => {
    let sum: number = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

//  2nd Option 

const addUptoTwo = (num: number): number => {
    return num * (num + 1)/ 2;
}

console.log(addUptoTwo(2));
