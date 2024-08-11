import perfil from '../assets/perfil2.jpg';
import linkedinLogo from "../assets/ri_linkedin-fill.png";
import instaLogo from "../assets/bi_instagram.png";
import cssLogo from '../assets/akar-icons--css-fill.png';
import htmlLogo from '../assets/akar-icons--html-fill.png';
import sqlLogo from '../assets/simple-icons--mysql.png';
import nodeLogo from '../assets/la--node.png';
import pythonLogo from '../assets/akar-icons--python-fill.png';
import reactLogo from '../assets/uil--react.png';
import javascriptLogo from '../assets/ri--javascript-fill.png';
import '../styles/home/home.scss';
// import { GitStatus } from '../services/statusGit.tsx';
// import { Chart } from "react-google-charts";
// import { motion } from "framer-motion";
import { MultiActionAreaCard } from "../components/MultiActionAreaCard.tsx";
import imagemProjeto from '../assets/Projetos/TaskApp/taskapp-home.png';
import imagemProjeto3 from '../assets/Projetos/EcommerceApi/ecommerce-api.png';
import imagemProjeto4 from '../assets/Projetos/MiniGameCalculator/Minigamecalculator.jpeg';
// import { color } from 'framer-motion';

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



            <p className='tagsAssunto' id='skills'>Habilidades</p>
            <p>Possuo habilidades em frontend e em backend, segue abaixo as ferramentas das quais já usei</p>
            <div className='contentSkills'>
              <img className='imgSkills' src={cssLogo} alt="" />
              <img className='imgSkills' src={htmlLogo} alt="" />
              <img className='imgSkills' src={sqlLogo} alt="" />
              <img className='imgSkills' src={nodeLogo} alt="" />
              <img className='imgSkills' src={pythonLogo} alt="" />
              <img className='imgSkills' src={reactLogo} alt="" />
              <img className='imgSkills' src={javascriptLogo} alt="" />
            </div>

            <p className='tagsAssunto'>Projetos</p>
            <p>Projetos no qual já participei</p>

            <div className='projetos'>
              <MultiActionAreaCard imagemProjeto={imagemProjeto3} nomeProjeto={'Ecommerce'}
                tags={[{ nome: 'NodeJs', cor: '#3e873e' }, { nome: 'Express', cor: '#222323' }, { nome: 'Prisma', cor: '#0d344b' },
                { nome: 'Zod', cor: '#284c83' }, { nome: 'Docker', cor: '#139edd' }]} descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

              <MultiActionAreaCard imagemProjeto={imagemProjeto} nomeProjeto={'Task App(Frontend)'}
                tags={[{ nome: 'React', cor: '#05d2fe' }, { nome: 'Material UI', cor: '#0081cc' }, { nome: 'Vite', cor: '#aa4cff' }]}
                descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

              <MultiActionAreaCard
                imagemProjeto={imagemProjeto4}
                nomeProjeto={'MiniGameCalculator'}
                tags={[{ nome: 'React Native', cor: '#05d2fe' }, { nome: 'Firebase', cor: '#f88008' }, { nome: 'Expo Go', cor: '#000021' }]}
                descricaoProjeto='Criação de layout' />
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
            <div className="blur-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
