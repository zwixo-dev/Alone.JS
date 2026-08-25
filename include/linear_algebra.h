#ifndef ALONE_LINEAR_ALGEBRA_UTILS_H
#define ALONE_LINEAR_ALGEBRA_UTILS_H

// Interpolation / mapping
double lerp(double a, double b, double t);

double inverse_lerp(double a, double b, double value);

double remap(double value, double in_min, double in_max, double out_min, double out_max);

double smoothstep(double edge0, double edge1, double x);

double smootherstep(double edge0, double edge1, double x);

double clamp(double value, double min, double max);

void lerp_vector(int size, const double *vectorA, const double *vectorB, double t, double *result);

void lerp_points_2d(const double *vectorA, const double *vectorB, double t, double *result);

void lerp_points_3d(const double *vectorA, const double *vectorB, double t, double *result);

// 2D coordinate transformations

void rotate_point_2d(double x, double y, double angle, double *result);

void scale_point_2d(double x, double y, double scale_x, double scale_y, double *result);

void translate_point_2d(double x, double y, double tx, double ty, double *result);

void shear_point_2d(double x, double y, double shear_x, double shear_y, double *result);

void reflect_point_2d(double x, double y, double axis_x, double axis_y, double *result);

void transform_point_2d(double x, double y, double tx, double ty, double rotation, double scale_x, double scale_y, double *result);

void rotate_around_point_2d(double x, double y, double center_x, double center_y, double angle, double *result);

void rotate_vector_2d(double x, double y, double angle, double *result);

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

// Coordinate-space conversions

void cartesian_to_polar(double x, double y, double *result);

// void polar_to_cartesian(double radius, double angle, double *x, double *y);
void polar_to_cartesian(double radius, double angle, double *result);

// void cartesian_to_spherical(double x, double y, double z, double *radius, double *theta, double *phi);
void cartesian_to_spherical(double x, double y, double z, double *result);

// void spherical_to_cartesian(double radius, double theta, double phi, double *x, double *y, double *z);
void spherical_to_cartesian(double radius, double theta, double phi, double *result);

// void cartesian_to_cylindrical(double x, double y, double z, double *radius, double *angle, double *height);
void cartesian_to_cylindrical(double x, double y, double z, double *result);

// void cylindrical_to_cartesian(double radius, double angle, double height, double *x, double *y, double *z);
void cylindrical_to_cartesian(double radius, double angle, double height, double *result);

// Graphics coordinate systems
void world_to_screen_2d(double x, double y,
                        double camera_x, double camera_y,
                        double zoom,
                        double screen_width, double screen_height,
                        double *screen_x, double *screen_y);

void screen_to_world_2d(double screen_x, double screen_y,
                        double camera_x, double camera_y,
                        double zoom,
                        double screen_width, double screen_height,
                        double *world_x, double *world_y);

void world_to_ndc(double x, double y, double z,
                  double viewport_width, double viewport_height,
                  double near_plane, double far_plane,
                  double *result);

void ndc_to_screen(double x, double y,
                   double screen_width, double screen_height,
                   double *screen_x, double *screen_y);

void screen_to_ndc(double x, double y,
                   double screen_width, double screen_height,
                   double *ndc_x, double *ndc_y);

// Projection

void perspective_project(double x, double y, double z,
                         double focal_length,
                         double *projected_x,
                         double *projected_y);

void perspective_divide(double x, double y, double z,
                        double *result);

void orthographic_project(double x, double y, double z,
                          double left, double right,
                          double bottom, double top,
                          double near_plane, double far_plane,
                          double *result);

void perspective_project_screen(double x, double y, double z,
                                double fov,
                                double aspect_ratio,
                                double near_plane,
                                double far_plane,
                                double screen_width,
                                double screen_height,
                                double *screen_x,
                                double *screen_y);

//Linear combinations / spaces

void linear_combination( int size, int vector_count, const double *vectors, const double *coefficients,double *result);

int is_linear_independent( int size, int vector_count,const double *vectors);

int is_in_span( int size, int vector_count, const double *vectors, const double *target);

int is_linear_combination( int size, int vector_count, const double *vectors, const double *target);

int find_dimension( int size, int vector_count, const double *vectors);

int find_basis( int size, int vector_count, const double *vectors, double *basis, int *basis_count);
                                
#endif