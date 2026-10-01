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

// Conversions
Complex polar_to_complex(double radius, double theta);
void complex_to_polar(Complex z, double *radius, double *theta);

// Powers & Roots
Complex complex_square(Complex z);
Complex complex_cube(Complex z);
Complex complex_power(Complex z, double exponent);
Complex complex_sqrt(Complex z);

// Trigonometric
Complex complex_sin(Complex z);
Complex complex_cos(Complex z);
Complex complex_tan(Complex z);

// Properties
double complex_magnitude(Complex z);
double complex_magnitude_squared(Complex z);
double complex_argument(Complex z);

// Constructors
Complex complex_create(double real, double imaginary);
Complex polar_to_complex(double radius, double theta);

//  Unary Operations
Complex complex_inverse(Complex z);
Complex complex_negate(Complex z);

// Scalar Operations
Complex complex_scale(Complex z, double scalar);

// Comparison
int complex_equal(Complex a, Complex b);

// Normalization
Complex complex_normalize(Complex z);

// Dot product (treating complex as 2D vector)
double complex_dot(Complex a, Complex b);

// Distance
double complex_distance(Complex a, Complex b);

// Rotation
Complex complex_rotate(Complex z, double theta);

// Linear interpolation
Complex complex_lerp(Complex a, Complex b, double t);

// Exponential & Logarithmic
Complex complex_exp(Complex z);
Complex complex_log(Complex z);

// Reciprocal trigonometric
Complex complex_sec(Complex z);
Complex complex_cot(Complex z);

// Hyperbolic functions
Complex complex_sinh(Complex z);
Complex complex_cosh(Complex z);

// Projection
Complex complex_project(Complex z);

// Reflection across the real axis
Complex complex_reflect_real(Complex z);

// Reflection across the imaginary axis
Complex complex_reflect_imaginary(Complex z);

// Polar transformations
Complex complex_from_angle(double theta);

// Phase shifting
Complex complex_phase_shift(Complex z, double theta);

// Midpoint between two complex numbers
Complex complex_midpoint(Complex a, Complex b);

// Complex averages
Complex complex_average(const Complex *array, int size);

// Angle between two complex numbers (radians)
double complex_angle_between(Complex a, Complex b);

// Reflection through the origin
Complex complex_reflect_origin(Complex z);

// Complex roots
void complex_nth_roots(Complex z, int n, Complex *roots);

// Hyperbolic tangent
Complex complex_tanh(Complex z);

// Check for special values
int complex_is_zero(Complex z);

Complex complex_abs(Complex z);

Complex complex_reciprocal(Complex z);

#endif