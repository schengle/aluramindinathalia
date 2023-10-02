// Pom --------------------------------------
function tocaSom(idElementAudio) { 
    document.querySelector().play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.lenght)       { 
   ListaDeTeclas[contador].onclick = tocaSomPom;

   contador = (contador + 1);

   console.log(contador);
}
