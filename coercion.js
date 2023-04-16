//Abstract operations
//ToNumber
//ToPrimitive
//ToOrdinaryPrimitive

// Subtract operator calls abstract operation on both the operand -> ToNumber(argument)

let obj = {
    // Overriding
    // Default value is "[object Object]".
    toString() {
        return "Let's learn Javascript";
    },
    valueOf() {
        // Default valueOf returns same Object { } -> i.e obj itself.
        return "Changing default value of valueOf";
    }
};

console.log(obj.toString());
console.log(obj.valueOf());