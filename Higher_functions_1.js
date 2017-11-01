function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

const hello = function helloGreeting() {
    console.log("Hello World");
}

const goodbye = function goodByeGreeting() {
    console.log("Goodbye World");
}

repeat(hello, 5);
repeat(goodbye, 5);

function scream() {
    console.error("HELP")
};



repeat(scream, 3);