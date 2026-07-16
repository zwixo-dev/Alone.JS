#include "../include/probability.h"
#include "../include/operations.h"
#include <math.h>

// factorial
double factorial(int n) {
    if (n < 0) return -1; //undefined
    
    double fact = 1.0;
    
    for(int i = 1; i <= n; i++) { 
        fact *= i;
    }
    return fact;
}

// permutation
double permutation(int n, int r){
    // formula = n! / (n-r)!
    
    if(n<0 || r<0) return -1; // undefined
    return ( factorial(n) / factorial(n-r) ); 
}

// combination
double combination(int n, int r){
    // formula = n! / r! * (n-r)!
    if(n<0 || r<0) return -1;//undefined
    return ( factorial(n) /( factorial(r) * factorial(n-r) ) );
}

// binomial_probability
double binomial_probability(int n, int x, double p){
    
    if (n < 0 || x < 0 || x > n || p < 0 || p > 1) return -1; // undefined
    
    double combination_result = combination(n, x);
    double success = power(p,x);
    double failure = power(1-p,n-x); //= (1-p)^(n-x)
    return (combination_result * success * failure);
}

// poisson_probability
double poisson_probability(int k, double lambda) {

    if (k < 0 || lambda < 0) return -1;
    return exp(-lambda) * power(lambda, k) / factorial(k);
}

// normal_pdf
double normal_pdf(double x, double mean, double stddev) {
    if (stddev <= 0) return -1;

    double exponent = -((x - mean) * (x - mean)) / (2 * stddev * stddev);
    return exp(exponent) / (stddev * sqrt(2 * M_PI));
}

// normal_cdf
double normal_cdf(double x, double mean, double stddev){
    if (stddev <= 0) return -1;

    return 0.5 * (1 + erf((x - mean) / (stddev * sqrt(2))));
}

// bernoulli
double bernoulli(double x, double p){
    
    if ((x != 0.0 && x != 1.0) || p < 0.0 || p > 1.0)
        return -1;

    return power(p, x) * power(1 - p, 1 - x);
}

// geometric_probability
double geometric_probability(int k, double p){

    if (k <= 0 || p < 0 || p > 1) return -1;
    
    return power(1 - p, k - 1) * p;
}

// hypergeometric_probability
double hypergeometric_probability(int N, int K, int n, int k) {

    if (N <= 0 || K < 0 || n < 0 || k < 0) return -1;

    if (K > N || n > N || k > K || k > n) return -1;

    return (combination(K, k) *
            combination(N - K, n - k))
            / combination(N, n);
}

// exponential_pdf
double exponential_pdf(double x, double lambda){

    if (x < 0 || lambda <= 0) return -1;

    return lambda * exp(-lambda * x);
}

// exponential_cdf
double exponential_cdf(double x, double lambda){

    if (x < 0 || lambda <= 0)
        return -1;

    return 1 - exp(-lambda * x);
}

// uniform_pdf
double uniform_pdf(double x, double a, double b){
    if (a >= b) return -1;

    if (x < a || x > b) return 0.0;
    
    return 1.0/(b-a);
}

// uniform_cdf
double uniform_cdf(double x, double a, double b){

    if (a >= b)
        return -1;

    if (x < a)
        return 0.0;

    if (a <= x && x <= b)
        return (x - a) / (b - a);

    return 1;
}

// standard_normal_pdf
double standard_normal_pdf(double z){
    return exp(-(z * z) / 2.0) / sqrt(2.0 * M_PI);
}

// standard_normal_cdf
double standard_normal_cdf(double z){
    return normal_cdf(z, 0.0, 1.0);
}

// weibull_pdf
double weibull_pdf(double x, double shape, double scale){

    if (shape <= 0.0 || scale <= 0.0) return -1; // undefined
    
    if (x < 0.0) return 0.0;

    return (shape / scale)
           * power(x / scale, shape - 1)
           * exp(-power(x / scale, shape));
}

// weibull_cdf
double weibull_cdf(double x, double shape, double scale){

    if (shape <= 0.0 || scale <= 0.0) return -1.0;  //undefined
    
    if (x < 0.0) return 0.0;

    return 1.0 - exp(-power(x / scale, shape));
}

// logistic_pdf
double logistic_pdf(double x, double mean, double scale){

    if (scale <= 0.0) return -1;

    double exP = exp(-(x - mean) / scale);

    return exP / (scale * power(1.0 + exP, 2));
}

// logistic_cdf
double logistic_cdf(double x, double mean, double scale){

    if (scale <= 0.0) return -1.0;

    return 1.0 / (1.0 + exp(-(x - mean) / scale));
}

// cauchy_pdf
double cauchy_pdf(double x, double x0, double gamma){

    if (gamma <= 0.0) return -1.0;

    return 1.0 / (M_PI * gamma * (1.0 + power((x - x0) / gamma, 2)));
}

// cauchy_cdf
double cauchy_cdf(double x, double x0, double gamma){

    if (gamma <= 0.0) return -1.0;

    return (1.0 / M_PI) * atan((x - x0) / gamma) + 0.5;
}


// lower_incomplete_gamma
double lower_incomplete_gamma(double s, double x) {
    if (x < 0.0 || s <= 0.0) return 0.0;
    
    double sum = 1.0 / s;
    double term = 1.0 / s;
    
    for (int n = 1; n < 100; n++) {
        term = (term * x) / (s + n);
        sum += term;
        // (1e-15)
        if (fabs(term) < fabs(sum) * 1e-15) {
            break;
        }
    }
    
    return sum * pow(x, s) * exp(-x);
}

// complete_gamma
double complete_gamma(double z) {
    if (z < 0.5) {
        return M_PI / (sin(M_PI * z) * complete_gamma(1.0 - z));
    }
    
    z -= 1.0;
    double p[] = {
        0.99999999999980993, 676.5203681218851, -1259.1392167224028,
        771.32342877765313, -176.61502916214059, 12.507343278686905,
        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    };
    
    double x = p[0];
    for (int i = 1; i < 9; i++) {
        x += p[i] / (z + i);
    }
    
    double t = z + 7.5;
    return sqrt(2.0 * M_PI) * pow(t, z + 0.5) * exp(-t) * x;
}

// chi_square_pdf
double chi_square_pdf(double x, int k) {
    if (x < 0 || k <= 0) return -1.0; // undefined
    
    double numerator = pow(x, (k / 2.0) - 1.0) * exp(-x / 2.0);
    
    double denominator = pow(2.0, k / 2.0) * complete_gamma(k / 2.0);
    
    return numerator / denominator;
}

// chi_square_cdf
double chi_square_cdf(double x, int k) {
    if (x < 0 || k <= 0) return -1.0; // undefined
    
    //  s = k/2.0 and x = x/2.0
    double numerator = lower_incomplete_gamma((k / 2.0), (x / 2.0));
    double denominator = complete_gamma(k / 2.0); 
    
    return numerator / denominator;  
}
