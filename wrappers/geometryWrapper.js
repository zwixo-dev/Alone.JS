const Module = require("../wasm/geometry.js");


let geometry;


Module.onRuntimeInitialized = () => {

    geometry = {
        geometry_distance_2d: Module.cwrap("geometry_distance_2d", "number", ["number", "number", "number", "number"]),
        geometry_distance_3d: Module.cwrap("geometry_distance_3d", "number", ["number", "number", "number", "number", "number", "number"]),
        geometry_midpoint_x: Module.cwrap("geometry_midpoint_x", "number", ["number", "number"]),
        geometry_midpoint_y: Module.cwrap("geometry_midpoint_y", "number", ["number", "number"]),
        geometry_slope: Module.cwrap("geometry_slope", "number", ["number", "number"]),
        triangle_area: Module.cwrap("triangle_area", "number", ["number", "number"]),
        triangle_perimeter: Module.cwrap("triangle_perimeter", "number", ["number", "number"]),
        triangle_semiperimeter: Module.cwrap("triangle_semiperimeter", "number", ["number", "number"]),
        triangle_heron_area: Module.cwrap("triangle_heron_area", "number", ["number", "number"]),
        triangle_is_valid: Module.cwrap("triangle_is_valid", "number", ["number", "number"]),
        triangle_is_equilateral: Module.cwrap("triangle_is_equilateral", "number", ["number", "number"]),
        triangle_is_isosceles: Module.cwrap("triangle_is_isosceles", "number", ["number", "number"]),
        triangle_is_scalene: Module.cwrap("triangle_is_scalene", "number", ["number", "number"]),
        triangle_is_right: Module.cwrap("triangle_is_right", "number", ["number", "number"]),
        rectangle_area: Module.cwrap("rectangle_area", "number", ["number", "number"]),
        rectangle_perimeter: Module.cwrap("rectangle_perimeter", "number", ["number", "number"]),
        rectangle_diagonal: Module.cwrap("rectangle_diagonal", "number", ["number", "number"]),
        square_area: Module.cwrap("square_area", "number", ["number", "number"]),
        square_perimeter: Module.cwrap("square_perimeter", "number", ["number", "number"]),
        square_diagonal: Module.cwrap("square_diagonal", "number", ["number", "number"]),
        circle_area: Module.cwrap("circle_area", "number", ["number", "number"]),
        circle_circumference: Module.cwrap("circle_circumference", "number", ["number", "number"]),
        circle_diameter: Module.cwrap("circle_diameter", "number", ["number", "number"]),
        circle_arc_length: Module.cwrap("circle_arc_length", "number", ["number", "number"]),
        circle_sector_area: Module.cwrap("circle_sector_area", "number", ["number", "number"]),
        ellipse_area: Module.cwrap("ellipse_area", "number", ["number", "number"]),
        ellipse_perimeter_basic: Module.cwrap("ellipse_perimeter_basic", "number", ["number", "number"]),
        regular_polygon_perimeter: Module.cwrap("regular_polygon_perimeter", "number", ["number", "number"]),
        regular_polygon_area: Module.cwrap("regular_polygon_area", "number", ["number", "number"]),
        polygon_interior_angle_sum: Module.cwrap("polygon_interior_angle_sum", "number", ["number", "number"]),
        regular_polygon_interior_angle: Module.cwrap("regular_polygon_interior_angle", "number", ["number", "number"]),
        cube_volume: Module.cwrap("cube_volume", "number", ["number", "number"]),
        cube_surface_area: Module.cwrap("cube_surface_area", "number", ["number", "number"]),
        cube_space_diagonal: Module.cwrap("cube_space_diagonal", "number", ["number", "number"]),
        cuboid_volume: Module.cwrap("cuboid_volume", "number", ["number", "number"]),
        cuboid_surface_area: Module.cwrap("cuboid_surface_area", "number", ["number", "number"]),
        cuboid_space_diagonal: Module.cwrap("cuboid_space_diagonal", "number", ["number", "number"]),
        cylinder_volume: Module.cwrap("cylinder_volume", "number", ["number", "number"]),
        cylinder_surface_area: Module.cwrap("cylinder_surface_area", "number", ["number", "number"]),
        cylinder_lateral_area: Module.cwrap("cylinder_lateral_area", "number", ["number", "number"]),
        sphere_volume: Module.cwrap("sphere_volume", "number", ["number", "number"]),
        sphere_surface_area: Module.cwrap("sphere_surface_area", "number", ["number", "number"]),
        cone_volume: Module.cwrap("cone_volume", "number", ["number", "number"]),
        cone_surface_area: Module.cwrap("cone_surface_area", "number", ["number", "number"]),
        cone_slant_height: Module.cwrap("cone_slant_height", "number", ["number", "number"]),
        degrees_to_radians: Module.cwrap("degrees_to_radians", "number", ["number", "number"]),
        radians_to_degrees: Module.cwrap("radians_to_degrees", "number", ["number", "number"]),
}

    const coordA = [1, 2]
    const coordB = [2, 4]

    console.log("geometry_distance_2d: ",geometry_distance_2d(coordA, coordB));
    console.log("geometry_distance_3d: ",geometry_distance_3d([1, 2, 3], [4, 5, 6]));
    console.log("geometry_midpoint_x: ",geometry_midpoint_x([1, 2]));
}



// geometry_distance_2d
// double geometry_distance_2d(double x1, double y1, double x2, double y2);
function geometry_distance_2d(coordA, coordB){
    if(!Array.isArray(coordA) || !Array.isArray(coordB) || 
        coordA.length !== coordB.length ) return NaN;

    
    return geometry.geometry_distance_2d(coordA[0], coordA[1], coordB[0], coordB[1]);
}

// double geometry_distance_3d(double x1, double y1, double z1, double x2, double y2, double z2);
// geometry_distance_3d
function geometry_distance_3d(coordA, coordB){
    if(!Array.isArray(coordA) || !Array.isArray(coordB) || 
        coordA.length !== coordB.length ) return NaN;



    return geometry.geometry_distance_3d(coordA[0], coordA[1], coordA[2],
                                         coordB[0], coordB[1], coordB[2]);
}

// double geometry_midpoint_x(double x1, double x2);
// geometry_midpoint_x
function geometry_midpoint_x(coord){
    if(!Array.isArray(coord) || coord.length !== 2) return NaN;

    return geometry.geometry_midpoint_x(coord[0], coord[1]);
}


// double geometry_midpoint_y(double y1, double y2);
// double geometry_slope(double x1, double y1, double x2, double y2);