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

// triangle_perimeter
double triangle_perimeter(double a, double b, double c){
    if (a <= 0.0 || b <= 0.0 || c <= 0.0) return -1;
    
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) return -1;
    
    return a + b + c;
}

// triangle_semiperimeter
double triangle_semiperimeter(double a, double b, double c) {
    // if positifs
    if (a <= 0.0 || b <= 0.0 || c <= 0.0) return -1.0;
    
    // check
    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) return -1.0;
    
    return (a + b + c) / 2.0;
}

// triangle_heron_area
double triangle_heron_area(double a, double b, double c) {
    
    double s = triangle_semiperimeter(a, b, c);
    if (s < 0.0) return -1.0; // Invalide 
    
    // 2. Application de la formule de Héron
    return sqrt(s * (s - a) * (s - b) * (s - c));
}

// triangle_is_valid
int triangle_is_valid(double a, double b, double c){
    if(a <= 0 || b <= 0 || c <= 0) return 0;
    
    if ((a + b > c) && (a + c > b) && (b + c > a)) return 1; // true 
    
    // else
    return 0;  // false 
}

// triangle_is_equilateral
int triangle_is_equilateral(double a, double b, double c){
    if(a <= 0 || b <= 0 || c <= 0) return 0;
    
    if(a == b && b == c) return 1; // true
    
    // else
    return 0; // false
}

// triangle_is_isosceles
int triangle_is_isosceles(double a, double b, double c){
    if(a <= 0 || b <= 0 || c <= 0) return 0;
    
    if (!(a + b > c && a + c > b && b + c > a)) return 0;
    
    if (a == b || b == c || a == c) return 1; // true
    // else
    return 0;
}

// triangle_is_scalene
int triangle_is_scalene(double a, double b, double c){
    if(a <= 0 || b <= 0 || c <= 0) return 0;
     
    if (!(a + b > c && a + c > b && b + c > a)) {
         return 0;
    }
     
     if (a != b && b != c && a != c) return 1;
     
     return 0;
}

// triangle_is_right
int triangle_is_right(double a, double b, double c){
     if(a <= 0 || b <= 0 || c <= 0) return 0;
     double a2 = a * a;
     double b2 = b * b;
     double c2 = c * c;
     
     if ((a2 + b2 == c2) || (a2 + c2 == b2) || (b2 + c2 == a2)) return 1;

     return 0;
}

// rectangle_area
double rectangle_area(double length, double width){
    return width * length;
}

// rectangle_perimeter
double rectangle_perimeter(double length, double width){
    // P = 2(l + w)
    return 2.0 *(length + width);
}

// rectangle_diagonal
double rectangle_diagonal(double length, double width) {
    return sqrt((width * width) + (length * length));
}