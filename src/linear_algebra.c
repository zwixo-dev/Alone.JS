#include "../include/linear_algebra.h"


// clamp 
double clamp(double value, double min, double max) {

    if (min > max) {
        double temp = min;
        min = max;
        max = temp;
    }
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

// lerp
double lerp(double a, double b, double t) {
    if (t < 0.0) t = 0.0;
    if (t > 1.0) t = 1.0;

    return (1.0 - t) * a + t * b;
}

// inverse_lerp
double inverse_lerp(double a, double b, double value) {
    if (a == b) return -1.0; // Undefined
    
    double result = (value - a) / (b - a);
    return clamp(result, 0.0, 1.0);
}

// remap
double remap(double value, double in_min, double in_max, double out_min, double out_max) {
    if (in_min == in_max) return -1.0; // Undefined
    
    //get the percentage position
    double t = (value - in_min) / (in_max - in_min);
    t = clamp(t, 0.0, 1.0);
    
    return out_min + t * (out_max - out_min);
}

// smoothstep
double smoothstep(double edge0, double edge1, double x) {
    if (edge0 == edge1) return -1.0; // Undefined
    
    // norm and clamp 
    double t = (x - edge0) / (edge1 - edge0);
    t = clamp(t, 0.0, 1.0);

    return t * t * (3.0 - 2.0 * t);
}

double smootherstep(double edge0, double edge1, double x) {
    if (edge0 == edge1) return -1.0; // Undefined
    
    // norm and clamp 
    double t = (x - edge0) / (edge1 - edge0);
    t = clamp(t, 0.0, 1.0);
    

    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}