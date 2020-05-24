var pass=""
var clave_real= "12345678"
var siguiente = false
var retiro=false
var retiro_soles=false
var retiro_dolares=false
var monto = 0
var otro_monto = false
var confirmar=false
var no = false
var si = false
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
                document.getElementById("pass").value=""
                pass=""
                nextVista()
            }else{
                alert("clave incorrecta")
                document.getElementById("pass").value=""
                pass=""
            }
        } else {
            if (pass.length < 8 && pass.length!=0) {
                alert('Clave Incompleta')
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
      retiro=false
      retiro_soles=false
      borrareventos()
      ocultarvistas()
      
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
function ocultarvistas() {
    document.getElementById("Retiro").style.display='none'
    document.getElementById("MenuPrincipal").style.display='block'
    document.getElementById("RetiroPlata").style.display='none'
    document.getElementById("retiromonto").style.display='none'
    document.getElementById("retiroprocesado").style.display='none'
    document.getElementById("finish").style.display='none';
}
//ejemplo de funcion ke debes de crear
function BTN_ret() {
    if (siguiente) {
        document.getElementById("Retiro").style.display='block'
        document.getElementById("MenuPrincipal").style.display='none'
        siguiente=false
        retiro = true;
    }else if (retiro) {
        retiro=false
        retiro_soles=true
        document.getElementById("RetiroPlata").style.display='block'
        document.getElementById("Retiro").style.display='none'
    }else if (retiro_soles) {
        monto=20
        document.getElementById("retiromonto").style.display='block'
        document.getElementById("RetiroPlata").style.display='none'
        retiro_soles=false
        document.getElementById("montoboton").value="s/"+20
    }
}
// asi con todas las webadas man
function BTN_con() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles) {
        monto = 150
        document.getElementById("retiromonto").style.display='block'
        document.getElementById("RetiroPlata").style.display='none'
        document.getElementById("montoboton").value="s/"+150
        retiro_soles=false
    }
}
function BTN_ope() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles) {
        monto = 300
        document.getElementById("retiromonto").style.display='block'
        document.getElementById("RetiroPlata").style.display='none'
        document.getElementById("montoboton").value="s/"+300
        retiro_soles=false
    }
}
function BTN_blanco1() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles) {
        monto = 0
        alert(monto)
    }
}
function BTN_tra() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles) {
        monto = 100
        document.getElementById("retiromonto").style.display='block'
        document.getElementById("RetiroPlata").style.display='none'
        document.getElementById("montoboton").value="s/"+100
        retiro_soles=false
    }
}
function BTN_blanco2() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles) {
        monto = 200
        document.getElementById("retiromonto").style.display='block'
        document.getElementById("RetiroPlata").style.display='none'
        document.getElementById("montoboton").value="s/"+200
        retiro_soles=false
    }else if (otro_monto) {
        document.getElementById("retiroprocesado").style.display='block'
        document.getElementById("retiromonto").style.display='none'
        otro_monto = false
        confirmar=true
    }
}
function BTN_ult() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles) {
        document.getElementById("retiromonto").style.display='block'
        document.getElementById("RetiroPlata").style.display='none'
        otro_monto = true
        retiro_soles=false
        si = true
    }else if (si) {
        document.getElementById("MenuPrincipal").style.display='block';
        document.getElementById("retiroprocesado").style.display='none';
        si = false
    }
}
function BTN_blanco3() {
    if (siguiente) {
    }else if (retiro) {
    }else if (retiro_soles || otro_monto) {
        document.getElementById('MostrarOcultar').style.display='block';
        document.getElementById('vistaMenuPrincipal').style.display='none';
        document.getElementById("pass").value=""
        pass=""
        retiro=false
        retiro_soles=false
        borrareventos()
        ocultarvistas()
    }else if (confirmar) {
        document.getElementById("finish").style.display='block';
        document.getElementById("retiroprocesado").style.display='none';
        confirmar=false
    }
}

function borrareventos() {
    //aca pones todos los eventos a borrar
    document.getElementById("BTN_ret").removeEventListener("click", BTN_ret)
    //otro ejemplo
    document.getElementById("BTN_con").removeEventListener("click", BTN_con)
    //copia esto pa ke te guies document.getElementById(el ID).removeEventListener("click", tu clase)
    document.getElementById("BTN_ope").removeEventListener("click", BTN_ope)

    document.getElementById("BTN_blanco1").removeEventListener("click", BTN_blanco1)

    document.getElementById("BTN_tra").removeEventListener("click", BTN_tra)

    document.getElementById("BTN_blanco2").removeEventListener("click", BTN_blanco2)

    document.getElementById("BTN_ult").removeEventListener("click", BTN_ult)

    document.getElementById("BTN_blanco3").removeEventListener("click", BTN_blanco3)
}