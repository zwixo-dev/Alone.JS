#include "../include/linear_algebra.h"
#include "../include/operations.h"
#include "math.h"
#include "stdlib.h"


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

// transform_point_2d
void transform_point_2d(double x, double y, double tx, double ty, double rotation, double scale_x, double scale_y, double *result){

    if(!result) return;

    // x and Scaled
    double x_scaled = x * scale_x;
    double y_scaled = y * scale_y;

    double cos_r = cos(rotation);
    double sin_r = sin(rotation);

    double x_rotated = x_scaled * cos_r - y_scaled * sin_r;
    double y_rotated = x_scaled * sin_r + y_scaled * cos_r;

    // result
    result[0] = x_rotated + tx;
    result[1] = y_rotated + ty;
}

// rotate_around_point_2d
void rotate_around_point_2d(double x, double y, double center_x, double center_y, double angle, double *result){

    if(!result) return;

    // 
    result[0] = center_x + (x - center_x) * cos(angle) - (y - center_y) * sin(angle);
    result[1] = center_y + (x - center_x) * sin(angle) + (y - center_y) * cos(angle);
}

// rotate_vector_2d
void rotate_vector_2d(double x, double y, double angle, double *result){

    if(!result) return;

    // x = ycos(teta) - ysin(teta)
    result[0] = x * cos(angle) -  y * sin(angle)  ;
    // y = ysin(teta) + xcos(teta)
    result[1] = y * sin(angle) +  x * cos(angle) ;
}

// rotate_point_3d_x
void rotate_point_3d_x(double x, double y, double z, double angle, double *result){

    if (!result) return;

    double out_x = x;
    double out_y = y * cos(angle) - z * sin(angle);
    double out_z = y * sin(angle) + z * cos(angle); 

    // x'
    result[0] = out_x;
    // y'
    result[1] = out_y;
    // z'
    result[2] = out_z;
}

// rotate_point_3d_y
void rotate_point_3d_y(double x, double y, double z, double angle, double *result){
    if (!result) return;

    double out_x = x * cos(angle) + z * sin(angle);
    double out_y = y;
    double out_z = z * cos(angle) - x * sin(angle); 

    // x'
    result[0] = out_x;
    // y'
    result[1] = out_y;
    // z'
    result[2] = out_z;
}

// rotate_point_3d_z
void rotate_point_3d_z(double x, double y, double z, double angle, double *result){
    if (!result) return;

    double out_x = x * cos(angle) - y * sin(angle);
    double out_y = x * sin(angle) + y * cos(angle);
    double out_z = z; 

    // x'
    result[0] = out_x;
    // y'
    result[1] = out_y;
    // z'
    result[2] = out_z;
}

// rotate_point_3d_x
void rotate_point_3d(double x, double y, double z, double angle_x, double angle_y, double angle_z, double *result){
    if(!result) return;

    double current[3];
    
    rotate_point_3d_x(x, y, z, angle_x, current);
    
    rotate_point_3d_y(current[0], current[1], current[2], angle_y, current);
    
    rotate_point_3d_z(current[0], current[1], current[2], angle_z, result);
}

// scale_point_3d
void scale_point_3d(double x, double y, double z, double scale_x, double scale_y, double scale_z, double *result){
    if(!result) return; 
    
    // x'
    double out_x = x * scale_x;
    // y'
    double out_y = y * scale_y;
    // z'
    double out_z = z * scale_z;

    // result
    result[0] = out_x;
    result[1] = out_y;
    result[2] = out_z;
}

// translate_point_3d
void translate_point_3d(double x, double y, double z, double tx, double ty, double tz, double *result){
    if(!result) return;
    
    // x
    double out_x = x + tx;
    // y
    double out_y = y + ty;
    // z
    double out_z = z + tz;
    
    // result
    result[0] = out_x;
    result[1] = out_y;
    result[2] = out_z;
}

void reflect_point_3d(double x, double y, double z, double nx, double ny, double nz, double *result){
    if(!result) return;

    // distance
    double dist = (x * nx) + (y * ny) + (z * nz);
    // x
    double out_x = x - 2 * dist * nx;
    // y
    double out_y = y - 2 * dist * ny;
    // z
    double out_z = z - 2 * dist * nz;
    
    result[0] = out_x; 
    result[1] = out_y;
    result[2] = out_z; 
}

// rotate_around_point_3d
void rotate_around_point_3d(double x, double y, double z, double cx, double cy, double cz, double angle_x, double angle_y, double angle_z, double *result){
    if(!result) return;
    
    // Center the points
    
    double x1 = x-cx;
    double y1 = y-cy;
    double z1 = z-cz;
    
    // the successive rotations 
        //rotation around X
    double x2 = x1;
    double y2 = y1 * cos(angle_x) - z1 * sin(angle_x);
    double z2 = y1 * sin(angle_x) + z1 * cos(angle_x);
        // rotation around Y
    double x3 = x2 * cos(angle_y) + z2 * sin(angle_y);
    double y3 = y2;
    double z3 = z2 * cos(angle_y) - x2 * sin(angle_y);    
    
        // rotation around z
    double x4 = x3 * cos(angle_z) - y3 * sin(angle_z); 
    double y4 = x3 * sin(angle_z) + y3 * cos(angle_z);
    double z4 = z3;
    
    // reverse translation
    // result
    result[0] = x4 + cx;
    result[1] = y4 + cy;
    result[2] = z4 + cz;
}

// transform_point_3d
void transform_point_3d(double x, double y, double z, double tx, double ty, double tz, double rx, double ry, double rz, double sx, double sy, double sz, double *result){
    if(!result) return;
    
    // temp arrays
    double scaled[3]; 
    double rot_x[3];
    double rot_y[3];
    double rot_z[3];
    
    // Scale
    scale_point_3d(x, y, z, sx, sy, sz, scaled);
    
    // Rotate around X
    rotate_point_3d_x(scaled[0], scaled[1], scaled[2], rx, rot_x);
    
    // Rotate around Y
    rotate_point_3d_y(rot_x[0], rot_x[1], rot_x[2], ry, rot_y);
    
    // Rotate around Z
    rotate_point_3d_z(rot_y[0], rot_y[1], rot_y[2], rz, rot_z);
    
    // Translate
    translate_point_3d(rot_z[0], rot_z[1], rot_z[2], tx, ty, tz, result);
}

// cartesian_to_polar
void cartesian_to_polar(double x, double y, double *result) {
    if (!result) return;

    // raduis and angle result
    result[0] = sqrt((x * x) + (y * y));
    result[1] = atan2(y, x);
}

// polar_to_cartesian
void polar_to_cartesian(double radius, double angle, double *result){
    if(!result) return;
    // x
    result[0] = radius * cos(angle); 
    // y
    result[1] = radius * sin(angle);
}

// cartesian_to_spherical
void cartesian_to_spherical(double x, double y, double z, double *result){
    if(!result) return;
  
    // radius
    double temp_radius = sqrt((x * x) + (y * y) + (z * z));
    
    // theta
    double temp_theta = atan2(y, x);
    
    // phi
    double temp_phi = atan2(sqrt((x * x) + (y * y)), z);
    
    // i need to return an obj instead of array in js
    result[0] = temp_radius;
    result[1] = temp_theta;
    result[2] = temp_phi;
}

// spherical_to_cartesian
void spherical_to_cartesian(double radius, double theta, double phi, double *result){
    
    if(!result) return;
    
    double out_x = radius * sin(phi) * cos(theta);
    double out_y = radius * sin(phi) * sin(theta); 
    double out_z = radius * cos(phi);
    
    // results
    
    result[0] = out_x; 
    result[1] = out_y; 
    result[2] = out_z; 
}


void cartesian_to_cylindrical(double x, double y, double z, double *result){
    if(!result) return;
    
    // radius
    double radius = sqrt((x*x) + (y*y)); 
    //angle
    double angle = atan2(y, x);
    //height
    double height = z;
    
    // resutl
    result[0] = radius;
    result[1] = angle;
    result[2] = height;
}

void cylindrical_to_cartesian(double radius, double angle, double height, double *result) {
    if(!result) return;
    
	double out_x = radius * cos(angle);
	double out_y = radius * sin(angle);
	double out_z = height;

	// x
	result[0] = out_x;
	// y
	result[1] = out_y;
	//z
	result[2] = out_z;
}


// Graphics coordinate systems
void world_to_screen_2d(double x, double y,
                        double camera_x, double camera_y,
                        double zoom,
                        double screen_width, double screen_height,
                        double *screen_x, double *screen_y) {
    
    if(!screen_x || !screen_y) return;
    //world coord relative to the camera and apply zoom                    
    double NDC_x = (x - camera_x) * zoom;
    double NDC_y = (y - camera_y) * zoom;
    // map Normalized Device coord to screen space coord
    *screen_x = (screen_width / 2)+ ( NDC_x *  (screen_width / 2) );
    *screen_y =  (screen_height / 2)+ ( NDC_y *  (screen_height / 2) );
}
                        

void screen_to_world_2d(double screen_x, double screen_y,
                        double camera_x, double camera_y,
                        double zoom,
                        double screen_width, double screen_height,
                        double *world_x, double *world_y) {
    
    if(!world_x || !world_y) return;
    // check if zoom != 0 because we devide with it
    if (zoom == 0.0) return;
    
    *world_x = ((((2 * screen_x) /screen_width)-1.0) / zoom) + camera_x;
    *world_y = ((((2 * screen_y) /screen_width)-1.0) / zoom) + camera_y; 
}


void world_to_ndc(double x, double y, double z,
                  double viewport_width, double viewport_height,
                  double near_plane, double far_plane,
                  double *NDC_x, double *NDC_y, double *NDC_z) {
    
    if (!NDC_x || !NDC_y || !NDC_z) return;
    if (z == 0.0) return;

    // NDC X
    *NDC_x = (2.0 * near_plane * x) / (viewport_width * (-z));
    // NDC Y
    *NDC_y = (2.0 * near_plane * y) / (viewport_height * (-z));
    // NDC Z
    *NDC_z = (-(far_plane + near_plane) * (-z) - 2.0 * far_plane * near_plane) / ((far_plane - near_plane) * (-z)); 
}



void ndc_to_screen(double x, double y,
                   double screen_width, double screen_height,
                   double *screen_x, double *screen_y) {

    if(!screen_x || !screen_y) return; 
    
    *screen_x = ((x + 1.0) / 2.0) * screen_width; 
    *screen_y = ((y + 1.0) / 2.0) * screen_height;
}


void screen_to_ndc(double x, double y,
                   double screen_width, double screen_height,
                   double *ndc_x, double *ndc_y) {
   if (!ndc_x || !ndc_y) return;
    
    *ndc_x = (x / screen_width) * 2.0 - 1.0;
    *ndc_y = 1.0 - (y / screen_height) * 2.0; 
}

// Projection

void perspective_project(double x, double y, double z,
                         double focal_length,
                         double *projected_x,
                         double *projected_y){
    if(!projected_x || !projected_y || z== 0.0) return;
    
    *projected_x = (focal_length * x) / z;
    *projected_y = (focal_length * y) / z;
}

void perspective_divide(double x, double y, double z,
                        double *projected_x, double *projected_y){

    if(!projected_x || !projected_y || z==0.0) return;
    
    // x
    *projected_x = x/z;
    // y
    *projected_y = y/z;
}

void orthographic_project(double x, double y, double z,
                          double left, double right,
                          double bottom, double top,
                          double near_plane, double far_plane,
                          double *result){
                              
    if(!result || right == left || top == bottom || far_plane == near_plane) return;
    
    // Xndc
    result[0] = (2.0 * x - (right + left)) / (right - left); 
    // Yndc
    result[1] = (2.0 * y - (top + bottom)) / (top - bottom);
    // Zndc
    result[2] = (-2.0 * z - (far_plane + near_plane)) / (far_plane - near_plane);
}


void perspective_project_screen(double x, double y, double z,
                                double fov,
                                double aspect_ratio,
                                double near_plane,
                                double far_plane,
                                double screen_width,
                                double screen_height,
                                double *screen_x,
                                double *screen_y,
                                double *screen_z){
                                    
    if (!screen_x || !screen_y || !screen_z ||
        z == 0.0 ||
        aspect_ratio == 0.0 ||
        far_plane == near_plane) return;

    double f = 1.0 / tan(fov / 2.0);

    // Perspective projection to NDC
    double ndc_x = (x * f / aspect_ratio) / z;
    double ndc_y = (y * f) / z;

    double ndc_z =
        ((far_plane + near_plane) * z -
         2.0 * far_plane * near_plane) /
        ((far_plane - near_plane) * z);

    // NDC to Screen coordinates
    *screen_x = (ndc_x + 1.0) * 0.5 * screen_width;
    *screen_y = (1.0 - ndc_y) * 0.5 * screen_height;

    *screen_z = ndc_z;
}

//Linear combinations / spaces

void linear_combination( int size, int vector_count, const double *vectors, const double *coefficients,double *result){
    if(!vectors || !coefficients || !result || size<=0 || vector_count<=0) return;

    for(int i=0; i<size; i++){
        // reseting
        result[i] = 0.0;
        
        for (int j=0 ; j<vector_count; j++){
            result[i] += coefficients[j] * vectors[j*size+i];
        }
    }
    
}


int is_linear_independent(int size, int vector_count, const double *vectors) {
    if (size <= 0 || vector_count <= 0 || !vectors) return -1; // undefined
    
    //  i need calculate the rank  to verifie it so it's not completed for now 

    if (vector_count > size) return 0;
    
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < vector_count; j++) { 
            if (vectors[j * size + i] != 0) {
                return 0;
            }
        }
    }
    
    return 1; // true
}

int is_in_span( int size, int vector_count, const double *vectors, const double *target);

int is_linear_combination( int size, int vector_count, const double *vectors, const double *target);

int find_dimension( int size, int vector_count, const double *vectors);

int find_basis( int size, int vector_count, const double *vectors, double *basis, int *basis_count);