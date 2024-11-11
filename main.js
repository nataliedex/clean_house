// Variables
const copyright = document.getElementById("copyright");
const currentYear = new Date().getFullYear();
copyright.textContent = `© ${currentYear} CleanHouse, Inc`;

class Room {
    constructor(name, type, flooringType, numWindows, walls, dust){
        this.name = name;
        this.type = type;
        this.flooringType = flooringType;
        this.numWindows = numWindows;
        this.walls = walls;
        this.dust = dust;
    }
    cleanFloor(){
        if(this.flooringType === carpet){
            console.log(`vaccum the ${this.flooringType} floor`);
        } else {
            console.log(`Sweep and Mop the ${this.flooringType} floor`);
        }
    }
    cleanWindows(){
        console.log(`There are ${this.numWindows} to clean in ${this.name}`);
    }
    dusting(){
        console.log(`Dust the surfaces`);
    }
    generalTidy(){
        console.log(`Pick up anything out of place...`);
    }
}

class Bedroom extends Room {
    constructor(name, type, flooringType, numWindows, walls, dust, numBeds, bookshelves){
        super (name, type, flooringType, numWindows, walls, dust);
        this.numBeds = numBeds;
        this.bookshelves = bookshelves;
    }
    changeSheets(){
        console.log(`Change the sheets on ${this.numBeds} beds`);
    }
    organizeCloset(){
        console.log(`Organize the closet and remove any unused items`);
    }
    organizeShelves(){
        console.log(`Organize and remove clutter from ${this.bookshelves} bookshelves`);
    }
}

class Bathroom extends Room {
    constructor(name, type, flooringType, numWindows, walls, dust, toliet, numSink, shower, bathtub, towels){
        super (name, type, flooringType, numWindows, walls, dust);
        this.toliet = toliet;
        this.numSink = numSink;
        this.shower = shower; 
        this.towels = towels;
        this.bathtub = bathtub;
        this.towels = towels;
    }
    cleanToliet(){
        if(this.toliet){
            console.log(`clean the toliet`);
        }
    }
    cleanSink(){
        console.log(`clean ${this.numSink} sinks`);
    }
    cleanShower(){
        if(this.shower){
            console.log(`Clean the shower`);
        }
    }
    cleanBathtub(){
        if(this.bathtub){
            console.log(`Clean the bathtub`);
        }
    }
    replaceTowels(){
        console.log(`Replace the towels`);
    }
}

class Kitchen extends Room {
    constructor(name, type, flooringType, numWindows, walls, dust, stove, oven, fridge, sink, microwave, counterTops){
        super (name, type, flooringType, numWindows, walls, dust);
        this.stove = stove;
        this.oven = oven;
        this.fridge = fridge;
        this.sink = sink; 
        this.microwave = microwave;
        this.counterTops = counterTops;
    }
    cleanOutsideFridge(){
        console.log(`clean the outside of fridge`);
    }
    cleanInsideFridge(){
        console.log(`wipe down and remove old items inside the fridge`);
    }
    cleanSink(){
        console.log(`Clean ${sink} sinks in the kitchen`);
    }
    cleanMicrowave(){
        console.log(`Clean the microwave`);
    }
    cleanCounterTops(){
        console.log(`Clean the ${this.name} countertops`);
    }
}

class StandardRoom extends Room {
    constructor(name, type, flooringType, numWindows, walls, dust, shelving){
        super (name, type, flooringType, numWindows, walls, dust);
        this.shelving = shelving;
    }
    organizeShelves(){
        console.log(`Organize the shelves`);
    }
}

class Basement extends Room {
    constructor(name, type, flooringType, numWindows, walls, dust, shelving, sink, fridge){
        super (name, type, flooringType, numWindows, walls, dust);
        this.shelving = shelving;
        this.sink = sink;
        this.fridge = fridge;
    }
    organizeShelves(){
        console.log(`Organize the shelves`);
    }
    cleanSink(){
        if(this.sink){
            console.log(`Clean ${this.sink} sinks`);
        }
    }
    cleanFridge(){
        if(this.fridge){
            console.log(`Clean ${this.fridge} fridges`);
        }
    }
}