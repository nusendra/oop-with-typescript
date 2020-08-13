interface Product {
    sell(): void;
}

class CarProduct implements Product {
    sell(): void {
        console.log('jual mobil');
    }
}

class MotorProduct implements Product {
    sell(): void {
        console.log('jual motor');
    }
}

function sellProducts<T extends Product>(products: T[]): void {
    products.forEach(product => product.sell());
}

const car = new CarProduct();
const motor = new MotorProduct();

sellProducts([car, motor]);