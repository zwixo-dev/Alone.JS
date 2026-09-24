#ifndef COMPLEX_NUMBERS_H
#define COMPLEX_NUMBERS_H

// Complex number structure
typedef struct {
    double real;
    double imaginary;
} Complex;

// Basic operations
Complex complex_add(Complex a, Complex b);
Complex complex_subtract(Complex a, Complex b);
Complex complex_multiply(Complex a, Complex b);
Complex complex_divide(Complex a, Complex b);

// Utilities
Complex complex_conjugate(Complex z);
double complex_magnitude(Complex z);
double complex_argument(Complex z);

#endif