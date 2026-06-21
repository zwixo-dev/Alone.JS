#ifndef ALONE_STATS_H
#define ALONE_STATS_H


double array_mean(int size, double *arr);

double array_median(int size, double *arr);

double array_variance(int size, double *arr, int option);

double array_stddev(int size, double *arr, int option);

double array_mode(int size, double *arr);

double array_percentile(int size, double *arr, double value);

double array_quartiles(int size, double *arr, double Q);

double array_iqr(int size, double *arr);

double array_skewness(int size, double *arr, int option);

double array_kurtosis(int size, double *arr, double s);

double array_covariance(int size, double *arr_x, double *arr_y, int option);

void array_normalize(int size, double *arr, double *output_arr);

double array_correlation(int size, double *arr_x, double *arr_y, int option);

#endif