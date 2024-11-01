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

abstract class BotonCreator <T>{
    abstract create():T
}

class LinuxButomCreator extends BotonCreator <Boton>{
    create(): Boton {
        return new LinuxBoton()
    }
}

class WindowsButomCreator extends BotonCreator <Boton>{
    create(): Boton {
        return new WindowsBoton()
    }
}

//Implementacion

let creator1:BotonCreator<Boton>= new WindowsButomCreator()
let creator2:BotonCreator<Boton>= new LinuxButomCreator()

const windowsButton=creator1.create()
const linuxButton=creator2.create()

windowsButton.doStuff()
linuxButton.doStuff()

