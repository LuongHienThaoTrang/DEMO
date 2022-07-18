// JS TYPE: Primitive Types và Reference Types(Tham trị và Tham chiếu)

// 1.	Primitive Types (Kiểu dữ liệu Tham trị)
    // •	String
    // •	Number
    // •	Boolean
    // •	BigInt
    // •	Symbol
    // •	Undefined
    // •	null

// 2.	Reference Types (Kiểu dữ liệu Tham chiếu)
    // •	Array
    // •	Function
    // •	Object

var array = [1, 2, 3]
var newArray = [...array]
console.log(newArray);
newArray.push(5)
console.log(array);
console.log(newArray);