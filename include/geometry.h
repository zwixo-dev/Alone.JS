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

//Rectangle

double rectangle_area(double length, double width);
double rectangle_perimeter(double length, double width);
double rectangle_diagonal(double length, double width);

// square

double square_area(double side);
double square_perimeter(double side);
double square_diagonal(double side);

// circle

double circle_area(double radius);
double circle_circumference(double radius);
double circle_diameter(double radius);
double circle_arc_length(double radius, double angle);
double circle_sector_area(double radius, double angle);

// ellipse
double ellipse_area(double a, double b);
double ellipse_perimeter(double a, double b);

// polygon

double regular_polygon_perimeter(int sides, double side_length);
double regular_polygon_area(int sides, double side_length);
double polygon_interior_angle_sum(int sides);
double regular_polygon_interior_angle(int sides);

// cube

double cube_volume(double side);
double cube_surface_area(double side);
double cube_space_diagonal(double side);

//Rectangular Prism

double cuboid_volume(double length, double width, double height);
double cuboid_surface_area(double length, double width, double height);
double cuboid_space_diagonal(double length, double width, double height);

// Cylinder

double cylinder_volume(double radius, double height);
double cylinder_surface_area(double radius, double height);
double cylinder_lateral_area(double radius, double height);

// sphere

double sphere_volume(double radius);
double sphere_surface_area(double radius);

// cone

double cone_volume(double radius, double height);
double cone_surface_area(double radius, double height);
double cone_slant_height(double radius, double height);

// unit Conversion

double degrees_to_radians(double degrees);
double radians_to_degrees(double radians);

#endif