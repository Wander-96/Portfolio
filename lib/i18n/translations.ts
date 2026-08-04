export type Language = 'es' | 'en' | 'pt';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  es: {
    // Navbar
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.badge': 'ESTADO: DISPONIBLE',
    'hero.title': 'ARQUITECTURA FRONTEND',
    'hero.description': 'Sistemas escalables. Precisión QA. Interfaces de alto rendimiento.',
    'hero.viewProjects': 'VER SISTEMAS',
    'hero.contactMe': 'INICIAR PROTOCOLO',

    // About
    'about.title.1': 'Sobre',
    'about.title.2': 'mí',
    'about.p1': 'Hola! Soy <strong class="text-white font-semibold">Santiago</strong>. Mi camino en la tecnología es el resultado de una curiosidad constante por entender cómo funcionan las cosas y el compromiso de hacer que funcionen mejor.',
    'about.p2': 'Vengo del mundo del <strong class="text-white font-semibold">Diseño Sonoro</strong>, donde gestioné la precisión técnica en más de 230 shows por el Reino Unido. Esa experiencia me enseñó algo vital: bajo presión, la atención al detalle y un flujo de trabajo lógico lo son todo. Hoy, aplico esa misma rigurosidad al desarrollo de software.',
    'about.p3': 'Como <strong class="text-white font-semibold">Desarrollador Fullstack con alma de QA</strong>, no solo escribo código; lo pongo a prueba. Me especializo en el ecosistema de React y Next.js, pero siempre con una mirada preventiva. Mi objetivo es construir interfaces que no solo sean visualmente impactantes, sino también robustas, estables y seguras.',
    'about.p4': 'Actualmente, estoy profundizando mis conocimientos en el Backend (Node.js/Python) y bases de datos en la UTN, complementando mi formación técnica con certificaciones en <strong class="text-white font-semibold">QA Manual</strong> para cerrar el ciclo de calidad de cada producto que entrego.',

    // Skills
    'skills.title.1': 'Mis',
    'skills.title.2': 'Skills',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Herramientas',

    // Footer
    'footer.copy': '© {year} DevPortfolio. Construido con Next.js y Framer Motion.',
  },
  en: {
    // Navbar
    'nav.about': 'About me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'STATUS: AVAILABLE',
    'hero.title': 'FRONTEND ARCHITECTURE',
    'hero.description': 'Scalable systems. QA precision. High-performance interfaces.',
    'hero.viewProjects': 'VIEW SYSTEMS',
    'hero.contactMe': 'INIT PROTOCOL',

    // About
    'about.title.1': 'About',
    'about.title.2': 'me',
    'about.p1': 'Hi! I am <strong class="text-white font-semibold">Santiago</strong>. My path in tech is the result of constant curiosity to understand how things work and a commitment to making them work better.',
    'about.p2': 'I come from the <strong class="text-white font-semibold">Sound Design</strong> world, where I managed technical precision across over 230 shows in the UK. That experience taught me something vital: under pressure, attention to detail and a logical workflow are everything. Today, I apply that same rigor to software development.',
    'about.p3': 'As a <strong class="text-white font-semibold">Fullstack Developer with a QA soul</strong>, I don\'t just write code; I put it to the test. I specialize in the React and Next.js ecosystem, always with a preventative mindset. My goal is to build interfaces that are not only visually striking but also robust, stable, and secure.',
    'about.p4': 'Currently, I am deepening my Backend (Node.js/Python) and database knowledge at UTN, complementing my technical background with <strong class="text-white font-semibold">Manual QA</strong> certifications to close the quality cycle of every product I deliver.',

    // Skills
    'skills.title.1': 'My',
    'skills.title.2': 'Skills',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Tools',

    // Footer
    'footer.copy': '© {year} DevPortfolio. Built with Next.js and Framer Motion.',
  },
  pt: {
    // Navbar
    'nav.about': 'Sobre mim',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.badge': 'STATUS: DISPONÍVEL',
    'hero.title': 'ARQUITETURA FRONTEND',
    'hero.description': 'Sistemas escaláveis. Precisão QA. Interfaces de alto desempenho.',
    'hero.viewProjects': 'VER SISTEMAS',
    'hero.contactMe': 'INICIAR PROTOCOLO',

    // About
    'about.title.1': 'Sobre',
    'about.title.2': 'mim',
    'about.p1': 'Olá! Eu sou <strong class="text-white font-semibold">Santiago</strong>. Meu caminho na tecnologia é o resultado de uma curiosidade constante para entender como as coisas funcionam e o compromisso de fazê-las funcionar melhor.',
    'about.p2': 'Venho do mundo do <strong class="text-white font-semibold">Design de Som</strong>, onde gerenciei precisão técnica em mais de 230 shows pelo Reino Unido. Essa experiência me ensinou algo vital: sob pressão, a atenção aos detalhes e um fluxo de trabalho lógico são tudo. Hoje, aplico essa mesma rígor ao desenvolvimento de software.',
    'about.p3': 'Como um <strong class="text-white font-semibold">Desenvolvedor Fullstack com alma de QA</strong>, não apenas escrevo código; eu o coloco à prova. Eu me especializo no ecossistema React e Next.js, mas sempre com uma mentalidade preventiva. Meu objetivo é construir interfaces que não sejam apenas visualmente impactantes, mas também robustas, estáveis e seguras.',
    'about.p4': 'Atualmente, estou aprofundando meus conhecimentos em Backend (Node.js/Python) e banco de dados na UTN, complementando minha formação técnica com certificações em <strong class="text-white font-semibold">QA Manual</strong> para fechar o ciclo de qualidade de cada produto que entrego.',

    // Skills
    'skills.title.1': 'Minhas',
    'skills.title.2': 'Habilidades',
    'skills.category.frontend': 'Frontend',
    'skills.category.backend': 'Backend',
    'skills.category.tools': 'Ferramentas',

    // Footer
    'footer.copy': '© {year} DevPortfolio. Feito com Next.js e Framer Motion.',
  }
};
