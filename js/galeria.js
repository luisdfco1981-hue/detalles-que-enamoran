/* ==========================================================================
   GALERIA.JS  ·  Detalles que enamoran
   --------------------------------------------------------------------------
   ESTE ES EL UNICO ARCHIVO QUE NECESITAS TOCAR PARA CAMBIAR FOTOS Y VIDEOS.

   Como funciona:
   1. Copia tu foto dentro de la carpeta  assets/img/
      (o tu video dentro de  assets/video/ ).
   2. Anade abajo un bloque nuevo copiando uno de los que ya existen.
   3. Guarda el archivo. Listo, la web se actualiza sola.

   Reglas importantes:
   - Respeta las comas y las llaves { } tal como estan.
   - El nombre del archivo tiene que estar escrito EXACTAMENTE igual que
     el archivo real (mayusculas, guiones y extension incluidos).
   - No uses tildes ni espacios en los nombres de archivo.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1) DATOS DE CONTACTO
   Si cambia el telefono o el correo, cambialo AQUI y se actualiza en toda
   la web (botones, formulario, pie de pagina y ficha de Google).
   -------------------------------------------------------------------------- */
window.CONTACTO = {
  nombreNegocio: 'Detalles que enamoran',
  persona: 'Claudia',

  // Telefono tal y como quieres que se LEA en la web
  telefonoVisible: '+56 9 5656 9190',
  // El mismo telefono para el enlace de llamada (sin espacios)
  telefonoEnlace: '+56956569190',
  // El mismo telefono para WhatsApp: codigo de pais + numero, SIN + ni espacios
  whatsapp: '56956569190',

  correo: 'silvaclauzv80@gmail.com',

  // Ciudad o zona donde trabajas (sale en el pie y en la ficha de Google)
  zona: 'Chile'
};


/* --------------------------------------------------------------------------
   2) OCASIONES
   Son las tarjetas de la seccion "Ocasiones" y tambien los botones de filtro
   de la galeria.

   id      -> etiqueta interna. Tiene que coincidir con el campo "ocasion"
              que pongas mas abajo en cada foto. Sin tildes ni espacios.
   nombre  -> lo que se lee en la web.
   frase   -> la frase corta debajo del titulo.
   imagen  -> la foto de la tarjeta. Proporcion vertical 4:5.
   alt     -> descripcion de la foto para quien no puede verla.
   -------------------------------------------------------------------------- */
window.OCASIONES = [
  {
    id: 'cumpleanos',
    nombre: 'Cumpleaños',
    frase: 'Desde el primer añito hasta los 80, con el tema que le guste.',
    imagen: 'assets/img/deco-cumpleanos-dorado-mesa.jpg',
    alt: 'Mesa de cumpleaños con globos dorados y cobrizos, letrero de Feliz Cumpleaños y letras luminosas.'
  },
  {
    id: 'graduaciones',
    nombre: 'Graduaciones y titulaciones',
    frase: 'Tanto esfuerzo merece una foto que dure años.',
    imagen: 'assets/img/deco-titulacion-ufro.jpg',
    alt: 'Arco de globos celestes y blancos junto a un telón negro con el letrero Titulados UFRO 2025.'
  },
  {
    id: 'san-valentin',
    nombre: 'San Valentín',
    frase: 'Para sorprender en casa sin tener que salir a ningún lado.',
    imagen: 'assets/img/deco-corazon-san-valentin.jpg',
    alt: 'Corazón gigante hecho con globos rojos, con una guirnalda de corazones colgando en el centro.'
  },
  {
    id: 'dia-de-la-madre',
    nombre: 'Día de la Madre',
    frase: 'Llega a la casa con algo montado y déjala sin palabras.',
    imagen: 'assets/img/ocasion-dia-de-la-madre.jpg',
    alt: 'Montaje de Día de la Madre con arco de globos en rosas y oro rosa, telón brillante, letrero “Feliz Día Mamá” y una torta con letras luminosas.'
  },
  {
    id: 'dia-del-padre',
    nombre: 'Día del Padre',
    frase: 'Sencillo, con su color favorito y con su nombre.',
    imagen: 'assets/img/ocasion-dia-del-padre.jpg',
    alt: 'Montaje de Día del Padre con arco de globos azul marino, dorado y blanco, telón negro con el letrero “Feliz Día Papá” y una torta al centro.'
  },
  {
    id: 'aniversarios',
    nombre: 'Aniversarios',
    frase: 'Un año más juntos también se celebra en grande.',
    imagen: 'assets/img/ocasion-aniversario.jpg',
    alt: 'Montaje de aniversario con arco de globos rojos, blancos y dorados, letrero “Feliz Aniversario”, torta, rosas rojas y velas encendidas.'
  },
  {
    id: 'jubilaciones',
    nombre: 'Jubilaciones',
    frase: 'Cerrar una etapa así de bonita se merece una despedida.',
    imagen: 'assets/img/ocasion-jubilacion.jpg',
    alt: 'Montaje de jubilación con arco de globos negros, dorados y plateados, letrero “Feliz Jubilación” y estrellas doradas sobre la mesa.'
  },
  {
    id: 'baby-shower',
    nombre: 'Baby shower y revelación',
    frase: 'Para esperar a la guagua con todo listo y bonito.',
    imagen: 'assets/img/ocasion-baby-shower.jpg',
    alt: 'Montaje de baby shower con arco de globos en rosa, celeste y dorado, letrero “Baby Shower”, cubos con letras, torta y un oso de peluche grande.'
  },
  {
    id: 'bautizos',
    nombre: 'Bautizos y primeras comuniones',
    frase: 'Detalles suaves, con calma y sin recargar.',
    imagen: 'assets/img/ocasion-bautizo.jpg',
    alt: 'Montaje de bautizo con arco de globos celestes, crema y dorados, telón con el letrero “Mi Bautizo”, una cruz dorada y ramos de flores blancas.'
  },
  {
    id: 'empresa',
    nombre: 'Eventos de empresa',
    frase: 'Aniversarios, premiaciones y cierres de año con tus colores.',
    imagen: 'assets/img/ocasion-empresa.jpg',
    alt: 'Montaje corporativo con arco de globos azul marino, plateado y dorado, panel con el letrero “Evento Corporativo” y estrellas doradas de premiación.'
  }
];


/* --------------------------------------------------------------------------
   3) GALERIA
   Cada bloque { ... } es una foto o un video.

   tipo     -> 'foto' o 'video'
   archivo  -> ruta al archivo. Las fotos van en assets/img/
               y los videos en assets/video/
   ocasion  -> tiene que coincidir con un "id" de la lista de OCASIONES
               de arriba (asi funcionan los filtros).
   titulo   -> texto corto que aparece al pasar el dedo o el raton por encima.
   alt      -> descripcion de la imagen. Es OBLIGATORIA: la leen las personas
               ciegas y tambien la usa Google.
   alto     -> 'normal' o 'alta'. Las marcadas como 'alta' ocupan mas espacio
               en el mosaico. Usa 'alta' en tus 2 o 3 fotos mejores.
   poster   -> SOLO para videos y es OPCIONAL. Es la imagen que se ve antes
               de darle al play. Si no la pones, el navegador usa el primer
               fotograma del video, que tambien queda bien.
   -------------------------------------------------------------------------- */
window.GALERIA = [
  {
    tipo: 'foto',
    archivo: 'assets/img/deco-corazon-san-valentin.jpg',
    ocasion: 'san-valentin',
    titulo: 'Corazón gigante de globos',
    alt: 'Corazón gigante hecho con globos rojos sobre un escenario de madera, con una guirnalda de corazones colgando y globos rosados y dorados a los lados.',
    alto: 'alta'
  },
  {
    tipo: 'foto',
    archivo: 'assets/img/deco-titulacion-ufro.jpg',
    ocasion: 'graduaciones',
    titulo: 'Titulación UFRO 2025',
    alt: 'Arco de globos celestes y blancos junto a un telón negro con las letras Titulados UFRO 2025 y un arreglo floral azul y blanco.',
    alto: 'alta'
  },
  {
    tipo: 'foto',
    archivo: 'assets/img/deco-graduacion-negro-dorado.jpg',
    ocasion: 'graduaciones',
    titulo: 'Photocall negro y dorado',
    alt: 'Photocall con guirnalda de globos negros, dorados y plateados, telón de flecos metálicos y abanicos de papel dorados.',
    alto: 'normal'
  },
  {
    tipo: 'foto',
    archivo: 'assets/img/deco-negro-dorado-plata.jpg',
    ocasion: 'empresa',
    titulo: 'Arco en negro, oro y plata',
    alt: 'Arco de globos en negro, dorado y plateado sobre un telón de flecos metálicos, montado en un salón de eventos.',
    alto: 'normal'
  },
  {
    tipo: 'foto',
    archivo: 'assets/img/deco-cumpleanos-dorado-mesa.jpg',
    ocasion: 'cumpleanos',
    titulo: 'Mesa dorada de cumpleaños',
    alt: 'Mesa vestida de blanco con globos dorados y cobrizos, letrero de Feliz Cumpleaños y letras luminosas con las iniciales del cumpleañero.',
    alto: 'normal'
  },
  {
    tipo: 'foto',
    archivo: 'assets/img/deco-cumpleanos-futbol.jpg',
    ocasion: 'cumpleanos',
    titulo: 'Cumpleaños de fútbol',
    alt: 'Mesa de cumpleaños número 14 con guirnalda de globos en rojo, azul, amarillo y dorado, telón de flecos dorados y un balón de fútbol al centro.',
    alto: 'normal'
  },
  {
    tipo: 'video',
    archivo: 'assets/video/deco-video-1.mp4',
    ocasion: 'cumpleanos',
    titulo: 'Montaje terminado',
    alt: 'Vídeo que recorre un montaje de cumpleaños ya terminado, con la mesa principal vestida y los globos instalados.',
    alto: 'alta'
  },
  {
    tipo: 'video',
    archivo: 'assets/video/deco-video-2.mp4',
    ocasion: 'cumpleanos',
    titulo: 'Detalle en dorado',
    alt: 'Vídeo con el detalle de una decoración en tonos dorados y cobrizos montada sobre una pared de madera.',
    alto: 'normal'
  },
  {
    tipo: 'video',
    archivo: 'assets/video/deco-video-3.mp4',
    ocasion: 'cumpleanos',
    titulo: 'Ambiente de la celebración',
    alt: 'Vídeo del ambiente de una celebración con la decoración de globos ya montada en el salón.',
    alto: 'normal'
  }

  /* Para anadir una foto nueva, copia uno de los bloques de arriba
     (desde la llave { hasta la },) y pegalo aqui debajo con tus datos.
     Acuerdate de poner una coma al final del bloque anterior. */
];


/* --------------------------------------------------------------------------
   4) TESTIMONIOS

   IMPORTANTE: la redaccion de estos tres comentarios esta escrita por encargo,
   no copiada de un mensaje real. Antes de ensenar la web, repasalos con Made,
   Pilar y Maria y dejalos con las palabras que ellas usaron de verdad.
   Un testimonio real siempre suena mejor que uno bien escrito.

   Para cambiar uno, edita su "texto", su "autora" y su "detalle".
   Si quieres quitar la seccion entera, borra los tres bloques.
   -------------------------------------------------------------------------- */
window.TESTIMONIOS = [
  {
    texto: 'Le pedí algo para el cumpleaños de mi hija y le mandé una sola foto de referencia. Claudia me devolvió una idea mucho mejor que la que yo tenía en la cabeza. Llegó antes de la hora, armó todo y quedó impecable.',
    autora: 'Made',
    detalle: 'Cumpleaños'
  },
  {
    texto: 'Lo que más me gustó fue que me preguntó por los detalles: el color del mantel, dónde iba la mesa, por dónde iba a pasar la gente. Se nota que lo piensa para uno y no saca algo de un catálogo.',
    autora: 'Pilar',
    detalle: 'Aniversario'
  },
  {
    texto: 'Yo nunca había encargado decoración y andaba perdida. Me fue explicando todo con paciencia y sin apurarme. Cuando entraron mis invitados se quedaron mirando la mesa, y ahí me di cuenta de que había valido la pena.',
    autora: 'María',
    detalle: 'Bautizo'
  }
];
