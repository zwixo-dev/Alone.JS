const { treatAsHtml, notFoundPageData } = require("vitepress/dist/client/shared.js");
const Module = require("../wasm/complexNumbers.js");

let complexNumbers;

Module.onRuntimeInitialized = () => {
  complexNumbers = {
    complex_create: Module.cwrap("complex_create", null, ["number", "number"]),
    complex_add: Module.cwrap("complex_add", null, ["number", "number"]),
    complex_subtract: Module.cwrap("complex_subtract", null, ["number", "number"]),
    complex_multiply: Module.cwrap("complex_multiply", null, ["number", "number"]),
    complex_divide: Module.cwrap("complex_divide", null, ["number", "number"]),
    complex_conjugate: Module.cwrap("complex_conjugate", null, ["number"]),
    complex_magnitude: Module.cwrap("complex_magnitude", null, ["number"]),
    complex_argument: Module.cwrap("complex_argument", null, ["number"]),
    polar_to_complex: Module.cwrap("polar_to_complex", null, ["number", "number"]),
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
    complex_inverse: Module.cwrap("complex_inverse", null, ["number"]),
    complex_negate: Module.cwrap("complex_negate", null, ["number"]),
    complex_scale: Module.cwrap("complex_scale", null, ["number", "number"]),
    complex_equal: Module.cwrap("complex_equal", null, ["number", "number"]),
    complex_normalize: Module.cwrap("complex_normalize", null, ["number"]),
    complex_dot: Module.cwrap("complex_dot", null, ["number", "number"]),
    complex_distance: Module.cwrap("complex_distance", null, ["number", "number"]),
    complex_rotate: Module.cwrap("complex_rotate", null, ["number", "number"]),
    complex_lerp: Module.cwrap("complex_lerp", null, ["number", "number", "number"]),
    complex_exp: Module.cwrap("complex_exp", null, ["number"]),
    complex_log: Module.cwrap("complex_log", null, ["number"]),
    complex_sec: Module.cwrap("complex_sec", null, ["number"]),
    complex_cot: Module.cwrap("complex_cot", null, ["number"]),
    complex_sinh: Module.cwrap("complex_sinh", null, ["number"]),
    complex_cosh: Module.cwrap("complex_cosh", null, ["number"]),
    complex_project: Module.cwrap("complex_project", null, ["number"]),
    complex_reflect_real: Module.cwrap("complex_reflect_real", null, ["number"]),
    complex_reflect_imaginary: Module.cwrap("complex_reflect_imaginary", null, ["number"]),
    complex_from_angle: Module.cwrap("complex_from_angle", null, ["number"]),
    complex_phase_shift: Module.cwrap("complex_phase_shift", null, ["number", "number"]),
    complex_midpoint: Module.cwrap("complex_midpoint", null, ["number", "number"]),
    complex_average: Module.cwrap("complex_average", null, ["number"]),
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
  console.log("complex_add : ",complex_add( complex_create(1, 2), complex_create(3, 4) ) );
  console.log("complex_subtract : ", complex_subtract( complex_create(1, 2), complex_create(3, 4) ));
  console.log("complex_multiply : ", complex_multiply( complex_create(1, 2), complex_create(3, 4) ))
  console.log("complex_divide : ", complex_divide( complex_create(1, 2), complex_create(3, 4) ));
  console.log("complex_conjugate : ", complex_conjugate( complex_create(1, 3) ) );
  console.log("complex_magnitude : ", complex_magnitude( complex_create(1, 4) ));
  console.log("complex_argument : ", complex_argument( complex_create(1, 5) ));
  console.log("polar_to_complex : ", polar_to_complex( 1, Math.PI/2) );
  console.log("complex_inverse : ", complex_inverse( complex_create(1, 2) ) );
  console.log("complex_negate : ", complex_negate( complex_create(3, 4) ) );
  console.log("complex_negate : ", complex_negate( complex_create(3, -4) ) );
  console.log("complex_scale : ", complex_scale( complex_create(4, -3), 2.5 ) );
  console.log("complex_equal : ", complex_equal( complex_create(1, 2), complex_create(1, 2) ));
  console.log("complex_equal : ", complex_equal( complex_create(1, 2), complex_create(1, 3) ));
  console.log("complex_normalize : ", complex_normalize( complex_create(3, 4) ));
  console.log("complex_dot : ", complex_dot( complex_create(3, 4), complex_create(2, -5) ));
  console.log("complex_distance : ", complex_distance( complex_create(1, 2), complex_create(4, 6) ));
  console.log("complex_rotate : ", complex_rotate( complex_create(1, 2), Math.PI/2 ));
  console.log("complex_lerp : ", complex_lerp( complex_create(1, 2), complex_create(1, 6), Math.PI/2 ));
  console.log("complex_exp : ", complex_exp( complex_create(0, 0) ) );
  console.log("complex_log : ", complex_log( complex_create(1, 0) ) );
  console.log("complex_sec : ", complex_sec( complex_create(1, 2) ));
  console.log("complex_cot : ", complex_cot( complex_create(1, 2) ));
  console.log("complex_sinh : ", complex_sinh( complex_create(0, 0) ));
  console.log("complex_cosh : ", complex_cosh( complex_create(1000, -1) ));
  console.log("complex_project : ", complex_project( complex_create(3, 4) ));
  console.log("complex_reflect_real : ", complex_reflect_real( complex_create(5,3) ));
  console.log("complex_from_angle : ", complex_from_angle( Math.PI/90 ) );
  console.log("complex_phase_shift : ", complex_phase_shift( complex_create(2, 3), Math.PI/2 ));
  console.log("complex_midpoint : ", complex_midpoint(  complex_create(2, 3), complex_create(4, 7) ) );

  const randomArrayValues = [
        {real: 2.0, imaginary:3.0},
        {real:4.0, imaginary:5.0},
        {real:6.0, imaginary:7.0}
  ]

  console.log("complex_average : ", complex_average( randomArrayValues ) );

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
    if (!outputPointer){
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }
    
    try {
        complexNumbers.complex_create(outputPointer, real, imaginary);
        return readComplex(outputPointer);
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
function complex_subtract(a, b){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB || !outputPointer){
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        complexNumbers.complex_subtract(outputPointer, inputPointerA, inputPointerB);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
    }
}

// Complex complex_multiply(Complex a, Complex b);
function complex_multiply(a, b){
const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB || !outputPointer){
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        complexNumbers.complex_multiply(outputPointer, inputPointerA, inputPointerB);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
    }
}


// Complex complex_divide(Complex a, Complex b);
function complex_divide(a, b){
const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB || !outputPointer){
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        complexNumbers.complex_divide(outputPointer, inputPointerA, inputPointerB);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
    }
}

// Utilities
// Complex complex_conjugate(Complex z);
function complex_conjugate(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE); 

    if(!inputPointer || !outputPointer) { 
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_conjugate(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// double complex_magnitude(Complex z);
function complex_magnitude(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer){
        liberation(inputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        const complex_magnitude = complexNumbers.complex_magnitude(inputPointer);

        return complex_magnitude; 
    }
    finally{
        liberation(inputPointer);
    }
}

// double complex_argument(Complex z);
function complex_argument(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer){
        liberation(inputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        const complex_argument = complexNumbers.complex_argument(inputPointer);

        return complex_argument;
    }
    finally{
        liberation(inputPointer);
    }
}

// Complex polar_to_complex(double radius, double theta);
function polar_to_complex(radius, theta){
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!outputPointer){
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        complexNumbers.polar_to_complex(outputPointer,radius, theta);

        return readComplex(outputPointer);
    }
    finally{
        liberation(outputPointer);
    }
}

//  Unary Operations
// complex_inverse
// Complex complex_inverse(Complex z);
function complex_inverse(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_inverse(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Complex complex_negate(Complex z);
// complex_negate
function complex_negate(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_negate(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Scalar Operations
// Complex complex_scale(Complex z, double scalar);
function complex_scale(z, scalar){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_scale(outputPointer, inputPointer, scalar);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Comparison
// int complex_equal(Complex a, Complex b);

function complex_equal(a, b){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB){
        liberation(inputPointerA);
        liberation(inputPointerB);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        const complex_equal = complexNumbers.complex_equal(inputPointerA, inputPointerB);

        if(complex_equal === 1){
            return true
        } else{
            return false;
        }

    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
    }
}

// Normalization
// Complex complex_normalize(Complex z);
function complex_normalize(z){
    const inputPointer = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);
    
    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);
        
        complexNumbers.complex_normalize(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}


// Dot product (treating complex as 2D vector)
// double complex_dot(Complex a, Complex b);
function complex_dot(a, b){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB){
        liberation(inputPointerA);
        liberation(inputPointerB);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);
        
        const complex_dot = complexNumbers.complex_dot(inputPointerA, inputPointerB); 

        return complex_dot;
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
    }
}

// Distance
// double complex_distance(Complex a, Complex b);
function complex_distance(a, b){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB){
        liberation(inputPointerA);
        liberation(inputPointerB);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        const complex_distance = complexNumbers.complex_distance(inputPointerA, inputPointerB);

        return complex_distance;
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
    }
}

// Rotation
// Complex complex_rotate(Complex z, double theta);
function complex_rotate(z, theta){
    const inputPointer = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);
        
        complexNumbers.complex_rotate(outputPointer, inputPointer, theta);
    
        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}
// Linear interpolation
// Complex complex_lerp(Complex a, Complex b, double t);
function complex_lerp(a, b, t){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointerA || !inputPointerB || !outputPointer){
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        complexNumbers.complex_lerp(outputPointer, inputPointerA, inputPointerB, t);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
    }
}

// Exponential & Logarithmic
// Complex complex_exp(Complex z);
function complex_exp(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE); 
    const outputPointer = allocateMemory(COMPLEX_SIZE); 

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_exp(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }

}

// Complex complex_log(Complex z);
function complex_log(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_log(outputPointer, inputPointer);
    
        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Reciprocal trigonometric
// Complex complex_sec(Complex z);
function complex_sec(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_sec(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Complex complex_cot(Complex z);
function complex_cot(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_cot(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Hyperbolic functions
// Complex complex_sinh(Complex z);
function complex_sinh(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_sinh(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }

}
// Complex complex_cosh(Complex z);
function complex_cosh(z){
    const inputPointer = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);
        
        complexNumbers.complex_cosh(outputPointer, inputPointer);
        
        return readComplex(outputPointer);
    }
    finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Projection
// Complex complex_project(Complex z);
function complex_project(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_project(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Reflection across the real axis
// Complex complex_reflect_real(Complex z);
function complex_reflect_real(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_reflect_real(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Reflection across the imaginary axis
// Complex complex_reflect_imaginary(Complex z);
function complex_reflect_imaginary(z){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_reflect_imaginary(outputPointer, inputPointer);

        return readComplex(outputPointer);
    }finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Polar transformations
// Complex complex_from_angle(double theta);
function  complex_from_angle(theta){
    const outputPointer = allocateMemory(COMPLEX_SIZE); 

    if(!outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{

        complexNumbers.complex_from_angle(outputPointer, theta);
        
        return readComplex(outputPointer);
    }finally{
        liberation(outputPointer);
    }
}

// Phase shifting
// Complex complex_phase_shift(Complex z, double theta);
function complex_phase_shift(z, theta){
    const inputPointer  = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(z, inputPointer);

        complexNumbers.complex_phase_shift(outputPointer, inputPointer, theta);

        return readComplex(outputPointer);
    } finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Midpoint between two complex numbers
// Complex complex_midpoint(Complex a, Complex b);
function complex_midpoint(a, b){
    const inputPointerA = allocateMemory(COMPLEX_SIZE);
    const inputPointerB = allocateMemory(COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE); 

    if(!inputPointerA || !inputPointerB || !outputPointer){
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        writeComplex(a, inputPointerA);
        writeComplex(b, inputPointerB);

        complexNumbers.complex_midpoint(outputPointer, inputPointerA, inputPointerB);

        return readComplex(outputPointer);
    }finally{
        liberation(inputPointerA);
        liberation(inputPointerB);
        liberation(outputPointer);
    }
}

// Complex averages
// Complex complex_average(Complex *array, int size);
function complex_average(array){
    if(!Array.isArray(array) || array.length == 0){
        return {real: NaN, imaginary: NaN};
    }

    const inputPointer = allocateMemory(array.length * COMPLEX_SIZE);
    const outputPointer = allocateMemory(COMPLEX_SIZE);

    if(!inputPointer || !outputPointer){
        liberation(inputPointer);
        liberation(outputPointer);
        throw new Error("Memory allocation failed");
    }

    try{
        for (const idx in array) {
            writeComplex(array[idx], inputPointer + (idx * COMPLEX_SIZE));
        }

        complexNumbers.complex_average(outputPointer, inputPointer, array.length);

        return readComplex(outputPointer);
    } finally{
        liberation(inputPointer);
        liberation(outputPointer);
    }
}

// Angle between two complex numbers (radians)
// double complex_angle_between(Complex a, Complex b);