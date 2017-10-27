var arrayInstrumentos = [
  {name: "Batería",precio: 500,imagen:"imagenes/bateria.jpg", descripcion: "La nueva RYDEEN (pack con 5 cascos) es exactamente el kit con el que a cualquier baterista principiante le gustaría tocar. Esta batería incluye el set de hardware HW680W de Yamaha y sujeciones de toms. La nueva RYDEEN está disponible en acabados sólidos y glitter, con tres opciones de color para cada tipo, lo que hace un total de seis acabados, para una estética clásica y muy viva."},
  {name: "Saxofón",precio: 600, imagen:"imagenes/saxofon.jpg", descripcion: "SAXO  SOPRANO YAMAHA YSS-875 EX: Los saxos soprano Custom EX constituyen una versión mejorada del clásico YSS-875, considerado por muchos como el mejor saxo soprano del mundo. El nuevo diseño que incluye el cuello G2 presenta mayores cualidades expresivas, un rango dinámico más amplio, una entonación más precisa y un bello sonido adornado por ricos armónicos. El YSS-875EX incluye dos tudeles, uno recto y otro curvado, satisfaciendo tus preferencias en cada momento. Con estuche ultraligero, garantizando así la máxima protección del instrumento. Se incluye una correa de transporte."},
  {name: "Piano vertical",precio: 1000, imagen:"imagenes/piano-vertical.png", descripcion: "Los pianos de serie P son modelos de gama media con calidad y funciones de gama alta. A pesar de su precio económico, estos pianos se fabrican con el cuidado y la atención propios de Yamaha, para proporcionarles una reproducción tonal excelente y una capacidad de respuesta rápida y sensible del teclado y del mecanismo de acción de Yamaha."},
  {name: "Piano de cola",precio: 2000, imagen:"imagenes/piano-cola.jpg", descripcion: "Yamaha D GB1K EN Disc-Grand Piano Enspire, 88 keys, 3 pedals, headphone included, dimensions: 151 x 146 x 99cm. Weight: thomann 295 kg, more than just a player piano, the Disklavier ENSPIRE ST was built with the listener and the player in mind. Fully integrated record and playback functionality, as well as Yamaha’s patented SILENT Piano technology make this instrument the perfect space-saving choice for the growing family, the thomann established hobbyist or the avid listener. Cutting-edge DSP Servo Drive System technology ensures accurate performance reproduction by automatically monitoring and calibrating the movement of the keys and pedals in real-time during playback."},
  {name: "Bongos",precio: 200, imagen:"imagenes/bongos.png", descripcion: "Acabado especial 30th Un excelente bongo con el innovador sistema Free Ride que no perfora los cascos aumentado asi la resonancia y volumen. Fabricados con Hevea Brasilensis en medidas 6.3/4 y 8. Aros y herrajes negro pavonado."},
  {name: "Violín",precio: 800, imagen:"imagenes/violin.jpg", descripcion: "El acabado tiene un gran efecto en el timbre del instrumento, por eso hemos invertido tiempo y probado diversas fórmulas con mediciones acústicas para desarrollar un acabado al óleo original que proporcione el mejor timbre. Aplicado a mano para maximizar sus efectos, el acabado mejora notablemente la respuesta del instrumento y su articulación, además de conferirle una bellísima apariencia estética."},
  {name: "Armónica",precio: 100, imagen:"imagenes/armonica.jpg", descripcion: " Características ú peine de plástico Negro con placas de caña empotradas ú Cóncavo cubre con aberturas laterales ú 20 cañas de EM ú 0,9 mm de latón placas de caña ú Hecho en Alemania Especificaciones: Nombre del artículo Big River harp MS Tipo diatónico Sintonización Richter Número de hoyos 10 Cañas 20 de bronce Superficie cubierta acero inoxidable Placas Reed 0,9 mm de latón Reed superficie de la placa latón. Superficie Boquilla ABS Peine ABS, negro Longitud 10,5 cm"},
  {name: "Trompeta",precio: 400, imagen:"imagenes/trompeta.jpg", descripcion: "La serie Xeno representa la fusión entre la artesanía que implica el diseño de instrumentos espectaculares, la tecnología más avanzada, y la experiencia, talento y sueños de renombrados artistas de todo el mundo. Estas son trompetas que realmente inspiran. Su impresionante potencia y proyección combinada con la resistencia y respuesta perfectas para una extraordinaria flexibilidad tonal. Las trompetas Xeno continúan evolucionando con los músicos que las tocan, hasta conseguir el máximo nivel en la expresión musical"}
];

var ventana = document.querySelector(".emergente");
var button = document.querySelector(".boton-cerrar");
button.addEventListener('click',cerrar);
function cerrar( ){
  clearInterval(b);
  ventana.classList.add("cerrar");
}

var aperturaEmergente = document.querySelectorAll(".abrir-emergente");
for (var i=0; i<aperturaEmergente.length; i++) {
  aperturaEmergente[i].addEventListener('click',abrir);
}
var elemtoLi;
function abrir(event){
      elemtoLi=event.currentTarget.id;

      var foto=document.querySelector(".img-instrument");
      foto.src = arrayInstrumentos[elemtoLi].imagen;
      var description=document.querySelector("#text-descript");
      var money=document.querySelector("#precio-euros");
      description.innerHTML=arrayInstrumentos[elemtoLi].descripcion;
      money.innerHTML=arrayInstrumentos[elemtoLi].precio;

      var rebaja=arrayInstrumentos[elemtoLi].precio*0.8;
      var  pr=document.querySelector(".precioRebajado");
      pr.innerHTML=rebaja;
      contador=10;
      var peich= document.querySelector(".aviso");
      peich.innerHTML="";
      b=setInterval(actualizarCuentaAtras,1000);

      ventana.classList.remove("cerrar");




/*
      var imgAInsertar=arrayInstrumentos[j].imagen;
      var img-instrument
      img-instrument=imgAINsertar;*/
    }
  var  clickCompra=document.querySelector(".boton-compra");
  clickCompra.addEventListener("click",comprar);
  var b;
  var contador=10;
    function actualizarCuentaAtras(){
      var t= document.querySelector(".cuentaAtras");
      t.innerHTML=contador;
      contador=contador-1;

      if (contador===0){
        clearInterval(b);
        var peich= document.querySelector(".aviso");
        peich.innerHTML="Se acabó el tiempo.";

        }
    }

    function comprar(){
      var peich= document.querySelector(".aviso");
      peich.innerHTML="Gracias por su compra.";
      clearInterval(b);
      setTimeout(cerrar,2000);
    }
