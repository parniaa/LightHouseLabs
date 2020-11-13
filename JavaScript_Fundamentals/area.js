
function calculateRectangleArea(length, width){
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    let area = length * width;
    return area;
  }
}
function calculateTriangleArea(base, height){
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    let area = (base * height) / 2;
    return area;
  }
}
function calculateCircleArea(radius){
  if (radius < 0) {
    return undefined;
  } else {
    let area = Math.PI * Math.pow ( radius, 2);
    return area;
  }
}
console.log(calculateRectangleArea(10, 5)); // should print 25
console.log(calculateRectangleArea(3, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined
