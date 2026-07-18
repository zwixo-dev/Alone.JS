#include "../include/vector.h"


// vector_magnitude
double vector_magnitude(int size, double *vector){
    
    if(size<=0 || vector == NULL) return 0.0;
    
    double vectors_result = 0.0;
    
    for(int i=0; i<size; i++){
        vectors_result += vector[i]*vector[i];
    }
    
    return sqrt(vectors_result);
}