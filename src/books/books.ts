interface Category {
  Name: string;
  color: string;
}

interface Book {
  id: string;
  title: string;
  img: string;
  autor: string;
  opinion: string;
  download?: string;
  buy: string;
  opinionP2?: string;
  categories: Category[];
}

const categories = {
  ViajesTiempo: {
    Name: 'Viajes en el tiempo',
    color: 'bg-[#232221] text-white'
  },
  CienciaFiccion: { Name: 'Ciencia ficción', color: 'bg-[#235437] text-white' },
  Autoayuda: { Name: 'Autoayuda', color: 'bg-[#0099ff]' },
  Romance: { Name: 'Romance', color: 'bg-[#b30000] text-white' },
  Fantasia: { Name: 'Fantasía', color: 'bg-[#6600cc] text-white' },
  Drama: { Name: 'Drama', color: 'bg-[#543f23] text-white' },
  Horror: { Name: 'Horror', color: '#' }, // Se ajusta al formato
  Academia: { Name: 'Academia', color: 'bg-[#99cc00] text-white' },
  Infantil: { Name: 'Infantil', color: 'bg-[#33ccff]' },
  FantasiaOscura: { Name: 'Fantasía oscura', color: 'bg-[#660033] text-white' },
  AltaFantasia: { Name: 'Alta fantasía', color: 'bg-[#6666ff] text-white' },
  FantasiaEpica: { Name: 'Fantasía épica', color: 'bg-[#cc3300]' },
  FantasiaEspacial: { Name: 'Fantasía espacial', color: 'bg-[#232f54] text-white' }, // Se ajusta al formato
  Clasicos: { Name: 'Clásicos', color: '#' }, // Se ajusta al formato
  Japones: { Name: 'Japonés', color: '#' }, // Se ajusta al formato
  FantasiaMedieval: { Name: 'Fantasía medieval', color: '#' }, // Se ajusta al formato
  NovelaLigera: { Name: 'Novela ligera', color: '#' }, // Se ajusta al formato
  FantasiaCoreana: { Name: 'Fantasía coreana', color: '#' }, // Se ajusta al formato
  VentanaDeEstado: { Name: 'Ventana de estado', color: '#' }, // Se ajusta al formato
  NovelaWeb: { Name: 'Novela web', color: '#' }, // Se ajusta al formato
  Ficcion: { Name: 'Ficcion', color: 'bg-[#336600] text-white' },
  PostApocaliptico: { Name: 'Post-Apocaliptico', color: 'bg-[#542323] text-white' }
};

export const books: Book[] = [
  {
    id: 'Camino-de-los-reyes1',
    title: 'El Camino de los Reyes',
    img: 'https://m.media-amazon.com/images/I/51srLUMCotL.jpg',
    autor: 'Brandon Sanderson',
    opinionP2: '"El Camino de los Reyes" es la obra más importante de su autor, siendo elogiada por su mundo imaginativo, su trama intrigante y sus personajes bien desarrollados. Muchos consideran que es una obra maestra de la fantasía épica. ',
    opinion: 'El Camino de los Reyes" es la obra magna y el primer libro de la decalogía “El Archivo de las Tormentas" del autor estadounidense Brandon Sanderson. La historia se desarrolla en el mundo de Roshar, un planeta constantemente azotado por poderosas tormentas que han moldeado la fauna y la flora del mismo, luego del asesinato del rey de alezkar a manos de un misterioso asesino de blanco, los tres protagonistas kaladin, shallan y dalinar se verán envueltos en una trama épica llena de intriga, política, magia y batallas.',
    categories: [categories.Drama, categories.AltaFantasia],
    buy: 'https://www.amazon.com/-/es/Brandon-Sanderson/dp/8466657665'

  },
  {
    id: 'La-casa-maz-azul',
    title: 'La casa en el mar más azul',
    opinion: 'Originalmente publicada el 17 de marzo de 2020 "La casa en el mar más azul" es una novela escrita por el renombrado autor TJ Klune. Mediante personajes entrañables y encantadores, la historia te sumerge en un viaje de emociones profundas junto a su protagonista; Linus Baker, un trabajador social encargado de niños quienes poseen habilidades mágicas. Cuarentón y con una vida simple y solitaria, La vida de Linus da un giro inesperado cuando recibe una misión especial: visitar un orfanato en una isla remota, en donde conocerá al enigmático Arthur Parnassus, el dueño del orfanato, quien le lleva a cuestionar sus propias creencias y prejuicios.',
    opinionP2: '"La casa en el mar más azul" es una oda a la infancia, a la diversidad y a las segundas oportunidades. A través de una prosa cautivadora, TJ Klune nos transporta a un mundo mágico donde la amistad y el amor trascienden las barreras.Esta novela.Ha sido descrita como una historia que abre la mente y el corazón, recordándonos la importancia de aceptar a los demás tal como son y luchar por nuestra propia felicidad',
    img: 'https://www.planetadelibros.com.ve/usuaris/libros/fotos/351/m_libros/350098_portada_la-casa-en-el-mar-mas-azul_tj-klune_202203161729.jpg',
    autor: 'TJ Klune',
    categories: [categories.Autoayuda, categories.Romance],
    buy: 'https://www.amazon.com/-/es/TJ-Klune/dp/8408253891'
  },
  {
    id: 'aprendiz-de-bruja',
    title: 'Nicky aprendiz de bruja',
    img: 'https://books.google.co.ve/books/publisher/content?id=t1eeEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2JfD6OR4hHxGboGRzpX1l7czuytw&w=1280',
    autor: 'Eiko Kadono',
    opinion: 'La obra original de la famosa adaptación de estudio ghibli y Hayao Miyazaki. "Nicky aprendiz de bruja" es una encantadora novela escrita por Eiko Kadono, cuya historia nos lleva a el mundo de Nicky, una joven bruja que, al cumplir los 13 años y como dicta la tradición de las brujas adolescentes, debe emprender una misión. Pasar un año fuera de casa para aprender a valerse por sí misma. A lo largo del viaje, acompañamos a Nicky y su gato Jiji en sus aventuras por establecerse y vivir por su cuenta en una nueva ciudad, combinando elementos de fantasía y comedia, creando una historia divertida y conmovedora. Es un libro perfecto para aquellos que disfrutan de las historias mágicas y de los personajes carismáticos.',
    categories: [categories.Fantasia, categories.Infantil],
    buy: 'https://www.amazon.com/-/es/Eiko-Kadono/dp/8417834338'
  },
  {
    id: 'Trenza-esmeralda',
    title: 'Trenza del mar esmeralda',
    autor: 'Brandon sanderson',
    opinion: '"Trenza del mar esmeralda" es la primera de las novelas secretas escritas por el autor: Brandon Sanderson, pertenecientes al universo compartido literario conocido como el cosmere, La historia se desarrolla en una isla ubicada en un vasto océano verde esmeralda, donde la protagonista, Trenza, vive una vida sencilla y tranquila limpiando ventanas y coleccionando tazas. Sin embargo, la vida de Trenza da un giro inesperado cuando se embarca en una misión aparentemente imposible, y aunque Trenza no es una heroína convencional, se embarca en esta peligrosa tarea con determinación y valentía.',
    opinionP2: ' Lo que hace que "Trenza del mar esmeralda" sea una lectura cautivadora es la habilidad de Brandon Sanderson para crear un mundo rico y detallado.Su narrativa envolvente y su estilo de escritura fluido hacen que sea fácil perderse en las páginas de este libro.Además, los personajes están bien desarrollados y resultan muy interesantes.Trenza es una protagonista carismática y realista, con la que es fácil identificarse.Pero que a medida que la historia avanza, se revelan cada vez capas más profundas de su personalidad, lo que la convierte en un personaje memorable.',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/4f/83/4f8373afefc774446be6abf3f47866cf.jpg',
    categories: [categories.AltaFantasia],
    buy: 'https://www.amazon.com/-/es/Brandon-Sanderson/dp/8418037814'
  },
  {
    id: 'bestiario-Axlin',
    title: 'El bestiario de Axlin',
    autor: 'Laura Gallego',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/af/6c/af6c9ec790cc81014f20235b0f3ae3fd.jpg',
    opinion: '"El bestiario de Axlin" es el primer libro de la saga "Guardianes de la Ciudadela" escrita por la autora española Laura Gallego García. La historia nos cuenta la vida Axlin, una joven que vive en un mundo repleto de monstruos que se dedican a cazar a la humanidad, debido a un problema que le impide correr o caminar adecuadamente, Axlin se convierte en la escriba de su aldea, proponiéndose investigar y recopilar información sobre todos los monstruos del mundo. Laura Gallego logra una vez más transportarnos a un mundo lleno de criaturas fantásticas y misterios por descubrir, siendo Axlin una protagonista valiente y determinada, a la cual su pasión por el conocimiento y la protección de su pueblo la lleva a emprender un viaje en busca de la Ciudadela, un lugar legendario donde se dice que se encuentra la clave para enfrentar a los monstruos. A lo largo de la historia, Axlin se encuentra con diversos desafíos y personajes fascinantes que enriquecen la trama. La autora logra crear un universo lleno de detalles y descripciones vívidas, lo que permite al lector sumergirse por completo en la trama.',
    categories: [categories.Ficcion],
    buy: 'https://www.amazon.com/-/es/Laura-Gallego/dp/8490439311'
  },
  {
    id: 'rosas-y-espinas',
    title: 'Una corte de rosas y espinas',
    autor: 'Sarah J. Maas',
    opinion: '"Una corte de rosas y espinas" es el primer libro de la serie "Una corte de rosas y espinas" también llamado “ACOTAR” escrita por Sarah J. Maas. La historia sigue a Feyre, una joven cazadora que vive en un mundo dividido entre humanos y fae. Un día, Feyre mata a un lobo durante una cacería, sin saber que en realidad era un fae disfrazado. Como consecuencia, es llevada al reino de Prythian, donde deberá pagar por su crimen. Sin embargo, pronto descubre que las cosas no son como parecen y se ve envuelta en una intrincada red de política, magia y romance. Sarah J. Maas crea una bella reinterpretación de la bella y la bestia en un mundo fascinante y lleno de detalles, donde los personajes están llenos de matices y complejidad. Feyre es una protagonista valiente y determinada, dispuesta a enfrentar cualquier desafío para proteger a sus seres queridos. A medida que la trama avanza, se desarrollan relaciones intensas y emocionales, y se exploran temas como el amor, la lealtad y el sacrificio.',
    img: 'data:image/jpeg;base64,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',
    categories: [categories.Fantasia, categories.Romance],
    buy: 'https://www.amazon.com/-/es/Sarah-J-Maas/dp/8408155083'
  },
  {
    id: 'nunca-noche',
    title: 'Nuncanoche',
    img: 'https://images.cdn3.buscalibre.com/fit-in/360x360/d3/6c/d36ca3acdcc5e7341f1b0cbbdae6ed27.jpg',
    autor: 'Jay Kristoff',
    opinion: '"Nuncanoche" es el primer libro de la trilogía "Crónicas de la Nuncanoche" escrita por Jay Kristoff. Esta historia nos sumerge en un mundo de fantasía oscura en donde seguimos la vida de Mia Corvere, una joven aprendiz de asesina que se embarca en la misión de unirse al credo de asesinos mas poderoso del imperio, la iglesia del bendito asesinato.',
    opinionP2: ' La narrativa de Jay Kristoff es cautivadora y llena de acción.El autor crea un mundo original y detallado, donde la magia y la intriga se entrelazan en cada página.Además, la trama está llena de giros sorprendentes y momentos emocionantes que mantienen al lector enganchado de principio a fin. "Nuncanoche" es una novela que combina elementos de fantasía oscura, aventura y acción.Donde Jay Kristoff logra equilibrar hábilmente la oscuridad y la violencia con momentos de humor y camaradería entre los personajes.Además, el libro aborda temas como el poder, la venganza y la redención, en un mundo en donde no sabes cuales son los peligrosos que acechan.',
    categories: [categories.FantasiaOscura, categories.Academia],
    buy: 'https://www.amazon.com/-/es/Jay-Kristoff/dp/8418440015'
  },
  {
    id: 'asesino-brujas',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSQv0PTdIWtlkQ2yzvhsPc2hiQCmppGeW5e8yxDhrx5KiMfPC6e',
    title: 'Asesino de brujas',
    autor: 'Shelby Mahurin',
    opinion: '"La bruja blanca" es el primer libro de la trilogía del "Asesino de brujas" escrita por Shelby Mahurin. El libro sigue la historia de Lou, una joven ladrona con habilidades mágicas, y Reid, un cazador de brujas dedicado a erradicar la magia.  Debido a circunstancias más allá de su control ambos se ven obligados a hacer algo que esta en contra de todo en lo que creen, contraer matrimonio.',
    opinionP2: 'La trama está llena de giros inesperados, intriga y tensión. La autora crea un mundo rico y detallado, donde la magia y la brujería desempeñan un papel fundamental. Los personajes están bien desarrollados y resultan muy interesantes, con sus propias motivaciones y secretos. La relación entre Lou y Reid es uno de los aspectos más destacados del libro. Su romance se desarrolla de manera gradual y creíble, con momentos de tensión y pasión. Además, la química entre los dos protagonistas es palpable y te mantendrá enganchado a lo largo de la historia.',
    categories: [categories.Fantasia, categories.Romance],
    buy: 'https://www.amazon.com/-/es/SHELBY-MAHURIN/dp/8492918799'
  },
  {
    id: 'primeras-quince-vidas',
    title: 'Las primeras quince vidas de Harry august',
    img: 'https://m.media-amazon.com/images/I/71yBTiP50JL._AC_UF1000,1000_QL80_.jpg',
    autor: 'Catherine Webb',
    opinion: '"Las primeras quince vidas de Harry August" es una novela escrita por Catherine Webb, también conocida por su seudónimo Claire North. La historia a modo de carta nos cuenta la vida de Harry August, un niño bastardo nacido de un noble inglés y su sirvienta, quien vive una vida tranquila hasta que al morir de vejez se da cuenta de una verdad que lo lleva a la locura, posee la capacidad de nacer una y otra vez en el mismo año de su primera vida, con todos los recuerdos y conocimientos de sus vidas anteriores. A lo largo de la historia, seguimos a Harry mientras explora las implicaciones de su existencia única. Con cada vida, Harry acumula sabiduría y experiencia, lo que le permite influir en los eventos históricos y participar en una sociedad secreta llamada el club cronos, una sociedad secreta compuestas por personas como él.',
    opinionP2: '"Las primeras quince vidas de Harry August" es una novela que combina elementos de ciencia ficción, fantasía y thriller. Con una trama intrigante y llena de giros sorprendentes, el libro te mantendrá enganchado desde la primera página hasta la última.',
    categories: [categories.CienciaFiccion, categories.ViajesTiempo],
    buy: 'https://www.amazon.com/-/es/Claire-North/dp/8415709978'
  },
  {
    id: 'Amanecer-rojo',
    img: 'https://m.media-amazon.com/images/I/51nd23JkBiL._SY445_SX342_.jpg',
    title: 'Amanecer rojo',
    autor: 'Pierce Brown',
    opinion: '"Amanecer rojo" es el primer libro de la saga con el mismo nombre escrita por Pierce Brown. Esta novela nos transporta a un futuro distópico en el que la sociedad está dividida en castas basadas en colores. El protagonista, Darrow, es un Rojo, la casta más baja y oprimida, quienes viven como eslavos mineros en las minas de marte, en donde creen que son los elegidos para ser la primera generación en colonizar el espacio, la vida de Darrow marcha con normalidad según los estándares escogidos para el hasta que descubre la verdad detrás del mundo en el que vive. En este mundo de intrigas políticas y batallas sangrientas, Darrow luchara por la justicia y la libertad de su pueblo.',
    categories: [categories.CienciaFiccion, categories.FantasiaEspacial],
    buy: 'https://www.amazon.com/-/es/Pierce-Brown/dp/8427208383',
    opinionP2: 'El libro está lleno de acción, con emocionantes batallas, traiciones y giros inesperados. Pierce Brown crea un universo rico y complejo, con personajes bien desarrollados y una trama que te mantendrá enganchado desde el principio hasta el final.'
  },
  {
    id: 'Hail-Mary',
    img: 'https://imagessl6.casadellibro.com/a/l/s5/16/9788418037016.webp',
    title: 'Proyecto Hail Mary',
    categories: [categories.CienciaFiccion, categories.PostApocaliptico],
    autor: 'Andy weir',
    buy: 'https://www.amazon.com/-/es/-/es/Andy-Weir/dp/8418037016',
    opinion: 'Del galardonado autor Andy Weir, "Proyecto Hail Mary" es una emocionante novela de ciencia ficción escrita del aclamado autor de "El Marciano".En esta historia, Weir nos transporta a un futuro cercano en el que la humanidad se enfrenta a una amenaza cósmica que podría llevar a la extinción de la especie.',
    opinionP2: 'El protagonista de la historia es Ryland Grace, un científico que se despierta en una nave espacial sin recordar quién es ni cómo llegó allí. Pronto descubre que su misión es salvar a la Tierra de una extraña forma de vida alienígena que está consumiendo la energía del Sol. A medida que Grace investiga y desentraña los misterios de su situación, se enfrenta a desafíos científicos y morales que pondrán a prueba su ingenio y determinación. Con un estilo narrativo cautivador y lleno de detalles científicos, Andy Weir logra sumergir al lector en un viaje fascinante a través del espacio y el tiempo.'
  },
  {
    id: 'tre-cuerpos',
    img: 'https://m.media-amazon.com/images/I/81tWAdsfqKL._SY385_.jpg',
    title: 'El problema de los 3 cuerpos',
    categories: [categories.CienciaFiccion, categories.Drama],
    buy: 'https://www.amazon.com/-/es/Liu-Cixin/dp/8466659730',
    opinion: '“El problema de los tres cuerpos” es el primer libro de la trilogía llamada “El recuerdo del pasado de la tierra” escrita por el autor chino Liu Cixin.  La historia comienza durante la Revolución Cultural china, cuando un proyecto militar secreto se encuentra con una señal extraterrestre proveniente del espacio. Muchos años después científicos de todo el mundo empiezan a quitarse la vida sin razón aparente, la única evidencia es una nota dejada por ellos “la física nunca ha existido y nunca existirá”',
    opinionP2: '“El problema de los tres cuerpos" es una novela que rebosa originalidad, su capacidad para combinar elementos científicos con una trama intrigante. explora conceptos complejos de manera accesible y cautivadora.',
    autor: 'Liu Cixin'
  }



]
