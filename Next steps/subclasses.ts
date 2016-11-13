'use strict';
/**
 * Class
 */
class ListItem {

    private _name: string;

    constructor(name) {
        this._name = name;
    }


}

/**
 * SubClass
 */
class CompleteListItem extends ListItem {

    completed: boolean;

    constructor(name: string) {
        super(name);
        this.completed = true;
    }
}