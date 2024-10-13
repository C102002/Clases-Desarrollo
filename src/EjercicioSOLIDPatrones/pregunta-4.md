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