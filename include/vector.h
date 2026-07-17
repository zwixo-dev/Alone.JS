#ifndef ALONE_VECTORS_UTILS_H
#define ALONE_VECTORS_UTILS_H

double vector_magnitude(int size, double *vector);

double vector_normalize(int size, double *vector, double *result);

double vector_dot_product(int size, double *vector1, double *vector2);

void vector_cross_product(double *vector1, double *vector2, double *result);

void vector_add(int size, double *vector1, double *vector2, double *result);

void vector_subtract(int size, double *vector1, double *vector2, double *result);

void vector_scalar_multiply(int size, double scalar, double *vector, double *result);

void vector_scalar_divide(int size, double scalar, double *vector, double *result);

double vector_distance(int size, double *vector1, double *vector2);

double vector_angle(int size, double *vector1, double *vector2);

double vector_cosine_similarity(int size, double *vector1, double *vector2);

#endif