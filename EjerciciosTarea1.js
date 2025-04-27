"use strict"
//!Ejercicio 1
console.log("--EJERCICIO 1---------------------------------------------------------\n");
const nombre = "Sebastian";
let edad = 20;
let mascota = true;
console.log("Nombre:", nombre ,"\nEdad: ",edad,"\nMascota: ", mascota);

//!Ejercicio 2
console.log("\n--EJERCICIO 2---------------------------------------------------------\n");
let num1 = 2;
let num2 = 3;
let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 *  num2;
let division = num1 / num2;
console.log("Suma: ", suma ,"\nResta: ", resta ,"\nMultiplicacion: ", multi ,"\nDivision: ", division);

//!Ejercicio 3
console.log("\n--EJERCICIO 3---------------------------------------------------------\n");
function saludo(name){
    console.log("Hola", name);
}
saludo("Sebastian");

//!Ejercicio 4
console.log("\n--EJERCICIO 4---------------------------------------------------------\n");
const frutas = ["Manzana", "Frutilla", "Naranja", "Arandano", "Cereza"];
for(let i = 0; i < frutas.length; i++){
    console.log("Fruta: ", frutas[i]);
}

//!Ejercicio 5
console.log("\n--EJERCICIO 5---------------------------------------------------------\n");
const numeros = [3, 5, 7];
const numPor2 = numeros.map(function(element){
    return element * 2;
});
console.log(numPor2);

//!Ejercicio 6
console.log("\n--EJERCICIO 6---------------------------------------------------------\n");
const arrayDeObjetos= [
    {
        nombre: "Sebastian",
        edad: 20
    },
    {
        nombre: "Anibal",
        edad: 23
    },
    {
        nombre: "Emanuel",
        edad: 20
    }
];

arrayDeObjetos.forEach((nombres) => console.log("Nombre: ", nombres.nombre));

//!Ejercicio 7
console.log("\n--EJERCICIO 7---------------------------------------------------------\n");
const numDesordenados = [4, 5, 1, 18, 5, 9];
const numMayorAcinco = numDesordenados.filter(function (result){
    if(result > 5){
        return result;
    }
});
console.log("Numeros Mayor a Cinco: ", numMayorAcinco);

//!Ejercicio 8
console.log("\n--EJERCICIO 8---------------------------------------------------------\n");
const nums = [1, 5, 7, 4];
const sumaNums = nums.reduce(function(acumulador, valorActual){
    return acumulador + valorActual;
}, 0);
console.log("Suma todal: ", sumaNums);

//!Ejercicio 9
console.log("\n--EJERCICIO 9---------------------------------------------------------\n");
function esperarDosSegundos(){
    return new Promise(resolve => {
       setTimeout(() => {
        resolve(`Operacion Completada!`);
       }, 2000); 
    });
}
async function ejecutarOperacion(){
    const resultado = await esperarDosSegundos();
        console.log(resultado);
        console.log("Ya pasaron dos segundos");
        console.log("\n----------------------------------------------------------------------");

}
ejecutarOperacion();