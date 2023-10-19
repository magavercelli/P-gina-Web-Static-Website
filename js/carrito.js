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
            <span class="restar"> - </span>
            <p>Cantidad: ${objeto.cantidad} </p>
            <span class="sumar"> + </span>
            <p>Total : ${objeto.cantidad * objeto.precio} </p>
            <span class="eliminar"> ❌ </span>

    `;

    modal.append(contenedorCarrito);

    let restarProducto = contenedorCarrito.querySelector(".restar");

    restarProducto.addEventListener("click", ()=> {
        if(objeto.cantidad != 1){
        objeto.cantidad--;
    };
        guardarLocal();
        marcarCarrito();
    });

    let sumarProducto =contenedorCarrito.querySelector(".sumar");

    sumarProducto.addEventListener("click", () => {
        objeto.cantidad++;
        guardarLocal();
        marcarCarrito();
    });

    let eliminarProducto = contenedorCarrito.querySelector(".eliminar");

    eliminarProducto.addEventListener("click", () => {
        eliminarProductoCarrito(objeto.id);
    });

    });

    const total =carritoVacio.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalPagar = document.createElement("div")
    totalPagar.className ="total"
    totalPagar.innerHTML = `Total a pagar: ${total}`

    modal.append(totalPagar);

    let pago =document.createElement("button")
    pago.className ="pago"
    pago.innerHTML= `Pagar`;
    
   

    document.body.appendChild(pago);

    pago.onclick = function (){
       
        Swal.fire ({
            position: 'center',
            icon: 'success',
            title: 'Pago realizado exitosamente',
            showConfirmButton: false,
            timer: 1500
        })

    }
    modal.append(pago);
  
};

mostrarCarrito.addEventListener("click", marcarCarrito)

const eliminarProductoCarrito =(id)=>{
     const encontrarId = carritoVacio.find((element)=> element.id=== id);

     carritoVacio =carritoVacio.filter((carritoId)=>{
        return carritoId !== encontrarId;
     });

     contadorCarrito();
     guardarLocal();
     marcarCarrito();
};


const contadorCarrito = ()=>{
    cantidadProductos.style.display = "block";
    
    const carritoLength = carritoVacio.length;
   
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadProductos.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

contadorCarrito();


