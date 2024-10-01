 export class Optional <T>{
    private value: T | undefined | null;
    private assigned:boolean;
    
    constructor(value?: T | null) {
        this.value=value;
        if (value) this.assigned=true
        else this.assigned=false
    }

    hasValue():boolean{
        if (this.value!==undefined) {return this.assigned=true;}
        else return this.assigned=false;
    }

    getValue():T{
        if (this.hasValue()) return this.value
        else  throw new Error('Error el tipo de dato es undefiend')   
    }
}