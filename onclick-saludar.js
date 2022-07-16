
function getData() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    if (nombre == "" || apellido == "") {
        alert("Debe ingresar un nombre y un apellido");
        return;
    }
    //alert(nombre + ' ' + apellido);
    document.write("<h1>Hola " + nombre + " " + apellido + "</h1>");
    
}