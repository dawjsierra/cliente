function generarPlanta(){
    var nombre = prompt("Nombre de la planta");
    var ubicacion = prompt("Ubicacion de la planta");
    var ejemplares = prompt("Ejemplares de la planta");
    var flor = prompt("Flor");

    var tabla = document.getElementById("tablaPlantas");

    tabla.innerHTML+="<tr><td>"+nombre+"</td><td>"+ubicacion+"</td><td>"+ejemplares+"</td><td>"+flor+"</td></tr>";
}

/* BORRAR NODOS */
/* TE SITUAS EN EL ELEMENTO > VAS AL PADRE DEL ELEMENTO > BORRAS EL HIJO */
function borrarFila(){
    var fila = document.getElementsByTagName("tr");
    fila[fila.length-1].parentNode.removeChild(fila[fila.length-1]);
}