const Module = require("../wasm/vectors.js");

let vectors;

Module.onRuntimeInitialized = () => {
    vectors = {
        vector_magnitude: Module.cwrap("vector_magnitude", "number", ["number", "number"]),
        vector_normalize: Module.cwrap("vector_normalize", null, ["number", "number", "number"]),
        vector_dot_product: Module.cwrap("vector_dot_product", "number", ["number", "number", "number"]),
        vector_cross_product: Module.cwrap("vector_cross_product", null, ["number", "number", "number"]),
        vector_add: Module.cwrap("vector_add", "number", ["number", "number"]),
        vector_subtract: Module.cwrap("vector_subtract", "number", ["number", "number"]),
        vector_scalar_multiply: Module.cwrap("vector_scalar_multiply", "number", ["number", "number"]),
        vector_scalar_divide: Module.cwrap("vector_scalar_divide", "number", ["number", "number"]),
        vector_distance: Module.cwrap("vector_distance", "number", ["number", "number"]),
        vector_angle: Module.cwrap("vector_angle", "number", ["number", "number"]),
        vector_cosine_similarity: Module.cwrap("vector_cosine_similarity", "number", ["number", "number"]),
        vector_projection: Module.cwrap("vector_projection", "number", ["number", "number"]),
        vector_rejection: Module.cwrap("vector_rejection", "number", ["number", "number"]),
        vector_sum: Module.cwrap("vector_sum", "number", ["number", "number"]),
        vector_mean: Module.cwrap("vector_mean", "number", ["number", "number"]),
        vector_max: Module.cwrap("vector_max", "number", ["number", "number"]),
        vector_min: Module.cwrap("vector_min", "number", ["number", "number"]),
        vector_l1_norm: Module.cwrap("vector_l1_norm", "number", ["number", "number"]),
        vector_infinity_norm: Module.cwrap("vector_infinity_norm", "number", ["number", "number"]),
        vector_is_zero: Module.cwrap("vector_is_zero", "number", ["number", "number"]),
        vector_is_unit: Module.cwrap("vector_is_unit", "number", ["number", "number"]),
        vector_is_orthogonal: Module.cwrap("vector_is_orthogonal", "number", ["number", "number"]),
        vector_is_parallel: Module.cwrap("vector_is_parallel", "number", ["number", "number"]),
        vector_variance: Module.cwrap("vector_variance", "number", ["number", "number"]),
        vector_standard_deviation: Module.cwrap("vector_standard_deviation", "number", ["number", "number"]),
        vector_reverse: Module.cwrap("vector_reverse", "number", ["number", "number"]),
        vector_sort_ascending: Module.cwrap("vector_sort_ascending", "number", ["number", "number"]),
        vector_sort_descending: Module.cwrap("vector_sort_descending", "number", ["number", "number"]),
        vector_hadamard_product_sum: Module.cwrap("vector_hadamard_product_sum", "number", ["number", "number"]),
        vector_hadamard_product: Module.cwrap("vector_hadamard_product", "number", ["number", "number"]),
        vector_abs: Module.cwrap("vector_abs", "number", ["number", "number"]),
        vector_negate: Module.cwrap("vector_negate", "number", ["number", "number"]),
        vector_power: Module.cwrap("vector_power", "number", ["number", "number"]),
        vector_sqrt: Module.cwrap("vector_sqrt", "number", ["number", "number"]),
    }


    const v =  [1, 2, 3];
    const vA = [1, 2, 3];
    const vB = [4, 5, 6];
    console.log("vector_magnitude : ",vector_magnitude(v.length, v));
    console.log("vector_cross_product:", vector_cross_product(vA, vB));

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

    const pointer = allocateMemory(size, vector);

    const vector_magnitude = vectors.vector_magnitude(size, pointer);

    liberation(pointer);

    return vector_magnitude;
}

// vector_normalize
function vector_normalize(size, vector ){
    const inputPointer = allocateMemory(size, vector);
    const outputPointer = allocateMemory(size, vector);

    vectors.vector_normalize(size, inputPointer, outputPointer);

    const vector_normalize = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8, 
            outputPointer / 8 + vector.length, 
        )
    );

    liberation(inputPointer);
    liberation(outputPointer);

    return vector_normalize;
}


// vector_dot_product
function vector_dot_product(size, vectorA, vectorB){
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
    vectorLength = vectorA.length;

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