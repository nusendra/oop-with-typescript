interface Generics<T> {
    propA: T
}

function genericsFunction<T>(value: T): Generics<T> {
    let data: Generics<T> = {
        propA: value
    };

    return data;
}

console.log(genericsFunction<string>('dsaasd'));
console.log(genericsFunction<number>(1232123));
console.log(genericsFunction<boolean>(true));