const Module = require("../wasm/statistics.js");

Module.onRuntimeInitialized = () => {
  const statistics = {
    mean: Module.cwrap("array_mean", "number", ["number", "number"]),
    median: Module.cwrap("array_median", "number", ["number", "number"]),
    variance: Module.cwrap("array_variance", "number", ["number", "number"]),
    stddev: Module.cwrap("array_stddev", "number", ["number", "number", "number"]),
    mode: Module.cwrap("array_mode", "number", ["number", "number"]),
    percentile: Module.cwrap("array_percentile", "number", ["number", "number", "number"]),
    quartiles: Module.cwrap("array_quartiles", "number", ["number", "number", "number"]),
    iqr: Module.cwrap("array_iqr", "number", ["number", "number"]),
    skewness: Module.cwrap("array_skewness", "number", ["number", "number", "number"]),
    kurtosis: Module.cwrap("array_kurtosis", "number", ["number", "number", "number"]),
    covariance: Module.cwrap("array_covariance", "number", ["number", "number", "number", "number"]),
    normalize: Module.cwrap("array_normalize", null, ["number", "number", "number"]),
    correlation: Module.cwrap("array_correlation", "number", ["number","number", "number", "number"]),
    zscore: Module.cwrap("array_zscore", null, ["number", "number", "number"]),
  };

  function allocateMemory(size, arr) {
    const pointer = Module._malloc(size * 8);

    Module.HEAPF64.set(arr, pointer / 8);

    return pointer;
  }

  function liberation(pointer) {
    Module._free(pointer);
  }

  // mean

  function mean(size, arr) {
    const pointer = allocateMemory(size, arr);

    const mean = statistics.mean(size, pointer);

    liberation(pointer);

    return mean;
  }

  // median

  function median(size, arr) {
    const pointer = allocateMemory(size, arr);

    const median = statistics.median(size, pointer);

    liberation(pointer);

    return median;
  }

  // variance

  function variance(size, arr, option) {
    const pointer = allocateMemory(size, arr);

    const variance = statistics.variance(size, pointer, option);

    liberation(pointer);

    return variance;
  }

  // stddev

  function stddev(size, arr, option) {
    const pointer = allocateMemory(size, arr);

    const stddev = statistics.stddev(size, pointer, option);

    liberation(pointer);

    return stddev;
  }

  // mode

  function mode(size, arr) {
    const pointer = allocateMemory(size, arr);

    const mode = statistics.mode(size, pointer);

    liberation(pointer);

    return mode;
  }

  // percentile

  function percentile(size, arr, value) {
    const pointer = allocateMemory(size, arr);

    const percentile = statistics.percentile(size, pointer, value);

    liberation(pointer);

    return percentile;
  }

  // quartiles

  function quartiles(size, arr, Q) {
    const pointer = allocateMemory(size, arr);

    const quartiles = statistics.quartiles(size, pointer, Q);

    liberation(pointer);

    return quartiles;
  }

  // iqr

  function iqr(size, arr) {
    const pointer = allocateMemory(size, arr);

    const iqr = statistics.iqr(size, pointer);

    liberation(pointer);

    return iqr;
  }

  // skewness

  function skewness(size, arr, option) {
    const pointer = allocateMemory(size, arr);

    const skewness = statistics.skewness(size, pointer, option);

    liberation(pointer);

    return skewness;
  }

  // kurtosis

  function kurtosis(size, arr, s) {
    const pointer = allocateMemory(size, arr);

    const kurtosis = statistics.skewness(size, pointer, s);

    liberation(pointer);

    return kurtosis;
  }

  // covariance

  function covariance(size, arr_x, arr_y, option) {
    const pointer_x = allocateMemory(size, arr);
    const pointer_y = allocateMemory(size, arr);

    const covariance = statistics.covariance(
      size,
      pointer_x,
      pointer_y,
      option,
    );

    liberation(pointer_x);
    liberation(pointer_y);

    return covariance;
  }

  // normalize

  function normalize(size, arr) {
    const inputPointer = allocateMemory(size, arr);
    const outputPointer = allocateMemory(size, arr);

    statistics.normalize(size, inputPointer, outputPointer);
    const normalize = Array.from(
      Module.HEAPF64.subarray(
        outputPointer / 8,
        outputPointer / 8 + arr.length,
      ),
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return normalize;
  }

  // correlation

  function correlation(size, arr_x, arr_y, option) {
    const pointer_x = allocateMemory(size, arr_x);
    const pointer_y = allocateMemory(size, arr_y);

    const correlation = statistics.correlation(
      size,
      pointer_x,
      pointer_y,
      option,
    );

    liberation(pointer_x);
    liberation(pointer_y);

    return correlation;
  }

  // zscore

  function zscore(size, arr) {
    const inputPointer = allocateMemory(size, arr);
    const outputPointer = allocateMemory(size, arr);

    statistics.zscore(size, inputPointer, outputPointer);
    const zscore = Array.from(
      Module.HEAPF64.subarray(
        outputPointer / 8,
        outputPointer / 8 + arr.length,
      ),
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return zscore;
  }


  // fast test

    const arr = [1, 2, 3, 4, 5];

    const arr_x = [1, 2, 3, 4, 5, 6, 7];
    const arr_y = [8, 9, 10, 11, 12, 13, 14];


    console.log(mean(arr.length, arr));    
    console.log(median(arr.length, arr));    
    console.log("sample variance :", variance(arr.length, arr, 1));    
    console.log("pop.. variance :", variance(arr.length, arr, 0)); 
    console.log("sample stddev", stddev(arr.length, arr, 1));    
    console.log("pop.. stddev", stddev(arr.length, arr, 0));    
    console.log("mode",mode(arr.length, arr));    
    console.log("percentile",percentile(arr.length, arr, 4));    
    console.log("quartiles 0.25", quartiles(arr.length, arr, 0.25));    
    console.log("quartiles 0.5", quartiles(arr.length, arr, 0.5));    
    console.log("quartiles 0.75", quartiles(arr.length, arr, 0.75));    
    console.log("iqr", iqr(arr.length, arr));    
    console.log("sample skewness : ", skewness(arr.length, arr, 1));    
    console.log("pop.. skewness : ", skewness(arr.length, arr, 0));
    console.log("kurtosis with sample stddev: ", kurtosis(arr.length, arr, stddev(arr.length, arr, 1)));
    console.log("kurtosis with pop.. stddev: ", kurtosis(arr.length, arr, stddev(arr.length, arr, 0)));
    console.log("sample covariance: ", covariance(arr_x.length, arr_x, arr_y, 1));    
    console.log("pop.. covariance: ", covariance(arr_x.length, arr_x, arr_y, 0));    
    console.log("normalize: ", normalize(arr.length, arr));
    console.log("sample correlation :", correlation(arr_x.length, arr_x, arr_y, 1));
    console.log("pop.. correlation :", correlation(arr_x.length, arr_x, arr_y, 0));
    console.log("zscore : ", zscore(arr.length, arr));
};
