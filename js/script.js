var con = 0
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
