class Singleton<T> {
    constructor(private readonly _instance: T) {}

    get instance() {
        return this.instance
    }
}

//NT: No me gusta porque tiene el new pero es eso o usar any en el estatico
let singel= new Singleton('')
