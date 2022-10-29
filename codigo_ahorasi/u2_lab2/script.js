function Calculo_notas(){
    
    var nombre =     document.getElementsByName("nombre")[0].value;
    var seleccion = document.getElementsByName("seleccion")[0].value;
    var uni1_n1 = document.getElementsByName("uni1_n1")[0].value;
    var uni1_n2 = document.getElementsByName("uni1_n2")[0].value;
    var uni2_n1 = document.getElementsByName("uni2_n1")[0].value;
    var uni2_n2  = document.getElementsByName("uni2_n2")[0].value;
    var uni3_n1  = document.getElementsByName("uni3_n1")[0].value;
    var uni3_n2  = document.getElementsByName("uni3_n2")[0].value;

    var v_nombre = document.getElementById("validar_nombre");
    var v_seleccion = document.getElementById("validar_seleccion");
    var v_u1_n1 = document.getElementById("validar_u1_n1");
    var v_u1_n2 = document.getElementById("validar_u1_n2");
    var v_u2_n1 = document.getElementById("validar_u2_n1");
    var v_u2_n2 = document.getElementById("validar_u2_n2");
    var v_u3_n1 = document.getElementById("validar_u3_n1");
    var v_u3_n2 = document.getElementById("validar_u3_n2");
    var v_promedio = document.getElementById("validar_prom_final");

    v_nombre.innerHTML = "";
    v_seleccion.innerHTML = "";

    v_u1_n1.innerHTML = "";
    v_u1_n2.innerHTML = "";

    v_u2_n1.innerHTML = "";
    v_u2_n2.innerHTML = "";

    v_u3_n1.innerHTML = "";
    v_u3_n2.innerHTML = "";
    
    pon_n1 = uni1_n1*0.12
    pon_n2 = uni1_n2*0.21

    pon_n3 = uni2_n1*0.12
    pon_n4 = uni2_n2*0.21

    pon_n5 = uni3_n1*0.13
    pon_n6 = uni3_n2*0.21

    pon1 = (pon_n1) + (pon_n2)
    pon2 = (pon_n3) + (pon_n4)
    pon3 = (pon_n5) + (pon_n6)

    prom_final = (pon1) + (pon2) + (pon3)
    prom_final2 = (prom_final).toFixed(1);

    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]*$/.test(nombre) || nombre === "" || nombre.length < 3 || nombre.length > 20){
        v_nombre.innerHTML = "Datos inválidos";return;
    
    }if(seleccion === "Ninguno"){
        v_seleccion.innerHTML = "Seccione una carrera";return;
    
    }if (isNaN(uni1_n1) || uni1_n1 === "" || uni1_n1 < 1.0 || uni1_n1 > 7.0){
        v_u1_n1.innerHTML = "Nota inválida 😞";return;

    }if (isNaN(uni1_n2) || uni1_n2 === "" || uni1_n2 < 1.0 || uni1_n2 > 7.0){
        v_u1_n2.innerHTML = "Nota inválida 😞";return;
    
    }if (isNaN(uni2_n1) || uni2_n1 === "" || uni2_n1 < 1.0 || uni2_n1 > 7.0){
        v_u2_n1.innerHTML = "Nota inválida 😞";return;
    
    }if (isNaN(uni2_n2) || uni2_n2 === "" || uni2_n2 < 1.0 || uni2_n2 > 7.0){
        v_u2_n2.innerHTML = "Nota inválida 😞";return;
    
    }if (isNaN(uni3_n1) || uni3_n1 === "" || uni3_n1 < 1.0 || uni3_n1 > 7.0){
        v_u3_n1.innerHTML = "Nota inválida 😞";return;

    }if (isNaN(uni3_n2) || uni3_n2 === "" || uni3_n2 < 1.0 || uni3_n2 > 7.0){
        v_u3_n2.innerHTML = "Nota inválida 😞";return;

    }if(prom_final < 4.0){
        document.write("<!DOCTYPE html>"+
        "<html lang='en'>"+
        "<head>"+
            "<meta charset='UTF-8'>"+
            "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
            "<link rel='stylesheet' href='style.css' type='text/css'>"+
            "<link rel='stylesheet' href='script.js' type='text/css'>"+
            "<title>Document</title>"+
        "</head>"+
        "<body>"+
            "<div class=tablon>"+
                "<table class='Inicio'>"+
                    "<td><img src='assets/imagenes/Logo-CFT-3-Transparente.png   ' alt='' width='150px'></td>"+
                    "<td> <a href='https://cftestatalaricayparinacota.cl/'>Inicio</a></td>"+
                    "<td> <a href='https://cftestatalaricayparinacota.cl/admision-2/'>Admisión</a></td>"+
                    "<td> <a href='https://cftestatalaricayparinacota.cl/carreras/'>Carreras</a></td>"+
                    "<td> <a href='https://cftestatalaricayparinacota.cl/'>Contáctanos</a></td>"+
                    
                    "<td><input class='boton2' type='search' placeholder='Buscar tu Carrera' aria-label='Search' size='20'><button class='btn btn-outline-success' type='submit'>Buscar</button></td>"+
                    
                "</table>"+
                "</div><div class= 'contenido'><b> Has reprobado ❤🎶. <br> Tu asignatura es: "+seleccion+" <br> Tu nota es: </b>"+prom_final2+
        "<br> <b> Estudiante:"+nombre+"</b> <h2 class = 'titulito'>Tus notas son: </h2>"+
        "</div>"+
        "<div class='tablita'>"+
        "<table class='tabla'>"+
        "<tr>"+ 
        "<td class='unidad'>UNIDAD 1 (33%)</td>"+
        "<td class='unidad'>UNIDAD 2 (33%)</td>"+
        "<td class='unidad'>UNIDAD 3 (33%)</td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'><b>Nota 1 : </b>"+uni1_n1+" </td>"+
        "<td class='ds'><b>Nota 1 : </b>"+uni2_n1+" </td>"+
        "<td class='ds'><b>Nota 1 : </b>"+uni3_n1+" </td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'><b>Porcentaje (12%) = </b>"+pon_n1+" </td>"+
        "<td class='ds'><b>Porcentaje (12%) = </b>"+pon_n3+" </td>"+
        "<td class='ds'><b>Porcentaje (13%) = </b>"+pon_n5+" </td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'><b>Nota 2 (Unidad 1): </b>"+uni1_n2+" </td>"+
        "<td class='ds'><b>Nota 2 (Unidad 2): </b>"+uni2_n2+" </td>"+
        "<td class='ds'><b>Nota 2 (Unidad 3): </b>"+uni3_n2+" </td>"+
        "<tr>"+
        "<td class='ds'><b>Porcentaje (21%) = </b>"+pon_n2+" </td>"+
        "<td class='ds'><b>Porcentaje (21%) = </b>"+pon_n4+" </td>"+
        "<td class='ds'><b>Porcentaje (21%) = </b>"+pon_n6+" </td>"+
        "</table>"
        
        )


    }else{
        document.write("<div class= 'contenido'><b> Has aprobado ❤🎶. <br> Tu asignatura es: "+seleccion+" <br> Tu nota es: </b>"+prom_final2+
        "<br> <b> Estudiante:"+nombre+"</b> <h2 class = 'titulito'>Tus notas son: </h2>"+
        "</div>"+"<div class='tablita'><table class='tabla'>"+
        "<tr> <td class='unidad'>UNIDAD 1 (33%)</td>"+
        "<td class='unidad'>UNIDAD 2 (33%)</td>"+
        "<td class='unidad'>UNIDAD 3 (33%)</td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Nota 1 (Unidad 1): "+uni1_n1+" </td>"+
        "<td class='ds'>Nota 1 (Unidad 2): "+uni2_n1+" </td>"+
        "<td class='ds'>Nota 1 (Unidad 3): "+uni3_n1+" </td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Porcentaje (12%) = "+pon_n1+" </td>"+
        "<td class='ds'>Porcentaje (12%) = "+pon_n3+" </td>"+
        "<td class='ds'>Porcentaje (13%) = "+pon_n5+" </td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Nota 2 (Unidad 1): "+uni1_n2+" </td>"+
        "<td class='ds'>Nota 2 (Unidad 2): "+uni2_n2+" </td>"+
        "<td class='ds'>Nota 2 (Unidad 3): "+uni3_n2+" </td>"+
        "<tr>"+
        "<td class='ds'>Porcentaje (21%) = "+pon_n2+" </td>"+
        "<td class='ds'>Porcentaje (21%) = "+pon_n4+" </td>"+
        "<td class='ds'>Porcentaje (21%) = "+pon_n6+" </td>"
        
        )

    }

}
