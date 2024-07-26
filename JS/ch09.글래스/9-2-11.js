// 정사각형 클래스
class Square {
    #length ;
    static #counter = 0;
    static get counter () {
        return Square.#counter;
    }

    constructor (length) {
        this.length = length;
        Square.#counter += 1;
    }

    // 정사각형 둘레
    static perimeterOf (value) { return value * 4; }
    // 정사각형 넓이
    static areaOf (value) { return value * value; }

    get length () { return this.#length }
    get perimeter () { return this.#length * 4}
    get area () { return this.#length * this.#length }

    set length (value) {
        if (value <= 0) { throw '길이는 0보다 커야 합니다.'; }
        this.#length = value;
    }
}

// static 이용
const squareA = new Square(10);
const squareB = new Square(20);
const squareC = new Square(30);
console.log(`지금까지 생성된 Square 인스턴스는 ${Square.counter}개 입니다.`)
// static 메소드 사용하기
console.log(`한 변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}입니다.`);
console.log(`한 변의 길이가 20인 정사각형의 넓이는 ${Square.areaOf(30)}입니다.`);
