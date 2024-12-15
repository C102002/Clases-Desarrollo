import { UserController } from "./infraestructure/controller/user.controller";

const controller= new UserController()

let response =controller.aplyCoupon({idCupon:'123456',idSuscripcion:'456789'})

//! Security decorato example
//! Will fail with
//! SecurityException [Error]: Error the user rol: client is not in the avaleable user roles admin,user
//! let response2= controller.aplyCouponGuarded({idCupon:'123456',idSuscripcion:'456789'})


//! Validator decorato example
//! Will fail with
//! ValidatorException [Error]: Error the request dto: {"idCupon":"123456","idSuscripcion":"456789"} is not valid, please enter a acepted DTO


//!  let response3 =controller.aplyCouponDTOValidator({idCupon:'123456',idSuscripcion:'456789'})
// let response3 =controller.aplyCouponDTOValidator({idCupon:'00358683-6f74-4a57-8112-838e08ef44b5',idSuscripcion:'00358683-6f74-4a57-8112-838e08ef44b5'})
