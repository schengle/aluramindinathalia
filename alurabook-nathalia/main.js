function tocaSom(idElementAudio) { 
    document.querySelector().play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listaDeTeclas.lenght)       { 

   const tecla= listaDeTeclas[contador]
   const instrumento = tecla.classList[1];
   //template string
const idAudio = `#som_${instrumento}`;

//console.log(idAudio);

tecla.onclick = function [] {
    tocaSom(idAudio);
}

   contador = (contador + 1);

   console.log(contador);
}

