function init(){
    var edad;
    var sexo;
    var aux;
    var patSexo = /[MH]/;

    do{
        edad = parseInt(prompt("Introduzca su edad:"));
    }while(isNaN(edad)==true);

    
    do{
        sexo = prompt("Introduzca su sexo. Hombre (H) - Mujer (M)");
        aux = patSexo.test(sexo);
    }while( aux==false);

    var fcm = 220 - edad;

    var sesenta = fcm*0.7;
    sesenta = sesenta.toFixed(2);
    var setenta = fcm*0.7;
    setenta = setenta.toFixed(2);
    var ochenta = fcm*0.8;
    ochenta = ochenta.toFixed(2);
    var noventa = fcm*0.9;
    noventa = noventa.toFixed(2);



    var li = document.getElementsByTagName("li");
    var parrafo = document.getElementsByTagName("p");
    var tufcm = document.createTextNode(fcm);

    li[0].innerHTML += sesenta +" - "+setenta;
    li[1].innerHTML += setenta +" - "+ochenta;
    li[2].innerHTML += ochenta +" - "+noventa;
    li[3].innerHTML += noventa +" - "+fcm;
    document.getElementById("fcm").appendChild(tufcm);
    document.getElementById("body").appendChild(tabla)
    

    
}