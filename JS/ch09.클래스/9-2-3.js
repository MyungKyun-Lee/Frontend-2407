// 사각형 클래스
class Rectangle {
    constructor (widht, height) {
        this.width = widht;
        this.height = height;
    }
    // 사각형 둘레
    getPerimeter () {
        return 2 * (this.width + this.height);
    }
    // 사각형 넓이
    getArea () {
        return this.width * this.height;
    }
}

// 정사각형 클래스
class Square extends Rectangle {
    constructor (length) {
        super(length, length);
    }
}

// 클래스 이용
const square = new Square(10, 20);
const square2 = new Rectangle(10, 20);
console.log(`정사각형 둘레: ${square.getPerimeter()}`);
console.log(`정사각형 넓이: ${square.getArea()}`);
console.log(`사각형 둘레: ${square2.getPerimeter()}`);
console.log(`사각형 넓이: ${square2.getArea()}`);
