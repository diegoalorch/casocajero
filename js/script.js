var pass=""
var clave_real= "12345678"
var siguiente = false
// Display = 'none'(sirve para que no se vea) 
// Display = "block"(sirve para que se vea) 
function cambiar(opcion) {
  switch (opcion) {
    case 1:
        if (pass.length==8) {
            if (pass==clave_real) {
                document.getElementById('MostrarOcultar').style.display='none';
                document.getElementById('vistaMenuPrincipal').style.display="block";
                siguiente = true
            }else{
                alert("clave incorrecta")
                document.getElementById("pass").value=""
                pass=""
            }
        } else {
            if (pass.length < 8 && pass.length!=0) {
                alert("Clave Incompleta")
                document.getElementById("pass").value=""
                pass=""
            }else{
                alert("Ingrese Clave")
                document.getElementById("pass").value=""
                pass=""
            }
        }
        break;
    case 2:
      document.getElementById('MostrarOcultar').style.display='block';
      document.getElementById('vistaMenuPrincipal').style.display="none";
      document.getElementById("pass").value=""
      pass=""
     // con++
        break;
    default:
        alert(key)
        console.log(key)
        break;
    case 3:
        //substring (divide un string) y length (cuenta las vocales)
        var x = document.getElementById("pass").value.length
        var y = pass.length
        document.getElementById("pass").value=document.getElementById("pass").value.substring(0,x-1)
        pass=pass.substring(0,y-1)
        console.log(pass)
        break;
    case 4:
        if (siguiente) {
            alert("Soy un Boton de pantalla")
        }else{
            alert("Los botones aun no esta desbloqueados")
        }
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