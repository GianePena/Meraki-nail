


let productos;
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
    let consulta = prompt("¿Que des consultar? 1)precios o 2)Descuentos segun medio de pago. Seleccione el numero de pregunta  ")

    if (consulta === "1") {
        alert("Listado de productos: Top coat, Limas, Cabinas led y pincel")
        do {
            productos = prompt("Ingrese el producto:Top coat, Limas, Cabinas led y pincel").toLocaleLowerCase()
            if (productos === "top coat") {
                alert("Los costo de los top coat varian desde $1300 hasta $4800")
            }
            else if (productos === "limas") {
                alert("El costo de las limas varian desde $500 hasta $650")
            }
            else if (productos === "cabinas led") {
                alert("Los costos varian desde $16999 hasta $55000")
            }
            else if (productos === "pincel") {
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