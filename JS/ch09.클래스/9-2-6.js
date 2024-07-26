// 정사각형 클래스
class Square {
    #length ;
    constructor (length) {
        if (length <= 0 ) {
            throw '길이는 0보다 커야 합니다.';
        }
        this.length = length;
    }
    // 정사각형 둘레
    getPerimeter () {
        return 4 * this.length;
    }
    // 정사각형 넓이
    getArea () {
        return this.length * this.length;
    }
}

// 클래스 이용
const square = new Square(10);
console.log(`정사각형 둘레: ${square.getPerimeter()}`);
console.log(`정사각형 넓이: ${square.getArea()}`);
