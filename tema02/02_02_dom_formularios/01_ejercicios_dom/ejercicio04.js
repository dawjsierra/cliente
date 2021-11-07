function insertar(){
    var nombre = prompt("nombre de la planta");
    var ubicacion = prompt("ubicacion de la planta");
    var ejemplares = prompt ("ejemplares de la planta");
    var flor = prompt("flor");

    var tabla = document.getElementById("tabla");
    var linea = document.createElement("tr");
    var celda = document.createElement("td");
    var texto = document.createTextNode(nombre);

    celda.appendChild(texto);
    linea.appendChild(celda);
    tabla.appendChild(linea);
}