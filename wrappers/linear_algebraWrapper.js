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
        lerp_vector: Module.cwrap("lerp_vector", null, ["number", "number", "number", "number", "number"]),
        lerp_points_2d: Module.cwrap("lerp_points_2d", null, ["number", "number", "number", "number"]),
        lerp_points_3d: Module.cwrap("lerp_points_3d", null, ["number", "number", "number", "number"]),
        rotate_point_2d: Module.cwrap("rotate_point_2d", null, ["number", "number", "number", "number"]),
        scale_point_2d: Module.cwrap("scale_point_2d", null, ["number", "number", "number", "number", "number"]),
        translate_point_2d: Module.cwrap("translate_point_2d", null, ["number", "number", "number", "number", "number"]),
        shear_point_2d: Module.cwrap("shear_point_2d", null, ["number", "number", "number", "number", "number"]),
        reflect_point_2d: Module.cwrap("reflect_point_2d", null, ["number", "number", "number", "number", "number"]),
        transform_point_2d: Module.cwrap("transform_point_2d", null, ["number", "number", "number", "number", "number", "number", "number", "number"]),
        rotate_around_point_2d: Module.cwrap("rotate_around_point_2d", null, ["number", "number", "number", "number", "number", "number"]),
        rotate_vector_2d: Module.cwrap("rotate_vector_2d", null, ["number", "number", "number", "number"]),
        rotate_point_3d_x: Module.cwrap("rotate_point_3d_x", null, ["number", "number", "number", "number", "number"]),
        rotate_point_3d_y: Module.cwrap("rotate_point_3d_y", null, ["number", "number", "number", "number", "number"]),
        rotate_point_3d_z: Module.cwrap("rotate_point_3d_z", null, ["number", "number", "number", "number", "number"]),
        rotate_point_3d: Module.cwrap("rotate_point_3d", null, ["number", "number", "number", "number", "number", "number", "number"]),
        scale_point_3d: Module.cwrap("scale_point_3d", null, ["number", "number", "number", "number", "number", "number", "number"]),
        translate_point_3d: Module.cwrap("translate_point_3d", null, ["number", "number", "number", "number", "number", "number", "number"]),
        reflect_point_3d: Module.cwrap("reflect_point_3d", null, ["number", "number", "number", "number", "number", "number", "number"]),
        rotate_around_point_3d: Module.cwrap("rotate_around_point_3d", null, ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]),
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

    const vector_A = [0.0, 0.0];
    const vector_B = [10.0, 10.0];

    console.log("==================== wrappers Test ====================\n")
    console.log("Lerp func : ", lerp(0, 10, 0.5));
    console.log("inverse_lerp func : ", inverse_lerp(0, 10, 25));
    console.log("remap func : ", remap(5, 0, 10, 0, 100));
    console.log("smoothstep : ", smoothstep(0, 1, 0.4));
    console.log("smootherstep : ", smootherstep(0, 1, 0.4));
    console.log("clamp : ", clamp(20, 5, 30))
    console.log("lerp_vector : ", lerp_vector(vector_A, vector_B, 0.5));
    console.log("lerp_points_2d : ", lerp_points_2d([-5, 2], [5, -2], 0.25));
    console.log("lerp_points_3d : ", lerp_points_3d([1, 2, 3], [4, 6, 11], 0.25));
    console.log("rotate_point_2d : ", rotate_point_2d(1, 0, angle=Math.PI/2));
    console.log("scale_point_2d : ", scale_point_2d(x=2, y=3, scale_x=2, scale_y=3));
    console.log("translate_point_2d : ", translate_point_2d(x=1, y=2, tx=4, ty=6));
    console.log("shear_point_2d : ", shear_point_2d(x=2 , y=3 , shear_x=1.5 , shear_y=2));
    console.log("reflect_point_2d : ", reflect_point_2d(x=3 , y=4 , axis_x=3, axis_y=-4));
    console.log("transform_point_2d : ", transform_point_2d(x=2 , y= 4, tx=4, ty=2, rotation=20*Math.PI/180, scale_x=3, scale_y=5));
    console.log("rotate_around_point_2d : ", rotate_around_point_2d(x=1, y= 0, center_x= 0, center_y= 0, angle= 90 * Math.PI / 180));
    console.log("rotate_vector_2d : ", rotate_vector_2d(x=2, y=3, angle=90*Math.PI/180));
    console.log("rotate_point_3d_x : ", rotate_point_3d_x(x= 2, y= 4, z= 511, angle= 114*Math.PI/180));
    console.log("rotate_point_3d_y : ", rotate_point_3d_y(x= 2, y=4, z= 511 , angle=90 * Math.PI / 180));
    console.log("rotate_point_3d_z : ", rotate_point_3d_z(x= 2, y=4, z= 511 , angle=90 * Math.PI / 180));
    console.log("rotate_point_3d : ", rotate_point_3d(x=2 , y=4 , z=511 , angle_x=90 * Math.PI / 180, angle_y=90 * Math.PI / 180, angle_z=90 * Math.PI / 180));
    console.log("scale_point_3d : ", scale_point_3d(x=2, y=3, z=4, scale_x=1.5, scale_y=2, scale_z=0.5));
    console.log("translate_point_3d : ", translate_point_3d(x=2, y=3, z=5, tx=4, ty=7, tz=9));
    console.log("reflect_point_3d : ", reflect_point_3d(x= 2, y=3, z=1, nx=2, ny=4, nz=5)); // NOT CORRECT for now
    console.log("rotate_around_point_3d  : ", rotate_around_point_3d(x=2, y=3, z=4, cx=1, cy=1, cz=1, angle_x=90*Math.PI/180, angle_y=0, angle_z=0))
}



function lerp(a, b, t) {
    // lerp result
    const lerp = linear_algebra.lerp(a, b, t);

    return lerp;
}

function inverse_lerp(a, b, value) {
    // inverse_lerp resut 
    const inverse_lerp = linear_algebra.inverse_lerp(a, b, value);

    return inverse_lerp;
}

// double value, double in_min, double in_max, double out_min, double out_max
function remap(value, in_min, in_max, out_min, out_max) {
    // remap result
    const remap = linear_algebra.remap(value, in_min, in_max, out_min, out_max);

    return remap;
}

// double edge0, double edge1, double x
function smoothstep(edge0, edge1, x) {
    // smoothstep result
    const smoothstep = linear_algebra.smoothstep(edge0, edge1, x)

    return smoothstep;
}

// double edge0, double edge1, double x
function smootherstep(edge0, edge1, x) {
    // smootherstep result
    const smootherstep = linear_algebra.smootherstep(edge0, edge1, x);

    return smootherstep;
}

// clamp  double value, double min, double max
function clamp(value, min, max) {
    // clamp result
    const clamp = linear_algebra.clamp(value, min, max);

    return clamp;
}

// ----------------------------------------------------------

// func to allocate memory
function allocateMemory(size, vector) {
    const pointer = Module._malloc(size * 8);

    Module.HEAPF64.set(vector, pointer / 8);

    return pointer;
}

// func to liberate
function liberation(pointer) {
    Module._free(pointer);
}

// lerp_vector(int size, const double *vectorA, const double *vectorB, double t, double *result)
function lerp_vector(vectorA, vectorB, t) {
    if (!Array.isArray(vectorA) || !Array.isArray(vectorB) || vectorA.length !== vectorB.length) return NaN;

    const pointerA = allocateMemory(vectorA.length, vectorA);
    const pointerB = allocateMemory(vectorB.length, vectorB);
    const outputPointer = Module._malloc(vectorA.length * 8);

    linear_algebra.lerp_vector(vectorA.length, pointerA, pointerB, t, outputPointer);
    //  lerp_vector result
    const lerp_vector = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + vectorA.length
        )
    );

    liberation(pointerA);
    liberation(pointerB);
    liberation(outputPointer);

    return lerp_vector;
}

// void lerp_points_2d(const double *vectorA, const double *vectorB, double t, double *result)
function lerp_points_2d(vectorA, vectorB, t) {
    if (!Array.isArray(vectorA) || !Array.isArray(vectorB) || vectorA.length !== 2 || vectorB.length !== 2) return NaN;

    const pointerA = allocateMemory(vectorA.length, vectorA);
    const pointerB = allocateMemory(vectorB.length, vectorB);
    const outputPointer = Module._malloc(vectorA.length * 8);

    linear_algebra.lerp_points_2d(pointerA, pointerB, t, outputPointer);

    const lerp_points_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + vectorA.length
        )
    );

    liberation(vectorA);
    liberation(vectorB);
    liberation(outputPointer);

    return lerp_points_2d;
}

// void lerp_points_3d(const double *vectorA, const double *vectorB, double t, double *result);

function lerp_points_3d(vectorA, vectorB, t){
    if(!Array.isArray(vectorA) || !Array.isArray(vectorB) || vectorA.length !== 3 || vectorB.length !== 3) return NaN;

    const pointerA = allocateMemory(vectorA.length, vectorA);
    const pointerB = allocateMemory(vectorB.length, vectorB);
    const outputPointer = Module._malloc(vectorA.length * 8);

    linear_algebra.lerp_points_3d(pointerA, pointerB, t, outputPointer);

    const lerp_points_3d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + vectorA.length
        )
    ); 


    liberation(pointerA);
    liberation(pointerB);
    liberation(outputPointer);

    return lerp_points_3d;
}

// void rotate_point_2d(double x, double y, double angle, double *result);
function rotate_point_2d(x_pos, y_pos, angle){
    const positions = [x_pos, y_pos];
    const outputPointer =  Module._malloc(positions.length * 8);

    linear_algebra.rotate_point_2d(positions[0], positions[1], angle, outputPointer);

    const rotate_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);
    return rotate_point_2d;
}

// void scale_point_2d(double x, double y, double scale_x, double scale_y, double *result);
function scale_point_2d(x, y, scale_x, scale_y){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.scale_point_2d(positions[0], positions[1], scale_x, scale_y, outputPointer);
    
    const scale_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length  
        )
    );

    liberation(outputPointer);

    return scale_point_2d;
}

// void translate_point_2d(double x, double y, double tx, double ty, double *result);
function translate_point_2d(x, y, tx, ty){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);
    
    linear_algebra.translate_point_2d(positions[0], positions[1], tx, ty, outputPointer);

    const translate_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(translate_point_2d);
    
    return translate_point_2d;
}

// void shear_point_2d(double x, double y, double shear_x, double shear_y, double *result);
function shear_point_2d(x, y, shear_x, shear_y){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.shear_point_2d(positions[0], positions[1], shear_x, shear_y, outputPointer);

    const shear_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);

    return shear_point_2d;
}

// void reflect_point_2d(double x, double y, double axis_x, double axis_y, double *result);
function reflect_point_2d(x, y, axis_x, axis_y){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.reflect_point_2d(positions[0], positions[1], axis_x, axis_y, outputPointer);

    const reflect_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);

    return reflect_point_2d;
}

// void transform_point_2d(double x, double y, double tx, double ty, double rotation, double scale_x, double scale_y, double *result);
function transform_point_2d(x, y, tx, ty, rotation, scale_x, scale_y){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.transform_point_2d(positions[0], positions[1], tx, ty, rotation, scale_x, scale_y, outputPointer);

    const transform_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);

    return transform_point_2d;
}

// void rotate_around_point_2d(double x, double y, double center_x, double center_y, double angle, double *result);
function rotate_around_point_2d(x, y, center_x, center_y, angle){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_around_point_2d(positions[0], positions[1],center_x, center_y, angle, outputPointer);

    const rotate_around_point_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);

    return rotate_around_point_2d;
}

//void rotate_vector_2d(double x, double y, double angle, double *result);
function rotate_vector_2d(x, y, angle){
    const positions = [x, y];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_vector_2d(positions[0], positions[1], angle, outputPointer);

    const rotate_vector_2d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);

    return rotate_vector_2d;
}

// void rotate_point_3d_x(double x, double y, double z, double angle, double *result);
function rotate_point_3d_x(x, y, z, angle){
    const positions = [x, y,  z];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_point_3d_x(positions[0], positions[1], positions[2], angle, outputPointer);

    const rotate_point_3d_x = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length
        )
    );

    liberation(outputPointer);
    
    return rotate_point_3d_x;
}

// void rotate_point_3d_y(double x, double y, double z, double angle, double *result);
function rotate_point_3d_y(x, y, z, angle){
    const positions = [x, y, z];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_point_3d_y(positions[0], positions[1], positions[2], angle, outputPointer);

    const rotate_point_3d_y = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return rotate_point_3d_y
}

// void rotate_point_3d_z(double x, double y, double z, double angle, double *result);
function rotate_point_3d_z(x, y, z, angle){
    const positions = [x, y, z];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_point_3d_z(positions[0], positions[1], positions[2], angle, outputPointer);

    const rotate_point_3d_z = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return rotate_point_3d_z;
}

// void rotate_point_3d(double x, double y, double z, double angle_x, double angle_y, double angle_z, double *result);
function rotate_point_3d(x, y, z, angle_x, angle_y, angle_z){
    const positions = [x, y, z];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_point_3d(positions[0], positions[1], positions[2], angle_x, angle_y, angle_z, outputPointer);

    const rotate_point_3d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return rotate_point_3d;
}
// void scale_point_3d(double x, double y, double z, double scale_x, double scale_y, double scale_z, double *result);
function scale_point_3d(x, y, z, scale_x, scale_y, scale_z){
    const positions = [x, y, z];
    
    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.scale_point_3d(positions[0], positions[1], positions[2], scale_x, scale_y, scale_z, outputPointer);

    const scale_point_3d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return scale_point_3d;
}


// translate_point_3d
// void translate_point_3d(double x, double y, double z, double tx, double ty, double tz, double *result);
function translate_point_3d(x, y, z, tx, ty, tz){
    const positions = [x, y, z];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.translate_point_3d(positions[0], positions[1], positions[2], tx, ty, tz, outputPointer);

    const translate_point_3d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return translate_point_3d;
}

// reflect_point_3d
// void reflect_point_3d(double x, double y, double z, double nx, double ny, double nz, double *result);
function reflect_point_3d(x, y, z, nx, ny, nz){
    const positions = [x, y, z];

    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.reflect_point_3d(positions[0], positions[1], positions[2], nx, ny, nz, outputPointer);

    const reflect_point_3d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return reflect_point_3d;
}

// rotate_around_point_3d
// rotate_around_point_3d(double x, double y, double z, double cx, double cy, double cz, double angle_x, double angle_y, double angle_z, double *result)
function rotate_around_point_3d(x, y, z, cx, cy, cz, angle_x, angle_y, angle_z){
    const positions = [x, y, z];
    
    const outputPointer = Module._malloc(positions.length * 8);

    linear_algebra.rotate_around_point_3d(positions[0], positions[1], positions[2], cx, cy, cz, angle_x, angle_y, angle_z, outputPointer);

    const rotate_around_point_3d = Array.from(
        Module.HEAPF64.subarray(
            outputPointer / 8,
            outputPointer / 8 + positions.length      
        )
    );

    liberation(outputPointer);

    return rotate_around_point_3d;
}
// transform_point_3d
// cartesian_to_polar
// polar_to_cartesian
// cartesian_to_spherical
// spherical_to_cartesian
// cartesian_to_cylindrical