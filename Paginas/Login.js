const username = document.getElementById("user")
const password = document.getElementById("password")
const btningreso = document.getElementById("Ingresar")

btningreso.addEventListener("click",ingreso)

function ingreso(){
    username: user.value;
    password: password.value;

    if(username=="Doctor" && password=="12345" || username=="Enfermera" && password=="56789"  ){
       
        window.location.href="/-IPC1-Proyecto2_202100086/Doctor.html"
    }else{
        window.location.href="Enfermera.html"
    }

}
