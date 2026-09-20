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