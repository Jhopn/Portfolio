import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import imagemProjeto from '../assets/Projetos/TaskApp/taskapp-home.webp';
import imagemProjeto2 from '../assets/Projetos/Timhontel/timhontel-navegue.webp';
import imagemProjeto2Api from '../assets/Projetos/TaskApp/Taskapp-Api/api-taskapp.png';
import imagemProjeto3 from '../assets/Projetos/EcommerceApi/ecommerce.webp';
import imagemProjeto4 from '../assets/Projetos/MiniGameCalculator/Minigamecalculator.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

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
        nome: 'Task App (Frontend)',
        tags: [
            { nome: 'React', cor: '#05d2fe' },
            { nome: 'Material UI', cor: '#0081cc' },
            { nome: 'Vite', cor: '#aa4cff' }
        ],
        descricao: 'Gerenciador de Tarefas com autenticação e Jwt',
        link: 'https://github.com/Guilhermeprog3/Front-Task'
    },
    {
        imagem: imagemProjeto2Api,
        nome: 'Task App (Backend)',
        tags: [
            { nome: 'Typescript', cor: '#3178c6' },
            { nome: 'NodeJs', cor: '#3e873e' },
            { nome: 'Express', cor: '#222323' },
            { nome: 'Prisma', cor: '#0d344b' }
        ],
        descricao: 'Gerenciador de Tarefas com autenticação e Jwt',
        link: "https://github.com/Jhopn/Back-Task"
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
            { nome: 'Javascript', cor: '#f6df1c' },
            { nome: 'Html', cor: '#e44c26' },
            { nome: 'Css', cor: '#274de5' }
        ],
        descricao: 'Criação de layout',
        link: 'https://github.com/Jhopn/Timhontel'
    }
];

export function ProjetosSwiper() {
    return (
        <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {projetosConfiguracao.map((projeto, index) => (
                <SwiperSlide key={index}>
                    <MultiActionAreaCard
                        imagemProjeto={projeto.imagem}
                        nomeProjeto={projeto.nome}
                        tags={projeto.tags}
                        link={projeto.link}
                        descricaoProjeto={projeto.descricao}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
