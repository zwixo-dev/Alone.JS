const Module = require("../wasm/vectors.js");

let vectors;

Module.onRuntimeInitialized = () => {
    vectors = {
        vector_magnitude,
        vector_normalize,
        vector_dot_product,
        vector_cross_product,
        vector_add,
        vector_subtract,
        vector_scalar_multiply,
        vector_scalar_divide,
        vector_distance,
        vector_angle,
        vector_cosine_similarity,
        vector_projection,
        vector_rejection,
        vector_sum,
        vector_mean,
        vector_max,
        vector_min,
        vector_l1_norm,
        vector_infinity_norm,
        vector_is_zero,
        vector_is_unit,
        vector_is_orthogonal,
        vector_is_parallel,
        vector_variance,
        vector_standard_deviation,
        vector_reverse,
        vector_sort_ascending,
        vector_sort_descending,
        vector_hadamard_product_sum,
        vector_hadamard_product,
        vector_abs,
        vector_negate,
        vector_power,
        vector_sqrt,
    }
}
