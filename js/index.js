let carritoVacio = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorCompras =document.getElementById("contenedorCompras");
const mostrarCarrito =document.getElementById("mostrarCarrito");
const modal =document.getElementById("contenedorModal");
const cantidadCarrito =document.getElementById("cantidadProductos");

arrayProductos.forEach((objeto)=>{
    const contenedor =document.createElement("div");
    contenedor.className ="tarjeta"
    contenedor.innerHTML = `
    <img src="${objeto.imagen}">
    <h3>${objeto.nombre}</h3>
    <p>${objeto.precio} $ </p>
    `;

    contenedorCompras.append(contenedor);

    let compra =document.createElement("button")
    compra.className="botonCompra"
    compra.innerText ="comprar";

    contenedor.append(compra);

    compra.addEventListener("click", ()=>{

    const repetir = carritoVacio.some((repetirProducto) => repetirProducto.id ===objeto.id);

    if(repetir){
        carritoVacio.map((el) => {
            if(el.id === objeto.id){
                el.cantidad++;
            }
        })

    }else{
        carritoVacio.push({
            id : objeto.id,
            imagen : objeto.imagen,
            nombre : objeto.nombre,
            precio : objeto.precio,
            cantidad: objeto.cantidad,
            
        });
        console.log(carritoVacio);
        contadorCarrito();
        guardarLocal();
    };
    });
});

const guardarLocal = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));

}


