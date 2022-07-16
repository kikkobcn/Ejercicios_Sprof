function getData() {

    var name = document.getElementById("nombre").value;
    //console.log('name', name[1]);
    //var name1 = name[0].toUpperCase()
    //console.log('name1', name1);

    if (name[0] != name[0].toUpperCase() || name.lenght <5 && name.lenght >10) {
        alert("Debe ingresar un nombre valido");
        return;
        
    }
        



}