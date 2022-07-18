// Cách 1: Callback
// function callToServer(callback) {
//     return setTimeout(() => {
//         let data = []
//         data = [1, 2, 3]
//         callback(data)
//     }, 3000)
// }

// callToServer((response) => {
//     console.log(response);
// })

// Cách 2: Promise
// const callToServer = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data1 = []
//         data1 = [1, 2, 3, 4]
//         data1.length < 4 ? resolve(data1) : reject('Có lỗi')
//     }, 3000)
// })

// callToServer
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('Done!');
//     })

// Cách 3: Có 2 promise
const callToServer = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data1 = []
        data1 = [1, 2, 3]
        data1.length < 4 ? resolve(data1) : reject('Có lỗi')
    }, 3000)
})

const callToServer2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data1 = []
        data1 = ['abc']
        data1.length < 4 ? resolve(data1) : reject('Có lỗi')
    }, 3000)
})

Promise.all([callToServer, callToServer2])
    .then(([result, result1]) => { //dùng destructuring ES6
        console.log([...result, ...result1]);
    })
 
