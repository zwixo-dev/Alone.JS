
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


};


  function allocateMemory(size, arr) {
    const pointer = Module._malloc(size * 8);

    Module.HEAPF64.set(arr, pointer / 8);

    return pointer;
  }

  function liberation(pointer) {
    Module._free(pointer);
  }