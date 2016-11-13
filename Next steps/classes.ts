// classes.ts
"use strict";

// public
class NamesComponent {
    /**
     * Adding a property is as simple as adding its name and type
     * all is added at the top of the class.
     * 
     * To access modifiers we add "public"
     */
    public names: Array<NameItem>;
    // names: NameItem[]; another way to do it

    constructor() {
        this.names = [];
    }
}

class NameItem {
    public name: string;

    constructor(name) {
        this.name = name;
    }
}

const NameHere = new NameItem('Ixshel');
console.log('your name: ', NameHere.name);

// private
class LastNamesComponent {
    /**
     * Adding a property is as simple as adding its name and type
     * all is added at the top of the class.
     * 
     */
    public lastnames: Array<LastNameItem>;
    
    constructor() {
        this.lastnames = [];
    }
}

class LastNameItem {
    private lastname: string;

    constructor(lastname) {
        this.lastname = lastname;
    }
}

const LastNameHere = new LastNameItem('Escamilla');
console.log('your last name: ', LastNameHere.lastname); // shouldreturn "lastname is private"

// getter
class MiddleNamesComponent {
    /**
     * Adding a property is as simple as adding its name and type
     * all is added at the top of the class.
     * 
     */
    public middlenames: Array<MiddleNameItem>;
    
    constructor() {
        this.middlenames = [];
    }
    get mddlnames() : Array<MiddleNameItem> {
        return this.middlenames;
    }
}

class MiddleNameItem {
    public middlename: string;

    constructor(middlename) {
        this.middlename = middlename;
    }
    get mdditem (): string{
        return this.middlename
    }
}

const MiddleNameHere = new MiddleNameItem('Alejandro');
console.log('your middle name: ', MiddleNameHere.middlename); // shouldreturn "lastname is private"