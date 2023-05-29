/* console.log("----------EJERCICIO 01")
let miNombre = "Fabio"

console.log("---------EJERCICIO 02")
let miApellido = "Aringoli"

console.log("---------EJERCICIO 03")
let miEdad = 24

console.log("---------EJERCICIO 04")
let miMascota = "Branca"

console.log("---------EJERCICIO 05")
let edadMascota = 13

console.log("---------EJERCICIO 06")
console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

console.log("---------EJERCICIO 07")
let nombreCompleto = miNombre + " " + miApellido 
console.log(nombreCompleto)

console.log("---------EJERCICIO 08")
let textoPresentacion = "Hola mi nombre es " + nombreCompleto + ", tengo " + miEdad + " años, mi mascota se llama " + miMascota + " Y tiene " + edadMascota + " años y es lo mas grande que hay"
console.log (textoPresentacion)

console.log("---------EJERCICIO 09")
let sumaEdades = miEdad + edadMascota
console.log(sumaEdad)
let restaEdades = miEdad - edadMascota
console.log(restaEdades)
let productoEdades = miEdad % edadMascota
console.log(productoEdades)
let divisionEdades = miEdad / edadMascota
console.log(divisionEdades)

console.log("---------EJERCICIO 10")
let textoPresentacion2 = "Hola mi nombre es " + nombreCompleto + ", tengo " + miEdad + " años, mi mascota se llama " + miMascota + " Y tiene " + edadMascota + " años y es lo mas grande que hay." +"Ademas hicimos unos calculos con la edad de mi perra, por ejemplo. " + "Nuestra: suma de edades da " + sumaEdades + "," + " resta de edades: " + restaEdades + ", " + " producto de edades: " + productoEdades + ", " + "division de edades: " + divisionEdades + "."

console.log("---------EJERCICIO 11")
let alumno = {
    nombre: "fabio",
    apellido: "aringoli",
    mochila: "jansport",
    cuadernillo: "rayado",
    escuela: "publica"
}
console.table(alumno)
console.table(alumno.nombre)
console.table(alumno.apellido)
console.table(alumno.mochila)
console.table(alumno.cuadernillo)
console.table(alumno.escuela)

console.log("---------EJERCICIO 12")
let mascota = {
    nombre: "branca",
    edad: 13,
    raza: "beagle",
    color: "tricolor",
    altura: "mediana"
}
console.table(mascota)
console.table(mascota.nombre)
console.table(mascota.edad)
console.table(mascota.color)
console.table(mascota.raza)
console.table(mascota.altura) */

/* console.log("---------EJERCICIO 13")
let arrFrutas = ["manzana", "pera", "durazno", "naranja", "mandarina"]
console.log(arrFrutas)
console.log(arrFrutas[0])
console.log(arrFrutas[1])
console.log(arrFrutas[2])
console.log(arrFrutas[3])
console.log(arrFrutas[4])

console.log("---------EJERCICIO 14")
let arrNumeros = [5, 10, 50, 80, 100]
console.log(arrNumeros)
console.log(arrNumeros[0])
console.log(arrNumeros[1])
console.log(arrNumeros[2])
console.log(arrNumeros[3])
console.log(arrNumeros[4])

console.log("---------EJERCICIO 15")
let familia = [
     persona1 = {
        nombre:"Fabio",
        apellido:"Aringoli",
        edad:24,
        nacionalidad:"Argentina",
        comidaFavorita:"Asado"
    },
    persona2 = {
        nombre:"Luciano",
        apellido:"Aringoli",
        edad:28,
        nacionalidad:"Argentina",
        comidaFavorita:"Milanesa napolitana"
    },
    persona3 = {
        nombre:"Julian",
        apellido:"Aringoli",
        edad:32,
        nacionalidad:"Argentina",
        comidaFavorita:"Guiso de lentejas"
    },
    persona4 = {
        nombre:"Bibiana",
        apellido:"Reggini",
        edad:60,
        nacionalidad:"Argentina",
        comidaFavorita:"Pastel de papa"
    },
    persona5 = {
        nombre:"Carlos",
        apellido:"Aringoli",
        edad:65,
        nacionalidad:"Argentina",
        comidaFavorita:"Añolotis"
    }
]
console.log(familia)
console.log(familia.persona1)
console.log(familia.persona2)
console.log(familia.persona3)
console.log(familia.persona4)
console.log(familia.persona5)

console.log("---------EJERCICIO 16")
let textoAleatorio = "A " + familia[4].nombre + " le gustan las " + arrFrutas[1] + ", " + "Se puede llegar a comer hasta " + arrNumeros[3]
console.log(textoAleatorio)


console.log("---------EJERCICIO 17")
let edadPropia = Number(prompt("Agregar edad"))
console.log(edadPropia)
let edadCompañero = Number(prompt("Edad del compañero"))
console.log(edadCompañero)
let comparacionEdad = edadPropia
let comparacionEdadCompañero = edadCompañero
console.log("mi edad es: " + comparacionEdad)
console.log("su edad es: " + comparacionEdadCompañero)
if(edadPropia > edadCompañero){
    console.log(true)
}else if(comparacionEdad < comparacionEdadCompañero){
    console.log(false)
}else{
   console.log(false)
}


console.log("---------EJERCICIO 18")

let soyMayor = 24
let sosMayorDeEdad = Number(prompt("ingresar edad"))
if(soyMayor > sosMayorDeEdad){
    console.log("Soy mayor de edad")
}else{
    console.log("No soy mayor de edad")
} 

console.log("---------EJERCICIO 19")
let edadPersona = parseInt(Number(prompt("Ingresar edad")))
let alturaPersona = parseInt(Number(prompt("Ingresar altura (ej: 150, 180)")))

let edadMinima = edadPersona >= 6
let alturaMinima = alturaPersona >= 120
let puedeSubir = edadMinima && alturaMinima
console.log("puede subir a la atraccion porque cumple con la edad minima de: " + edadMinima + " y tambien con la altura minima: " + alturaMinima)*/

console.log("---------EJERCICIO 20")
let paseIngresado = prompt("Introducir pase normal, VIP o limitado")
console.log(paseIngresado)
let saldoIngresado = Number(prompt("Introducir saldo disponible"))
console.log(saldoIngresado)
let saldoDisponible = saldoIngresado
let pase = paseIngresado
let puedePasar = saldoDisponible > 999 + " " && pase === "VIP"
console.log("¿La persona puede pasar? : " + puedePasar)

