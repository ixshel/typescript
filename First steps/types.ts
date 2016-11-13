"use strict"


// Boolean
const sadness: boolean = false,
    happyness: boolean = true;

// Number
const firstNumber: number = 1;

// String
const type: string = 'string';

// Array
const types: string[] = ['string', 'number', 'array', 'boolean'];
const numbers: Array<number> = [1, 2, 3];

const only_strings: string[] = [];
only_strings.push('something to add');

// Tuples
// [Favorite Number, Age, Money]
let number_triplet: [number, number, number];
number_triplet = [1, 20, 0];

// [Name, Age]
let me: [string, number];
me = ['Ixshel', 29];

var myName: string = me[0]

// Enum
enum Color { White, Black };
const black: Color = Color.Black;

// Any
let mystery: any = 4;
mystery = 'four';

const whatever_you_want: any[] = [];
whatever_you_want.push('string');
whatever_you_want.push(1);

// Void (undefined || null)
let the_void: void = undefined;
the_void = null;
