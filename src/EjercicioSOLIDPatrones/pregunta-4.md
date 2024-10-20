## Pregunta 4

![regunta-4-image](../../public/EjercicioSOLIDPatrones/pregunta-4.png)

```bash
# Se puede hacer no obstante la implementacion de la funcion en si no es OCP

class Mapper{
    constructor(){}
    cambiartodos<T,E>(elements:Component<T>[],f:(e:Component<T>)=>Component<E>):Component<E>[]{
        let components:Component<E>[]=[]
        elements.forEach(e=>{
            components.push(f(e))
        })
        return components
    }
}

#La implementacion de una funcion podria ser asi

interface stringDTO{
    data:string
}

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
#Es importante destacar que para proximas clases esta funcion no cumple OCP, pero el codigo del mapper del cambiar todos si es OCP
```

## Opcion 2 sin romper SOLID (pero sin cumplir con mapper)

Para hacerlo se utilizao el patron visitor, haciendo que los componentes tengan que implementar los elementos para ser visitados
De esta Forma si se cumpliria mejor con SOLID y nos evitariamos el uso del instance of, pero ya no usarios el mapper porque no cumple con liskof

```bash
    cambiar<T,E>(element:Component<T>,f:(e:Component<T>)=>Component<E>):Component<E>{
        return f(element)
    }

# Al implementar f dentro del visitor 

    transformComponentNumberToString(c:Composite<number>)=>Composite<string>

    private transformLeafNumberToString(c:Leaf<number>)=>Leaf<string>

# Pero se esta esperando 

    f(e:Component<T>)=>Component<E>

# Rompiendo la covarianza del metodo del mapper
```


```bash
interface IElementToVisit <T>{
    accept(v:IVisitor <T>):void
}

//Estructura composite
interface Component <T> extends IElementToVisit <T>{
    value:T
    recorrer():void
}


class Leaf <T> implements Component<T>{
    constructor(public value: T){}
    accept(v: IVisitor<T>): void {
        v.visitLeaf(this)
    }
    recorrer(): void {
        console.log(`soy una hoja mi valor es: ${JSON.stringify(this.value)}`);
    }
}

class Composite <T> implements Component<T>{
    components:Component<T>[]=[]

    constructor(public value: T){}
    accept(v: IVisitor<T>): void {
        v.visitComponent(this)
        this.components.forEach(vecino=>vecino.accept(v))
    }

    recorrer(): void {
        console.log("\x1b[33m%s\x1b[0m",`soy un componente mi valor es: ${JSON.stringify(this.value)}`);
        this.components.forEach(e=>{
            e.recorrer()    
        })
    }

    addelement(e:Component<T>){this.components.push(e)}
} 
```