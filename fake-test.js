import {add, returnsMeow} from './arithmetic.js'

export function checkAdd(){
    return add() === 6
}

export function meowLength(){
    return returnsMeow().length
}