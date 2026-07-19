#ifndef ALONE_VECTORS_UTILS_H
#define ALONE_VECTORS_UTILS_H

double vector_magnitude(int size, double *vector);

void vector_normalize(int size, double *vector, double *result_vectors);

double vector_dot_product(int size, double *vectorA, double *vectorB);

void vector_cross_product(double *vectorA, double *vectorB, double *result_vectors);

void vector_add(int size, double *vectorA, double *vectorB, double *result_vectors);

void vector_subtract(int size, double *vectorA, double *vectorB, double *result_vectors);

void vector_scalar_multiply(int size, double scalar, double *vector, double *result_vectors);

void vector_scalar_divide(int size, double scalar, double *vector, double *result_vectors);

double vector_distance(int size, double *vectorA, double *vectorB);

double vector_angle(int size, double *vectorA, double *vectorB);

double vector_cosine_similarity(int size, double *vectorA, double *vectorB);

void vector_projection(int size, double *vectorA, double *vectorB, double *result_vectors);

void vector_rejection(int size, double *vector1, double *vector2, double *result_vectors);

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
void vector_reverse(int size, double *vector, double *result_vectors);

void vector_sort_ascending(int size, double *vector, double *result_vectors);

void vector_sort_descending(int size, double *vector, double *result_vectors);

// Products
double vector_hadamard_product_sum(int size, double *vector1, double *vector2);

void vector_hadamard_product(int size, double *vector1, double *vector2, double *result_vectors);

// Element-wise operations
void vector_abs(int size, double *vector, double *result_vectors);

void vector_negate(int size, double *vector, double *result_vectors);

void vector_power(int size, double *vector, double exponent, double *result_vectors);

void vector_sqrt(int size, double *vector, double *result_vectors);

#endif