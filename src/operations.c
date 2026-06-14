#include "../include/operations.h"
#include <math.h>

double addition(double a, double b){
    return a + b;
}


double subtract(double a, double b){
    return a - b;
}


double multiply(double a, double b){
    return a * b;
}


double divide(double a, double b){
    return a / b;
}


double mod(double a, double  b){
    return fmod(a , b);
}

// 

double power(double  base, double  exponent){
    return pow(base, exponent);
}

double square(double n){
    return n * n;
}

double cube(double n){
    return n * n *n;
}

double sqrt(double  n){
    return sqrt(n);
}

double aBs(int n){
    return (n >= 0) ? n : -n;
}
