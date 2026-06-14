const Module = require("../wsam/statistics.js");

Module.onRuntimeInitialized = ()=>{

    const statistics = {
        mean: Module.cwrap("array_mean", "number", ["number","number"]),
        median: Module.cwrap("array_median", "number", ["number", "number"])
    }

    // my values  
    const arr = [1, 2, 3, 4, 5];
    
    // allocate Memory
    const pointer = Module._malloc(arr.length * 8);

    // copy array to wasm 
    Module.HEAPF64.set(arr, pointer/8);

    //values
    console.log(arr);
    //length 
    console.log(arr.length);

    console.log("\n======================\n");
    
    // testing
    console.log(statistics.mean(arr.length, arr));
    console.log(statistics.median(arr.length, arr));

    // 
    Module._free(pointer);
}