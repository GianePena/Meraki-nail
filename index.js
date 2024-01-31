//BANNER
localStorage.clear()
let bannerDescuento = document.getElementById("bannerDescuento")
let divDescuento = document.createElement("div")
divDescuento.className = "bannerImg"
divDescuento.innerHTML = `<img class="banner" src=imagenes/banner_descuento.png>`

let bannerSinDescuento = document.getElementById("bannerSinDescuento")
let divNormal = document.createElement("div")
divNormal.className = "bannerImg"
divNormal.innerHTML = `<img class="banner" src=imagenes/banner_normal.png>`


let hoy = new Date()
console.log(hoy)
let mostrarBannerSegunFecha = hoy.getDay()
console.log(mostrarBannerSegunFecha)
mostrarBannerSegunFecha === 5 || mostrarBannerSegunFecha === 6 || mostrarBannerSegunFecha === 0 ? bannerDescuento.appendChild(divDescuento) : bannerSinDescuento.appendChild(divNormal)
//CONSULTAS DESCUENTOS
let consultaDescuento = document.getElementById("consultaMediosDePago")
let resultadoDescuent = document.getElementById("resultadoMediosDePago")
consultaDescuento.addEventListener("change", function () {
    const opcion = consultaDescuento.value
    switch (opcion) {
        case "mercado de pago":
            resultadoDescuent.textContent = "Descuento de 15%"
            break;
        case "efectivo":
            resultadoDescuent.textContent = "Descuento de 25%"
            break;
        case "otro":
            resultadoDescuent.textContent = "No posee ningun descuento"
            break;
        default:
            resultadoDescuent.textContent = "seleccione un medio de pago"
    }

}
)

//MENSAJE DE SUBSCRIPCION

let formularioDeSubscripcion = document.getElementById("formulario")

class cliente {
    constructor(nombre, apellido, email, username) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.username = username
    }
}
let arrayClientes = []









function mostrarFormulario() {
    formularioDeSubscripcion.style.display = "block";
}

setTimeout(mostrarFormulario(), 1000)


let username
function obtenerDatosCliente() {
    return new Promise((resolve, reject) => {
        formularioDeSubscripcion.addEventListener("submit", (event) => {
            event.preventDefault();
            const nombre = document.querySelector("#nombre").value;
            const apellido = document.querySelector("#apellido").value;
            console.log("Nombre y apellido: " + nombre + " " + apellido)
            const email = document.querySelector("#email").value;
            console.log("Email: " + email)
            username = document.querySelector("#username").value;

            const cliente1 = new cliente(nombre, apellido, email, username);
            localStorage.setItem('cliente', JSON.stringify(cliente1));
            mostrarNombreDeUsuario()
            if (nombre && apellido && email && username) {
                formularioDeSubscripcion.style.display = "none";
                mostrarSaludo(username);
                formularioDeSubscripcion.reset();
                resolve("Su subscripción fue enviada");
            } else {
                reject("Por favor, complete el formulario");
            }
        });
    });
}

obtenerDatosCliente()

    .then((mensaje) => {
        Swal.fire({
            icon: "success",
            text: "Su subscripcion fue enviada",
            showConfirmButton: false,
            timer: 1500,
            backdrop: `rgba(6,6,6, 0.7)`,
        });
    })
    .catch((error) => {
        Swal.fire({
            icon: "error",
            text: error,
            showConfirmButton: true,
        });
        formularioDeSubscripcion.style.display = "none";
    });

function sacarFormulario() {
    const btnSalir = document.getElementById("btnSalir")
    formularioDeSubscripcion.style.display = "none";
}
const saludo = document.getElementById("saludo");
let indice = 0;

function mostrarSaludo() {
    const saludoNombre = "Hola" + " " + username + ", bienvenida/o a MerakiNails !!!";
    saludo.textContent += saludoNombre[indice];
    indice++;
    if (indice < saludoNombre.length) {
        setTimeout(mostrarSaludo, 100);
    }

}

function mostrarNombreDeUsuario() {
    const usuario = document.getElementsByClassName("nombreDeUsuario")[0]
    usuario.textContent = `
    ${username}`
}

//PRODUCTOS
class producto {
    constructor(id, tipodeproducto, producto, precio, img) {
        this.id = id
        this.tipodeproducto = tipodeproducto,
            this.producto = producto,
            this.precio = precio,
            this.img = img
    }
}

let producto1 = new producto(1, "top", "Top cherimoya 15ml", 4800, "imagenes/productos/top_chirimoya.png")
let producto2 = new producto(2, "top", "Top matte Charm limit 10ml", 1300, "imagenes/productos/top_mate.jpeg")
let producto3 = new producto(3, "top", "Top cristal Charm limit 10ml", 1500, "imagenes/productos/top_cristal.jpeg")
let producto4 = new producto(4, "lima", "Lima 100/180 Chirimoya", 500, "imagenes/productos/lima_chirimoya.jpeg")
let producto5 = new producto(5, "lima", "Lima 200/240 Chirimoya", 650, "imagenes/productos/lima_chirimoya_200:240.jpeg")
let producto6 = new producto(6, "lima", "Lima 100/180 Angela B", 600, "imagenes/productos/lima_angela.jpeg")
let producto7 = new producto(7, "cabina", "Cabina de uñas 48w Sunone", 16999, "imagenes/productos/cabina_sunone.jpeg")
let producto8 = new producto(8, "cabina", "Cabina de uñas 48w City girl", 55000, "imagenes/productos/cabina_citygirl.jpeg")
let producto9 = new producto(9, "cabina", "Cabina de uñas 96w Gadnic", 35000, "imagenes/productos/cabina_gadnic.webp")


let arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]
let carrito = []




function mostrarProductosFiltrados(productos) {
    let contenedorProductos = document.getElementById("contenedorProductos");
    contenedorProductos.innerHTML = " ";
    productos.forEach(producto => {
        const cardsProductos = document.createElement("div");
        cardsProductos.classList = "cardsProductos";
        cardsProductos.innerHTML = `
                <img class="cardsProductosImg" src="${producto.img}" >
                <h5 class="productoNombre">${producto.producto}</h5>
                <p>${"$" + producto.precio}</p>
                <button class="boton" onclick="agregarACarrito(${producto.id})">Agregar al carrito</button>`;

        contenedorProductos.appendChild(cardsProductos);
    });
}

mostrarProductosFiltrados(arrayProductos);

function filtrarTops() {
    const productosTop = arrayProductos.filter(producto => producto.tipodeproducto === "top");
    mostrarProductosFiltrados(productosTop);
}
function filtrarLimas() {
    contenedorProductos.innerHTML = " "
    const productosLima = arrayProductos.filter(producto => producto.tipodeproducto === "lima");
    console.log(productosLima)
    mostrarProductosFiltrados(productosLima)
}

function filtrarCabinas() {
    contenedorProductos.innerHTML = " "
    const productosCabina = arrayProductos.filter(producto => producto.tipodeproducto === "cabina");
    console.log(productosCabina)
    mostrarProductosFiltrados(productosCabina)
}


//FILTRAR PRODUCTOS

let arrayProductosOriginal = [...arrayProductos];
let arrayProductosFiltrados = false;


function filtrarPorPrecio() {
    if (!arrayProductosFiltrados) {
        arrayProductos.sort((a, b) => a.precio - b.precio);
        arrayProductosFiltrados = true;
    } else {
        arrayProductos = [...arrayProductosOriginal];
        arrayProductosFiltrados = false;
    }
    mostrarProductosFiltrados(arrayProductos);
}

mostrarProductosFiltrados(arrayProductos);



let showTitle = false
let seleccionDestinoVisible = false;
let carritoLimpio = false
//AGREGAR AL CARRITO




function agregarACarrito(idProducto) {
    if (!showTitle) {
        console.log('ENTRO AL IF')
        document.getElementById("carrito-title").style.display = "block";
        showTitle = true
    }
    const agregarProducto = arrayProductos.find(producto => producto.id === idProducto)
    if (agregarProducto) {
        carrito.push(agregarProducto)
        actualizarCarrito()

    }
    localStorage.setItem('carrito', JSON.stringify(carrito))
    if (!seleccionDestinoVisible) {
        seleccionarDestino();
        seleccionDestinoVisible = true;
    }
    if (!carritoLimpio) {
        carritoVisible.style.display = "block"
    }
}

function actualizarCarrito() {
    const resultado = document.getElementById("total")
    resultado.innerHTML = " ";
    carrito.forEach((producto, index) => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML =
            `<button id="eliminarProductoCarrito" onclick="eliminarProducto(${index})">X</button>
            <img class="carritoImg" src="${producto.img}" >
            <h5 class="carritoProducto">${producto.producto}</h5>
            <p>${"$" + producto.precio}</p> <hr>
            `
        resultado.appendChild(card)
    }
    )

    sumarTotalCarrito()
    console.log(carrito)

}

mostrarProductosFiltrados(arrayProductos)

function eliminarProducto(index) {
    carrito.splice(index, 1)
    actualizarCarrito()
}



function seleccionarMedioDePago() {
    const mediosDePago = document.getElementById("seleccionMedioDePago");
    mediosDePago.innerHTML = "";
    const seleccion = document.createElement("div");
    seleccion.classList.add(`seleccion`);
    seleccion.innerHTML = `
        <h6> Seleccionar medio de pago: </h6>
        <select name="mediosDePago" id="medioDePago" onchange="aplicarDescuentoACarrito()">
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="mercado de pago"> Mercado de pago</option>
            <option value="efectivo">Efectivo</option>
            <option value="otro">Otro</option>
        </select>`
        ;
    mediosDePago.appendChild(seleccion);
}

function calcularDescuentoSegunMedioDePago() {
    if (document.getElementById("medioDePago")) {
        const medioDePago = document.getElementById("medioDePago").value
        if (medioDePago === "efectivo") {
            return 0.15;
        } else if (medioDePago === "mercado de pago") {
            return 0.25;
        } else {
            return 0;
        }
    }
}


function seleccionarDestino() {
    const destino = document.getElementById("contenedorDestino");
    const seleccionarDestino = document.createElement("div");
    seleccionarDestino.classList.add(`seleccionarDestino`)
    seleccionarDestino.innerHTML = `
        <h6> Destino o retiro en el local: </h6>
        <select name="destino" id="destinoDeEntrega" onchange="aplicarDescuentoACarrito()">
        <p>Seleccionar metodo de entrega: retiro en el local o destino de entrega</p>
            <option value="" disabled selected>Selecciona una opción</option>
            <option value="mendoza"> Mendoza</option>
            <option value="cordoba">Cordoba</option>
            <option value="caba">CABA</option>
            <option value="san luis">San Luis</option>
            <option value="san juan">San Juan</option>
            <option value="retiro en el local">Retiro en el local</option>
        </select>`
        ;

    destino.appendChild(seleccionarDestino)

}

function calculaCostoConEnvio() {
    if (document.getElementById("destinoDeEntrega")) {
        const destinoElement = document.getElementById("destinoDeEntrega");
        if (destinoElement) {
            const destino = destinoElement.value;
            switch (destino) {
                case "mendoza":
                    return 1500;
                case "cordoba":
                    return 1800;
                case "caba":
                    return 1000;
                case "san luis":
                case "san juan":
                    return 1400;
                case "retiro en el local":
                    return 0;
                default:
                    return 0;
            }
        }

    }
}




function sumarTotalCarrito() {
    const element = document.getElementById("resultadoTotal")
    const totalSinDescuento = carrito.reduce((acc, producto) => acc + producto.precio, 0)
    element.innerHTML = `<p>Total $${totalSinDescuento}</p>`
    seleccionarMedioDePago()
    mostrarBotonCompra()

}


function aplicarDescuentoACarrito() {
    const elementParcial = document.getElementById("resultadoParcial")
    const elementDescuento = document.getElementById("descuento")
    const element = document.getElementById("resultadoTotal")
    const descuento = calcularDescuentoSegunMedioDePago();
    const envios = calculaCostoConEnvio();
    const totalSinDescuento = carrito.reduce((acc, producto) => acc + producto.precio, 0)
    const totalConDescuento = totalSinDescuento * (1 - descuento)
    elementParcial.innerHTML = `<p>Subtotal $${totalSinDescuento}</p>`;
    elementDescuento.innerHTML = `<p>Descuento %${descuento * 100}</p>`;
    element.innerHTML = `<p>Total con descuento $${totalConDescuento + envios}</p>`;
    localStorage.setItem('total de la compra', JSON.stringify(totalConDescuento + envios))
}


function mostrarBotonCompra() {
    document.getElementById("btnConfirmar").style.display = "block"

}
function mostrarMensajeDeAgradecimiento() {
    Swal.fire({
        title: "Confirmar compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#89004f",
        cancelButtonColor: "#89004f",
        confirmButtonText: "Confirmar",
        backdrop: `
    rgba(6,6,6,0.7)`
    }).then((result) => {
        if (result.isConfirmed) {
            actualizarCarrito();
            mostrarProductosFiltrados(arrayProductos);
            Swal.fire({
                icon: "success",
                title: "Compra confirmada!",
                text: "Gracias por comprar en MerakiNails",
                backdrop: `
                rgba(6,6,6,0.7)`,
            });
        }
        console.log("Compra realizada con exito")
        limpiarCarrito()
    });
}
function limpiarCarrito() {
    carritoVisible.style.display = "none"
    carrito = []
    localStorage.removeItem(`carrito`)
    localStorage.removeItem(`destino de entrega`)
    localStorage.removeItem(`total de la compra`)
    console.log(carrito)
    actualizarCarrito()

}
//CONSULTAR COSTO DE ENVIO
let calcularPrecioDeEnvio = document.getElementById("destino")
let resultadoEnvio = document.getElementById("resultadoEnvio")

calcularPrecioDeEnvio.addEventListener("change", function () {
    const destino = calcularPrecioDeEnvio.value
    if (destino === "cordoba") {
        resultadoEnvio.textContent = " El costo de envio es de $1800"
    }
    else if (destino === "mendoza") {
        resultadoEnvio.textContent = " El costo de envio es de $1500"
    }
    else if (destino === "san juan") {
        resultadoEnvio.textContent = " El costo de envio es de $1400"
    }
    else if (destino === "san luis") {
        resultadoEnvio.textContent = " El costo de envio es de $1400"
    }
    else if (destino === "caba") {
        resultadoEnvio.textContent = " El costo de envio es de $1000"
    }
    else if (destino === "seleccionar provincia") {
        resultadoEnvio.textContent = ""
    }
})

//COMO COMPRAR

function mostarPasosCompra() {
    document.getElementById("comoComprar").style.display = "block";
}




//FETCH

const contenedorDeComentarios = document.querySelector(".comentarios");

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        mostrarComentarios(data)
    })
    .catch(error => console.log(error))
    .finally(() => console.log("proceso fianlizado"))

function mostrarComentarios(datos) {
    datos.filter(comment => comment.id < 10).forEach(comment => {
        const comentario = document.createElement(`div`)
        comentario.innerHTML = `
        <p>${comment.email}</p>
        <p>${comment.body}</p>`
        contenedorDeComentarios.appendChild(comentario)

    })

}
