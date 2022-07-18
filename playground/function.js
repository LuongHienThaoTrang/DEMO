// Hoisting

console.log(a);
var a = 2;


newVariable()

function newVariable() { //function declaration
    // C's scope is function scope
    // var c = 4;

    // Now C's scope is global
    c = 4
    console.log(c);
}

// function expression
// newFunction()
const newFunction = function() {
    console.log('NEW FUNCTION');
} 

// Args
function testArgs(...args) {
    console.log('args =', args);
    return args.reduce((total, arg) => total + arg, 0)
}
console.log(testArgs(1, 2, 3));

// arrow function
const person = {
    name: 'Ca map',
    age: 3,
    diNgu: () => {
        const danhRang = () => {
            console.log(`${this.name} da danh rang`);
        }
        danhRang();
        console.log(`${this.name} da di ngu`);
    }
}

person.diNgu()

// ES6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    diNgu() {
        const danhRang = () => {
            console.log(`${this.name} da danh rang`);
        }
        danhRang()
        console.log(`${this.name} da di ngu`);
    }
}

const newPerson = new Person('Trang', 22)
console.log(newPerson);



