function init(){

    var actividades = ["Crossfit","Zumba","Bodypump","Spinning","Pilates"];
    var fisios = ["Marta","Marcos","Sergio","Laura","Paula"];

    
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var tablaAct = document.getElementById("actividades");
    var tablaFisios = document.getElementById("fisios");
    tablaAct.setAttribute("border",1);
    tablaAct.setAttribute("border",1);

    var filasAct = tablaAct.getElementsByTagName("tr");
    var filasFis = tablaFisios.getElementsByTagName("tr");

    for(var i = 1; i<7;i++){
         for(j = 1; j<7;j++){
            var aleatorio = Math.round(Math.random()*4);
            filasAct[i].innerHTML += "<td>"+actividades[aleatorio]+"</td>";
         }
    }

    for(var i = 1; i<11;i++){
        for(j = 1; j<6;j++){
            var aleatorio = Math.round(Math.random()*4);
            filasFis[i].innerHTML += "<td>"+fisios[aleatorio]+"</td>";
         }
    }


}