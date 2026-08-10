const Module = require("../wasm/geometry.js");


let geometry;


Module.onRuntimeInitialized = () => {

    geometry = {
        geometry_distance_2d: Module.cwrap("geometry_distance_2d", "number", ["number", "number"]),
        geometry_distance_3d: Module.cwrap("geometry_distance_3d", "number", ["number", "number"]),
        geometry_midpoint_x: Module.cwrap("geometry_midpoint_x", "number", ["number", "number"]),
        geometry_midpoint_y: Module.cwrap("geometry_midpoint_y", "number", ["number", "number"]),
        geometry_slope: Module.cwrap("geometry_slope", "number", ["number", "number"]),
        triangle_area: Module.cwrap("triangle_area", "number", ["number", "number"]),
        triangle_perimeter: Module.cwrap("triangle_perimeter", "number", ["number", "number", "number"]),
        triangle_semiperimeter: Module.cwrap("triangle_semiperimeter", "number", ["number", "number", "number"]),
        triangle_heron_area: Module.cwrap("triangle_heron_area", "number", ["number", "number", "number"]),
        triangle_is_valid: Module.cwrap("triangle_is_valid", "number", ["number", "number", "number"]),
        triangle_is_equilateral: Module.cwrap("triangle_is_equilateral", "number", ["number", "number", "number"]),
        triangle_is_isosceles: Module.cwrap("triangle_is_isosceles", "number", ["number", "number", "number"]),
        triangle_is_scalene: Module.cwrap("triangle_is_scalene", "number", ["number", "number", "number"]),
        triangle_is_right: Module.cwrap("triangle_is_right", "number", ["number", "number", "number"]),
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
        cuboid_volume: Module.cwrap("cuboid_volume", "number", ["number", "number", "number"]),
        cuboid_surface_area: Module.cwrap("cuboid_surface_area", "number", ["number", "number", "number"]),
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
    console.log("geometry_midpoint_y : ", geometry_midpoint_y([2, 4]));
    console.log("geometry_slope : ", geometry_slope(coordA, coordB));
    console.log("triangle_area : ", triangle_area(12, 18));
    console.log("triangle_perimeter : ", triangle_perimeter(3, 3, 4));
    console.log("triangle_heron_area : ", triangle_heron_area(5, 6, 7));
    console.log("triangle_semiperimeter : ", triangle_semiperimeter(7, 8, 9));
    console.log("triangle_is_valid : ", triangle_is_valid(3, 4, 5));
    console.log("triangle_is_equilateral : ", triangle_is_equilateral(5, 5, 6));
    console.log("triangle_is_isosceles : ", triangle_is_isosceles(2, 2, 2));
    console.log("triangle_is_scalene : ", triangle_is_scalene(5, 5, 8)); 
    console.log("triangle_is_right : ", triangle_is_right(3, 4, 5));
    console.log("rectangle_area : ", rectangle_area(10, 4));
    console.log("rectangle_perimeter : ", rectangle_perimeter(4, 6));
    console.log("rectangle_diagonal : ", rectangle_diagonal(5, 8));
    console.log("square_area : ", square_area(4));
    console.log("square_perimeter : ", square_perimeter(5));
    console.log("square_diagonal : ", square_diagonal(4));
    console.log("circle_area : ", circle_area(3));
    console.log("circle_circumference : ", circle_circumference(2));
    console.log("circle_diameter : ", circle_diameter(4));
    console.log("circle_arc_length : ", circle_arc_length(7, 90));
    console.log("circle_sector_area : ", circle_sector_area(7, 45))
    console.log("ellipse_area : ", ellipse_area(5, 3));
    console.log("ellipse_perimeter_basic : ", ellipse_perimeter_basic(5, 4));
    console.log("regular_polygon_perimeter : ", regular_polygon_perimeter(4, 4));
    console.log("regular_polygon_area : ", regular_polygon_area(4, 8));
    console.log("polygon_interior_angle_sum : ", polygon_interior_angle_sum(5));
    console.log("regular_polygon_interior_angle : ", regular_polygon_interior_angle(4));
    console.log("cube_volume : ", cube_volume(4));
    console.log("cube_surface_area : ", cube_surface_area(4));
    console.log("cube_space_diagonal : ", cube_space_diagonal(4));
    console.log("cuboid_volume : ", cuboid_volume(2, 4, 5));
    console.log("cuboid_surface_area : ", cuboid_surface_area(4, 5, 8));
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
function geometry_midpoint_y(coord){
    if(!Array.isArray(coord) || coord.length !== 2) return NaN;

    return geometry.geometry_midpoint_y(coord[0], coord[1]);
}

// double geometry_slope(double x1, double y1, double x2, double y2);
// geometry_slope
function geometry_slope(coordA, coordB){
     if(!Array.isArray(coordA) || !Array.isArray(coordB) || 
        coordA.length !== 2 || coordB.length !== 2 ) return NaN;

    return geometry.geometry_slope(coordA[0], coordA[1],
                                    coordB[0], coordB[1]);
}

// Triangle

// double triangle_area(double base, double height);
// triangle_area
function triangle_area(base, height){
    return geometry.triangle_area(base, height);
}

// double triangle_perimeter(double a, double b, double c);
// triangle_perimeter
function triangle_perimeter(a, b, c){
    return geometry.triangle_perimeter(a, b, c);   
}
// double triangle_heron_area(double a, double b, double c);
function triangle_heron_area(a, b, c){
    return geometry.triangle_heron_area(a, b, c);
}

// double triangle_semiperimeter(double a, double b, double c);
// triangle_semiperimeter
function triangle_semiperimeter(a, b, c){
    return geometry.triangle_semiperimeter(a, b, c);
}

// int triangle_is_valid(double a, double b, double c);
// triangle_is_valid
function triangle_is_valid(a, b, c) {
    const triangle_is_valid_result = geometry.triangle_is_valid(a, b, c);

    return triangle_is_valid_result ? true : false; 
}

// int triangle_is_equilateral(double a, double b, double c);
// triangle_is_equilateral
function triangle_is_equilateral(a, b, c){
    const triangle_is_equilateral_result = geometry.triangle_is_equilateral(a, b, c);

    return triangle_is_equilateral_result ? true : false;
}

// int triangle_is_isosceles(double a, double b, double c);
// triangle_is_isosceles
function triangle_is_isosceles(a, b, c){
    const triangle_is_isosceles_result = geometry.triangle_is_isosceles(a, b, c);

    return triangle_is_isosceles_result ? true : false;
}

// int triangle_is_scalene(double a, double b, double c);
// triangle_is_scalene
function triangle_is_scalene(a, b, c){
    const triangle_is_scalene_result = geometry.triangle_is_scalene(a, b, c);

    return triangle_is_scalene_result ? true : false;
}

// int triangle_is_right(double a, double b, double c);
// triangle_is_right
function triangle_is_right(a, b, c){
    const triangle_is_right_result = geometry.triangle_is_right(a, b, c);

    return triangle_is_right_result ? true : false;
}

// Rectangle

// double rectangle_area(double length, double width);
// rectangle_area
function rectangle_area(length, width){
    return geometry.rectangle_area(length, width);
}

// double rectangle_perimeter(double length, double width);
// rectangle_perimeter
function rectangle_perimeter(length, width){
    return geometry.rectangle_perimeter(length, width);
}

// double rectangle_diagonal(double length, double width);
// rectangle_diagonal
function rectangle_diagonal(length, width){
    return geometry.rectangle_diagonal(length, width);
}

// square

// double square_area(double side);
// square_area
function square_area(side){
    return geometry.square_area(side);
}

// double square_perimeter(double side);
// square_perimeter
function square_perimeter(side){
    return geometry.square_perimeter(side);
}

// double square_diagonal(double side);
// square_diagonal
function square_diagonal(side){
    return geometry.square_diagonal(side);
}

// circle

// double circle_area(double radius);
// circle_area
function circle_area(radius){
    return geometry.circle_area(radius);
}

// double circle_circumference(double radius);
// circle_circumference
function circle_circumference(radius){
    return geometry.circle_circumference(radius);
}

// double circle_diameter(double radius);
// circle_diameter
function circle_diameter(radius){
    return geometry.circle_diameter(radius);
}

// double circle_arc_length(double radius, double angle);
// circle_arc_length
function circle_arc_length(radius, angle){
    return geometry.circle_arc_length(radius, angle);
}

// double circle_sector_area(double radius, double angle);
// circle_sector_area
function circle_sector_area(radius, angle){
    return geometry.circle_sector_area(radius, angle);
}

// ellipse

// double ellipse_area(double a, double b);
// ellipse_area
function ellipse_area(a, b){
    return geometry.ellipse_area(a, b);
}

// double ellipse_perimeter_basic(double a, double b);
// ellipse_perimeter_basic
function ellipse_perimeter_basic(a, b){
    return geometry.ellipse_perimeter_basic(a, b);
}

//polygon

// double regular_polygon_perimeter(int sides, double side_length);
// regular_polygon_perimeter
function regular_polygon_perimeter(sides, side_length){
    return geometry.regular_polygon_perimeter(sides, side_length);
}

// double regular_polygon_area(int sides, double side_length);
// regular_polygon_area
function regular_polygon_area(sides, side_length){
    return geometry.regular_polygon_area(sides, side_length);
}

// double polygon_interior_angle_sum(int sides);
// polygon_interior_angle_sum
function polygon_interior_angle_sum(sides){
    return geometry.polygon_interior_angle_sum(sides);
}

// double regular_polygon_interior_angle(int sides);
// regular_polygon_interior_angle
function regular_polygon_interior_angle(sides){
    return geometry.regular_polygon_interior_angle(sides);
}


// cube

// double cube_volume(double side);
// cube_volume
function cube_volume(side){
    return geometry.cube_volume(side);
}

// double cube_surface_area(double side);
// cube_surface_area
function cube_surface_area(side){
    return geometry.cube_surface_area(side);
}

// double cube_space_diagonal(double side);
// cube_space_diagonal
function cube_space_diagonal(side){
    return geometry.cube_space_diagonal(side);
}

//Rectangular Prism

// double cuboid_volume(double length, double width, double height);
// cuboid_volume
function cuboid_volume(length, width, height){
    return geometry.cuboid_volume(length, width, height);
}

// double cuboid_surface_area(double length, double width, double height);
// cuboid_surface_area
function cuboid_surface_area(length, width, height){
    return geometry.cuboid_surface_area(length, width, height);
}

// double cuboid_space_diagonal(double length, double width, double height);
// cuboid_space_diagonal

// Cylinder

// double cylinder_volume(double radius, double height);
// double cylinder_surface_area(double radius, double height);
// double cylinder_lateral_area(double radius, double height);
