//Estructura
interface Boton{
    doStuff():void
}

class LinuxBoton implements Boton{
    doStuff(): void {
        console.log("click en boton de Linux");
    }
    constructor(){}
}

class WindowsBoton implements Boton{
    doStuff(): void {
        console.log("click en boton de Windows");
    }
    constructor(){}
}

class Creator{
    get Id(){return this.id}
    createBoton():Boton{
        return new LinuxBoton()
    }
    constructor(private readonly id:string){}
}

class LinuxButomCreator extends Creator{
    createBoton(): Boton {
        return new LinuxBoton()
    }
    constructor(id:string){super(id)}
}

class WindowsButomCreator extends Creator{
    createBoton(): Boton {
        return new WindowsBoton()
    }
    constructor(id:string){super(id)}
}

//Implementacion

let creator1:Creator= new WindowsButomCreator("1")
let creator2:Creator= new LinuxButomCreator("2")

const windowsButton=creator1.createBoton()
const linuxButton=creator2.createBoton()

windowsButton.doStuff()
linuxButton.doStuff()

