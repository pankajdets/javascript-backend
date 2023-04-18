//Abstract operations
//ToNumber
//ToPrimitive
//ToOrdinaryPrimitive

// Subtract operator calls abstract operation on both the operand -> ToNumber(argument)

obj = {
    x: 10
}

console.log(obj.toString());
console.log(obj.valueOf());

console.log(10 - obj);

let obj1 = {
    // Overriding
    // Default value is "[object Object]".
    toString() {
        return 10;
    },
    valueOf() {
        // Default valueOf returns same Object { } -> i.e obj itself.
        return 10;
    }
};

console.log(obj1.toString());
console.log(typeof obj1.toString());
console.log(obj1.valueOf());

console.log(10 - obj1);

console.log(obj + obj1);

let obj2 = {x: 10, y:20};
let num = 10;

console.log(`My object is ${obj2}`);
