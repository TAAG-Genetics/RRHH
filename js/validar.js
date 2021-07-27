function validar(){
    var nombre, apellido, email, telefono, mensaje;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre === "" || apellido === "" || email === "" || telefono === "" || mensaje === ""){
        alert("Todos los campos son obligatorios")
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy lago. Máximo 30 caracteres");
        return false;
    }

    else if(apellido.length>80){
        alert("El apellido es muy lago. Máximo 80 caracteres");
        return false;
    }

    else if(email.length>100){
        alert("El email es muy lago. Máximo 100 caracteres");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El mail no es valido");
        return false;
    }

    else if(telefono.length>13){
        alert("El Teléfono es muy lago. Máximo 13 caracteres");
        return false;
    }

    else if(mensaje.length>300){
        alert("El mensaje es muy lago. Máximo 100 caracteres");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El teléfono ingresado no es correcto");
        return false;
    }
    
}