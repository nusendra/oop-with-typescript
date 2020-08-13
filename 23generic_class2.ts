class ClassA {
    name: string = 'Class A';
}

class ClassBaru<T> {
    classProp: T;

    constructor(classProp: T) {
        this.classProp = classProp;
    }
}

const classA = new ClassA();
const classBaru = new ClassBaru(classA);