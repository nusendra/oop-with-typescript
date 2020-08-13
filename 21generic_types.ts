type Generics2<T> = T;

interface Generics3<T> {
    asdsa: T
}

function genericsFunction2<T>(value: T): Generics2<T> {
    return value;
}

console.log(genericsFunction2<string>('string'));