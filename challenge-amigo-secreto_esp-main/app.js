// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];


let lista= document.getElementById('listaAmigos');

function agregarAmigo(){
    let nombreIngresado= document.getElementById('amigo').value;

    if(nombreIngresado=='' ||nombreIngresado==null ){
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(nombreIngresado)
        
        actualizarAmigos();

        document.getElementById('amigo').value='';
    }
}

function actualizarAmigos(){
    lista.innerHTML="";
    

    for (let i=0;i<amigos.length;i++) {
        let nuevoElemento=document.createElement('li');
        nuevoElemento.textContent=amigos[i];
        lista.appendChild(nuevoElemento);
    }

}
function sortearAmigo(){
    

    if(amigos.length!=0){
    let indiceAleatorio= Math.floor(Math.random()*amigos.length);
    let resultado = document.getElementById('resultado');
    let nombreSorteado=amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML =nombreSorteado;
    }else{
        alert('Lista vacia');
    }
}