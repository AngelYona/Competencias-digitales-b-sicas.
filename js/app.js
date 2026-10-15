const topics = [
  {id:1, icon:"⌕", title:"Búsqueda y gestión de información", short:"Buscar, evaluar y organizar información digital.", intro:"Aprende a encontrar información útil, comprobar si es fiable y mantener tus archivos organizados.", blocks:[
    {id:"1.1",title:"Navegar, buscar y filtrar información",desc:"Aprende a buscar información y a utilizar filtros para encontrar resultados más útiles.",concept:"Buscar bien no consiste en abrir el primer resultado, sino en definir qué necesitas y comparar opciones.",example:"Quieres comparar tarifas de móvil para tu familia. Busca la cobertura en tu zona, el precio final y las condiciones antes de elegir.",steps:["Define qué pregunta quieres resolver.","Utiliza palabras clave concretas.","Compara varios resultados y revisa la fuente."],quiz:{question:"Quieres encontrar información fiable sobre una ayuda pública. ¿Qué deberías hacer primero?",options:["Abrir el primer resultado sin revisarlo.", "Usar palabras clave concretas y comparar fuentes.", "Elegir la página con el título más llamativo."],correct:1,explanation:"Las palabras clave y la comparación de fuentes ayudan a encontrar información relevante."}},
    {id:"1.2",title:"Evaluar información y contenidos",desc:"Aprende a valorar la fiabilidad de páginas, imágenes, vídeos y publicaciones.",concept:"Que una información se comparta mucho no significa que sea cierta.",example:"Te llega por WhatsApp un aviso de que mañana no habrá agua en tu barrio. Antes de reenviarlo, comprueba los canales oficiales de la compañía o del ayuntamiento.",steps:["Localiza la fuente original.","Comprueba autoría, fecha y evidencias.","Contrasta con otras fuentes fiables."],quiz:{question:"Te llega una noticia sorprendente por mensajería. ¿Qué es lo más recomendable?",options:["Compartirla rápidamente para avisar a todos.", "Creerla si muchas personas la han reenviado.", "Buscar la fuente original y contrastarla."],correct:2,explanation:"Contrastar la fuente, la fecha y otras evidencias ayuda a valorar si la información es fiable."}},
    {id:"1.3",title:"Gestionar datos e información",desc:"Organiza archivos, carpetas y contenidos para encontrarlos cuando los necesites.",concept:"Una buena organización permite recuperar la información sin tener que empezar de cero.",example:"Guardas facturas, billetes de tren y garantías de compras. Crea carpetas claras por año o tipo de documento y conserva una copia de los justificantes importantes.",steps:["Crea una estructura de carpetas sencilla.","Utiliza nombres descriptivos y fechas cuando ayuden.","Guarda copias de seguridad de lo importante."],quiz:{question:"¿Qué organización facilita encontrar después un documento del curso?",options:["Guardarlo en una carpeta con un nombre claro.", "Dejarlo en la carpeta de descargas sin cambiar el nombre.", "Guardar todos los archivos juntos con nombres parecidos."],correct:0,explanation:"Las carpetas y los nombres descriptivos permiten recuperar los archivos con más facilidad."}}
  ]},
  {id:2,icon:"↔",title:"Comunicación y colaboración",short:"Comunicarte, compartir y colaborar con otras personas.",intro:"Descubre cómo comunicarte en línea, compartir archivos y cuidar tu identidad y comportamiento digital.",blocks:[
    {id:"2.1",title:"Interactuar a través de tecnologías digitales",desc:"Elige herramientas de comunicación según lo que necesites hacer.",concept:"No todas las herramientas sirven para lo mismo: un mensaje rápido no sustituye siempre a una reunión o a un correo formal.",example:"Necesitas cambiar una cita médica. Usa el canal oficial del centro para comunicar el cambio y evita publicar datos de salud en redes sociales.",steps:["Piensa qué necesitas comunicar.","Valora la urgencia y el tipo de información.","Elige una herramienta adecuada y segura."],quiz:{question:"Necesitas enviar una solicitud formal a una organización. ¿Qué opción suele ser más adecuada?",options:["Publicar tus datos en una red social.", "Enviar un correo formal por un canal oficial.", "Escribir en cualquier chat público."],correct:1,explanation:"El correo formal suele ser adecuado para solicitudes que requieren un mensaje claro y registro de la comunicación."}},
    {id:"2.2",title:"Compartir a través de tecnologías digitales",desc:"Comparte enlaces y archivos teniendo en cuenta quién puede acceder a ellos.",concept:"Compartir un enlace no siempre significa que solo lo verá la persona destinataria.",example:"Compartes con tu familia las fotos de un viaje. Revisa que el álbum solo sea accesible para las personas a las que quieres mostrarlo.",steps:["Comprueba el contenido que vas a compartir.","Revisa los permisos del enlace.","Envía el enlace por un canal apropiado."],quiz:{question:"Vas a compartir un documento en la nube. ¿Qué debes revisar?",options:["Que el enlace permita el acceso a cualquier persona siempre.", "Que el documento no tenga título.", "Que los permisos permitan acceder solo a quienes corresponda."],correct:2,explanation:"Los permisos de acceso deben ajustarse a las personas que necesitan el documento."}},
    {id:"2.3",title:"Participación ciudadana digital",desc:"Utiliza servicios digitales para informarte y realizar gestiones ciudadanas.",concept:"Los trámites digitales deben realizarse desde páginas oficiales y protegiendo tus datos.",example:"Quieres pedir una cita para renovar un documento. Entra en la web oficial del organismo y comprueba los requisitos antes de introducir tus datos.",steps:["Busca el organismo competente.","Verifica que estás en el sitio oficial.","Lee los requisitos antes de enviar información."],quiz:{question:"Necesitas realizar un trámite con una administración pública. ¿Qué paso es más seguro?",options:["Localizar y comprobar la web oficial del organismo.", "Introducir tus datos en el primer anuncio que aparezca.", "Enviar tus documentos a una cuenta desconocida."],correct:0,explanation:"Comprueba que estás en el sitio oficial antes de introducir información personal."}},
    {id:"2.4",title:"Colaborar mediante tecnologías digitales",desc:"Trabaja con otras personas usando documentos compartidos y herramientas colaborativas.",concept:"La colaboración digital funciona mejor cuando se acuerdan permisos, tareas y versiones.",example:"Organizas con otras personas una comida familiar. Compartís una lista de tareas y acordáis quién compra cada cosa para no duplicar compras.",steps:["Define el objetivo y las tareas.","Comparte el archivo con los permisos necesarios.","Revisa los cambios y acuerda la versión final."],quiz:{question:"Un grupo debe editar un mismo documento. ¿Qué ayuda a colaborar mejor?",options:["Enviar copias distintas sin indicar cuál es la última.", "Acordar tareas y compartir un archivo con permisos adecuados.", "Permitir que cualquiera cambie los permisos sin avisar."],correct:1,explanation:"Acordar tareas, permisos y versión de trabajo reduce confusiones."}},
    {id:"2.5",title:"Comportamiento en la red",desc:"Comunícate con respeto y ten en cuenta que tus mensajes pueden dejar huella.",concept:"Detrás de cada perfil hay una persona; el tono y el contexto importan también en Internet.",example:"Una persona deja una reseña negativa sobre un servicio que has ofrecido. Responde con educación, explica los hechos y no publiques sus datos personales.",steps:["Lee el mensaje antes de enviarlo.","Respeta las diferencias y la privacidad.","No difundas contenido humillante o no verificado."],quiz:{question:"Antes de publicar una crítica en Internet, ¿qué conviene hacer?",options:["Añadir datos personales de la otra persona.", "Escribir insultos para que se entienda la queja.", "Explicar el problema con respeto y sin exponer datos privados."],correct:2,explanation:"Se puede expresar desacuerdo sin insultar ni revelar datos personales."}},
    {id:"2.6",title:"Gestionar la identidad digital",desc:"Comprende qué información sobre ti puede quedar visible en Internet.",concept:"Tu identidad digital se construye con la información que publicas y con la que otras personas publican sobre ti.",example:"Buscas tu nombre en un buscador y encuentras una foto antigua publicada públicamente. Revisa si puedes pedir que la retiren y ajusta la privacidad de tus perfiles.",steps:["Revisa perfiles y publicaciones públicas.","Configura la privacidad de tus cuentas.","Piensa antes de publicar información personal."],quiz:{question:"Quieres cuidar tu identidad digital. ¿Qué acción es útil?",options:["Revisar qué información y publicaciones tuyas son públicas.", "Publicar siempre todos tus datos de contacto.", "Usar la misma contraseña en todas tus cuentas."],correct:0,explanation:"Revisar publicaciones y ajustes de privacidad ayuda a controlar la información visible sobre ti."}}
  ]},
  {id:3,icon:"✎",title:"Creación de contenidos digitales",short:"Crear, editar y combinar documentos y contenidos.",intro:"Aprende a elegir formatos, mejorar textos, editar imágenes, reutilizar materiales con permiso y dar tus primeros pasos en programación.",blocks:[
    {id:"3.1",title:"Desarrollo de contenidos",desc:"Crea y modifica documentos, imágenes, audio y vídeo según la finalidad.",concept:"El formato adecuado depende del uso, la calidad que necesitas, la compatibilidad y el tamaño del archivo.",example:"Vas a enviar por mensajería una foto de un recibo y un audio explicando una incidencia. Elige un formato adecuado para cada tipo de archivo y comprueba que se abre.",steps:["Decide para qué utilizarás el archivo.","Valora calidad, tamaño y compatibilidad.","Comprueba que la persona destinataria podrá abrirlo."],quiz:{question:"Quieres enviar una fotografía corriente por mensajería. ¿Qué formato suele ser adecuado?",options:["MP3.", "JPG.", "WAV."],correct:1,explanation:"JPG es un formato habitual para fotografías; MP3 y WAV se utilizan para audio."}},
    {id:"3.2",title:"Integración y reelaboración de contenido",desc:"Combina materiales y transforma contenidos para crear un resultado nuevo.",concept:"Integrar contenidos significa combinar recursos; hacerlo responsablemente exige revisar su procedencia y las condiciones de uso.",example:"Preparas una invitación para una celebración con una foto propia y un mapa. Comprueba que puedes usar todos los materiales y organiza la información para que se entienda.",steps:["Define el objetivo del nuevo contenido.","Selecciona materiales pertinentes y autorizados.","Organiza, adapta y revisa el resultado."],quiz:{question:"Vas a crear una presentación con texto e imágenes de otras fuentes. ¿Qué deberías hacer?",options:["Copiar cualquier material porque está en Internet.", "No revisar de dónde proceden las imágenes.", "Seleccionar materiales pertinentes y comprobar sus condiciones de uso."],correct:2,explanation:"Hay que revisar la procedencia y las condiciones de uso antes de reutilizar materiales."}},
    {id:"3.3",title:"Derechos de autor y licencias",desc:"Aprende a reconocer cuándo puedes reutilizar textos, imágenes, música y otros recursos.",concept:"Que un contenido esté disponible en Internet no significa que sea libre de utilizar.",example:"Quieres usar una canción como fondo de un vídeo familiar que publicarás en una red social. Comprueba los permisos y las condiciones de uso de la música.",steps:["Identifica al autor y la fuente.","Comprueba la licencia o solicita permiso.","Incluye la atribución que corresponda."],quiz:{question:"Encuentras una fotografía en Internet para una presentación pública. ¿Qué debes comprobar?",options:["La licencia y las condiciones de atribución o permiso.", "Solo si la imagen se descarga rápidamente.", "Nada, porque todo lo que está en Internet es libre."],correct:0,explanation:"La disponibilidad en Internet no implica permiso para cualquier reutilización."}},
    {id:"3.4",title:"Programación",desc:"Conoce los algoritmos y las instrucciones que permiten resolver tareas con un ordenador.",concept:"Un algoritmo es una secuencia ordenada de pasos para resolver un problema.",example:"Para preparar café con una cafetera programable, sigues una secuencia: llenar el depósito, colocar el filtro, añadir café y ponerla en marcha. El orden importa.",steps:["Describe el problema.","Divide la solución en pasos claros.","Comprueba el orden y prueba el resultado."],quiz:{question:"¿Qué describe mejor un algoritmo?",options:["Una imagen guardada en el ordenador.", "Una secuencia ordenada de pasos para resolver una tarea.", "Un dispositivo para conectarse a Internet."],correct:1,explanation:"Un algoritmo organiza pasos para alcanzar un resultado o resolver un problema."}}
  ]},
  {id:4,icon:"◇",title:"Seguridad",short:"Proteger dispositivos, datos, bienestar y entorno.",intro:"Adquiere hábitos para proteger tus dispositivos y datos personales, cuidar tu bienestar y reducir el impacto ambiental.",blocks:[
    {id:"4.1",title:"Protección de dispositivos",desc:"Adopta medidas para reducir el riesgo de pérdida, daño o acceso no autorizado.",concept:"La seguridad no depende de una sola herramienta: combina actualizaciones, bloqueo de pantalla, copias de seguridad y precaución.",example:"Dejas el móvil en una cafetería y recuerdas que no tiene bloqueo de pantalla. Activa un método de bloqueo y configura opciones para localizarlo si lo pierdes.",steps:["Mantén sistema y aplicaciones actualizados.","Usa bloqueo de pantalla y contraseñas robustas.","Haz copias de seguridad y descarga desde fuentes oficiales."],quiz:{question:"¿Cuál es un hábito adecuado para proteger un dispositivo?",options:["Instalar aplicaciones desde cualquier enlace.", "Desactivar todas las actualizaciones para siempre.", "Mantenerlo actualizado y usar un bloqueo de pantalla."],correct:2,explanation:"Las actualizaciones y el bloqueo de pantalla son medidas básicas de protección."}},
    {id:"4.2",title:"Protección de datos y privacidad",desc:"Controla qué datos compartes y con quién.",concept:"Los datos personales pueden identificarte o revelar aspectos de tu vida; compártelos solo cuando sea necesario.",example:"Una tienda online te pide una foto de tu documento de identidad para comprar un producto corriente. Antes de enviarla, comprueba si la petición es necesaria y legítima.",steps:["Revisa qué datos solicita el servicio.","Comprueba la finalidad y la legitimidad.","Limita la información y los permisos que compartes."],quiz:{question:"Una web desconocida te pide una copia de tu documento de identidad sin explicar por qué. ¿Qué haces?",options:["Te detienes y compruebas si la solicitud es legítima y necesaria.", "La envías inmediatamente.", "Publicas el documento para preguntar si es normal."],correct:0,explanation:"Antes de compartir datos personales, comprueba la finalidad y la legitimidad de la solicitud."}},
    {id:"4.3",title:"Protección de la salud y el bienestar",desc:"Utiliza la tecnología cuidando tu bienestar físico, mental y social.",concept:"El uso saludable de la tecnología incluye pausas, ergonomía y equilibrio entre actividades digitales y no digitales.",example:"Utilizas el móvil en la cama hasta tarde y al día siguiente estás cansado. Establece una hora para dejar la pantalla y activa el modo descanso si te ayuda.",steps:["Ajusta la postura y la pantalla.","Haz pausas periódicas.","Cuida el descanso y los límites de uso."],quiz:{question:"Pasas muchas horas trabajando frente a una pantalla. ¿Qué hábito ayuda al bienestar?",options:["Mantener la misma postura sin pausas.", "Hacer pausas y ajustar la postura y la iluminación.", "Subir el brillo al máximo en cualquier situación."],correct:1,explanation:"Las pausas y una postura adecuada ayudan a cuidar el bienestar durante el uso de pantallas."}},
    {id:"4.4",title:"Protección medioambiental",desc:"Reduce el impacto ambiental del uso de dispositivos y servicios digitales.",concept:"Alargar la vida útil de los dispositivos y gestionar correctamente los residuos electrónicos ayuda a reducir su impacto.",example:"Cambias de móvil porque la batería ya dura poco. Valora reparar la batería o reutilizar el aparato y lleva el dispositivo que ya no uses a un punto de recogida autorizado.",steps:["Cuida y repara los dispositivos cuando sea viable.","Reduce consumos innecesarios.","Entrega los residuos electrónicos en puntos adecuados."],quiz:{question:"Un móvil antiguo ya no te sirve. ¿Qué opción es más responsable con el medioambiente?",options:["Tirarlo a la basura convencional.", "Dejarlo en la calle junto a un contenedor.", "Reutilizarlo si es posible o llevarlo a un punto de recogida adecuado."],correct:2,explanation:"La reutilización y la gestión correcta de residuos electrónicos reducen su impacto."}}
  ]},
  {id:5,icon:"⚙",title:"Resolución de problemas",short:"Resolver dificultades y elegir soluciones tecnológicas.",intro:"Aprende a solucionar problemas técnicos comunes, reconocer necesidades y usar la tecnología de forma creativa.",blocks:[
    {id:"5.1",title:"Resolución de problemas técnicos",desc:"Sigue un orden para identificar y resolver problemas de navegación, audio, vídeo o conexión.",concept:"Antes de cambiar muchas opciones a la vez, prueba soluciones sencillas una por una.",example:"El móvil se conecta al Wi-Fi de casa, pero el portátil no. Comprueba si el Wi-Fi está activado en el portátil y prueba a abrir otra página antes de cambiar ajustes avanzados.",steps:["Describe el problema y cuándo aparece.","Comprueba conexión, dirección y ajustes básicos.","Prueba una solución cada vez y pide ayuda si continúa."],quiz:{question:"Una página web no carga. ¿Qué es razonable probar primero?",options:["Comprobar la dirección y la conexión, y probar otra página.", "Cambiar muchas configuraciones a la vez.", "Descargar un programa desconocido que promete arreglarlo."],correct:0,explanation:"Las comprobaciones básicas permiten acotar el problema antes de probar otras soluciones."}},
    {id:"5.2",title:"Identificar necesidades y respuestas tecnológicas",desc:"Elige una herramienta digital según la necesidad real que quieras resolver.",concept:"La mejor herramienta es la que resuelve la necesidad, resulta accesible y puedes utilizar de forma segura.",example:"Tu familia necesita organizar gastos compartidos de un viaje. Elige una herramienta sencilla que permita sumar importes y compartir la información solo con quienes participan.",steps:["Define la necesidad concreta.","Compara opciones, facilidad y accesibilidad.","Prueba la solución y valora si funciona."],quiz:{question:"Varias personas necesitan editar el mismo documento. ¿Cómo eliges una herramienta?",options:["Escoges la más compleja aunque no la conozcas.", "Defines la necesidad y comparas opciones adecuadas.", "Instalas varias aplicaciones sin probarlas."],correct:1,explanation:"La herramienta debe responder a la necesidad real y resultar útil y manejable."}},
    {id:"5.3",title:"Uso creativo de la tecnología digital",desc:"Utiliza herramientas digitales para explorar ideas, crear y colaborar.",concept:"La creatividad digital consiste en usar herramientas para proponer, probar y mejorar soluciones.",example:"En tu asociación vecinal se pierden avisos sobre actividades. Propones probar un calendario compartido y pides a varias personas que lo usen antes de decidir si funciona.",steps:["Identifica un reto o una pregunta.","Propón varias ideas y elige una para probar.","Recoge opiniones y mejora la propuesta."],quiz:{question:"Quieres mejorar una actividad de tu comunidad usando tecnología. ¿Cuál es un buen primer paso?",options:["Elegir una aplicación sin definir el problema.", "Evitar recoger opiniones.", "Definir el reto, proponer ideas y probar una solución."],correct:2,explanation:"Definir el reto y probar una idea permite mejorarla con la experiencia y las opiniones."}},
    {id:"5.4",title:"Identificar lagunas en las competencias digitales",desc:"Reconoce qué necesitas aprender y busca recursos para mejorar.",concept:"Identificar una dificultad concreta permite elegir mejor qué practicar y cómo medir el progreso.",example:"Sabes recibir fotos por correo, pero no sabes descargarlas en una carpeta del móvil. Define ese paso como objetivo y practica con una guía fiable hasta poder repetirlo.",steps:["Identifica la tarea que te resulta difícil.","Divide la tarea en pasos y localiza una guía fiable.","Practica y vuelve a comprobar si puedes hacerlo sin ayuda."],quiz:{question:"Puedes leer correos, pero no sabes adjuntar un archivo. ¿Qué objetivo de aprendizaje sería más útil?",options:["Practicar cómo localizar y adjuntar un documento.", "Volver a estudiar tareas que ya dominas sin identificar la dificultad.", "Dejar de utilizar el correo definitivamente."],correct:0,explanation:"Identificar la tarea concreta que cuesta permite practicar una habilidad específica."}}
  ]}
];


const deepContent = {
  "1.1": {
    "why": "Una búsqueda eficaz empieza por concretar la necesidad y termina al comprobar que los resultados responden a ella. Los buscadores interpretan las palabras clave; por eso, una consulta precisa suele ser más útil que una frase demasiado general.",
    "analogy": "Buscar en Internet se parece a pedir ayuda en una biblioteca: si dices «necesito algo», te pueden enseñar miles de libros; si explicas el tema, el año y para qué lo necesitas, la persona bibliotecaria puede orientarte mejor.",
    "resolved": [
      [
        "Búsqueda general",
        "Escribe «ayudas alquiler» y observa que los resultados pueden mezclar noticias, anuncios y páginas oficiales."
      ],
      [
        "Añadir precisión",
        "Prueba «ayudas alquiler jóvenes Extremadura 2026» si eso es exactamente lo que necesitas. Las palabras adicionales acotan la búsqueda."
      ],
      [
        "Filtrar y contrastar",
        "Abre resultados pertinentes, revisa quién publica la información y comprueba si la fecha y los requisitos corresponden a tu caso."
      ]
    ],
    "practice": "En grupo, buscad información para renovar el DNI. Preparad una consulta precisa y decidid qué resultado abriríais primero y por qué. No introduzcáis datos personales en páginas que solo estáis explorando.",
    "task": "Ordena mentalmente el proceso: concretar la pregunta, escribir palabras clave, comparar resultados y comprobar la fuente."
  },
  "1.2": {
    "why": "Evaluar información consiste en valorar su fiabilidad, actualidad, relevancia y evidencias. Un titular llamativo, muchas visitas o una imagen convincente no demuestran que algo sea cierto.",
    "analogy": "Es como comprar un alimento: no basta con que el envase sea atractivo; miras quién lo fabrica, la fecha y la información de la etiqueta.",
    "resolved": [
      [
        "Revisar el origen",
        "Recibes un mensaje que afirma que mañana cierran todos los centros de salud. No lo reenvíes todavía."
      ],
      [
        "Buscar la publicación original",
        "Consulta la web o los canales oficiales del organismo que supuestamente lo anuncia."
      ],
      [
        "Contrastar y decidir",
        "Comprueba la fecha y busca confirmación independiente. Si no hay evidencias fiables, no lo compartas como cierto."
      ]
    ],
    "practice": "Analizad una publicación ficticia con titular alarmante. El grupo debe señalar autoría, fecha, evidencias, intención y qué comprobación falta.",
    "task": "Antes de compartir una noticia, identifica la fuente original y comprueba si la fecha y las pruebas respaldan la afirmación."
  },
  "1.3": {
    "why": "Gestionar información incluye guardar, clasificar, recuperar, renombrar, mover y proteger archivos. Una estructura sencilla y consistente evita duplicados y pérdidas.",
    "analogy": "Tus carpetas digitales son como cajones etiquetados: guardar todo en un único cajón no hace que desaparezca, pero dificulta encontrarlo.",
    "resolved": [
      [
        "Crear la carpeta principal",
        "Crea «Curso competencias digitales»."
      ],
      [
        "Separar por finalidad",
        "Añade carpetas como «Tema 1», «Tema 2» y «Tareas entregadas»."
      ],
      [
        "Nombrar y proteger",
        "Usa nombres como «Tema1_busquedas_resumen.pdf» y guarda una copia de los archivos importantes en otro lugar seguro."
      ]
    ],
    "practice": "Organizad una carpeta ficticia con cinco archivos desordenados. Proponed nombres claros y una estructura que permita localizar rápidamente el documento correcto.",
    "task": "Diseña una estructura de tres carpetas para guardar documentos de un curso y explica qué guardarías en cada una."
  },
  "2.1": {
    "why": "La comunicación digital puede ser síncrona (las personas coinciden al mismo tiempo) o asíncrona (cada una responde cuando puede). El canal debe elegirse según urgencia, formalidad, accesibilidad y privacidad.",
    "analogy": "Elegir una herramienta de comunicación es como elegir transporte: para un trayecto corto puede bastar caminar; para otro necesitas una opción distinta. No existe un único medio adecuado para todo.",
    "resolved": [
      [
        "Aviso breve",
        "Para recordar una hora a un grupo, un mensaje breve puede ser suficiente."
      ],
      [
        "Solicitud formal",
        "Para pedir información a una administración o empresa, redacta un correo claro con asunto, saludo y petición concreta."
      ],
      [
        "Conversación compleja",
        "Si hay que resolver dudas entre varias personas, una videollamada puede facilitar turnos y aclaraciones; acuerda antes cómo compartir documentos."
      ]
    ],
    "practice": "Repartid tres situaciones —aviso urgente, solicitud formal y explicación compleja— y elegid canal, tono y datos que conviene incluir o evitar.",
    "task": "Para cada situación, decide si usarías mensajería, correo o videollamada y justifica la elección."
  },
  "2.2": {
    "why": "Compartir digitalmente implica decidir qué recurso se comparte, con quién y con qué permisos. Un enlace abierto puede permitir que personas no previstas vean o modifiquen el archivo.",
    "analogy": "Compartir un archivo es como entregar una llave: puedes dar acceso a una habitación concreta o dejar la puerta abierta a cualquiera.",
    "resolved": [
      [
        "Elegir el archivo",
        "Comprueba que es la versión correcta y que no contiene datos que no deban difundirse."
      ],
      [
        "Ajustar permisos",
        "Configura lectura o edición según la tarea y limita el acceso a las personas necesarias."
      ],
      [
        "Probar el acceso",
        "Revisa el enlace y confirma que el destinatario puede abrirlo sin conceder más permisos de los necesarios."
      ]
    ],
    "practice": "Simulad el envío de un documento con datos ficticios. Decidid quién debe verlo, quién puede editarlo y cuándo retiraríais el acceso.",
    "task": "Elige los permisos mínimos que necesita una persona que solo debe leer un documento."
  },
  "2.3": {
    "why": "La participación ciudadana digital permite consultar información pública, pedir citas, presentar solicitudes y acceder a servicios. Es importante verificar la identidad del organismo y utilizar los mecanismos de identificación que correspondan.",
    "analogy": "Un trámite en línea se parece a entrar en una oficina pública: primero compruebas que estás en la oficina correcta y después entregas solo la documentación necesaria.",
    "resolved": [
      [
        "Localizar el organismo",
        "Busca qué administración gestiona el trámite."
      ],
      [
        "Verificar la web",
        "Comprueba el dominio y llega al sitio mediante una fuente oficial, no desde un anuncio o enlace inesperado."
      ],
      [
        "Leer antes de enviar",
        "Revisa requisitos, documentación y justificante. No compartas claves o códigos de un solo uso con terceros."
      ]
    ],
    "practice": "Con un trámite ficticio, elaborad una lista de comprobación antes de enviar una solicitud: organismo, requisitos, documentación, seguridad y justificante.",
    "task": "Antes de introducir datos en una página de trámites, indica dos comprobaciones que harías."
  },
  "2.4": {
    "why": "Colaborar en línea exige acordar el objetivo, repartir tareas, gestionar permisos y mantener una versión común del trabajo. Las herramientas colaborativas permiten editar y comentar, pero necesitan normas compartidas.",
    "analogy": "Es como cocinar en una cocina compartida: si todos cambian la receta sin hablar, el resultado se resiente; si se reparten tareas y se avisan de los cambios, se trabaja mejor.",
    "resolved": [
      [
        "Acordar el objetivo",
        "Definid qué documento vais a entregar y qué debe incluir."
      ],
      [
        "Repartir responsabilidades",
        "Asignad apartados o tareas y estableced una fecha de revisión."
      ],
      [
        "Revisar y cerrar",
        "Usad comentarios para proponer cambios, comprobad el documento final y verificad que todos trabajan sobre la misma versión."
      ]
    ],
    "practice": "Preparad en grupos un documento breve sobre una actividad del barrio. Repartid roles de redacción, revisión y coordinación y acordad cómo resolver cambios.",
    "task": "Explica por qué trabajar sobre copias distintas puede provocar errores y cómo lo evitarías."
  },
  "2.5": {
    "why": "La netiqueta reúne pautas de comunicación respetuosa en entornos digitales. Incluye adaptar el tono al contexto, no difundir datos privados y pensar antes de publicar algo que puede copiarse o compartirse.",
    "analogy": "Una conversación en línea es como hablar en una plaza donde otras personas pueden escuchar y registrar lo que dices: el contexto y el respeto siguen importando.",
    "resolved": [
      [
        "Detectar el problema",
        "Lees una crítica con la que no estás de acuerdo."
      ],
      [
        "Redactar sin atacar",
        "Describe el hecho concreto y explica por qué discrepas, sin insultos ni etiquetas personales."
      ],
      [
        "Revisar la privacidad",
        "Elimina nombres, teléfonos o capturas que expongan a otras personas sin necesidad."
      ]
    ],
    "practice": "Reescribid un comentario ofensivo ficticio para convertirlo en una crítica concreta, respetuosa y útil.",
    "task": "Identifica qué parte de un mensaje puede resultar ofensiva o revelar información privada y propón una alternativa."
  },
  "2.6": {
    "why": "La identidad digital es la imagen y el conjunto de datos asociados a una persona en línea. Puede incluir publicaciones propias, menciones de terceros, perfiles, comentarios y datos que aparecen en buscadores.",
    "analogy": "Tu identidad digital es como un escaparate que se va llenando con aportaciones tuyas y de otras personas; conviene revisar qué queda expuesto y quién puede verlo.",
    "resolved": [
      [
        "Revisar la visibilidad",
        "Comprueba qué publicaciones y datos se ven sin iniciar sesión."
      ],
      [
        "Ajustar controles",
        "Revisa quién puede ver publicaciones, etiquetarte o localizarte."
      ],
      [
        "Actuar con prudencia",
        "Retira contenido innecesario cuando sea posible y evita publicar documentos, ubicación o datos de contacto de forma indiscriminada."
      ]
    ],
    "practice": "Elaborad una lista de revisión de privacidad para una cuenta ficticia: publicaciones públicas, etiquetas, ubicación, contactos y recuperación de cuenta.",
    "task": "Nombra dos tipos de información que revisarías antes de publicar un perfil profesional."
  },
  "3.1": {
    "why": "Crear contenidos digitales implica producir o editar documentos, presentaciones, imágenes, audio y vídeo. El formato debe elegirse según el contenido, el uso, la calidad, el tamaño y la compatibilidad.",
    "analogy": "Los formatos son como recipientes: una botella sirve para líquidos y una carpeta para papeles; elegir el recipiente adecuado facilita guardar y compartir cada contenido.",
    "resolved": [
      [
        "Definir el contenido",
        "Decide si necesitas entregar un texto editable, una versión final para imprimir o una imagen."
      ],
      [
        "Elegir formato",
        "Un documento editable puede guardarse como DOCX; para conservar el aspecto al compartir, PDF suele ser útil; JPG se usa habitualmente para fotografías y MP3 para audio."
      ],
      [
        "Comprobar el resultado",
        "Abre el archivo exportado y revisa que no falten páginas, que se lea bien y que la persona destinataria pueda utilizarlo."
      ]
    ],
    "practice": "Elegid formato para cuatro casos: entregar un texto que otra persona editará, compartir un documento final, enviar una fotografía y compartir una grabación de voz.",
    "task": "Relaciona la finalidad con un formato razonable y explica por qué importa la compatibilidad."
  },
  "3.2": {
    "why": "Integrar y reelaborar significa combinar, adaptar o transformar contenidos para crear un resultado nuevo. No todo lo que está en Internet se puede reutilizar libremente: hay que revisar la licencia, atribuir la autoría cuando corresponda y respetar las condiciones de uso.",
    "analogy": "Es como preparar una receta con ingredientes de otras personas: debes saber cuáles puedes utilizar y seguir las condiciones que acompañan a cada ingrediente.",
    "resolved": [
      [
        "Planificar el resultado",
        "Define qué quieres explicar en tu presentación."
      ],
      [
        "Seleccionar recursos",
        "Prioriza materiales propios o recursos con licencia compatible con el uso previsto."
      ],
      [
        "Integrar y atribuir",
        "Adapta el recurso sin falsear su sentido y anota autor, fuente y licencia cuando corresponda."
      ]
    ],
    "practice": "Con tres recursos ficticios —uno propio, uno con licencia que permite reutilización con atribución y otro sin licencia clara— decidid cuáles usaríais y qué haríais antes de publicarlos.",
    "task": "Explica qué debes comprobar antes de incorporar una imagen encontrada en Internet a una presentación."
  },
  "3.3": {
    "why": "Los derechos de autor protegen determinadas obras originales. Las licencias indican qué usos autoriza quien tiene los derechos; las condiciones pueden exigir atribución, impedir usos comerciales o limitar obras derivadas. La disponibilidad en Internet no equivale a permiso.",
    "analogy": "Una obra en línea es como una fotografía expuesta en una galería: verla no significa que puedas reproducirla en cualquier contexto.",
    "resolved": [
      [
        "Identificar la obra",
        "Localiza autoría y página de origen."
      ],
      [
        "Leer las condiciones",
        "Comprueba si se permite copiar, modificar o utilizar con fines comerciales y si exige atribución."
      ],
      [
        "Cumplir o elegir otra",
        "Cita según la licencia y el uso permitido; si no puedes confirmar el permiso, busca una alternativa con condiciones claras."
      ]
    ],
    "practice": "Comparad tres fichas de recursos ficticios con licencias distintas y elegid cuál usaríais en una presentación pública, justificando la decisión.",
    "task": "¿Por qué no basta con que una imagen aparezca en el buscador para poder utilizarla libremente?"
  },
  "3.4": {
    "why": "Programar consiste en expresar instrucciones que un sistema puede ejecutar. Un algoritmo describe los pasos para resolver una tarea; después se traduce a un lenguaje o herramienta que el dispositivo pueda interpretar.",
    "analogy": "Un algoritmo es como una receta: indica ingredientes, orden y condiciones. Si un paso es ambiguo, el resultado puede salir mal.",
    "resolved": [
      [
        "Definir el objetivo",
        "Por ejemplo, decidir si una persona puede acceder a una actividad según su edad mínima."
      ],
      [
        "Ordenar las reglas",
        "Primero se pide la edad; después se compara con el mínimo y se muestra un resultado."
      ],
      [
        "Probar casos",
        "Prueba una edad inferior, una igual y otra superior al límite para comprobar que la regla funciona."
      ]
    ],
    "practice": "Escribid en lenguaje cotidiano un algoritmo para preparar una videollamada: comprobar conexión, abrir aplicación, probar micrófono y entrar en la reunión.",
    "task": "Detecta qué paso falta en una secuencia de instrucciones para que el resultado sea correcto."
  },
  "4.1": {
    "why": "Proteger dispositivos incluye mantener sistemas y aplicaciones actualizados, utilizar bloqueo de pantalla, descargar software de fuentes fiables y contar con medidas de protección adecuadas. Las actualizaciones pueden corregir fallos de seguridad.",
    "analogy": "Actualizar un dispositivo se parece a reparar una cerradura cuando se descubre que tiene un defecto: no cambia necesariamente cómo usas la puerta, pero puede reducir riesgos.",
    "resolved": [
      [
        "Reconocer el aviso",
        "El dispositivo indica que hay una actualización disponible."
      ],
      [
        "Comprobar su procedencia",
        "Revisa que el aviso procede de los ajustes del sistema o de la aplicación oficial, no de una ventana sospechosa."
      ],
      [
        "Actualizar con precaución",
        "Guarda el trabajo, conecta el dispositivo a la corriente si procede y sigue las instrucciones oficiales."
      ]
    ],
    "practice": "Preparad una rutina de mantenimiento mensual para un móvil u ordenador: actualizaciones, bloqueo, aplicaciones instaladas y copia de seguridad.",
    "task": "¿Qué diferencia hay entre una actualización del sistema y una ventana emergente que te pide instalar un programa desconocido?"
  },
  "4.2": {
    "why": "Los datos personales son información que identifica o puede identificar a una persona. La privacidad se protege compartiendo solo los datos necesarios, revisando permisos y utilizando canales adecuados. Las contraseñas y los códigos de verificación no deben entregarse a terceros.",
    "analogy": "Tus datos personales son como las llaves de casa: no se las das a cualquiera y no necesitas enseñar todas las llaves para que alguien te indique el camino.",
    "resolved": [
      [
        "Valorar la solicitud",
        "Una web pide nombre, teléfono, dirección y documento de identidad para descargar una guía gratuita."
      ],
      [
        "Preguntar si es necesario",
        "Comprueba quién solicita los datos, para qué y si todos son imprescindibles."
      ],
      [
        "Decidir con criterio",
        "Evita facilitar datos excesivos; consulta la política de privacidad y abandona el proceso si no confías en el servicio."
      ]
    ],
    "practice": "Revisad un formulario ficticio y marcad qué datos parecen necesarios para la finalidad declarada y cuáles requieren una justificación adicional.",
    "task": "Antes de facilitar datos personales, identifica quién los solicita, para qué y cuáles son imprescindibles."
  },
  "4.3": {
    "why": "La seguridad digital también incluye salud y bienestar: ergonomía, descansos, equilibrio de uso, prevención del acoso y gestión de situaciones que provocan malestar. Si una interacción digital amenaza tu seguridad, conserva evidencias cuando sea adecuado, bloquea o denuncia y busca apoyo.",
    "analogy": "Usar pantallas es como realizar una actividad física repetida: la postura, los descansos y la intensidad influyen en cómo te encuentras al terminar.",
    "resolved": [
      [
        "Detectar señales",
        "Notas tensión en cuello y ojos después de varias horas."
      ],
      [
        "Cambiar las condiciones",
        "Ajusta la altura de la pantalla, la iluminación y la postura; realiza pausas y cambia de actividad."
      ],
      [
        "Poner límites",
        "Configura notificaciones y horarios; ante acoso o amenazas, no respondas impulsivamente y busca ayuda por canales adecuados."
      ]
    ],
    "practice": "Diseñad una pausa activa de dos minutos y una norma de bienestar digital para una sesión de trabajo o estudio.",
    "task": "Propón un cambio concreto para reducir una molestia asociada al uso prolongado de pantallas."
  },
  "4.4": {
    "why": "La protección medioambiental implica reducir el impacto de dispositivos y servicios digitales: alargar la vida útil, reparar cuando sea viable, evitar compras innecesarias y entregar residuos electrónicos en canales autorizados.",
    "analogy": "Un dispositivo electrónico se parece a un electrodoméstico pequeño: no debe acabar en cualquier cubo porque contiene materiales que necesitan una gestión específica.",
    "resolved": [
      [
        "Valorar antes de sustituir",
        "Si un móvil funciona lento, comprueba almacenamiento, actualizaciones y reparación antes de comprar otro."
      ],
      [
        "Preparar la retirada",
        "Si ya no se puede utilizar, borra los datos personales y consulta cómo entregarlo de forma segura."
      ],
      [
        "Reciclar correctamente",
        "Llévalo a un punto de recogida o sistema autorizado para residuos electrónicos; no lo tires al contenedor común."
      ]
    ],
    "practice": "Ordenad varias acciones de menor a mayor generación de residuos: reparar, reutilizar, donar, reciclar correctamente y comprar un dispositivo nuevo sin necesidad.",
    "task": "¿Qué harías con un móvil que ya no utilizas para proteger tus datos y reducir su impacto ambiental?"
  },
  "5.1": {
    "why": "Resolver problemas técnicos exige describir qué falla, localizar cuándo ocurre y probar comprobaciones simples de una en una. Los errores pueden proceder de la conexión, el navegador, los permisos, el servicio o el propio dispositivo.",
    "analogy": "Es como buscar por qué no arranca un coche: conviene comprobar primero lo básico antes de desmontar piezas al azar.",
    "resolved": [
      [
        "Describir el síntoma",
        "Una página no carga, pero otras sí."
      ],
      [
        "Acotar el origen",
        "Comprueba la dirección y prueba otro navegador o dispositivo si está disponible."
      ],
      [
        "Probar una solución cada vez",
        "Recarga, revisa extensiones o consulta si el servicio informa de una incidencia. Evita instalar herramientas desconocidas para «arreglarlo»."
      ]
    ],
    "practice": "Simulad una incidencia: una persona describe el error y otra propone pruebas en orden, indicando qué resultado permitiría descartar cada causa.",
    "task": "Una web no abre pero otras sí. ¿Qué comprobación harías después de confirmar que tienes conexión?"
  },
  "5.2": {
    "why": "Identificar necesidades tecnológicas consiste en describir la tarea que se quiere resolver y elegir una herramienta adecuada, accesible, segura y proporcionada. La herramienta más compleja no es necesariamente la mejor.",
    "analogy": "Es como elegir una herramienta de bricolaje: primero identificas el trabajo y luego seleccionas lo que sirve, en lugar de comprar todas las herramientas disponibles.",
    "resolved": [
      [
        "Definir la necesidad",
        "Necesitas recoger opiniones de veinte personas."
      ],
      [
        "Comparar opciones",
        "Valora formulario, correo o documento compartido según facilidad, privacidad y forma de analizar respuestas."
      ],
      [
        "Probar y evaluar",
        "Haz una prueba con pocas personas y comprueba si la herramienta recoge la información necesaria sin pedir datos innecesarios."
      ]
    ],
    "practice": "Elegid una solución para organizar una cita de grupo, recoger opiniones y compartir documentos. Comparad utilidad, facilidad de uso, privacidad y accesibilidad.",
    "task": "Antes de elegir una aplicación, escribe la necesidad concreta que debe resolver y un criterio para evaluar si funciona."
  },
  "5.3": {
    "why": "El uso creativo de la tecnología implica combinar herramientas, ideas y conocimientos para resolver retos o crear contenidos. Un proceso útil es idear, probar, recibir comentarios y mejorar, sin asumir que la primera solución es la definitiva.",
    "analogy": "Crear con tecnología se parece a construir un prototipo con piezas: haces una primera versión, compruebas cómo funciona y cambias lo que no resuelve bien el problema.",
    "resolved": [
      [
        "Definir el reto",
        "Un grupo necesita que las personas encuentren con facilidad información sobre actividades locales."
      ],
      [
        "Proponer una solución",
        "Diseña una página o documento compartido con categorías claras y enlaces a fuentes oficiales."
      ],
      [
        "Probar y mejorar",
        "Pide a alguien que lo use sin explicaciones; observa dónde se pierde y reorganiza el contenido."
      ]
    ],
    "practice": "En grupos, idead una mejora digital para una necesidad cotidiana. Dibujad un prototipo en papel y decidid cómo comprobaríais si realmente ayuda.",
    "task": "Describe una idea digital, a quién ayudaría y qué prueba harías para saber si funciona."
  },
  "5.4": {
    "why": "Reconocer lagunas digitales significa detectar tareas concretas que aún cuestan, definir un objetivo alcanzable y practicar con recursos fiables. Aprender por pasos permite medir el progreso y pedir ayuda con precisión.",
    "analogy": "Aprender competencias digitales es como aprender una ruta: si sabes hasta dónde llegas y dónde te pierdes, puedes practicar justo el tramo que necesitas.",
    "resolved": [
      [
        "Precisar la dificultad",
        "Puedes leer un correo, pero no sabes adjuntar un archivo."
      ],
      [
        "Convertirla en objetivo",
        "Formula: «Seré capaz de adjuntar un PDF a un correo y comprobar que aparece antes de enviarlo»."
      ],
      [
        "Practicar y comprobar",
        "Sigue una guía fiable, realiza la tarea con un archivo de prueba y repítela sin ayuda para confirmar que la dominas."
      ]
    ],
    "practice": "Cada persona completa una frase: «Puedo hacer ___, pero necesito practicar ___». Después convierte esa necesidad en un objetivo observable.",
    "task": "Transforma «quiero mejorar con el ordenador» en un objetivo concreto que puedas comprobar."
  }
};



const applicationSolutions = {
  "1.1": "<p><strong>1. Escribe la búsqueda:</strong> «curso gratuito de informática para adultos en [tu localidad]».</p><p><strong>2. Compara dos criterios:</strong></p><ul><li><strong>Coste:</strong> confirma que no se paga matrícula ni materiales obligatorios.</li><li><strong>Quién lo organiza y actualidad:</strong> comprueba el nombre de la entidad, la fecha de publicación y si el plazo de inscripción sigue abierto.</li></ul><p><strong>3. Decide:</strong> anota esos datos para dos o tres resultados y elige el que encaje mejor. Sustituye [tu localidad] por el nombre real de tu municipio. No hace falta que todos los cursos tengan el mismo formato.</p><p><strong>Comprueba tu respuesta:</strong> has escrito una búsqueda concreta y has indicado dos criterios comparables.",
  "1.2": "<p>Antes de reenviar la noticia, responde estas tres preguntas:</p><ol><li><strong>Origen:</strong> ¿quién publicó la noticia originalmente? Busca la publicación original, no solo la persona que la comparte.</li><li><strong>Fecha:</strong> ¿cuándo se publicó? Una noticia antigua puede circular como si fuera actual.</li><li><strong>Pruebas:</strong> ¿aporta datos comprobables y la confirman fuentes fiables e independientes?</li></ol><p>Si no puedes verificar la afirmación, no la reenvíes como si fuera cierta. Puedes esperar o decir que no has podido confirmarla.</p>",
  "1.3": "<p>Una organización posible sería esta:</p><ul><li><strong>Documentos personales</strong>: DNI, contratos y documentos privados.</li><li><strong>Trámites</strong>: solicitudes, justificantes y comunicaciones oficiales.</li><li><strong>Curso</strong>: carpetas «Materiales» y «Entregas».</li><li><strong>Uso diario</strong>: documentos que no contienen datos sensibles.</li></ul><p>Nombra los archivos con una fecha y una descripción, por ejemplo, «2026-10-15_cita_medica.pdf». No guardes documentos sensibles en carpetas compartidas. Haz una copia de seguridad en un lugar seguro y comprueba que puedes recuperar un archivo.</p><p>Las carpetas exactas pueden variar; lo importante es que sean fáciles de entender y protejan la información privada.</p>",
  "2.1": "<p><strong>Asunto:</strong> Solicitud de cambio de cita.</p><p><strong>Mensaje:</strong></p><blockquote>Buenos días: tengo una cita el [fecha y hora] y necesito cambiarla. ¿Podrían indicarme qué otras fechas están disponibles? Muchas gracias. Un saludo.</blockquote><p>Sustituye los campos entre corchetes por la información necesaria. Añade tu nombre si el centro necesita identificarte, pero no incluyas contraseñas ni datos personales que no sean necesarios. Antes de enviarlo, comprueba que la dirección del destinatario es correcta.</p>",
  "2.2": "<p>Seleccionaría el permiso <strong>«lector» o «solo puede ver»</strong>.</p><ol><li>Abre las opciones de compartir del documento.</li><li>Introduce la dirección de la persona destinataria.</li><li>Elige «lector» o «solo lectura», no «editor».</li><li>Envía el acceso y comprueba que la persona puede abrirlo sin modificarlo.</li></ol><p>Así podrá consultar el contenido, pero no cambiarlo. Comparte con personas concretas y retira el permiso cuando ya no lo necesiten. Los nombres de los permisos pueden variar según la aplicación.</p>",
  "2.3": "<p>Comprueba estas dos señales:</p><ol><li><strong>Dominio y procedencia:</strong> llega a la página desde el portal oficial del ayuntamiento u organismo, escribiendo la dirección conocida o buscándola por tu cuenta. Lee con cuidado el dominio; un logotipo no demuestra que sea oficial.</li><li><strong>Coherencia del trámite:</strong> contrasta la información en otra página oficial relacionada y comprueba que el procedimiento, los datos de contacto y los requisitos coinciden.</li></ol><p>No introduzcas datos personales ni bancarios desde un enlace inesperado. El candado HTTPS cifra la conexión, pero por sí solo no demuestra que una web sea legítima.</p>",
  "2.4": "<p>Ejemplo de reparto para una actividad vecinal:</p><ul><li><strong>Reservar el espacio:</strong> responsable Ana; fecha límite, martes.</li><li><strong>Preparar los materiales:</strong> responsable Luis; fecha límite, jueves.</li><li><strong>Avisar a las personas participantes:</strong> responsable Marta; fecha límite, viernes.</li></ul><p>En una lista compartida, cada tarea debe tener una persona responsable y una fecha acordada. Sustituye los nombres y los días por los reales del grupo y comprueba que las fechas dejan tiempo suficiente para terminar.</p>",
  "2.5": "<p>Una respuesta más útil sería:</p><blockquote>«Creo que el trabajo necesita algunos cambios: en el apartado dos falta explicar el procedimiento. ¿Podemos revisarlo y añadir esa información?»</blockquote><p>La frase identifica un problema concreto y propone una acción. No insulta ni juzga a la persona. Para crear tu propia versión, describe qué ocurre, explica qué falta y sugiere cómo mejorarlo.</p>",
  "2.6": "<p>Antes de empezar a buscar empleo, revisaría:</p><ol><li><strong>Lo que ve el público:</strong> publicaciones, fotos, etiquetas, comentarios y datos de contacto.</li><li><strong>La privacidad:</strong> quién puede ver cada contenido y qué información personal conviene limitar o retirar.</li><li><strong>La información profesional:</strong> que los datos públicos relacionados con mi experiencia sean correctos y adecuados.</li></ol><p>No es necesario borrar toda tu vida digital. El objetivo es decidir conscientemente qué información puede ver cualquier persona y reducir la que no quieres compartir.</p>",
  "3.1": "<p>Si el organismo no indica otro formato, elegiría <strong>PDF</strong> para conservar el diseño de la solicitud al imprimirla.</p><ol><li>Guarda o exporta el documento como PDF.</li><li>Abre el PDF creado, no solo el documento original.</li><li>Comprueba que están todas las páginas, que el texto se lee bien y que no hay páginas en blanco ni datos incorrectos.</li><li>Si el organismo exige un formato específico, utiliza el que indiquen sus instrucciones.</li></ol><p>El PDF ayuda a conservar el aspecto, pero siempre hay que revisar el archivo final antes de enviarlo.</p>",
  "3.2": "<p>Ejemplo: instrucciones para unirse a una videollamada.</p><ol><li>Comprueba que tienes conexión a Internet.</li><li>Abre la aplicación indicada.</li><li>Revisa que la cámara y el micrófono estén conectados y permitidos.</li><li>Pulsa el enlace de la invitación o introduce el código de reunión.</li><li>Al entrar, silencia el micrófono cuando no estés hablando.</li></ol><p>Una buena instrucción describe una acción, va en el orden en que debe realizarse y utiliza palabras sencillas. Tu tarea puede ser sobre otra actividad cotidiana, siempre que tenga cinco pasos ordenados.</p>",
  "3.3": "<p>Si la licencia exige nombrar al autor y enlazar la fuente, puedes usar esta plantilla:</p><blockquote>«[Título del recurso]», de [nombre del autor], disponible en [enlace a la fuente]. Licencia: [nombre y enlace de la licencia].</blockquote><p>Antes de publicar, sustituye todos los campos por datos reales. Revisa la licencia del recurso original y añade cualquier requisito adicional que indique, por ejemplo, si exige mencionar cambios realizados. No inventes el autor ni la licencia.</p>",
  "3.4": "<p>Si la tabla tiene columnas como «Fecha» e «Importe», añadiría:</p><ul><li><strong>Categoría:</strong> alimentación, transporte, vivienda, ocio, etc.</li><li><strong>Mes:</strong> enero, febrero, marzo…; también puedes extraerlo de la fecha si sabes hacerlo.</li></ul><p>Con «Categoría» puedes agrupar o sumar gastos por tipo; con «Mes» puedes comparar periodos. Si la tabla ya contiene una de esas columnas, no la dupliques: elige otra que aporte información útil, como «Método de pago».</p>",
  "3.5": "<p>Para que la imagen se lea mejor en un teléfono:</p><ol><li>Aumenta el tamaño de la letra y utiliza una tipografía sencilla.</li><li>Usa contraste claro entre texto y fondo; no comuniques información solo mediante colores.</li><li>Reduce el texto y separa la información en bloques breves.</li><li>Abre la imagen en un móvil y comprueba que se lee sin ampliar demasiado.</li><li>Si es posible, acompáñala de una versión en texto con la información esencial.</li></ol><p>La prueba en una pantalla pequeña ayuda a detectar texto demasiado pequeño o elementos amontonados.</p>",
  "4.1": "<p>Antes de entregar el dispositivo para reparar:</p><ol><li><strong>Haz una copia de seguridad</strong> de los archivos importantes y comprueba que se ha guardado.</li><li><strong>Protege tus datos:</strong> elimina o guarda aparte los archivos personales que no sean necesarios para la reparación.</li><li><strong>Pregunta al servicio técnico</strong> qué acceso necesita y si es posible reparar el equipo sin acceder a tus cuentas.</li><li><strong>Cierra sesiones o retira información sensible</strong> cuando sea viable; no entregues tus contraseñas personales. Si se necesita desbloquear el equipo, acuerda un procedimiento seguro con el servicio técnico.</li></ol><p>Las medidas concretas dependen del dispositivo y de la avería. No borres todo ni restaures el equipo sin comprobar antes la copia de seguridad y las instrucciones del servicio técnico.</p>",
  "4.2": "<p>Para comprobar el supuesto aviso de pago:</p><ol><li>No pulses el enlace ni respondas al SMS; no facilites datos bancarios ni códigos de verificación.</li><li>Abre la aplicación oficial o escribe tú mismo la dirección conocida de la empresa. También puedes llamar al número publicado en su web oficial o en documentación fiable.</li><li>Comprueba allí si el envío existe y si realmente hay una tasa pendiente.</li><li>Si no se confirma, conserva el mensaje como prueba y márcalo como sospechoso o repórtalo por los canales disponibles.</li></ol><p>No uses el teléfono ni el enlace que aparecen en el mensaje sospechoso para verificarlo.</p>",
  "4.3": "<p>Dos cambios posibles son:</p><ul><li><strong>Reducir distracciones:</strong> desactivar avisos no esenciales y consultar el correo en momentos concretos.</li><li><strong>Cuidar la comodidad:</strong> ajustar la altura de la pantalla y hacer pausas breves para cambiar de postura.</li></ul><p>En tu respuesta, elige dos cambios y explica el beneficio de cada uno. Por ejemplo: «Desactivo las notificaciones para concentrarme» y «hago pausas para no mantener la misma postura durante mucho tiempo».</p>",
  "4.4": "<p>Para saber dónde entregar el aparato:</p><ol><li>Consulta la web de tu ayuntamiento o comunidad autónoma y busca «punto limpio» o «residuos de aparatos eléctricos y electrónicos».</li><li>Comprueba el horario, qué aparatos aceptan y si necesitas llevarlo a un punto concreto.</li><li>Pregunta a un establecimiento de venta de aparatos eléctricos si ofrece recogida de equipos usados.</li><li>Si el aparato guarda datos personales, haz una copia de lo que necesites y borra la información de forma segura antes de entregarlo, siempre que el aparato lo permita.</li></ol><p>No lo tires a la basura convencional. El lugar y las condiciones de recogida dependen del municipio y del tipo de aparato.</p>",
  "5.1": "<p>Prueba estas tres comprobaciones, en orden:</p><ol><li><strong>Volumen y conexión:</strong> confirma que el sonido no está silenciado y que los auriculares o altavoces están conectados.</li><li><strong>Dispositivo de salida:</strong> en los ajustes de sonido, selecciona los auriculares o altavoces que realmente quieres utilizar.</li><li><strong>Prueba:</strong> reproduce un sonido en otra aplicación para averiguar si el problema ocurre en toda la computadora o solo en la videollamada.</li></ol><p>Cambia una cosa cada vez y comprueba el resultado antes de continuar. Si el problema solo ocurre en una aplicación, revisa también sus ajustes de audio.</p>",
  "5.2": "<p>Una aplicación de recetas normalmente puede mostrar recetas sin acceder a tus contactos. Haría lo siguiente:</p><ol><li>Denegaría el permiso de contactos si no veo una función que lo necesite.</li><li>Comprobaría si la aplicación sigue funcionando como quiero.</li><li>Si una función concreta requiere contactos, valoraría si quiero utilizarla y concedería el permiso solo si entiendo para qué se usará.</li></ol><p>Los permisos se pueden revisar en los ajustes del dispositivo. No hace falta conceder todos los permisos que una aplicación solicita.</p>",
  "5.3": "<p>Ejemplo de solución digital:</p><ul><li><strong>Problema:</strong> en el centro vecinal, las personas no encuentran fácilmente los horarios de las actividades.</li><li><strong>Solución:</strong> crear una página sencilla o un documento compartido con los horarios, el lugar y la persona de contacto.</li><li><strong>Prueba:</strong> pedir a tres personas que encuentren el horario de una actividad sin ayuda y anotar si lo consiguen.</li><li><strong>Mejora:</strong> si se confunden, reorganizar la información y repetir la prueba.</li></ul><p>Elige un problema real cercano. Sabrás si la solución funciona usando una comprobación observable, no solo porque al grupo le parezca buena la idea.</p>",
  "5.4": "<p>Un objetivo más concreto sería: «Durante las próximas dos semanas practicaré cómo conectarme a una red Wi-Fi, enviar una foto por mensajería y localizar los ajustes de privacidad del móvil».</p><p><strong>Cómo comprobarlo:</strong> al terminar, realizaré esas tres tareas sin ayuda y anotaré cuál necesito seguir practicando.</p><p>Un objetivo útil indica qué acción aprenderás, en qué plazo y cómo comprobarás el resultado. Puedes adaptarlo a la habilidad que más necesites.</p>"
};


const originalExamples = {"1.1": "Quieres comparar tarifas de internet para casa. Busca con la velocidad que necesitas y tu localidad; después compara precio final, permanencia y condiciones en varias webs.", "1.2": "En un grupo de vecinos circula una imagen que anuncia el cierre de una calle. Comprueba la fecha y consulta los canales del ayuntamiento antes de organizarte.", "1.3": "Guardas justificantes de compras y facturas. Crea una carpeta por año y nombra cada archivo con fecha, comercio y concepto para localizarlo después.", "2.1": "Tienes que cambiar una cita con un centro de formación. Si necesitas dejar constancia, escribe un correo breve con el asunto claro y pide confirmación.", "2.2": "Vas a compartir fotos de una excursión con el grupo. Crea un álbum con acceso restringido y evita publicar un enlace abierto si aparecen personas que no han dado permiso.", "2.3": "Quieres pedir cita en una oficina municipal. Entra desde la web oficial del ayuntamiento y comprueba los requisitos antes de completar el formulario.", "2.4": "Cuatro compañeros preparan una comida vecinal. Usan una lista compartida para asignar quién lleva cada cosa y marcan las tareas cuando están confirmadas.", "2.5": "En un foro alguien interpreta mal tu comentario. Antes de responder en caliente, reformula la idea con respeto y evita convertir el desacuerdo en un ataque personal.", "2.6": "Antes de buscar empleo, revisas las publicaciones públicas de tus redes y ocultas información personal que no quieres que vea cualquier persona.", "3.1": "Necesitas enviar un currículum que conserve el diseño al abrirlo en otros equipos. Exporta una copia en PDF y abre el archivo para comprobar que se ve correctamente.", "3.2": "Preparas una guía para una asociación: resumes las instrucciones con tus palabras, creas un esquema propio y añades un gráfico elaborado por ti.", "3.3": "Para un cartel de una actividad, eliges un icono de una biblioteca de recursos y revisas si permite uso público y si exige mencionar al autor.", "3.4": "Una hoja de cálculo contiene gastos mensuales. Añades una columna para la categoría y un gráfico sencillo para comparar en qué se gasta más.", "3.5": "Quieres crear una invitación accesible. Utiliza texto legible, buen contraste y una descripción escrita de la información importante que aparece en la imagen.", "4.1": "Dejas el portátil en una biblioteca. Bloqueas la pantalla al levantarte y activas las actualizaciones automáticas desde los ajustes del sistema.", "4.2": "Recibes un SMS que dice que un paquete está retenido y pide pagar una pequeña tasa. No pulses el enlace: entra en la web oficial de la empresa escribiendo la dirección tú mismo.", "4.3": "Participas en una videollamada larga. Coloca la pantalla a una altura cómoda, baja el volumen si molesta y haz una pausa entre reuniones.", "4.4": "Un teclado deja de funcionar y vas a comprar otro. Comprueba primero si tiene reparación posible y entrega el que no sirva en un punto de recogida de residuos electrónicos.", "5.1": "El sonido no funciona en una videollamada. Comprueba el volumen, el dispositivo de salida y los permisos de la aplicación, cambiando una cosa cada vez.", "5.2": "Una aplicación nueva te pide acceso a contactos, micrófono y ubicación aunque solo quieres editar una foto. Revisa los permisos y deja activos únicamente los necesarios.", "5.3": "Una asociación quiere reducir las preguntas repetidas de sus usuarios. El grupo propone una página de preguntas frecuentes y prueba el borrador con dos personas.", "5.4": "Puedes descargar archivos, pero te cuesta adjuntarlos a un correo. Practica primero con un documento sin datos personales y anota los pasos que te funcionan."};
const classActivities = {"1.1": "En parejas, encontrad tres opciones para una misma compra cotidiana y acordad qué palabras clave permiten comparar resultados sin quedaros solo con anuncios.", "1.2": "Leed un mensaje ficticio sobre una alerta local. Señalad qué datos faltan y diseñad una comprobación antes de reenviarlo.", "1.3": "Organizad cinco archivos ficticios en carpetas y escribid nombres que permitan reconocerlos sin abrirlos.", "2.1": "Elegid el canal más adecuado para tres casos: una urgencia, una consulta formal y una conversación que necesita intercambio de ideas. Justificad cada elección.", "2.2": "Revisad un ejemplo de enlace compartido y decidid qué permisos necesita una persona lectora y cuáles una editora.", "2.3": "Localizad qué información pediríais antes de solicitar una cita municipal, sin introducir datos reales en clase.", "2.4": "Preparad una lista compartida para organizar una actividad: asignad responsables, fecha límite y estado de cada tarea.", "2.5": "Reescribid un comentario brusco para que transmita la misma queja con respeto y sin divulgar datos privados.", "2.6": "Clasificad una lista de datos personales en tres grupos: público, solo contactos y privado; explicad vuestras decisiones.", "3.1": "Elegid entre DOCX, PDF, JPG y MP3 para cuatro necesidades distintas y explicad por qué el formato encaja con cada una.", "3.2": "Transformad una instrucción extensa en una mini-guía de cinco pasos con título, lista y una conclusión propia.", "3.3": "Analizad tres recursos ficticios con licencias diferentes y decidid cuál usaríais en un cartel público y qué atribución incluiríais.", "3.4": "Con una tabla ficticia de gastos, calculad el total por categoría y proponed qué gráfico facilita más la comparación.", "3.5": "Revisad un cartel con letra pequeña y poco contraste. Proponed tres cambios para que se lea mejor en móvil.", "4.1": "Haced una lista de comprobación para preparar un portátil antes de llevarlo a reparar: copia de seguridad, bloqueo y cierre de sesión.", "4.2": "Subrayad las señales sospechosas de un mensaje de entrega ficticio y acordad una forma segura de verificarlo.", "4.3": "Diseñad una rutina de trabajo digital de una hora que incluya pausas, postura y control de notificaciones.", "4.4": "Proponed qué hacer con un móvil antiguo, unos auriculares rotos y un cargador que ya no funciona; justificad cada opción.", "5.1": "Ordenad posibles comprobaciones para un micrófono que no funciona, de la más sencilla a la que requiere ayuda técnica.", "5.2": "Evaluad los permisos que pediría una app de linterna y decidid cuáles parecen necesarios y cuáles no.", "5.3": "Definid un pequeño problema de vuestro entorno y diseñad una solución digital que pueda probarse en una semana.", "5.4": "Cada persona escribe una habilidad digital que ya domina y otra que quiere mejorar; convertid esta última en una meta observable."};
const applicationTasks = {"1.1": "Escribe una búsqueda para encontrar un curso gratuito de informática para adultos en tu localidad y anota dos criterios para comparar resultados.", "1.2": "Antes de reenviar una noticia, redacta tres preguntas que te ayuden a comprobarla.", "1.3": "Propón una estructura de carpetas para guardar documentos personales sin mezclar información sensible con archivos de uso diario.", "2.1": "Redacta un asunto de correo y dos frases para pedir un cambio de cita de forma clara.", "2.2": "Explica qué permiso darías a una persona que solo necesita leer un documento y por qué.", "2.3": "Enumera dos señales que te ayudarían a distinguir una página oficial de una página imitadora.", "2.4": "Diseña tres tareas para preparar una actividad y asigna a cada una responsable y fecha.", "2.5": "Convierte «No tienes ni idea, lo has hecho fatal» en una respuesta útil que describa el problema sin atacar a nadie.", "2.6": "Indica qué revisarías en una red social antes de empezar una búsqueda de empleo.", "3.1": "Elige un formato para entregar una solicitud que debe imprimirse sin cambiar el diseño y explica cómo verificarías el archivo.", "3.2": "Resume una tarea cotidiana en cinco instrucciones ordenadas y comprensibles.", "3.3": "Escribe la atribución mínima que añadirías si una licencia exige citar al autor y enlazar la fuente.", "3.4": "Sugiere dos columnas que añadirías a una tabla de gastos para analizar mejor los datos.", "3.5": "Indica cómo mejorarías la legibilidad de una imagen con texto vista desde un teléfono.", "4.1": "Anota cuatro medidas que aplicarías antes de dejar tu dispositivo a otra persona para una reparación.", "4.2": "Describe cómo verificarías un supuesto aviso de pago sin utilizar el enlace recibido.", "4.3": "Elige dos cambios que harías en tu espacio de trabajo digital para reducir molestias y distracciones.", "4.4": "Explica dónde consultarías cómo entregar un aparato electrónico que ya no funciona.", "5.1": "Describe en orden tres comprobaciones para resolver un problema de sonido sin cambiar muchas opciones a la vez.", "5.2": "Imagina una app de recetas que pide acceso a tus contactos. Explica qué harías con ese permiso.", "5.3": "Define un problema cercano, una posible solución digital y cómo sabrías si ha funcionado.", "5.4": "Convierte «quiero manejarme mejor con el móvil» en un objetivo concreto que puedas comprobar."};
const topicGrid=document.getElementById("topicGrid");
const learningView=document.getElementById("learningView");
const topicsSection=document.getElementById("temas");
let currentTopic=null,currentBlockIndex=0;

const topicIcons=["⌕","↔","✎","◇","⚙"];


function topicIllustration(index){
  const common = 'class="topic-illustration" viewBox="0 0 320 190" role="img" aria-label="Ilustración del módulo" xmlns="http://www.w3.org/2000/svg"';
  const drawings = [
    `<svg ${common}><rect width="320" height="190" rx="18" fill="#EEF1FF"/><circle cx="257" cy="42" r="24" fill="#FFF4DF"/><rect x="55" y="35" width="166" height="105" rx="10" fill="#FFFFFF" stroke="#1C1B9C" stroke-width="5"/><path d="M55 58H221" stroke="#1C1B9C" stroke-width="5"/><circle cx="70" cy="47" r="3" fill="#EF9C1B"/><circle cx="82" cy="47" r="3" fill="#055DC5"/><rect x="72" y="73" width="98" height="9" rx="4" fill="#C9D4F7"/><rect x="72" y="91" width="124" height="7" rx="3" fill="#E2E5F5"/><rect x="72" y="105" width="79" height="7" rx="3" fill="#E2E5F5"/><circle cx="213" cy="116" r="28" fill="#EF9C1B" fill-opacity=".18" stroke="#EF9C1B" stroke-width="7"/><path d="M233 136l22 22" stroke="#EF9C1B" stroke-width="9" stroke-linecap="round"/><path d="M102 141v13m-25 0h75" stroke="#1C1B9C" stroke-width="5" stroke-linecap="round"/></svg>`,
    `<svg ${common}><rect width="320" height="190" rx="18" fill="#FFF4DF"/><circle cx="75" cy="65" r="27" fill="#DCE6FF"/><circle cx="75" cy="56" r="10" fill="#055DC5"/><path d="M55 83q20-25 40 0v15H55z" fill="#055DC5"/><circle cx="245" cy="65" r="27" fill="#E3DFFF"/><circle cx="245" cy="56" r="10" fill="#1C1B9C"/><path d="M225 83q20-25 40 0v15h-40z" fill="#1C1B9C"/><rect x="106" y="32" width="108" height="67" rx="12" fill="#FFFFFF" stroke="#055DC5" stroke-width="4"/><path d="M120 52h75m-75 14h55" stroke="#A7B9EC" stroke-width="6" stroke-linecap="round"/><path d="M102 118h116l-10 28h-96z" fill="#055DC5"/><rect x="85" y="151" width="150" height="10" rx="5" fill="#1C1B9C"/><path d="M111 108l-18 17m116-17l18 17" stroke="#EF9C1B" stroke-width="5" stroke-linecap="round"/><circle cx="160" cy="119" r="14" fill="#2E7D63"/><path d="m153 119 5 5 10-11" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    `<svg ${common}><rect width="320" height="190" rx="18" fill="#EEF1FF"/><rect x="54" y="30" width="142" height="112" rx="9" fill="#FFFFFF" stroke="#1C1B9C" stroke-width="5"/><path d="M75 54h96" stroke="#055DC5" stroke-width="7" stroke-linecap="round"/><path d="M75 73h83m-83 17h96m-96 17h61" stroke="#D1D7EF" stroke-width="6" stroke-linecap="round"/><rect x="177" y="77" width="89" height="70" rx="9" fill="#FFF4DF" stroke="#EF9C1B" stroke-width="4"/><circle cx="205" cy="100" r="10" fill="#EF9C1B"/><path d="M187 134l20-19 15 12 14-17 17 24z" fill="#055DC5"/><path d="M90 148v9m-20 0h60" stroke="#1C1B9C" stroke-width="5" stroke-linecap="round"/><circle cx="251" cy="42" r="20" fill="#2E7D63"/><path d="m241 42 7 7 13-15" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    `<svg ${common}><rect width="320" height="190" rx="18" fill="#FFF4DF"/><circle cx="160" cy="91" r="57" fill="#FFFFFF" stroke="#2E7D63" stroke-width="7"/><path d="M160 45v92" stroke="#D8E8E0" stroke-width="4"/><rect x="130" y="66" width="60" height="45" rx="8" fill="#EEF1FF" stroke="#1C1B9C" stroke-width="4"/><path d="M143 66v-9a17 17 0 0 1 34 0v9" fill="none" stroke="#1C1B9C" stroke-width="5"/><circle cx="160" cy="86" r="5" fill="#EF9C1B"/><path d="M160 91v9" stroke="#EF9C1B" stroke-width="4" stroke-linecap="round"/><path d="M74 58l-9-9m18-5V31m-18 0 8 8" stroke="#EF9C1B" stroke-width="5" stroke-linecap="round"/><circle cx="247" cy="135" r="20" fill="#DCE6FF"/><path d="M239 135l6 6 11-13" fill="none" stroke="#055DC5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M65 151h78" stroke="#1C1B9C" stroke-width="5" stroke-linecap="round"/></svg>`,
    `<svg ${common}><rect width="320" height="190" rx="18" fill="#EEF1FF"/><rect x="44" y="51" width="130" height="88" rx="9" fill="#FFFFFF" stroke="#055DC5" stroke-width="5"/><path d="M44 71h130" stroke="#055DC5" stroke-width="4"/><circle cx="57" cy="61" r="3" fill="#EF9C1B"/><rect x="61" y="85" width="95" height="7" rx="3" fill="#D1D7EF"/><rect x="61" y="100" width="74" height="7" rx="3" fill="#D1D7EF"/><path d="M90 139v12m-23 0h68" stroke="#055DC5" stroke-width="5" stroke-linecap="round"/><circle cx="223" cy="91" r="38" fill="#FFF4DF" stroke="#EF9C1B" stroke-width="5"/><path d="M223 65v52m-26-26h52m-44-18 36 36m0-36-36 36" stroke="#EF9C1B" stroke-width="4" stroke-linecap="round"/><path d="M258 43l5-9m-22-6 1-10m33 31 10-3" stroke="#EF9C1B" stroke-width="4" stroke-linecap="round"/><circle cx="265" cy="145" r="18" fill="#2E7D63"/><path d="m257 145 6 6 11-13" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  ];
  return drawings[index] || drawings[0];
}

function renderTopics(){
  topicGrid.innerHTML=topics.map((t,i)=>`<button class="topic-card" data-topic="${t.id}">
    <span class="topic-number">${String(t.id).padStart(2,"0")}</span>${topicIllustration(i)}
    <h3>${t.title}</h3><p>${t.short}</p><span class="card-bottom"><span>Explorar tema <span aria-hidden="true">→</span></span><span class="card-count">${t.blocks.length} bloques</span></span>
  </button>`).join("");
  topicGrid.querySelectorAll("[data-topic]").forEach(btn=>btn.addEventListener("click",()=>openTopic(Number(btn.dataset.topic))));
}
function openTopic(id){
  currentTopic=topics.find(t=>t.id===id);currentBlockIndex=0;
  document.getElementById("learningEyebrow").textContent=`MÓDULO ${String(id).padStart(2,"0")}`;
  document.getElementById("learningTitle").textContent=currentTopic.title;
  document.getElementById("learningIntro").textContent=currentTopic.intro;
  document.getElementById("crumbTopic").textContent=`/ ${currentTopic.title}`;
  learningView.classList.remove("hidden");topicsSection.classList.add("hidden");
  document.getElementById("inicio").classList.add("hidden");document.getElementById("ayuda").classList.add("hidden");
  renderLessonList();renderLesson();
  window.scrollTo({top:0,behavior:"smooth"});
}
function keyFor(block){return `${currentTopic.id}-${block.id}`;}
function renderLessonList(){
  const list=document.getElementById("lessonList");
  list.innerHTML=currentTopic.blocks.map((b,i)=>`<button class="lesson-button ${i===currentBlockIndex?"active":""}" data-index="${i}"><span><strong>${b.id}</strong><br>${b.title}</span></button>`).join("");
  list.querySelectorAll("[data-index]").forEach(btn=>btn.addEventListener("click",()=>{currentBlockIndex=Number(btn.dataset.index);renderLessonList();renderLesson();}));
}
let quizSession = null;

const blockQuestionBank = {"1.1":[["Quieres encontrar información fiable sobre una ayuda pública. ¿Qué deberías hacer primero?",["Abrir el primer resultado sin revisarlo.","Usar palabras clave concretas y comparar fuentes.","Elegir la pÃ¡gina con el tÃ­tulo mÃ¡s llamativo."],1,"Las palabras clave y la comparación de fuentes ayudan a encontrar información relevante."],["Al comparar tarifas de móvil, ¿qué dato permite comparar el coste real?",["Solo el precio promocional del primer mes","El precio final, la duración de la oferta y posibles cargos","El número de colores de la web"],1,"El coste real incluye la duración de la promoción y los cargos aplicables."],["Buscas el horario de una farmacia de guardia. ¿Qué fuente conviene priorizar?",["Una publicación antigua sin fecha","Un comentario anónimo","Un buscador o directorio oficial actualizado"],2,"Los horarios pueden cambiar; prioriza fuentes oficiales y actuales."],["Los resultados de una búsqueda incluyen anuncios. ¿Cómo los distingues?",["Revisa las etiquetas de anuncio y compara con resultados no patrocinados","Asume que el primero es siempre el mejor","Elige el que tenga más mayúsculas"],0,"Los anuncios pueden aparecer destacados; conviene identificarlos y comparar alternativas."],["Quieres encontrar el manual de tu lavadora. ¿Qué búsqueda es más precisa?",["Manual","Cosas de casa","Marca y modelo exactos junto a «manual»"],2,"La marca y el modelo ayudan a encontrar el documento correcto."]],"1.2":[["Te llega una noticia sorprendente por mensajería. ¿Qué es lo más recomendable?",["Compartirla rÃ¡pidamente para avisar a todos.","Creerla si muchas personas la han reenviado.","Buscar la fuente original y contrastarla."],2,"Contrastar la fuente, la fecha y otras evidencias ayuda a valorar si la información es fiable."],["Una oferta por mensaje promete un premio si pagas una tasa hoy. ¿Qué debes hacer?",["Pagar para no perderlo","Comprobar la promoción en la web oficial y no usar el enlace del mensaje","Reenviarla a toda tu agenda"],1,"Las ofertas urgentes pueden ser fraudulentas; comprueba la fuente por un canal independiente."],["Una foto de una inundación se comparte como si fuera de tu ciudad. ¿Qué verificas?",["Solo si la imagen es impactante","Cuántos comentarios tiene","La fecha, el lugar y si la imagen aparece en fuentes fiables"],2,"Las imágenes pueden ser antiguas o estar fuera de contexto."],["Un vídeo muestra un supuesto consejo médico. ¿Qué criterio es más útil?",["Contrastar con fuentes sanitarias fiables y comprobar quién lo publica","Creerlo si tiene muchas visualizaciones","Compartirlo y preguntar después"],0,"La popularidad no demuestra fiabilidad, especialmente en asuntos de salud."],["Un titular contradice lo que dice el artículo. ¿Qué haces?",["Compartir solo el titular","Leer el contenido completo y comprobar las evidencias","Suponer que el titular es correcto"],1,"El titular puede simplificar o distorsionar; revisa el contenido y sus fuentes."]],"1.3":[["Guardas facturas y garantías de compras. ¿Qué organización facilita encontrarlas después?",["Guardar todos los archivos juntos con nombres parecidos","Crear carpetas claras por año o tipo y usar nombres descriptivos","Dejarlo todo en Descargas"],1,"Una estructura sencilla y nombres descriptivos ayudan a recuperar los documentos."],["Quieres encontrar la garantía de una compra de hace dos años. ¿Qué sistema ayuda?",["Guardar todas las facturas con el nombre «archivo»","Dejar los justificantes solo en el correo sin buscar","Clasificar los documentos por año y tipo, con nombres claros"],2,"Una clasificación consistente facilita localizar justificantes antiguos."],["Antes de cambiar de móvil, ¿cómo proteges las fotos importantes?",["Haz una copia de seguridad y comprueba que puedes abrirla","Confía solo en que siguen en el móvil antiguo","Envía todas las fotos a un grupo público"],0,"La copia debe existir y poder recuperarse antes de borrar o cambiar de dispositivo."],["Tienes tres archivos llamados «factura.pdf». ¿Qué mejora su identificación?",["No cambiar nada","Renombrarlos con proveedor o fecha, sin incluir datos sensibles innecesarios","Cambiarles la extensión a .jpg"],1,"Los nombres descriptivos distinguen archivos sin alterar su formato."],["¿Qué diferencia hay entre mover un archivo y crear una copia?",["Siempre se crean dos archivos","Moverlo lo publica en Internet","Moverlo cambia su ubicación; copiarlo crea otra versión"],2,"Mover cambia la ubicación del archivo; copiar conserva el original y crea otra copia."]],"2.1":[["Necesitas enviar una solicitud formal a una organización. ¿Qué opción suele ser más adecuada?",["Publicar tus datos en una red social.","Enviar un correo formal por un canal oficial.","Escribir en cualquier chat pÃºblico."],1,"El correo formal suele ser adecuado para solicitudes que requieren un mensaje claro y registro de la comunicación."],["Debes avisar rápidamente de que llegarás diez minutos tarde a una comida. ¿Qué canal encaja mejor?",["Un mensaje directo al grupo implicado","Una carta certificada","Una publicación pública con tu ubicación"],0,"Para un aviso breve, un mensaje al grupo pertinente suele ser suficiente."],["Necesitas dejar constancia de una reclamación a una compañía. ¿Qué conviene hacer?",["Publicar el número de contrato en redes","Usar el canal oficial de reclamaciones y guardar el justificante","Enviar la contraseña de tu cuenta"],1,"El canal oficial y el justificante permiten conservar constancia de la reclamación."],["Quieres explicar una avería compleja a un familiar que necesita hacer preguntas. ¿Qué opción puede ayudar?",["Enviar diez mensajes sin orden","Publicarlo en una red social","Hacer una llamada o videollamada y después resumir los pasos por escrito"],2,"La conversación síncrona permite aclarar dudas en el momento."],["¿Qué dato debes evitar incluir en un mensaje grupal que no lo necesita?",["Una contraseña o información bancaria","La hora de la reunión","El lugar público de encuentro"],0,"Las credenciales y los datos sensibles no deben compartirse en chats grupales."]],"2.2":[["Vas a compartir un documento en la nube. ¿Qué debes revisar?",["Que el enlace permita el acceso a cualquier persona siempre.","Que el documento no tenga tÃ­tulo.","Que los permisos permitan acceder solo a quienes corresponda."],2,"Los permisos de acceso deben ajustarse a las personas que necesitan el documento."],["Compartes un álbum de fotos de vacaciones. ¿Qué ajuste protege mejor la privacidad?",["Hacerlo público para facilitar el acceso","Limitar el acceso a las personas destinatarias","Publicar también la dirección de casa"],1,"El acceso debe limitarse a las personas con las que quieres compartir las imágenes."],["Un enlace compartido permite editar una lista de compras. ¿Qué permiso darías a alguien que solo debe consultarla?",["Administrador","Editor","Solo lectura"],2,"El permiso de lectura permite consultar sin modificar el contenido."],["Una persona ya no necesita acceder a un documento compartido. ¿Qué haces?",["Retiras su acceso si ya no está autorizado","Dejas el acceso abierto indefinidamente","Publicas el enlace para que lo conserve"],0,"Los permisos deben revisarse cuando cambian las necesidades."],["Antes de enviar un enlace de nube, ¿qué deberías comprobar?",["Que el nombre del archivo sea divertido","Quién puede abrirlo y qué puede hacer","Que cualquiera pueda editarlo"],1,"Revisar audiencia y permisos evita accesos o cambios no deseados."]],"2.3":[["Necesitas realizar un trámite con una administración pública. ¿Qué paso es más seguro?",["Localizar y comprobar la web oficial del organismo.","Introducir tus datos en el primer anuncio que aparezca.","Enviar tus documentos a una cuenta desconocida."],0,"Comprueba que estás en el sitio oficial antes de introducir información personal."],["Necesitas pedir cita para renovar un documento oficial. ¿Qué haces primero?",["Introduces tus datos en un anuncio","Pagas a una cuenta personal que te escribe","Localizas la web oficial y revisas los requisitos"],2,"Los trámites deben iniciarse en canales oficiales comprobados."],["Una web imita la apariencia de un organismo y solicita el número de tarjeta para una gestión gratuita. ¿Qué haces?",["No introduces los datos y accedes al organismo por su dirección oficial","Pagas para comprobar si funciona","Envías una foto de tu tarjeta"],0,"La apariencia visual no basta para confirmar que una web sea oficial."],["Al completar un formulario público, ¿qué práctica es prudente?",["Rellenar todos los campos opcionales con información extra","Facilitar solo los datos necesarios y revisar antes de enviar","Guardar la contraseña en un ordenador público"],1,"Limitar los datos a los necesarios reduce la exposición de información personal."],["Un trámite exige identificación electrónica y no sabes cómo usarla. ¿Qué opción es mejor?",["Pedir a un desconocido que use tus credenciales","Enviar la contraseña por mensajería","Consultar la ayuda oficial y no compartir tus credenciales"],2,"Las instrucciones oficiales ayudan a realizar el trámite sin ceder el control de la cuenta."]],"2.4":[["Organizas una comida familiar con otras personas. ¿Qué ayuda a repartir tareas sin duplicar compras?",["Enviar listas diferentes sin avisar","Acordar responsables y actualizar una lista compartida","Dejar que cada persona cambie la lista sin avisar"],1,"Una lista común con responsables evita duplicidades."],["Vais a organizar una excursión y varias personas deben saber la hora y el lugar. ¿Qué herramienta ayuda a coordinarlo?",["Enviar mensajes distintos sin confirmar los datos","Crear un evento compartido con fecha, lugar y participantes","Publicar los teléfonos de todo el grupo"],1,"Un evento compartido centraliza la información y permite que las personas participantes consulten los mismos datos."],["Dos personas modifican por error el mismo archivo. ¿Qué función puede ayudar a recuperar cambios?",["Cambiar el nombre de la carpeta","Consultar el historial de versiones","Publicar el documento en redes"],1,"El historial de versiones puede permitir revisar o recuperar estados anteriores."],["Una persona solo debe revisar una lista de viaje. ¿Qué permiso es suficiente?",["Propietario","Editor con control total","Lectura o comentario, según lo que necesite hacer"],2,"Concede el nivel mínimo de permiso que permita completar la tarea."],["¿Qué acuerdo mejora la colaboración en un documento compartido?",["Definir quién revisa cada parte y cuándo se cierra la versión final","Que varias personas sobrescriban el archivo sin avisar","Crear copias con el mismo nombre"],0,"Los roles y plazos reducen conflictos y facilitan cerrar una versión final."]],"2.5":[["Antes de publicar una crítica en Internet, ¿qué conviene hacer?",["AÃ±adir datos personales de la otra persona.","Escribir insultos para que se entienda la queja.","Explicar el problema con respeto y sin exponer datos privados."],2,"Se puede expresar desacuerdo sin insultar ni revelar datos personales."],["Una reseña en Internet te parece injusta. ¿Qué respuesta es más adecuada?",["Insultar a quien la escribió","Responder con hechos y respeto, sin revelar datos privados","Publicar su teléfono"],1,"Se puede responder a una crítica sin ataques ni exposición de datos personales."],["En un grupo comparten una captura humillante de otra persona. ¿Qué haces?",["La reenvías para que se haga viral","Añades comentarios ofensivos","No la difundes y pides que se retire"],2,"No amplificar el contenido reduce el daño y protege la privacidad."],["Un mensaje escrito puede sonar más brusco de lo que pretendías. ¿Qué ayuda?",["Releerlo y explicar el desacuerdo con claridad y respeto","Añadir mayúsculas y amenazas","Enviar el mensaje sin revisarlo"],0,"Revisar el tono y el contexto reduce malentendidos."],["¿Qué conducta respeta la convivencia digital?",["Compartir datos personales para ganar una discusión","Criticar ideas sin insultar a las personas","Publicar conversaciones privadas sin permiso"],1,"El desacuerdo debe centrarse en las ideas y respetar la privacidad."]],"2.6":[["Quieres cuidar tu identidad digital. ¿Qué acción es útil?",["Revisar quÃ© informaciÃ³n y publicaciones tuyas son pÃºblicas.","Publicar siempre todos tus datos de contacto.","Usar la misma contraseÃ±a en todas tus cuentas."],0,"Revisar publicaciones y ajustes de privacidad ayuda a controlar la información visible sobre ti."],["Encuentras tu dirección en un perfil público. ¿Qué acción es útil?",["Compartirla también en otras redes","Dejarla pública porque ya está publicada","Retirarla si es posible y revisar los ajustes de privacidad"],2,"Reducir la información pública limita la exposición de datos personales."],["Una aplicación pide permiso para publicar en tu nombre. ¿Qué debes hacer?",["Revisar si el permiso es necesario y qué publicaciones podría realizar","Aceptar sin leer","Dar también acceso a tus contactos"],0,"Los permisos deben revisarse antes de conceder acceso a una cuenta."],["¿Qué práctica ayuda a separar tu vida profesional de la personal en Internet?",["Publicar siempre desde una sola cuenta sin revisar la audiencia","Revisar perfiles, audiencia y contenido antes de publicar","Aceptar cualquier etiqueta automáticamente"],1,"Revisar la audiencia y las publicaciones ayuda a gestionar la identidad digital."],["Una amistad publica una foto tuya que no quieres que sea pública. ¿Qué puedes hacer?",["Reenviarla a desconocidos","Publicar sus datos personales","Pedir que la retire y usar las opciones de denuncia o privacidad si hace falta"],2,"Pedir la retirada y utilizar las herramientas de la plataforma son opciones adecuadas."]],"3.1":[["Quieres enviar una fotografía corriente por mensajería. ¿Qué formato suele ser adecuado?",["MP3.","JPG.","WAV."],1,"JPG es un formato habitual para fotografías; MP3 y WAV se utilizan para audio."],["Quieres enviar una foto para imprimirla con buena calidad. ¿Qué deberías considerar?",["La resolución y el formato admitido por el servicio de impresión","Solo el nombre del archivo","Convertirla a MP3"],0,"La calidad y el formato influyen en el resultado de impresión."],["Necesitas enviar un audio de voz por mensajería. ¿Qué formato sería más lógico?",["PDF","Un formato de audio compatible, como MP3","XLSX"],1,"MP3 es un formato de audio habitual; PDF y XLSX tienen otras finalidades."],["Una imagen necesita fondo transparente para colocar un logotipo sobre otro fondo. ¿Qué formato suele servir?",["MP3","CSV","PNG"],2,"PNG admite transparencia y suele utilizarse para gráficos con fondo transparente."],["Envías un documento a alguien que usa un dispositivo distinto. ¿Qué conviene hacer?",["Usar un formato compatible y comprobar que el destinatario puede abrirlo","Cambiar la extensión al azar","Suponer que cualquier programa abre todos los formatos"],0,"La compatibilidad debe comprobarse según el tipo de archivo y el dispositivo."]],"3.2":[["Preparas una invitación para una celebración con una foto de Internet. ¿Qué debes revisar?",["Copiar cualquier imagen porque está disponible","Quitar la marca de agua","Comprobar la licencia o el permiso de uso"],2,"Hay que revisar las condiciones de uso antes de reutilizar materiales."],["Quieres añadir una canción descargada a un vídeo que publicarás en la web. ¿Qué debes comprobar?",["Que la canción sea popular","Que el archivo tenga un nombre corto","Que la licencia permita reutilizarla en ese vídeo"],2,"La música también puede estar protegida por derechos de autor; hay que comprobar las condiciones de reutilización."],["Quieres combinar una receta y una foto en una tarjeta para regalar. ¿Qué mejora el resultado?",["Copiar textos sin revisar","Usar letras muy pequeñas","Organizar los elementos y distinguir claramente título, ingredientes e instrucciones"],2,"Una estructura clara ayuda a comprender el contenido."],["Adaptas instrucciones de una web para que las entienda una persona mayor. ¿Qué haces?",["Reescribes con palabras claras, conservas el sentido y citas la fuente cuando corresponde","Cambias el sentido para que sea más corto","Eliminas las advertencias importantes"],0,"Adaptar el lenguaje debe mejorar la comprensión sin distorsionar la información."],["Al combinar varios recursos digitales, ¿qué debes revisar antes de compartir el resultado?",["Solo el color de fondo","La exactitud, la legibilidad y los derechos de uso de los materiales","Que tenga muchas páginas"],1,"El contenido debe ser correcto, legible y respetar los derechos aplicables."]],"3.3":[["Encuentras una fotografía en Internet para una presentación pública. ¿Qué debes comprobar?",["La licencia y las condiciones de atribuciÃ³n o permiso.","Solo si la imagen se descarga rÃ¡pidamente.","Nada, porque todo lo que estÃ¡ en Internet es libre."],0,"La disponibilidad en Internet no implica permiso para cualquier reutilización."],["Quieres publicar un vídeo con una canción comercial de fondo. ¿Qué debes comprobar?",["Solo si la canción te gusta","Si otras personas ya la han usado","Los permisos y las condiciones que permiten usar esa música en tu vídeo"],2,"Que una canción esté disponible no significa que pueda reutilizarse libremente."],["Una imagen tiene licencia que exige atribución. ¿Qué información debes incluir?",["La autoría y los datos de licencia que correspondan","Solo la fecha en que la descargaste","Un nombre inventado"],0,"La atribución debe reconocer al autor y cumplir las condiciones de la licencia."],["Un amigo te envía una foto privada y quieres publicarla. ¿Qué es prudente?",["Publicarla porque te la envió","Pedir permiso antes de hacerla pública","Añadir su nombre y dirección"],1,"Recibir una foto no implica permiso para publicarla."],["¿Qué afirmación sobre el contenido de Internet es correcta?",["Todo lo que se puede descargar es de dominio público","Basta con cambiar el color para evitar derechos de autor","Debes revisar la licencia o pedir permiso cuando corresponda"],2,"La disponibilidad no elimina los derechos de autor ni las condiciones de uso."]],"3.4":[["Al preparar café en una cafetera programable, ¿qué representa seguir los pasos en el orden correcto?",["Un algoritmo","Una contraseña","Una copia de seguridad"],0,"Un algoritmo es una secuencia ordenada de pasos para lograr un resultado."],["En una aplicación, una alerta aparece solo cuando la batería baja del 10 %. ¿Qué representa el 10 %?",["Una condición que activa una acción","Una copia de seguridad","Un tipo de archivo"],0,"Una condición comprueba si se cumple una situación y puede determinar qué acción se ejecuta."],["Quieres que el móvil te avise si la batería baja del 20 %. ¿Qué tipo de estructura lógica describe «si baja del 20 %, avisar»?",["Una carpeta","Una condición","Un formato de imagen"],1,"La condición ejecuta una acción cuando se cumple un criterio."],["Una receta sale mal porque añadiste un ingrediente al final cuando debía ir al principio. ¿Qué idea ilustra?",["Que el orden nunca importa","Que las instrucciones son opcionales","Que el orden de los pasos puede afectar al resultado"],2,"En muchos procedimientos, cambiar el orden cambia el resultado."],["Una rutina automática falla con una cantidad de ingredientes distinta. ¿Qué conviene hacer?",["Probar casos distintos y ajustar las instrucciones","Usarla solo con el caso que funciona","Eliminar todos los pasos de comprobación"],0,"Probar diferentes entradas permite descubrir límites y corregir errores."]],"4.1":[["¿Cuál es un hábito adecuado para proteger un dispositivo?",["Instalar aplicaciones desde cualquier enlace.","Desactivar todas las actualizaciones para siempre.","Mantenerlo actualizado y usar un bloqueo de pantalla."],2,"Las actualizaciones y el bloqueo de pantalla son medidas básicas de protección."],["Pierdes el móvil en un lugar público. ¿Qué medida previa facilita protegerlo?",["No utilizar ningún bloqueo","Tener bloqueo de pantalla y opciones de localización configuradas","Guardar la contraseña en la carcasa"],1,"El bloqueo dificulta el acceso y la localización puede ayudar a actuar tras una pérdida."],["El móvil ofrece una actualización del sistema en sus ajustes. ¿Qué haces?",["La ignoras para siempre","Descargas un archivo desconocido anunciado en redes","Compruebas que el aviso procede de los ajustes oficiales y sigues las indicaciones"],2,"Las actualizaciones oficiales pueden corregir vulnerabilidades y errores."],["¿Qué reduce el riesgo si se estropea el ordenador con fotos importantes?",["Mantener una copia de seguridad separada y comprobarla","Guardar la única copia en el propio ordenador","Cambiar el nombre de la carpeta"],0,"Una copia separada permite recuperar archivos si falla el equipo principal."],["Antes de instalar una aplicación, ¿qué práctica es más segura?",["Instalarla desde cualquier enlace","Descargarla desde una fuente oficial y revisar los permisos","Desactivar la protección del móvil"],1,"Las fuentes oficiales y la revisión de permisos reducen riesgos."]],"4.2":[["Una web desconocida te pide una copia de tu documento de identidad sin explicar por qué. ¿Qué haces?",["Te detienes y compruebas si la solicitud es legÃ­tima y necesaria.","La envÃ­as inmediatamente.","Publicas el documento para preguntar si es normal."],0,"Antes de compartir datos personales, comprueba la finalidad y la legitimidad de la solicitud."],["Una aplicación de linterna solicita acceso a tus contactos y micrófono. ¿Qué haces?",["Aceptas todos los permisos para que funcione","Deniegas los permisos que no necesita y valoras si la app es fiable","Compartes tu contraseña con la aplicación"],1,"Los permisos deben ser proporcionales a la función de la aplicación."],["Recibes un SMS del banco con un enlace para desbloquear la cuenta. ¿Qué opción es más segura?",["Abrir la app oficial o escribir la dirección conocida, sin usar el enlace del SMS","Responder con tu PIN","Reenviar el mensaje a todo el mundo"],0,"Acceder por un canal conocido evita depender de enlaces potencialmente fraudulentos."],["Una aplicación de linterna solicita acceso a tus contactos y micrófono. ¿Qué haces?",["Aceptas todos los permisos","Deniegas los permisos que no necesita y valoras si la app es fiable","Compartes tu contraseña"],1,"Los permisos deben ser proporcionales a la función de la aplicación."],["Vas a vender tu móvil antiguo. ¿Qué debes hacer antes de entregarlo?",["Dejar abiertas tus cuentas","Dar al comprador la contraseña del correo","Hacer copia de lo necesario, cerrar sesiones y restablecer el dispositivo según las instrucciones"],2,"Preparar el dispositivo protege los datos personales antes de transferirlo."]],"4.3":[["Pasas muchas horas trabajando frente a una pantalla. ¿Qué hábito ayuda al bienestar?",["Mantener la misma postura sin pausas.","Hacer pausas y ajustar la postura y la iluminaciÃ³n.","Subir el brillo al mÃ¡ximo en cualquier situaciÃ³n."],1,"Las pausas y una postura adecuada ayudan a cuidar el bienestar durante el uso de pantallas."],["Te cuesta dormir porque miras el móvil hasta muy tarde. ¿Qué cambio puede ayudar?",["Establecer una hora sin pantalla antes de dormir","Activar todas las notificaciones nocturnas","Dejar el brillo al máximo"],0,"Un límite de uso nocturno puede ayudar a proteger el descanso."],["Tras una hora frente al ordenador notas tensión en cuello y hombros. ¿Qué haces?",["Mantener la postura para acabar antes","Hacer una pausa, moverte y ajustar la postura y la pantalla","Acercar la cara a la pantalla"],1,"Las pausas y los ajustes ergonómicos ayudan a reducir molestias."],["Las notificaciones interrumpen continuamente una conversación familiar. ¿Qué medida puede servir?",["Subir el volumen","Abrir cada aviso en cuanto aparece","Silenciar avisos no urgentes y acordar momentos sin móvil"],2,"Gestionar las notificaciones ayuda a mantener la atención y el equilibrio."],["¿Qué hábito es más saludable durante una jornada larga de pantalla?",["Alternar tareas, hacer pausas y descansar la vista con regularidad","No levantarse nunca","Comer siempre mirando la pantalla"],0,"Las pausas y la variación de actividad favorecen el bienestar."]],"4.4":[["Un móvil antiguo ya no te sirve. ¿Qué opción es más responsable con el medioambiente?",["Tirarlo a la basura convencional.","Dejarlo en la calle junto a un contenedor.","Reutilizarlo si es posible o llevarlo a un punto de recogida adecuado."],2,"La reutilización y la gestión correcta de residuos electrónicos reducen su impacto."],["El móvil antiguo funciona, pero la batería dura poco. ¿Qué opción conviene valorar primero?",["Tirarlo a la basura doméstica","Reparar o cambiar la batería si es viable","Dejarlo en la calle"],1,"Reparar o prolongar la vida útil puede reducir residuos cuando resulta viable."],["¿Dónde debes llevar un dispositivo electrónico que ya no se puede reutilizar?",["A cualquier contenedor de residuos orgánicos","A la acera junto a los contenedores","A un punto de recogida autorizado para residuos electrónicos"],2,"Los residuos electrónicos requieren canales de recogida adecuados."],["Cambias de ordenador y el antiguo todavía funciona. ¿Qué opción puede reducir el impacto ambiental?",["Reutilizarlo, donarlo de forma segura o alargar su vida útil","Guardarlo encendido sin utilizar","Tirarlo con la basura general"],0,"La reutilización prolonga la vida del equipo y puede reducir residuos."],["Antes de donar un móvil, ¿qué debes hacer con tus datos?",["Dejar las cuentas abiertas","Guardar lo necesario, cerrar sesión y borrar los datos de forma segura","Compartir el PIN con la persona receptora"],1,"Hay que proteger la información personal antes de entregar un dispositivo."]],"5.1":[["Una página web no carga. ¿Qué es razonable probar primero?",["Comprobar la direcciÃ³n y la conexiÃ³n, y probar otra pÃ¡gina.","Cambiar muchas configuraciones a la vez.","Descargar un programa desconocido que promete arreglarlo."],0,"Las comprobaciones básicas permiten acotar el problema antes de probar otras soluciones."],["El portátil no se conecta al Wi-Fi, pero el móvil sí. ¿Qué compruebas primero?",["Restableces todos los dispositivos","Instalas una aplicación desconocida","Compruebas el Wi-Fi, el modo avión y los ajustes de red del portátil"],2,"Comparar dispositivos ayuda a acotar el problema antes de cambiar configuraciones avanzadas."],["No oyes a la otra persona en una videollamada. ¿Qué revisas primero?",["El volumen, la salida de audio y la configuración de la aplicación","Compras un ordenador nuevo","Restableces el router sin comprobar nada"],0,"Las comprobaciones básicas suelen identificar muchos problemas de audio."],["La impresora aparece conectada, pero no imprime el documento. ¿Qué compruebas primero?",["Compras otra impresora sin revisar nada","Compruebas el papel, los avisos de error y la cola de impresión","Instalas un programa desconocido que promete repararla"],1,"Revisar los elementos básicos y la cola de impresión ayuda a localizar el problema antes de aplicar medidas drásticas."],["Una aplicación se bloquea repetidamente. ¿Qué enfoque conviene?",["Borrar todos los archivos del móvil","Dar permisos de administrador a cualquier app","Reiniciar la aplicación y comprobar actualizaciones o avisos antes de medidas drásticas"],2,"Las soluciones graduales ayudan a evitar pérdidas y cambios innecesarios."]],"5.2":[["Varias personas necesitan editar el mismo documento. ¿Cómo eliges una herramienta?",["Escoges la mÃ¡s compleja aunque no la conozcas.","Defines la necesidad y comparas opciones adecuadas.","Instalas varias aplicaciones sin probarlas."],1,"La herramienta debe responder a la necesidad real y resultar útil y manejable."],["Quieres controlar los gastos de un viaje con dos amistades. ¿Qué herramienta elegirías?",["Una hoja de cálculo compartida con acceso limitado a las personas implicadas","Una aplicación compleja que nadie sabe usar","Un chat público"],0,"Una hoja compartida puede ayudar a sumar gastos y coordinarse, si el acceso está limitado."],["Necesitas recordar la fecha de renovación de un documento. ¿Qué herramienta puede servir?",["Un editor de vídeo","Un calendario con recordatorio","Un programa de dibujo"],1,"Un calendario con alertas responde directamente a la necesidad de recordar una fecha."],["Antes de elegir una aplicación para compartir gastos, ¿qué debes valorar?",["Solo que tenga muchas funciones","Que sea la más anunciada","Que sea fácil de usar, proteja los datos y permita hacer lo que necesitas"],2,"La elección debe partir de la necesidad, la seguridad y la facilidad de uso."],["Una herramienta pide acceso a contactos aunque solo quieres hacer una lista de gastos. ¿Qué haces?",["Revisas si el permiso es necesario y buscas una alternativa si no lo es","Aceptas todos los permisos","Das acceso a todas tus cuentas"],0,"Los permisos deben ser necesarios para la función que vas a utilizar."]],"5.3":[["Quieres mejorar los avisos de una asociación vecinal. ¿Cuál es un buen primer paso?",["Elegir una app sin definir el problema","Evitar recoger opiniones","Definir la dificultad, probar una solución y pedir opiniones"],2,"Definir el problema y probar una idea permite mejorar la solución."],["Tu asociación pierde avisos de actividades entre muchos mensajes. ¿Qué idea conviene probar?",["Crear más grupos sin normas","Usar un calendario compartido y probarlo con varias personas","Publicar los teléfonos de los miembros"],1,"Un calendario común puede centralizar fechas; probarlo permite comprobar si resuelve el problema."],["Quieres mejorar una ruta de paseo para personas mayores. ¿Qué primer paso es más útil?",["Elegir una app sin consultar a nadie","Cambiar la ruta sin probarla","Preguntar qué dificultades encuentran y definir qué se quiere mejorar"],2,"Conocer la necesidad real orienta la solución y evita decidir por suposiciones."],["Pruebas una nueva lista digital de compras con tu familia. ¿Cómo sabes si funciona?",["Pides opiniones, observas errores y ajustas la lista","Asumes que funciona sin preguntar","Añades funciones que nadie pidió"],0,"La prueba con usuarios reales permite detectar problemas y mejorar la solución."],["Una primera versión de un formulario confunde a las personas. ¿Qué haces?",["Culpas a quien lo usa","Simplificas las instrucciones y vuelves a probarlo","Lo publicas sin cambios"],1,"Un prototipo se mejora a partir de las dificultades observadas."]],"5.4":[["Puedes leer correos, pero no sabes adjuntar un archivo. ¿Qué objetivo de aprendizaje sería más útil?",["Practicar cÃ³mo localizar y adjuntar un documento.","Volver a estudiar tareas que ya dominas sin identificar la dificultad.","Dejar de utilizar el correo definitivamente."],0,"Identificar la tarea concreta que cuesta permite practicar una habilidad específica."],["Sabes recibir fotos por correo, pero no descargarlas en una carpeta. ¿Qué objetivo es más útil?",["Aprender toda la informática de golpe","Dejar de usar el correo","Practicar cómo descargar una foto y localizarla en una carpeta concreta"],2,"Un objetivo específico facilita practicar y comprobar el aprendizaje."],["No sabes activar la verificación en dos pasos de tu correo. ¿Qué recurso conviene usar?",["La guía oficial del servicio y practicar los pasos en tu cuenta","Un vídeo anónimo que pide tu contraseña","Enviar el código de verificación a un desconocido"],0,"La documentación oficial evita exponer credenciales a terceros."],["Después de practicar, ¿cómo compruebas que has aprendido a adjuntar un archivo?",["Solo leyendo la guía","Realizando la tarea sin ayuda y verificando que el archivo llega adjunto","Memorizando el nombre de los botones sin probar"],1,"La práctica autónoma demuestra mejor que puedes realizar la tarea."],["Te cuesta una tarea digital y no sabes por dónde empezar. ¿Qué estrategia ayuda?",["Cambiar de objetivo cada minuto","Intentar todas las funciones a la vez","Dividir la tarea en pasos pequeños y practicar uno cada vez"],2,"Dividir la tarea permite identificar la dificultad y avanzar de forma ordenada."]]};

function startModuleQuiz(topicId, blockId, shuffleOptions=false){
  const topic=topics.find(t=>t.id===topicId);
  const block=topic?.blocks.find(b=>b.id===blockId);
  const source=blockQuestionBank[blockId] || [];
  const questions=source.map((item,index)=>{
    const original=item[1].map((text,optionIndex)=>({text,correct:optionIndex===item[2]}));
    if(shuffleOptions) original.sort(()=>Math.random()-.5);
    return {id:`${blockId}.${index+1}`,title:block?.title || topic.title,question:item[0],options:original,explanation:item[3],selected:null};
  });
  quizSession={topicId,blockId,topic,block,questions,index:0,finished:false};
  renderModuleQuiz();
}

function renderModuleQuiz(){
  const content=document.getElementById("lessonContent");
  const q=quizSession.questions[quizSession.index];
  if(quizSession.finished){
    const score=quizSession.questions.filter(item=>item.options.find(o=>o.text===item.selected)?.correct).length;
    content.innerHTML=`<p class="lesson-kicker">RESULTADO FINAL</p><h3>${quizSession.block.title}</h3>
      <div class="quiz-result-score"><strong>${score} / ${quizSession.questions.length}</strong><span>respuestas acertadas</span></div>
      <ol class="quiz-review-list">${quizSession.questions.map((item,i)=>{const ok=item.options.find(o=>o.text===item.selected)?.correct;const right=item.options.find(o=>o.correct).text;return `<li class="${ok?'quiz-review-correct':'quiz-review-wrong'}"><span class="quiz-review-icon" aria-label="${ok?'Correcta':'Incorrecta'}">${ok?'✓':'✕'}</span><div><strong>${i+1}. ${item.question}</strong><p>Tu respuesta: ${item.selected||'Sin responder'}</p>${ok?'':`<p class="quiz-right-answer">Respuesta correcta: ${right}</p>`}<p class="quiz-explanation">${item.explanation}</p></div></li>`}).join("")}</ol>
      <div class="lesson-actions"><button class="button button-primary" id="retryModuleQuiz">Volver a hacer el ejercicio</button><button class="button button-secondary" id="backToModule">Volver al módulo</button></div>`;
    document.getElementById("retryModuleQuiz").addEventListener("click",()=>startModuleQuiz(quizSession.topicId,quizSession.blockId,true));
    document.getElementById("backToModule").addEventListener("click",()=>openTopic(quizSession.topicId));
    return;
  }
  content.innerHTML=`<p class="lesson-kicker">EJERCICIO · ${quizSession.block.title.toUpperCase()}</p><div class="quiz-progress">Pregunta ${quizSession.index+1} de ${quizSession.questions.length}</div>
    <h3>${q.question}</h3><div class="quiz-options">${q.options.map((o,i)=>`<label class="quiz-option"><input type="radio" name="moduleQuiz" value="${i}" ${q.selected===o.text?'checked':''}> ${o.text}</label>`).join("")}</div>
    <div class="lesson-actions"><button class="button button-primary" id="moduleQuizNext">${quizSession.index===quizSession.questions.length-1?'Ver resultados':'Siguiente →'}</button></div>`;
  content.querySelectorAll('input[name="moduleQuiz"]').forEach(input=>input.addEventListener("change",()=>{q.selected=q.options[Number(input.value)].text;}));
  document.getElementById("moduleQuizNext").addEventListener("click",()=>{
    if(!q.selected){const warn=document.createElement("p");warn.className="quiz-feedback";warn.textContent="Selecciona una respuesta para continuar.";content.appendChild(warn);return;}
    if(quizSession.index<quizSession.questions.length-1){quizSession.index++;renderModuleQuiz();}
    else{quizSession.finished=true;renderModuleQuiz();}
  });
}

function renderLesson(){
  const b=currentTopic.blocks[currentBlockIndex],content=document.getElementById("lessonContent");
  b.example = originalExamples[b.id] || b.example;
  const d=deepContent[b.id] || {why:b.desc,analogy:"Piensa en esta tarea como un proceso cotidiano: definir qué necesitas, elegir una opción y comprobar el resultado.",resolved:[[ "Preparar","Define el objetivo de la tarea."],["Realizar","Sigue los pasos en orden."],["Comprobar","Revisa si el resultado responde a lo que necesitabas."]],practice:"Explica en pareja cómo aplicarías esta habilidad a una situación cotidiana.",task:"Resume la decisión principal que debes tomar en este apartado."};
  content.innerHTML=`<p class="lesson-kicker">${b.id} · ${currentTopic.title.toUpperCase()}</p>
    <h3>${b.title}</h3><p>${b.desc}</p>
    <div class="content-columns">
      <section class="content-panel"><h4>¿Qué significa?</h4><p>${d.why}</p></section>
      <section class="analogy-panel"><h4>Una analogía cotidiana</h4><p>${d.analogy}</p></section>
    </div>
    <div class="concept-box"><strong>CONCEPTO CLAVE</strong><p>${b.concept}</p></div>
    <div class="example-box"><strong>EJEMPLO DEL DÍA A DÍA</strong><p>${b.example}</p></div>
    <h3>Ejemplo resuelto paso a paso</h3>
    <ol class="resolved-steps">${d.resolved.map((s,i)=>`<li><strong>${i+1}. ${s[0]}</strong><p>${s[1]}</p></li>`).join("")}</ol>
    <h3>Tu procedimiento</h3><ol class="subtopic-list">${b.steps.map(s=>`<li>${s}</li>`).join("")}</ol>
    <div class="practice-box"><h4>Actividad para hacer en clase</h4><p>${classActivities[b.id] || d.practice}</p></div>
    <div class="quiz-box"><h4>Ejercicio del módulo</h4><p>Responde a las cinco preguntas de este bloque. Al terminar verás el número de aciertos y la revisión de tus respuestas.</p>
      <button class="button button-primary" id="startModuleQuiz" type="button">Comenzar ejercicio</button>
    </div>
    <div class="task-details task-panel"><h4>Reto breve de aplicación</h4><p>${applicationTasks[b.id] || d.task}</p><p class="muted-note">Intenta resolverlo antes de consultar la respuesta orientativa.</p><details class="solution-details"><summary>Ver solución o posible respuesta correcta</summary><div class="solution-content">${applicationSolutions[b.id] || "<p>Posible respuesta: explica los pasos en orden, justifica tu elección y comprueba que la solución responde a la necesidad planteada.</p>"}</div></details></div>
    <div class="lesson-actions">
      <button class="button button-secondary" id="previousBlock" ${currentBlockIndex===0?"disabled":""}>← Anterior</button>
      <button class="button button-primary" id="nextBlock" ${currentBlockIndex===currentTopic.blocks.length-1?"disabled":""}>Siguiente →</button>
    </div>`;
  document.getElementById("previousBlock").addEventListener("click",()=>changeBlock(-1));
  document.getElementById("nextBlock").addEventListener("click",()=>changeBlock(1));
  document.getElementById("startModuleQuiz").addEventListener("click",()=>startModuleQuiz(currentTopic.id,b.id));
}
function changeBlock(delta){const next=currentBlockIndex+delta;if(next<0||next>=currentTopic.blocks.length)return;currentBlockIndex=next;renderLessonList();renderLesson();document.getElementById("lessonContent").scrollIntoView({behavior:"smooth",block:"start"});}

function showHome(){
  learningView.classList.add("hidden");topicsSection.classList.remove("hidden");document.getElementById("inicio").classList.remove("hidden");document.getElementById("ayuda").classList.remove("hidden");currentTopic=null;window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("backToTopics").addEventListener("click",e=>{e.preventDefault();showHome();document.getElementById("temas").scrollIntoView({behavior:"smooth"});});
document.getElementById("homeLink").addEventListener("click",e=>{e.preventDefault();showHome();});
document.getElementById("homeTextLink").addEventListener("click",e=>{e.preventDefault();showHome();});
renderTopics();

