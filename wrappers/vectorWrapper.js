const Module = require("../wasm/vectors.js");

let vectors;

Module.onRuntimeInitialized = () => {
    vectors = {
        vector_magnitude: Module.cwrap("vector_magnitude", "number", ["number", "number"]),
        vector_normalize: Module.cwrap("vector_normalize", null, ["number", "number", "number"]),
        vector_dot_product: Module.cwrap("vector_dot_product", "number", ["number", "number", "number"]),
        vector_cross_product: Module.cwrap("vector_cross_product", null, ["number", "number", "number"]),
        vector_add: Module.cwrap("vector_add", null, ["number", "number", "number", "number"]),
        vector_subtract: Module.cwrap("vector_subtract", null, ["number", "number", "number", "number"]),
        vector_scalar_multiply: Module.cwrap("vector_scalar_multiply", null, ["number", "number", "number", "number"]),
        vector_scalar_divide: Module.cwrap("vector_scalar_divide", null, ["number", "number", "number", "number"]),
        vector_distance: Module.cwrap("vector_distance", "number", ["number", "number", "number"]),
        vector_angle: Module.cwrap("vector_angle", "number", ["number", "number"]),
        vector_cosine_similarity: Module.cwrap("vector_cosine_similarity", "number", ["number", "number"]),
        vector_projection: Module.cwrap("vector_projection", null, ["number", "number", "number", "number"]),
        vector_rejection: Module.cwrap("vector_rejection", null, ["number", "number", "number", "number"]),
        vector_sum: Module.cwrap("vector_sum", "number", ["number", "number"]),
        vector_mean: Module.cwrap("vector_mean", "number", ["number", "number"]),
        vector_max: Module.cwrap("vector_max", "number", ["number", "number"]),
        vector_min: Module.cwrap("vector_min", "number", ["number", "number"]),
        vector_l1_norm: Module.cwrap("vector_l1_norm", "number", ["number", "number"]),
        vector_infinity_norm: Module.cwrap("vector_infinity_norm", "number", ["number", "number"]),
        vector_is_zero: Module.cwrap("vector_is_zero", "number", ["number", "number"]),
        vector_is_unit: Module.cwrap("vector_is_unit", "number", ["number", "number"]),
        vector_is_orthogonal: Module.cwrap("vector_is_orthogonal", "number", ["number", "number", "number"]),
        vector_is_parallel: Module.cwrap("vector_is_parallel", "number", ["number", "number", "number"]),
        vector_variance: Module.cwrap("vector_variance", "number", ["number", "number"]),
        vector_standard_deviation: Module.cwrap("vector_standard_deviation", "number", ["number", "number", "number"]),
        vector_reverse: Module.cwrap("vector_reverse", null, ["number", "number", "number"]),
        vector_sort_ascending: Module.cwrap("vector_sort_ascending", null, ["number", "number", "number"]),
        vector_sort_descending: Module.cwrap("vector_sort_descending", null, ["number", "number", "number"]),
        vector_hadamard_product_sum: Module.cwrap("vector_hadamard_product_sum", "number", ["number", "number"]),
        vector_hadamard_product: Module.cwrap("vector_hadamard_product", null, ["number", "number", "number", "number"]),
        vector_abs: Module.cwrap("vector_abs", null, ["number", "number", "number"]),
        vector_negate: Module.cwrap("vector_negate", null, ["number", "number", "number"]),
        vector_power: Module.cwrap("vector_power", null, ["number", "number", "number", "number"]),
        vector_sqrt: Module.cwrap("vector_sqrt", null, ["number", "number", "number"]),
    }


    const v =  [1, 2, 3];
    const vA = [1, 2, 3];
    const vB = [4, 5, 6];
    const vC = [1, 3, 5, 7, 9, 10, 19]
    console.log("vector_magnitude : ",vector_magnitude(v.length, v));
    console.log("vector_normalize", vector_normalize(v.length, vA));
    console.log("vector_dot_product : ", vector_dot_product(vA.length, vA, vB));
    console.log("vector_cross_product:", vector_cross_product(vA, vB));
    console.log("vector_add : ", vector_add(vA.length, vA, vB)); 
    console.log("vector_subtract : ", vector_subtract(vA.length, vA, vB));
    console.log("vector_scalar_multiply : ", vector_scalar_multiply(v.length, 3, v));
    console.log("vector_scalar_divide :", vector_scalar_divide(v.length, 2, v));
    console.log("vector_distance : ", vector_distance(vA.length, vA, vB));
    console.log("vector_angle : ", vector_angle(vA.length, vA, vB));
    console.log("vector_cosine_similarity : ", vector_cosine_similarity(vA.length, vA, vB));
    console.log("vector_projection : ", vector_projection(vA.length, vA, vB));
    console.log("vector_rejection : ", vector_rejection(vA.length, vA, vB));
    console.log("vector_sum : ", vector_sum(v.length, v));
    console.log("vector_mean :", vector_mean(vA.length, vA));
    console.log("vector_max : ", vector_max(vA.length, vA));
    console.log("vector_min : ", vector_min(vA.length, vA));
    console.log("vector_l1_norm :", vector_l1_norm(vA.length, vA));
    console.log("vector_infinity_norm : ", vector_infinity_norm(vA.length, vA));
    console.log("vector_is_zero : ", vector_is_zero(vA.length, vA));
    console.log("vector_is_unit : ", vector_is_unit(vA.length, vA));
    console.log("vector_is_orthogonal : ", vector_is_orthogonal(vA.length, vA, vB));
    console.log("vector_is_parallel : ", vector_is_parallel(vA.length, vA, vB));
    console.log("vector_variance sample : ", vector_variance(vA.length, vA, 1));
    console.log("vector_variance popu... : ", vector_variance(vA.length, vA, 0));
    console.log("vector_standard_deviation sample : ",vector_standard_deviation(vA.length, vA, 1));
    console.log("vector_standard_deviation popu.. : ",vector_standard_deviation(vA.length, vA, 0));
    console.log("vector_reverse : ", vector_reverse(v.length, v));
    console.log("vector_sort_ascending : ", vector_sort_ascending(vC.length, vC));
    console.log("vector_sort_descending : ", vector_sort_descending(vC.length, vC));
    
}

// func to allocate memory
function allocateMemory(size, vector){
  const pointer = Module._malloc(size * 8);

  Module.HEAPF64.set(vector, pointer / 8);

  return pointer;
}

// func to liberate
function liberation(pointer){
    Module._free(pointer);
}


// vector_magnitude
function vector_magnitude(size, vector){
    if (vector.length !== size) return NaN;

    const pointer = allocateMemory(size, vector);

    const vector_magnitude = vectors.vector_magnitude(size, pointer);

    liberation(pointer);

    return vector_magnitude;
}

// vector_normalize
function vector_normalize(size, vector) {
    if (vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_normalize(size, inputPointer, outputPointer);

    const vector_normalize = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_normalize;
}

// vector_dot_product
function vector_dot_product(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const pointerA = allocateMemory(size, vectorA);
    const pointerB = allocateMemory(size, vectorB);
    
    const vector_dot_product = vectors.vector_dot_product(size, pointerA, pointerB);

    liberation(pointerA);
    liberation(pointerB);

    return vector_dot_product;
}

// vector_cross_product
function vector_cross_product(vectorA, vectorB) {
    // test the length of the vectors not 3
    if(vectorA.length !=3 || vectorB.length != 3 ) return NaN;
    // else
    const vectorLength = vectorA.length;

    const pointerA = allocateMemory(vectorA.length, vectorA);
    const pointerB = allocateMemory(vectorB.length, vectorB);
    const outputPointer = Module._malloc(vectorLength * 8);

    vectors.vector_cross_product(pointerA, pointerB, outputPointer);

    const result = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + vectorLength
        )
    );

    liberation(pointerA);
    liberation(pointerB);
    liberation(outputPointer);

    return result;
}

// vector_add
function vector_add(size, vectorA, vectorB){
    // if the vectors with diff length 
    if(vectorA.length !== size || vectorB.length !== size ) return NaN;
    // else : we complete

    const inputPointerA = allocateMemory(vectorA.length, vectorA);
    const inputPointerB = allocateMemory(vectorB.length, vectorB);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_add(size, inputPointerA, inputPointerB, outputPointer);

    const vector_add = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointerA);
    liberation(inputPointerB);
    liberation(outputPointer);

    return vector_add;
}

// vector_subtract
function vector_subtract(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_subtract(size, inputPointerA, inputPointerB, outputPointer);

    const vector_subtract = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size 
        )
    );

    liberation(inputPointerA);
    liberation(inputPointerB);
    liberation(outputPointer);

    return vector_subtract
}

// vector_scalar_multiply
function vector_scalar_multiply(size, scalar, vector){
    if(vector.length !==  size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_scalar_multiply(size, scalar, inputPointer, outputPointer);

    const vector_scalar_multiply = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size 
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);
    
    return vector_scalar_multiply;
}

// vector_scalar_divide
function vector_scalar_divide(size, scalar, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_scalar_divide(size, scalar, inputPointer, outputPointer);

    const vector_scalar_divide = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size 
        )
    ); 

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_scalar_divide;
}

// vector_distance
function vector_distance(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA); 
    const inputPointerB = allocateMemory(size, vectorB);

    const vector_distance = vectors.vector_distance(size, inputPointerA, inputPointerB);

    liberation(inputPointerA);
    liberation(inputPointerB);

    return vector_distance;
}

// vector_angle
function vector_angle(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);

    const vector_angle = vectors.vector_angle(size, inputPointerA, inputPointerB);

    liberation(inputPointerA);
    liberation(inputPointerB);

    return vector_angle;
}

// vector_cosine_similarity
function vector_cosine_similarity(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);

    const vector_cosine_similarity = vectors.vector_cosine_similarity(size, inputPointerA, inputPointerB);

    liberation(inputPointerA);
    liberation(inputPointerB);

    return vector_cosine_similarity;
}

// vector_projection
function vector_projection(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_projection(size, inputPointerA, inputPointerB, outputPointer);

    const vector_projection = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointerA);
    liberation(inputPointerB);
    liberation(outputPointer);

    return vector_projection;
}

// vector_rejection
function vector_rejection(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_rejection(size, inputPointerA, inputPointerB, outputPointer);

    const vector_rejection = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointerA);
    liberation(inputPointerB);
    liberation(outputPointer);

    return vector_rejection;
}

// vector_sum
function vector_sum(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_sum = vectors.vector_sum(size, inputPointer);

    liberation(inputPointer);

    return vector_sum;
}

// vector_mean
function vector_mean(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_mean = vectors.vector_mean(size, inputPointer);

    liberation(inputPointer);

    return vector_mean;
}

// vector_max
function vector_max(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_max = vectors.vector_max(size, inputPointer);

    liberation(inputPointer);

    return vector_max;
}

// vector_min
function vector_min(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_min = vectors.vector_min(size, inputPointer);

    liberation(inputPointer);

    return vector_min;
}

// double vector_l1_norm(int size, double *vector); 
// vector_l1_norm

function vector_l1_norm(size, vector){
    if(vector.length !== size)return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_l1_norm = vectors.vector_l1_norm(size, inputPointer);

    liberation(inputPointer);

    return vector_l1_norm;
}

// double vector_infinity_norm(int size, double *vector);
function vector_infinity_norm(size, vector){
    if(vector.length !== size)return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_infinity_norm = vectors.vector_infinity_norm(size, inputPointer);

    liberation(inputPointer);

    return vector_infinity_norm;
}

// // cheks
// vector_is_zero
function vector_is_zero(size, vector){
    if(vector.length !== size)return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_is_zero = vectors.vector_is_zero(size, inputPointer);

    liberation(inputPointer);

    return vector_is_zero;
}

// vector_is_unit
function vector_is_unit(size, vector){
    if(vector.length !== size)return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_is_unit = vectors.vector_is_unit(size, inputPointer);

    liberation(inputPointer);

    return vector_is_unit;
}

// int vector_is_orthogonal(int size, double *vectorA, double *vectorB);
// vector_is_orthogonal
function vector_is_orthogonal(size, vectorA, vectorB){

    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB); 

    const vector_is_orthogonal = vectors.vector_is_orthogonal(size, inputPointerA, inputPointerB);

    liberation(inputPointerA);
    liberation(inputPointerB);

    return vector_is_orthogonal;
}

// int vector_is_parallel(int size, double *vectorA, double *vectorB);
//vector_is_parallel
function vector_is_parallel(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB.length !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);

    const vector_is_parallel = vectors.vector_is_parallel(size, inputPointerA, inputPointerB);

    liberation(inputPointerA);
    liberation(inputPointerB);

    return vector_is_parallel;
}

// vector_variance
function vector_variance(size, vector, option){
    if(vector.length !== size || (option !== 1 && option !== 0) ) return NaN;

    const inputPointer = allocateMemory(size, vector);
    
    const vector_variance = vectors.vector_variance(size, inputPointer, option);

    liberation(inputPointer);

    return vector_variance;
}

// vector_standard_deviation
function vector_standard_deviation(size, vector, option){
    if(vector.length !== size || (option !== 1 && option !== 0)) return NaN;

    const inputPointer = allocateMemory(size, vector);

    const vector_standard_deviation = vectors.vector_standard_deviation(size, inputPointer, option);

    liberation(inputPointer);

    return vector_standard_deviation;
}

// Transformations
// void vector_reverse(int size, double *vector,null*result_vectors);
// vector_reverse
function vector_reverse(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_reverse(size, inputPointer, outputPointer);

    const vector_reverse = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_reverse;
}

// vector_sort_ascending
function vector_sort_ascending(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_sort_ascending(size, inputPointer, outputPointer);

    const vector_sort_ascending = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointer); 
    liberation(outputPointer); 

    return vector_sort_ascending;
}

// vector_sort_descending
function vector_sort_descending(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_sort_descending(size, inputPointer, outputPointer);

    const vector_sort_descending = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_sort_descending;
}

// Products
// void vector_hadamard_product(int size, double *vectorA, double *vectorB, double *result_vectors);
// vector_hadamard_product
function vector_hadamard_product(size, vectorA, vectorB){
    if(vectorA.length !== size || vectorB !== size) return NaN;

    const inputPointerA = allocateMemory(size, vectorA);
    const inputPointerB = allocateMemory(size, vectorB);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_hadamard_product(size, inputPointerA, inputPointerB, outputPointer);

    const vector_hadamard_product = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointerA);
    liberation(inputPointerB);
    liberation(outputPointer);

    return vector_hadamard_product;
}

// Element-wise operations
// void vector_abs(int size, double *vector, double *result_vectors);
// vector_abs

function vector_abs(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_abs(size, inputPointer, outputPointer);

    const vector_abs = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    ); 

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_abs
}

// void vector_negate(int size, double *vector, double *result_vectors);
// vector_negate
function vector_negate(size, vector){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_negate(size, inputPointer, outputPointer);

    vectors.vector_negate = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_negate;
}

// void vector_power(int size, double *vector, double exponent, double *result_vectors);
// vector_power
function vector_power(size, vector, exponent){
    if(vector.length !== size) return NaN;

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8); 

    vectors.vector_power(size, inputPointer, exponent, outputPointer);

    const vector_power = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size 
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_power;
}

// void vector_sqrt(int size, double *vector, double *result_vectors);
// vector_sqrt
function vector_sqrt(size, vector){
    if(vector.length !== size) return NaN; 

    const inputPointer = allocateMemory(size, vector);
    const outputPointer = Module._malloc(size * 8);

    vectors.vector_sqrt(size, vector, outputPointer);

    const vector_sqrt = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + size
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_sqrt;
}
