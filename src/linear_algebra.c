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

double remap(double value, double in_min, double in_max, double out_min, double out_max) {
    if (in_min == in_max) return -1.0; // Undefined
    
    //get the percentage position
    double t = (value - in_min) / (in_max - in_min);
    t = clamp(t, 0.0, 1.0);
    
    return out_min + t * (out_max - out_min);
}
