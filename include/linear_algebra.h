#ifndef ALONE_LINEAR_ALGEBRA_UTILS_H
#define ALONE_LINEAR_ALGEBRA_UTILS_H

// Interpolation / mapping
double lerp(double a, double b, double t);

double inverse_lerp(double a, double b, double value);

double remap(double value, double in_min, double in_max, double out_min, double out_max);

double smoothstep(double edge0, double edge1, double x);

double smootherstep(double edge0, double edge1, double x);

double clamp(double value, double min, double max);

void lerp_vector(int size, const double *a, const double *b, double t, double *result);

void lerp_points_2d(const double *a, const double *b, double t, double *result);

void lerp_points_3d(const double *a, const double *b, double t, double *result);

#endif