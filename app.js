//Asynchrounous via callback
function washing(callback) {
    console.log("washing started");
    setTimeout(() => {
        console.log("washing done....");
        callback();
    }, 3000);
}
function soaking(callback) {
    console.log("soaking started");
    setTimeout(() => {
        console.log("soaking done....");
        callback();
    }, 4000);
}
function drying() {
    console.log("drying started");
    setTimeout(() => {
        console.log("drying done.....");
    }, 5000);
}
console.log("started laundary");
washing(() => {
    soaking(() => {
        drying();
    });
});
console.log("I am making biryani");
console.log(1); //callstack
console.log(2);
console.log(3);
setTimeout(() => {
    console.log("hello"); //web /NODE API //EVENT QUEUE  //EVENT LOOP
}, 3000);
console.log(4);
export {};
