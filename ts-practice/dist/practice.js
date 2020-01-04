"use strict";
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
function returnNothing() {
    console.log("I am just saying hello world");
}
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    // 너비를 가져오는 함수를 구현합니다.
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
