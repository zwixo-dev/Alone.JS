const Module = require('../wasm/operations.js');

Module.onRuntimeInitialized = () => {

    const operations = {
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
    
};
