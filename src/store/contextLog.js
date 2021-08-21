import React from 'react'; 
let logg=''
export function loggedIn(){
logg=true
}
export function loggedout(){
    logg=false
    }
    export function isLogged(){
        return logg
        }