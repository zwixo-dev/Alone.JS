#include "../include/linear_algebra.h"


double lerp(double a, double b, double t) {
    if (t < 0.0) t = 0.0;
    if (t > 1.0) t = 1.0;

    return (1.0 - t) * a + t * b;
}

double inverse_lerp(double a, double b, double value) {
    if (a == b) return -1.0; // Undefined
    
    double result = (value - a) / (b - a);
    return clamp(result, 0.0, 1.0);
}
