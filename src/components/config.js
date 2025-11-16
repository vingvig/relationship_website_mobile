const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "1605", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Introducir contraseña", // Title displayed on the passcode entry page
  successMessage: "Yayy", // Message shown upon successful passcode entry
  redirectMessage: "Redirigiendo", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Contraseña incorrecta, pista: fecha de aniversario", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Buscar", // Placeholder text in the search input
  trendingTitle: "Tendencias de busquedas", // Title for the trending searches section
  trendingSearches: [
    "¿Por qué es tan lindo mi novio?", // Example trending search query
    "¿Por qué yo lo amo más?", // Another example query
    `¿Porque a Molly le gusta coger piernas?`, // A personalized trending search
  ],
  proTip: 'Pista: intenta buscar "¿Cuánto tiempo llevamos juntos?" :b', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-05-16", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Hemos estado juntos por:", // Title displayed on the timer page
  timerMessage: "... y contando", // Message shown alongside the timer
  timeUnits: {
    days: "Días", // Label for days in the timer
    hours: "Horas", // Label for hours in the timer
    minutes: "Minutos", // Label for minutes in the timer
    seconds: "Segundos", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Mira Mira :D", // Title for the recap page
  clickMeText: "Mira", // Text prompting users to interact

  recapSections: [
    { label: "Mensajes", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Imágenes", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Música", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Canciones que me recuerdan a ti", // Title for the music page
  musicGallery: [
    {
      title: "Corazón", // Title of the song
      artist: "Danny ocean", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Beleza Pula",
      artist: "Masayoshi Takanaka",
      left: "40%",
      top: "15%",
    },
    {
      title: "My Kind of Woman",
      artist: "Mac DeMarco",
      left: "15%",
      top: "40%",
    },
    {
      title: "Iris",
      artist: "Pastel Ghost",
      left: "30%",
      top: "75%",
    },
    {
      title: "Super Trouper",
      artist: "ABBA",
      left: "5%",
      top: "65%",
    },
    {
      title: "Tel Aviv",
      artist: "Danny Ocean",
      left: "25%",
      top: "90%",
    },
    {
      title: "Lady Brown",
      artist: "Nujabes",
      left: "35%",
      top: "50%",
    },
    {
      title: "Gloria",
      artist: "Kendrick Lamar, SZA",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Nuestros Mensajes", // Title for the messages recap page
    messageGallery: [
      { title: "20 de Febrero, 2025", description: "Dos pendejos emocionados por tener la excusa de matematicas para hablar :b" }, // Message entry
      { title: "2 de Mayo, 2025", description: "Primer tutorial culinario el dia que nos confesamos JKAJAJSAJS" },
      { title: "Siempre", description: "Nuestros \"Te amo\"" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Fotos de Nosotros", // Title for the pictures recap page
    pictureGallery: [
      { title: "21 de Junio, 2025", description: "florecillas" }, // Picture entry
      { title: "25 de Septiembre, 2025", description: "Llovizna (culo mojao JSAJSAJSJA)" },
      { title: "16 de Septiembre, 2025", description: "4 meses juntos 💓" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Felices Seis Meses Mi Vida. Nunca llegue a pensar que iba a tener algo con una persona tan especial como lo eres tú, todo lo que me haces sentir hace que cada día me sienta más enamorado de ti. Quiero poder seguir estando contigo, apoyándote en cualquier cosa que sea necesaria, amándote cuando sea, hablando contigo de lo que sea; y eso es lo que me hace sentirme seguro de que lo que siento por ti es real. Me alegra demasiado que tú seas mi novia, porque eres tu, todo de ti lo amo y lo aprecio. Te amo muchísimo, demasiado y con todo mi ser Gio, gracias por haber hablado conmigo ese día en biblioteca. 💓", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Gracias por todo, mi vida. 💖 Deseo pasar mucho mas tiempo contigo.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Página Anterior", // Text for the previous page button
  nextPageText: "Página Siguiente", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Cuánto tiempo llevamos juntos?", // Example of a correct search query
    "cuanto tiempo llevamos juntos", // Another example of a correct search query
    "Cuanto tiempo llevamos juntos", // Another example of a correct search query
    "cuánto tiempo llevamos juntos", // Another example of a correct search query
    "Cuánto tiempo llevamos juntos", // Another example of a correct search query
  ],
};

export default config;
