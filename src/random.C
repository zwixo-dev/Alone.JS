#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <time.h>


// Basic
int random_int(void){
    return rand();
}

double random_double(void){
    return (double)rand() / RAND_MAX;
}

int random_bool(void){
    
    if (rand() % 2 == 0){
        return true;
        
    } else{
        return false;
    }
    
}

int random_sign(void){
    
    const char *charset =
    "abcdefghijklmnopqrstuvwxyz"
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    "0123456789"
    "!@#$%^&*()_+-=[]{}|;:',.<>/?`~\\\"";
    
    return charset[rand() % (sizeof(charset) -1)];
}

// Range
int random_int_range(int min, int max){
    
    return (min + rand() % (max - min + 1));
}

double random_double_range(double min, double max){
    double rand_double_num = random_double();
    
    return min + rand_double_num * (max - min);
}

// Arrays
void random_fill_int(int size, int *array, int min, int max) {

    if (size <= 0 || array == NULL) return; 

    for (int i = 0; i < size; i++) {
        array[i] = min + rand() % (max - min + 1); 
    }
}

void random_fill_double(int size, double *array, double min, double max){
    if(size <= 0|| array == NULL) return;
    
    for(int i = 0; i < size; i++){
        array[i] = random_double_range(min, max); 
    }
    
}

void random_shuffle(int size, double *array);