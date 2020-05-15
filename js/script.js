var con = 0
function cambiar() {
    if (con %2==0) {
        document.getElementById('MostrarOcultar').style.display='none';
        document.getElementById('MenuPrincipal').style.display="block";
        con++
    } else {
        document.getElementById('MostrarOcultar').style.display='block';
        document.getElementById('MenuPrincipal').style.display="none";     
        con++   
    }
  
}
