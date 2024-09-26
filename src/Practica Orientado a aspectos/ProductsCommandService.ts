class ProductsCommandServices{

    pepe:number

    deleteInventory:DeleteInventory


    constructor(pepe:number){
        this.pepe=pepe
    }

    adjustInventory():void{
        console.log('Adjust');    
    }
    DeleteInventory():void{
        console.log('Delete');    
    }
    InsertInventory():void{
        console.log('Insert');    
    }

}

class adjustInventory{
    adjustInventory():void{
        console.log('Adjust');    
    }
}

interface adjustInventoryService{
    adjustInventory():void;
}

class DeleteInventory implements adjustInventoryService{

    adjustInventory(): void {
        this.DeleteInventory();
    }

    DeleteInventory():void{
        console.log('Delete');    
    }

    constructor (private readonly id:string){
        this.id=id; 
    }
}

console.log('Hola');

let service:ProductsCommandServices= new ProductsCommandServices(123)

service.adjustInventory();
