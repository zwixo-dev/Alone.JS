const Module = require("../wasm/statistics.js");

Module.onRuntimeInitialized = ()=>{

    const statistics = {
        mean: Module.cwrap("array_mean", "number", ["number","number"]),
        median: Module.cwrap("array_median", "number", ["number", "number"]),
        variance: Module.cwrap("array_variance", "number", ["number", "number"]),
        stddev: Module.cwrap("array_stddev", "number", ["number", "number"]),
        mode: Module.cwrap("array_mode", "number", ["number", "number"]),
        percentile: Module.cwrap("array_percentile", "number", ["number", "number"]), 
        quartiles: Module.cwrap("array_quartiles", "number", ["number", "number"]), 
        iqr: Module.cwrap("array_iqr", "number", ["number", "number"]),
        skewness: Module.cwrap("array_skewness", "number", ["number", "number"]),
        kurtosis: Module.cwrap("array_kurtosis", "number", ["number", "number"]),
        covariance: Module.cwrap("array_covariance", "number", ["number", "number", "number", "number"]),
        normalize: Module.cwrap("array_normalize", "number", ["number", "number"]),
        correlation: Module.cwrap("array_correlation", "number", ["number", "number"]),
        zscore: Module.cwrap("array_zscore", "number", ["number", "number"])
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
    console.log(statistics.mean(arr.length, pointer));
    console.log(statistics.median(arr.length, pointer));

    // sample varaice : set the option "the third parameter" to 1
    console.log("sample variance :", statistics.variance(arr.length, pointer, 1));

    // population variance : set the option "the third parametere" to 0 o keep it empty
    //method 1: option param = 1
    console.log("population variance :", statistics.variance(arr.length, pointer, 0));
    // method 2: no option 
    console.log("population variance :", statistics.variance(arr.length, pointer));


    // sample stddev  : set the option "the third parameter" to 1
    console.log("sample stddev :",statistics.stddev(arr.length, pointer, 1));
    // population stddev : set the option "the third parameter" to 0 or don't write it
    console.log("popuation stddev :",statistics.stddev(arr.length, pointer, 0));

    // mode
    console.log(statistics.mode(arr.length, pointer)); // -1 = no mode 
    
    // percentile
    console.log(statistics.percentile(arr.length, pointer, 4));
    //quartiles
    console.log(statistics.quartiles(arr.length, pointer, 0.25));
    console.log(statistics.quartiles(arr.length, pointer, 0.5));
    console.log(statistics.quartiles(arr.length, pointer, 0.75));


    // iqr

    console.log("iqr : ", statistics.iqr(arr.length, pointer));

    //skewness
    // sample : set the third param to 1
    console.log("skewness : ", statistics.skewness(arr.length, pointer, 1))
    // population : set te third param to 0 o don't write it
    console.log("skewness : ", statistics.skewness(arr.length, pointer, 0)); 

    // kurtosis 
    // the third param of kurtosis func is the stddev 
    // kurtosis ===> with sample value of stdev func
    const sampleStddev =  statistics.stddev(arr.length, pointer, 1);
    console.log("kurtosis with sample / standard value (stddev)", statistics.kurtosis(arr.length, pointer, sampleStddev));
    // kurtosis ===> with population value of stdev func
    const popStddev = statistics.stddev(arr.length, pointer, 0);
    console.log("kurtosis with population value (stddev) : ", statistics.kurtosis(arr.length, pointer, popStddev));


    // ** Note ** : make sure if you wanna use the covariance function you should have 
    // two array with the same size to uscure evertihnig will work operfect  

    // covariance
    const arr_x = [1, 2, 3, 4, 5, 6, 7];
    const arr_y = [8, 9, 10, 11, 12, 13, 14];

    const pointer_x = Module._malloc(arr_x.length * 8); Module.HEAPF64.set(arr_x, pointer_x/8);
    const pointer_y = Module._malloc(arr_y.length * 8); Module.HEAPF64.set(arr_y, pointer_y/8);

    // sample covariance : the third param set 1 
    console.log("sample covariance : ", statistics.covariance(arr_x.length, pointer_x, pointer_y, 1)); 
    // sample covariance : the third param set 0 ok don't write it 
    console.log("population covariance : ", statistics.covariance(arr_x.length, pointer_x, pointer_y, 0)); 

    //array_correlation
    // sample correlation : set the third param to 1
    console.log("sample covariance : ", statistics.correlation(arr_x.length, pointer_x, pointer_y, 1));
    // population correlation
    console.log("population covariance : ", statistics.correlation(arr_x.length, pointer_x, pointer_y, 0));

    // ** Note ** : the normalize func return an array instead of a single value 

    // array_normalize
    // void array_normalize(int size, double *arr, double *output_arr);
    // const arr = [1, 2, 3, 4, 5];

    const inputPointer = Module._malloc(arr.length * 8);
    const outputPointer = Module._malloc(arr.length * 8);

    Module.HEAPF64.set(arr, inputPointer/8);


    statistics.normalize(arr.length, inputPointer, outputPointer);
    const normalizeResult = Array.from( Module.HEAPF64.subarray(outputPointer/8, (outputPointer/8)+arr.length) );
    console.log("normalize : ",normalizeResult);

    //  ** Note ** : the normalize func return an array instead of a single value 

    //array_zscore
    // void array_zscore(int size, double *arr, double *output_arr);
    // const arr = [1, 2, 3, 4, 5];

    statistics.zscore(arr.length, inputPointer, outputPointer);
    const zscoreResult = Array.from( Module.HEAPF64.subarray(outputPointer/8, (outputPointer/8)+arr.length ) );
    console.log("zscore : ", zscoreResult);

    // Memory liberation
    Module._free(pointer);
    Module._free(pointer_x);
    Module._free(pointer_y);

    Module._free(inputPointer);
    Module._free(outputPointer);

}