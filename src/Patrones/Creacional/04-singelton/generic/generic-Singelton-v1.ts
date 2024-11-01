//Estructura
class GenericSingelton <T>{
    //! OJO CON ESE ANY pero sin ese any no agarra
    //? private static instance:GenericSingelton<T> Aunque esto NO COMPILA
    private static instance:GenericSingelton<any>
    static getIntance<T>(data:T){
        if (!this.instance){
            this.instance=new GenericSingelton(data)
        }
        return this.instance
    }
    private constructor(private data:T){}
}

//Implementacion
const singelton= GenericSingelton.getIntance('pepe')

console.log(singelton);
