function ingreso(){

    let user  =  document.getElementById("user").value;
    let password = document.getElementById("password").value;
    
    //&& password=="12345"

    if(user=="Doctor" ){

        window.location.href="Doctor.html";

    } else{
        alert("Datos incorrectos")
    }

}

console.log("Hola")
