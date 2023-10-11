const marcarCarrito =() =>{

    modal.innerHTML ="";
    modal.style.display= "flex";

    const modalHeader = document.createElement("div");
    modalHeader.className= "modalHeader"
    modalHeader.innerHTML = `
    <h2 class="tituloModal">Mi Carrito</h2>
    `;
    modal.append(modalHeader);

    const modalButtton =document.createElement("h2");
    modalButtton.innerText = " X ";
    modalButtton.className ="modalBoton";

    modalButtton.addEventListener("click" , ()=>{
        modal.style.display ="none";
    });

    modalHeader.append(modalButtton);

    carritoVacio.forEach((objeto) => {
    let contenedorCarrito = document.createElement("div");
    contenedorCarrito.className= "modalCarrito"
    contenedorCarrito.innerHTML = `
            <img src="${objeto.imagen}">
            <h3 class="nombreProduct">${objeto.nombre} </h3>
            <p class="precio"> ${objeto.precio} $<p/>
            <p>${objeto.cantidad} </p>
            <p>Total : ${objeto.cantidad * objeto.precio} </p>

    `;

    modal.append(contenedorCarrito);

    let eliminarProducto = document.createElement("span");

    eliminarProducto.innerText ="❌";
    eliminarProducto.className ="eliminar";

    eliminarProducto.addEventListener("click", eliminarProductoCarrito);

    modal.append(eliminarProducto);

    });

    const total =carritoVacio.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalPagar = document.createElement("div")
    totalPagar.className ="total"
    totalPagar.innerHTML = `Total a pagar: ${total}`

    modal.append(totalPagar);

    let pago =document.createElement("button")
    pago.className ="pago"
    pago.innerHTML= `Pagar`

    modal.append(pago);
};

mostrarCarrito.addEventListener("click", marcarCarrito);

const eliminarProductoCarrito =()=>{
     const encontrarId = carritoVacio.find((element)=> element.id);

     carritoVacio =carritoVacio.filter((carritoId)=>{
        return carritoId !== encontrarId;
     });

     contadorCarrito();
     contadorCarrito();
     marcarCarrito();
};

const contadorCarrito = ()=>{
    cantidadCarrito.style.display= "block";

    const carritoLength = carritoVacio.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};
contadorCarrito();


