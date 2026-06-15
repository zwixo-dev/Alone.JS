#include "../include/statistics.h"
#include "../include/operations.h"

// array_mean
double array_mean(int size, double *getArr){
    double count = 0.0;
    
    for(int i=0; i<size; i++){
        count += getArr[i];
    }
    
    return count / size;
}

//array_median
double array_median(int size, double *getArr) {
    double temp;
    double tempArr[size];
    
    for(int i = 0; i < size; i++) {
    tempArr[i] = getArr[i];
    }

    // sorting
    for (int i = 0; i < size - 1; i++) {
        for (int j = i + 1; j < size; j++) { 
            if (tempArr[i] > tempArr[j]) {   
                temp = tempArr[i]; 
                tempArr[i] = tempArr[j];
                tempArr[j] = temp;
            }
        }
    }
    
    int middle = size / 2; 
    
    if (size % 2 != 0) {
        return tempArr[middle];
    } else {
        return (tempArr[middle - 1] + tempArr[middle]) / 2.0; 
    }
}

// array_variance

double array_variance(int size, double *arr){
    if (size <= 1) {
        return 0.0; 
    }
    
    double mean = array_mean(size, arr);
    
    double sum_of_subtruct_squares = 0.0;
    
    for(int i=0; i<size; i++){
        sum_of_subtruct_squares+= (arr[i]-mean) * (arr[i]-mean);
    }
    
    return sum_of_subtruct_squares/(size-1);
}

//array_stddev

double array_stddev(int size, double *arr){
    
    double variance = array_variance(size, arr); 
    
    return sqrt(variance);
}
