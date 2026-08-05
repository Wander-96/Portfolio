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
    'hero.title': 'ARQUITECTURA\nFULL STACK',
    'hero.description': 'Sistemas escalables. Precisión QA. Interfaces de alto rendimiento.',
    'hero.viewProjects': 'VER SISTEMAS',
    'hero.contactMe': 'INICIAR PROTOCOLO',

    // About
    'about.title.1': 'Sobre',
    'about.title.2': 'mí',
    'about.subtitle': '"Arte, Lógica y Software"',
    'about.sec1.title': 'I. Armonía — Propósito y Traducción',
    'about.sec1.quote': '"Escuchar la idea, entender la intención y materializarla."',
    'about.sec1.p': 'Como músico, productor y amante del diseño sonoro, mi parte favorita siempre fue actuar como puente: ser el traductor capaz de tomar esa idea abstracta que alguien tenía en la cabeza y convertirla en una realidad tangible. Hoy hago exactamente lo mismo al desarrollar software a medida. Antes de escribir una sola línea de código, me enfoco en escuchar y comprender qué necesitan realmente las personas y el negocio, haciendo que la tecnología sea el medio exacto para darle vida a esa visión.',
    'about.sec2.title': 'II. Melodía — Sensación y Experiencia',
    'about.sec2.quote': '"Lo que el usuario recuerda es cómo fluye la experiencia."',
    'about.sec2.p': 'La melodía es la cara visible de una pieza, aquello que te guía y se siente natural desde el primer instante. Cuando construyo interfaces con React y Next.js, busco esa misma soltura: que el diseño no solo sea visualmente cuidado, sino que responda a la interacción de forma humana y sin fricciones. Una buena aplicación, igual que una buena melodía, no impone barreras; te lleva de la mano de manera intuitiva.',
    'about.sec3.title': 'III. Ritmo — Precisión y Detalle',
    'about.sec3.quote': '"El pulso invisible que sostiene todo el sistema."',
    'about.sec3.p': 'En el sonido en vivo o en una mezcla de estudio, si el ritmo flaquea por un milisegundo, toda la estructura tiembla. Tras años gestionando esa rigurosidad técnica, me quedó un respeto profundo por lo que ocurre tras bambalinas: la limpieza de la lógica, el rendimiento del código y una arquitectura ordenada. Es ese compás interno y constante el que diferencia a un sistema que "simplemente funciona" de uno verdaderamente eficiente.',
    'about.sec4.title': 'IV. Composición — Calidad y Robustez',
    'about.sec4.quote': '"Una obra termina cuando demuestra que puede resistir la prueba del tiempo."',
    'about.sec4.p': 'Como Desarrollador Fullstack con alma de QA, no me conformo con que una aplicación se vea bien en la superficie; necesito ponerla a prueba en la realidad. Complemento mi desarrollo con sólidas bases en backend (Node.js/Python), bases de datos y testing manual para auditar cada entrega. Mi compromiso es cerrar la composición técnica con software honesto, estable y seguro, listo para operar sin fallos en producción.',

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
    'hero.title': 'FULL STACK\nARCHITECTURE',
    'hero.description': 'Scalable systems. QA precision. High-performance interfaces.',
    'hero.viewProjects': 'VIEW SYSTEMS',
    'hero.contactMe': 'INIT PROTOCOL',

    // About
    'about.title.1': 'About',
    'about.title.2': 'me',
    'about.subtitle': '"Art, Logic and Software"',
    'about.sec1.title': 'I. Harmony — Purpose and Translation',
    'about.sec1.quote': '"Listen to the idea, understand the intention and materialize it."',
    'about.sec1.p': 'As a musician, producer and sound design lover, my favorite part was always acting as a bridge: being the translator capable of taking that abstract idea someone had in their head and turning it into a tangible reality. Today I do exactly the same when developing custom software. Before writing a single line of code, I focus on listening and understanding what people and the business really need, making technology the exact medium to bring that vision to life.',
    'about.sec2.title': 'II. Melody — Sensation and Experience',
    'about.sec2.quote': '"What the user remembers is how the experience flows."',
    'about.sec2.p': 'The melody is the visible face of a piece, that which guides you and feels natural from the first moment. When I build interfaces with React and Next.js, I look for that same fluency: that the design is not only visually polished, but also responds to interaction in a human and frictionless way. A good application, just like a good melody, does not impose barriers; it takes you by the hand intuitively.',
    'about.sec3.title': 'III. Rhythm — Precision and Detail',
    'about.sec3.quote': '"The invisible pulse that sustains the entire system."',
    'about.sec3.p': 'In live sound or a studio mix, if the rhythm falters for a millisecond, the entire structure trembles. After years of managing that technical rigor, I gained a deep respect for what happens behind the scenes: the cleanliness of logic, code performance, and ordered architecture. It is that internal and constant compass that differentiates a system that "just works" from one that is truly efficient.',
    'about.sec4.title': 'IV. Composition — Quality and Robustness',
    'about.sec4.quote': '"A work is finished when it proves it can stand the test of time."',
    'about.sec4.p': 'As a Fullstack Developer with a QA soul, I am not satisfied with an application looking good on the surface; I need to put it to the test in reality. I complement my development with solid bases in backend (Node.js/Python), databases, and manual testing to audit each delivery. My commitment is to close the technical composition with honest, stable, and secure software, ready to operate flawlessly in production.',

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
    'hero.title': 'ARQUITETURA\nFULL STACK',
    'hero.description': 'Sistemas escaláveis. Precisão QA. Interfaces de alto desempenho.',
    'hero.viewProjects': 'VER SISTEMAS',
    'hero.contactMe': 'INICIAR PROTOCOLO',

    // About
    'about.title.1': 'Sobre',
    'about.title.2': 'mim',
    'about.subtitle': '"Arte, Lógica e Software"',
    'about.sec1.title': 'I. Harmonia — Propósito e Tradução',
    'about.sec1.quote': '"Ouvir a ideia, entender a intenção e materializá-la."',
    'about.sec1.p': 'Como músico, produtor e amante do design de som, minha parte favorita sempre foi atuar como uma ponte: ser o tradutor capaz de pegar aquela ideia abstrata que alguém tinha na cabeça e transformá-la em uma realidade tangível. Hoje faço exatamente o mesmo ao desenvolver software sob medida. Antes de escrever uma única linha de código, foco em ouvir e entender o que as pessoas e o negócio realmente precisam, fazendo da tecnologia o meio exato para dar vida a essa visão.',
    'about.sec2.title': 'II. Melodia — Sensação e Experiência',
    'about.sec2.quote': '"O que o usuário lembra é como a experiência flui."',
    'about.sec2.p': 'A melodia é a face visível de uma peça, aquilo que te guia e parece natural desde o primeiro momento. Quando construo interfaces com React e Next.js, busco essa mesma fluidez: que o design não seja apenas visualmente polido, mas que responda à interação de forma humana e sem atritos. Um bom aplicativo, assim como uma boa melodia, não impõe barreiras; te leva pela mão de forma intuitiva.',
    'about.sec3.title': 'III. Ritmo — Precisão e Detalhe',
    'about.sec3.quote': '"O pulso invisível que sustenta todo o sistema."',
    'about.sec3.p': 'No som ao vivo ou em uma mixagem de estúdio, se o ritmo falha por um milissegundo, toda a estrutura treme. Após anos gerenciando esse rigor técnico, ganhei um respeito profundo pelo que acontece nos bastidores: a limpeza da lógica, o desempenho do código e uma arquitetura ordenada. É essa bússola interna e constante que diferencia um sistema que "simplesmente funciona" de um verdadeiramente eficiente.',
    'about.sec4.title': 'IV. Composição — Qualidade e Robustez',
    'about.sec4.quote': '"Uma obra termina quando prova que pode resistir ao teste do tempo."',
    'about.sec4.p': 'Como Desenvolvedor Fullstack com alma de QA, não me contento com um aplicativo parecendo bom na superfície; preciso testá-lo na realidade. Complemento meu desenvolvimento com bases sólidas em backend (Node.js/Python), bancos de dados e testes manuais para auditar cada entrega. Meu compromisso é fechar a composição técnica com software honesto, estável e seguro, pronto para operar sem falhas em produção.',

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
