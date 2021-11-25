
var usuarios = [];

function Usuario(login, clave, nombre, dni, role){
    this.login = login;
    this.clave = clave;
    this.nombre = nombre;
    this.dni = dni;
    this.role = role;
}

function Cliente(peso, altura, edad, sexo, imc, fcm){
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.imc = imc;
    this.fcm = fcm;
}

function Administrador( crearTabla, crearAlta ){
    this.crearTabla = crearTabla;
    this.crearAlta = crearAlta;
}


function addCliente(){
    var login = prompt("Introduce nombre de login");
    var clave = prompt("Introduce contraseña");
    var nombre = prompt("Introduce tu nombre");
    var dni = prompt("Introduce tu DNI");
    var peso = prompt("Introduce nombre de login");
    var edad = prompt ("edad");
    var altura = prompt("Introduce contraseña");
    var fcm = prompt("Introduce tu nombre");
    var imc = prompt("Introduce tu nombre");
    var sexo = prompt("Introduce tu DNI");
    var role = 'cliente';

    Cliente.prototype = new Usuario( login, clave, nombre, dni, role );
    var cliente = new Cliente(peso, altura, edad, sexo, imc, fcm);
    
    usuarios.push(cliente);

}

function addAdmin(){
    var login = prompt("Introduce nombre de login");
    var clave = prompt("Introduce contraseña");
    var nombre = prompt("Introduce tu nombre");
    var dni = prompt("Introduce tu DNI");
    var crearTabla = prompt("¿Crear tabla?");
    var crearAlta = prompt("¿Crear alta?");
    var role = 'administrador';

    Administrador.prototype = new Usuario( login, clave, nombre, dni, role );
    var administrador = new Administrador(crearTabla, crearAlta);
    usuarios.push(administrador);
}

function logearse(){
    for(var i=0; i<=usuarios.length;i++){
        alert(usuarios[i].role);
    }
}