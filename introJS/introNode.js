
console.log("Hola Mundo NODE");

let edad1= 19;
let edad2= 10;

console.log("Edad Promedio: ");
console.log((edad1+edad2)/2);

console.log("Medidor de Procesos");

console.time('miProceso');
    for(let i=0 ; i< 1000000000; i++){}
console.timeEnd('miProceso')