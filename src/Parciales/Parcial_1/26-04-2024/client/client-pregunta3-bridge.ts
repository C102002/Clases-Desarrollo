import { CachitosHigherPricePolitc, DTOCompra, ServiceCompra } from "../pregunta-3-bridge"

//! OJO la diferencia es que aca no se sabe la implementacion (bridge)
let compra= new ServiceCompra()

let dtoCompra:DTOCompra={
    edad:60,
    venta:789,
    fecha:new Date(),
    productos:['cachito'],
    precio:500
}

compra.compra(dtoCompra)