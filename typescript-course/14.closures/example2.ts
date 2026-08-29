// with closures
function createCounter (){
    let countervalue =0;
    return { 
        increment:function () {
        countervalue++;
    },
    decrement:function () {
        countervalue--;
    },
    getValue:function () {
        return countervalue;
    }
}
    
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getValue());