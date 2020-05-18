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
                nextVista()
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
      borrareventos()
      /*document.getElementById("BTN_ret").removeEventListener("click", ()=> {
        mostrarvista("BTN_ret")
    });*/
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
            
        }else{
            alert("Los botones aun no estan desbloqueados")
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
function nextVista() {
    //ejemplo
    document.getElementById("BTN_ret").addEventListener("click", BTN_ret)
    
    document.getElementById("BTN_con").addEventListener("click", BTN_con)
    //ahora has todo esto :3
    document.getElementById("BTN_ope").addEventListener("click", BTN_ope)

    document.getElementById("BTN_blanco1").addEventListener("click", BTN_blanco1)

    document.getElementById("BTN_tra").addEventListener("click", BTN_tra)

    document.getElementById("BTN_blanco2").addEventListener("click", BTN_blanco2)

    document.getElementById("BTN_ult").addEventListener("click", BTN_ult)

    document.getElementById("BTN_blanco3").addEventListener("click", BTN_blanco3)
}
//ejemplo de funcion ke debes de crear
function BTN_ret() {
    alert("BTN_ret")
}
function BTN_con() {
    alert("BTN_ret")
}
function BTN_ope() {
    alert("BTN_ope")
}
function BTN_blanco1() {
    alert("BTN_blanco1")
}
function BTN_tra() {
    alert("BTN_tra")
}
function BTN_blanco2() {
    alert("BTN_blanco2")
}
function BTN_ult() {
    alert("BTN_ult")
}
function BTN_blanco3() {
    alert("BTN_ope")
}

function borrareventos() {
    //aca pones todos los eventos a borrar
    document.getElementById("BTN_ret").removeEventListener("click", BTN_ret)
    //otro ejemplo
    document.getElementById("BTN_con").removeEventListener("click", BTN_con)
    //copia esto pa ke te guies document.getElementById(el ID).removeEventListener("click", tu clase)
    document.getElementById("BTN_con").removeEventListener("click", BTN_ope)

    document.getElementById("BTN_con").removeEventListener("click", BTN_blanco1)

    document.getElementById("BTN_con").removeEventListener("click", BTN_tra)

    document.getElementById("BTN_con").removeEventListener("click", BTN_blanco2)

    document.getElementById("BTN_con").removeEventListener("click", BTN_ult)

    document.getElementById("BTN_con").removeEventListener("click", BTN_blanco3)
}