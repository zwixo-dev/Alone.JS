#ifndef ALONE_GEOMETRY_UTILS_H
#define ALONE_GEOMETRY_UTILS_H


//Distance & Coordinates

double geometry_distance_2d(double x1, double y1, double x2, double y2);
double geometry_distance_3d(double x1, double y1, double z1, double x2, double y2, double z2);
double geometry_midpoint_x(double x1, double x2);
double geometry_midpoint_y(double y1, double y2);
double geometry_slope(double x1, double y1, double x2, double y2);


#endif