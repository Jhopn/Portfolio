export interface Experiencia {
    empresa: string;
    cargo: string;
    periodo: string;
    local: string;
    descricao: string[];
    stack: string[];
}

export interface Patente {
    titulo: string;
    numero: string;
    data: string;
    descricao: string;
    link: string;
}

export const experiencias: Experiencia[] = [
    {
        empresa: 'PIT - Piauí Instituto de Tecnologia',
        cargo: 'Desenvolvedor Full Stack',
        periodo: 'Out. 2025 – Atual',
        local: 'Teresina, PI (Presencial)',
        descricao: [
            'Desenvolvimento e manutenção de sistemas do Governo do Piauí, atuando do backend ao frontend.',
            'Projetos: SUAP, SGC (Sistema de Gestão de Concursos) e Dataroom, com Python e PostgreSQL; Piauí em Dados, com React e Express; e Piauí Oportunidades, com Vue, NestJs e integração com inteligência artificial.',
        ],
        stack: ['Python', 'Django', 'Vue', 'NestJs', 'React', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'Jenkins', 'Grafana', 'Prometheus', 'Inteligência Artificial'],
    },
    {
        empresa: 'Developer Community',
        cargo: 'Desenvolvedor Full Stack Júnior',
        periodo: 'Abr. 2024 – Out. 2025',
        local: 'Teresina, PI (Remoto)',
        descricao: [
            'Comunidade de desenvolvedores criada em Teresina - PI, focada em criar projetos em equipe com as tecnologias e métodos atuais do mercado.',
            'Participei da ideação, prototipagem e gerenciamento do backend de projetos como Ecommerce, ConstructEasy e projetos freelancers.',
        ],
        stack: ['React', 'NextJs', 'NestJs', 'Express', 'Prisma', 'PostgreSQL', 'Firebase', 'OpenAI', 'Nginx'],
    },
    {
        empresa: 'Prefeitura Municipal de Timon',
        cargo: 'Desenvolvedor de Software (Estágio)',
        periodo: 'Jul. 2025 – Set. 2025',
        local: 'Timon, MA (Híbrido)',
        descricao: [
            'Atuei na Agência de Tecnologia e Informação (ATI), responsável pelos sites e pela manutenção dos serviços online da prefeitura.',
            'Participei do desenvolvimento, elaboração e implantação do Sistema Eletrônico de Informações (SEI) e de sites correlacionados, reduzindo custos, burocracias e redundâncias de processos no município.',
        ],
        stack: ['Wordpress', 'React', 'NextJs', 'NestJs', 'Express', 'Prisma', 'PostgreSQL', 'Linux'],
    },
];

export const patentes: Patente[] = [
    {
        titulo: 'IMADIO: Conversor de imagem para áudio e inclusão de pessoa com deficiência visual',
        numero: 'BR512026003642-9',
        data: '',
        descricao: 'Programa de computador registrado no INPI, desenvolvido como Trabalho de Conclusão de Curso no IFMA. O Imadio é um aplicativo voltado para pessoas com deficiência visual que converte imagens em texto e áudio por meio de inteligência artificial.',
        link: '',
    },
];
