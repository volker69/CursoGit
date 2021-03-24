let nombre = 'SEBA';
let edad = 27;
let ciudad = 'santiago';
let trabajo = 'Desarrollador';
console.log(`Su nombre es ${nombre}`);

function mayorDeEdad(age,name) {
    if (age >= 18) {
        console.log(`${name} es mayor de Edad
        Por lo tanto puede conducir`);
    }else{
        console.log(`lamentablemente ${name}
        no es mayor de edad`);
    }
}

function info(age,name){
    console.log(`Informacion del sujeto es
     nombre: ${name}
     edad  : ${age}`);
}
function infoCity(city){
    console.log(`Ciudad en donde trabaja es ${city}`);
}

function Selec(selector) {
    switch (selector) {
        case 'a':
            console.log(`seleciona A`);
            break;

        case 'b':
            console.log(`seleciona B`);
            break;
        case 'c':
            console.log(`seleciona C`);
            break;

        case 'D':
            console.log(`seleciona D`);
            break;    
      
        default:
            console.log(`Error`);
            break;
    }
}

let Servant = {
    clase:'Saber',
    nombre:'Arturia',
    np:'Exacalibur',
    ataque:15000,
    defensa:14000
}

let {clase,np,ataque} = Servant;

let Master = {
   Master : 'Shero',
   edas : 17,
   magia: true
}

let GrialDAta = {...Master,...Servant}

console.log(GrialDAta);

mayorDeEdad(nombre,edad);

info(edad,nombre);

