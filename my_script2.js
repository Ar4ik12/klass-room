"use strict"

let message = "This my name is Artur a cat!";
const search = "is";
const replance = "(is)";

const sIndx = message.indexOf(" " + search + " ");
const eIndx = sIndx + search.length + 2;
const newString = message.substr(0, sIndx) + " " + replance + " " + message.substr(eIndx, 10000)


console.log(sIndx, eIndx, newString);