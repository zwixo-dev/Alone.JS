#include "../include/matrix.h"

//  array sum
double array_sum(int size, double *getArr){
    double sum = 0;
    
    for(int i =0; i<size; i++){
        sum += getArr[i];
    }
    
    return sum;
}

// array porduct
double array_product(int size, double *getArr){
    double sum=1.0;
    
    for(int i=0; i<size; i++){
        sum *= getArr[i];
    }
    return sum;
}

// array divide
double array_divide(int size, double *getArr){

    double result = getArr[0];

    for(int i = 1; i < size; i++){

        if(getArr[i] == 0){
            return 0;
        }

        result /= getArr[i];
    }

    return result;
}

// array average
double array_average(int size, double *getArr){
    double sumOfValues = array_sum(size, getArr);
    
    return sumOfValues/size;
}

// min of array 
double array_min(int size, double *getArr){
    
    double min = getArr[0];
    
    for(int i =1; i<size; i++){
        if(getArr[i]<min){
            min = getArr[i];
        }
    }
    
    return min; 
}

// max of array 
double array_max(int size, double *getArr){
    double max = getArr[0];
    
    for(int i=1; i<size; i++){
        if(getArr[i]>max){
            max = getArr[i];
        }
    }
    
    return max;
}

double array_range(int size, double *getArr){
    double maxValue  = array_max(size, getArr); 
    double minValue = array_min(size, getArr);
    
    return maxValue - minValue;
}

void matrix_transpose(int rows, int columns, double *matrix, double *matrix_result){
    
    for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            int index_input = x * columns + y;
            int index_output = y * rows + x;
            matrix_result[index_output] = matrix[index_input];
        }
    }
    
}

// 2D arrays
//  
// | 1 2 |           | 1 2 |
// |     |  (-/+/*)  |     |
// | 3 4 |           | 3 4 |

void matrix2d_add(int rows, int columns, double *matrix_1, double *matrix_2,  double *matrix_result ){
    
    for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            int index = x * columns + y;
            matrix_result[index] = matrix_1[index] + matrix_2[index];
        }
    }

}

void matrix2d_subtract(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result){
    
        for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            int index = x * columns + y;
            matrix_result[index] = matrix_1[index] - matrix_2[index];
        }
    }
}

void matrix2d_multiply(int rowsM1, int columnsM1, int rowsM2, int columnsM2, double *matrix_1, double *matrix_2, double *matrix_result){
    
    for(int x=0; x<rowsM1; x++){
        for(int y=0; y<columnsM2; y++){
            for(int k=0; k<columnsM1; k++){
                matrix_result[x*columnsM2+y] +=  matrix_1[x*columnsM1+k] * matrix_2[k* columnsM2+y];
            }
        }
    }
}
