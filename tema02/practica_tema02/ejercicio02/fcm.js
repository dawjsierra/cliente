function init(){
    var edad;
    var sexo;
    var aux;
    //He creado un patrón que solo pueda ser H o M, porque no sabía si se podían comparar cadenas como en Java.
    //En cualquier caso... Funciona.
    var patSexo = /[MH]/;
    
    //Mientras que edad sea una cadena... Lo va a pedir
    do{
        edad = parseInt(prompt("Introduzca su edad:"));
    }while(isNaN(edad)==true);
    

    //Mientras la comprobación del patrón de false, lo pedirá
    do{
        sexo = prompt("Introduzca su sexo. Hombre (H) - Mujer (M)");
        aux = patSexo.test(sexo);
    }while( aux==false);
    
    //Almacenamos y calculamos la fcm
    var fcm = 220 - edad;
    

    //Calculamos porcentajes
    var sesenta = fcm*0.6;
    //Fijamos los decimales a dos
    sesenta = sesenta.toFixed(2);
    var setenta = fcm*0.7;
    setenta = setenta.toFixed(2);
    var ochenta = fcm*0.8;
    ochenta = ochenta.toFixed(2);
    var noventa = fcm*0.9;
    noventa = noventa.toFixed(2);


    //En li, almacenamos todos los elementos <li> del documento
    var li = document.getElementsByTagName("li");
    //Nos creamos una variable para indicar la FCM de cada usuario...
    var tufcm = document.createTextNode(fcm);

    //Accedemos al array de li mediante [posicion] y con .innerHTML añadimos la frase
    li[0].innerHTML += sesenta +" - "+setenta;
    li[1].innerHTML += setenta +" - "+ochenta;
    li[2].innerHTML += ochenta +" - "+noventa;
    li[3].innerHTML += noventa +" - "+fcm;
    document.getElementById("fcm").appendChild(tufcm);
    document.getElementById("body").appendChild(tabla);
    

    
}