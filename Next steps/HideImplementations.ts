'use strict';

/**
 * LoginComponent
 */
class LoginComponent {

    private _dataarray: Array<DataItem>;

    constructor() {
        this._dataarray = [];
    }

    get dataarray(): Array<DataItem> {
        return this._dataarray;
    }

    get length(): number {
        return this._dataarray.length;
    }

    add(data: DataItem, password: string): boolean {
        if (this.validate(password)) {
            this._dataarray.push(data);
            return true;
        } else {
            return false;
        }
    }

    private validate(password: string): boolean {
        if (password === 'password')
            return true;
        else
            return false;
    }
}

class DataItem {
    private _name : string;

    constructor(name){
        this._name = name;
    }

    get name(): string{
        return this._name;
    }
}

const PASS = 'password';

const data = new DataItem('some data');
const data_one = new LoginComponent();
const data_two = new LoginComponent();

console.log(data_one.add(data, PASS)); //should be true
console.log(data_one.length); //1

console.log(data_one.add(data, 'fail data')); //should be false
console.log(data_one.length); //0