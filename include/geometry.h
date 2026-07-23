#ifndef ALONE_GEOMETRY_UTILS_H
#define ALONE_GEOMETRY_UTILS_H


//Distance & Coordinates

double geometry_distance_2d(double x1, double y1, double x2, double y2);
double geometry_distance_3d(double x1, double y1, double z1, double x2, double y2, double z2);
double geometry_midpoint_x(double x1, double x2);
double geometry_midpoint_y(double y1, double y2);
double geometry_slope(double x1, double y1, double x2, double y2);

// Triangle

double triangle_area(double base, double height);
double triangle_perimeter(double a, double b, double c);
double triangle_heron_area(double a, double b, double c);
double triangle_semiperimeter(double a, double b, double c);
int triangle_is_valid(double a, double b, double c);
int triangle_is_equilateral(double a, double b, double c);
int triangle_is_isosceles(double a, double b, double c);
int triangle_is_scalene(double a, double b, double c);
int triangle_is_right(double a, double b, double c);

#endif