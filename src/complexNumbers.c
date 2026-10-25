#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include "../include/complexNumbers.h"

// Complex number structure
typedef struct
{
    double real;
    double imaginary;
} Complex;

// Basic operations
Complex complex_add(Complex a, Complex b)
{
    Complex add_result;

    add_result.real = a.real + b.real;
    add_result.imaginary = a.imaginary + b.imaginary;

    return add_result;
}

Complex complex_subtract(Complex a, Complex b)
{
    Complex subtract_result;

    subtract_result.real = a.real - b.real;
    subtract_result.imaginary = a.imaginary - b.imaginary;

    return subtract_result;
}

Complex complex_multiply(Complex a, Complex b)
{
    Complex multiply_result;

    multiply_result.real = (a.real * b.real) - (a.imaginary * b.imaginary);
    multiply_result.imaginary = (a.real * b.imaginary) + (b.real * a.imaginary);

    return multiply_result;
}

Complex complex_divide(Complex a, Complex b)
{
    Complex devide_result;
    if (b.real == 0 && b.imaginary == 0)
    {
        devide_result.real = NAN;
        devide_result.imaginary = NAN;
        return devide_result;
    }

    double denominator = (b.real * b.real) + (b.imaginary * b.imaginary);

    devide_result.real = ((a.real * b.real) + (a.imaginary * b.imaginary)) / denominator;
    devide_result.imaginary = ((a.imaginary * b.real) - (a.real * b.imaginary)) / denominator;

    return devide_result;
}

// Utilities
Complex complex_conjugate(Complex z)
{
    Complex conjugate;

    conjugate.real = z.real;
    conjugate.imaginary = -z.imaginary;

    return conjugate;
}

double complex_magnitude(Complex z)
{
    // √ pow(a, 2) + pow(b, 2)

    return sqrt(((z.real * z.real) + (z.imaginary * z.imaginary)));
}

double complex_argument(Complex z)
{

    if (z.real > 0)
    {
        return atan(z.imaginary / z.real);
    }
    else if (z.real < 0 && z.imaginary >= 0)
    {
        return atan(z.imaginary / z.real) + M_PI;
    }
    else if (z.real < 0 && z.imaginary < 0)
    {
        return atan(z.imaginary / z.real) - M_PI;
    }
    else if (z.real == 0 && z.imaginary > 0)
    {
        return M_PI / 2;
    }
    else if (z.real == 0 && z.imaginary < 0)
    {
        return -(M_PI / 2);
    }
    else
    {
        // z.real == 0 and z.imaginary == 0
        return NAN;
    }
}

// Constructors
Complex complex_create(double real, double imaginary)
{
    Complex complex;
    complex.real = real;
    complex.imaginary = imaginary;
    return complex;
}

Complex polar_to_complex(double radius, double theta)
{
    Complex polar_to_complex_result;

    polar_to_complex_result.real = radius * cos(theta);
    polar_to_complex_result.imaginary = radius * sin(theta);

    return polar_to_complex_result;
}

//  Unary Operations
Complex complex_inverse(Complex z)
{
    Complex complex_inverse_result;
    Complex conjug_z = complex_conjugate(z);

    double denominator = ((z.real * z.real) + (z.imaginary * z.imaginary));
    complex_inverse_result.real = conjug_z.real / denominator;
    complex_inverse_result.imaginary = conjug_z.imaginary / denominator;

    return complex_inverse_result;
}

Complex complex_negate(Complex z)
{
    Complex complex_negate;

    complex_negate.real = -z.real;
    complex_negate.imaginary = -z.imaginary;

    return complex_negate;
}

// Scalar Operations
Complex complex_scale(Complex z, double scalar)
{
    Complex complex_scale_result;

    complex_scale_result.real = scalar * z.real;
    complex_scale_result.imaginary = scalar * z.imaginary;

    return complex_scale_result;
}

// Comparison
int complex_equal(Complex a, Complex b)
{
    if (a.real == b.real && a.imaginary == b.imaginary)
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Normalization
Complex complex_normalize(Complex z)
{
    Complex complex_normalize_result;

    double modulus = sqrt(((z.real * z.real) + (z.imaginary * z.imaginary)));

    complex_normalize_result.real = z.real / modulus;
    complex_normalize_result.imaginary = z.imaginary / modulus;

    return complex_normalize_result;
}

// Dot product (treating complex as 2D vector)
double complex_dot(Complex a, Complex b)
{
    return ((a.real * b.real) + (a.imaginary * b.imaginary));
}

// Distance
double complex_distance(Complex a, Complex b)
{
    return sqrt(((b.real - a.real) * (b.real - a.real) + (b.imaginary - a.imaginary) * (b.imaginary - a.imaginary)));
}

Complex complex_rotate(Complex z, double theta)
{
    Complex complex_rotate_result;

    complex_rotate_result.real = z.real * cos(theta) - z.imaginary * sin(theta);
    complex_rotate_result.imaginary = z.real * sin(theta) + z.imaginary * cos(theta);

    return complex_rotate_result;
}

// Linear interpolation
Complex complex_lerp(Complex a, Complex b, double t)
{
    Complex complex_lerp_result;

    complex_lerp_result.real = (1 - t) * a.real + t * b.real;
    complex_lerp_result.imaginary = (1 - t) * a.imaginary + t * b.imaginary;

    return complex_lerp_result;
}

// Exponential & Logarithmic
Complex complex_exp(Complex z)
{
    Complex complex_exp_result;

    complex_exp_result.real = exp(z.real) * cos(z.imaginary);
    complex_exp_result.imaginary = exp(z.real) * sin(z.imaginary);

    return complex_exp_result;
}

Complex complex_log(Complex z)
{
    Complex complex_log_result;

    double modulus = sqrt(((z.real * z.real) + (z.imaginary * z.imaginary)));

    complex_log_result.real = log(modulus);
    complex_log_result.imaginary = atan2(z.imaginary, z.real);

    return complex_log_result;
}

// Reciprocal trigonometric
Complex complex_sec(Complex z)
{
    Complex complex_sec_result;

    double denominator = cos(2 * z.real) + cosh(2 * z.imaginary);

    if (denominator == 0.0)
    {
        complex_sec_result.real = NAN;
        complex_sec_result.imaginary = NAN;
        return complex_sec_result;
    }

    complex_sec_result.real = 2 * cos(z.real) * cosh(z.imaginary) / denominator;
    complex_sec_result.imaginary = 2 * sin(z.real) * sinh(z.imaginary) / denominator;

    return complex_sec_result;
}

Complex complex_cot(Complex z)
{
    Complex complex_cot_result;

    double denominator = cosh(2 * z.imaginary) - cos(2 * z.real);

    if (denominator == 0.0)
    {
        complex_cot_result.real = NAN;
        complex_cot_result.imaginary = NAN;
        return complex_cot_result;
    }

    complex_cot_result.real = sin(2 * z.real) / denominator;
    complex_cot_result.imaginary = -sinh(2 * z.imaginary) / denominator;

    return complex_cot_result;
}

Complex complex_sinh(Complex z)
{
    Complex complex_sinh_result;

    complex_sinh_result.real = sinh(z.real) * cos(z.imaginary);
    complex_sinh_result.imaginary = cosh(z.real) * sin(z.imaginary);

    return complex_sinh_result;
}

Complex complex_cosh(Complex z)
{
    Complex complex_cosh_result;

    complex_cosh_result.real = cosh(z.real) * cos(z.imaginary);
    complex_cosh_result.imaginary = sinh(z.real) * sin(z.imaginary);

    return complex_cosh_result;
}

// Projection
Complex complex_project(Complex z)
{
    Complex complex_project_result;

    complex_project_result.real = z.real;
    complex_project_result.imaginary = 0.0;

    return complex_project_result;
}

// Reflection across the real axis
Complex complex_reflect_real(Complex z)
{
    Complex complex_reflect_real_result;

    complex_reflect_real_result.real = z.real;
    complex_reflect_real_result.imaginary = -z.imaginary;

    return complex_reflect_real_result;
}

// Reflection across the imaginary axis
Complex complex_reflect_imaginary(Complex z)
{
    Complex complex_reflect_imaginaryt_result;

    complex_reflect_imaginaryt_result.real = -z.real;
    complex_reflect_imaginaryt_result.imaginary = z.imaginary;

    return complex_reflect_imaginaryt_result;
}

// Polar transformations
Complex complex_from_angle(double theta)
{
    Complex complex_from_angle_result;

    complex_from_angle_result.real = cos(theta);
    complex_from_angle_result.imaginary = sin(theta);

    return complex_from_angle_result;
}

// Phase shifting
Complex complex_phase_shift(Complex z, double theta)
{
    Complex complex_phase_shift_result;

    complex_phase_shift_result.real = z.real * cos(theta) - z.imaginary * sin(theta);
    complex_phase_shift_result.imaginary = z.real * sin(theta) + z.imaginary * cos(theta);

    return complex_phase_shift_result;
}

// Midpoint between two complex numbers
Complex complex_midpoint(Complex a, Complex b)
{
    Complex complex_midpoint_result;

    complex_midpoint_result.real = (a.real + b.real) / 2;
    complex_midpoint_result.imaginary = (a.imaginary + b.imaginary) / 2;

    return complex_midpoint_result;
}

// Complex averages
Complex complex_average(Complex *array, int size)
{
    Complex complex_average_result = {0.0, 0.0};

    if (size <= 0)
    {
        return complex_average_result;
    }

    for (int i = 0; i < size; i++)
    {
        complex_average_result.real += array[i].real;
        complex_average_result.imaginary += array[i].imaginary;
    }

    complex_average_result.real /= size;
    complex_average_result.imaginary /= size;

    return complex_average_result;
}

// Angle between two complex numbers (radians)
double complex_angle_between(Complex a, Complex b)
{
    if ((a.real == 0 && a.imaginary == 0) || (b.real == 0 && b.imaginary == 0))
    {
        return 0.0;
    }

    double angle = complex_argument(b) - complex_argument(a);

    while (angle > M_PI)
        angle -= 2.0 * M_PI;
    while (angle < -M_PI)
        angle += 2.0 * M_PI;

    return angle;
}

// Reflection through the origin
Complex complex_reflect_origin(Complex z)
{
    Complex complex_reflect_origin_result;

    complex_reflect_origin_result.real = -z.real;
    complex_reflect_origin_result.imaginary = -z.imaginary;

    return complex_reflect_origin_result;
}

// Complex roots
void complex_nth_roots(Complex z, int n, Complex *roots)
{
}
// Hyperbolic tangent
Complex complex_tanh(Complex z)
{
    Complex complex_tanh_result;

    complex_tanh_result.real = sinh(2 * z.real) / (cosh(2 * z.real) + cos(2 * z.imaginary));
    complex_tanh_result.imaginary = sin(2 * z.imaginary) / (cosh(2 * z.real) + cos(2 * z.imaginary));

    return complex_tanh_result;
}

// Check for special values
bool complex_is_zero(Complex z)
{
    if (z.real == 0.0 && z.imaginary == 0.0)
        return true;

    return false;
}

Complex complex_abs(Complex z)
{
    Complex complex_abs_result;

    complex_abs_result.real = sqrt((z.real * z.real) + (z.imaginary * z.imaginary));

    // the absolute value/magnitude has no imaginary
    complex_abs_result.imaginary = 0.0;

    return complex_abs_result;
}

Complex complex_reciprocal(Complex z)
{
    Complex complex_reciprocal_result;

    double denominator = (z.real * z.real) + (z.imaginary * z.imaginary);

    if (denominator == 0)
    {
        complex_reciprocal_result.real = NAN;
        complex_reciprocal_result.imaginary = NAN;
        return complex_reciprocal_result;
    }

    complex_reciprocal_result.real = z.real / denominator;
    complex_reciprocal_result.imaginary = -z.imaginary / denominator;

    return complex_reciprocal_result;
}

Complex complex_expm1(Complex z)
{
    Complex complex_expm1_result;

    double sin_half_y = sin(z.imaginary / 2.0);
    complex_expm1_result.real = expm1(z.real) * cos(z.imaginary) - 2.0 *
                                                                       sin_half_y * sin_half_y;

    complex_expm1_result.imaginary = exp(z.real) * sin(z.imaginary);

    return complex_expm1_result;
}

Complex complex_log10(Complex z)
{
    Complex complex_log10_result;

    if (z.real == 0.0 && z.imaginary == 0.0)
    {
        complex_log10_result.real = -INFINITY;
        complex_log10_result.imaginary = 0.0;
        return complex_log10_result;
    }

    double log_10 = log(10.0);

    complex_log10_result.real = log(complex_magnitude(z)) / log_10;
    complex_log10_result.imaginary = atan2(z.imaginary, z.real) / log_10;

    return complex_log10_result;
}

bool complex_is_finite(Complex z)
{
    return isfinite(z.real) && isfinite(z.imaginary);
}

// Inverse trigonometric functions
Complex complex_asin(Complex z)
{
    Complex complex_asin_result;

    // Calculate focal distances p and q
    // (-1, 0)
    double p = sqrt((z.real + 1.0) * (z.real + 1.0) + z.imaginary * z.imaginary);
    // (1, 0)
    double q = sqrt((z.real - 1.0) * (z.real - 1.0) + z.imaginary * z.imaginary);

    double half_p_minus_q = (p - q) / 2.0;
    double half_p_add_q = (p + q) / 2.0;

    complex_asin_result.real = asin(half_p_minus_q);

    double sign_y = (z.imaginary >= 0.0) ? 1.0 : -1.0;
    complex_asin_result.imaginary = sign_y * log(half_p_add_q + sqrt(half_p_add_q * half_p_add_q - 1.0));

    return complex_asin_result;
}

Complex complex_acos(Complex z)
{
    Complex complex_acos_result;

    // Calculate focal distances p and q
    double p = sqrt((z.real + 1.0) * (z.real + 1.0) + z.imaginary * z.imaginary);
    double q = sqrt((z.real - 1.0) * (z.real - 1.0) + z.imaginary * z.imaginary);

    double half_p_minus_q = (p - q) / 2.0;
    double half_p_add_q = (p + q) / 2.0;

    // FIX: Changed asin() to acos() right here
    complex_acos_result.real = acos(half_p_minus_q);

    double sign_y = (z.imaginary >= 0.0) ? 1.0 : -1.0;
    complex_acos_result.imaginary = -sign_y * log(half_p_add_q + sqrt(half_p_add_q * half_p_add_q - 1.0));

    return complex_acos_result;
}

Complex complex_atan(Complex z)
{
    Complex complex_atan_result;

    complex_atan_result.real = 0.5 * atan2(2.0 * z.real, 1.0 - z.real * z.real - z.imaginary * z.imaginary);

    double x_squared = z.real * z.real;
    double y_plus_1 = z.imaginary + 1.0;
    double y_minus_1 = z.imaginary - 1.0;

    double numerator = x_squared + (y_plus_1 * y_plus_1);
    double denominator = x_squared + (y_minus_1 * y_minus_1);

    complex_atan_result.imaginary = 0.25 * log(numerator / denominator);

    return complex_atan_result;
}

// Complex number classification
bool complex_is_nan(Complex z)
{
    return isnan(z.real) || isnan(z.imaginary);
}

// Complex exponential variants
Complex complex_pow_real(Complex z, double exponent)
{
    Complex complex_pow_real_result;

    double r_squared = z.real * z.real + z.imaginary * z.imaginary;
    double new_r = pow(r_squared, exponent / 2.0);

    double new_theta = exponent * atan2(z.imaginary, z.real);

    complex_pow_real_result.real = new_r * cos(new_theta);
    complex_pow_real_result.imaginary = new_r * sin(new_theta);

    return complex_pow_real_result;
}

int complex_is_infinite(Complex z);

// Complex exponential variants
Complex complex_pow_real(Complex z, double exponent)
{
    Complex complex_pow_real_result;

    double r_squared = z.real * z.real + z.imaginary * z.imaginary;
    double new_r = pow(r_squared, exponent / 2.0);

    double new_theta = exponent * atan2(z.imaginary, z.real);

    complex_pow_real_result.real = new_r * cos(new_theta);
    complex_pow_real_result.imaginary = new_r * sin(new_theta);

    return complex_pow_real_result;
}

Complex complex_root(Complex z, int n)
{
    Complex complex_root_result;

    double r_squared = z.real * z.real + z.imaginary * z.imaginary;
    double new_r = pow(r_squared, 1.0 / (2.0 * n));
    double theta = atan2(z.imaginary, z.real) / n;

    complex_root_result.real = new_r * cos(theta);
    complex_root_result.imaginary = new_r * sin(theta);

    return complex_root_result;
}

// Cartesian / polar utilities
double complex_real_part(Complex z)
{
    return z.real;
}

double complex_imaginary_part(Complex z)
{
    return z.imaginary;
}

// Complex rounding / decomposition
Complex complex_floor(Complex z)
{
    Complex complex_floor_result;

    complex_floor_result.real = floor(z.real);
    complex_floor_result.imaginary = floor(z.imaginary);

    return complex_floor_result;
}

Complex complex_ceil(Complex z)
{
    Complex complex_ceil_result;

    complex_ceil_result.real = ceil(z.real);
    complex_ceil_result.imaginary = ceil(z.imaginary);

    return complex_ceil_result;
}

Complex complex_round(Complex z){
    Complex  complex_round_result;

    complex_round_result.real = round(z.real);
    complex_round_result.imaginary = round(z.imaginary);

    return complex_round_result;
}

Complex complex_csc(Complex z){
    Complex complex_csc_result;
    double denominator = cosh(2.0 * z.imaginary) - cos(2.0 * z.real);

    if (denominator == 0.0) {
        complex_csc_result.real = NAN;
        complex_csc_result.imaginary = NAN;
        return complex_csc_result;
    }

    complex_csc_result.real = (2.0 * sin(z.real) * cosh(z.imaginary)) / denominator; 
    complex_csc_result.imaginary = (2.0 * cos(z.real) * sinh(z.imaginary)) / denominator;

    return complex_csc_result;
}

Complex complex_csch(Complex z){
    Complex complex_csch_result;
    double denominator = cosh(2.0 * z.real) - cos(2.0 * z.imaginary);

    if (denominator == 0.0) {
        complex_csch_result.real = NAN;
        complex_csch_result.imaginary = NAN;
        return complex_csch_result;
    }

    complex_csch_result.real = (2.0 * sinh(z.real) * cos(z.imaginary)) / denominator; 
    complex_csch_result.imaginary = (-2.0 * cosh(z.real) * sin(z.imaginary)) / denominator; 

    return complex_csch_result;
}

Complex complex_sech(Complex z){
    Complex complex_sech_result;
    double denominator = cosh(2.0 * z.real) + cos(2.0 * z.imaginary);
    
    if (denominator == 0.0) {
        complex_sech_result.real = NAN;
        complex_sech_result.imaginary = NAN;
        return complex_sech_result;
    }

    complex_sech_result.real = (2.0 * cosh(z.real) * cos(z.imaginary)) / denominator;
    
    complex_sech_result.imaginary = (-2.0 * sinh(z.real) * sin(z.imaginary)) / denominator;

    return complex_sech_result;
}