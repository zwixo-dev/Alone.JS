#include "../include/matrix.h"
#include <string.h>
#include <stdlib.h>

//  array sum
double array_sum(int size, double *getArr){
    if (size <= 0 || getArr == NULL) return 0.0;
    double sum = 0;
    
    for(int i =0; i<size; i++){
        sum += getArr[i];
    }
    
    return sum;
}

// array porduct
double array_product(int size, double *getArr){
    if (size <= 0 || getArr == NULL) return 0.0;

    double sum=1.0;
    
    for(int i=0; i<size; i++){
        sum *= getArr[i];
    }
    return sum;
}

// array divide
double array_divide(int size, double *getArr){
    if (size <= 0 || getArr == NULL) return 0.0;

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
    if (size <= 0 || getArr == NULL) return 0.0;

    double sumOfValues = array_sum(size, getArr);
    
    return sumOfValues/size;
}

// min of array 
double array_min(int size, double *getArr){
    if (size <= 0 || getArr == NULL) return 0.0;

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
    if (size <= 0 || getArr == NULL) return 0.0;

    double max = getArr[0];
    
    for(int i=1; i<size; i++){
        if(getArr[i]>max){
            max = getArr[i];
        }
    }
    
    return max;
}

//array_range
double array_range(int size, double *getArr){
    if (size <= 0 || getArr == NULL) return 0.0;

    double maxValue  = array_max(size, getArr); 
    double minValue = array_min(size, getArr);
    
    return maxValue - minValue;
}

//matrix_transpose
void matrix_transpose(int rows, int columns, double *matrix, double *matrix_result){
    if (rows <= 0 || columns <= 0 || matrix == NULL || matrix_result == NULL) return;

    for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            int index_input = x * columns + y;
            int index_output = y * rows + x;
            matrix_result[index_output] = matrix[index_input];
        }
    }
    
}

//matrix2d_scalar_operation
void matrix2d_scalar_operation(int rows, int columns, char *operation, double value, double *matrix, double *matrix_result){
    if (rows <= 0 || columns <= 0 || operation == NULL || matrix == NULL || matrix_result == NULL) return;

    if(strcmp(operation, "+") == 0){
        for(int x=0; x<rows; x++){
            for(int y=0; y<columns; y++){
                matrix_result[x * columns + y] = value + matrix[x * columns + y];
            }
        }
    } 
    
    if(strcmp(operation, "-") == 0){
        for(int x=0; x<rows; x++){
            for(int y=0; y<columns; y++){
                matrix_result[x * columns + y] = value - matrix[x * columns + y];
            }
        }
    }
    
    if(strcmp(operation, "*") == 0){
        for(int x=0; x<rows; x++){
            for(int y=0; y<columns; y++){
                matrix_result[x * columns + y] = value * matrix[x * columns + y];
            }
        }    
    }
    
    if(strcmp(operation, "/") == 0){
        for(int x=0; x<rows; x++){
            for(int y=0; y<columns; y++){
                matrix_result[x * columns + y] = (1/value) * matrix[x * columns + y];   
            }
        }
    }
    
} 
// 2D arrays
//  
// | 1 2 |           | 1 2 |
// |     |  (-/+/*)  |     |
// | 3 4 |           | 3 4 |

//matrix2d_add
void matrix2d_add(int rows, int columns, double *matrix_1, double *matrix_2,  double *matrix_result ){
    if (rows <= 0 || columns <= 0 || matrix_1 == NULL || matrix_2 == NULL || matrix_result == NULL) return;

    for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            int index = x * columns + y;
            matrix_result[index] = matrix_1[index] + matrix_2[index];
        }
    }

}

//matrix2d_subtract
void matrix2d_subtract(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result){
    if (rows <= 0 || columns <= 0 || matrix_1 == NULL || matrix_2 == NULL || matrix_result == NULL) return;

        for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            int index = x * columns + y;
            matrix_result[index] = matrix_1[index] - matrix_2[index];
        }
    }
}

//matrix2d_multiply
void matrix2d_multiply(int rowsM1, int columnsM1, int rowsM2, int columnsM2, double *matrix_1, double *matrix_2, double *matrix_result){
    // checking the C of Matrix1 == R of Matirx2
    if (rowsM1 <= 0 || columnsM1 <= 0 || rowsM2 <= 0 || columnsM2 <= 0 || matrix_result == NULL) return;
    if (columnsM1 != rowsM2) return;
    if (matrix_1 == NULL || matrix_2 == NULL || matrix_result == NULL) return;

    for(int x=0; x<rowsM1; x++){
        for(int y=0; y<columnsM2; y++){
            for(int k=0; k<columnsM1; k++){
                matrix_result[x*columnsM2+y] +=  matrix_1[x*columnsM1+k] * matrix_2[k* columnsM2+y];
            }
        }
    }
}

// get Submatrices
void get_submatrix(int size, double *matrix, double *submatrix, int excluding_row, int excluding_col) {
    
    if (matrix == NULL || submatrix == NULL || size <= 1) return;
    if (excluding_row < 0 || excluding_row >= size || excluding_col < 0 || excluding_col >= size) return;

    int sub_row = 0, sub_col = 0;
    
    for (int r = 0; r < size; r++) {
        if (r == excluding_row) continue;
        
        sub_col = 0;
        for (int c = 0; c < size; c++) {
            if (c == excluding_col) continue;
            
            // Map 2D to 1D 
            submatrix[sub_row * (size - 1) + sub_col] = matrix[r * size + c];
            sub_col++;
        }
        sub_row++;
    }
}

//Determinant Function
double matrix_determinant(int rows, int columns, double *matrix) {
    
    if (rows != columns || rows <= 0 || matrix == NULL) {
        return 0.0; 
    }
    
    // Base Case 1: 1x1 Matrix
    if (rows == 1) return matrix[0]; 
    
    // Base Case 2: 2x2 Matrix (ad - bc)
    if (rows == 2) {
        return (matrix[0] * matrix[3]) - (matrix[1] * matrix[2]); 
    }
    
    double *submatrix = (double *)malloc((rows - 1) * (columns - 1) * sizeof(double));
    if (submatrix == NULL) return 0.0;
    
    double det = 0.0;
    
    for (int y = 0; y < columns; y++) {
        // Exclude row 0 and current column y
        get_submatrix(rows, matrix, submatrix, 0, y);

        double sign = (y % 2 == 0) ? 1.0 : -1.0;
        
        det += sign * matrix[y] * matrix_determinant(rows - 1, columns - 1, submatrix);
    }
        
    free(submatrix);
    return det;
}

// matrix cofactor 
void matrix_cofactor(int rows, int columns, double *matrix, double *matrix_result) {
    if (rows != columns || rows <= 1 || matrix == NULL || matrix_result == NULL) return;
    
    int size = rows;
    // =sub-matrix evaluations
    double *submatrix = (double *)malloc((rows - 1) * (columns - 1) * sizeof(double));
    if (submatrix == NULL) return;

    for (int x = 0; x < rows; x++) {
        for (int y = 0; y < columns; y++) {
            get_submatrix(rows, matrix, submatrix, x, y);
            
            double sign = ((x + y) % 2 == 0) ? 1.0 : -1.0;
            matrix_result[x * columns + y] = sign * matrix_determinant(rows - 1, columns-1, submatrix);
        }
    }
    
    free(submatrix);
}

// matrix_inverse
void matrix_inverse(int rows, int columns, double *matrix, double *matrix_result){
    if(rows <= 0 || columns <= 0 || rows != columns || matrix == NULL || matrix_result == NULL) return;
    
    double det = matrix_determinant(rows, columns, matrix);
    
    if(det == 0.0) return;
    
    // Handle 1x1 Matrix 
    if(rows == 1) {
        matrix_result[0] = 1.0 / matrix[0];
        return;
    }
    
    double *cofactorMatrix = (double *)malloc(rows * columns * sizeof(double));
    double *adjMatrix = (double *)malloc(rows * columns * sizeof(double));

    if (cofactorMatrix == NULL || adjMatrix == NULL){
        free(cofactorMatrix);
        free(adjMatrix);
        return;
    }
    
    // cofactor of the matrix
    matrix_cofactor(rows, columns, matrix, cofactorMatrix);
    
    // transpose the matrix
    matrix_transpose(rows, columns, cofactorMatrix, adjMatrix);
    
    // result
    for(int x = 0; x < rows; x++){
        for(int y = 0; y < columns; y++){
            matrix_result[x * columns + y] = (1.0 / det) * adjMatrix[x * columns + y];
        }
    }
    
    free(cofactorMatrix);
    free(adjMatrix);
}

//matrix_trace
double matrix_trace(int rows, int columns, double *matrix){
    if(rows<=0 || columns <=0 || rows!=columns || matrix == NULL){
       return 0.0; 
    }
    double sum = 0.0;
    for(int x = 0; x < rows; x++){
        sum += matrix[x*columns+x];
    }
    return sum;
}

//matrix_identity
void matrix_identity(int rows, int columns, double *matrix_result){
    if(rows<=0 || columns<=0 || rows!=columns || matrix_result==NULL ) return;
    
    for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            if(x==y){
                matrix_result[x * columns + y] = 1;
            } else{
                matrix_result[x * columns + y] = 0;
            }
            
        }
    }
}

//matrixHadamard_product
void matrixHadamard_product(int rows, int columns, double *matrix_1, double *matrix_2, double *matrix_result){
    if(rows<=0 || columns<=0 || matrix_1==NULL || matrix_2==NULL || matrix_result==NULL) return;
    
    for(int x=0; x<rows; x++){
        for(int y=0; y<columns; y++){
            matrix_result[x * columns + y] = matrix_1[x * columns + y] * matrix_2[x * columns + y];
        }
    }
}

// is the matrix sigular or not
int matrix_is_singular(int rows, int columns, double *matrix){
    // invalid or notsquare
    if(rows <= 0 || columns <= 0 || rows != columns || matrix == NULL) {
        return -1; 
    }
    
    double det = matrix_determinant(rows, columns, matrix);
    
    if(det == 0.0){
        return 1; // true The matrix is singular
    }
    
    return 0; //false The matrix is not singular/invertible
}

// matrix_is_invertible
int matrix_is_invertible(int rows, int columns, double *matrix){
    if(rows<=0 || columns<=0 || rows!=columns || matrix==NULL) return -1; // not found
    
    // if the matrix singular so it's not invertible
    // if the matrrix not singular so it's invertible

    return !matrix_is_singular(rows, columns, matrix);
    
}