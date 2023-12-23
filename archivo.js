
let consulta_productos;
let continuar;
let medios_de_pago;

function totalAPagar(medios_de_pago) {
    switch (medios_de_pago) {
        case "efectivo":
            return "El descuento es de un 15%"
            break;
        case "mercado de pago":
            return "El descuento es de un 25%"
            break;
        case "otro":
            return "No posse ningun descuento"
            break;
        default:
            return "Error no selecciono ningun medio de pago"
            break;
    }

}

let bienvenida = prompt("¿Desea realizar alguna consulta? Si/No").toLowerCase()
if (bienvenida === "no") {
    alert("Continue navegando")
}
else {
    let consulta = prompt("¿Que des consultar? 1) Precios o 2) Descuentos. Seleccione el numero de pregunta  ")

    if (consulta === "1") {
        alert("Listado de productos: Top coat, Limas, Cabinas led y pincel")
        do {
            consulta_productos = prompt("Ingrese el producto:Top coat, Limas, Cabinas led y pincel").toLocaleLowerCase()
            if (consulta_productos === "top coat") {
                alert("Los costo de los top coat varian desde $1300 hasta $4800")
            }
            else if (consulta_productos === "limas") {
                alert("El costo de las limas varian desde $500 hasta $650")
            }
            else if (consulta_productos === "cabinas led") {
                alert("Los costos varian desde $16999 hasta $55000")
            }
            else if (consulta_productos === "pincel") {
                alert("No se encuentran en stock consulte en otro momento");
            }
            continuar = prompt("¿Desea consultar otro precio? Si/No").toLowerCase()
        }
        while (continuar === "si") {
            if (continuar == "no") {
                alert("Continuar")
            }
        }
    }
    else {
        //CONSULTA DE DESCUENTO
        let consulta_descuento = prompt("¿Desea consutar descuentos segun los medios de pago? si o no").toLowerCase();
        if (consulta_descuento === "si") {
            medios_de_pago = prompt("¿Consultar decuento segun medio de pago? efectivo, mercado de pago u otro").toLowerCase();
            alert(totalAPagar(medios_de_pago));
            alert("Gracias por navegar en Meraki Nail")
        }
        else if (consulta_descuento === "no") {
            alert("Gracias por navegar en Meraki Nail")

        }
    }
}
//ARRAYS DE PRODUCTOS

const PRODUCTOS = [
    { id: 1, tipoDeProducto: "top", producto: "top cherimoya 15ml", precio: 4800 },
    { id: 2, tipoDeProducto: "top", producto: "top matte Charm limit 10ml", precio: 1300 },
    { id: 3, tipoDeProducto: "top", producto: "top cristal Charm limit 10ml", precio: 1500 },
    { id: 4, tipoDeProducto: "lima", producto: "lima 100/180 Chirimoya", precio: 500 },
    { id: 5, tipoDeProducto: "lima", producto: "lima 100/180 Angela B", precio: 600 },
    { id: 6, tipoDeProducto: "lima", producto: "lima 200/240 Chirimoya", precio: 650 },
    { id: 7, tipoDeProducto: "cabina", producto: "Cabina de uñas 48w Sunone", precio: 16999 },
    { id: 8, tipoDeProducto: "cabina", producto: "Cabina de uñas 48w City girl", precio: 55000 },
    { id: 9, tipoDeProducto: "cabina", producto: "Cabina de uñas 96w Gadnic", precio: 35000 }
]
//FILTRAR PRECIONDE MENOR A MAYOR
PRODUCTOS.sort(function (a, b) {
    return a.precio - b.precio
})
console.log(PRODUCTOS)

//BUSQUEDAD DE PRODUCTO

let buscar = prompt("Busque producto").toLocaleLowerCase()
let busquedaDeProducto = PRODUCTOS.filter(PRODUCTOS => PRODUCTOS.tipoDeProducto === buscar)
console.log(busquedaDeProducto)

//APLICAR DESCUENTO SEGUN MEDIO DE PAGO

class MedioDePago {
    constructor(medioDePago, descuento) {
        this.medioDePago = medioDePago;
        this.descuento = descuento;
    }
}
let medioDePago1 = new MedioDePago("efectivo", 0.85);
let medioDePago2 = new MedioDePago("mercado de pago", 0.75);
let medioDePago3 = new MedioDePago("otro", 0);
let precioTotal = 10000;


function aplicarDescuento(mediodepago, descuento, preciototal) {
    if (mediodepago === "efectivo") {
        return precioTotal * descuento

    }
    else if (mediodepago === "mercado de pago") {
        return precioTotal * descuento
    }
    else {
        return precioTotal
    }

}
console.log("Por pagar en efectivo se le otorga un descuento del 25% dejando un total de su compra de:" + " " + aplicarDescuento(medioDePago1.medioDePago, medioDePago1.descuento, precioTotal))
console.log("Por pagar con mercado de pago se le otorga un descuento del 25% dejando un total de su compra de:" + " " + aplicarDescuento(medioDePago2.medioDePago, medioDePago2.descuento, precioTotal))
console.log("El total es de: " + " " + aplicarDescuento(medioDePago3.medioDePago, medioDePago3.descuento, precioTotal))


//APLICAR DESCUENTO EL DIA DE SU CUMPLEÑOS
function descuentoEnCumpleaños(fechaCumpleaños, precioTotal) {
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    const mesActual = fechaActual.getMonth();
    const diaCumpleaños = fechaCumpleaños.getDate();
    const mesCumpleaños = fechaCumpleaños.getMonth();

    if (diaActual === diaCumpleaños && mesActual === mesCumpleaños) {
        const descuentoCumpleaños = 0.80
        const totalConDescuento = precioTotal * descuentoCumpleaños;
        return "¡Es tu cumpleaños! Se aplicó un descuento del 20%. Total a pagar:" + " " + totalConDescuento + " " + "pesos";
    } else {
        return "Total a pagar:" + precioTotal + "  " + "pesos";
    }
}

const fechaCumpleaños = new Date(prompt("Ingrese mes y dia de cumpleaños"));
console.log(descuentoEnCumpleaños(fechaCumpleaños, precioTotal));

function consultarEnvios(precioTotal, destino) {
    if (destino === "cordoba") {
        return "El costo de envio es de $1200 dejando un total de: " + (precioTotal + 1200)
    }
    else if (destino === "mendoza") {
        return "El costo de envio es de $1500 dejando un total de: " + (precioTotal + 1500)
    }
    else if (destino === "san juan") {
        return "El costo de envio es de $1500 dejando un total de: " + (precioTotal + 1500)
    }
    else if (destino === "san luis") {
        return "El costo de envio es de $1400 dejando un total de: " + (precioTotal + 1400)
    }
    else if (destino === "caba") {
        return "El costo de envio es de $1000 dejando un total de: " + (precioTotal + 1000)
    }
}
const destino = ["mendoza", "san juan", "san luis", "cordoba", "caba"]
console.log(consultarEnvios(precioTotal, destino[1]))