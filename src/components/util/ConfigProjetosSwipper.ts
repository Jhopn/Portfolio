import imagemCardApiPlanner from '../../assets/Projetos/ApiPlanner/capa_api_planner.png';
import imagemSliderApiPlanner from '../../assets/Projetos/ApiPlanner/api-planner.webp';
import imagemCardEcommerceExpress from '../../assets/Projetos/EcommerceApi/capa_ecommerce.png';
import imagemSlideEcommerceExpress from '../../assets/Projetos/EcommerceApi/ecommerceExpress.webp';
import imagemCardEcommerceNest from '../../assets/Projetos/E-commerce/projetoEcommerce.webp';
import imagemSliderEcommerceNest from '../../assets/Projetos/E-commerce/ecommerce-deve.webp';
import imagemSliderEcommerceNest2 from '../../assets/Projetos/E-commerce/ecommerce-deve-footer.webp';
import imagemCardImadio from '../../assets/Projetos/Imadio/capa_imadio.png';
import imagemSliderImadioHistorico from '../../assets/Projetos/Imadio/historico_imadio.png';
import imagemSliderImadioHome from '../../assets/Projetos/Imadio/home_imadio.png';
import imagemSliderImadioPersonalizar from '../../assets/Projetos/Imadio/personalizar_imadio.png';
import imagemCardZelus from '../../assets/Projetos/Zelus/capa_zelus.png';
import imagemSliderZelusApi from '../../assets/Projetos/Zelus/zelus_api.png';
import imagemSliderZelusHomeMobile from '../../assets/Projetos/Zelus/zelus_home_mobile.png';
import imagemSliderZelusPainel from '../../assets/Projetos/Zelus/painel_administrativo_zelus.jpeg';
import imagemCardReport from '../../assets/Projetos/Report/capa_report.png';
import imagemSliderCreateReport from '../../assets/Projetos/Report/criacao_report.png';
import imagemSliderHomeReport from '../../assets/Projetos/Report/home_report.png';
import imagemSliderModalExcluirReport from '../../assets/Projetos/Report/modal_excluir_report.png';
import imagemCardSpotted from '../../assets/Projetos/Spotted/capa_spotted.png';

export const projetosConfiguracao = [
    {
        imagem: [imagemCardEcommerceNest, imagemSliderEcommerceNest, imagemSliderEcommerceNest2],
        nome: 'E-commerce',
        tags: [
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'NestJs', cor: '#e12965' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Vite', cor: '#aa4cff' },
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'Material UI', cor: '#0081cc' },
            { nome: 'Redux', cor: '#764abc' },
        ],
        descricao: 'Criado como MVP(Minimo produto viavel) esse projeto teve como objetivo refazer o ecommerce anterior com um novo framework o NestJs, e para nos alinharmos como equipe. Neste projeto participei como analista de Backend e posteriormente participei da integração junto ao Frontend. Funcionalidades:  oferece recursos para criar, gerenciar e integrar plataformas de comércio eletrônico. Ela permite operações de produtos, pedidos, clientes e carrinhos de compras, com autenticação baseada em tokens para segurança. ',
        link: 'https://github.com/DeveloperCommunitty/E-commerce-back-end',
        linkSite: ''
    },
    {
        imagem: [imagemCardReport, imagemSliderCreateReport, imagemSliderHomeReport, imagemSliderModalExcluirReport],
        nome: 'Report',
        tags: [
            { nome: 'Typescript', cor: '#3178c6' },
            { nome: 'NextJs', cor: '#000000' },
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'Next Auth', cor: '#9C21D9' },
            { nome: 'Tailwind', cor: '#00BCFF' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'NestJs', cor: '#e12965' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Docker', cor: '#139edd' },
        ],
        descricao: 'Desenvolvido conforme as necessidades do cliente, este sistema permite registrar mutirões realizados por uma empresa da área hospitalar. Conta com funcionalidades para exportar os dados dos pacientes em PDF e planilhas Excel, facilitando a gestão e o acompanhamento das informações.',
        link: '',
        linkSite: ''
    },
    {
        imagem: [imagemCardImadio, imagemSliderImadioHistorico, imagemSliderImadioHome, imagemSliderImadioPersonalizar],
        nome: 'Imadio',
        tags: [
            { nome: 'React Native', cor: '#05d2fe' },
            { nome: 'Expo Go', cor: '#000021' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'NestJs', cor: '#e12965' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Python', cor: '#fed639' },
        ],
        descricao: 'Projeto desenvolvido como Trabalho de Conclusão de Curso em Sistemas para Internet. O Imadio é um aplicativo voltado para pessoas com deficiência visual, permitindo converter imagens em texto por meio de uma API de inteligência artificial, e posteriormente salvar essas conversões em um banco de dados para consulta futura.',
        link: '',
        linkSite: ''
    },
    {
        imagem: [imagemCardZelus, imagemSliderZelusApi, imagemSliderZelusHomeMobile, imagemSliderZelusPainel],
        nome: 'Zelus',
        tags: [
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'AdonisJs', cor: '#5845ff' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Docker', cor: '#139edd' },
        ],
        descricao: 'Aplicativo voltado à cidadania ativa, o Zelus permite que usuários registrem e compartilhem fotos e vídeos de problemas urbanos como buracos, entulhos e outras demandas ignoradas pelo poder público. A solução conta com autenticação de usuários, sistema de comentários, painel administrativo completo para gestão das postagens e foi desenvolvida com backend sob minha liderança.',
        link: '',
        linkSite: ''
    },

    {
        imagem: [imagemCardEcommerceExpress, imagemSlideEcommerceExpress],
        nome: 'Ecommerce',
        tags: [
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#222323' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Zod', cor: '#284c83' },
            { nome: 'Docker', cor: '#139edd' },
        ],
        descricao: 'Esta é uma API que oferece recursos para criar, gerenciar e integrar plataformas de comércio eletrônico. Ela permite operações de produtos, pedidos, clientes e carrinhos de compras, com autenticação baseada em tokens para segurança.',
        link: '',
        linkSite: ''
    },
    {
        imagem: [imagemCardSpotted],
        nome: 'Spotted',
        tags: [
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Firebase', cor: '#f88008' },
        ],
        descricao: 'Aplicativo desenvolvido com arquitetura NoSQL e integração completa com o Firebase. O Spotted foi idealizado pelo cliente e contou com minha contribuição direta na construção da API, garantindo performance, escalabilidade e segurança para o armazenamento e acesso aos dados.',
        link: '',
        linkSite: ''
    },
    {
        imagem: [imagemCardApiPlanner, imagemSliderApiPlanner],
        nome: 'Api Planner',
        tags: [
            { nome: 'Java', cor: '#ec272c' },
            { nome: 'Spring Boot', cor: '#72b545' },
            { nome: 'Maven', cor: '#c42645' },
            { nome: 'H2 Database', cor: '#114d70' }
        ],
        descricao: 'API para a criação de viajens com os amigos, incluindo atividades e links. Meu primeiro projeto com Java, criei para ter uma experiência maior com spring boot, após o termino do curso de Java que realizei tive a oportunidade de produzir este projeto junto do NLW da Rocketseat.',
        link: 'https://github.com/Jhopn/Api-Planner/tree/master',
        linkSite: ''
    },
];