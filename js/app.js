const topics = [
  {id:1, icon:"⌕", title:"Búsqueda y gestión de información", short:"Buscar, evaluar y organizar información digital.", intro:"Aprende a encontrar información útil, comprobar si es fiable y mantener tus archivos organizados.", blocks:[
    {id:"1.1",title:"Navegar, buscar y filtrar información",desc:"Aprende a buscar información y a utilizar filtros para encontrar resultados más útiles.",concept:"Buscar bien no consiste en abrir el primer resultado, sino en definir qué necesitas y comparar opciones.",example:"Quieres encontrar información sobre ayudas al alquiler. Escribe una búsqueda concreta, revisa quién publica la información y comprueba la fecha.",steps:["Define qué pregunta quieres resolver.","Utiliza palabras clave concretas.","Compara varios resultados y revisa la fuente."],quiz:{question:"Quieres encontrar información fiable sobre una ayuda pública. ¿Qué deberías hacer primero?",options:["Abrir el primer resultado sin revisarlo.", "Usar palabras clave concretas y comparar fuentes.", "Elegir la página con el título más llamativo."],correct:1,explanation:"Las palabras clave y la comparación de fuentes ayudan a encontrar información relevante."}},
    {id:"1.2",title:"Evaluar información y contenidos",desc:"Aprende a valorar la fiabilidad de páginas, imágenes, vídeos y publicaciones.",concept:"Que una información se comparta mucho no significa que sea cierta.",example:"Recibes por mensajería una noticia alarmante. Antes de compartirla, busca la publicación original y comprueba si otros medios fiables la confirman.",steps:["Localiza la fuente original.","Comprueba autoría, fecha y evidencias.","Contrasta con otras fuentes fiables."],quiz:{question:"Te llega una noticia sorprendente por mensajería. ¿Qué es lo más recomendable?",options:["Compartirla rápidamente para avisar a todos.", "Creerla si muchas personas la han reenviado.", "Buscar la fuente original y contrastarla."],correct:2,explanation:"Contrastar la fuente, la fecha y otras evidencias ayuda a valorar si la información es fiable."}},
    {id:"1.3",title:"Gestionar datos e información",desc:"Organiza archivos, carpetas y contenidos para encontrarlos cuando los necesites.",concept:"Una buena organización permite recuperar la información sin tener que empezar de cero.",example:"Crea una carpeta para un curso, subcarpetas para cada tema y nombres claros para los documentos.",steps:["Crea una estructura de carpetas sencilla.","Utiliza nombres descriptivos y fechas cuando ayuden.","Guarda copias de seguridad de lo importante."],quiz:{question:"¿Qué organización facilita encontrar después un documento del curso?",options:["Guardarlo en una carpeta con un nombre claro.", "Dejarlo en la carpeta de descargas sin cambiar el nombre.", "Guardar todos los archivos juntos con nombres parecidos."],correct:0,explanation:"Las carpetas y los nombres descriptivos permiten recuperar los archivos con más facilidad."}}
  ]},
  {id:2,icon:"↔",title:"Comunicación y colaboración",short:"Comunicarte, compartir y colaborar con otras personas.",intro:"Descubre cómo comunicarte en línea, compartir archivos y cuidar tu identidad y comportamiento digital.",blocks:[
    {id:"2.1",title:"Interactuar a través de tecnologías digitales",desc:"Elige herramientas de comunicación según lo que necesites hacer.",concept:"No todas las herramientas sirven para lo mismo: un mensaje rápido no sustituye siempre a una reunión o a un correo formal.",example:"Para avisar de un cambio breve puedes usar mensajería; para enviar una solicitud formal, quizá sea mejor el correo electrónico.",steps:["Piensa qué necesitas comunicar.","Valora la urgencia y el tipo de información.","Elige una herramienta adecuada y segura."],quiz:{question:"Necesitas enviar una solicitud formal a una organización. ¿Qué opción suele ser más adecuada?",options:["Publicar tus datos en una red social.", "Enviar un correo formal por un canal oficial.", "Escribir en cualquier chat público."],correct:1,explanation:"El correo formal suele ser adecuado para solicitudes que requieren un mensaje claro y registro de la comunicación."}},
    {id:"2.2",title:"Compartir a través de tecnologías digitales",desc:"Comparte enlaces y archivos teniendo en cuenta quién puede acceder a ellos.",concept:"Compartir un enlace no siempre significa que solo lo verá la persona destinataria.",example:"Antes de enviar un documento alojado en la nube, comprueba si el acceso está limitado a las personas adecuadas.",steps:["Comprueba el contenido que vas a compartir.","Revisa los permisos del enlace.","Envía el enlace por un canal apropiado."],quiz:{question:"Vas a compartir un documento en la nube. ¿Qué debes revisar?",options:["Que el enlace permita el acceso a cualquier persona siempre.", "Que el documento no tenga título.", "Que los permisos permitan acceder solo a quienes corresponda."],correct:2,explanation:"Los permisos de acceso deben ajustarse a las personas que necesitan el documento."}},
    {id:"2.3",title:"Participación ciudadana digital",desc:"Utiliza servicios digitales para informarte y realizar gestiones ciudadanas.",concept:"Los trámites digitales deben realizarse desde páginas oficiales y protegiendo tus datos.",example:"Para consultar una gestión pública, localiza la web oficial del organismo antes de introducir datos personales.",steps:["Busca el organismo competente.","Verifica que estás en el sitio oficial.","Lee los requisitos antes de enviar información."],quiz:{question:"Necesitas realizar un trámite con una administración pública. ¿Qué paso es más seguro?",options:["Localizar y comprobar la web oficial del organismo.", "Introducir tus datos en el primer anuncio que aparezca.", "Enviar tus documentos a una cuenta desconocida."],correct:0,explanation:"Comprueba que estás en el sitio oficial antes de introducir información personal."}},
    {id:"2.4",title:"Colaborar mediante tecnologías digitales",desc:"Trabaja con otras personas usando documentos compartidos y herramientas colaborativas.",concept:"La colaboración digital funciona mejor cuando se acuerdan permisos, tareas y versiones.",example:"Un grupo prepara un documento compartido y acuerda quién redacta cada apartado.",steps:["Define el objetivo y las tareas.","Comparte el archivo con los permisos necesarios.","Revisa los cambios y acuerda la versión final."],quiz:{question:"Un grupo debe editar un mismo documento. ¿Qué ayuda a colaborar mejor?",options:["Enviar copias distintas sin indicar cuál es la última.", "Acordar tareas y compartir un archivo con permisos adecuados.", "Permitir que cualquiera cambie los permisos sin avisar."],correct:1,explanation:"Acordar tareas, permisos y versión de trabajo reduce confusiones."}},
    {id:"2.5",title:"Comportamiento en la red",desc:"Comunícate con respeto y ten en cuenta que tus mensajes pueden dejar huella.",concept:"Detrás de cada perfil hay una persona; el tono y el contexto importan también en Internet.",example:"Antes de publicar una crítica, explica el problema sin insultos y evita difundir datos personales de terceros.",steps:["Lee el mensaje antes de enviarlo.","Respeta las diferencias y la privacidad.","No difundas contenido humillante o no verificado."],quiz:{question:"Antes de publicar una crítica en Internet, ¿qué conviene hacer?",options:["Añadir datos personales de la otra persona.", "Escribir insultos para que se entienda la queja.", "Explicar el problema con respeto y sin exponer datos privados."],correct:2,explanation:"Se puede expresar desacuerdo sin insultar ni revelar datos personales."}},
    {id:"2.6",title:"Gestionar la identidad digital",desc:"Comprende qué información sobre ti puede quedar visible en Internet.",concept:"Tu identidad digital se construye con la información que publicas y con la que otras personas publican sobre ti.",example:"Busca tu nombre en Internet y revisa qué resultados públicos aparecen; ajusta la privacidad de tus cuentas cuando sea necesario.",steps:["Revisa perfiles y publicaciones públicas.","Configura la privacidad de tus cuentas.","Piensa antes de publicar información personal."],quiz:{question:"Quieres cuidar tu identidad digital. ¿Qué acción es útil?",options:["Revisar qué información y publicaciones tuyas son públicas.", "Publicar siempre todos tus datos de contacto.", "Usar la misma contraseña en todas tus cuentas."],correct:0,explanation:"Revisar publicaciones y ajustes de privacidad ayuda a controlar la información visible sobre ti."}}
  ]},
  {id:3,icon:"✎",title:"Creación de contenidos digitales",short:"Crear, editar y combinar documentos y contenidos.",intro:"Aprende a elegir formatos, mejorar textos, editar imágenes, reutilizar materiales con permiso y dar tus primeros pasos en programación.",blocks:[
    {id:"3.1",title:"Desarrollo de contenidos",desc:"Crea y modifica documentos, imágenes, audio y vídeo según la finalidad.",concept:"El formato adecuado depende del uso, la calidad que necesitas, la compatibilidad y el tamaño del archivo.",example:"Para compartir una fotografía suele ser útil JPG; PNG puede ser adecuado si necesitas transparencia; MP3 se usa habitualmente para audio y MP4 para vídeo.",steps:["Decide para qué utilizarás el archivo.","Valora calidad, tamaño y compatibilidad.","Comprueba que la persona destinataria podrá abrirlo."],quiz:{question:"Quieres enviar una fotografía corriente por mensajería. ¿Qué formato suele ser adecuado?",options:["MP3.", "JPG.", "WAV."],correct:1,explanation:"JPG es un formato habitual para fotografías; MP3 y WAV se utilizan para audio."}},
    {id:"3.2",title:"Integración y reelaboración de contenido",desc:"Combina materiales y transforma contenidos para crear un resultado nuevo.",concept:"Integrar contenidos significa combinar recursos; hacerlo responsablemente exige revisar su procedencia y las condiciones de uso.",example:"Para una presentación, combina tus propias explicaciones con un gráfico propio y una imagen cuya licencia permita el uso previsto.",steps:["Define el objetivo del nuevo contenido.","Selecciona materiales pertinentes y autorizados.","Organiza, adapta y revisa el resultado."],quiz:{question:"Vas a crear una presentación con texto e imágenes de otras fuentes. ¿Qué deberías hacer?",options:["Copiar cualquier material porque está en Internet.", "No revisar de dónde proceden las imágenes.", "Seleccionar materiales pertinentes y comprobar sus condiciones de uso."],correct:2,explanation:"Hay que revisar la procedencia y las condiciones de uso antes de reutilizar materiales."}},
    {id:"3.3",title:"Derechos de autor y licencias",desc:"Aprende a reconocer cuándo puedes reutilizar textos, imágenes, música y otros recursos.",concept:"Que un contenido esté disponible en Internet no significa que sea libre de utilizar.",example:"Antes de incorporar una fotografía a una presentación pública, revisa su licencia y cumple las condiciones de atribución.",steps:["Identifica al autor y la fuente.","Comprueba la licencia o solicita permiso.","Incluye la atribución que corresponda."],quiz:{question:"Encuentras una fotografía en Internet para una presentación pública. ¿Qué debes comprobar?",options:["La licencia y las condiciones de atribución o permiso.", "Solo si la imagen se descarga rápidamente.", "Nada, porque todo lo que está en Internet es libre."],correct:0,explanation:"La disponibilidad en Internet no implica permiso para cualquier reutilización."}},
    {id:"3.4",title:"Programación",desc:"Conoce los algoritmos y las instrucciones que permiten resolver tareas con un ordenador.",concept:"Un algoritmo es una secuencia ordenada de pasos para resolver un problema.",example:"Para preparar un té: calentar agua, poner la bolsita, esperar y retirar la bolsita. Cambiar el orden puede cambiar el resultado.",steps:["Describe el problema.","Divide la solución en pasos claros.","Comprueba el orden y prueba el resultado."],quiz:{question:"¿Qué describe mejor un algoritmo?",options:["Una imagen guardada en el ordenador.", "Una secuencia ordenada de pasos para resolver una tarea.", "Un dispositivo para conectarse a Internet."],correct:1,explanation:"Un algoritmo organiza pasos para alcanzar un resultado o resolver un problema."}}
  ]},
  {id:4,icon:"◇",title:"Seguridad",short:"Proteger dispositivos, datos, bienestar y entorno.",intro:"Adquiere hábitos para proteger tus dispositivos y datos personales, cuidar tu bienestar y reducir el impacto ambiental.",blocks:[
    {id:"4.1",title:"Protección de dispositivos",desc:"Adopta medidas para reducir el riesgo de pérdida, daño o acceso no autorizado.",concept:"La seguridad no depende de una sola herramienta: combina actualizaciones, bloqueo de pantalla, copias de seguridad y precaución.",example:"Si recibes un aviso para actualizar el móvil, comprueba que procede de los ajustes oficiales del dispositivo y realiza la actualización cuando sea apropiado.",steps:["Mantén sistema y aplicaciones actualizados.","Usa bloqueo de pantalla y contraseñas robustas.","Haz copias de seguridad y descarga desde fuentes oficiales."],quiz:{question:"¿Cuál es un hábito adecuado para proteger un dispositivo?",options:["Instalar aplicaciones desde cualquier enlace.", "Desactivar todas las actualizaciones para siempre.", "Mantenerlo actualizado y usar un bloqueo de pantalla."],correct:2,explanation:"Las actualizaciones y el bloqueo de pantalla son medidas básicas de protección."}},
    {id:"4.2",title:"Protección de datos y privacidad",desc:"Controla qué datos compartes y con quién.",concept:"Los datos personales pueden identificarte o revelar aspectos de tu vida; compártelos solo cuando sea necesario.",example:"Una web desconocida solicita una foto del documento de identidad para descargar un archivo. Detente y comprueba si la solicitud tiene una razón legítima.",steps:["Revisa qué datos solicita el servicio.","Comprueba la finalidad y la legitimidad.","Limita la información y los permisos que compartes."],quiz:{question:"Una web desconocida te pide una copia de tu documento de identidad sin explicar por qué. ¿Qué haces?",options:["Te detienes y compruebas si la solicitud es legítima y necesaria.", "La envías inmediatamente.", "Publicas el documento para preguntar si es normal."],correct:0,explanation:"Antes de compartir datos personales, comprueba la finalidad y la legitimidad de la solicitud."}},
    {id:"4.3",title:"Protección de la salud y el bienestar",desc:"Utiliza la tecnología cuidando tu bienestar físico, mental y social.",concept:"El uso saludable de la tecnología incluye pausas, ergonomía y equilibrio entre actividades digitales y no digitales.",example:"Si trabajas mucho tiempo frente a una pantalla, programa pausas, cambia de postura y ajusta la iluminación.",steps:["Ajusta la postura y la pantalla.","Haz pausas periódicas.","Cuida el descanso y los límites de uso."],quiz:{question:"Pasas muchas horas trabajando frente a una pantalla. ¿Qué hábito ayuda al bienestar?",options:["Mantener la misma postura sin pausas.", "Hacer pausas y ajustar la postura y la iluminación.", "Subir el brillo al máximo en cualquier situación."],correct:1,explanation:"Las pausas y una postura adecuada ayudan a cuidar el bienestar durante el uso de pantallas."}},
    {id:"4.4",title:"Protección medioambiental",desc:"Reduce el impacto ambiental del uso de dispositivos y servicios digitales.",concept:"Alargar la vida útil de los dispositivos y gestionar correctamente los residuos electrónicos ayuda a reducir su impacto.",example:"Si un teléfono funciona bien, valora repararlo o reutilizarlo antes de sustituirlo; lleva los aparatos inservibles a un punto autorizado.",steps:["Cuida y repara los dispositivos cuando sea viable.","Reduce consumos innecesarios.","Entrega los residuos electrónicos en puntos adecuados."],quiz:{question:"Un móvil antiguo ya no te sirve. ¿Qué opción es más responsable con el medioambiente?",options:["Tirarlo a la basura convencional.", "Dejarlo en la calle junto a un contenedor.", "Reutilizarlo si es posible o llevarlo a un punto de recogida adecuado."],correct:2,explanation:"La reutilización y la gestión correcta de residuos electrónicos reducen su impacto."}}
  ]},
  {id:5,icon:"⚙",title:"Resolución de problemas",short:"Resolver dificultades y elegir soluciones tecnológicas.",intro:"Aprende a solucionar problemas técnicos comunes, reconocer necesidades y usar la tecnología de forma creativa.",blocks:[
    {id:"5.1",title:"Resolución de problemas técnicos",desc:"Sigue un orden para identificar y resolver problemas de navegación, audio, vídeo o conexión.",concept:"Antes de cambiar muchas opciones a la vez, prueba soluciones sencillas una por una.",example:"Una web muestra un error. Comprueba la dirección, actualiza la página y prueba otra web. Si el error persiste solo en esa página, puede ser un problema del servicio.",steps:["Describe el problema y cuándo aparece.","Comprueba conexión, dirección y ajustes básicos.","Prueba una solución cada vez y pide ayuda si continúa."],quiz:{question:"Una página web no carga. ¿Qué es razonable probar primero?",options:["Comprobar la dirección y la conexión, y probar otra página.", "Cambiar muchas configuraciones a la vez.", "Descargar un programa desconocido que promete arreglarlo."],correct:0,explanation:"Las comprobaciones básicas permiten acotar el problema antes de probar otras soluciones."}},
    {id:"5.2",title:"Identificar necesidades y respuestas tecnológicas",desc:"Elige una herramienta digital según la necesidad real que quieras resolver.",concept:"La mejor herramienta es la que resuelve la necesidad, resulta accesible y puedes utilizar de forma segura.",example:"Si varias personas deben revisar un documento, una herramienta colaborativa puede ser más útil que enviarse muchas versiones por correo.",steps:["Define la necesidad concreta.","Compara opciones, facilidad y accesibilidad.","Prueba la solución y valora si funciona."],quiz:{question:"Varias personas necesitan editar el mismo documento. ¿Cómo eliges una herramienta?",options:["Escoges la más compleja aunque no la conozcas.", "Defines la necesidad y comparas opciones adecuadas.", "Instalas varias aplicaciones sin probarlas."],correct:1,explanation:"La herramienta debe responder a la necesidad real y resultar útil y manejable."}},
    {id:"5.3",title:"Uso creativo de la tecnología digital",desc:"Utiliza herramientas digitales para explorar ideas, crear y colaborar.",concept:"La creatividad digital consiste en usar herramientas para proponer, probar y mejorar soluciones.",example:"Un grupo crea una propuesta para mejorar un servicio local, comparte ideas en un documento y elabora un prototipo sencillo.",steps:["Identifica un reto o una pregunta.","Propón varias ideas y elige una para probar.","Recoge opiniones y mejora la propuesta."],quiz:{question:"Quieres mejorar una actividad de tu comunidad usando tecnología. ¿Cuál es un buen primer paso?",options:["Elegir una aplicación sin definir el problema.", "Evitar recoger opiniones.", "Definir el reto, proponer ideas y probar una solución."],correct:2,explanation:"Definir el reto y probar una idea permite mejorarla con la experiencia y las opiniones."}},
    {id:"5.4",title:"Identificar lagunas en las competencias digitales",desc:"Reconoce qué necesitas aprender y busca recursos para mejorar.",concept:"Identificar una dificultad concreta permite elegir mejor qué practicar y cómo medir el progreso.",example:"Si puedes leer un correo pero no adjuntar un archivo, tu siguiente objetivo de aprendizaje puede ser practicar cómo localizar y adjuntar documentos.",steps:["Identifica la tarea que te resulta difícil.","Divide la tarea en pasos y localiza una guía fiable.","Practica y vuelve a comprobar si puedes hacerlo sin ayuda."],quiz:{question:"Puedes leer correos, pero no sabes adjuntar un archivo. ¿Qué objetivo de aprendizaje sería más útil?",options:["Practicar cómo localizar y adjuntar un documento.", "Volver a estudiar tareas que ya dominas sin identificar la dificultad.", "Dejar de utilizar el correo definitivamente."],correct:0,explanation:"Identificar la tarea concreta que cuesta permite practicar una habilidad específica."}}
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

const questionBank = [[["Necesitas encontrar la normativa vigente sobre una ayuda pública. ¿Qué estrategia de búsqueda es más eficaz?",["Buscar solo «ayudas» y abrir el primer resultado","Usar términos concretos, añadir el organismo y comprobar la fecha","Elegir el resultado con más imágenes"],1,"Los términos concretos y la comprobación de fecha y organismo ayudan a localizar información vigente."],["Una página presenta una estadística, pero no cita de dónde procede. ¿Qué haces antes de utilizarla?",["La compartes porque parece profesional","La copias y añades la dirección de la página","Buscas el dato original y compruebas metodología, fecha y fuente"],2,"Para valorar un dato hay que rastrear su origen y revisar el contexto en el que se obtuvo."],["Dos webs ofrecen cifras diferentes sobre el mismo asunto. ¿Cuál es el siguiente paso más razonable?",["Comparar fechas, definiciones y fuentes originales","Elegir la cifra más alta","Promediarlas sin revisar su procedencia"],0,"Las diferencias pueden deberse a fechas, definiciones o métodos distintos; hay que revisar el contexto."],["Quieres localizar un PDF dentro de una web concreta. ¿Qué búsqueda puede ayudarte en un buscador que admita operadores avanzados?",["Escribir una frase muy general","Usar palabras clave y el operador site: junto con filetype:pdf","Buscar solo por el color de la página"],1,"En los buscadores que admiten estos operadores, site: limita los resultados a un sitio y filetype:pdf busca archivos PDF. Si el buscador no los admite, utiliza sus filtros."],["Descargas documentos de varios proyectos. ¿Qué sistema facilita encontrarlos meses después?",["Guardar todos en Descargas","Nombrarlos «documento nuevo»","Crear carpetas por proyecto y usar nombres descriptivos con fecha cuando convenga"],2,"Una estructura coherente y nombres significativos facilitan recuperar archivos."],["Recibes una noticia antigua que se comparte como si fuera de hoy. ¿Qué indicio debes revisar?",["La fecha de publicación y el contexto original","El número de emojis","El tamaño de la imagen"],0,"La fecha y el contexto permiten detectar contenidos antiguos presentados como actuales."],["Un gráfico parece demostrar una conclusión contundente. ¿Qué conviene comprobar?",["Solo el título","La escala, las unidades, el origen de los datos y qué periodo representa","Si sus colores son atractivos"],1,"La escala y el contexto pueden cambiar la interpretación de un gráfico."],["¿Cuál es una práctica adecuada para conservar archivos importantes?",["Tener una única copia en el ordenador","Enviar todos los archivos a un chat público","Mantener copias de seguridad separadas y comprobar que se pueden recuperar"],2,"Una copia de seguridad debe estar disponible y poder restaurarse si se pierde el original."],["Una web solicita instalar una extensión para mostrar un documento sencillo. ¿Qué haces?",["Compruebas si es necesaria, quién la publica y si existe una alternativa segura","La instalas inmediatamente","Desactivas las protecciones del navegador"],0,"Conviene verificar la necesidad y la procedencia antes de instalar software."],["¿Qué diferencia hay entre guardar un marcador y descargar una página?",["Son exactamente lo mismo","El marcador guarda un acceso a la dirección; la descarga conserva una copia del contenido","El marcador siempre conserva el contenido aunque desaparezca la web"],1,"Un marcador facilita volver a una dirección, pero no garantiza conservar la página."]],[["Tienes que enviar una reclamación formal y conservar constancia del mensaje. ¿Qué canal suele ser más apropiado?",["Un comentario público en redes sociales","Un chat grupal sin registro claro","El registro electrónico o canal oficial de reclamaciones que permita conservar un justificante"],2,"Un registro o canal oficial que emite justificante permite conservar constancia de la presentación. Un correo ordinario no siempre equivale a una presentación formal registrada."],["Compartes un documento con datos de clientes con una compañera. ¿Qué permiso es más adecuado?",["Dar acceso solo a la persona autorizada y limitarlo a lo necesario","Activar acceso público para cualquiera","Publicar el enlace en redes"],0,"El acceso debe limitarse a las personas que lo necesitan para realizar su tarea."],["Un enlace de nube dice «cualquier persona con el enlace puede editar». ¿Qué riesgo implica?",["Nadie podrá abrir el archivo","Personas que reciban o reenvíen el enlace podrían modificarlo","El archivo se convierte automáticamente en PDF"],1,"Los enlaces amplios pueden permitir acceso a personas no previstas, incluso con permisos de edición."],["Necesitas hacer un trámite online en nombre de un familiar. ¿Qué debes comprobar primero?",["Que la web tenga muchos anuncios","Que puedes usar sus credenciales sin permiso","Qué procedimiento de representación admite el organismo y qué autorización requiere"],2,"Los trámites en nombre de otra persona deben respetar el procedimiento y la autorización aplicables."],["Un equipo edita un informe compartido y aparecen cambios contradictorios. ¿Qué medida ayuda más?",["Acordar responsables, reglas de edición y revisión del historial de versiones","Crear copias nuevas sin avisar","Borrar los comentarios de todo el mundo"],0,"Los acuerdos de edición y el historial ayudan a coordinar cambios y recuperar versiones."],["Una persona publica en un grupo una captura con el teléfono de otra. ¿Qué respuesta es más responsable?",["Reenviarla para que todos estén avisados","Pedir que se retire y evitar difundir los datos personales","Descargarla por si acaso"],1,"No amplificar la difusión y solicitar la retirada protege mejor la privacidad."],["¿Qué práctica ayuda a cuidar la identidad digital profesional?",["Usar el mismo perfil para publicar cualquier contenido sin revisar","Aceptar todas las etiquetas automáticamente","Revisar la información pública y separar, cuando convenga, los ámbitos profesional y personal"],2,"Revisar publicaciones y la información visible permite gestionar la imagen profesional."],["Recibes un mensaje de un supuesto compañero que pide una contraseña «por urgencia». ¿Qué haces?",["Verificas la petición por otro canal y no compartes la contraseña","La envías si conoce tu nombre","La publicas en el grupo para confirmar"],0,"Las contraseñas no deben compartirse; las peticiones urgentes deben verificarse por un canal independiente."],["Una reunión online incluye información confidencial. ¿Qué decisión es adecuada?",["Publicar el enlace en una red abierta","Usar acceso restringido y compartir el enlace solo con participantes","Grabarla y subirla sin avisar"],1,"Controlar el acceso reduce la exposición de la reunión y de la información tratada."],["Quieres expresar desacuerdo en un foro de trabajo. ¿Qué mensaje es más constructivo?",["«No tienes ni idea»","«Voy a publicar tus datos para demostrarlo»","«No comparto esa propuesta por estos motivos; sugiero revisar estas alternativas»"],2,"Argumentar sobre la propuesta y ofrecer alternativas evita ataques personales."]],[["Debes distribuir la versión final de un informe para lectura e impresión, procurando que conserve su diseño en distintos equipos. ¿Qué formato suele convenir?",["PDF","MP3","CSV para cualquier tipo de documento"],0,"PDF suele ser adecuado para distribuir la versión final conservando su presentación. No impide por sí solo que el archivo pueda editarse."],["¿Cuándo puede ser preferible PNG frente a JPG?",["Para guardar una pista de audio","Cuando necesitas conservar transparencia en una imagen","Para crear una hoja de cálculo"],1,"PNG admite transparencia; JPG se usa habitualmente para fotografías sin transparencia."],["Vas a reutilizar una imagen con licencia Creative Commons que exige atribución. ¿Qué debes hacer?",["Quitar el nombre del autor","Suponer que cualquier modificación está permitida","Indicar la autoría y cumplir las condiciones concretas de la licencia"],2,"Las licencias tienen condiciones específicas que deben respetarse, incluida la atribución cuando se exige."],["Has copiado texto de una fuente para un trabajo. ¿Qué práctica es correcta?",["Identificar la fuente y distinguir claramente las citas de tus propias ideas","Cambiar algunas palabras y presentarlo como propio","Borrar el enlace original"],0,"Citar las fuentes permite reconocer la autoría y distinguir el material ajeno del propio."],["Un documento va dirigido a personas que usan lectores de pantalla. ¿Qué mejora la accesibilidad?",["Usar solo colores para distinguir secciones","Aplicar estilos de título, texto alternativo a imágenes informativas y enlaces descriptivos","Convertir todo el texto en una imagen"],1,"La estructura semántica y los textos alternativos facilitan el acceso con tecnologías de apoyo."],["Quieres combinar datos de una hoja de cálculo con un gráfico para una presentación. ¿Qué debes hacer antes?",["Elegir colores al azar","Ocultar el origen de los datos","Revisar los datos, etiquetas, unidades y el mensaje que representa el gráfico"],2,"Un gráfico debe representar correctamente los datos y permitir interpretar sus unidades y contexto."],["En un algoritmo, una condición «si ocurre A, haz B; si no, haz C» sirve para…",["Tomar decisiones según se cumpla una condición","Cambiar el tamaño físico del ordenador","Guardar automáticamente todos los archivos"],0,"Las estructuras condicionales permiten elegir acciones según una condición."],["Tu programa funciona con un ejemplo, pero falla con otros datos. ¿Qué estrategia es mejor?",["Probar solo el caso que ya funciona","Probar casos normales, límites y entradas inesperadas y corregir el error","Eliminar las comprobaciones"],1,"Probar casos variados ayuda a descubrir fallos que no aparecen en el ejemplo inicial."],["¿Qué dato debe acompañar a una tabla para que sus cifras se interpreten correctamente?",["Solo un título creativo","Una imagen decorativa","Encabezados claros, unidades y, cuando proceda, fuente y fecha"],2,"Los encabezados, unidades, fuente y fecha dan contexto a los datos."],["Vas a publicar un vídeo con música de fondo. ¿Qué deberías revisar?",["Si tienes derechos o permiso para usar la música en ese contexto","Solo si la música suena bien","Si puedes borrar el nombre del artista"],0,"La música puede estar protegida; hay que comprobar permisos y condiciones de uso."]],[["El sistema operativo de tu portátil ofrece una actualización de seguridad. ¿Qué es recomendable?",["Ignorar todas las actualizaciones","Comprobar que procede del sistema oficial e instalarla siguiendo las indicaciones","Descargar un archivo de una web desconocida que promete actualizar más rápido"],1,"Las actualizaciones oficiales corrigen fallos y mejoran la protección."],["Recibes un SMS de entrega que exige pagar desde un enlace acortado. ¿Qué haces?",["Introduces los datos de tarjeta para evitar la devolución","Reenvías el enlace a tus contactos","Compruebas el envío en la web o app oficial escribiendo tú la dirección"],2,"Verificar por un canal oficial evita depender de enlaces potencialmente fraudulentos."],["¿Cuál es una estrategia sólida para proteger cuentas importantes?",["Contraseñas únicas y robustas, gestor de contraseñas y autenticación multifactor cuando esté disponible","La misma contraseña para todo","Una contraseña basada solo en el nombre de la mascota"],0,"La reutilización facilita que una filtración afecte a varias cuentas; la autenticación adicional añade protección."],["Una aplicación de linterna solicita acceso a contactos, micrófono y ubicación. ¿Qué decisión es prudente?",["Aceptar todos los permisos porque lo solicita","Denegar los permisos que no sean necesarios y revisar la legitimidad de la app","Compartir también la contraseña del correo"],1,"Los permisos deben corresponder a la función de la aplicación."],["Trabajas en una cafetería usando una red Wi-Fi pública. ¿Qué práctica prudente reduce la exposición de tus datos?",["Realizar cualquier operación sensible sin comprobar la conexión","Desactivar el bloqueo del dispositivo","Evitar operaciones sensibles si no son necesarias y usar sitios seguros y medidas de protección"],2,"Evita operaciones sensibles si no son necesarias, mantén el dispositivo actualizado y utiliza servicios legítimos con conexiones protegidas. Una red pública no debe considerarse de confianza por defecto."],["Un archivo adjunto inesperado tiene un nombre que intenta crear urgencia. ¿Qué haces?",["Confirmas con la persona remitente por otro canal antes de abrirlo","Lo abres porque parece venir de una empresa conocida","Desactivas el antivirus"],0,"Verificar el envío y desconfiar de la urgencia reduce el riesgo de archivos maliciosos."],["¿Qué es una copia de seguridad útil frente a un fallo o robo?",["Un acceso directo al archivo original","Una copia separada del dispositivo principal y comprobada periódicamente","Un archivo que nunca se ha intentado restaurar"],1,"Una copia separada y verificable puede recuperarse si el dispositivo principal falla o se pierde."],["Te llega un aviso de inicio de sesión que no reconoces. ¿Cuál es una respuesta adecuada?",["Ignorarlo siempre","Enviar tu contraseña al remitente para confirmar","Entrar por la app o web oficial, revisar la cuenta y cambiar credenciales si procede"],2,"Accede escribiendo la dirección conocida o usando la aplicación oficial, revisa la actividad, cierra sesiones que no reconozcas y cambia la contraseña si hay indicios de acceso no autorizado. Activa la autenticación multifactor si está disponible."],["¿Qué hábito ayuda a reducir la fatiga durante una jornada de pantalla?",["Hacer pausas, variar la postura y ajustar la distancia y la iluminación","Trabajar horas sin levantarse","Usar siempre el brillo máximo"],0,"Las pausas y los ajustes ergonómicos favorecen el bienestar."],["Un móvil ya no funciona y contiene información personal. ¿Qué debes considerar antes de entregarlo para reciclar?",["Dejarlo desbloqueado con todos los datos","Hacer copia de lo necesario, cerrar sesiones y borrar los datos de forma segura siguiendo las instrucciones del fabricante","Tirar el dispositivo a la basura doméstica"],1,"Antes de reciclar un dispositivo hay que proteger los datos y usar un canal adecuado de recogida."]],[["La conexión a Internet falla en un portátil, pero funciona en el móvil conectado a la misma red. ¿Qué paso ayuda a acotar el problema?",["Restablecer inmediatamente todos los dispositivos","Instalar un programa desconocido","Comprobar Wi-Fi, modo avión y ajustes de red del portátil"],2,"Comparar dispositivos ayuda a localizar el problema y comprobar primero los ajustes del equipo afectado."],["No se oye el audio de una videollamada. ¿Qué compruebas primero?",["Volumen, dispositivo de salida y configuración de audio de la aplicación","Compras unos auriculares nuevos sin comprobar nada","Reinstalas todo el sistema operativo"],0,"Las comprobaciones básicas de volumen y dispositivo suelen ser el primer paso."],["Una aplicación deja de responder después de una actualización. ¿Qué enfoque es mejor?",["Borrar todos los archivos del equipo","Reiniciar la aplicación, comprobar actualizaciones/avisos y buscar el error antes de medidas drásticas","Dar permisos de administrador a cualquier programa"],1,"Conviene aplicar soluciones graduales y reversibles antes de medidas drásticas."],["Quieres elegir una herramienta para coordinar tareas de un equipo pequeño. ¿Qué criterio debe guiar la decisión?",["Que tenga el mayor número de funciones","Que sea la primera que aparece en un anuncio","Que cubra las necesidades, sea accesible, segura y manejable para el equipo"],2,"La herramienta adecuada se elige por las necesidades reales, accesibilidad, seguridad y facilidad de uso."],["Antes de instalar una aplicación gratuita, ¿qué conviene revisar?",["Desarrollador, permisos, reputación, condiciones y fuente oficial de descarga","Solo el icono","Si promete muchas funciones sin coste"],0,"Revisar procedencia, permisos y condiciones permite valorar riesgos y utilidad."],["Una persona del equipo no puede leer el texto gris claro sobre fondo blanco. ¿Qué cambio ayuda?",["Reducir todavía más el tamaño","Aumentar el contraste y usar un tamaño legible","Transmitir toda la información solo con color"],1,"Un contraste adecuado y texto legible facilitan el acceso a más personas."],["Un prototipo de formulario recibe errores de los usuarios. ¿Qué proceso conviene seguir?",["Culpar a los usuarios","Publicarlo sin cambios","Identificar dónde se confunden, probar una mejora y volver a recoger opiniones"],2,"La iteración consiste en probar, observar resultados y mejorar la solución."],["Quieres aprender a realizar una tarea digital que no dominas. ¿Cómo defines un objetivo útil?",["Especificar la tarea observable, los pasos que practicarás y cómo comprobarás que puedes hacerla","Decir únicamente «mejorar informática»","Estudiar temas aleatorios sin revisar avances"],0,"Un objetivo concreto permite practicar y comprobar el progreso."],["Un archivo no se abre en tu programa habitual. ¿Qué opción es más razonable?",["Cambiar la extensión del nombre sin más","Comprobar el formato real, actualizar o usar una aplicación compatible desde una fuente fiable","Subirlo a una web desconocida para convertirlo"],1,"Hay que identificar el formato y utilizar herramientas compatibles y confiables."],["Un servicio digital es difícil de usar para personas con distintas capacidades. ¿Qué acción inicial aporta información útil?",["Asumir que todas las personas lo usan igual","Añadir más funciones sin consultar","Observar tareas reales, preguntar a usuarios diversos y detectar barreras de accesibilidad"],2,"La observación y la participación de usuarios ayudan a identificar barreras concretas."]]];

function startModuleQuiz(topicId, shuffleOptions=false){
  const topic=topics.find(t=>t.id===topicId);
  const source=questionBank[topicId-1] || [];
  const questions=source.map((item,index)=>{
    const original=item[1].map((text,optionIndex)=>({text,correct:optionIndex===item[2]}));
    if(shuffleOptions) original.sort(()=>Math.random()-.5);
    return {id:`${topicId}.${index+1}`,title:topic.title,question:item[0],options:original,explanation:item[3],selected:null};
  });
  quizSession={topicId,topic,questions,index:0,finished:false};
  renderModuleQuiz();
}

function renderModuleQuiz(){
  const content=document.getElementById("lessonContent");
  const q=quizSession.questions[quizSession.index];
  if(quizSession.finished){
    const score=quizSession.questions.filter(item=>item.options.find(o=>o.text===item.selected)?.correct).length;
    content.innerHTML=`<p class="lesson-kicker">RESULTADO FINAL</p><h3>${quizSession.topic.title}</h3>
      <div class="quiz-result-score"><strong>${score} / ${quizSession.questions.length}</strong><span>respuestas acertadas</span></div>
      <ol class="quiz-review-list">${quizSession.questions.map((item,i)=>{const ok=item.options.find(o=>o.text===item.selected)?.correct;const right=item.options.find(o=>o.correct).text;return `<li class="${ok?'quiz-review-correct':'quiz-review-wrong'}"><span class="quiz-review-icon" aria-label="${ok?'Correcta':'Incorrecta'}">${ok?'✓':'✕'}</span><div><strong>${i+1}. ${item.question}</strong><p>Tu respuesta: ${item.selected||'Sin responder'}</p>${ok?'':`<p class="quiz-right-answer">Respuesta correcta: ${right}</p>`}<p class="quiz-explanation">${item.explanation}</p></div></li>`}).join("")}</ol>
      <div class="lesson-actions"><button class="button button-primary" id="retryModuleQuiz">Volver a hacer el ejercicio</button><button class="button button-secondary" id="backToModule">Volver al módulo</button></div>`;
    document.getElementById("retryModuleQuiz").addEventListener("click",()=>startModuleQuiz(quizSession.topicId,true));
    document.getElementById("backToModule").addEventListener("click",()=>openTopic(quizSession.topicId));
    return;
  }
  content.innerHTML=`<p class="lesson-kicker">EJERCICIO · ${quizSession.topic.title.toUpperCase()}</p><div class="quiz-progress">Pregunta ${quizSession.index+1} de ${quizSession.questions.length}</div>
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
    <div class="quiz-box"><h4>Ejercicio del módulo</h4><p>Responde a las preguntas del módulo una a una. Al terminar verás el número de aciertos y la revisión de tus respuestas.</p>
      <button class="button button-primary" id="startModuleQuiz" type="button">Comenzar ejercicio</button>
    </div>
    <div class="task-details task-panel"><h4>Reto breve de aplicación</h4><p>${applicationTasks[b.id] || d.task}</p><p class="muted-note">Intenta resolverlo antes de consultar la respuesta orientativa.</p><details class="solution-details"><summary>Ver solución o posible respuesta correcta</summary><div class="solution-content">${applicationSolutions[b.id] || "<p>Posible respuesta: explica los pasos en orden, justifica tu elección y comprueba que la solución responde a la necesidad planteada.</p>"}</div></details></div>
    <div class="lesson-actions">
      <button class="button button-secondary" id="previousBlock" ${currentBlockIndex===0?"disabled":""}>← Anterior</button>
      <button class="button button-primary" id="nextBlock" ${currentBlockIndex===currentTopic.blocks.length-1?"disabled":""}>Siguiente →</button>
    </div>`;
  document.getElementById("previousBlock").addEventListener("click",()=>changeBlock(-1));
  document.getElementById("nextBlock").addEventListener("click",()=>changeBlock(1));
  document.getElementById("startModuleQuiz").addEventListener("click",()=>startModuleQuiz(currentTopic.id));
}
function changeBlock(delta){const next=currentBlockIndex+delta;if(next<0||next>=currentTopic.blocks.length)return;currentBlockIndex=next;renderLessonList();renderLesson();document.getElementById("lessonContent").scrollIntoView({behavior:"smooth",block:"start"});}

function showHome(){
  learningView.classList.add("hidden");topicsSection.classList.remove("hidden");document.getElementById("inicio").classList.remove("hidden");document.getElementById("ayuda").classList.remove("hidden");currentTopic=null;window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("backToTopics").addEventListener("click",e=>{e.preventDefault();showHome();document.getElementById("temas").scrollIntoView({behavior:"smooth"});});
document.getElementById("homeLink").addEventListener("click",e=>{e.preventDefault();showHome();});
document.getElementById("homeTextLink").addEventListener("click",e=>{e.preventDefault();showHome();});
renderTopics();

