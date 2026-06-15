
const Module = require("../wasm/matrix.js");

Module.onRuntimeInitialized = () =>{

    // get all the func

    const matrix = {
        sum : Module.cwrap("array_sum", "number", ["number", "number"]),
        product : Module.cwrap("array_product", "number", ["number", "number"]) ,
        average : Module.cwrap("array_average", "number", ["number", "number"]) , 
        min : Module.cwrap("array_min", "number", ["number", "number"]) ,
        max : Module.cwrap("array_max", "number", ["number", "number"]) ,
        range: Module.cwrap("array_range", "number", ["number", "number"])  
    }; 


    // my arr 
    const arr = [1, 2, 3, 4, 5];

    // allocate Memory
    const pointer  = Module._malloc(arr.length * 8); 

    // copy array to wasm 
    Module.HEAPF64.set(arr, pointer/8);

    console.log(arr);
    console.log(arr.length);
    console.log("\n=====================\n");
    // testing
    console.log(matrix.sum(arr.length, pointer));
    console.log(matrix.product(arr.length, pointer));
    console.log(matrix.average(arr.length, pointer));
    console.log(matrix.min(arr.length, pointer));
    console.log(matrix.max(arr.length, pointer));
    console.log(matrix.range(arr.length, pointer));

    Module._free(pointer);

};




// const Module = require("../wsam/matrix.js");

// Module.onRuntimeInitialized = () => {

//     const array_1d_sum = Module.cwrap(
//         "array_1d_sum",
//         "number",
//         ["number", "number"]
//     );

//     const arr = [1,2,3,4,5];

//     // allocate memory
//     const pointer = Module._malloc(arr.length * 8);

//     // copy array to WASM memory
//     Module.HEAPF64.set(arr, pointer / 8);

//     // call C function
//     const result = array_1d_sum(arr.length, pointer);

//     console.log(result);

//     // free memory
//     Module._free(pointer);
// };

// console.log("test");