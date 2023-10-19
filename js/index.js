const contenedorCompras =document.getElementById("contenedorCompras");
const mostrarCarrito =document.getElementById("mostrarCarrito");
const modal =document.getElementById("contenedorModal");
const cantidadProductos =document.getElementById("cantidadProductos");
const btnPagar = document.getElementById("btnPagar");

let carritoVacio = JSON.parse(localStorage.getItem("carrito")) || [];


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
        console.log(carritoVacio.length);
        contadorCarrito();
        guardarLocal();
    };
    });
});

const guardarLocal = ()=>{
    localStorage.setItem("carrito", JSON.stringify(carritoVacio));

}

const horaActual = document.getElementById("hora");

fetch('http://worldtimeapi.org/api/ip')
  .then(response => response.json())
  .then(data => {
    const div = document.createElement("div");
    div.className = "hora_actual";
    div.innerHTML = `<p> ${data.datetime}</p>`;
    horaActual.append(div);
  });
 




