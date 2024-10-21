import imagemProjeto from '../../assets/Projetos/TaskApp/taskapp-home.webp';
import imagemProjeto2 from '../../assets/Projetos/Timhontel/timhontel-navegue.webp';
import imagemProjeto3 from '../../assets/Projetos/EcommerceApi/ecommerce.webp';
import imagemProjeto4 from '../../assets/Projetos/MiniGameCalculator/Minigamecalculator.webp';
import imagemProjeto5 from '../../assets/Projetos/ApiPlanner/api-planner.webp';

export const projetosConfiguracao = [
    {
        imagem: ['https://i.im.ge/2024/10/17/kAio2f.7.png',imagemProjeto3],
        nome: 'Ecommerce',
        tags: [
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#222323' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Zod', cor: '#284c83' },
            { nome: 'Docker', cor: '#139edd' }
        ],
        descricao: 'Gerenciador de Tarefas com autenticação e Jwt',
        link: 'https://github.com/PHziinn/e-commerce_back-end'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAhni4.5.png',imagemProjeto],
        nome: 'Task App',
        tags: [
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'Material UI', cor: '#0081cc' },
            { nome: 'Vite', cor: '#aa4cff' },
            { nome: 'Typescript', cor: '#3178c6' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#222323' },
            { nome: 'Prisma', cor: '#0d344b' }
        ],
        descricao: 'Gerenciador de Tarefas',
        link: 'https://github.com/Guilhermeprog3/Front-Task'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiMCP.1.png',imagemProjeto4],
        nome: 'MiniGameCalculator',
        tags: [
            { nome: 'React Native', cor: '#05d2fe' },
            { nome: 'Firebase', cor: '#f88008' },
            { nome: 'Expo Go', cor: '#000021' }
        ],
        descricao: 'Mini jogo mobile de calcular expressões simples',
        link: 'https://github.com/Jhopn/Minigamecalculator'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiQv1.6.png',imagemProjeto5],
        nome: 'Api Planner',
        tags: [
            { nome: 'Java', cor: '#ec272c' },
            { nome: 'Spring Boot', cor: '#72b545' },
            { nome: 'Maven', cor: '#c42645' },
            { nome: 'H2 Database', cor: '#114d70' }
        ],
        descricao: 'API para a criação de viajens com os amigos, incluindo atividades e links.',
        link: 'https://github.com/Jhopn/Api-Planner/tree/master'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAhe7p.3.png',imagemProjeto2],
        nome: 'TimHontel',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' },
            { nome: 'Javascript', cor: '#f6df1c' },
            { nome: 'Bootstrap', cor: '#7412F7' }
        ],
        descricao: 'Criação de layout',
        link: 'https://github.com/Jhopn/Timhontel'
    }
];