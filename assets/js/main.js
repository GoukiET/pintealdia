let productos = [];


function agregarProducto(producto){ //CREATE
    let existe = productos.find((elemento) => elemento.id === producto.id)

    if(!existe){ //Si el producto no existe ejecuta el push
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos))
    }

/*     if(existe === undefined){
        productos.push(producto);
    } */
}
let productoNuevo = {
    id: 1,
    nombre: 'Memoria RAM',
    precio: 18990,
    descripcion: 'Memoria RAM de 12GB'
}

/* console.log(productos); */


function obtenerProductos(){ //READ

}

function editarProducto(){ //UPDATE

}

function eliminarProducto(id){ //DELETE
    productos = productos.filter((elemento) => elemento.id !== id);
    localStorage.setItem('productos', JSON.stringify(productos));
    
}


function filtrarProducto(){

}

function ordenarProductos(){

}

