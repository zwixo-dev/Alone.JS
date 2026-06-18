#include "../include/statistics.h"
#include "../include/operations.h"

// adding the sort function instead of write each time inside the functions 

void sorting(int size, double *arr){
    double temp;

    // sorting
    for (int i = 0; i < size - 1; i++) {
        for (int j = i + 1; j < size; j++) { 
            if (arr[i] > arr[j]) {   
                temp = arr[i]; 
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// array_mean
double array_mean(int size, double *arr){

    if(size<=0) return 0.0;

    double count = 0.0;
    
    for(int i=0; i<size; i++){
        count += arr[i];
    }
    
    return count / size;
}

//array_median
double array_median(int size, double *arr) {
    
    if(size<=0) return -1; // failed

    sorting(size, arr);    

    int middle = size / 2; 
    
    if (size % 2 != 0) {
        return arr[middle];
    } else {
        return (arr[middle - 1] + arr[middle]) / 2.0; 
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


// array_mode

double array_mode(int size, double *arr) {

    if(size<=0) return -1.0;
    if(size==1) return arr[0];

    int count = 0;
    int maxCount = 0; 
    double maxValue = 0.0;
    
    for(int i = 0; i < size; i++) {
        count = 0;
        for (int j = 0; j < size; j++) {
            if(arr[i] == arr[j]) {
                count++;
            }
        }
        
        if(count > maxCount) {
            maxCount = count;
            maxValue = arr[i];
        }
    }
    
    if(maxCount == 1) {
        return -1.0; 
    }
    
    return maxValue;
}

//  array_percentile
double array_percentile(int size, double *arr, double value) {
    if (size <= 0) return 0.0;

    int index = 0;
    
    while (index < size && arr[index] < value) {
        index++;
    }
    
    return ((double)index / size) * 100.0;
}

// array_quartiles
double array_quartiles(int size, double *arr, double Q){
    if(size<=0) return -1;
    if(size==1) return arr[0];
    if(!(Q==0.25||Q==0.5||Q==0.75)) return -1;
    
    // Q1 = 0.25 * (n-1)
    // Q2 = 0.5 * (n-1)
    // Q3 = 0.75 * (n-1)
    sorting(size, arr);
    double position = Q*(size-1);
    
    int lowerIndx = (int)position;
    int upperIndx = lowerIndx+1;
    double fraction = position-lowerIndx;
    
    if(fraction==0.0){
        return arr[lowerIndx];
    }
    // (12, 3, 5, 7, 14, 21, 8\)
    return arr[lowerIndx] + fraction * (arr[upperIndx] - arr[lowerIndx]);
}