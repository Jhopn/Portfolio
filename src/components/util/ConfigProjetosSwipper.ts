import imagemProjeto from '../../assets/Projetos/TaskApp/taskapp-home.webp';
import imagemProjeto2 from '../../assets/Projetos/Timhontel/timhontel-navegue.webp';
import imagemProjeto3 from '../../assets/Projetos/EcommerceApi/ecommerce.webp';
import imagemProjeto4 from '../../assets/Projetos/MiniGameCalculator/Minigamecalculator.webp';

export const projetosConfiguracao = [
    {
        imagem: imagemProjeto3,
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
        imagem: imagemProjeto,
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
        imagem: imagemProjeto4,
        nome: 'MiniGameCalculator',
        tags: [
            { nome: 'React Native', cor: '#05d2fe' },
            { nome: 'Firebase', cor: '#f88008' },
            { nome: 'Expo Go', cor: '#000021' }
        ],
        descricao: 'Criação de layout',
        link: 'https://github.com/Jhopn/Minigamecalculator'
    },
    {
        imagem: imagemProjeto2,
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