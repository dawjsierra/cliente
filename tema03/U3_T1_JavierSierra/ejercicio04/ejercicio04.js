class Empleado{
    constructor(nombre, dni, telefono){
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
    }
}

class Fisio extends Empleado{
    constructor(nombre, dni, telefono){
        super(nombre, dni, telefono);
    }
}

class Monitor extends Empleado{
    constructor(nombre, dni, telefono, actividades, semanales, salacomun){
        super(nombre, dni, telefono);
        this.actividades = actividades;
        this.semanales = semanales;
        this.salacomun = salacomun;
    }
}


//arrays para guardar fisios y monitores
var arrFisios = [];
var arrMonitores = [];

//funcion para crear fisios
function crearFisio(){

    //recogida de datos
    var nombre = prompt("Nombre: ");
    var dni = prompt("DNI: ");

    //filtrado dni
    while(dni.length != 9){
        dni = prompt("DNI debe ser de 9 caracteres (8 nums + 1 letra)");
    }
    var telefono = prompt("Telefono: ");
    //filtrado telefono, debe ser longitud 9 y digitos
    while(telefono.length != 9 || isNaN(telefono)){
        telefono=prompt("El numero de telefono debe ser de 9 digitos");
    }

    //creamos nuevo fisio
    var fisio1 = new Fisio (nombre, dni, telefono);

    //lo añadimos en array
    arrFisios.push(fisio1);
}


//funcion para crear monitores
function crearMonitor(){
    //recogida de datos
    var nombre = prompt("Nombre: ");
    var dni = prompt("DNI: ");

    //filtrado dni
    while(dni.length != 9){
        dni = prompt("DNI debe ser de 9 caracteres (8 nums + 1 letra)");
    }

    var telefono = prompt("Telefono: ");
    //filtrado telefono, debe ser longitud 9 y digitos
    while(telefono.length != 9 || isNaN(telefono)){
        telefono=prompt("El numero de telefono debe ser de 9 digitos");
    }

    var actividades = prompt("Actividades que puede impartir");
    var semanales = prompt("Sesiones semanales que el monitor imparte");
    //filtrado sesiones semanales
    while(isNaN(semanales)){
        semanales = prompt("Se deben indicar en digitos las sesiones semanales...");
    }

    var salacomun = prompt("Sesiones de la sala comun");
    //filtrado sesiones en sala comun
    while(isNaN(salacomun)){
        salacomun = prompt("Se deben indicar en digitos las sesiones en sala comun...");
    }

    //creamos monitor
    var monitor = new Monitor (nombre, dni, telefono, actividades, semanales, salacomun);

    //lo añadimos en el array
    arrMonitores.push(monitor);
}

function listarFisios(){

    //si no hay ningún fisio saltará el aviso y no recorrerá el array
    if(arrFisios.length>0){
        for(var i = 0; i<arrFisios.length; i++){
            alert("-NOMBRE: "+arrFisios[i].nombre +" -DNI: "+arrFisios[i].dni+" -TELEFONO: "+arrFisios[i].telefono);
        }
    }else{
        alert("NO HAY NINGÚN FISIO QUE MOSTRAR...")
    }
}

function listarMonitores(){

    //si no hay ningún monitor saltará el aviso y no recorrerá el array
    if(arrMonitores.length>0){
        for(var i = 0; i<arrMonitores.length; i++){
            alert("-NOMBRE: "+arrMonitores[i].nombre +" -DNI: "+arrMonitores[i].dni+" -TELEFONO: "+arrMonitores[i].telefono+" -ACTIVIDADES: "+arrMonitores[i].actividades+" -SESIONES SEMANALES: "+arrMonitores[i].semanales+" -SESIONES DE SALA COMUN: "+arrMonitores[i].salacomun);
        }
    }else{
        alert("NO HAY NINGÚN MONITOR QUE MOSTRAR...")
    }
}