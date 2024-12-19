import { DenunciaController } from './denuncia/infraestructure/controller/denuncia.controller';
import { DenunciarPostDTO } from './denuncia/infraestructure/dto/denunciar-post.dto';

// Datos validos
// idDenunciante:"235ced34-e7bf-4742-8801-a235c342e5bc",
// idPost:"06626ac8-1b6d-4605-9cba-ca468f7ef766",
// text:"prueba",
// category:"prueba"  

async function main() {
    const controller = new DenunciaController();
    //! OJO solo pasa si la categoria se llama prueba y los idDenunciante y idPostExisten
    const data: DenunciarPostDTO = {
        idDenunciante:"235ced34-e7bf-4742-8801-a235c342e5bc",
        idPost:"06626ac8-1b6d-4605-9cba-ca468f7ef766",
        text:"prueba",
        category:"prueba"    
    };
    try {
        let response = await controller.denunciarPost(data);
        console.log(response);
    } catch (error) {
        console.error('Error denunciando el post:', error);
    }
}

main()