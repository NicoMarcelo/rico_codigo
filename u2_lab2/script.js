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
    
    pon1 = (uni1_n1*0.12) + (uni1_n2*0.21)
    pon2 = (uni2_n1*0.12) + (uni2_n2*0.21)
    pon3 = (uni3_n1*0.13) + (uni3_n2*0.21)

    prom_final = (pon1) + (pon2) + (pon3)
    prom_final2 = (prom_final).toFixed(1);

    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñ]*$/.test(nombre) || nombre === "" || nombre.length < 3 || nombre.length > 20){
        v_nombre.innerHTML = "Datos inválidos";return;
    
    }if(seleccion === "Ninguno"){
        v_seleccion.innerHTML = "Seccione una carrera";return;
    
    }if (isNaN(uni1_n1)|| uni1_n1 === "" || uni1_n1 < 1.0 || uni1_n1 > 7.0){
        v_u1_n1.innerHTML = "Nota inválida 😞";return;

    }if (isNaN(uni1_n2)|| uni1_n2 === "" || uni1_n2 < 1.0 || uni1_n2 > 7.0){
        v_u1_n2.innerHTML = "Nota inválida 😞";return;
    
    }if (isNaN(uni2_n1)|| uni2_n1 === "" || uni2_n1 < 1.0 || uni2_n1 > 7.0){
        v_u2_n1.innerHTML = "Nota inválida 😞";return;
    
    }if (isNaN(uni2_n2)|| uni2_n2 === "" || uni2_n2 < 1.0 || uni2_n2 > 7.0){
        v_u2_n2.innerHTML = "Nota inválida 😞";return;
    
    }if (isNaN(uni3_n1)|| uni3_n1 === "" || uni3_n1 < 1.0 || uni3_n1 > 7.0){
        v_u3_n1.innerHTML = "Nota inválida 😞";return;

    }if (isNaN(uni3_n2)|| uni3_n2 === "" || uni3_n2 < 1.0 || uni3_n2 > 7.0){
        v_u3_n2.innerHTML = "Nota inválida 😞";return;

    }if(prom_final < 4.0){
        document.write("<div class= 'contenido'><b>Has reprobado ❤🎶. Tu nota es: </b>"+prom_final2+
        "<br> <b> Estudiante:"+nombre+
        "</b></div>"+"<div class='tablita'><table class='tabla'>"+
        "<tr> <td class='unidad'>UNIDAD 1 (33%)</td>"+
        "<td class='unidad'>UNIDAD 2 (33%)</td>"+
        "<td class='unidad'>UNIDAD 3 (33%)</td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Nota 1: "+uni1_n1+" </td>"+
        "<td class='ds'>Nota 1: "+uni2_n1+" </td>"+
        "<td class='ds'>Nota 1: "+uni3_n1+" </td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Nota 2: "+uni1_n2+" </td>"+
        "<td class='ds'>Nota 2: "+uni2_n2+" </td>"+
        "<td class='ds'>Nota 2: "+uni3_n2+" </td>"+
        "</tr>"
        
        )






    }else{
        document.write("<div class= 'contenido'><b>Has aprobado ❤🎶. Tu nota es: </b>"+prom_final2+
        "<br> <b> Estudiante:"+nombre+
        "</b></div>"+"<div class='tablita'><table class='tabla'>"+
        "<tr> <td class='unidad'>UNIDAD 1 (33%)</td>"+
        "<td class='unidad'>UNIDAD 2 (33%)</td>"+
        "<td class='unidad'>UNIDAD 3 (33%)</td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Nota 1: "+uni1_n1+" </td>"+
        "<td class='ds'>Nota 1: "+uni2_n1+" </td>"+
        "<td class='ds'>Nota 1: "+uni3_n1+" </td>"+
        "</tr>"+
        "<tr>"+
        "<td class='ds'>Nota 2: "+uni1_n2+" </td>"+
        "<td class='ds'>Nota 2: "+uni2_n2+" </td>"+
        "<td class='ds'>Nota 2: "+uni3_n2+" </td>"+
        "</tr>"
        
        )
    }


}
