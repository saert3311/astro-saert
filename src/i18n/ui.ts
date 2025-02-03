export const languages = {
    en: 'English',
    es: 'Español'
};

export const defaultLang = 'es';

const nav = {
    en: {
        'nav.tools': 'Tools',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.status' : 'Status',
    },
    es: {
        'nav.tools': 'Herramientas',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.status' : 'Monitor',
    }
};

const welcome = {
    en: {
        'welcome.avaliable': 'Avaliable to work',
        'welcome.hello': "Hello, I'am Jose Duarte (saert)",
        'welcome.web': 'Web developer',
        'welcome.enthusiast': 'enthusiastic about technology and its impact on daily life, committed to creating innovative web solutions.'
    },
    es: {
        'welcome.avaliable': 'Disponible para trabajar',
        'welcome.hello': "Hola, soy Jose Duarte (saert)",
        'welcome.web': 'Web developer',
        'welcome.enthusiast': 'entusiasta de la tecnología y su impacto en la vida cotidiana, comprometido con la creación de soluciones web innovadoras.'
    }
};

const description = {
    en: {
        'description.for': 'For',
        'description.for.text': 'Starting a business or personal brand is a headache; now imagine managing your digital presence or resources when you\'re just starting out. The worst part is that if you want to grow, you must keep that task up to date.',
        'description.to': 'To',
        'description.to.text': 'Small and medium-sized business owners, as well as individuals looking to break into the most competitive market, must master digital resources—it\'s imperative for anyone to exist in the digital world.',
        'description.how': 'How',
        'description.how.text': 'A nearly artisanal dedication to processes, small and medium-sized businesses have the advantage of having much closer control over their processes, as well as the implementations they choose to carry out.',
        'description.title': "I'am good in this",
        'description.subtitle': "Those are the services i offer",
        'description.web': 'WEB DEVELOPMENT',
        'description.web.text': "If you're not on the internet, you don't exist—it's that simple. Shout Here I am! in the best way possible.",
        'description.support': 'SUPPORT & MAINTENANCE',
        'description.support.text': 'PC, Mac, Networks, Servers, Cloud, Windows, Linux, CCTV— all those strange words require attention.'
    },
    es: {
        'description.for': 'Por',
        'description.for.text': 'Comenzar un negocio o marca personal es un dolor de cabeza, ahora imaginate gestionar tu presencia o recursos digitales cuando apenas inicias. Lo peor de todo es que si quieres crecer debes tener esa asignatura al dia.',
        'description.to': 'Para',
        'description.to.text': 'Pequeños, medianos empresarios, y tambien individuales que quieran abrirse en el mas competitivo mercado, el dominio de los recursos digitales es imperativo para que cualquiera pueda existir en el mundo digital.',
        'description.how': 'Como',
        'description.how.text': 'Dedicacion casi artesanal a los procesos, la pequeña y mediana empresa tiene la ventaja de tener un control mucho mas cercano de sus procesos asi como de las implementaciones que decidan realizar.',
        'description.title': "En esto soy bueno",
        'description.subtitle': "Estos son los servicios que ofrezco",
        'description.web': 'DESARROLLO WEB',
        'description.web.text': "Si no estas en internet no existes, asi de simple, grita aqui estoy de la mejor manera posible",
        'description.support': 'SOPORTE Y MANTENIMIENTO',
        'description.support.text': 'PC, Mac, Redes, Servidores, Cloud, Windows, Linux, CCTV, todas esas palabras extrañas requieren atención.'
    }
};

export const ui = {
    en: {
        ...nav.en,
        ...welcome.en,
        ...description.en
    },
    es: {
        ...nav.es,
        ...welcome.es,
        ...description.es
    }
} as const;
