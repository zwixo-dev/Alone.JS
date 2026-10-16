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