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

Complex complex_expm1(Complex z);

Complex complex_log10(Complex z);

int complex_is_finite(Complex z);

// Inverse trigonometric functions
Complex complex_asin(Complex z);
Complex complex_acos(Complex z);
Complex complex_atan(Complex z);

// Complex number classification
int complex_is_nan(Complex z);
int complex_is_infinite(Complex z);

// Complex exponential variants
Complex complex_pow_real(Complex z, double exponent);
Complex complex_root(Complex z, int n);

// Cartesian / polar utilities
double complex_real_part(Complex z);
double complex_imaginary_part(Complex z);

// Complex rounding / decomposition
Complex complex_floor(Complex z);
Complex complex_ceil(Complex z);
Complex complex_round(Complex z);

Complex complex_csc(Complex z);
Complex complex_csch(Complex z);
Complex complex_sech(Complex z);
Complex complex_coth(Complex z);

int complex_is_real(Complex z);
int complex_is_imaginary(Complex z);

double complex_distance_squared(Complex a, Complex b);
Complex complex_mul_i(Complex z);

Complex complex_div_i(Complex z);
Complex complex_conjugate_product(Complex z);

Complex complex_from_real(double real);

#endif