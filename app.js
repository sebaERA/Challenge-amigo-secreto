// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ArrayNombres = [];
function AgregarNombres(){
    const agregar=document.getElementById('amigo').value
    if (document.getElementById('amigo').value.length!=0 && !ArrayNombres.includes(agregar)){
       ArrayNombres.push(agregar);
       alert(`Amigo secreto agregado ${agregar}`)
       document.getElementById('amigo').value='';
       VisualizarLista()
    }
    else{
        alert(`Por favor ingrese nombre`)
    }

}
function VisualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for (let i=0;i<ArrayNombres.length;i++){
        const li = document.createElement('li');
        li.textContent = ArrayNombres[i];
        lista.appendChild(li);
    }

}
function SorteoAleatorio(){
    const lista = document.getElementById('resultado');
    lista.innerHTML = ''; 
    if (ArrayNombres.length!=0){
        const sorteo=Math.floor(Math.random()* ArrayNombres.length);
        const li = document.createElement('li');
        li.textContent = ArrayNombres[sorteo];
        lista.appendChild(li);  
        ArrayNombres.pop(sorteo)
    }
    alert(`Amigos secretos disponibles: ${ArrayNombres}`)
}
console.log(ArrayNombres)