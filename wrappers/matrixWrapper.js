
const Module = require("../wasm/matrix.js");

Module.onRuntimeInitialized = () =>{
    // get all the func
    const matrix = {
        sum : Module.cwrap("array_sum", "number", ["number", "number"]),
        product : Module.cwrap("array_product", "number", ["number", "number"]) ,
        average : Module.cwrap("array_average", "number", ["number", "number"]) , 
        min : Module.cwrap("array_min", "number", ["number", "number"]) ,
        max : Module.cwrap("array_max", "number", ["number", "number"]) ,
        range: Module.cwrap("array_range", "number", ["number", "number"]),
        // 2D matrix
        matrix2d_add: Module.cwrap("matrix2d_add", null, ["number", "number", "number", "number", "number"]),
        matrix2d_subtract: Module.cwrap("matrix2d_subtract", null, ["number", "number", "number", "number", "number"]),
        matrix2d_multiply: Module.cwrap("matrix2d_multiply", null, ["number", "number", "number", "number", "number"]),
        matrix_transpose,
        matrix2d_scalar_operation,
        matrix_determinant,
        matrix_cofactor,
        matrix_inverse,
        matrix_trace,
        matrix_identity,
        matrixHadamard_product,
        matrix_is_singular,
        matrix_is_invertible,
        matrix_rank,
        matrix_lu_decomposition,
        matrix_qr_decomposition,
        matrix_cholesky_decomposition,
        matrix_svd,
        matrix_eigenvalues,
        matrix_eigenvectors,
        matrix_rotate90,
        matrix_rotate180,
        matrix_rotate270,
        matrix_flip_horizontal,
        matrix_flip_vertical
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

// array wrappers

// array sum
function sum(size, arr){

  const pointer = allocateMemory(size, arr);

  const sum = matrix.sum(size, pointer);

  liberation(pointer);

  return sum;
}

// array product
function product(size, arr){

  const pointer = allocateMemory(size, arr);

  const product = matrix.product(size, pointer);

  liberation(pointer);

  return product;
}

// array average
function average(size, arr){
  
  const pointer = allocateMemory(size, arr);

  const average = matrix.average(size, pointer);

  liberation(pointer);

  return average;
} 

// array min
function min(size, arr){
  
  const pointer = allocateMemory(size, arr);

  const min = matrix.min(size, pointer);

  liberation(pointer);

  return min;
}

// array max
function max(size, arr){

  const pointer = allocateMemory(size, arr);

  const max = matrix.max(size, pointer);

  liberation(pointer);

  return max;
}

// array range 
function range(size, arr){
  
  const pointer = allocateMemory(size, arr);

  const range = matrix.range(size, pointer);

  liberation(pointer);

  return range;
}