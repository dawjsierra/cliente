var usuarios = [];

function UsuarioWeb(login, clave, nombre, dni, role){
    this.login = login;
    this.clave = clave;
    this.nombre = nombre;
    this.dni = dni;
    this.role = role;
}

function prototipoUsuarioWeb(){
    this.login = prompt("Introduce nombre de login");
    this.clave = prompt("Introduce contraseña");
    this.nombre = prompt("Introduce tu nombre");
    this.dni = prompt("Introduce tu DNI");
    
}

function UsuarioCliente(peso, altura, edad, sexo, imc, fcm){
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.imc = imc;
    this.fcm = fcm;
}

function UsuarioAdministrador(){

}


function addCliente(){
    var login = prompt("Introduce nombre de login");
    var clave = prompt("Introduce contraseña");
    var nombre = prompt("Introduce tu nombre");
    var dni = prompt("Introduce tu DNI");
    var role = cliente;

    var usuario1 = new UsuarioWeb(login, clave, nombre, dni, role);

}

function addAdmin(){
    
}

