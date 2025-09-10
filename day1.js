// 1. String (Text) 
const firstName = "মোহাম্মদ";
const lastName = 'আলী';
const fullName = `${firstName} ${lastName}`; // Template literal 
console.log(typeof firstName);
// "string" // 2. Number (সংখ্যা) const age = 25; const price = 99.99; const negative = -10; console.log(typeof age); // "number" // 3. Boolean (সত্য/মিথ্যা) const isStudent = true; const isMarried = false; console.log(typeof isStudent); // "boolean" // 4. Undefined (অনির্ধারিত) let salary; console.log(salary); // undefined console.log(typeof salary); // "undefined" // 5. Null (খালি) const data = null; console.log(data); // null console.log(typeof data); // "object" (JavaScript এর bug!)
// typeof operator দিয়ে type check করা 
function checkType(value) { console.log(`Value: ${value}, Type: ${typeof value}`); }
checkType("Hello");
// string checkType(42); // number checkType(true); // boolean checkType(undefined); // undefined checkType(null); // object (quirk!) // Null check করার সঠিক উপায় function isNull(value) { return value === null; } console.log(isNull(null)); // true console.log(isNull(undefined)); // false

// Basic Calculator Functions 
function add(a, b) { return a + b; } 
function subtract(a, b) { return a - b; } 
function multiply(a, b) { return a * b; } 
function divide(a, b) { if (b === 0) { return "Error: Cannot divide by zero!"; } return a / b; } 
// Variable Information Function 
function getVariableInfo(value) { 
    return { value: value, type: typeof value, isNumber: typeof value === 'number', isString: typeof value === 'string', isBoolean: typeof value === 'boolean', isUndefined: value === undefined, isNull: value === null }; } 
    // Usage Examples 
    const x = 10; const y = 5; console.log(`${x} + ${y} = ${add(x, y)}`); console.log(`${x} - ${y} = ${subtract(x, y)}`); console.log(`${x} * ${y} = ${multiply(x, y)}`); console.log(`${x} / ${y} = ${divide(x, y)}`);



    const name="muntasir";
    let age=27;
    let isMarried = false;
    var salary = undefined;
    const account = null;

    console.log(typeof salary)


    function avg(n1,n2,n3) {return (n1+n2+n3) / 3}
    console.log(avg(3,6,4))


    let price = 20;
    const discount = 10
    let finalPrice = price - price * discount / 100;
    console.log(finalPrice)

    let c = 36.7
    let f = 9*c / (5) + 32
    console.log(f)