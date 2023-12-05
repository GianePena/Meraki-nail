
//objetos estructura
/*let persona = {
    nombre: "maximiliano", //clase:"valor",
    edad:31,
    estadoCivil:"soltero" //el ultimo nunca va con ,

}
console.log(persona)
console.log(persona.nombre)
*/

//para sumar un dato
/*let persona = {
    nombre: "maximiliano", //clase:"valor",
    edad:31,
    estadoCivil:"soltero" //el ultimo nunca va con ,

}
persona.nombre="adrian"
console.log(persona.nombre)
*/

//ingresar datos de una persona
/*
let persona = {
    nombre:"",
    apellido: ""
}
persona.nombre = prompt("Ingrese nombre");
persona.apellido = prompt("Ingrese apellido")

console.log(persona)*/

//OBJETO CONSTRUCTOR O FUNCION CONSTRUCTORAS  es una funcion que se utiliza pra crear instancias de obejtos, define y crean objetos co propiedades y metodos


/* variable objetoAcrear=new objeto("argumentos a pasar")
*/
//ejemplo para carrito de compra
/*
function Productos(id, nombre, precio, cantidad) //estos son paramertro
{
    this.id = id,
    this.nombre = nombre,
    this.precio = precio,
    this.cantidad = cantidad

}
//hay que pasar datos a este objeto contructor--> new hace referencia que se crea un nuevo objeto

let Producto1 = new Productos(1, "arrroz", 1400, 2);//estos con argumentos
//lo + nomal la creacion de objeto se usa con CONST y no con let
console.log(Producto1)

let Producto2 = new Productos(2, "harina", 1400, 2);
console.log(Producto1, Producto2) //se pueden llamar a los 2 por separado
*/

//METOS Y OPERACIONES CON OBJETOS --> son acciones o funciones que se puedden realizar dentro del objeto o en sus propiedades
/*
let coche = {
    marca: "toyota",
    modelo:"corolla",
    //podemos usar una clave para olojar una funcion
    arrancar: function (){
        console.log("el coche arranca...")
    }
}
coche.arrancar()*/


//ejemplo de prodictos con IVA
/*const IVA= 1.21

function producto(nombre, precio, stock) {
    this.nombre= nombre,
    this.precio=precio,
    this.stock =stock,
    this.precioConIva= function(){
        let precioFinal=this.precio*IVA;
        return "$" + precioFinal
    }
    
}
const PROD1 =new producto("arroz", 1200, 1);
PROD1.precioConIva();
*/

//OPERADO IN  Y FOR IN --> sirven para itterar sobre las propiedade de los objetos
 //oprador in--> sirvempara verificar si una prop especifica existe dentro de un objeto--> si es verdadero devuelve true 
 /*let persona = {
    nombre: "juan",
    edad:20
 }
 if ("pedro" in persona){
    console.log("la propiedad nombre existe")
 }else{
    console.log("esto no esta")
 }
 
 //bucle for in--> sirve para itera sobre las propiedades de un objeto


for( let propiedad in persona){
    console.log(propiedad + persona[propiedad])
}//al poner persona y [personas] llamas al valor de las propiedades
//en propiedades llamas a las propiedades
*/

//CLASES 
class persona {
    constructor(nombre, edad){//recibe los prametros
        this.nombre=nombre,
        this.edad=edad
    }
    saludar(){
        console.log(`hola soy ${this.nombre} y tengo ${this.edad}` ) //otra manera de concatenar 
    }
}

//creamos instancias de la clases
const persona1 =new persona ("juan", 10)
const persona2 =new persona ("maria", 12)
console.log(persona1)
persona1.saludar()























