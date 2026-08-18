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

// lerp_vector
void lerp_vector(int size, const double *vectorA, const double *vectorB, double t, double *result) {
    if (size <= 0 || !vectorA || !vectorB || !result) return;
    
    for (int i = 0; i < size; i++) {
        result[i] = lerp(vectorA[i], vectorB[i], t);
    }
}

// lerp_points_2d
void lerp_points_2d(const double *vectorA, const double *vectorB, double t, double *result) {
    if (!vectorA || !vectorB || !result) return;

    result[0] = lerp(vectorA[0], vectorB[0], t);
    result[1] = lerp(vectorA[1], vectorB[1], t);
}

void lerp_points_3d(const double *vectorA, const double *vectorB, double t, double *result) {
    if (!vectorA || !vectorB || !result) return;

    result[0] = lerp(vectorA[0], vectorB[0], t);
    result[1] = lerp(vectorA[1], vectorB[1], t);
    result[2] = lerp(vectorA[2], vectorB[2], t);
}

// rotate_point_2d
void rotate_point_2d(double x, double y, double angle, double *result) {
    if (!result) return;

    // x′ = x * cos(θ) - y * sin(θ)
    result[0] = x * cos(angle) - y * sin(angle); 
    
    // y′=xsin(θ)+ycos(θ)
    result[1] = x * sin(angle) + y * cos(angle);
}

// scale_point_2d
void scale_point_2d(double x, double y, double scale_x, double scale_y, double *result){
  if (!result) return;
    // x' = x * sx 
    result[0] = x * scale_x;  
    // y' = y * sy 
    result[1] = y * scale_y;
}

// translate_point_2d
void translate_point_2d(double x, double y, double tx, double ty, double *result){
    if(!result) return;
    // x' = x + dx
    result[0] = x + tx;
    // y' = y + dy 
    result[1] = y + ty;
}

// shear_point_2d
void shear_point_2d(double x, double y, double shear_x, double shear_y, double *result){ 
    if(!result) return; 
    result[0] = x + shear_x * y; 
    result[1] = y + shear_y * x; 
}

// reflect_point_2d
void reflect_point_2d(double x, double y, double axis_x, double axis_y, double *result){

    if(!result) return;

    double axis_squared_length = axis_x * axis_x + axis_y * axis_y;
    if (axis_squared_length == 0.0) return; 

    result[0] = ((axis_x * axis_x - axis_y * axis_y) * x + 2.0 * axis_x * axis_y * y) / axis_squared_length;
    result[1] = (2.0 * axis_x * axis_y * x + (axis_y * axis_y - axis_x * axis_x) * y) / axis_squared_length;
}
