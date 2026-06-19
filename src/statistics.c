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

// array_iqr

double array_iqr(int size, double *arr){
    
    if(size<=0) return -1; 
    if(size==1) return 0.0;
    
    double Q1 = array_quartiles(size, arr, 0.25); 
    double Q3 = array_quartiles(size, arr, 0.75);

    // Q3- Q1
    return Q3-Q1;
}

double array_skewness(int size, double *arr){
    
    if(size<=1) return 0.0;
    
    double stddev = array_stddev(size, arr);
    
    if(stddev==0.0){
        return 0.0;
    }
    
    double mean = array_mean(size, arr);
    double median = array_median(size, arr);
    
    return ((3*(mean-median))/stddev);
}


double array_kurtosis(int size, double *arr, double s){
    // Kurtosis very small samples
    if (size < 4 || s <= 0.0) {
        return 0.0; 
    }
    
    double mean = array_mean(size, arr);
    double sum_fourth_moment = 0.0;
    
    for(int i = 0; i < size; i++){
        double deviation = arr[i] - mean;
        sum_fourth_moment += power(deviation, 4);
    }
    
    return ( (sum_fourth_moment / (size * power(s, 4)) ) );
}

//array_covariance
double array_covariance(int size, double *arr_x, double *arr_y){
    if(size<=1) return 0.0;
    
    // \(\text{Cov}(X, Y) = \frac{\sum_{i=1}^{n} (X_i - \overline{X})(Y_i - \overline{Y})}{n - 1}\)
  
    double mean_x = array_mean(size, arr_x);
    double mean_y = array_mean(size, arr_y);
    double sum_of_sbustrcutValues = 0.0; 
    
    for(int i=0; i<size; i++){
        sum_of_sbustrcutValues+= (arr_x[i] - mean_x) * (arr_y[i] - mean_y);
    }
    
    return (sum_of_sbustrcutValues/(size-1));
}
//array_normalize
double array_normalize(int size, double *arr, double *output_arr){
    
    if(size<=1) return 0.0;
    
    double minVal = arr[0], maxVal = arr[0];
    
    for(int i=1; i<size; i++){
        if(arr[i]<minVal){
            minVal = arr[i];
        } else{
            maxVal = arr[i];
        }
    }
    
    double range = maxVal - minVal;
    
    if(range==0.0){
        for(int i=0; i<size; i++){
            output_arr[i] = 0.0;
        }
    }
    
    for(int i=0; i<size; i++){
       output_arr[i] = ( (arr[i] - minVal) / range ); 
    }
}