function init(){

    //introducimos datos en el array
    var actividades = ["Crossfit","Zumba","Bodypump","Spinning","Pilates","Yoga","Kickboxing"];
    var fisios = ["Marta","Marcos","Sergio","Laura","Paula"];

    //seleccionamos los elementos con el id de las tablas a escoger
    var tablaAct = document.getElementById("actividades");
    var tablaFisios = document.getElementById("fisios");

    //les damos bordes
    tablaAct.setAttribute("border",1);
    tablaFisios.setAttribute("border",1);

    //seleccionamos las filas de la tabla de actividades (tablerow)
    var filasAct = tablaAct.getElementsByTagName("tr");
    //seleccionamos las filas de la tabla de fisios
    var filasFis = tablaFisios.getElementsByTagName("tr");

    //for anidado. Primero recorrerá las filas y pasará a la siguiente columna rellenandolo con el array (random)
    for(var i = 1; i<7;i++){
         for(j = 1; j<7;j++){
            var aleatorio = Math.round(Math.random()*4);
            filasAct[i].innerHTML += "<td>"+actividades[aleatorio]+"</td>";
         }
    }

    //similar al anterior
    for(var i = 1; i<10;i++){
        for(j = 1; j<6;j++){
            var aleatorio = Math.round(Math.random()*4);
            filasFis[i].innerHTML += "<td>"+fisios[aleatorio]+"</td>";
         }
    }

}