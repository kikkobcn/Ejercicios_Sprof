function func1() {
    var a1 = document.getElementById("num").value
    var a2 = document.getElementById("words").value
    console.log(a1,a2)
    for (var i = 0; i < a1; i++) {
        var texto = document.createTextNode(a2 +" ")
        document.getElementById("pa1").appendChild(texto)
    }
}