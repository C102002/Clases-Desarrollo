function map<E, T>(arr: E[], f: (e: E) => T): T[] {
    let array:T[]=[]
    for( const element of arr){
        let pepe=f(element)
        array.push(f(element))
    }
    return array
}