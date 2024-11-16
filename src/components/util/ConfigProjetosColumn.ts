import imagemTaskManager from '../../assets/Projetos/TaskManager/gerenciador.webp';
import imagemMylinks from '../../assets/Projetos/MyLinks/my_links.webp';
import imagemCatEat from '../../assets/Projetos/GatoPidao/gato_pidao.webp';

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
        descricao: 'Este projeto foi feito com o intuito de aplicar o protocolo de forma que tivesse a oportunidade de compreender e aprender ao mesmo tempo que o criávamos. Portanto, o repositório é de cunho educacional e de aprendizagem.',
        link: 'https://github.com/LPeter-nm/rdt3.0-socket',
        linkSite: ''
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiX6m.8.png',imagemTaskManager],
        nome: 'Task Manager',
        tags: [
            { nome: 'React Native', cor: '#05d2fe' },
            { nome: 'Supabase', cor: '#41cf8d' },
            { nome: 'Expo Go', cor: '#000021' }
        ],
        descricao: 'Aplicativo para gerenciar tarefas. Permite criar tarefas, botar como concluída e apaga-lá.',
        link: 'https://github.com/Jhopn/taskapp',
        linkSite: ''
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiOgT.mylinks.png',imagemMylinks],
        nome: 'My Links',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' }
        ],
        descricao: 'Criada com o intuito de aprender e praticar html e css, este projeto é uma inspiração no layout do linktree com meus links.',
        link: 'https://github.com/Jhopn/My-links',
        linkSite: 'https://mylinktree-jhopn.vercel.app/'
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAhBeq.2.png',imagemCatEat],
        nome: 'Cat Eat',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' },
            { nome: 'Javascript', cor: '#f6df1c' }
        ],
        descricao: 'Cat Eat é um jogo criado com html, css e javascript, tem a finalidade de alimentar o gato antes que o mesmo congele, então é necessário alimenta-ló com um achocolatado.',
        link: '',
        linkSite: ''
    },
];