class Pet {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    toString () {
        return `이름: ${this.name}\n나이: ${this.age}살`
    }
}

const pet = new Pet('구름',6)
// alert(pet)
console.log(pet)
console.log(pet + '')   // pet을 스트링화 시킴