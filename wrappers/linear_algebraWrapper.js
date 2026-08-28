const Module = require("../wasm/linear_algebraWrapper");

let linear_algebra;

Module.onRuntimeInitialized = () => {
    linear_algebra = {
        lerp: Module.cwrap("lerp", "number", ["number", "number", "number"]),
        inverse_lerp: Module.cwrap("inverse_lerp", "number", ["number", "number", "number"]),
        // remap,
        // smoothstep,
        // smootherstep,
        // clamp,
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
    console.log("Lerp func : ",lerp(0, 10, 0.5))
    console.log("inverse_lerp func : ", inverse_lerp(0, 10, 25))
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
