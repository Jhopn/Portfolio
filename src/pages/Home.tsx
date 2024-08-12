import perfil from '../assets/Icons/perfil2.jpg';
import linkedinLogo from "../assets/Icons/ri_linkedin-fill.png";
import instaLogo from "../assets/Icons/bi_instagram.png";


import cssLogo from '../assets/Icons/Skills/css.png';
import htmlLogo from '../assets/Icons/Skills/html.png';
import sqlLogo from '../assets/Icons/Skills/mysql.png';
import nodeLogo from '../assets/Icons/Skills/node.png';
import pythonLogo from '../assets/Icons/Skills/python.png';
import reactLogo from '../assets/Icons/Skills/react.png';
import javascriptLogo from '../assets/Icons/Skills/javascript.png';

import javaLogo from '../assets/Icons/Skills/java.svg';
import mongoLogo from '../assets/Icons/Skills/mongodb.svg';
import postgresLogo from '../assets/Icons/Skills/postgresql.svg';
import prismaLogo from '../assets/Icons/Skills/prisma.svg';
import springLogo from '../assets/Icons/Skills/spring-boot.svg';
import typescriptLogo from '../assets/Icons/Skills/typescript.svg';
import expressLogo from '../assets/Icons/Skills/express.svg';


import '../styles/home/home.scss';
// import { GitStatus } from '../services/statusGit.tsx';
// import { Chart } from "react-google-charts";
// import { motion } from "framer-motion";
// import { color } from 'framer-motion';
import { MultiActionAreaCard } from "../components/MultiActionAreaCard.tsx";
import imagemProjeto from '../assets/Projetos/TaskApp/taskapp-home.png';
import imagemProjeto2 from '../assets/Projetos/Timhontel/timhontel-navegue.png';
import imagemProjeto3 from '../assets/Projetos/EcommerceApi/ecommerce-api.png';
import imagemProjeto4 from '../assets/Projetos/MiniGameCalculator/Minigamecalculator.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';

const logos = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'Node.js', logo: nodeLogo },
  { name: 'TypeScript', logo: typescriptLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'Python', logo: pythonLogo },
  { name: 'React', logo: reactLogo },
  { name: 'MySQL', logo: sqlLogo },
  { name: 'MongoDB', logo: mongoLogo },
  { name: 'PostgreSQL', logo: postgresLogo },
  { name: 'Prisma', logo: prismaLogo },
  { name: 'Spring Boot', logo: springLogo },
  { name: 'Express', logo: expressLogo }
];


function Home() {
  return (
    <>
      <div id='contentTotal'>
        <div className='background'></div>
        <div className='backgroundBottom'></div>


        <div className='container'>
          <div className='perfilConfig'>
            <img src={perfil} className="perfilFoto" alt="Vite logo" />

            <div className='logosContatos'>
              <a href="https://www.instagram.com/jhoao_ns/">
                <img src={instaLogo} className="logo" alt="" />
              </a>

              <a href="https://www.linkedin.com/in/jhoaosantos/">
                <img src={linkedinLogo} className="logo" alt="" />
              </a>
            </div>

            <a href="" className='contate-me'>Contate-me</a>
          </div>

          <div className='contentor'>
            <p id='ola'>Olá, eu sou o</p>
            <h1 id='titulo'>Jhoão Pedro, desenvolvedor Full Stack, desenvolvo sites e aplicativos.</h1>
            <p>Sou estudante de Sistema para Internet no IFMA Campus Timon e participo da Developer Community em seus principais projetos.</p>
          </div>

        </div>

        <div>
          <p className='tagsAssunto' id='skills'>Habilidades</p>
          <p>Possuo habilidades em frontend e em backend, segue abaixo as ferramentas das quais já usei</p>
          <div className='contentSkills'>
            {logos.map((img, index) => (
              <div key={index} className='imgWrapper'>
                <img className='imgSkills' src={img.logo} alt={img.name} />
                <span className='tooltip'>{img.name}</span>
              </div>
            ))}
          </div>

          <p className='tagsAssunto'>Projetos</p>

          <div className='textoProjeto'>
            <p>Projetos no qual já participei</p>
            <Button size="medium" color="info" sx={{
              backgroundColor: "#000000",
              fontFamily: 'Roboto', border: '1px solid #ffffff', color: "#ffffff", marginLeft: 1,
              '&:hover': {
                color: '#ffa800',
                border: '1px solid #ffa800'
              }
            }}>
              Veja todos os projetos
            </Button>
          </div>

          <div className='projetos'>
            <Swiper
              spaceBetween={50}
              // slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                }
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <MultiActionAreaCard imagemProjeto={imagemProjeto3} nomeProjeto={'Ecommerce'}
                  tags={[{ nome: 'NodeJs', cor: '#3e873e' }, { nome: 'Express', cor: '#222323' }, { nome: 'Prisma', cor: '#0d344b' },
                  { nome: 'Zod', cor: '#284c83' }, { nome: 'Docker', cor: '#139edd' }]} descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />
              </SwiperSlide>
              <SwiperSlide>
                <MultiActionAreaCard imagemProjeto={imagemProjeto} nomeProjeto={'Task App'}
                  tags={[{ nome: 'React', cor: '#05d2fe' }, { nome: 'Material UI', cor: '#0081cc' }, { nome: 'Vite', cor: '#aa4cff' }]}
                  descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />
              </SwiperSlide>
              <SwiperSlide>
                <MultiActionAreaCard
                  imagemProjeto={imagemProjeto4}
                  nomeProjeto={'MiniGameCalculator'}
                  tags={[{ nome: 'React Native', cor: '#05d2fe' }, { nome: 'Firebase', cor: '#f88008' }, { nome: 'Expo Go', cor: '#000021' }]}
                  descricaoProjeto='Criação de layout' />
              </SwiperSlide>
              <SwiperSlide>
                <MultiActionAreaCard imagemProjeto={imagemProjeto2}
                  nomeProjeto={'TimHontel'}
                  tags={[{ nome: 'Javascript', cor: '#f6df1c' }, { nome: 'Html', cor: '#e44c26' }, { nome: 'Css', cor: '#274de5' }]}
                  descricaoProjeto='Criação de layout' />
              </SwiperSlide>
            </Swiper>


          </div>


          <p className='tagsAssunto'>Contato</p>

          <div className='entreEmContato' id='contateme'>
            <h2>Entre em contato comigo!</h2>
            <p>Nome Completo</p>
            <input className='inputDados' type="text" placeholder='Digite o seu nome completo' name="" id="" />
            <br />
            <p>Email</p>
            <input className='inputDados' type="text" placeholder='Digite o seu email' name="" id="" />
            <br />
            <p>Telefone</p>
            <input className='inputDados' type="text" placeholder='+00 000 000 0000' name="" id="" />
            <br />
            <p>Mensagem</p>
            <input
              className='inputDados'
              type="text"
              placeholder='Escreva um breve resumo sobre seu projeto.'
              id="mensagemInput"
            />
            <br />
            <button id='buttonEnviar'>Enviar</button>
          </div>
          {/* <div className="blur-background"></div> */}
        </div>

      </div>

    </>
  );
}

export default Home;
