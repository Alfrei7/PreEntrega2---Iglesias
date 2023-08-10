
let carrito = [];

// array de productos con imágenes
let productos = [
  { id: 1, nombre: "Celular", precio: 100, imagen: "../media/celular.jpeg" },
  { id: 2, nombre: "xBox", precio: 150, imagen: "../media/consolanueva.pjeg.png" },
  { id: 3, nombre: "Consola retro", precio: 150, imagen: "../media/consolaRetro.jpeg" },
  { id: 4, nombre: "Notebook", precio: 150, imagen: "../media/pcpersonal.jpeg" },
  
];



// funcipn para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  const productoEncontrado = productos.find(producto => producto.id === idProducto);

  if (productoEncontrado) {
      carrito.push(productoEncontrado);
      actualizarCarrito();
  } else {
      console.log("Producto no encontrado.");
  }
}

// Función para actualizar el contenido del carrito en la página
function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = "";

  carrito.forEach(producto => {
      const li = document.createElement("li");
      li.innerText = `${producto.nombre} - Precio: $${producto.precio}`;
      listaCarrito.appendChild(li);
  });
  
}
function limpiarCarrito() {
  carrito = []; 
  actualizarCarrito(); 
  calcularTotal(); 
}
// función para guardar los cambios del carrito 
function finalizarCompra() {
  
  alert("Cambios guardados exitosamente.");
}

function guardarCarrito() {
  
  alert("Cambios guardados exitosamente.");
}

  function finalizarCompra() {
  
    alert("Tu compra ha finalizado.");
  }

    function limpiarCarritoCarrito() {
  
      alert("Limpiaste tu carrito de compras.");
    }

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  const productosContainer = document.getElementById("productos");
  
  productos.forEach(producto => {
      const divProducto = document.createElement("div");
      divProducto.className = "producto";
      divProducto.innerHTML = `
          <h3>${producto.nombre}</h3>
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
          <p>Precio: $${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
      productosContainer.appendChild(divProducto);
  });
});

function agregarAlCarrito(idProducto) {
  const productoEncontrado = productos.find(producto => producto.id === idProducto);

  if (productoEncontrado) {
      carrito.push(productoEncontrado);
      actualizarCarrito();
      calcularTotal(); 
  } else {
      console.log("Producto no encontrado.");
  }
}

function eliminarDelCarrito(idProducto) {
  carrito = carrito.filter(producto => producto.id !== idProducto);
  actualizarCarrito();
  calcularTotal(); 
}