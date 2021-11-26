
//array donde almacenaremos los usuarios
var usuarios = [];

//clase "padre"
function Usuario(user, password, nombre, dni, role){
    this.user = user;
    this.password = password;
    this.nombre = nombre;
    this.dni = dni;
    this.role = role;
}

//cliente con sus atributos
function Cliente(peso, altura, edad, sexo, imc, fcm){
    this.peso = peso;
    this.altura = altura;
    this.edad = edad;
    this.sexo = sexo;
    this.imc = imc;
    this.fcm = fcm;
}

//administrador con sus atributos
function Administrador( crearTabla, crearAlta ){
    this.crearTabla = crearTabla;
    this.crearAlta = crearAlta;
}


function addCliente(){
    //recoge datos
    var user = prompt("INTRODUCE NOMBRE DE USUARIO:");
    var password = prompt("INTRODUCE CONTRASEÑA:");
    var nombre = prompt("INTRODUCE NOMBRE:");
    var dni = prompt("INTRODUCE DNI:");
    //filtrado longitud de DNI
    while(dni.length!=9){
        dni = prompt("MAX 9 CARACTERES DE DNI");
    }
    var peso = prompt("INTRODUCE PESO:");
    var edad = prompt ("INTRODUCE EDAD:");
    var altura = prompt("INTRODUCE ALTURA:");
    var fcm = prompt("INTRODUCE FCM:");
    var imc = prompt("INTRODUCE IMC:");
    var sexo = prompt("INTRODUCE SEXO:");
    //filtrado sexo
    while(sexo!="Masculino" || sexo!="Femenino"){
        sexo=prompt("INTRODUZCA FORMATO CORRECTO (Masculino - Femenino)");
    }
    var role = 'cliente';

    //cliente prototype hereda los atributos de usuario
    Cliente.prototype = new Usuario( user, password, nombre, dni, role );
    //ahora cliente es un nuevo objeto de Cliente con los atributos de Usuario heredados
    var cliente = new Cliente(peso, altura, edad, sexo, imc, fcm);
    
    //añadimos el usuario creado al array
    usuarios.push(cliente);

}

function addAdmin(){
    var user = prompt("INTRODUCE NOMBRE DE USUARIO:");
    var password = prompt("INTRODUCE CONTRASEÑA:");
    var nombre = prompt("INTRODUCE NOMBRE:");
    var dni = prompt("INTRODUCE DNI:");
    //filtrado longitud de DNI
    while(dni.length!=9){
        dni = prompt("MAX 9 CARACTERES DE DNI");
    }
    var crearTabla = prompt("¿Crear tabla?");
    var crearAlta = prompt("¿Crear alta?");
    var role = 'administrador';

    Administrador.prototype = new Usuario( user, password, nombre, dni, role );
    var administrador = new Administrador(crearTabla, crearAlta);

    //añadimos este usuario al array
    usuarios.push(administrador);
}

function logearse(){
    //obtenemos los valores de los id username (login) y password
    var nombreUsuario = document.getElementById("username").value;
    var clave = document.getElementById("password").value;

    //este contador nos indicará si existe ese usuario con esa contraseña
    //en caso de que coincida --> true
    var contador = false;

    //Filtrado que en el Login estén los campos rellenados
    if(nombreUsuario != "" && clave != ""){

        //for que recorre array de usuarios
        for(var i = 0; i<usuarios.length;i++){

            //si usuario coincide con su contraseña
            if(usuarios[i].user == nombreUsuario && usuarios[i].password == clave){
                alert("Hola "+usuarios[i].nombre +", eres usuario "+usuarios[i].role);
                contador = true;
            }
        }
        if(contador == false){
            alert("Usuario o contraseña incorrectos");
        }
    }else{
        alert("DEBEN ESTAR RELLENADOS LOGIN + PASSWORD");
    }
    
}