import { createI18n } from 'vue-i18n';

const messages = {
  fr: {
    welcome: "Bienvenue sur mon site",

    francais: "Français",
    anglais: "Anglais",
    portugais: "Portugais",

    language: "Changer de langue",
    position: "Paris",
    metier: "Développeur Informatique",
    description_profile: "Alexis Inacio, 18 ans, étudiant",

    nav_a_propos_de_moi: "À propos de moi",
    nav_Formations: "Formations",
    nav_Projets: "Projets",
    nav_Competences: "Compétences",

    titre_formations: "Mes formations",
    titre_experience: "Mes expériences professionnelles",
    titre_projets: "Mes projets personnels",
    titre_language: "Les langages que j’utilise",
    titre_logiciels: "Les logiciels que j’utilise",

    // Projets
    visibilité_projects1: "Public",
    visibilité_projects2: "Privé",
    titre_projets_test_1: "Titre projet test",
    description_projets_test_1: "Description du projet test",
    date_projets_test_1: "Mis à jour le 18 avril",
    titre_projets_test_2: "Titre projet test",
    description_projets_test_2: "Description du projet test",
    date_projets_test_2: "Mis à jour le 18 avril",

    titre_projets_znfolio: "Mon Portfolio",
    description_projets_znfolio: "Mon portfolio personnel réalisé avec Vue.js (site actuel).",
    date_projets_znfolio: "Créé le 29 Juillet 2025",

    titre_projets_zn_nui: "Nui FiveM",
    description_projets_zn_nui: "Multiple script interfaces FiveM, (interface fini, dev en cours).",
    date_projets_zn_nui: "Créé le 21 Juin 2025",

    titre_projets_discordbot: "Discord Bot",
    description_projets_discordbot: "Bots Discord pour la protection du serveur Zenos Clans.",
    date_projets_discordbot: "Mis à jour le 23 juin 2025",


    // Formations
    ynov_titre: "Paris YNOV Campus",
    ynov_description: "BTS SIO - Option SLAM, Développement informatique",
    ynov_date: "sept. 2025 - Juil. 2027 // 2 ans",

    simone_weil_titre: "Lycée Simone Weil",
    simone_weil_description: "BAC PRO - Etude et Définition de Produits industriels",
    simone_weil_date: "sept. 2021 - juin 2024 // 3 ans",

    // Stages
    new_mat_titre: "Concepteur industriel",
    new_mat_nom: "New Mat Mecatronics - Stage",
    new_mat_date: "nov. 2023 - déc. 2023 // 2 mois",
    new_mat_description: "Étude de marché et veille concurrentielle. <BR>Conception sur SolidWorks d’un prototype de pince industrielle, optimisé pour la nouvelle génération de robots de préhension.",
    new_mat_tags1: "SolidWorks",
    new_mat_tags2: "Modélisation 3D",
    new_mat_tags3: "Veille concurrentielle",
    new_mat_tags4: "Innovation produit",


    eiffage_titre: "Chargé d’études",
    eiffage_nom: "Eiffage - Stage",

    eiffage_date_4: "Juin 2023 // 1 mois",
    eiffage_description_4: "Plan AutoCAD pour le système d’extraction d’air de l’atelier de maintenance des camions Renault. Modélisation 3D du plan final sur SolidWorks.",
    eiffage_tags1_4: "AutoCAD",
    eiffage_tags2_4: "SolidWorks",
    eiffage_tags3_4: "Lecture de plans techniques",
    eiffage_tags4_4: "Précision",
    eiffage_tags5_4: "Travail en équipe",

    eiffage_date_3: "Mars 2023 // 1 mois",
    eiffage_description_3: "Participation à la conception d’un système d’extraction d’air pour un restaurant parisien. Conception du plan sur AutoCAD et modélisation en 3D sur SolidWorks.",
    eiffage_tags1_3: "Relevés sur site",
    eiffage_tags2_3: "AutoCAD",
    eiffage_tags3_3: "Adaptabilité",
    eiffage_tags4_3: "Suivi de projet",
    eiffage_tags5_3: "Collaboration client",

    eiffage_date_2: "Juin 2022 // 1 mois",
    eiffage_description_2: "Mesure et mise à jour du plan du bâtiment d'Eiffage pour intégrer des modifications. Adaptation des plans en fonction des modifications demandées par Renault.",
    eiffage_tags1_2: "AutoCAD",
    eiffage_tags2_2: "SolidWorks",
    eiffage_tags3_2: "Planification",
    eiffage_tags4_2: "Communication technique",

    eiffage_date_1: "Mars 2022 // 1 mois",
    eiffage_description_1: "Modélisation en 3D sur SolidWorks d'un plan de système de ventilation fourni sur AutoCAD. Conception de pièces techniques en appui aux projets de l’équipe.",
    eiffage_tags1_1: "CAO 3D",
    eiffage_tags2_1: "SolidWorks",
    eiffage_tags3_1: "Détail technique",
    eiffage_tags4_1: "Esprit d’analyse",
    eiffage_tags5_1: "Soutien aux équipes",

    // Compétences
    Html_categorie: "Base du web",
    Css_categorie: "Mise en page web",
    JavaScript_categorie: "Logique frontend",
    Vuejs_categorie: "Framework JS",
    Nodejs_categorie: "Serveur JS",
    Python_categorie: "Scripts & backend",
    Mysql_categorie: "Base de données",

    Figma_categorie: "Interface & maquettes",
    Solidworks_categorie: "Modélisation 3D",
    AutoCAD_categorie: "Plans 2D/3D",
    Blender_categorie: "Créa 3D & anim",
    Git_categorie: "Suivi de versions",
    Git_Extension_categorie: "Git visuel"
  },
  en: {
    welcome: "Welcome to my site",

    francais: "French",
    anglais: "English",
    portugais: "Portuguese",

    language: "Change language",
    position: "Paris",
    metier: "IT Developer",
    description_profile: "Alexis Inacio, 18 years old, student",

    nav_a_propos_de_moi: "About me",
    nav_Formations: "Education",
    nav_Projets: "Projects",
    nav_Competences: "Skills",

    titre_formations: "My education",
    titre_experience: "My professional experience",
    titre_projets: "My personal projects",
    titre_language: "Languages I use",
    titre_logiciels: "Software I use",

    // Projects
    visibilité_projects1: "Public",
    visibilité_projects2: "Private",
    titre_projets_test_1: "Test project title",
    description_projets_test_1: "Test project description",
    date_projets_test_1: "Updated on April 18",
    titre_projets_test_2: "Test project title",
    description_projets_test_2: "Test project description",
    date_projets_test_2: "Updated on April 18",

    // Education
    ynov_titre: "Paris YNOV Campus",
    ynov_description: "BTS SIO - SLAM Option, IT development",
    ynov_date: "Sept. 2025 - July 2027 // 2 years",

    simone_weil_titre: "Simone Weil High School",
    simone_weil_description: "BAC PRO - Study and Definition of Industrial Products",
    simone_weil_date: "Sept. 2021 - June 2024 // 3 years",

    // Internships
    new_mat_titre: "Industrial designer",
    new_mat_nom: "New Mat Mecatronics - Internship",
    new_mat_date: "Nov. 2023 - Dec. 2023 // 2 months",
    new_mat_description: "Market research and competitive analysis. <BR>Design of an industrial gripper prototype in SolidWorks, optimized for a new generation of robotic arms.",
    new_mat_tags1: "SolidWorks",
    new_mat_tags2: "3D modeling",
    new_mat_tags3: "Competitive analysis",
    new_mat_tags4: "Product innovation",

    eiffage_titre: "Study engineer",
    eiffage_nom: "Eiffage - Internship",

    eiffage_date_4: "June 2023 // 1 month",
    eiffage_description_4: "AutoCAD plan for the air extraction system of Renault's truck maintenance workshop. Final 3D model designed in SolidWorks.",
    eiffage_tags1_4: "AutoCAD",
    eiffage_tags2_4: "SolidWorks",
    eiffage_tags3_4: "Technical drawing reading",
    eiffage_tags4_4: "Precision",
    eiffage_tags5_4: "Teamwork",

    eiffage_date_3: "March 2023 // 1 month",
    eiffage_description_3: "Contributed to the design of an air extraction system for a Parisian restaurant. AutoCAD plans and 3D modeling in SolidWorks.",
    eiffage_tags1_3: "On-site measurements",
    eiffage_tags2_3: "AutoCAD",
    eiffage_tags3_3: "Adaptability",
    eiffage_tags4_3: "Project follow-up",
    eiffage_tags5_3: "Client collaboration",

    eiffage_date_2: "June 2022 // 1 month",
    eiffage_description_2: "Measured and updated the Eiffage building plans for integration of requested changes by Renault.",
    eiffage_tags1_2: "AutoCAD",
    eiffage_tags2_2: "SolidWorks",
    eiffage_tags3_2: "Planning",
    eiffage_tags4_2: "Technical communication",

    eiffage_date_1: "March 2022 // 1 month",
    eiffage_description_1: "3D modeling in SolidWorks of a ventilation system based on an AutoCAD plan. Designed technical parts to support team projects.",
    eiffage_tags1_1: "3D CAD",
    eiffage_tags2_1: "SolidWorks",
    eiffage_tags3_1: "Technical detail",
    eiffage_tags4_1: "Analytical thinking",
    eiffage_tags5_1: "Team support",

    // Skills
    Html_categorie: "Web fundamentals",
    Css_categorie: "Web layout",
    JavaScript_categorie: "Frontend logic",
    Vuejs_categorie: "JS Framework",
    Nodejs_categorie: "JS Server",
    Python_categorie: "Scripts & backend",
    Mysql_categorie: "Database",

    Figma_categorie: "Interface & mockups",
    Solidworks_categorie: "3D modeling",
    AutoCAD_categorie: "2D/3D plans",
    Blender_categorie: "3D creation & animation",
    Git_categorie: "Version control",
    Git_Extension_categorie: "Visual Git"
  },
  pt: {
    welcome: "Bem-vindo ao meu site",

    francais: "Francês",
    anglais: "Inglês",
    portugais: "Português",

    language: "Mudar idioma",
    position: "Paris",
    metier: "Desenvolvedor Informático",
    description_profile: "Alexis Inacio, 18 anos, estudante",

    nav_a_propos_de_moi: "Sobre mim",
    nav_Formations: "Formação",
    nav_Projets: "Projetos",
    nav_Competences: "Competências",

    titre_formations: "A minha formação",
    titre_experience: "A minha experiência profissional",
    titre_projets: "Os meus projetos pessoais",
    titre_language: "Linguagens que utilizo",
    titre_logiciels: "Softwares que utilizo",

    // Projetos
    visibilité_projects1: "Público",
    visibilité_projects2: "Privado",
    titre_projets_test_1: "Título de projeto teste",
    description_projets_test_1: "Descrição do projeto teste",
    date_projets_test_1: "Atualizado a 18 de abril",
    titre_projets_test_2: "Título de projeto teste",
    description_projets_test_2: "Descrição do projeto teste",
    date_projets_test_2: "Atualizado a 18 de abril",

    // Formação
    ynov_titre: "Campus Paris YNOV",
    ynov_description: "BTS SIO - Opção SLAM, Desenvolvimento Informático",
    ynov_date: "Set. 2025 - Jul. 2027 // 2 anos",

    simone_weil_titre: "Liceu Simone Weil",
    simone_weil_description: "BAC PRO - Estudo e Definição de Produtos Industriais",
    simone_weil_date: "Set. 2021 - Jun. 2024 // 3 anos",

    // Estágios
    new_mat_titre: "Designer industrial",
    new_mat_nom: "New Mat Mecatronics - Estágio",
    new_mat_date: "Nov. 2023 - Dez. 2023 // 2 meses",
    new_mat_description: "Estudo de mercado e análise da concorrência. <BR>Desenho no SolidWorks de um protótipo de pinça industrial otimizado para a nova geração de robôs de preensão.",
    new_mat_tags1: "SolidWorks",
    new_mat_tags2: "Modelação 3D",
    new_mat_tags3: "Análise da concorrência",
    new_mat_tags4: "Inovação de produto",

    eiffage_titre: "Técnico de estudos",
    eiffage_nom: "Eiffage - Estágio",

    eiffage_date_4: "Junho 2023 // 1 mês",
    eiffage_description_4: "Plano AutoCAD para o sistema de extração de ar na oficina de manutenção de camiões Renault. Modelação 3D do plano final no SolidWorks.",
    eiffage_tags1_4: "AutoCAD",
    eiffage_tags2_4: "SolidWorks",
    eiffage_tags3_4: "Leitura de planos técnicos",
    eiffage_tags4_4: "Precisão",
    eiffage_tags5_4: "Trabalho em equipa",

    eiffage_date_3: "Março 2023 // 1 mês",
    eiffage_description_3: "Participação no design de um sistema de extração de ar para um restaurante em Paris. Plano no AutoCAD e modelação 3D no SolidWorks.",
    eiffage_tags1_3: "Medições no local",
    eiffage_tags2_3: "AutoCAD",
    eiffage_tags3_3: "Adaptabilidade",
    eiffage_tags4_3: "Acompanhamento de projeto",
    eiffage_tags5_3: "Colaboração com cliente",

    eiffage_date_2: "Junho 2022 // 1 mês",
    eiffage_description_2: "Medição e atualização dos planos do edifício Eiffage para integrar modificações pedidas pela Renault.",
    eiffage_tags1_2: "AutoCAD",
    eiffage_tags2_2: "SolidWorks",
    eiffage_tags3_2: "Planeamento",
    eiffage_tags4_2: "Comunicação técnica",

    eiffage_date_1: "Março 2022 // 1 mês",
    eiffage_description_1: "Modelação 3D no SolidWorks de um sistema de ventilação baseado num plano AutoCAD. Criação de peças técnicas para apoio aos projetos da equipa.",
    eiffage_tags1_1: "CAD 3D",
    eiffage_tags2_1: "SolidWorks",
    eiffage_tags3_1: "Detalhe técnico",
    eiffage_tags4_1: "Pensamento analítico",
    eiffage_tags5_1: "Apoio à equipa",

    // Competências
    Html_categorie: "Base da web",
    Css_categorie: "Layout web",
    JavaScript_categorie: "Lógica frontend",
    Vuejs_categorie: "Framework JS",
    Nodejs_categorie: "Servidor JS",
    Python_categorie: "Scripts & backend",
    Mysql_categorie: "Base de dados",

    Figma_categorie: "Interface & protótipos",
    Solidworks_categorie: "Modelação 3D",
    AutoCAD_categorie: "Planos 2D/3D",
    Blender_categorie: "Criação 3D & animação",
    Git_categorie: "Controlo de versões",
    Git_Extension_categorie: "Git visual"
  }
};

const i18n = createI18n({
  locale: 'fr', // Langue principale par défaut
  fallbackLocale: 'en', // Langue de secours
  messages,
});

export default i18n;
