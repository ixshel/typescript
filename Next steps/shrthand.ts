'use strict';

/**
 * Person
 */
class Person {
    constructor(public first_name: string, public last_name: string) {
        this.first_name = 'Ixshel';
        this.last_name = 'Escamilla';
    }
}

/**
 * this is the same as:
 */

class Person2 {
    public first_name : string;
    public last_name: string;

    constructor(first_name: string, last_name: string){
        this.first_name = 'Ixshel';
        this.last_name = 'Escamilla';
    }
}
