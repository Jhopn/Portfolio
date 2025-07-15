import imagemTaskManager from '../../assets/Projetos/TaskManager/gerenciador.webp';
import imagemMylinks from '../../assets/Projetos/MyLinks/my_links.webp';
import imagemCatEat from '../../assets/Projetos/GatoPidao/gato_pidao.webp';
import imagemCardTodoList from '../../assets/Projetos/TodoList/capa_todo_list.webp';
import imagemSliderTodolistLogin from '../../assets/Projetos/TodoList/todo_list_login.png';
import imagemSliderTodolistHome from '../../assets/Projetos/TodoList/todo_list_home.png';
import imagemSliderTodolistAdm from '../../assets/Projetos/TodoList/todo_list_adm.png';
import imagemSliderTodolistPlaylist from '../../assets/Projetos/TodoList/todo_list_playlists.png';
import imagemSliderTodolistRestore from '../../assets/Projetos/TodoList/todo_list_restore.png';
import imagemSliderTodolistEmailToken from '../../assets/Projetos/TodoList/todo_list_email.png';
import imagemTaskApp from '../../assets/Projetos/TaskApp/taskapp-home.webp';
import semImagem from '../../assets/Projetos/semimagem.webp';
import imagemMiniGameCalculator2 from '../../assets/Projetos/MiniGameCalculator/minigamecalculator-dark-mode.webp';
import imagemMiniGameCalculator3 from '../../assets/Projetos/MiniGameCalculator/minigamecalculator-rank.webp';
import imagemCardAnyRecipe from '../../assets/Projetos/AnyRecipe/capa_any_recipe.webp';
import imagemSliderAnyRecipeLogin from '../../assets/Projetos/AnyRecipe/any_recipe_login.png';
import imagemSliderAnyRecipeHome from '../../assets/Projetos/AnyRecipe/any_recipe_home.jpeg';
import imagemSliderAnyRecipeIndex from '../../assets/Projetos/AnyRecipe/any_recipe_index.jpeg';
import imagemSliderAnyRecipeNew from '../../assets/Projetos/AnyRecipe/any_recipe_new.jpeg';
import imagemTimhontel from '../../assets/Projetos/Timhontel/timhontel-home.webp';

export const projetosRow = [
    {
        imagem: ['https://i.im.ge/2024/10/17/kAhe7p.3.png', imagemTimhontel],
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
    },




    {
        imagem: [imagemCardAnyRecipe, imagemSliderAnyRecipeLogin, imagemSliderAnyRecipeHome, imagemSliderAnyRecipeIndex, imagemSliderAnyRecipeNew],
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
        imagem: [imagemCardTodoList, imagemSliderTodolistLogin, imagemSliderTodolistAdm, imagemSliderTodolistHome, imagemSliderTodolistPlaylist, imagemSliderTodolistRestore, imagemSliderTodolistEmailToken],
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
        imagem: ['https://i.im.ge/2024/10/17/kAhni4.5.png', imagemTaskApp],
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
        imagem: ['https://i.im.ge/2024/10/17/kAiX6m.8.png', imagemTaskManager],
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
        imagem: ['https://i.im.ge/2024/10/17/kAiOgT.mylinks.png', imagemMylinks],
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
        imagem: ['https://i.im.ge/2024/10/17/kAhBeq.2.png', imagemCatEat],
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