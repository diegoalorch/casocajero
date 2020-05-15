var con = 0
var password
function cambiar(key) {
  switch (key) {
    case 1:
      document.getElementById('MostrarOcultar').style.display='none';
      document.getElementById('MenuPrincipal').style.display="block";
      //con++
        break;
    case 2:
      document.getElementById('MostrarOcultar').style.display='block';
      document.getElementById('MenuPrincipal').style.display="none";     
     // con++

    default:
        break;
  }
   
}
function password(numero) {
    if (numero==".") {
        alert("el password solo usa numeros")
    } else {
        alert(numero)
    }
}
