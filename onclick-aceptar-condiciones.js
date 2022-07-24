function getData() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
    let check = document.getElementById("check").checked;
    console.log('check', check)
    if (nombre == "" || apellido == "" || !check) {
        alert("Debe ingresar un nombre y un apellido y aceptar las condiciones");
        return;
    }

    document.getElementById("text2").innerHTML = "nombre: " + nombre + "<br />" + "Apellido: " + apellido; 
    limpiar();
    //alert(nombre + ' ' + apellido);
    //document.write("<h1>Hola " + nombre + " " + apellido + "</h1>");
    
}

function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("check").checked = false;
}