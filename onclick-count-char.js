

function getData() {

    let list = [4, 5, 6]
    
    for (let i in list) {
        console.log( i) // 0 , 1 , 2 
    }

      
    for (let i of list) {
        console.log(i) // 4, 5, 6
    }

    var name = document.getElementById("nombre").value;
    //console.log('name', name[1]);
    //var name1 = name[0].toUpperCase()
    //console.log('name1', name1);
    console.log('name', name);
    var cont=0;
    for (let i of name) {
        if (i == 'a' || i == 'A') {
            cont++;
            //alert("Contiene la letra a ");
        }
    }

    if (cont >= 1) {
        alert("Contiene la letra a " + cont + " veces");
    }
    else {
        alert('No existe la A')
    }


}