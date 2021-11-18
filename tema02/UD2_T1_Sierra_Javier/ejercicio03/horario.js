function init(){

    //introducimos datos en el array
    var actividades = ["Crossfit","Zumba","Bodypump","Spinning","Pilates","Yoga"];
    var fisios = ["Marta","Marcos","Sergio","Laura","Ivan","Pablo"];

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
    for(var i = 1; i<7;i++){//filas
        for(j = 1; j<7;j++){//columnas
            //para rellenar un horario "mezclado", pero que sea fijo, he decidido que dependiendo del numero
            //de iterador se rellene con un valor u otro, para que no cambie de valor nunca ni sea todo igual
            if(i%2==0){
                filasAct[i].innerHTML += "<td>"+actividades[i-1]+"</td>";
            }else{
                filasAct[i].innerHTML += "<td>"+actividades[j-1]+"</td>";
            }
        }
    }

    //similar al anterior
    for(var i = 1; i<11;i++){//filas
        for(j = 1; j<6;j++){//columnas
            if(i%2==0){
                filasFis[i].innerHTML += "<td>"+fisios[i/2]+"</td>";
            }else{
                filasFis[i].innerHTML += "<td>"+fisios[j-1]+"</td>";
            }
        }
    }

}