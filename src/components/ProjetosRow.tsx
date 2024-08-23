import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import { projetosConfiguracao } from "./ProjetosSwiper.tsx";
import imagemProjeto from '../assets/Projetos/Rdt/rdt.webp';
import imagemProjeto1 from '../assets/Projetos/TaskManager/inicio.webp';
import imagemProjeto2 from '../assets/Projetos/MyLinks/my_links.webp';
import imagemProjeto3 from '../assets/Projetos/GatoPidao/gato_pidao.webp';



export const projetos = [
    {
        imagem: imagemProjeto,
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
        imagem: imagemProjeto1,
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
        imagem: imagemProjeto2,
        nome: 'My Links',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' }
        ],
        descricao: 'Copia de layout do linktree com meus links',
        link: 'https://github.com/Jhopn/My-links'
    },
    {
        imagem: imagemProjeto3,
        nome: 'Cat Eat',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' },
            { nome: 'Javascript', cor: '#f6df1c' }
        ],
        descricao: 'Criação de um jogo com html, css e javascript',
        link: 'https://github.com/Jhopn/CatEat'
    }
];

export function ProjetosRow() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',  flexWrap: 'wrap', padding: '1rem' }}>
            {projetosConfiguracao.map((projeto, index) => (
                <div key={index} style={{ width: '30%' }}>
                <MultiActionAreaCard
                    key={index}
                    imagemProjeto={projeto.imagem}
                    nomeProjeto={projeto.nome}
                    tags={projeto.tags}
                    link={projeto.link}
                    descricaoProjeto={projeto.descricao}
                    />
                </div>
            ))}
            
            {projetos.map((projeto, index) => (
                <div key={index} style={{ width: '30%' }}>
                <MultiActionAreaCard
                    key={index}
                    imagemProjeto={projeto.imagem}
                    nomeProjeto={projeto.nome}
                    tags={projeto.tags}
                    link={projeto.link}
                    descricaoProjeto={projeto.descricao}
                />
                </div>
            ))}
        </div>
    );
}
