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
