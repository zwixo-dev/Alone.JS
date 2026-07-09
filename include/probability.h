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

#endif