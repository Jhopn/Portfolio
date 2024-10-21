import imagemProjeto1 from '../../assets/Projetos/TaskManager/inicio.webp';
import imagemProjeto2 from '../../assets/Projetos/MyLinks/my_links.webp';
import imagemProjeto3 from '../../assets/Projetos/GatoPidao/gato_pidao.webp';

export const projetosRow = [
    {
        imagem: ['https://i.im.ge/2024/10/17/kAh4cC.4.png'],
        nome: 'Rdt',
        tags: [
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#222323' },
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' },
            { nome: 'Javascript', cor: '#f6df1c' }
        ],
        descricao: 'Aplicação do protocolo Rdt para aprendizado e compreendimento do funcionamento do mesmo.',
        link: 'https://github.com/LPeter-nm/rdt3.0-socket'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiX6m.8.png',imagemProjeto1],
        nome: 'Task Manager',
        tags: [
            { nome: 'React Native', cor: '#05d2fe' },
            { nome: 'Supabase', cor: '#41cf8d' },
            { nome: 'Expo Go', cor: '#000021' }
        ],
        descricao: 'Criação de um gerenciador de tarefas',
        link: 'https://github.com/Jhopn/taskapp'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiOgT.mylinks.png',imagemProjeto2],
        nome: 'My Links',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' }
        ],
        descricao: 'Copia de layout do linktree com meus links',
        link: 'https://github.com/Jhopn/My-links'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAhBeq.2.png',imagemProjeto3],
        nome: 'Cat Eat',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' },
            { nome: 'Javascript', cor: '#f6df1c' }
        ],
        descricao: 'Criação de um jogo com html, css e javascript',
        link: 'https://github.com/Jhopn/CatEat'
    },
];