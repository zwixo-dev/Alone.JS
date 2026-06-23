const Module = require("../wasm/matrix");

Module.onRuntimeInitialized = ()=>{

    const matrix = {
        matrix2d_add: Module.cwrap("matrix2d_add", "number", ["number", "number", "number"]), 
        matrix2d_subtract: Module.cwrap("matrix2d_subtract", "number", ["number", "nubmer", "number"]),
        matrix2d_multiply: Module.cwrap("matrix2d_multiply", "number", ["nmber", "number", "number"])
    }

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
    console.log(rows, columns);

    const inputPointer_matrix1 = Module._malloc((rows*columns)*8);
    const flatMatrix_1 = matrix_1.flat();   Module.HEAPF64.set(flatMatrix_1, inputPointer_matrix1/8);


    const inputPointer_matrix2 = Module._malloc((rows*columns)*8);
    const flatMatrix_2 = matrix_2.flat(); Module.HEAPF64.set(flatMatrix_2, inputPointer_matrix2/8);

    const outputPointer = Module._malloc((rows*columns)*8);

    // ** Note ** : 
    // addtion / substruction  two matrix : they must have the exact same dimensions (order) <==> rowsMatrix(1) = rowsMatrix(2) && columnsMatrix(1) = columnsMatrix(2) 

    // void matrix2d_add(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result);
    matrix.matrix2d_add(rows, columns, inputPointer_matrix1, inputPointer_matrix2, outputPointer);

    const resultMatrix2d_add = Array.from(
        Module.HEAPF64.subarray(outputPointer/8, (outputPointer/8)+ (rows*columns))
    );  
    
    // result example 
    const matrix2d_add = displayMatrix(resultMatrix2d_add, rows, columns); 
    console.log("matrix2d_add : ", matrix2d_add);

    // void matrix2d_subtract(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result);
    matrix.matrix2d_subtract(rows, columns, inputPointer_matrix1, inputPointer_matrix2, outputPointer);
    const resultMatrix2d_subtract = Array.from(
        Module.HEAPF64.subarray(outputPointer/8, (outputPointer/8)+ (rows*columns))
    );  

    const matrix2d_substract = displayMatrix(resultMatrix2d_subtract, rows, columns);
    console.log("matrix2d_substract  : ", matrix2d_substract);


    // ** Note **: 
    // to work with matrix2d_multiply : [matrix] * [matirx] 
    // you should respect the number of columns in the first matrix must equal the number of rows in the second matrix
    // Matrix_1[rows][columns] && Matrix_2[rows][columns] ==> columns Matrix_1 = rows Matrix_2
    // Example : with the same matrixs in the top
    
    // void matrix2d_multiply(int rowsM1, int columnsM1, int rowsM2, int columnsM2, double *matrix_1, double *matrix_2, double *matrix_result);
    

    matrix.matrix2d_multiply(rows, columns, rows, columns, inputPointer_matrix1, inputPointer_matrix2, outputPointer);
    const resultMatrix2d_multiply = Array.from(
        Module.HEAPF64.subarray(outputPointer/8, (outputPointer/8)+ (rows*columns))
    );

    const matrix2d_multiply = displayMatrix(resultMatrix2d_multiply, rows, columns);
    console.log("matrix2d_multiply  : ", matrix2d_multiply);

    Module._free(inputPointer_matrix1);
    Module._free(inputPointer_matrix2);
}

function displayMatrix(resultMatrix, rows, columns){

    const matrix = [];

    for(let i=0; i<rows; i++){
        matrix.push(
            resultMatrix.slice(i * columns, (i + 1) * columns)
        )
    }
    return matrix;
}