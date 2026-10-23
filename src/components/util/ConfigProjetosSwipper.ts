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
import capaSei from '../../assets/Projetos/PortalSEI/capa-sei.png';
import imagemSeiHomeTop from '../../assets/Projetos/PortalSEI/home-sei-top.png';
import imagemSeiHomeBottom from '../../assets/Projetos/PortalSEI/home-sei-bottom.png';
import imagemOportunidadesHome from '../../assets/Projetos/PiauiOportunidades/home_oportunidades.png';
import imagemOportunidadesCompleto from '../../assets/Projetos/PiauiOportunidades/oportunidades_completo.png';
import imagemPiauiEmDadosHome from '../../assets/Projetos/PiauiEmDados/home_piaui_em_dados.png';
import imagemSuapLogin from '../../assets/Projetos/Suap/login_suap.png';
import imagemSgcHome from '../../assets/Projetos/SGC/home_sgc.png';
import semImagem from '../../assets/Projetos/semimagem.webp';

export const projetosConfiguracao = [
    {
        imagem: [imagemOportunidadesHome, imagemOportunidadesCompleto],
        nome: 'Piauí Oportunidades',
        tags: [
            { nome: 'Vue', cor: '#42b883' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'NestJs', cor: '#e12965' },
            { nome: 'Python', cor: '#fed639' },
            { nome: 'Inteligência Artificial', cor: '#10a37f' },
            { nome: 'PostgreSQL', cor: '#336791' },
            { nome: 'Redis', cor: '#dc382d' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Jenkins', cor: '#d24939' },
            { nome: 'Grafana', cor: '#f46800' },
            { nome: 'Prometheus', cor: '#e6522c' },
        ],
        descricao: 'Plataforma oficial do Governo do Piauí que conecta jovens talentos a oportunidades de emprego, estágio e desenvolvimento profissional. Reúne três perfis — candidato, empresa e autônomo — permitindo buscar e divulgar vagas, acessar cursos gratuitos de parceiros e acompanhar editais públicos. Conta com integração com inteligência artificial, incluindo a assistente virtual "Naza", que orienta os usuários dentro da plataforma.',
        link: '',
        linkSite: 'https://piauioportunidades.pi.gov.br/'
    },
    {
        imagem: [imagemPiauiEmDadosHome],
        nome: 'Piauí em Dados',
        tags: [
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#222323' },
            { nome: 'PostgreSQL', cor: '#336791' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Jenkins', cor: '#d24939' },
        ],
        descricao: 'Plataforma digital do Governo do Piauí que centraliza informações estratégicas para impulsionar novos negócios e identificar oportunidades no estado. Oferece mapas interativos, dashboards analíticos, painel de negócios e relatórios de inteligência que transformam dados públicos em conhecimento acessível, integrando também iniciativas como o "Por que o Piauí?" e o Observatório de Startups.',
        link: '',
        linkSite: 'https://piauiemdados.pi.gov.br/'
    },
    {
        imagem: [imagemSuapLogin],
        nome: 'SUAP',
        tags: [
            { nome: 'Python', cor: '#fed639' },
            { nome: 'Django', cor: '#0c4b33' },
            { nome: 'PostgreSQL', cor: '#336791' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Jenkins', cor: '#d24939' },
        ],
        descricao: 'O SUAP (Sistema Unificado de Administração Pública) é um sistema de gestão institucional desenvolvido originalmente pelo IFRN e adaptado para o PIT. Atuo na manutenção e evolução do sistema, que integra módulos de processos eletrônicos, contratos, gestão de pessoas, ensino, extensão e auditoria, além de serviços públicos como validação de documentos e emissão de certificados.',
        link: '',
        linkSite: 'https://suap.pit.pi.gov.br/accounts/login/?next=/'
    },
    {
        imagem: [imagemSgcHome],
        nome: 'SGC',
        tags: [
            { nome: 'Python', cor: '#fed639' },
            { nome: 'Django', cor: '#0c4b33' },
            { nome: 'PostgreSQL', cor: '#336791' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Jenkins', cor: '#d24939' },
        ],
        descricao: 'O SGC (Sistema de Gestão de Concursos) é a plataforma de processos seletivos do PIT. Por meio do Portal do Candidato, os participantes realizam cadastro, inscrição, consulta de editais e acompanhamento das etapas de cada seleção, enquanto a equipe administrativa gerencia todo o ciclo dos processos seletivos.',
        link: '',
        linkSite: 'https://hml.concursos.pit.pi.gov.br/'
    },
    {
        imagem: [semImagem],
        nome: 'Dataroom',
        tags: [
            { nome: 'Python', cor: '#fed639' },
            { nome: 'Django', cor: '#0c4b33' },
            { nome: 'PostgreSQL', cor: '#336791' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Jenkins', cor: '#d24939' },
        ],
        descricao: 'Sistema de uso interno para armazenamento, organização e compartilhamento controlado de documentos e informações estratégicas. Por ser uma ferramenta interna, não possui acesso público.',
        link: '',
        linkSite: ''
    },
    {
        imagem: [capaSei,imagemSeiHomeTop, imagemSeiHomeBottom],
        nome: 'Portal SEI',
        tags: [
            { nome: 'Wordpress', cor: '#21749b' },
            { nome: 'PHP', cor: '#767ab3' },
        ],
        descricao: 'Projeto desenvolvido para a Prefeitura Municipal de Timon, o Portal SEI é uma plataforma de gestão documental que integra o Sistema Eletrônico de Informações (SEI) com o site institucional da prefeitura. O objetivo principal é facilitar o acesso dos cidadãos aos serviços públicos, permitindo a consulta e o acompanhamento de processos administrativos de forma transparente e eficiente. O portal foi customizado para atender às necessidades específicas da administração municipal, garantindo uma interface amigável e funcionalidades que promovem a participação cidadã.',
        link: '',
        linkSite: 'https://portalsei.timon.ma.gov.br/'
    },
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
        descricao: 'Projeto desenvolvido como Trabalho de Conclusão de Curso em Sistemas para Internet. O Imadio é um aplicativo voltado para pessoas com deficiência visual, permitindo converter imagens em texto por meio de uma API de inteligência artificial, e posteriormente salvar essas conversões em um banco de dados para consulta futura. O software é registrado no INPI sob o número BR512026003642-9.',
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