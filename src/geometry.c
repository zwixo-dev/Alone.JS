#include "../include/geometry.h"
#include <math.h>


// geometry_distance_2d
double geometry_distance_2d(double x1, double y1, double x2, double y2){
    double dx = x2 - x1;
    double dy = y2 - y1;
    return sqrt(dx * dx + dy * dy);
}


