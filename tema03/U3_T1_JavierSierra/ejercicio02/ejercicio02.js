//Creamos la clase aeropuerto con su constructor
class Aeropuerto{
    constructor(nombre, ciudad, vuelos){
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.vuelos = vuelos;
    }
}
//similar al anterior ejercicio.
//este contador nos va a marcar la celda a modificar
contvuelos = 2;

//funcion para añadir aeropuerto
function addAero(){
    
    //recogemos los parámetros
    var nombre = document.getElementById("nombre").value;
    var ciudad = document.getElementById("ciudad").value;
    var vuelos = document.getElementById("vuelos").value;

    //Si los tres parametros no son nulos irá el programa. Si no no
    if((nombre != "") && (ciudad != "") && (vuelos!="")){
        //creo un nuevo objeto de aeropuerto
        var aero1 = new Aeropuerto(nombre, ciudad, vuelos);

        //este es el boton para modificar vuelos. Lo almaceno en una variable para
        //estructurarlo en dos partes y que no quede una chorizada
        var botonAero = "<input type='button' id="+(contvuelos)+" value='MODIFICAR' onclick='modificarVuelos(this.id)'>";

        //fila a introducir
        var filaAero = "<tr><td>"+aero1.nombre+"</td><td>"+aero1.ciudad+"</td><td>"+aero1.vuelos+"</td><td>"+botonAero+"</td></tr>";

        //localizo la tabla
        var tablaAero = document.getElementById("tablaAeros");

        //introduzco la fila en la tabla
        tablaAero.innerHTML+=filaAero;

        //itero los contadores. Ahora la celda a modificar ha cambiado de posicion
        //tiene 4 celdas por delante
        contvuelos=contvuelos+4;
    }else{
        alert("DEBEN ESTAR TODOS LOS CAMPOS COMPLETADOS");
    }
}

//funcion para modificar num vuelos. Le pasamos por parametro el id del boton
//el id del boton lleva el numero de la celda a modificar en su linea
function modificarVuelos(celda){
    //pide el numero
    var numero = prompt("INTRODUCE EL NUEVO NUMERO DE VUELOS");
    //Filtrado: Debe ser un numero
    while(isNaN(numero)){
        numero = prompt("INTRODUCE UN NUEVO NUMERO (DEBE SER EN DIGITO NUMERICO)");
    }
    //recoge todas las celdas
    var celdas = document.getElementsByTagName("td");
    //cambiamos el contenido de la celda
    celdas[celda].textContent=numero;
}

//creamos clase vuelo
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

    modificarLlegada(hLlegada, mLlegada){
        llegada = new Date();
        llegada.setHours(hLlegada);
        llegada.setMinutes(mLlegada);
    }
    
    modificarSalida(hSalida, mSalida){
        salida = new Date();
        salida.setHours(hSalida);
        salida.setMinutes(mSalida);
    }

}

//mismos contadores que antes
var contsalida = 1;
var contllegada = 2;

//funcion añadir vuelos
function addVuelo(){
    
    //Recoge parámetros
    var codigo = document.getElementById("codigovuelo").value;
    var hsalida = document.getElementById("horasalida").value;
    var msalida = document.getElementById("minsalida").value;
    var hllegada = document.getElementById("horallegada").value;
    var mllegada = document.getElementById("minllegada").value;

    //Si los parámetros que le llegan a vuelo no están vacíos funcionará el programa
    if((vuelo1.codigo!="") && (vuelo1.llegada!="") && (vuelo1.salida!="")){
        //creo un objeto de vuelo
        var vuelo1 = new Vuelo(codigo, hsalida, msalida, hllegada, mllegada);

        //boton de modificar salida
        var botonSalida = "<input type='button' id="+(contsalida)+" value='MODIFICAR' onclick='modificarSalida(this.id)'>";

        //boton de modificar llegada
        var botonLlegada = "<input type='button' id="+(contllegada)+" value='MODIFICAR' onclick='modificarLlegada(this.id)'>";

        //fila a introducir
        var fila = "<tr><td>"+codigo+"</td><td>"+vuelo1.salida+"</td><td>"+vuelo1.llegada+"</td><td>"+botonSalida+"</td><td>"+botonLlegada+"</td></tr>";

        //localizo la tabla
        var tabla = document.getElementById("tablaVuelos");

        //introduzco la fila
        tabla.innerHTML+=fila;

        //iteramos contadores
        contsalida=contsalida+5;
        contllegada=contllegada+5;
    }else{
        alert("DEBEN ESTAR TODOS LOS CAMPOS COMPLETADOS");
    }
}

//funcion de modificar llegada
function modificarLlegada(numCelda){
    var horallegada = prompt("INTRODUCE LA NUEVA HORA DE LLEGADA (0 - 23)");
    //Filtrado: La hora de llegada solo puede ser numérica y entre 0 y 23
    while((isNaN(horallegada)) || (horallegada<0) || (horallegada>23)){
        horallegada = prompt("INTRODUCE LA HORA DE LLEGADA DE NUEVO. DEBE SER EN DIGITOS NUMERICOS Y ENTRE LOS VALORES 0 A 23");
    }
    //Filtrado: Los minutos de llegada solo pueden ser numéricos y entre 0 y 59
    var minllegada = prompt("INTRODUCE LOS NUEVOS MINUTOS DE LA HORA DE LLEGADA (0 - 59)");
    while((isNaN(minllegada)) || (minllegada<0) || (minllegada>59)){
        horallegada = prompt("INTRODUCE LOS MINUTOA DE LLEGADA DE NUEVO. DEBE SER EN DIGITOS NUMERICOS Y ENTRE LOS VALORES 0 A 59");
    }

    //creo el string aqui, es lo que va a introducirse en la celda
    var nuevaLlegada = horallegada + ":" + minllegada;
    //accedo a las celdas
    var celdas = document.getElementsByTagName("td");
    //justo en la celda concreta cambio su contenido
    celdas[numCelda].textContent=nuevaLlegada;
}


//mismo funcionamiento que llegada
function modificarSalida(numCelda){
    var horasalida = prompt("INTRODUCE LA NUEVA HORA DE SALIDA (0 - 23)");
    //Filtrado: La hora de salida solo puede ser numérica y entre 0 y 23
    while((isNaN(horasalida)) || (horasalida<0) || (horasalida>23)){
        horallegada = prompt("INTRODUCE LA HORA DE SALIDA DE NUEVO. DEBE SER EN DIGITOS NUMERICOS Y ENTRE LOS VALORES 0 A 23");
    }
    var minsalida = prompt("INTRODUCE LOS NUEVOS MINUTOS DE LA HORA DE SALIDA (0 - 59)");
    //Filtrado: Los minutos de salida solo pueden ser numéricos y entre 0 y 59
    while((isNaN(minsalida)) || (minsalida<0) || (minalida>59)){
        horallegada = prompt("INTRODUCE LOS MINUTOA DE SALIDA DE NUEVO. DEBE SER EN DIGITOS NUMERICOS Y ENTRE LOS VALORES 0 A 59");
    }
    var nuevaSalida = horasalida + ":" + minsalida;
    var celdas = document.getElementsByTagName("td");
    celdas[numCelda].textContent=nuevaSalida;
}