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

// vector_distance
double vector_distance(int size, double *vectorA, double *vectorB){

    if(size<=0 || vectorA == NULL || vectorB == NULL) return 0.0;
    
    double vector_distance_sum = 0.0;
    
    for(int i=0; i<size; i++){
        double diff = vectorA[i] - vectorB[i];
        vector_distance_sum += diff * diff;
    }
    
    return sqrt(vector_distance_sum);
}

// vector_angle
double vector_angle(int size, double *vectorA, double *vectorB){
    if(size <= 0 || vectorA == NULL || vectorB == NULL) return 0.0;

    double magA = vector_magnitude(size, vectorA);
    double magB = vector_magnitude(size, vectorB);
    
    if(magA == 0.0 || magB == 0.0) return 0.0; 
    
    double cos_theta = vector_dot_product(size, vectorA, vectorB) / (magA * magB);
    
    if(cos_theta > 1.0) cos_theta = 1.0;
    if(cos_theta < -1.0) cos_theta = -1.0;
    
    return acos(cos_theta);
}

// vector_cosine_similarity
double vector_cosine_similarity(int size, double *vectorA, double *vectorB) {
    if (size <= 0 || vectorA == NULL || vectorB == NULL) return 0.0;
    
    double magA = vector_magnitude(size, vectorA);
    double magB = vector_magnitude(size, vectorB);
    
    if (magA == 0.0 || magB == 0.0) return 0.0;
    
    double cos_sim = vector_dot_product(size, vectorA, vectorB) / (magA * magB);
    
    // valid range [-1.0, 1.0]
    if (cos_sim > 1.0) return 1.0;
    if (cos_sim < -1.0) return -1.0;
    
    return cos_sim;
}

// vector_projection
void vector_projection(int size, double *vectorA, double *vectorB, double *result_vectors){
    if(size <= 0 || vectorA == NULL || vectorB == NULL || result_vectors == NULL) return;
    
    // We project A onto B, magnitude squared of B
    double magB = vector_magnitude(size, vectorB);
    
    // project zero vector undefined     
    if(magB == 0.0) return;
    
    double dot = vector_dot_product(size, vectorA, vectorB);
    double scalar = dot / (magB * magB); // (A · B) / ||B||²
    
    for(int i = 0; i < size; i++){
        result_vectors[i] = scalar * vectorB[i];
    }
    
}

// vector_rejection
void vector_rejection(int size, double *vectorA, double *vectorB, double *result_vectors) {
    if (size <= 0 || vectorA == NULL || vectorB == NULL || result_vectors == NULL) return;
    
    // Magnitude squared of vector B (||B||^2)
    double magB = vector_magnitude(size, vectorB);
    
    // Cannot reject to a zero vector
    if (magB == 0.0) return;
    
    double magB_sq = magB * magB;
    double dot = vector_dot_product(size, vectorA, vectorB);
    
    // Projection scalar: k = (A · B) / ||B||²
    double k = dot / magB_sq;
    
    //  A - (k * B)
    for (int i = 0; i < size; i++) {
        result_vectors[i] = vectorA[i] - (k * vectorB[i]);
    }
}

// vector_sum
double vector_sum(int size, double *vector){
    if(size<=0 || vector == NULL) return -1;
    
    double V_sum = 0.0;
    
    for(int i=0; i<size; i++){
        V_sum += vector[i]; 
    }
    // sum of all the vectors
    return V_sum;
}

// vector_mean
double vector_mean(int size, double *vector){
    if(size<=0 || vector == NULL) return -1;
    
    return vector_sum(size, vector) /size;
}

// vector_max
double vector_max(int size, double *vector){
    if(size<=0 || vector == NULL) return -1;
    
    double V_max = vector[0];
    
    for(int i=1; i<size; i++){
        if(vector[i] > V_max) V_max = vector[i];
    }
    
    return V_max;
}

// vector_min
double vector_min(int size, double *vector){
    if(size<=0 || vector == NULL) return -1;
    
    double V_min = vector[0];
    
    for(int i=1; i<size; i++){
        if(vector[i] < V_min ) V_min = vector[i];
    }
    
    return V_min;
}

// vector_l1_norm
double vector_l1_norm(int size, double *vector){
    if(size <= 0 || vector == NULL) return -1;

    double V_l1_norm_sum = 0.0;

    for(int i = 0; i < size; i++){
        V_l1_norm_sum += fabs(vector[i]);
    }

    return V_l1_norm_sum;
}

// vector_infinity_norm
double vector_infinity_norm(int size, double *vector){
    if(size <= 0 || vector == NULL) return -1;

    double V_infinity_norm = fabs(vector[0]);

    for(int i = 1; i < size; i++){
        if(fabs(vector[i]) > V_infinity_norm)
            V_infinity_norm = fabs(vector[i]);
    }

    return V_infinity_norm;
}

// vector_is_zero
int vector_is_zero(int size, double *vector){

    if(size <= 0 || vector == NULL) return -1; // undefined

    if(fabs(vector_magnitude(size, vector)) < 1e-9)
        return 1; // true

    return 0; // false
}

// vector_is_unit
int vector_is_unit(int size, double *vector){

    if(size <= 0 || vector == NULL) return -1; // undefined

    if(fabs(vector_magnitude(size, vector) - 1.0) < 1e-9)
        return 1; // true

    return 0; // false
}

// vector_is_orthogonal
int vector_is_orthogonal(int size, double *vectorA, double *vectorB){

    if(size <= 0 || vectorA == NULL || vectorB == NULL)
        return -1; // undefined

    if(fabs(vector_dot_product(size, vectorA, vectorB)) < 1e-9)
        return 1; // true

    return 0; // false
}

// vector_is_parallel
int vector_is_parallel(int size, double *vectorA, double *vectorB){

    if(size <= 0 || vectorA == NULL || vectorB == NULL)
        return -1; // undefined

    double ratio = 0.0;
    int ratioFound = 0;

    for(int i = 0; i < size; i++){

        // Both are zero -> skip
        if(fabs(vectorA[i]) < 1e-9 && fabs(vectorB[i]) < 1e-9)
            continue;

        // One is zero and the other isn't
        if((fabs(vectorA[i]) < 1e-9 && fabs(vectorB[i]) >= 1e-9) ||
           (fabs(vectorA[i]) >= 1e-9 && fabs(vectorB[i]) < 1e-9))
            return 0;

        if(!ratioFound){
            ratio = vectorA[i] / vectorB[i];
            ratioFound = 1;
        }
        else{
            if(fabs((vectorA[i] / vectorB[i]) - ratio) > 1e-9)
                return 0;
        }
    }

    return 1;
}

// statistics 

// vector_variance
double vector_variance(int size, double *vector, int option){

    if(size <= 0 || vector == NULL) return -1;

    if(option != 0 && option != 1) return -1;

    if(option == 1 && size < 2) return -1;

    double vector_mean_result = vector_mean(size, vector);
    double sum_of_subtruct_squares = 0.0;

    for(int i = 0; i < size; i++){
        sum_of_subtruct_squares += (vector[i] - vector_mean_result) * (vector[i] - vector_mean_result);
    }

    return sum_of_subtruct_squares / (size - option);
}

// vector_standard_deviation
double vector_standard_deviation(int size, double *vector, int option){
    if(size <= 0 || vector == NULL) return -1;

    if(option != 0 && option != 1) return -1;

    if(option == 1 && size < 2) return -1;

    // option = 1 -> sample
    // option = 0 -> population
    double V_variance = vector_variance(size, vector, option);

    return sqrt(V_variance);
}

// Transformations vectors funcs 
// vector_reverse
void vector_reverse(int size, double *vector, double *result_vectors){
    if(size <= 0 || vector == NULL || result_vectors == NULL) return;
    
    for(int i = 0; i < size; i++){
        result_vectors[i] = vector[size - 1 - i];
    }
}