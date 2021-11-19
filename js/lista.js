const elemento = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const boton = document.getElementById("btnEnviar");
const boton2 = document.getElementById("btnEliminar");

boton.addEventListener("click", agregar);
boton2.addEventListener('click', eliminar);

const listaSuper = document.getElementById("listaProductos");

var contador = 3;

var miarray = [
  { id: 0, nombre: "Pan" },
  { id: 1, nombre: "Coca" },
  { id: 2, nombre: "Azucar" },
];

function recorrerArray() {
  listaSuper.innerHTML = '';

  for (let index = 0; index < miarray.length; index++) {
    var element = miarray[index];
    listaSuper.innerHTML += ` ${element.id} - ${element.nombre} <br> `;
  }


}

function agregar() {
  var obj = {
    id: contador,
    nombre: elemento1.value,
  };
  miarray.push(obj);
  contador++;
  recorrerArray();
}

function eliminar() {
  miarray.splice(elemento2.value, 1);
  recorrerArray();
}

recorrerArray();