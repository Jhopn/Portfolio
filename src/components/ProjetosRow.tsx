import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import { projetosConfiguracao } from "./ProjetosSwiper.tsx";
import imagemProjeto from '../assets/Projetos/Rdt/rdt.webp';
import imagemProjeto1 from '../assets/Projetos/TaskManager/inicio.webp';


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
        descricao: 'Criação de layout',
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
        descricao: 'Criação de layout',
        link: 'https://github.com/Jhopn/taskapp'
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
