$(function(){
  
  var contenido = $('#contenido');
  var loader = $('#loader');
  contenido.css('display','none');

  var efecto = function(){
  	 setInterval(contenidoShow, 1500);
  }

  var contenidoShow = function(){
      contenido.css('display','block');
       hideLoader();
  }

  var hideLoader = function(){
     loader.css('display','none');
  }

  efecto();
})
