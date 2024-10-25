interface IButton{
    click():void
}

interface IshortCut{
    do():void
}

interface IEditor{
    text:string
    getSelection():string
    deleteSelection():void
    replaceSelection(text:string):void
}

class Editor implements IEditor{
    constructor(
    public text: string
    ){}
    getSelection(): string {
        return this.text
    }
    deleteSelection(): void {
        this.text=''
    }
    replaceSelection(text: string): void {
        this.text=text
    }
}

abstract class Command{
    private backup:string=''
    constructor(
        public app:Aplication,
        public editor:IEditor,
    ){}
    abstract execute():void
    save(){
        this.backup=this.editor.text
    }
    undo(){
        this.editor.text=this.backup
    }
}

class CopyCommand extends Command{
    execute(): void {
        this.save()
        this.app.clipboard=this.editor.text
    }
}

class PasteCommand extends Command{
    execute(): void {
        this.save();
        this.editor.text=this.app.clipboard;
    }
}

class CutCommand extends Command{
    execute(): void {
        this.save()
        this.editor.replaceSelection(this.app.clipboard)
    }
}

class Aplication{
    butons:IButton[]=[]
    editors:IEditor[]=[]
    shorcuts:IshortCut[]=[]
    clipboard:string
    commandHistory:Command[]=[]
    constructor(
        public currenteditor:IEditor
    ){
        this.editors.push(currenteditor)
        this.clipboard=''
    }
    addButton(b:IButton){
        this.butons.push(b)
    }
    addShortcuts(shortcut:IshortCut){
        this.shorcuts.push(shortcut)
    }
    execute(command:Command){
        command.execute()
        this.commandHistory.push(command)
    }
}

//implementacion
//Buttons
class CopyButton implements IButton{
    click(): void {
        this.c.execute()
    }
    constructor(private c:Command){
    }
}

class PasteButton implements IButton{
    click(): void {
        this.c.execute()
    }
    constructor(private c:Command){
    }
}

class CutButton implements IButton{
    click(): void {
        this.c.execute()
    }
    constructor(private c:Command){
    }
}
//Shortcuts

class CopyShorcut implements IshortCut{

    constructor(private c:Command){}
    do(): void {
        this.c.execute()
    }

}

class PasteShorcut implements IshortCut{

    constructor(private c:Command){}
    do(): void {
        this.c.execute()
    }

}

class CutShorcut implements IshortCut{

    constructor(private c:Command){}
    do(): void {
        this.c.execute()
    }

}

let editor=new Editor('')
let app= new Aplication(editor)
let copybutton=new CopyButton(new CopyCommand(app,app.currenteditor))
let pasteshorcut=new PasteShorcut(new PasteCommand(app,editor))
app.addShortcuts(pasteshorcut)
app.addButton(copybutton)

editor.text='cambio el texto'
console.log(app.clipboard);

app.execute(new CopyCommand(app,editor))

console.log(app.clipboard);


// //antes de copiar
// console.log(editor);
// console.log(app.clipboard);

// editor.text='Hola como estas? :)'
// copybutton.click()

// //despues de copiar
// console.log(editor);
// console.log(app.clipboard);

// //antes de pegar
// editor.text='Espero que estes bien'
// console.log(editor);

// pasteshorcut.do()

// //despues de pegar
// console.log(editor);