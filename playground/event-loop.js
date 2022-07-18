// event loop, variable, scope
// Web API nó được cung cấp bởi trình duyệt nó không có trong JS runtime

for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

