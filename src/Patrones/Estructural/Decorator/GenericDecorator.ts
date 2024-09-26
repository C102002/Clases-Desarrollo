interface DataSource<T>{
    writeData(Data:T):void
    readData():void;
}

class FileDataSource <T> implements DataSource<T>{

    filename:T

    writeData(Data:T) {
        console.log('FileData source');
    }
    readData() {
        console.log('ReadData File');
    }

    constructor(filename:T){
        this.filename=filename
    }

}


class DataSourceDecorator <T> implements DataSource<T>{

    wrapper:DataSource<T>

    writeData(Data:T) {
        console.log('DataSourceDecorator source');
    }
    readData() {
        console.log('ReadData DataSource');
    }

    DataSourceDecorator(decorator: DataSource<T>):void{
        this.wrapper=decorator
    }

    constructor(decorator:DataSource<T>){
        this.DataSourceDecorator(decorator)
    }
}

class EncryptionDecorator <T> extends DataSourceDecorator<T>{

    writeData(Data:T) {
        super.writeData(Data)
        console.log('EncryptionDecorator source');
    }
    readData() {
        super.readData()
        console.log('EncryptionDecorator Data');
    }

    constructor(decorator: DataSource<T>){
        super(decorator)
    }
}

let file=new DataSourceDecorator<number>(
    new FileDataSource<number>(123)
)

new FileDataSource<number>(123);

let datasource= new DataSourceDecorator<number>(file)


datasource.readData()
datasource.wrapper.readData()
console.log('');

let encription = new EncryptionDecorator<number>(datasource)

encription.readData()
encription.wrapper.readData()