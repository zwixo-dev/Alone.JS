#include "../include/probability.h"


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
    double success = pow(p,x);
    double failure = pow(1-p,n-x); //= (1-p)^(n-x)
    return (combination_result * success * failure);
}