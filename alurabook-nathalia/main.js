function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
  
    if (elemento === null) {
      alert('Elemento nao encontrado');
    }
  
    if (elemento != null && elemento.localName === 'audio' ) {
          elemento.play();
    }   
     else {
        // alert('Elemento nao encontrado ou seletor invalido');
        console.log('Elemento não encontrado ou seletor invalido');
     }    
  }
  
  
  const ListaDeTeclas = document.querySelectorAll('.tecla');
  
  let contador = 0;
  
  
  for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
  
     const tecla = ListaDeTeclas[contador];
     const instrumento = tecla.classList[1];
  
     const idAudio = `#som_${instrumento}`;
  
     console.log(idAudio);
  
     tecla.onclick = function () {
        tocaSom(idAudio);
     }
  
     tecla.onkeydown = function (evento) { 
  
        console.log(evento.code == 'Space')
  
        if (evento.code === 'Space' || evento.code === 'Enter') {
          tecla.classList.add('ativa');
        }
  
     
     }   
     tecla.onkeyup = function ()  {
        tecla.classList.remove ('ativa');
  
     }
  
  } 