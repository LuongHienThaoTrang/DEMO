/**
 * JS: Là ngôn ngữ đơn luồng, bất đồng bộ
 * Asynchronus: Là
 * Nó sẽ đưa vào vùng Web API
 * setTimeout, setInterval, fetch(gọi 1 yêu cầu qua internet qua mạng), XMLHTTPRequest, Đọc file(File Reading), request animation frame
 */

function numberOne() {
    console.log(1);
}

function numberTwo() {
    console.log(2);
}

function numberThree() {
    console.log(3);
}

function numberFour() {
    console.log(4);
}

function numberFive() {
    console.log(5);
}

numberOne()
numberTwo()
numberThree()
setTimeout(numberFour, 0)
numberFive()