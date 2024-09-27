//Estructura
class Singelton{
    private static instance:Singelton
    static getIntance(){
        if (!this.instance){
            this.instance=new Singelton()
        }
        return this.instance
    }
    private constructor(){}
}

//Implementacion
const singelton= Singelton.getIntance()

console.log(singelton);
