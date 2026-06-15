const Module = require('../wasm/operations.js');

Module.onRuntimeInitialized = () => {

    const addition = Module.cwrap(
        "addition",
        "number",
        ["number", "number"]
    );

    console.log("addition ", addition(4, 5));

    const subtract = Module.cwrap(
        "subtract", 
        "number",
        ["number", "number"]
    );

    console.log("subtract ", subtract(4, 5));

    const multiply = Module.cwrap(
        "multiply", 
        "number",
        ["number", "number"]
    );
    
    console.log("multiply ", multiply(4, 5));

    const divide = Module.cwrap(
        "divide",
        "number",
        ["number", "number"]
    );

    console.log("divide ", divide(4, 5));

    const power = Module.cwrap(
        "power",
        "number",
        ["number", "number"]
    );

    console.log("power", power(2, 3));
    
    const square = Module.cwrap(
        "square",
        "number",
        ["number", "number"]
    );

    console.log("square", square(2));
    
    const cube = Module.cwrap(
        "cube",
        "number",
        ["number", "number"]
    );

    console.log("cube", cube(3));


    const sqrt = Module.cwrap(
        "sqrt",
        "number",
        ["number", "number"]
    );

    console.log("sqrt", sqrt(3));
    
    const aBs = Module.cwrap(
        "aBs",
        "number",
        ["number", "number"]
    );

    console.log("aBs", aBs(-18));

};