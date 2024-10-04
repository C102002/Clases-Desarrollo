//Estructura

interface Button{
    click():void
}

interface CheckBox{
    toggle():void
}

interface NavBar{
    navigate():void
}

interface GUIFactory{
    createButton():Button
    createCheckBox():CheckBox
    createNavBar():NavBar
}

class WindowsButton implements Button{
    constructor(){}
    click(): void {
        console.log("Click en boton de windows");
    }
}

class MacButton implements Button{
    constructor(){}
    click(): void {
        console.log("Click en boton de Mac");
    }
}

class WindowsNavBar implements NavBar{
    constructor(){}
    navigate(): void {
        console.log(`Navbar de ${this.constructor.name}`);
    }
}


class MacNavBar implements NavBar{
    constructor(){}
    navigate(): void {
        console.log(`Navbar de ${this.constructor.name}`);
    }

}

class WindowsChecBox implements CheckBox{
    toggle(): void {
        console.log(`Toggle de ${this.constructor.name}`);
    }
}

class MacChecBox implements CheckBox{
    toggle(): void {
        console.log(`Toggle de ${this.constructor.name}`);
    }
}

class WindowsFactory implements GUIFactory{
    constructor(){}

    createButton(): Button {
        return new WindowsButton()
    }
    createCheckBox(): CheckBox {
        return new WindowsChecBox()
    }
    createNavBar(): NavBar {
        return new WindowsNavBar()
    }
}

class MacFactory implements GUIFactory{
    constructor(){}
    createButton(): Button {
        return new MacButton()
    }
    createCheckBox(): CheckBox {
        return new MacChecBox()
    }
    createNavBar(): NavBar {
        return new MacNavBar()
    }
}

//Implementacion

class Application{
    constructor(
        private readonly factory:GUIFactory,
        private readonly button:Button,
        private readonly navbar:NavBar,
        private readonly checkBox:CheckBox){}
    paint(){this.button.click()}
    navigate(){this.navbar.navigate()}
    toggleButton(){this.checkBox.toggle()}
}

let uiMacFactory:GUIFactory= new MacFactory()
let uiWindowsFactory:GUIFactory= new WindowsFactory()

let aplication= new Application(
    uiMacFactory,
    uiWindowsFactory.createButton(),
    uiMacFactory.createNavBar(),
    uiMacFactory.createCheckBox()
)

aplication.navigate()
aplication.paint()
aplication.toggleButton()