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