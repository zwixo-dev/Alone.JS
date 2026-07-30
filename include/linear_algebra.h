#ifndef ALONE_LINEAR_ALGEBRA_UTILS_H
#define ALONE_LINEAR_ALGEBRA_UTILS_H

// Interpolation / mapping
double lerp(double a, double b, double t);

double inverse_lerp(double a, double b, double value);

double remap(double value, double in_min, double in_max, double out_min, double out_max);

double smoothstep(double edge0, double edge1, double x);

double smootherstep(double edge0, double edge1, double x);

double clamp(double value, double min, double max);

void lerp_vector(int size, const double *a, const double *b, double t, double *result);

void lerp_points_2d(const double *a, const double *b, double t, double *result);

void lerp_points_3d(const double *a, const double *b, double t, double *result);

// 2D coordinate transformations

void rotate_point_2d(double x, double y, double angle, double *result_x, double *result_y);

void scale_point_2d(double x, double y, double scale_x, double scale_y, double *result_x, double *result_y);

void translate_point_2d(double x, double y, double tx, double ty, double *result_x, double *result_y);

void shear_point_2d(double x, double y, double shear_x, double shear_y, double *result_x, double *result_y);

void reflect_point_2d(double x, double y, double axis_x, double axis_y, double *result_x, double *result_y);

void transform_point_2d(double x, double y, double tx, double ty, double rotation, double scale_x, double scale_y, double *result_x, double *result_y);

void rotate_around_point_2d(double x, double y, double center_x, double center_y, double angle, double *result_x, double *result_y);

void rotate_vector_2d(double x, double y, double angle, double *result_x, double *result_y);

// 3D coordinate transformations

void rotate_point_3d_x(double x, double y, double z, double angle, double *result);

void rotate_point_3d_y(double x, double y, double z, double angle, double *result);

void rotate_point_3d_z(double x, double y, double z, double angle, double *result);

void rotate_point_3d(double x, double y, double z, double angle_x, double angle_y, double angle_z, double *result);

void scale_point_3d(double x, double y, double z, double scale_x, double scale_y, double scale_z, double *result);

void translate_point_3d(double x, double y, double z, double tx, double ty, double tz, double *result);

void reflect_point_3d(double x, double y, double z, double nx, double ny, double nz, double *result);

void rotate_around_axis_3d(double x, double y, double z, double ax, double ay, double az, double angle, double *result);

void rotate_around_point_3d(double x, double y, double z, double cx, double cy, double cz, double angle_x, double angle_y, double angle_z, double *result);

void transform_point_3d(double x, double y, double z, double tx, double ty, double tz, double rx, double ry, double rz, double sx, double sy, double sz, double *result);

#endif