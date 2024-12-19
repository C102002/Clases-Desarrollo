import { DenunciaController } from "./denuncia/infraestructure/controller/denuncia.controller";

const controller= new  DenunciaController()

let response= await controller.denunciarPost({
    idDenunciante:"235ced34-e7bf-4742-8801-a235c342e5bc",
    idPost:"06626ac8-1b6d-4605-9cba-ca468f7ef766",
    text:"prueba",
    category:"prueba"
})

console.log(response)