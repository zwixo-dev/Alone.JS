const Module = require("../wasm/linear_algebraWrapper");

let linear_algebra;

Module.onRuntimeInitialized = () => {
    linear_algebra = {
        lerp: Module.cwrap("lerp", "number", ["number", "number", "number"]),
        inverse_lerp: Module.cwrap("inverse_lerp", "number", ["number", "number", "number"]),
        remap: Module.cwrap("remap", "number", ["number", "number", "number", "number", "number"]),
        smoothstep: Module.cwrap("smoothstep", "number", ["number", "number", "number"]),
        smootherstep: Module.cwrap("smootherstep", "number", ["number", "number", "number"]),
        clamp: Module.cwrap("clamp", "number", ["number", "number", "number"]),
        // lerp_vector,
        // lerp_points_2d,
        // lerp_points_3d,
        // rotate_point_2d,
        // scale_point_2d,
        // translate_point_2d,
        // shear_point_2d,
        // reflect_point_2d,
        // transform_point_2d,
        // rotate_around_point_2d,
        // rotate_vector_2d,
        // rotate_point_3d_x,
        // rotate_point_3d_y,
        // rotate_point_3d_z,
        // rotate_point_3d,
        // scale_point_3d,
        // translate_point_3d,
        // reflect_point_3d,
        // rotate_around_point_3d,
        // transform_point_3d,
        // cartesian_to_polar,
        // polar_to_cartesian,
        // cartesian_to_spherical,
        // spherical_to_cartesian,
        // cartesian_to_cylindrical,
        // cylindrical_to_cartesian,
        // world_to_screen_2d,
        // screen_to_world_2d,
        // world_to_ndc,
        // ndc_to_screen,
        // screen_to_ndc,
        // perspective_project,
        // perspective_divide,
        // orthographic_project,
        // perspective_project_screen,
        // linear_combination,
        // is_linear_independent
    }
    console.log("==================== wrappers Test ====================\n")
    console.log("Lerp func : ",lerp(0, 10, 0.5));
    console.log("inverse_lerp func : ", inverse_lerp(0, 10, 25));
    console.log("remap func : ", remap(5, 0, 10, 0, 100));
    console.log("smoothstep : ", smoothstep(0, 1, 0.4));
    console.log("smootherstep : ", smootherstep(0, 1, 0.4));
    console.log("clamp : ", clamp(20, 5, 30))
}



function lerp(a, b, t){
    // lerp result
    const lerp = linear_algebra.lerp(a, b, t);

    return lerp;
}

function inverse_lerp(a, b, value){
    // inverse_lerp resut 
    const inverse_lerp = linear_algebra.inverse_lerp(a, b, value);

    return inverse_lerp;
}

// double value, double in_min, double in_max, double out_min, double out_max
function remap(value, in_min, in_max, out_min, out_max){
    // remap result
    const remap = linear_algebra.remap(value, in_min, in_max, out_min, out_max);

    return remap;
}

// double edge0, double edge1, double x
function smoothstep(edge0, edge1, x){
    // smoothstep result
    const smoothstep = linear_algebra.smoothstep(edge0, edge1, x)

    return smoothstep;
}

// double edge0, double edge1, double x
function smootherstep(edge0, edge1, x){
    // smootherstep result
    const smootherstep = linear_algebra.smootherstep(edge0, edge1, x);

    return smootherstep; 
}

// clamp  double value, double min, double max
function clamp(value, min, max){
    // clamp result
    const clamp = linear_algebra.clamp(value, min, max);

    return clamp;
}
