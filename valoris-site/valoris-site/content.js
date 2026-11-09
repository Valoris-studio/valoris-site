/* ==========================================================================
   VALORIS STUDIO : TOUS LES CONTENUS DU SITE
   Modifiez uniquement ce fichier pour changer textes, images, vidéos et liens.
   La mise en page (index.html, styles.css, script.js) n'a pas besoin d'être touchée.

   Ajouter un projet / une personne / un partenaire :
   copiez une ligne { ... } existante, collez-la à la suite, changez les valeurs.

   Repères :
   - À REMPLACER = contenu provisoire ou à vérifier avant publication.
   - draft: true = élément d'exemple. Visible seulement tant que showDrafts vaut true.
   ========================================================================== */

window.SITE = {

  // Mettre false avant la mise en ligne : masque tous les éléments « draft ».
  showDrafts: true,

  brand: { name: "Valoris Studio", logo: "images/logo-site.png" },

  // Le lien doit correspondre à l'id d'une section ci-dessous.
  // Une section vide (ex. équipe) disparaît du menu automatiquement.
  nav: [
    { label: "Réalisations", href: "#realisations" },
    { label: "Prestations", href: "#prestations" },
    { label: "Ateliers cinéma", href: "#ateliers" },
    { label: "Presse", href: "#presse" },
    { label: "Équipe", href: "#equipe" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    text: "Des films sur mesure pour les entreprises, mariages, événements et collectivités. Et des courts-métrages conçus par les jeunes.",
    video: "videos/banner.mp4",   // vidéo d'ambiance en boucle (sans son), très atténuée ; mettre "" pour revenir à la simple image
    image: "images/banner.jpg",   // image affichée pendant le chargement de la vidéo. À REMPLACER : une photo de tournage en 1920 px de large rendrait mieux (celle-ci fait 1280 px)
    alt: "Opérateur filmant avec une caméra sur stabilisateur",
    primary: "Voir les réalisations",
    secondary: "Nous contacter"
  },

  services: {
    title: "Prestations vidéo",
    cta: "Parler de votre projet",
    // À VALIDER : une phrase par métier. Ajoutez vos formats réels (durée, livrables) si vous le souhaitez.
    items: [
      { image: "images/entreprise.jpg", title: "Entreprises",  text: "Présenter un métier, une équipe, un savoir-faire." },
      { image: "images/mariage.jpg", title: "Mariages",     text: "Le film de la journée, monté pour être revu." },
      { image: "images/banner.jpg" /* À REMPLACER : photo d'événement */, title: "Événements",   text: "Concerts, festivals, rencontres : l'événement en images." },
      { image: "images/centre.jpg", title: "Collectivités", text: "Films de territoire et de communication pour les mairies." }
    ]
  },

  workshops: {
    title: "Ateliers cinéma",
    text: "Avec les centres de loisirs, les jeunes réalisent leur propre court-métrage, de l'idée à la projection.",
    image: "images/kid.jpg",      // À REMPLACER si possible : photo en meilleure définition (celle-ci fait 399 px de large)
    alt: "Deux enfants devant une caméra professionnelle",
    steps: [
      "Écriture du scénario",
      "Prise de vue à la caméra",
      "Jeu d'acteur",
      "Montage",
      "Projection du court-métrage"
    ],
    cta: "Organiser un atelier"
  },

  // Vidéo : lien YouTube classique, ou fichier "videos/mon-film.mp4".
  // À REMPLACER : les 4 liens ci-dessous sont le même lien provisoire.
  // À REMPLACER : titres génériques ; mettez les vrais noms de films (avec l'accord des personnes filmées).
  projects: [
    { title: "Maman j'ai raté le bus",     type: "court métrage",       image: "images/maman.jpg",        alt: "court métrage realisé a donzere", video: "https://www.facebook.com/share/v/1BEaSfMUUw/" },
    { title: "Mon Nouveau Centre de loisirs",   type: "court métrage",    image: "images/Video02.png",     alt: "court métrage realisé a donzere",       video: "https://fb.watch/KDlB69KMWp/" },
    // À REMPLACER : image provisoire (aucune photo de film de territoire dans le dossier)
    { title: "Seven At Night - Aliya",     type: "Music",       image: "images/aliya.jpg",        alt: "Clip Music", video: "https://www.youtube.com/watch?v=jXD7blFCwew" },
    { title: "Atelier Stop Motion",      type: "Jeune public",  image: "images/lego.jpg", alt: "Enfant apprend a realiser des videos",               video: "https://www.facebook.com/share/v/1Fb8Bhj5Gw/?mibextid=wwXIfr" }
  ],

  // Revue de presse : un article de journal par entrée.
  // Pour en ajouter un : copiez un bloc { ... } (virgule entre deux blocs) et changez les valeurs.
  // "image" est facultatif (photo de l'article, dans le dossier images).
  press: {
    title: "On parle de nous",
    text: "Les articles de presse consacrés à nos films et à nos ateliers.",
    items: [
      {
        source: "Le Dauphiné Libéré",
        date: "1 novembre 2026",
        title: "Centre de loisirs : les enfants passent devant la caméra pour Halloween",
        text: "Les enfants du centre de loisirs se sont retrouvés devant la caméra à l'occasion d'Halloween.",  // À VÉRIFIER : résumé à réécrire avec vos mots
        url: "https://www.ledauphine.com/culture-loisirs/2026/11/01/centre-de-loisirs-les-enfants-passent-devant-la-camera-pour-halloween",
        linkLabel: "Lire l'article",
        image: "images/centre.jpg"
      }
    ]
  },

  // À REMPLACER : exemples. Photo carrée ou 4:5 conseillée ; sans photo, un cadre vide s'affiche.
  team: {
    title: "L'équipe",
    people: [
      { name: "Anthony A", role: "Executive Producer", photo: "images/toto.jpg", draft: true },
      { name: "Kevin M", role: "Executive Producer", photo: "images/keke.jpg", draft: true },
      { name: "Charif S", role: "Executive Producer", photo: "images/chacha.jpg", draft: true }
    ]
  },

  // À REMPLACER : exemples. Logo en PNG ou SVG ; "url" facultatif.
  partners: {
    title: "Ils nous font confiance",
    items: [
      { name: "Mairie Donzere", logo: "images/donzere.png", url: "", draft: false }
    ]
  },

  // À REMPLACER : statut, année de création, lieu d'action.
  about: {
    title: "Vidéastes Engagés",
    text: "« Vidéastes professionnels pour les mariages, les entreprises et les collectivités. Une partie de notre activité soutient des projets solidaires et des ateliers de cinéma pour la jeunesse. »"
  },

  contact: {
    title: "Parlons de votre projet",
    text: "Indiquez le type de film, la date et le lieu.",
    email: "contact@valoris-studio.fr",   // À REMPLACER par votre vraie adresse
    phone: "",                             // ex. "06 00 00 00 00" ; vide = non affiché
    // Réseaux : un lien vide n'est pas affiché. À REMPLACER.
    links: [
      { label: "Facebook",  url: "" },
      { label: "YouTube",   url: "" },
      { label: "Instagram", url: "" }
    ]
  },

  footer: {
    // À REMPLACER : mentions légales obligatoires pour publier (éditeur, hébergeur, contact).
    links: [{ label: "Mentions légales", url: "" }]
  }
};
