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