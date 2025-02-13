import imagemTaskApp from '../../assets/Projetos/TaskApp/taskapp-home.webp';
import imagemTimhontel from '../../assets/Projetos/Timhontel/timhontel-home.webp';
import imagemMiniGameCalculator2 from '../../assets/Projetos/MiniGameCalculator/minigamecalculator-dark-mode.webp';
import imagemMiniGameCalculator3 from '../../assets/Projetos/MiniGameCalculator/minigamecalculator-rank.webp';
import imagemApiPlanner from '../../assets/Projetos/ApiPlanner/api-planner.webp';
import imagemSlideEcommerceExpress from '../../assets/Projetos/EcommerceApi/ecommerceExpress.webp';
import imagemCardEcommerceNest from '../../assets/Projetos/E-commerce/projetoEcommerce.webp';
import imagemSliderEcommerceNest from '../../assets/Projetos/E-commerce/ecommerce-deve.webp';
import imagemSliderEcommerceNest2 from '../../assets/Projetos/E-commerce/ecommerce-deve-footer.webp';
import imagemCardAnyRecipe from '../../assets/Projetos/AnyRecipe/capa_any_recipe.webp';
import imagemSliderAnyRecipeLogin from '../../assets/Projetos/AnyRecipe/any_recipe_login.png';
import imagemSliderAnyRecipeHome from '../../assets/Projetos/AnyRecipe/any_recipe_home.jpeg';
import imagemSliderAnyRecipeIndex from '../../assets/Projetos/AnyRecipe/any_recipe_index.jpeg';
import imagemSliderAnyRecipeNew from '../../assets/Projetos/AnyRecipe/any_recipe_new.jpeg';
import imagemCardTodoList from '../../assets/Projetos/TodoList/capa_todo_list.webp';
import imagemSliderTodolistLogin from '../../assets/Projetos/TodoList/todo_list_login.png';
import imagemSliderTodolistHome from '../../assets/Projetos/TodoList/todo_list_home.png';
import imagemSliderTodolistAdm from '../../assets/Projetos/TodoList/todo_list_adm.png';
import imagemSliderTodolistPlaylist from '../../assets/Projetos/TodoList/todo_list_playlists.png';
import imagemSliderTodolistRestore from '../../assets/Projetos/TodoList/todo_list_restore.png';
import imagemSliderTodolistEmailToken from '../../assets/Projetos/TodoList/todo_list_email.png';





import semImagem from '../../assets/Projetos/semimagem.webp';


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
        linkSite: 'https://developerecommerce.netlify.app/home'
    },
    {
        imagem: [imagemCardAnyRecipe, imagemSliderAnyRecipeLogin, imagemSliderAnyRecipeHome,imagemSliderAnyRecipeIndex, imagemSliderAnyRecipeNew],
        nome: 'AnyRecipe',
        tags: [
            { nome: 'Typescript', cor: '#3178c6' },
            { nome: 'NextJs', cor: '#000000' },
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'Next Auth', cor: '#9C21D9' },
            { nome: 'Tailwind', cor: '#00BCFF' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#000000' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Docker', cor: '#139edd' },
        ],
        descricao: ' Um aplicação que permite aos usuários explorar, cadastrar e favoritar receitas culinárias.	Funcionalidades principais: Tela inicial com lista de receitas divididas por categorias (sobremesas, massas, etc.). Busca por nome ou ingredientes. Cadastro de novas receitas com foto e descrição. Opção para marcar receitas como favoritas e acesso rápido às favoritas.       ',
        link: 'https://github.com/LPeter-nm/recipe-front-end',
        linkSite: ''
    },
    {
        imagem: [imagemCardTodoList, imagemSliderTodolistLogin, imagemSliderTodolistAdm, imagemSliderTodolistHome,  imagemSliderTodolistPlaylist,  imagemSliderTodolistRestore,  imagemSliderTodolistEmailToken],
        nome: 'TodoList',
        tags: [
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'React Query', cor: '#F05936' },
            { nome: 'Material UI', cor: '#0081cc' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'NestJs', cor: '#e12965' },
            { nome: 'Prisma', cor: '#0d344b' },
            { nome: 'Docker', cor: '#139edd' },
            { nome: 'Vite', cor: '#aa4cff' },
        ],
        descricao: 'Este projeto é um sistema simples onde os usuários podem: Fazer login para acessar uma lista de tarefas. Criar, editar, excluir e marcar tarefas como concluídas. com filtros de "Concluídas" e "Pendentes". Além de recuperar sua senha via um token enviado por email.',
        link: 'https://github.com/DeveloperCommunitty/to-do-list_back-end',
        linkSite: ''
    },
    {
        imagem: [semImagem],
        nome: 'Entrega de trabalhos',
        tags: [
            { nome: 'Typescript', cor: '#3178c6' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'AdonisJs', cor: '#5a45fe' },
            { nome: 'Docker', cor: '#139edd' },
        ],
        descricao: 'Sistema para que professores acompanhem a entrega de trabalhos pelos alunos e mantenham um registro das notas. Este projeto é uma API que gerencia Sessões, Trabalhos, Realizações, Turmas, Alunos, Professores e Aulas, oferecendo rotas CRUD protegidas por autenticação quando necessário.',
        link: 'https://github.com/LPeter-nm/api_entrega_trabalhos',
        linkSite: ''
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAio2f.7.png', imagemSlideEcommerceExpress],
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
        imagem: ['https://i.im.ge/2024/10/17/kAhni4.5.png',imagemTaskApp],
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
        descricao: 'Projeto feito para a gerenciamento de tarefas pelo usuario, incluindo o frontend e o backend, tive participação em ambas as partes. Funcionalidades: Criar, Apagar, Alterar e Colocar a tarefa como concluida, além disso o úsuario tem um perfil contendo suas informações.',
        link: 'https://github.com/Guilhermeprog3/Front-Task',
        linkSite: ''
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiMCP.1.png', imagemMiniGameCalculator2, imagemMiniGameCalculator3],
        nome: 'MiniGameCalculator',
        tags: [
            { nome: 'React Native', cor: '#05d2fe' },
            { nome: 'Firebase', cor: '#f88008' },
            { nome: 'Expo Go', cor: '#000021' }
        ],
        descricao: 'Aplicativo para celular criado para aprender expressões matematicas enquanto se diverte e compete através do rank presente no jogo. Funcinalidades: É possivel criar sua conta e jogar, seus pontos são salvos dentro da tabela geral de pontuação.',
        link: 'https://github.com/Jhopn/Minigamecalculator',
        linkSite: ''
    },
    {
        imagem: ['https://i.im.ge/2024/10/17/kAiQv1.6.png',imagemApiPlanner],
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
    {
        imagem: ['https://i.im.ge/2024/10/17/kAhe7p.3.png',imagemTimhontel],
        nome: 'TimHontel',
        tags: [
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' },
            { nome: 'Javascript', cor: '#f6df1c' },
            { nome: 'Bootstrap', cor: '#7412F7' }
        ],
        descricao: 'Projeto para fixação do aprendizado de html e css, Timhontel foi criado totalmente por mim inspirado em alguns designs pertinentes ao tema.',
        link: 'https://github.com/Jhopn/Timhontel',
        linkSite: 'https://projeto-final-jhopn.vercel.app/'
    }
];