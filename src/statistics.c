#include "../include/statistics.h"

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
