function envio(e) {
    checknombre(e);
    checkapelli(e);
    checkdni(e);

}

    //check si la primera letra del nombre es maiuscula
    function checknombre(e) {
            var nombre = document.getElementById("dato1").value;
            if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
                alert("La primera letra del nombre debe ser mayúscula");
                //document.getElementById("dato1").focus();
                e.preventDefault();
            }
    }

    //check si la primera letra del Apellido es maiuscula
    function checkapelli(e) {
        var apelli = document.getElementById("dato2").value;
        if (apelli.charAt(0) != apelli.charAt(0).toUpperCase()) {
            alert("La primera letra del apellido debe ser mayúscula");
            //document.getElementById("dato2").focus();
            e.preventDefault();
        }   
    }
        
    //check si la letra del DNI introducido coincide con las reglas   
    function checkdni(e) {
        var dni1 = document.getElementById("dato3").value;
        var dni2 = dni1.slice(0, -1);           //crea un string nuevo sin el ultimo caracter
        var dni22 = dni1.charAt(dni1.length - 1);           //extrae el ultimo caracter del dni
        var dni3 = dni2 % 23;                   //dni3 es el resto de dni2/23 
        var letraDni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        var letra = letraDni[dni3];
        if (dni22 != letra) {
            alert("DNI incorrecto")
            //document.getElementById("dato3").focus();
            e.preventDefault();  
        }
        
    }




//al clicar en un campo de texto, se pone en foco
// document.getElementById("datol1")
//     .addEventListener("click",function ponFoco() {
//                                 document.getElementById("datol1").focus();
//                                 });

// document.getElementById("datol2")
// .addEventListener("click",function ponFoco() {
//                                 document.getElementById("datol2").focus();
//                             });

// document.getElementById("datol3")
// .addEventListener("click",function ponFoco() {
//                                 document.getElementById("datol31").focus();
//                             });
                                                        
// document.getElementById("datol4")
// .addEventListener("click",function ponFoco() {
//                                 document.getElementById("datol4").focus();
//                             });
                                                        
// document.getElementById("datol5")
// .addEventListener("click",function ponFoco() {
//                                 document.getElementById("datol5").focus();
//                                 });



