// INPUT [1, 2, 3] => 3 phần tử
// OUTPUT [2, 4, 6] => 3 phần tử, những nó bị tác động
// => MAP
const arrayInput = [1, 2, 3]
const newArray = arrayInput.map(array => array * 2)
console.log(newArray);

// INPUT [1, 2, 3, 4, 5]
// OUTPUT [2, 4]
// => FILTER
const inputArray = [1, 2, 3, 4, 5]
const outputArray = inputArray.filter(input => input%2 === 0 ? true : false )
console.log(outputArray);

// INPUT [1, 2, 3, 4, 5]
// OUTPUT 15
// REDUCE
const inputReduce = [1, 2, 3, 4, 5]
const outputReduce = inputReduce.reduce((total, acc) => total + acc, 0);
console.log(outputReduce);

