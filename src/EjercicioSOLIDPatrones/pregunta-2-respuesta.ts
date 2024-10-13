//Estructura composite
interface Component <T>{
    value:T
    aplicar(f:(e:T)=>T):void
    recorrer():void
}

class Leaf <T> implements Component<T>{
    constructor(public value: T){}
    aplicar(f: (e: T) => T):void {
        this.value=f(this.value)
    }
    recorrer(): void {
        console.log(`soy una hoja mi valor es: ${JSON.stringify(this.value)}`);
    }
}

class Composite <T> implements Component<T>{
    components:Component<T>[]=[]

    constructor(public value: T){}

    aplicar(f: (e: T) => T):void {
        this.value=f(this.value)
        this.components.forEach(c=>c.aplicar(f))
    }

    recorrer(): void {
        console.log("\x1b[33m%s\x1b[0m",`soy un componente mi valor es: ${JSON.stringify(this.value)}`);
        this.components.forEach(e=>{
            e.recorrer()    
        })
    }

    addelement(e:Component<T>){this.components.push(e)}
}

//Mapper

class Mapper{
    constructor(){}
    aplicarTodos<T>( elements:Component<T>[],f:(e:T)=>T):void{
        elements.forEach(e=>e.aplicar(f))
    }
    cambiartodos<T,E>(elements:Component<T>[],f:(e:Component<T>)=>Component<E>):Component<E>[]{
        let components:Component<E>[]=[]
        elements.forEach(e=>{
            components.push(f(e))
        })
        return components
    }
}

function multiplicarx2(e:number):number{
    return e*2
}

interface stringDTO{
    data:string
}

//TODO OJO esta funcion no es OCP pero la implementacion del mapper si es OCP, cuando se agregue un nuevo elemento tipo composite esto explotara
function CambiarEstructuraComponentNumberToStringDTO(e:Component<number>):Component<stringDTO>{
    if(e instanceof Leaf) return new Leaf<stringDTO>({data:e.value.toString()})
    else
    if (e instanceof Composite){
        let composite= new Composite<stringDTO>({data:e.value.toString()})
        e.components.forEach(component => {
            composite.addelement(CambiarEstructuraComponentNumberToStringDTO(component))
        });        
        return composite
    }
    throw new Error('Elemento no encontrado por favor intentelo de nuevo')
}

//implementacion


let elements=new Composite<number>(4)
for (let i=0;i<=3;i++){
    if(i%2==0) elements.addelement(new Leaf(i))
    else{
        let c= new Composite<number>(i)
        for (let j=0;j<=2;j++){
            c.addelement(new Leaf(j))
        }
        elements.addelement(c)
    }
}
let arrayelements:Component<number>[]=[]
arrayelements.push(elements)

elements.recorrer()
// esperando
// soy un componente mi valor es: 4
// soy una hoja mi valor es: 0
// soy un componente mi valor es: 1
// soy una hoja mi valor es: 0
// soy una hoja mi valor es: 1
// soy una hoja mi valor es: 2
// soy una hoja mi valor es: 2
// soy un componente mi valor es: 3
// soy una hoja mi valor es: 0
// soy una hoja mi valor es: 1
// soy una hoja mi valor es: 2
let mapper= new Mapper()
let arraystring=mapper.cambiartodos<number,stringDTO>(arrayelements,CambiarEstructuraComponentNumberToStringDTO)
console.log(`-------------------------------------`);
console.log(`Despues`);
arraystring.forEach(e=>e.recorrer())
// esperando
// soy un componente mi valor es: {"data":"4"}
// soy una hoja mi valor es: {"data":"0"}
// soy un componente mi valor es: {"data":"1"}
// soy una hoja mi valor es: {"data":"0"}
// soy una hoja mi valor es: {"data":"1"}
// soy una hoja mi valor es: {"data":"2"}
// soy una hoja mi valor es: {"data":"2"}
// soy un componente mi valor es: {"data":"3"}
// soy una hoja mi valor es: {"data":"0"}
// soy una hoja mi valor es: {"data":"1"}
// soy una hoja mi valor es: {"data":"2"}