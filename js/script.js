var con = 0
var pass=""
var clave_real= "12345678"
function cambiar(key) {
  switch (key) {
    case 1:
        if (pass.length==8) {
            if (pass==clave_real) {
                document.getElementById('MostrarOcultar').style.display='none';
                document.getElementById('vistaMenuPrincipal').style.display="block";
            }else{
                alert("clave incorrecta")
                document.getElementById("pass").value=""
                pass=""
            }
        } else {
            alert("ingrese la clave")
            document.getElementById("pass").value=""
            pass=""
        }
      
        break;
    case 2:
      document.getElementById('MostrarOcultar').style.display='block';
      document.getElementById('vistaMenuPrincipal').style.display="none";     
     // con++
        break;
    default:
        break;
  }
}
function password(numero) {
    if (numero=="." || pass.length>=8) {
        alert("el password solo usa numeros(8)");
    } else {
        if (pass.length<=8) {
            document.getElementById("pass").value = document.getElementById("pass").value+'*';
            pass=pass+numero;
            if (pass.length==8) {
                console.log(pass);
            }
        }
    }
}
