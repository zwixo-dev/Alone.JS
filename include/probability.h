#ifndef ALONE_PROBABILITY_UTILS_H
#define ALONE_PROBABILITY_UTILS_H

double factorial(int n);

double permutation(int n, int r);

double combination(int n, int r);

double binomial_probability(int n, int x, double p);

double poisson_probability(int k, double lambda);

double normal_pdf(double x, double mean, double stddev);

double normal_cdf(double x, double mean, double stddev);

double bernoulli(double x, double p);

double geometric_probability(int k, double p);

double hypergeometric_probability(int N, int K, int n, int k);

double exponential_pdf(double x, double lambda);

double exponential_cdf(double x, double lambda);

double uniform_pdf(double x, double a, double b);

double uniform_cdf(double x, double a, double b);

double standard_normal_pdf(double z);

double standard_normal_cdf(double z);

double weibull_pdf(double x, double shape, double scale);

double weibull_cdf(double x, double shape, double scale);

double logistic_pdf(double x, double mean, double scale);

double logistic_cdf(double x, double mean, double scale);

double cauchy_pdf(double x, double x0, double gamma);

double cauchy_cdf(double x, double x0, double gamma);

double chi_square_pdf(double x, int k);

double chi_square_cdf(double x, int k);

#endif