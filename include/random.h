#ifndef ALONE_GEOMETRY_UTILS_H
#define ALONE_GEOMETRY_UTILS_H

// Basic
int random_int(void);
double random_double(void);
int random_bool(void);
int random_sign(void);

// Range
int random_int_range(int min, int max);
double random_double_range(double min, double max);

// Arrays
void random_fill_int(int size, int *array, int min, int max);
void random_fill_double(int size, double *array, double min, double max);
void random_shuffle(int size, double *array);

// Selection
int random_index(int size);
double random_choice(int size, const double *array);
void random_sample(int size, const double *array, int sample_size, double *result);

// Coordinates
void random_coord_2d(double min_x, double max_x,
                     double min_y, double max_y,
                     double *result);
void random_coord_3d(double min_x, double max_x,
                     double min_y, double max_y,
                     double min_z, double max_z,
                     double *result);

#endif