//NT: Asi no es porque aca la forma no va a determinar a los vecinos, sino que los vecinos implemente son un arreglo de casillas
//que esta MAL
abstract class Casilla <F,V>{
    vecinos:Casilla<F,V>[]=[]
    valor:V
    constructor(valor:V){
        this.valor=valor
    }
    merge(valor:V):V{
        if(this.valor===valor){
            const valores:V[]=[]
            this.vecinos.forEach((vecino)=>{
                valores.push(vecino.merge(valor))
            })
            const newValor =valores.pop()
            if(!newValor) return this.valor
            return newValor
        }
        return this.valor
    }
}