const data = [
  {
    name: "liturgia",
    description:
      "Conjunto de prácticas establecidas que regulan en cada religión el culto y las ceremonias religiosas.",
  },
  {
    name: "endémico",
    description:
      "Que afecta habitualmente a una región o país. Que se repite frecuentemente o que está muy localizado en un  lugar.",
  },
  {
    name: "exangüe",
    description: "Que ha perdido toda o parte de la sangre.",
  },
  {
    name: "procaz",
    description:
      "[persona] Que se comporta o habla de manera desvergonzada, descarada o atrevida, en especial en temas sobre  sexo. ",
  },
  {
    name: "inexpugnable",
    description: "[lugar] Que resulta imposible de conquistar.",
  },
  {
    name: "disquisición",
    description:
      "Examen o explicación minuciosa, detallada y rigurosa sobre una materia, especialmente si se aparta del tema  principal del que se está tratando.",
  },
  {
    name: "ostracismo",
    description:
      "En la Grecia antigua, destierro a que se condenaba a los ciudadanos que se consideraban sospechosos o  peligrosos para la ciudad.",
  },
  {
    name: "timorato",
    description: "[persona] Que tiene miedo ante situaciones nuevas.",
  },
  {
    name: "socavar",
    description:
      "Excavar alguna cosa por debajo, dejándola sin apoyo y expuesta a hundirse. / Debilitar la fuerza moral de una  ideología o un valor espiritual, o de la persona que la defiende o representa.",
  },
  {
    name: "trepidar",
    description:
      "Titubear o dudar [una persona] antes de tomar una decisión importante o hacer algo.",
  },
  {
    name: "prístino",
    description:
      "Se trata de un adjetivo que se refiere a lo primigenio, primitivo o arcaico. “El hombre prístino no tenía  desarrollado un lenguaje avanzado”.",
  },
  {
    name: "dimitir",
    description: "Renunciar a un cargo que se tiene.",
  },
  {
    name: "decoro",
    description:
      "Comportamiento adecuado y respetuoso correspondiente a cada categoría y situación.",
  },
  {
    name: "ensimismado",
    description:
      "Que dirige toda su atención a sus pensamientos aislándose de lo que lo rodea.",
  },
  {
    name: "esbozo",
    description: "Exposición de una idea o plan en sus líneas generales.",
  },
  {
    name: "impertérrito",
    description:
      "[persona] Que no se altera, perturba o muestra emoción alguna ante una impresión o estímulo externo que  normalmente producen turbación, desencadenan una emoción o inducen a determinada acción.",
  },
  {
    name: "oprobio",
    description: "Deshonra o vergüenza pública.",
  },
  {
    name: "cariz",
    description:
      "Aspecto que presenta una cosa o un asunto. «las negociaciones tomaron un cariz muy poco favorable»",
  },
  {
    name: "zafio",
    description: "[persona] Que es inculto y no tiene finura.",
  },
  {
    name: "grácil",
    description:
      "Que es fino o delicado y transmite una idea de ligereza y armonía.",
  },
  {
    name: "vicisitud",
    description: "Alternativa de sucesos prósperos y adversos. (Cambios).",
  },
  {
    name: "pernicioso",
    description: "Que causa mucho daño o es muy perjudicial.",
  },
  {
    name: "pérfido",
    description: "Que es desleal a alguien que confía en él y muy malo.",
  },
  {
    name: "locuaz",
    description:
      "Que habla mucho, en especial cuando lo hace con soltura o facilidad.",
  },
  {
    name: "circunspección",
    description:
      "Seriedad y reserva de una persona al hablar o actuar, para comportarse comedidamente.",
  },
  {
    name: "pueril",
    description:
      "Que es propio de los niños pequeños o tiene alguna característica propia de ellos.",
  },
  {
    name: "acometer",
    description:
      "1) Atacar con ímpetu y fuerza contra algo o contra alguien. 2) Empezar a hacer una cosa, en especial cuando  exige esfuerzo o trabajo o cuando se trata de algo de cierta importancia o envergadura.",
  },
  {
    name: "argüir",
    description:
      "1) Sacar una conclusión por medio de un razonamiento a partir de un supuesto anterior o de un principio general.  2)  Argumentar en favor o en contra de algo.",
  },
  {
    name: "aducir",
    description:
      "Exponer pruebas, razones y argumentos para demostrar o justificar algo.",
  },
  {
    name: "subterfugio",
    description:
      "Escapatoria o medio engañoso y hábil para solucionar una situación difícil, escapar de un problema o peligro o  eludir algo.",
  },
  {
    name: "reticencia",
    description:
      "1) Hecho de insinuar o no decir directamente algo, generalmente con intención maliciosa. 2) Desconfianza o  cautela que inspiran ciertas personas, actos o dichos.",
  },
  {
    name: "conflagración",
    description:
      "Hecho de estallar un conflicto, en especial una guerra, entre dos o más naciones o estados.",
  },
  {
    name: "desapacible",
    description:
      "Que carece de suavidad y resulta desagradable para los sentidos.",
  },
  {
    name: "reminiscencia",
    description:
      "Recuerdo impreciso de un hecho o una imagen del pasado que viene a la memoria.",
  },
  {
    name: "kitsch",
    description: "el estilo Kitsch sería lo opuesto al minimalista.",
  },
  {
    name: "ataraxia",
    description:
      "se usa en la filosofía para referirse al ánimo sereno y calmo. Diversas corrientes filosóficas defienden la ataraxia  como la disposición anímica que lleva a la persona a  alejarse de las perturbaciones para alcanzar la felicidad.",
  },
  {
    name: "conferir",
    description:
      "Conceder [una autoridad] dignidad, atribuciones, derechos, etc., a una persona.",
  },
  {
    name: "redimir",
    description:
      "Librar a una persona de una obligación, de un dolor o de una situación penosa.",
  },
  {
    name: "desvaído",
    description: "Que ha perdido intensidad o es apagado o pálido.",
  },
  {
    name: "funesto",
    description: "Que es muy triste o desgraciado.",
  },
  {
    name: "sosiego",
    description: "Estado de tranquilidad o calma en algo o alguien.",
  },
  {
    name: "dubitativo, va",
    description: "Que implica o manifiesta duda.",
  },
  {
    name: "rezago",
    description: "Atraso o residuo que queda de algo.",
  },
  {
    name: "ávido",
    description:
      "Que siente un deseo fuerte e intenso de tener, hacer o conseguir algo.",
  },
  {
    name: "ignominia",
    description:
      "Ofensa grave que sufre el honor o la dignidad de una persona.",
  },
  {
    name: "prodigar",
    description:
      "Despilfarrar o gastar sin cuidado los bienes. Dar con generosidad una cosa que se tiene o ponerla al servicio de  los  demás.",
  },
  {
    name: "mitigar",
    description:
      "Atenuar o suavizar una cosa negativa, especialmente una enfermedad.",
  },
  {
    name: "nimiedad",
    description: "Cosa inmaterial que tiene poca o ninguna importancia.",
  },
  {
    name: "idiosincrasia",
    description:
      "Modo de ser que es característico de una persona o cosa y la distingue de las demás.",
  },
  {
    name: "suscitar",
    description: "Causar, promover o provocar: su actuación suscita sospechas.",
  },
  {
    name: "ascetismo",
    description:
      "El ascetismo es la doctrina filosófica o religiosa que busca, por lo general, purificar el espíritu por medio de la  negación de los placeres materiales o abstinencia.",
  },
  {
    name: "lasitud",
    description: "Estado de desfallecimiento o falta de fuerzas.",
  },
  {
    name: "quid",
    description:
      "Aspecto en que reside la importancia de algo o en que consiste su dificultad.",
  },
  {
    name: "paroxismo",
    description:
      "Grado de mayor exaltación de un sentimiento, un estado de ánimo o una sensación. Acceso violento de una  enfermedad.",
  },
  {
    name: "quimérico",
    description: "Que es irreal y solamente existe en la imaginación.",
  },
  {
    name: "inescrutable",
    description: "Que no puede ser averiguado o comprendido.",
  },
  {
    name: "amalgama",
    description:
      "Una combinación o una unión de elementos que tienen características o esencias diferentes. ",
  },
  {
    name: "sincrético",
    description:
      "Tendencia a conjuntar y armonizar corrientes de pensamiento o ideas opuestas.",
  },
  {
    name: "ecléctico, ecléctica",
    description:
      "Que trata de reunir, procurando conciliarlos, valores, ideas, tendencias, etc., de sistemas diversos.",
  },
  {
    name: "proclive",
    description: "Que tiene inclinación o disposición natural hacia una cosa.",
  },
  {
    name: "vilipendiar",
    description:
      "Mostrar desprecio por una persona o cosa mediante la palabra o los actos.",
  },
  {
    name: "crematístico",
    description: "Del dinero o relacionado con el dinero.",
  },
  {
    name: "circunscribir",
    description: "Reducir una cosa a ciertos límites o términos.",
  },
  {
    name: "flagrante",
    description: "Que es muy claro y evidente.",
  },
  {
    name: "proferir",
    description:
      "Pronunciar o decir [una persona] palabras o sonidos, en especial cuando son violentos, como los gritos o las  quejas.",
  },
  {
    name: "imprecar",
    description:
      "Expresar vivamente el deseo de que alguien sufra un daño o un mal.",
  },
  {
    name: "petulante",
    description:
      "Que se muestra convencido de sus buenas cualidades y desprecia la opinión de otras personas.",
  },
  {
    name: "lívido, lívida",
    description:
      "Que está muy pálido o es muy pálido. Que tiene un tono morado, en especial una parte del cuerpo por efecto  del frío o de un golpe.",
  },
  {
    name: "urdir",
    description:
      "Pensar y preparar con cautela algo, generalmente un plan o intriga.",
  },
  {
    name: "estridente",
    description:
      "[sonido] Que es agudo, desapacible y chirriante. Que es llamativo, presenta un contraste violento o produce  una impresión fuerte.",
  },
  {
    name: "módico",
    description: "Que es moderado y accesible.",
  },
  {
    name: "gregario",
    description:
      "Que vive en comunidad. Que forma parte de un grupo sin distinguirse de los demás, especialmente si carece de  ideas e iniciativas propias y sigue siempre las de los   demás.",
  },
  {
    name: "peripecia",
    description:
      "Suceso que afecta a una persona y que altera o rompe el transcurso o la continuidad de una acción.",
  },
  {
    name: "astenia",
    description:
      "Debilidad o fatiga general que dificulta o impide a una persona realizar tareas que en condiciones normales hace  fácilmente.",
  },
  {
    name: "contrariado",
    description:
      "Que está disgustado o malhumorado por advertir algo contrario a sus intereses o ideas.",
  },
  {
    name: "concomitante",
    description: "Que acompaña a una cosa o actúa junto a ella.",
  },
  {
    name: "adocenado",
    description: "Vulgar, mediocre, que no destaca o tiene escaso mérito.",
  },
  {
    name: "vertiginoso",
    description: "Que causa vértigo o lo produce. Que se mueve muy rápido.",
  },
  {
    name: "ambages",
    description:
      "Rodeos de palabras o circunloquios para no expresar con claridad lo que se quiere decir.",
  },
  {
    name: "perífrasis",
    description:
      "Expresión de más de una palabra que a menudo puede ser expresada con una sola. Figura expresiva del  lenguaje que consiste en utilizar una construcción de varias  palabras para evitar una palabra simple.",
  },
  {
    name: "adminículo",
    description: "Cosa pequeña y simple que se emplea como ayuda para algo.",
  },
  {
    name: "inmiscuir",
    description:
      "Entremeterse , tomar parte en un asunto o negocio , especialmente cuando no hay razón o autoridad para ello.",
  },
  {
    name: "sbornia",
    description:
      "Síntomas desagradables que se producen después de una ingesta excesiva de alcohol.",
  },
  {
    name: "nefario, nefaria",
    description: "Que implica o denota maldad.",
  },
  {
    name: "céfiro",
    description: "Viento suave y agradable de primavera.",
  },
  {
    name: "ubicuidad",
    description: "Capacidad de estar presente en todas partes al mismo tiempo.",
  },
  {
    name: "vicario, vicaria",
    description: "[persona] Que ayuda o sustituye a alguien en sus funciones.",
  },
  {
    name: "lacerar",
    description:
      "Desgarrar la carne de una persona o un animal. Perjudicar moralmente a alguien.",
  },
  {
    name: "insularidad",
    description: "Cualidad de insular. 2. f. aislamiento.",
  },
  {
    name: "rumiar",
    description: "Masticar (reflexionar).",
  },
  {
    name: "esotérico",
    description:
      "Que está oculto a los sentidos y a la ciencia y solamente es perceptible o asequible por las personas  iniciadas. Que es incomprensible o difícil de entender.",
  },
  {
    name: "atisbar",
    description: "Observar algo con atención pero con disimulo.",
  },
  {
    name: "subrepticio",
    description:
      "es lo que se insinúa por debajo, a escondidas, lo que se hace o se dice en forma oculta o de modo solapado.",
  },
  {
    name: "discurrir",
    description: "Extenderse [algo] a lo largo de un espacio.",
  },
  {
    name: "ralea",
    description: "Especie, clase o condición de una persona o una cosa.",
  },
  {
    name: "inefable",
    description:
      "Que no puede ser dicho, explicado o descrito con palabras, generalmente por tener cualidades excelsas o por ser  muy sutil o difuso.",
  },
  {
    name: "contemporizar",
    description:
      "Acomodarse al gusto o la voluntad de otra persona con algún fin, generalmente para evitar un enfrentamiento.",
  },
  {
    name: "inconmensurable",
    description: "Que es muy difícil o imposible de medir o valorar.",
  },
  {
    name: "segregar",
    description:
      "Separar una cosa de otra de la que forma parte para que siga existiendo con independencia.",
  },
  {
    name: "ineluctable",
    description: "Ineludible.",
  },
  {
    name: "hosco, hosca",
    description:
      "Que tiene un carácter cerrado, desagradable y que no gusta de relacionarse con los demás.",
  },
  {
    name: "sibilino, sibilina",
    description:
      "Que es misterioso porque parece que encierra un secreto importante o que puede tener varios significados ocultos.",
  },
  {
    name: "escudriñar",
    description:
      "Examinar algo con mucha atención, tratando de averiguar las interioridades o los detalles menos manifiestos",
  },
  {
    name: "rutilar",
    description: "Brillar como oro o resplandecer despidiendo rayos de luz.",
  },
  {
    name: "nefelibatas",
    description:
      "Se dice de la persona soñadora, de quien parece estar en las nubes, en la inopia, fuera de la realidad.",
  },
  {
    name: "inopia",
    description:
      "Pobreza o indigencia. Estar distraído o no enterarse de lo que sucede alrededor.",
  },
  {
    name: "ecuánime",
    description:
      "Que obra con rectitud, justicia e imparcialidad o está dotado de ellas.  Que no suele dejarse llevar por la pasión.",
  },
  {
    name: "epítome",
    description:
      "Resumen de una obra extensa en el que se exponen las ideas o las nociones fundamentales del tema que trata esta.",
  },
  {
    name: "parafernalia",
    description:
      "Conjunto de instrumentos o aparatos que se necesitan para un fin determinado. Exhibición gratuita o alarde  de medios que denotan riqueza o importancia.",
  },
  {
    name: "taciturno, taciturna",
    description: "[persona] Que es habitualmente callado o silencioso.",
  },
  {
    name: "desventura",
    description:
      "Situación o suceso que produce gran dolor y sufrimiento. Suerte adversa y aciaga.",
  },
  {
    name: "aciago, aciaga",
    description:
      "Que conlleva desgracia y causa tristeza o sufrimiento. Que presagia desgracias y mala suerte.",
  },
  {
    name: "perspicuo",
    description:
      "Que es claro o transparente. Que puede ser comprendido o entendido.",
  },
  {
    name: "mentado, mentada",
    description: "[persona] Que es nombrado por su fama o notoriedad.",
  },
  {
    name: "propalar",
    description:
      "Divulgar una cosa oculta, especialmente si se hace con malas intenciones.",
  },
  {
    name: "preconizar",
    description:
      "Defender o apoyar desde el primer momento una cosa que se considera buena o recomendable.",
  },
  {
    name: "perentorio, perentoria",
    description:
      "Que es determinante, decisivo o definitivo, y no se puede modificar.",
  },
  {
    name: "estoicismo",
    description:
      "El estoicismo es una escuela filosófica fundada por Zenón de Citio en el 301 a. C. Su doctrina filosófica estaba  basada en el dominio y control de los hechos, cosas y pasiones que perturban la vida, valiéndose de la valentía y la razón del carácter personal.",
  },
  {
    name: "pretérito, pretérita",
    description: "Que ha existido o sucedido en el pasado.",
  },
  {
    name: "refractario, refractaria",
    description: "Que se opone a aceptar una idea, opinión o costumbre.",
  },
  {
    name: "laudatorio, laudatoria",
    description: "Que alaba o contiene alabanza.",
  },
  {
    name: "irremisible",
    description: "Que no puede o no debe ser remitido o perdonado.",
  },
  {
    name: "intempestivo, intempestiva",
    description:
      "Que se hace u ocurre fuera del tiempo adecuado o conveniente.",
  },
  {
    name: "guarecer",
    description:
      "Ponerse [una persona o un animal] a salvo de un peligro o penalidad en un lugar.",
  },
  {
    name: "conmiseración",
    description:
      "Sentimiento de pena y dolor por la desgracia o sufrimiento de alguien.",
  },
  {
    name: "escarnio",
    description:
      "Burla cruel cuya finalidad es humillar o despreciar a alguien.",
  },
  {
    name: "copioso, copiosa",
    description: "Que es muy abundante.",
  },
  {
    name: "indómito, indómita",
    description:
      "Que es difícil de someter, guiar o controlar. Que no puede ser domado o es muy difícil de domar.",
  },
  {
    name: "soteriología",
    description:
      "La soteriología es la rama de la teología que estudia la salvación.",
  },
  {
    name: "estentóreo",
    description: "[voz, grito] Que es muy fuerte y ruidoso o que retumba.",
  },
  {
    name: "rémora",
    description:
      "Obstáculo físico o inmaterial que impide o dificulta un proceso, un proyecto o una acción.",
  },
  {
    name: "histriónico, histriónica",
    description:
      "Que se comporta o actúa como un histrión. Es teatral o exagerado.",
  },
  {
    name: "alharaca",
    description:
      "Demostración exagerada de un sentimiento hacia alguien, generalmente acompañada de voces y gestos.",
  },
  {
    name: "rezagar",
    description:
      "Dejar atrás algo. Atrasar, suspender por algún tiempo la ejecución de algo.",
  },
  {
    name: "exógeno, exógena",
    description: "Que se debe a causas externas.",
  },
  {
    name: "pleonasmo",
    description:
      "Figura retórica de construcción que consiste en añadir enfáticamente a una frase más palabras de la necesarias  para su comprensión con el fin de embellecer o añadir expresividad a lo que se dice.",
  },
  {
    name: "prosélito",
    description:
      "Persona que se ha adherido recientemente a una causa, una ideología, una colectividad, un partido político, etc.",
  },
  {
    name: "morigerar",
    description:
      "Moderar o contener las costumbres, las pasiones o el modo de vida.",
  },
  {
    name: "inextricable",
    description:
      "[problema, duda] Que es muy intrincado y confuso y, por ello, difícil de resolver.",
  },
  {
    name: "vituperar",
    description:
      "Censurar o desaprobar con mucha dureza una cosa o a una persona.",
  },
  {
    name: "rubricar",
    description:
      "Poner la rúbrica o la firma en un escrito o en un documento para darle validez y hacerlo efectivo.",
  },
  {
    name: "deliquio",
    description: "Pérdida o decaimiento del ánimo, el valor o las fuerzas.",
  },
  {
    name: "plétora",
    description: "Abundancia excesiva de una cosa.",
  },
  {
    name: "prurito",
    description:
      "El prurito es un hormigueo peculiar o irritación incómoda de la piel que conlleva un deseo de rascar la parte en cuestión.",
  },
  {
    name: "laconismo",
    description:
      "es la forma de expresarse breve y concisamente, con las palabras justas y, a la vez, ingeniosamente. Esta  palabra hace referencia a la forma de hablar y pensar de   los habitantes de la región de Laconia, en la Antigua Grecia, donde estaba situada Esparta.",
  },
  {
    name: "trémulo",
    description: "tembloroso.",
  },
  {
    name: "azorado",
    description:
      "inquieto, preocupado, alarmado, travieso, intranquilo, desasosegado y turbado.",
  },
  {
    name: "demudar",
    description:
      "Alterar repentinamente una cosa, especialmente el color o la expresión de la cara de una persona.",
  },
  {
    name: "apodíctico, apodíctica",
    description:
      "En lógica, que expresa o encierra una verdad concluyente o que no deja lugar a duda o discusión.",
  },
  {
    name: "subyugar",
    description:
      "Dominar [una pasión o un sentimiento, normalmente positivos] a alguien.",
  },
  {
    name: "preterir",
    description: "Hacer caso omiso de una persona o una cosa.",
  },
  {
    name: "fulgor",
    description: "Resplandor (luz o brillo).",
  },
  {
    name: "miscelánea",
    description:
      "Mezcla de cosas diversas. Obra o escrito en que se tratan materias inconexas y mezcladas.",
  },
  {
    name: "digresión",
    description:
      "Hecho de apartarse en un relato, discurso o exposición del asunto principal para tratar de algo que surge  relacionado con él.",
  },
  {
    name: "premura",
    description: "Prisa o urgencia con que se hace algo.",
  },
  {
    name: "erigir",
    description:
      "Construir o levantar una edificación importante o un monumento. Hacer que una persona, una institución u otra  cosa  pase a tener una función o una categoría de especial  importancia.",
  },
  {
    name: "pergeñar",
    description:
      "Hacer el esbozo o idea previa de un trabajo o una acción, generalmente de manera rápida y con mayor o menor  habilidad, o sin concederle mucha importancia. Disponer o ejecutar una cosa con mayor o menor habilidad.",
  },
  {
    name: "sórdido",
    description: "Que es miserable o sucio.",
  },
  {
    name: "retahíla",
    description:
      "Serie larga de sucesos o cosas no materiales, iguales o análogas, que están, suceden o se mencionan una tras otra.",
  },
  {
    name: "apócrifo",
    description:
      "Que no es auténtico o no es obra de la persona a la que se atribuye. (Fingido, falso).",
  },
  {
    name: "estrategema",
    description:
      "Acción hábil y engañosa para conseguir algo; especialmente la operación o maniobra militar de guerra que se  realiza para atacar por sorpresa al enemigo, desarmarlo, etc.",
  },
  {
    name: "conminar",
    description:
      "Amenazar a una persona con una pena o castigo si no obedece una orden o mandato.",
  },
  {
    name: "prosélito",
    description:
      "Persona que se ha adherido recientemente a una causa, una ideología, una colectividad, un partido político, etc.",
  },
  {
    name: "conventículo",
    description: "Junta ilícita y clandestina de algunas personas.",
  },
  {
    name: "desgarbado",
    description:
      "Que no tiene garbo, gracia o elegancia, especialmente en la manera de obrar o de moverse.",
  },
  {
    name: "inerme",
    description: "Que está desprovisto de armas para defenderse.",
  },
  {
    name: "sucedáneo",
    description: "Que es imitación de peor calidad que el original.",
  },
  {
    name: "remanente",
    description: "[parte de una cosa] Que queda o se reserva para algo.",
  },
  {
    name: "decurso",
    description: "Transcurso del tiempo.",
  },
  {
    name: "ecléctico",
    description:
      "Que trata de reunir, procurando conciliarlos, valores, ideas, tendencias, etc., de sistemas diversos.",
  },
  {
    name: "conciliábulo",
    description:
      "Reunión de personas para tratar algo que se quiere mantener oculto.",
  },
  {
    name: "felonía",
    description: "Traición o acto desleal contra alguien.",
  },
  {
    name: "exordio",
    description:
      "Introducción o explicación con que se introduce un discurso hablado o escrito para llamar la atención o preparar el  ánimo del oyente o lector. Principio u origen de algo.",
  },
  {
    name: "inusitado",
    description: "Que es inusual o raro y por ello resulta sorprendente.",
  },
  {
    name: "mamotreto",
    description:
      "Libro muy voluminoso. Objeto, en especial una máquina o un mueble, grande, pesado, tosco y poco útil, o demasiado grande o pesado para la utilidad que presta.",
  },
  {
    name: "peripecia",
    description:
      "Suceso que afecta a una persona y que altera o rompe el transcurso o la continuidad de una acción.",
  },
  {
    name: "incólume",
    description: "Que no ha sufrido daños.",
  },
  {
    name: "itávico, atávica",
    description: "Que es arcaico o característico del pasado.",
  },
  {
    name: "impávido",
    description:
      "Que hace frente a una situación de peligro o riesgo sin dejarse dominar por el miedo o la angustia. Que no se altera, perturba o muestra emoción alguna ante una impresión o estímulo externo que normalmente producen turbación, desencadenan una emoción o inducen a determinada acción.",
  },
  {
    name: "paramnesia",
    description:
      "Perturbación de la memoria, especialmente la que hace que uno no pueda recordar el sentido de las palabras.",
  },
  {
    name: "exégesis",
    description:
      "Explicación o interpretación de algo, generalmente de la obra de un autor o de un texto concreto, especialmente bíblico.",
  },
  {
    name: "eximio",
    description: "[persona] Que es ilustre o excelente.",
  },
  {
    name: "transustanciar",
    description:
      "Convertir una sustancia en otra, especialmente el cuerpo y sangre de Cristo en la eucaristía.",
  },
  {
    name: "endógeno",
    description:
      "Que se forma o engendra en el interior de algo, como la célula que se forma en el interior de otra.",
  },
  {
    name: "famélico",
    description:
      "[persona, animal] Que tiene o pasa mucha hambre. Que está excesivamente delgado a causa del hambre.",
  },
  {
    name: "incorpóreo",
    description:
      "Que carece de cuerpo, volumen o consistencia. Que pertenece al espíritu o que no se puede percibir por los sentidos.",
  },
  {
    name: "prevaricar",
    description:
      "Faltar conscientemente [un funcionario] a los deberes de su cargo al tomar una decisión o dictar una resolución injusta, con plena conciencia de su injusticia.",
  },
  {
    name: "lítost",
    description:
      "La lítost es un estado de padecimiento producido por la visión de la propia miseria puesta repentinamente en evidencia.",
  },
  {
    name: "dormitar",
    description:
      "Estar medio dormido o dormir con un sueño poco profundo que se interrumpe y se reanuda con facilidad.",
  },
  {
    name: "beatífico",
    description: "Que tiene o produce serenidad y placidez.",
  },
  {
    name: "sortilegio",
    description:
      "Acción de someter la voluntad de alguien o de modificar el destino mediante el uso de brebajes, remedios mágicos, fórmulas y acciones de hechicería, etc.",
  },
  {
    name: "macilento, macilenta",
    description:
      "[persona] Que está flaco y demacrado o tiene la cara flaca y pálida.",
  },
  {
    name: "hierático, hierática",
    description:
      "Que es solemne e inexpresivo, se mueve poco y no exterioriza sentimientos.",
  },
  {
    name: "raído, raída",
    description:
      "[tela, vestido] Que está muy gastado o estropeado por el uso, aunque sin llegar a romperse.",
  },
  {
    name: "intersticio",
    description:
      "Espacio pequeño entre dos cuerpos o entre dos partes de un mismo cuerpo.",
  },
  {
    name: "abulia",
    description:
      "Falta de voluntad o de energía para hacer algo o para moverse.",
  },
  {
    name: "exégeta",
    description:
      "Persona que expone o interpreta un texto, especialmente la Biblia.",
  },
  {
    name: "candor",
    description: "Ingenuidad, falta total de malicia y de hipocresía.",
  },
  {
    name: "diégesis",
    description:
      "El mundo (ficticio) en el que ocurren las situaciones y acontecimientos narrados.",
  },
  {
    name: "voluble",
    description: "Que cambia fácil o frecuentemente de manera de ser.",
  },
  {
    name: "impeler",
    description:
      "Impulsar o hacer que una cosa o persona adquiera un movimiento rápido al aplicarle una fuerza.",
  },
  {
    name: "anatema",
    description:
      "Condena moral, prohibición o persecución que se hace de una persona o de una cosa (actitud, ideología, etc.) que se considera perjudicial.",
  },
  {
    name: "adalid",
    description:
      "Defensor destacado de un movimiento social o cultural, un partido político, una escuela, etc.",
  },
  {
    name: "extralimitar",
    description: "Excederse en el uso de facultades o atribuciones.",
  },
  {
    name: "conmiseración",
    description:
      "Sentimiento de pena y dolor por la desgracia o sufrimiento de alguien.",
  },
  {
    name: "admonición",
    description:
      "Discurso con que se hace ver un mal y se invita a corregirse.",
  },
  {
    name: "secularización",
    description:
      "Desaparición de los signos, valores o comportamientos que se consideran propios o identificativos de una confesión religiosa.",
  },
  {
    name: "secular",
    description: "Que dura un siglo o que dura desde hace siglos.",
  },
  {
    name: "procesión",
    description:
      "Marcha de personas que caminan ordenadamente y de forma solemne por la calle con un motivo ceremonioso, especialmente de la religión católica.",
  },
  {
    name: "comedimiento",
    description:
      "Contención y moderación en la forma de hablar o de comportarse.",
  },
  {
    name: "circunloquio",
    description:
      "Figura retórica que consiste en expresar mediante un rodeo lo que puede decirse de forma más breve.",
  },
  {
    name: "sopesar",
    description:
      "Levantar una cosa para calcular aproximadamente el peso que tiene. Examinar con atención o considerar con prudencia las ventajas y los inconvenientes de algo, o su importancia y trascendencia.",
  },
];

export default data;
