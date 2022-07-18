// var a = 2; //local

// b = 3; //global

// newVariable()

// function newVariable() {
//     // C's scope is function scope
//     // var c = 4;

//     // Now C's scope is global
//     c = 4
//     console.log(c);
// }

// console.log('outside', c);

// /**
//  * VAR 
//  * LET
//  * CONST
//  */
// const const_a = { a: 3 };
// // const_a.a = 5;
// const_a = { a: 5 };

// const newFunc = function() {
//     console.log('NEW FUNCTION');
// }
// console.log(const_a);

// VAR ? LET ?

for (let i = 0; i < 3; i++) {
    console.log('inside', i);
}
console.log('outside', i);