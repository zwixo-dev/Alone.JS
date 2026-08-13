const Module = require('../wasm/operations.js');

let operations;

Module.onRuntimeInitialized = () => {

    operations = {
        addition: Module.cwrap("addition", "number", ["number","number"]),
        subtract: Module.cwrap("subtract", "number", ["number","number"]),
        multiply: Module.cwrap("multiply", "number", ["number","number"]),
        divide: Module.cwrap("divide", "number", ["number","number"]),
        power: Module.cwrap("power", "number", ["number","number"]),
        square: Module.cwrap("square", "number", ["number","number"]),
        cube: Module.cwrap("cube", "number", ["number","number"]),
        sqrt: Module.cwrap("sqrt", "number", ["number","number"]),
        aBs: Module.cwrap("aBs", "number", ["number","number"]),
    }
    
    console.log("addition : ", addition(9, 9));
    console.log("subtract : ", subtract(20, 1));
    console.log("multiply : ", multiply(9, 4));
    console.log("divide : ", divide(16, 4));
    console.log("power : ", power(2, 3));
    console.log("square : ", square(2));
    console.log("cube : ", cube(3));
    console.log("sqrt : ", sqrt(16));
    console.log("aBs : ", aBs(-1));
};


// addition
function addition(a, b){
    return operations.addition(a, b);
}

// subtract
function subtract(a, b){
    return operations.subtract(a, b);
}

// multiply
function multiply(a, b){
    return operations.multiply(a, b);
}

// divide
function divide(a, b){
    return operations.divide(a, b);
}

// power
function power(base, exponent){
    return operations.power(base, exponent);
}

// square
function square(n){
    return operations.square(n);
}

// cube
function cube(n){
    return operations.cube(n);
}

// sqrt
function sqrt(n){
    return operations.sqrt(n);
}

// aBs
function aBs(n){
    return operations.aBs(n);
}