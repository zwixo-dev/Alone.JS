const Module = require("../wasm/complexNumbers.js");

let complexNumbers;

Module.onRuntimeInitialized = () => {
  complexNumbers = {
    complex_create: Module.cwrap("complex_create", null, ["number", "number"]),
    complex_add: Module.cwrap("complex_add", null, ["number", "number"]),
    // complex_subtract
    // complex_multiply
    // complex_divide
    // complex_conjugate
    // complex_magnitude
    // complex_argument
    // polar_to_complex
    // complex_to_polar
    // complex_square
    // complex_cube
    // complex_power
    // complex_sqrt
    // complex_sin
    // complex_cos
    // complex_tan
    // complex_magnitude
    // complex_magnitude_squared
    // complex_argument
    // polar_to_complex
    // complex_inverse
    // complex_negate
    // complex_scale
    // complex_equal
    // complex_normalize
    // complex_dot
    // complex_distance
    // complex_rotate
    // complex_lerp
    // complex_exp
    // complex_log
    // complex_sec
    // complex_cot
    // complex_sinh
    // complex_cosh
    // complex_project
    // complex_reflect_real
    // complex_reflect_imaginary
    // complex_from_angle
    // complex_phase_shift
    // complex_midpoint
    // complex_average
    // complex_angle_between
    // complex_reflect_origin
    // complex_nth_roots
    // complex_tanh
    // complex_is_zero
    // complex_abs
    // complex_reciprocal
    // complex_expm1
    // complex_log10
    // complex_is_finite
    // complex_asin
    // complex_acos
    // complex_atan
    // complex_is_nan
    // complex_is_infinite
    // complex_pow_real
    // complex_root
    // complex_real_part
    // complex_imaginary_part
    // complex_floor
    // complex_ceil
    // complex_round
    // complex_csc
    // complex_csch
    // complex_sech
    // complex_coth
    // complex_is_real
    // complex_is_imaginary
    // complex_distance_squared
    // complex_mul_i
    // complex_div_i
    // complex_conjugate_product
    // complex_from_real
    // complex_from_imaginary
    // complex_is_unit
    // complex_norm_squared
    // complex_signum
    // complex_phase_difference
    // complex_cbrt
    // complex_is_pure_imaginary
    // complex_log2
    // complex_log1p
    // complex_log_base
    // complex_manhattan_distance
    // complex_chebyshev_distance
    // complex_reflect_line
    // complex_log2p
    // complex_l1_norm
    // complex_acot
    // complex_acoth
    // complex_is_integer
    // complex_l2_norm
    // complex_asinpi
    // complex_acospi
  };

  console.log(complex_create(1, 2));
  console.log("=====>",complex_add( complex_create(1, 2), complex_create(3, 4) ) );

};



// ----------------------------------------------------------
const COMPLEX_SIZE = 2 * Float64Array.BYTES_PER_ELEMENT; // 16 BYTES

function allocateMemory(size) {
    return Module._malloc(size);
}

function liberation(pointer) {
    if (pointer) {
        Module._free(pointer);
    }
}

function writeComplex(complex, pointer) {
    Module.HEAPF64[pointer / 8] = complex.real;
    Module.HEAPF64[pointer / 8 + 1] = complex.imaginary;
}

function readComplex(pointer) {
    return {
        real: Module.HEAPF64[pointer / 8],
        imaginary: Module.HEAPF64[pointer / 8 + 1],
    };
}

// Complex complex_create(double real, double imaginary);
function complex_create(real, imaginary) {
    if ( isNaN(real) || isNaN(imaginary) ) {
        return {real: NaN, imaginary: NaN};
    }

    const outputPointer = allocateMemory(COMPLEX_SIZE);
    if (!outputPointer) throw new Error("Memory allocation failed");
    
    try {
        complexNumbers.complex_create(outputPointer, real, imaginary);
        return readComplex(outputPointer);
        liberation(outputPointer);
    }
    finally{
        liberation(outputPointer);
    }
}

// Complex complex_add(Complex a, Complex b);
function complex_add(a, b){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if (!inputPointerA || !inputPointerB || !outputPointer) {
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        complexNumbers.complex_add(outputPointer, inputPointerA, inputPointerB);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
    }
}




// Complex complex_subtract(Complex a, Complex b);
// Complex complex_multiply(Complex a, Complex b);
// Complex complex_divide(Complex a, Complex b);

