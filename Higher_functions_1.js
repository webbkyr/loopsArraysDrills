function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        console.log(fn);
    }
}

const hello = function helloGreeting() {
    return "Hello World";
}

const goodbye = function goodByeGreeting() {
    return "Goodbye World";
}

repeat(hello(), 5);
repeat(goodbye(), 5);