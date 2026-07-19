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

// vector_normalize
void vector_normalize(int size, double *vector, double *result_vectors){
    if (size<=0 || vector == NULL || result_vectors == NULL) return;

    double Vmagnitude = vector_magnitude(size, vector);
    
    if(Vmagnitude == 0.0){
        for(int i=0; i<size; i++){
            result_vectors[i] = 0.0;
            return;
        }
    }

    // if not
    for(int i=0; i<size; i++){
        result_vectors[i] = ( vector[i] / Vmagnitude);
    }
}

// vector_dot_product
double vector_dot_product(int size, double *vectorA, double *vectorB){
    
    if(size<=0 || vectorA == NULL || vectorB == NULL) return 0.0;
    
    double vector_dot_product_result = 0.0;
    
    for(int i=0; i<size; i++){
        vector_dot_product_result += vectorA[i] * vectorB[i]; 
    }
    
    return vector_dot_product_result;
}

// vector_cross_product
void vector_cross_product(double *vectorA, double *vectorB, double *result_vectors){
    // x : (y1 x z2) - (z1 x y2)
    // y : (z1 x x2) - (x1 x z2)
    // z : (x1 x y2) - (y1 x x2)

    // vectorA[x1, y1, z1]
    // vectorB[x2, y2, z2]

    if(vectorA == NULL || vectorB == NULL || result_vectors == NULL) return;
    
    double res_x = ( vectorA[1] * vectorB[2] ) - ( vectorA[2] * vectorB[1] );
    double res_y = ( vectorA[2] * vectorB[0] ) - ( vectorA[0] * vectorB[2] );
    double res_z = ( vectorA[0] * vectorB[1] ) - ( vectorA[1] * vectorB[0] );

    result_vectors[0] = res_x;
    result_vectors[1] = res_y;
    result_vectors[2] = res_z;
}

// vector_add 
void vector_add(int size, double *vectorA, double *vectorB, double *result_vectors){
    // vA :(x1, y1, z1)
    // vB : (x2, y2, z2)
    // V  : (x1+x2, y1+y2, z1+z2)
    
    if(size<=0 || vectorA == NULL || vectorB == NULL || result_vectors == NULL) return;
    
    for(int i=0; i<size; i++){
        result_vectors[i] = vectorA[i] + vectorB[i];
    }
    
}

// vector_subtract
void vector_subtract(int size, double *vectorA, double *vectorB, double *result_vectors){
    // vA :(x1, y1, z1)
    // vB : (x2, y2, z2)
    // V  : (x1-x2, y1-y2, z1-z2)
    
    if(size<=0 || vectorA == NULL || vectorB == NULL || result_vectors == NULL) return;
    
    for(int i=0; i<size; i++){
        result_vectors[i] = vectorA[i] - vectorB[i];
    }
    
}

// vector_scalar_multiply
void vector_scalar_multiply(int size, double scalar, double *vector, double *result_vectors){
    if(size<=0 || vector == NULL || result_vectors == NULL) return;
    
    for(int i=0; i<size; i++){
        result_vectors[i] = scalar * vector[i];
    }
    
}

// vector_scalar_divide
void vector_scalar_divide(int size, double scalar, double *vector, double *result_vectors){
    if(size <= 0 || scalar == 0.0 || vector == NULL || result_vectors == NULL) return;
    
    for(int i = 0; i < size; i++){
        result_vectors[i] = vector[i] / scalar;
    }
}
