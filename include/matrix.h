#ifndef ALONE_ARRAY_UTILS_H
#define ALONE_ARRAY_UTILS_H

// simple array

double array_sum(int size, double *arr);

double array_product(int size, double *arr);

double array_average(int size, double *arr);

double array_min(int size, double *arr);

double array_max(int size, double *arr);

double array_range(int size, double *arr);

// 2d array
void matrix2d_add(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result);

void matrix2d_subtract(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result);

void matrix2d_multiply(int rowsM1, int columnsM1, int rowsM2, int columnsM2, double *matrix_1, double *matrix_2, double *matrix_result);

void matrix_transpose(int rows, int columns, double *matrix, double *matrix_result);

void matrix2d_scalar_operation(int rows, int columns, char *operation, double value, double *matrix, double *matrix_result);

double matrix_determinant(int rows, int columns, double *matrix);

void matrix_cofactor(int rows, int columns, double *matrix, double *matrix_result);

void matrix_inverse(int rows, int columns, double *matrix, double *matrix_result);

double matrix_trace(int rows, int columns, double *matrix);

void matrix_identity(int rows, int columns, double *matrix_result);

void matrixHadamard_product(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result);

int matrix_is_singular(int rows, int columns, double *matrix);

int matrix_is_invertible(int rows, int columns, double *matrix);

#endif