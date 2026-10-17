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