//NT https://medium.com/@alessandro.traversi/understanding-the-command-design-pattern-in-typescript-1d2ee3615da8 Ejemplo extraido de aca
// Step 1: Defining the Command interface
interface Command {
    execute(): void;
}

// Step 2: Creating the Receiver
class Light {
    public turnOn() {
        console.log("Light is on");
    }
    
    public turnOff() {
        console.log("Light is off");
    }
}

// Step 3: Creating Commands
class LightOnCommand implements Command {
    private light: Light;
    
    constructor(light: Light) {
        this.light = light;
    }
    
    public execute() {
        this.light.turnOn();
    }
}

class LightOffCommand implements Command {
    private light: Light;
    
    constructor(light: Light) {
        this.light = light;
    }
    
    public execute() {
        this.light.turnOff();
    }
}

// Step 4: Creating the Invoker
class Switch {
    private command: Command;
    
    constructor(command: Command) {
        this.command = command;
    }
    
    public press() {
        this.command.execute();
    }
}

// Using the Command Design Pattern
let light: Light = new Light();
let lightOnCommand: Command = new LightOnCommand(light);
let lightOffCommand: Command = new LightOffCommand(light);

let switchOn: Switch = new Switch(lightOnCommand);
let switchOff: Switch = new Switch(lightOffCommand);

switchOn.press();
switchOff.press();