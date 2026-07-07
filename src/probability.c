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