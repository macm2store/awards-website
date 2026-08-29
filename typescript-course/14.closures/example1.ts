// without closure
let countervalue =0;

function increaseCounter() {
    countervalue++;
}

function getCounter() {
    return countervalue;
}

increaseCounter();
console.log(getCounter());