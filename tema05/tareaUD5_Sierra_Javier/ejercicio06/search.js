
console.log("enlazado");

//Cuando esté el documento listo..
$(document).ready( function(){

    //nos posicionamos en el elemento con id boton y si hace el evento click...
    $('#boton').click(function (e) {
        e.preventDefault();
        //por consola nos mostrará  "ha hecho click"
        console.log("ha hecho click");

        //coge el valor del input con id nombre
        nombre = $('#nombre').val();
        //coge el valor del input con id nombre
        date = $('#date').val();
        // console.log(data);
    
        //peticion get, a partir del ? se ponen los valores, en este caso, nombre y date
        $.get("/sesions/filtrado?nombre="+nombre+"&date="+date, function(dataJSON, status){
            //por consola nos sacará el string mostrando los datos y el estado de la peticion
            console.log("Data: " + dataJSON + "\nStatus: " + status);
            //por consola nos sacará los datos de la respuesta
            console.log(dataJSON); 

            //si los datos son de tipo string...
            if(typeof(dataJSON) == "string"){
                //imprimelos en el div con id errores
                $("#errores").html(dataJSON);

                //si no
            }else{

                //cada vez que se mande una peticion, vacia la tabla con id tabla
                $("#tabla").empty();

                    //hacemos un foreach del json obtenido
                    dataJSON.forEach((item)=>{
                        //metemos con un append los datos del JSON en la tabla
                        $("#tabla").append("<tr><td><strong>SESION:</strong>"+item.id+"</td></tr><tr><td><dd><strong>FECHA INICIO:</strong>"+item.horaInicio+"</dd></td></tr><tr><td><dd><strong>FECHA FIN:</strong>"+item.horaFin+"</dd></td></tr><tr><td><dd><strong>ID ACTIVIDAD:</strong>"+item.activity_id+"</dd></td></tr>");
                    }); 
            }
        });

    })
    

    
    
    //POST---


    //<meta name="csrf-token" content="{{ csrf_token() }}" />
    // $("#search").click(function(e) {
    //     e.preventDefault();
    //     data = $('#actividad').val();
    //     console.log(data);
    
    //     $.post("/sesion/search",
    //     {
    //         headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')} ,
    //         data:{"actividad": data}
    //     },
    //     function(dataJSON, status){
    //         console.log("he vueltoooo");
    //         console.log(dataJSON);
    //         //alert("Data: " + data + "\nStatus: " + status);
    //     });
    // }); 
    
});
