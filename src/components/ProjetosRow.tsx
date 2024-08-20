import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import { projetosConfiguracao } from "./ProjetosSwiper.tsx";
import imagemProjeto5 from '../assets/Projetos/Rdt/rdt.webp';

export const projetos = [
    {
        imagem: imagemProjeto5,
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
