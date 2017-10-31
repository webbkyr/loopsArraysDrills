function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        console.log(fn);
    }
}

function hello() {
    return "Hello World";
}

function goodBye() {
    return "Goodbye World";
}

repeat(hello(), 5);
repeat(goodBye(), 5);