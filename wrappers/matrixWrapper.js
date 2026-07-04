const Module = require("../wasm/matrix.js");

let matrix;

Module.onRuntimeInitialized = () => {

  matrix = {
    sum: Module.cwrap("array_sum", "number", ["number", "number"]),
    product: Module.cwrap("array_product", "number", ["number", "number"]),
    average: Module.cwrap("array_average", "number", ["number", "number"]),
    min: Module.cwrap("array_min", "number", ["number", "number"]),
    max: Module.cwrap("array_max", "number", ["number", "number"]),
    range: Module.cwrap("array_range", "number", ["number", "number"]),
    // 2D matrix
    matrix2d_add: Module.cwrap("matrix2d_add", null, ["number", "number", "number", "number", "number"]),
    matrix2d_subtract: Module.cwrap("matrix2d_subtract", null, ["number", "number", "number", "number", "number"]),
    matrix2d_multiply: Module.cwrap("matrix2d_multiply", null, ["number", "number", "number", "number", "number"]),
    matrix_transpose: Module.cwrap("matrix_transpose", null, ["number", "number", "number", "number"]),
    matrix2d_scalar_operation: Module.cwrap("matrix2d_scalar_operation", null, ["number", "number", "string", "number", "number", "number"]),
    matrix_determinant: Module.cwrap("matrix_determinant", "number", ["number", "number", "number"]),
    matrix_cofactor: Module.cwrap("matrix_cofactor", null, ["number", "number", "number", "number"]),
    matrix_inverse: Module.cwrap("matrix_inverse", null, ["number", "number", "number", "number"]),
    matrix_trace: Module.cwrap("matrix_trace", "number", ["number", "number", "number"]),
    matrix_identity: Module.cwrap("matrix_identity", null, ["number", "number", "number"]),
    matrixHadamard_product: Module.cwrap("matrixHadamard_product", null, ["number", "number", "number", "number", "number"]),
    matrix_is_singular: Module.cwrap("matrix_is_singular", "number", ["number", "number", "number"]),
    matrix_is_invertible: Module.cwrap("matrix_is_invertible", "number", ["number", "number", "number"]),
    matrix_rank: Module.cwrap("matrix_rank", "number", ["number", "number", "number"]),
    // matrix_lu_decomposition,
    // matrix_qr_decomposition,
    // matrix_cholesky_decomposition,
    // matrix_svd,
    // matrix_eigenvalues,
    // matrix_eigenvectors,
    // matrix_rotate90,
    // matrix_rotate180,
    // matrix_rotate270,
    // matrix_flip_horizontal,
    // matrix_flip_vertical
  };


  // fast test
  // simple arrays
  const arr = [1, 2, 3, 4, 5];
  console.log("sum", sum(arr.length, arr));
  console.log("product", product(arr.length, arr));
  console.log("average", average(arr.length, arr));
  console.log("min", min(arr.length, arr));
  console.log("max", max(arr.length, arr));
  console.log("range", range(arr.length, arr));







  const matrix_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const matrix_2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const rows = 3, columns = 3;

  // fast testing
  console.log("matrix2d_add",matrix2d_add(rows, columns, matrix_1, matrix_2));
  console.log("matrix2d_subtract",matrix2d_subtract(rows, columns, matrix_1, matrix_2));
  console.log("matrix2d_multiply",matrix2d_multiply(rows, columns, rows, columns, matrix_1, matrix_2));
  console.log("matrix_transpose",matrix_transpose(rows, columns, matrix_1));

  console.log("matrix2d_scalar_operation (+) :",matrix2d_scalar_operation(rows, columns, "+", 2, matrix_1));
  console.log("matrix2d_scalar_operation (-) :",matrix2d_scalar_operation(rows, columns, "-", 2, matrix_1));
  console.log("matrix2d_scalar_operation (*) :",matrix2d_scalar_operation(rows, columns, "*", 2, matrix_1));
  console.log("matrix2d_scalar_operation (/) :",matrix2d_scalar_operation(rows, columns, "/", 2, matrix_1));
  console.log("matrix_determinant : ", matrix_determinant(rows, columns, matrix_1));
  console.log("matrix_cofactor : ", matrix_cofactor(rows, columns, matrix_1));
  console.log("matrix_inverse : ", matrix_inverse(rows, columns, matrix_1));
  console.log("matrix_trace : ", matrix_trace(rows, columns, matrix_1));
  console.log("matrix_identity : ", matrix_identity(rows, columns));
  console.log("matrixHadamard_product : ", matrixHadamard_product(rows, columns, matrix_1, matrix_2));
  console.log("matrix_is_singular : ", matrix_is_singular(rows, columns, matrix_1));
  console.log("matrix_is_invertible : ", matrix_is_invertible(rows, columns, matrix_1));
  console.log("matrix_rank : ", matrix_rank(rows, columns, matrix_1));
};


function allocateMemory(size, arr) {
  const pointer = Module._malloc(size * 8);

  Module.HEAPF64.set(arr, pointer / 8);

  return pointer;
}

function liberation(pointer) {
  Module._free(pointer);
}


// array sum
function sum(size, arr) {

  const pointer = allocateMemory(size, arr);

  const sum = matrix.sum(size, pointer);

  liberation(pointer);

  return sum;
}

// array product
function product(size, arr) {

  const pointer = allocateMemory(size, arr);

  const product = matrix.product(size, pointer);

  liberation(pointer);

  return product;
}

// array average
function average(size, arr) {

  const pointer = allocateMemory(size, arr);

  const average = matrix.average(size, pointer);

  liberation(pointer);

  return average;
}

// array min
function min(size, arr) {

  const pointer = allocateMemory(size, arr);

  const min = matrix.min(size, pointer);

  liberation(pointer);

  return min;
}

// array max
function max(size, arr) {

  const pointer = allocateMemory(size, arr);

  const max = matrix.max(size, pointer);

  liberation(pointer);

  return max;
}

// array range 
function range(size, arr) {

  const pointer = allocateMemory(size, arr);

  const range = matrix.range(size, pointer);

  liberation(pointer);

  return range;
}

// ======================================================================================================== //

// matrix2d_add
function matrix2d_add(rows, columns, matrix_1, matrix_2) {
  // input pointers
  const inputPointer_matrix1 = allocateMemory_2D(rows, columns, matrix_1);
  const inputPointer_matrix2 = allocateMemory_2D(rows, columns, matrix_2)

  // output pointer
  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix2d_add(rows, columns, inputPointer_matrix1, inputPointer_matrix2, outputPointer);
  // return flat result
  const resultMatrix2d_add = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer_matrix1);
  liberation(inputPointer_matrix2);
  liberation(outputPointer);
  return displayMatrix(rows, columns, resultMatrix2d_add);
}

// matrix2d_subtract
function matrix2d_subtract(rows, columns, matrix_1, matrix_2) {
  // input pointers
  const inputPointer_matrix1 = allocateMemory_2D(rows, columns, matrix_1);
  const inputPointer_matrix2 = allocateMemory_2D(rows, columns, matrix_2);

  // output pointer
  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix2d_subtract(rows, columns, inputPointer_matrix1, inputPointer_matrix2, outputPointer);
  // return flat result
  const resultMatrix2d_subtract = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer_matrix1);
  liberation(inputPointer_matrix2);
  liberation(outputPointer);
  return displayMatrix(rows, columns, resultMatrix2d_subtract);
}

// matrix2d_multiply

function matrix2d_multiply(rowsM1, columnsM1, rowsM2, columnsM2, matrix_1, matrix_2) {
  // input pointers
  const inputPointer_matrix1 = allocateMemory_2D(rowsM1, columnsM1, matrix_1);
  const inputPointer_matrix2 = allocateMemory_2D(rowsM2, columnsM2, matrix_2);

  // output pointer
  const outputPointer = Module._malloc((rowsM1 * columnsM2) * 8);

  matrix.matrix2d_multiply(rowsM1, columnsM1, rowsM2, columnsM2, inputPointer_matrix1, inputPointer_matrix2, outputPointer);
  // return flat result
  const resultMatrix2d_multiply = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rowsM1 * columnsM2)));


  liberation(inputPointer_matrix1);
  liberation(inputPointer_matrix2);
  liberation(outputPointer);
  return displayMatrix(rowsM1, columnsM2, resultMatrix2d_multiply);
}

// allocate 2d matrix

function allocateMemory_2D(rows, columns, matrix) {

  const inputPointer = Module._malloc((rows * columns) * 8);
  const flat_matrix = matrix.flat();
  Module.HEAPF64.set(flat_matrix, inputPointer / 8);

  return inputPointer;
}

function displayMatrix(rows, columns, resultMatrix) {

  const matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix.push(
      resultMatrix.slice(i * columns, (i + 1) * columns)
    )
  }
  return matrix;
}

//matrix_transpose
function matrix_transpose(rows, columns, matrix_1) {
  // input pointer
  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);

  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix_transpose(rows, columns, inputPointer, outputPointer);

  const resultMatrix_transpose = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer);
  liberation(outputPointer);
  return displayMatrix(columns, rows, resultMatrix_transpose);
}

// matrix2d_scalar_operation
function matrix2d_scalar_operation(rows, columns, operation, value, matrix_1) {

  if (operation === "") return -1; // no operation => result not found 

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix2d_scalar_operation(rows, columns, operation, value, inputPointer, outputPointer);
  const resultMatrix2d_scalar_operation = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer);
  liberation(outputPointer);
  return displayMatrix(rows, columns, resultMatrix2d_scalar_operation);
}

//  matrix_determinant
function matrix_determinant(rows, columns, matrix_1) {

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const resultMatrix_determinant = matrix.matrix_determinant(rows, columns, inputPointer);

  liberation(inputPointer);
  return resultMatrix_determinant;
}

//matrix_cofactor
function matrix_cofactor(rows, columns, matrix_1){

  if (rows !== columns) {
    throw new Error("Cofactor matrix requires a square matrix.");
}

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix_cofactor(rows, columns, inputPointer, outputPointer);
  const resultMatrix_cofactor = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer);
  liberation(outputPointer);
  return displayMatrix(rows, columns, resultMatrix_cofactor);
}

//matrix_inverse
function matrix_inverse(rows, columns, matrix_1){

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix_inverse(rows, columns, inputPointer, outputPointer);
  const resultMatrix_inverse = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer);
  liberation(outputPointer);
  return displayMatrix(rows, columns, resultMatrix_inverse);
}

// double matrix_trace
function matrix_trace(rows, columns, matrix_1){

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const resultMatrix_trace = matrix.matrix_trace(rows, columns, inputPointer);

  liberation(inputPointer);
  return resultMatrix_trace;
}

//matrix_identity
function matrix_identity(rows, columns){

  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrix_identity(rows, columns, outputPointer);

  const resultMatrix_identity = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(outputPointer);

  return displayMatrix(rows, columns, resultMatrix_identity);
}

// matrixHadamard_product
function matrixHadamard_product(rows, columns, matrix_1, matrix_2){

  const inputPointer_matrix1 = allocateMemory_2D(rows, columns, matrix_1);
  const inputPointer_matrix2 = allocateMemory_2D(rows, columns, matrix_2);

  const outputPointer = Module._malloc((rows * columns) * 8);

  matrix.matrixHadamard_product(rows, columns, inputPointer_matrix1, inputPointer_matrix2, outputPointer);
  const resultMatrixHadamard_product = Array.from(Module.HEAPF64.subarray(outputPointer / 8, (outputPointer / 8) + (rows * columns)));

  liberation(inputPointer_matrix1);
  liberation(inputPointer_matrix2);
  liberation(outputPointer);
  return displayMatrix(rows, columns, resultMatrixHadamard_product);
}

// matrix_is_singular
function matrix_is_singular(rows, columns, matrix_1){

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const resultMatrix_is_singular = matrix.matrix_is_singular(rows, columns, inputPointer);
  
  liberation(inputPointer);
  return resultMatrix_is_singular;
}

// matrix_is_invertible
function matrix_is_invertible(rows, columns, matrix_1){

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const resultMatrix_is_invertible = matrix.matrix_is_invertible(rows, columns, inputPointer);

  liberation(inputPointer);
  return resultMatrix_is_invertible;
}

// int matrix_rank(int rows, int columns, double *matrix);
function matrix_rank(rows, columns, matrix_1){

  const inputPointer = allocateMemory_2D(rows, columns, matrix_1);
  const resultMatrix_rank = matrix.matrix_rank(rows, columns, inputPointer);

  liberation(inputPointer);
  return resultMatrix_rank;
}