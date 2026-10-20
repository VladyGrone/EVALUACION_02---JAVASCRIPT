// -------------- Pregunta 01 ---------------
/*
const entrada=[4,8,5,3]

function ultimoelemento(arreglo) {
    for(let i=0;i<arreglo.length;i++)
    {
        if(i==(arreglo.length-1))
        {
            // console.log(arreglo[i])
        }
    }
}
ultimoelemento(entrada)
*/
// -------------------------------------------


// -------------- Pregunta 02 ---------------
/*
const entrada=[2, 7, 5, 11];

function arregloagregar(arreglo, numero) {
    let indice=arreglo.length;
    arreglo[indice]=numero;
    console.log("--El nuevo arreglo--")
    console.log(arreglo)
}

let nuevonumero=Number(prompt("Ingrese numero:"))

arregloagregar(entrada,nuevonumero)
*/
// -------------------------------------------


// -------------- Pregunta 03 ---------------
/*
const entrada=[2, 6, 1, 8];

function promedio(arreglo) {
    let suma=0;
    for (let i = 0; i<arreglo.length; i++) {
        suma=suma+arreglo[i];
        }

    let cant=arreglo.length;
    let prom=0;
    prom=suma/cant;
    console.log("El promedio es:",prom)
}
promedio(entrada)
*/
// -------------------------------------------


// -------------- Pregunta 04 ---------------
/*
const entrada=[1, 2, 5, 8, 9, 12, 2, 3]

function sumapares(arreglo) {
    let suma=0;
    for (let i = 0; i<arreglo.length; i++) {
        if(arreglo[i]%2==0){
            suma=suma+arreglo[i]
        }
    }
    console.log("La suma de pares es:",suma)
}
sumapares(entrada)
*/
// -------------------------------------------


// -------------- Pregunta 05 ---------------
/*
const arreglo1=[2, 5, 2, 3, 7, 2]
const arreglo2=[1, 5, 3,3]

function booleanoArray(primer_arreglo,segundo_arreglo) {
    const ArregloNuevo=[]
    
    for (let i = 0; i<primer_arreglo.length; i++) {
        ArregloNuevo.push(primer_arreglo[i])
    }

    for (let i = 0; i<segundo_arreglo.length; i++) {
        ArregloNuevo.push(segundo_arreglo[i])
    }
    console.log(ArregloNuevo)
    if(ArregloNuevo.length>=10)
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }
}

booleanoArray(arreglo1,arreglo2)
*/
// -------------------------------------------


// -------------- Pregunta 06 ---------------
/*
const arreglo1=[2, 5, 2]
const arreglo2=[1, 5, 3]

function array(primer_arreglo,segundo_arreglo) {
    const ArregloNuevo=[]
    
    for (let i = 0; i<primer_arreglo.length; i++) {
        ArregloNuevo.push(primer_arreglo[i]*2)
    }

    for (let i = 0; i<segundo_arreglo.length; i++) {
        ArregloNuevo.push(segundo_arreglo[i]*2)
    }
    console.log("Arreglo nuevo:",ArregloNuevo)
    
}

array(arreglo1,arreglo2)
*/
// -------------------------------------------


// -------------- Pregunta 07 ---------------
/*
function clavepass(dato) {
    let clave="password"
    if(clave==dato)
    {
        console.log("La contraseña es correcta")
    }
    else
    {
        console.log("La contraseña es incorrecta")
    }
}

let pass=prompt("Ingrese contraeña")
pass=pass.toLowerCase()
clavepass(pass)
*/
// -------------------------------------------


// -------------- Pregunta 08 ---------------
/*
function preciocobro(dato_edad) {
    
    if(dato_edad<4)
    {
        console.log("Ingreso gratuito")
    }
    else if(dato_edad>=4 && dato_edad<=18)
    {
        console.log("El costo de la entrada es: 5€" )
    }
    else{
        console.log("El costo de la entrada es: 10€" )

    }
}

let edad=Number(prompt("Ingrese edad"))
preciocobro(edad)
*/
// -------------------------------------------


// -------------- Pregunta 09 ---------------
/*
function tributacion(dato_edad,dato_ingreso) {
    
    if(dato_edad>18 && dato_ingreso>=1000)
    {
        console.log("Sí tienes que tributar")
    }
    else
    {
        console.log("No tienes que tributar")
    }
    
}

let edad=Number(prompt("Introduce su edad"))
let ingreso=Number(prompt("¿Cuáles son tus ingresos mensuales?"))

tributacion(edad,ingreso)
*/
// -------------------------------------------


// -------------- Pregunta 10 ---------------
/*
function vehiculo(dato_diametro,dato_grosor) {
    
    if(dato_diametro>1.4)
    {
        console.log("La rueda es para un vehículo grande")
        if(dato_grosor<0.4)
        {
            console.log("El grosor para esta rueda es inferior al recomendado")
        }
    }

    if(dato_diametro>0.8 && dato_diametro<=1.4)
    {
        console.log("La rueda es para un vehículo mediano")
        if(dato_grosor<0.25)
        {
            console.log("El grosor para esta rueda es inferior al recomendado")
        }
    }

    if(dato_diametro<=0.8)
    {
        console.log("La rueda es para un vehículo pequeño")
    }

}

let diametro=Number(prompt("Introduce el diámetro de una rueda:"))
let grosor=Number(prompt("Ingrese el grosor de la rueda:"))

vehiculo(diametro,grosor)
*/
// -------------------------------------------


// -------------- Pregunta 11 ---------------
/*
const personas = [
    { nombre: 'boris', hobby: 'correr', salario: 2000 },
    { nombre: 'luis', hobby: 'cantar', salario: 1500 },
    { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
    { nombre: 'percy', hobby: 'cantar', salario: 1100 },
    { nombre: 'rosa', hobby: 'leer', salario: 3000 }];

const salario_mayor=personas.filter((persona)=>{
    if(persona.salario>1200)
    {
        return persona
    }
})

const primer_hobby=personas.find((persona)=>{
    if(persona.hobby=="cantar")
    {
        return persona
    }
})

function hobby_leer(arreglo) {
    let existe=false
    for(let i=0; i<arreglo.length;i++)
    {
        if (arreglo[i].hobby=="leer")
        {
            existe=true
        }
    }
    return existe
    
}

console.log("---Salarios mayores a 1200---")
console.log(salario_mayor)

console.log("---Hobby cantar---")
console.log(primer_hobby)

console.log("---Hobby leer---")
console.log(hobby_leer(personas))
*/
// -------------------------------------------


// -------------- Pregunta 12 ---------------
/*
const empleados = [
    { nombre: 'María', dia: 'Lunes'},
    { nombre: 'Luis', dia: 'Martes'},
    { nombre: 'Antonia', dia: 'Miercoles'},
    { nombre: 'Pedro', dia: 'Jueves'},
    { nombre: 'Marisa', dia: 'Viernes'}];


function encargado(arreglo,dato_dia) {
    
    for(let i=0; i<arreglo.length;i++)
    {
        if (arreglo[i].dia==dato_dia)
        {
            console.log("Este día se encarga ",arreglo[i].nombre)
        }
    }
}

let dia_sem=prompt("Ingrese dia")
encargado(empleados, dia_sem)
*/
// -------------------------------------------


// -------------- Pregunta 13 ---------------
/*
const almacen = [
    { producto: 'monitor', precio:200},
    { producto: 'teclado', precio:20},
    { producto: 'raton', precio:10}]


function almacen_precio(arreglo,dato_producto) {
    
    for(let i=0; i<arreglo.length;i++)
    {
        if (arreglo[i].producto==dato_producto)
        {
            console.log("El precio es: ",arreglo[i].precio)
        }
    }
}

let articulo=prompt("Ingrese el producto:")
almacen_precio(almacen, articulo)
*/
// -------------------------------------------























/*
// sumar todos los elementos
const numeros=[1,2,3,4]
// console.log(numeros)

let suma=0

numeros.forEach((numero)=>{
    suma=suma+numero
})
// console.log(suma)

// crear un arreglo de longitudes de palabras--------------

const frutas=["platano","manzana","fresa"];

const longitudes=frutas.map((fruta)=>{
    return fruta.length;
});
// console.log(longitudes)

// sumar numero pares-------------------
const numbers=[1,2,5,4,9,12]
let sum=0;

numbers.forEach((number)=>{
    if(number%2==0)
    {
        sum=sum+number
    }
})
// console.log(sum)

// sumar los valores de un array de objetos

const productos=[
    {nombre:"tv", precio:2000},
    {nombre:"celular", precio:1800},
    {nombre:"tablet", precio:900}
]


let totalprecios=0
productos.forEach((producto)=>{
    totalprecios=totalprecios+producto.precio;
})

// console.log(totalprecios)

// duplicar los numeros mayores a 5
const numeros2=[3,6,8,2]


const doble = numeros2.map((numero)=>{
    if(numero>5)
    {
        return numero*2
    }
    else
    {
        return numero
    }
    // numero > 5 ? numero*2 : numero
});
// console.log(doble)

// filtrar los productos mayores a 1000

const productos2=[
    {nombre:"tv", precio:2000},
    {nombre:"celular", precio:1800},
    {nombre:"tablet", precio:900}
]

console.log(productos2)

const productosmayores=productos2.filter((productosm)=>{
    return productosm.precio>1000
})
console.log(productosmayores)

*/
