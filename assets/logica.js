function enviarDatos(){
    const nombre= document.getElementById('nombre').value;

    enviarDatosAlServidor(nombre)
        .then(mostrarMensajeBienvenida)
        .catch(mostrarMensajeError)
}

function enviarDatosAlServidor(nombre){

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const autorizado = (nombre.toLowerCase() == 'papavictor');
            if(autorizado){
                resolve('Bienvenido al sistema');

            }else{
                reject('Usted No Esta Autorizado');

            }
        },2000);
    });
}

function mostrarMensajeBienvenida(mensaje){

    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}

function mostrarMensajeError(mensaje){
const elemento = documnt.getElementById('mensaje');
elemento.textContent = mensaje;
elemento.classList.remove('oculto');

}