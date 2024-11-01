interface Product<T> {
    create(): T;
}

// Implementa una clase concreta de producto
class ConcreteProductA implements Product<string> {
    create(): string {
        return "Producto A";
    }
}

class ConcreteProductB implements Product<number> {
    create(): number {
        return 42;
    }
}

// Define una clase abstracta genérica para el creador
abstract class Creator<T> {
    abstract factoryMethod(): Product<T>;

    someOperation(): T {
        const product = this.factoryMethod();
        return product.create();
    }
}

// Implementa clases concretas de creadores
class ConcreteCreatorA extends Creator<string> {
    factoryMethod(): Product<string> {
        return new ConcreteProductA();
    }
}

class ConcreteCreatorB extends Creator<number> {
    factoryMethod(): Product<number> {
        return new ConcreteProductB();
    }
}

// Uso del Factory Method
const creatorA = new ConcreteCreatorA();
console.log(creatorA.someOperation()); // Output: Producto A

const creatorB = new ConcreteCreatorB();
console.log(creatorB.someOperation()); // Output: 42