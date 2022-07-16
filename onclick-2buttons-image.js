
function getData() {
    var foto1 = document.getElementById("foto");
    console.log('foto1', foto1);
    if (foto1.style.display == "none") {
        foto1.style.display = "block";
    }
    else {
        foto1.style.display = "none";
    }
    
}