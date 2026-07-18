#ifndef ALONE_VECTORS_UTILS_H
#define ALONE_VECTORS_UTILS_H

double vector_magnitude(int size, double *vector);

void vector_normalize(int size, double *vector, double *result_vectors);

double vector_dot_product(int size, double *vector1, double *vector2);

void vector_cross_product(double *vector1, double *vector2, double *result);

void vector_add(int size, double *vector1, double *vector2, double *result);

void vector_subtract(int size, double *vector1, double *vector2, double *result);

void vector_scalar_multiply(int size, double scalar, double *vector, double *result);

void vector_scalar_divide(int size, double scalar, double *vector, double *result);

double vector_distance(int size, double *vector1, double *vector2);

double vector_angle(int size, double *vector1, double *vector2);

double vector_cosine_similarity(int size, double *vector1, double *vector2);

void vector_projection(int size, double *vector1, double *vector2, double *result);

void vector_rejection(int size, double *vector1, double *vector2, double *result);

double vector_sum(int size, double *vector);

double vector_mean(int size, double *vector);

double vector_max(int size, double *vector);

double vector_min(int size, double *vector);

double vector_l1_norm(int size, double *vector);

double vector_infinity_norm(int size, double *vector);

// cheks
int vector_is_zero(int size, double *vector);

int vector_is_unit(int size, double *vector);

int vector_is_orthogonal(int size, double *vector1, double *vector2);

int vector_is_parallel(int size, double *vector1, double *vector2);

// statistics 
double vector_variance(int size, double *vector);

double vector_standard_deviation(int size, double *vector);

// Transformations
void vector_reverse(int size, double *vector, double *result);

void vector_sort_ascending(int size, double *vector, double *result);

void vector_sort_descending(int size, double *vector, double *result);

// Products
double vector_hadamard_product_sum(int size, double *vector1, double *vector2);

void vector_hadamard_product(int size, double *vector1, double *vector2, double *result);

// Element-wise operations
void vector_abs(int size, double *vector, double *result);

void vector_negate(int size, double *vector, double *result);

void vector_power(int size, double *vector, double exponent, double *result);

void vector_sqrt(int size, double *vector, double *result);

#endif