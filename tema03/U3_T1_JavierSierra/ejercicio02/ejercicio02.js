class Aeropuerto{
    constructor(nombre, ciudad, vuelos){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.vuelos = vuelos;
    }
}

class Vuelo{
    constructor(codigo, hSalida, mSalida, hLlegada, mLlegada){
        this.codigo = codigo;

        this.llegada = new Date();
        this.llegada.setHours(hLlegada);
        this.llegada.setMinutes(mLlegada);

        this.salida = new Date();
        this.salida.setMinutes(mSalida);
        this.salida.setHours(hSalida);
    }

    modificarSalida(boton){
        var contador = boton.id;
        var tablaVuelos = document.getElementById("tablaVuelos");
        var celdas = tablaVuelos.getElementsByTagName("td");

        alert(celdas[contador-2].value);
    }

    insertarTabla(codigo, salida, llegada, hSalida, mSalida, hLlegada, mLlegada){
        var cod = codigo;
        var sal = salida;
        var llega = llegada;
        var horaSalida = hSalida;
        var minutosSalida = mSalida;
        var horaLlegada = hLlegada;
        var minutosLlegada = mLlegada;

        var vuelo1 = new Vuelo (cod, horaSalida, minutosSalida, horaLlegada, minutosLlegada);

        var contadorSalidas = 3;
        var contadorLlegadas = 4;
        var tablaVuelos = document.getElementById("tablaVuelos");
        var botonSalidas = "<input type='button' id='contadorSalidas' value='MODIFICAR HORA DE SALIDA' onclick='"+vuelo1+".modificarSalida(this)'>";
        var botonLlegadas = "<input type='button' id='contadorLlegadas' value='MODIFICAR HORA DE LLEGADA' onclick='vuelo1.modificarSalida(this.id)'>";
        tablaVuelos.innerHTML+="<tr><td>"+codigo+"</td><td>"+salida+"</td><td>"+llegada+"</td><td>"+botonSalidas+"</td><td>"+botonLlegadas+"</td></tr>";
        contadorSalidas = contadorSalidas+4;
        contadorLlegadas = contadorLlegadas+4;
        alert(contadorSalidas);
    }
}



function addVuelo()
{
        var codigo = prompt("Introduce el código del vuelo:");
        var hSalida = prompt("Introduce la hora (00 a 23) del vuelo:");
        var mSalida = prompt("Introduce los minutos (00 a 59) del vuelo:");
        var hLlegada = prompt("Introduce la hora (00 a 23) de la llegada del vuelo:");
        var mLlegada = prompt("Introduce la hora (00 a 23) de la llegada del vuelo:");
        var vuelo1 = new Vuelo(codigo, hSalida, mSalida, hLlegada, mLlegada);
        vuelo1.insertarTabla(codigo, vuelo1.salida, vuelo1.llegada, hSalida, mSalida, hLlegada, mLlegada);
    }