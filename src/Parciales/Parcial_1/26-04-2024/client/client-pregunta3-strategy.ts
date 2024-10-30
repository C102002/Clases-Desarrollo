import { CachitosPolitc, DTOCompra, ServiceCompra } from "../pregunta-3"

//! OJO la diferencia es que aca si se sabe cual es la estrategia concreta (strategy)
let compra= new ServiceCompra(new CachitosPolitc())

let dtoCompra:DTOCompra={
    edad:60,
    venta:789,
    fecha:new Date(),
    productos:['cachito'],
    precio:500
}

compra.compra(dtoCompra)