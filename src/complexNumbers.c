#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Complex number structure
typedef struct {
    double real;
    double imaginary;
} Complex;


// Basic operations
Complex complex_add(Complex a, Complex b){   
    Complex add_result; 

    add_result.real = a.real + b.real; 
    add_result.imaginary = a.imaginary + b.imaginary;

    return add_result;
}

Complex complex_subtract(Complex a, Complex b){
    Complex subtract_result;

    subtract_result.real = a.real - b.real;
    subtract_result.imaginary = a.imaginary - b.imaginary;

    return subtract_result;
}

Complex complex_multiply(Complex a, Complex b){
    Complex multiply_result;

    multiply_result.real = (a.real * b.real) - (a.imaginary * b.imaginary);
    multiply_result.imaginary = (a.real * b.imaginary) + (b.real * a.imaginary);

    return multiply_result;
}

Complex complex_divide(Complex a, Complex b){
    Complex devide_result;
    if(b.real == 0 && b.imaginary == 0){
        devide_result.real = NAN;
        devide_result.imaginary = NAN;
        return devide_result;
    }
    
    double denominator =  (b.real * b.real) + (b.imaginary * b.imaginary);

    devide_result.real = ((a.real * b.real) + (a.imaginary * b.imaginary)) / denominator;
    devide_result.imaginary = ((a.imaginary * b.real) - (a.real * b.imaginary)) / denominator;

    return devide_result;
}

// Utilities 
Complex complex_conjugate(Complex z){
    Complex conjugate;
    
    conjugate.real = z.real;
    conjugate.imaginary = -z.imaginary;
    
    return conjugate;
}

double complex_magnitude(Complex z){
    // √ pow(a, 2) + pow(b, 2)    
    
    return  sqrt(( (z.real * z.real) + (z.imaginary * z.imaginary) ));
    
}

double complex_argument(Complex z){
    
    if (z.real > 0) {
        return atan(z.imaginary / z.real);
    } else if (z.real < 0 && z.imaginary >= 0) {
        return atan(z.imaginary / z.real) + M_PI; 
    } else if (z.real < 0 && z.imaginary < 0) {
        return atan(z.imaginary / z.real) - M_PI;
    } else if (z.real == 0 && z.imaginary > 0) {
        return M_PI / 2;
    } else if (z.real == 0 && z.imaginary < 0) {
        return -(M_PI / 2);
    } else {
        // z.real == 0 and z.imaginary == 0
        return NAN; 
    }
    
}

// Constructors
Complex complex_create(double real, double imaginary){
    Complex complex;
    complex.real = real;
    complex.imaginary = imaginary; 
    return complex;
}

Complex polar_to_complex(double radius, double theta){
    Complex polar_to_complex_result;

    polar_to_complex_result.real = radius * cos(theta);
    polar_to_complex_result.imaginary = radius * sin(theta);
    
    return polar_to_complex_result;
}

//  Unary Operations
Complex complex_inverse(Complex z){
    Complex complex_inverse_result;
    Complex conjug_z = complex_conjugate(z);
    
    double denominator = ((z.real * z.real) + (z.imaginary * z.imaginary)); 
    complex_inverse_result.real = conjug_z.real / denominator;
    complex_inverse_result.imaginary = conjug_z.imaginary / denominator;

    return complex_inverse_result;
}

Complex complex_negate(Complex z){
    Complex complex_negate; 
    
    complex_negate.real = -z.real; 
    complex_negate.imaginary = -z.imaginary;
    
    return complex_negate;
}

// Scalar Operations
Complex complex_scale(Complex z, double scalar){
    Complex complex_scale_result;

    complex_scale_result.real = scalar * z.real; 
    complex_scale_result.imaginary = scalar * z.imaginary;

    return complex_scale_result;
}

// Comparison
int complex_equal(Complex a, Complex b){
    if(a.real == b.real && a.imaginary == b.imaginary){
        return true;
    } else{
        return false;
    }
}

// Normalization
Complex complex_normalize(Complex z){
    Complex complex_normalize_result;

double modulus = sqrt( ((z.real*z.real) + (z.imaginary*z.imaginary)) );
    
    complex_normalize_result.real = z.real / modulus;
    complex_normalize_result.imaginary = z.imaginary / modulus;
    
    return complex_normalize_result;
}

// Dot product (treating complex as 2D vector)
double complex_dot(Complex a, Complex b){
    return ( (a.real * b.real) + (a.imaginary  * b.imaginary) );
}

// Distance
double complex_distance(Complex a, Complex b){
    return sqrt( ( (b.real - a.real) * (b.real - a.real) + (b.imaginary - a.imaginary) * (b.imaginary - a.imaginary) ) ); 
}

Complex complex_rotate(Complex z, double theta){
    Complex complex_rotate_result;

    complex_rotate_result.real = z.real * cos(theta) - z.imaginary * sin(theta);
    complex_rotate_result.imaginary = z.real * sin(theta) + z.imaginary * cos(theta);

    return complex_rotate_result;
}

// Linear interpolation
Complex complex_lerp(Complex a, Complex b, double t){
    Complex complex_lerp_result;

    complex_lerp_result.real = (1-t)*a.real + t*b.real;
    complex_lerp_result.imaginary = (1-t)*a.imaginary + t*b.imaginary;

    return complex_lerp_result;
}

// Exponential & Logarithmic
Complex complex_exp(Complex z){
    Complex complex_exp_result;
    
    complex_exp_result.real = exp(z.real) * cos(z.imaginary);
    complex_exp_result.imaginary = exp(z.real) * sin(z.imaginary);

    return complex_exp_result;
}

Complex complex_log(Complex z){
    Complex complex_log_result;

    double modulus = sqrt( ((z.real*z.real) + (z.imaginary*z.imaginary)) );

    complex_log_result.real = log(modulus);
    complex_log_result.imaginary = atan2(z.imaginary, z.real);

    return complex_log_result;
}

// Reciprocal trigonometric
Complex complex_sec(Complex z){
    Complex complex_sec_result;

    double denominator = cos(2*z.real) + cosh(2*z.imaginary);

    if(denominator == 0.0){
        complex_sec_result.real = NAN;
        complex_sec_result.imaginary = NAN;
        return complex_sec_result;
    }
    
    complex_sec_result.real = 2*cos(z.real) * cosh(z.imaginary) / denominator;
    complex_sec_result.imaginary = 2*sin(z.real) * sinh(z.imaginary) / denominator;

    return complex_sec_result;
}

Complex complex_cot(Complex z){
    Complex complex_cot_result;

double denominator = cosh(2*z.imaginary) - cos(2*z.real);

if(denominator == 0.0){
    complex_cot_result.real = NAN;
    complex_cot_result.imaginary = NAN;
    return complex_cot_result;
}

complex_cot_result.real = sin(2*z.real) / denominator; 
complex_cot_result.imaginary = -sinh(2*z.imaginary);

    return complex_cot_result;
}
