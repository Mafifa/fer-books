interface Book {
  id: string
  title: string
  img: string
  autor?: string
  opinion?: string
  categories?: string[]
  download?: string
  buy?: string
  opinionP2?: string
}

const categories = {
  CienciaFiccion: 'Ciencia ficción',
  Autoayuda: 'Autoayuda',
  Romance: 'Romance',
  Fantasia: 'Fantasía',
  Drama: 'Drama',
  Horror: 'Horror',
  Infantil: 'Infantil',
  FantasiaOscura: 'Fantasía oscura',
  AltaFantasia: 'Alta fantasía',
  FantasiaEpica: 'Fantasía épica',
  FantasiaEspacial: 'Fantasía espacial',
  Clasicos: 'Clásicos',
  Japones: 'Japonés',
  FantasiaMedieval: 'Fantasía medieval',
  NovelaLigera: 'Novela ligera',
  FantasiaCoreana: 'Fantasía coreana',
  VentanaDeEstado: 'Ventana de estado',
  NovelaWeb: 'Novela web'
}

export const books: Book[] = [
  {
    id: 'Camino-de-los-reyes1',
    title: 'El Camino de los Reyes',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg',
    autor: 'Brandon Sanderson',
    opinion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias libero molestiae veritatis officia rem aliquam! Dolorum quam magni vel ratione, ad ab, necessitatibus possimus aliquid cumque, reiciendis at molestiae recusandae?',
    categories: [categories.Drama, categories.AltaFantasia]

  },
  {
    id: 'La-casa-maz-azul',
    title: 'La casa en el mar más azul',
    opinion: 'Originalmente publicada el 17 de marzo de 2020 "La casa en el mar más azul" es una novela escrita por el renombrado autor TJ Klune. Mediante personajes entrañables y encantadores, la historia te sumerge en un viaje de emociones profundas junto a su protagonista; Linus Baker, un trabajador social encargado de niños quienes poseen habilidades mágicas. Cuarentón y con una vida simple y solitaria, La vida de Linus da un giro inesperado cuando recibe una misión especial: visitar un orfanato en una isla remota, en donde conocerá al enigmático Arthur Parnassus, el dueño del orfanato, quien le lleva a cuestionar sus propias creencias y prejuicios.',
    opinionP2: '"La casa en el mar más azul" es una oda a la infancia, a la diversidad y a las segundas oportunidades. A través de una prosa cautivadora, TJ Klune nos transporta a un mundo mágico donde la amistad y el amor trascienden las barreras.Esta novela.Ha sido descrita como una historia que abre la mente y el corazón, recordándonos la importancia de aceptar a los demás tal como son y luchar por nuestra propia felicidad',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg',
    autor: 'TJ Klune'
  },
  {
    id: 'aprendiz-de-bruja',
    title: 'Nicky aprendiz de bruja',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg',
    autor: 'Eiko Kadono',
    opinion: 'La obra original de la famosa adaptación de estudio ghibli y Hayao Miyazaki. "Nicky aprendiz de bruja" es una encantadora novela escrita por Eiko Kadono, cuya historia nos lleva a el mundo de Nicky, una joven bruja que, al cumplir los 13 años y como dicta la tradición de las brujas adolescentes, debe emprender una misión. Pasar un año fuera de casa para aprender a valerse por sí misma. A lo largo del viaje, acompañamos a Nicky y su gato Jiji en sus aventuras por establecerse y vivir por su cuenta en una nueva ciudad, combinando elementos de fantasía y comedia, creando una historia divertida y conmovedora. Es un libro perfecto para aquellos que disfrutan de las historias mágicas y de los personajes carismáticos.'
  },
  {
    id: 'Trenza-esmeralda',
    title: 'Trenza del mar esmeralda',
    autor: 'Brandon sanderson',
    opinion: '"Trenza del mar esmeralda" es la primera de las novelas secretas escritas por el autor: Brandon Sanderson, pertenecientes al universo compartido literario conocido como el cosmere, La historia se desarrolla en una isla ubicada en un vasto océano verde esmeralda, donde la protagonista, Trenza, vive una vida sencilla y tranquila limpiando ventanas y coleccionando tazas. Sin embargo, la vida de Trenza da un giro inesperado cuando se embarca en una misión aparentemente imposible, y aunque Trenza no es una heroína convencional, se embarca en esta peligrosa tarea con determinación y valentía.',
    opinionP2: ' Lo que hace que "Trenza del mar esmeralda" sea una lectura cautivadora es la habilidad de Brandon Sanderson para crear un mundo rico y detallado.Su narrativa envolvente y su estilo de escritura fluido hacen que sea fácil perderse en las páginas de este libro.Además, los personajes están bien desarrollados y resultan muy interesantes.Trenza es una protagonista carismática y realista, con la que es fácil identificarse.Pero que a medida que la historia avanza, se revelan cada vez capas más profundas de su personalidad, lo que la convierte en un personaje memorable.',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg'
  },
  {
    id: 'bestiario-Axlin',
    title: 'El bestiario de Axlin',
    autor: 'Laura Gallego',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg',
    opinion: '"El bestiario de Axlin" es el primer libro de la saga "Guardianes de la Ciudadela" escrita por la autora española Laura Gallego García. La historia nos cuenta la vida Axlin, una joven que vive en un mundo repleto de monstruos que se dedican a cazar a la humanidad, debido a un problema que le impide correr o caminar adecuadamente, Axlin se convierte en la escriba de su aldea, proponiéndose investigar y recopilar información sobre todos los monstruos del mundo. Laura Gallego logra una vez más transportarnos a un mundo lleno de criaturas fantásticas y misterios por descubrir, siendo Axlin una protagonista valiente y determinada, a la cual su pasión por el conocimiento y la protección de su pueblo la lleva a emprender un viaje en busca de la Ciudadela, un lugar legendario donde se dice que se encuentra la clave para enfrentar a los monstruos. A lo largo de la historia, Axlin se encuentra con diversos desafíos y personajes fascinantes que enriquecen la trama. La autora logra crear un universo lleno de detalles y descripciones vívidas, lo que permite al lector sumergirse por completo en la trama.'
  },
  {
    id: 'rosas-y-espinas',
    title: 'Una corte de rosas y espinas',
    autor: 'Sarah J. Maas',
    opinion: '"Una corte de rosas y espinas" es el primer libro de la serie "Una corte de rosas y espinas" también llamado “ACOTAR” escrita por Sarah J. Maas. La historia sigue a Feyre, una joven cazadora que vive en un mundo dividido entre humanos y fae. Un día, Feyre mata a un lobo durante una cacería, sin saber que en realidad era un fae disfrazado. Como consecuencia, es llevada al reino de Prythian, donde deberá pagar por su crimen. Sin embargo, pronto descubre que las cosas no son como parecen y se ve envuelta en una intrincada red de política, magia y romance. Sarah J. Maas crea una bella reinterpretación de la bella y la bestia en un mundo fascinante y lleno de detalles, donde los personajes están llenos de matices y complejidad. Feyre es una protagonista valiente y determinada, dispuesta a enfrentar cualquier desafío para proteger a sus seres queridos. A medida que la trama avanza, se desarrollan relaciones intensas y emocionales, y se exploran temas como el amor, la lealtad y el sacrificio.',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg'
  },
  {
    id: 'nunca-noche',
    title: 'Nuncanoche',
    img: 'public/image/El-camino-de-los-reyes-El-Archivo-de-las-Tormentas-1--i6n21535506.jpg',
    autor: 'Jay Kristoff',
    opinion: '"Nuncanoche" es el primer libro de la trilogía "Crónicas de la Nuncanoche" escrita por Jay Kristoff. Esta historia nos sumerge en un mundo de fantasía oscura en donde seguimos la vida de Mia Corvere, una joven aprendiz de asesina que se embarca en la misión de unirse al credo de asesinos mas poderoso del imperio, la iglesia del bendito asesinato.',
    opinionP2: ' La narrativa de Jay Kristoff es cautivadora y llena de acción.El autor crea un mundo original y detallado, donde la magia y la intriga se entrelazan en cada página.Además, la trama está llena de giros sorprendentes y momentos emocionantes que mantienen al lector enganchado de principio a fin. "Nuncanoche" es una novela que combina elementos de fantasía oscura, aventura y acción.Donde Jay Kristoff logra equilibrar hábilmente la oscuridad y la violencia con momentos de humor y camaradería entre los personajes.Además, el libro aborda temas como el poder, la venganza y la redención, en un mundo en donde no sabes cuales son los peligrosos que acechan.'
  }

]
