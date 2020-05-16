var con = 0
var pass=""
var clave_real= "12345678"
function cambiar(key) {
  switch (key) {
    case 1:
        if (pass.length==8) {
            if (pass==clave_real) {
                document.getElementById('MostrarOcultar').style.display='none';
                document.getElementById('MenuPrincipal').style.display="block";
            }else{
                alert("clave incorrecta")
                document.getElementById("pass").value=''
            }
        } else {
            alert("ingrese la clave")
            document.getElementById("pass").value=''
        }
      
        break;
    case 2:
      document.getElementById('MostrarOcultar').style.display='block';
      document.getElementById('MenuPrincipal').style.display="none";     
     // con++
        break;
    default:
        break;
  }
}
function password(numero) {
    if (numero==".") {
        alert("el password solo usa numeros");
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
