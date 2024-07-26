// 정사각형 클래스
class Square {
    #length ;
    constructor (length) {
        this.length = length;
    }

    get length () {
        return this.#length;
    }
    
    // 정사각형 둘레
    get perimeter () { return this.#length * 4; }
    // 정사각형 넓이
    get area () { return this.#length * this.#length; }

    set length (value) {
        if (value <= 0) { throw '길이는 0보다 커야 합니다.'; }
        this.#length = value;
    }
}

// 클래스 이용
const squareA = new Square(10);
console.log(`한 변의 길이: ${squareA.length}`);
console.log(`둘레: ${squareA.perimeter}`);
console.log(`넓이: ${squareA.area}`);

// 예외 발생시키기
const squareB = new Square(-10)
