#ifndef ALONE_VECTORS_UTILS_H
#define ALONE_VECTORS_UTILS_H

double vector_magnitude(int size, double *vector);

double vector_normalize(int size, double *vector, double *result);

double vector_dot_product(int size, double *vector1, double *vector2);

void vector_cross_product(double *vector1, double *vector2, double *result);


#endif