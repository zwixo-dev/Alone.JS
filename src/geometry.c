#include "../include/geometry.h"
#include <math.h>


// geometry_distance_2d
double geometry_distance_2d(double x1, double y1, double x2, double y2){
    double dx = x2 - x1;
    double dy = y2 - y1;
    return sqrt(dx * dx + dy * dy);
}

// geometry_distance_3d
double geometry_distance_3d(double x1, double y1, double z1, double x2, double y2, double z2) {
    double dx = x2 - x1;
    double dy = y2 - y1;
    double dz = z2 - z1;
    
    return sqrt(dx * dx + dy * dy + dz * dz);
}

// geometry_midpoint_x
double geometry_midpoint_x(double x1, double x2){
    return (x1 + x2) / 2.0; 
}

// geometry_midpoint_y
double geometry_midpoint_y(double y1, double y2){
    return (y1 + y2) / 2.0;
}

// geometry_slope
double geometry_slope(double x1, double y1, double x2, double y2) {
    if (x1 == x2) {
        if (y1 == y2) {
            return NAN; 
        }
        return (y2 > y1) ? INFINITY : -INFINITY;
    }
    
    return (y2 - y1) / (x2 - x1);
}

// triangle_area
double triangle_area(double base, double height){
    if (base <= 0.0 || height <= 0.0) return -1;
        
    return (base * height) / 2.0;
}