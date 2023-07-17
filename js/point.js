
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // Override multiplication operator
    mul(scalar) {
        return new Point(this.x * scalar, this.y * scalar);
    }

    // Override addition operator
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }

    // Override subtraction operator
    sub(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }
}
