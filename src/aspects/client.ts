import { UserController } from "./infraestructure/controller/user.controller";

const controller= new UserController()

let response =controller.aplyCoupon({idCupon:'123456',idSuscripcion:'456789'})

//! Security decorato example
//! SecurityException [Error]: Error the user rol: client is not in the avaleable user roles admin,user
//! let response2= controller.aplyCouponGuarded({idCupon:'123456',idSuscripcion:'456789'})