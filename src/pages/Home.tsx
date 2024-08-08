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
import jhopnLogo from '../assets/jhopn.png';
import '../styles/App.css';
import '../styles/style.scss';
// import { GitStatus } from '../services/statusGit.tsx';
// import { Chart } from "react-google-charts";
// import { motion } from "framer-motion";
// import image1 from "../assets/Carrosel/gojo.jpg";
// import image2 from "../assets/Carrosel/gojo2.jfif";
import { useNavigate } from 'react-router-dom';
import { MultiActionAreaCard } from "../components/MultiActionAreaCard.tsx";
import imagemProjeto from '../assets/Projetos/TaskApp/taskapp-home.png';
import imagemProjeto2 from '../assets/Projetos/Timhontel/timhontel-navegue.png';
import imagemProjeto3 from '../assets/Projetos/EcommerceApi/ecommerce-api.png';
import imagemProjeto2Api from '../assets/Projetos/TaskApp/Taskapp-Api/api-taskapp.png';
import { color } from 'framer-motion';

function Home() {
  const navigate = useNavigate();


  return (
    <>
      <nav className='navbar'>
        <div>
          <img src={jhopnLogo} alt="" className='logoNavbar' />
        </div>
        <div>
          <a href="#skills">Habilidades</a>
          <a href="" onClick={() => navigate('/Projetos')} >Projetos</a>
          {/* <a href="">Contato</a> */}
        </div>
      </nav>

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
              <MultiActionAreaCard imagemProjeto={imagemProjeto3} nomeProjeto={'Ecommerce(Backend)'}
                tags={[{ nome: 'NodeJs', cor: '#3e873e' }, { nome: 'Express', cor: '#222323' }, { nome: 'Prisma', cor: '#0d344b' },
                { nome: 'Zod', cor: '#284c83' }, { nome: 'Docker', cor: '#139edd' }]} descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

              <MultiActionAreaCard imagemProjeto={imagemProjeto} nomeProjeto={'Task App(Frontend)'}
                tags={[{ nome: 'React', cor: '#05d2fe' }, { nome: 'Material UI', cor: '#0081cc' }, { nome: 'Vite', cor: '#aa4cff' }]}
                descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

              <MultiActionAreaCard imagemProjeto={imagemProjeto2Api}
                nomeProjeto={'Task App(Backend)'}
                tags={[{ nome: 'Typescript', cor: '#3178c6' }, { nome: 'NodeJs', cor: '#3e873e' },
                { nome: 'Express', cor: '#222323' }, { nome: 'Prisma', cor: '#0d344b' }]}
                descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

              <MultiActionAreaCard imagemProjeto={imagemProjeto2}
                nomeProjeto={'TimHontel(Frontend)'}
                tags={[{ nome: 'Javascript', cor: '#f6df1c' }, { nome: 'Html', cor: '#e44c26' }, { nome: 'Css', cor: '#274de5' }]}
                descricaoProjeto='Criação de layout' />

              <MultiActionAreaCard
                imagemProjeto={'https://github-production-user-asset-6210df.s3.amazonaws.com/128644543/311267487-36f3a791-4a27-4ba9-84c4-dd473547c594.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240808T015913Z&X-Amz-Expires=300&X-Amz-Signature=1c74dc939dc7a990032738986de507b84aec61de6edaffb249d323b3c198be7e&X-Amz-SignedHeaders=host&actor_id=128644543&key_id=0&repo_id=748464173'}
                nomeProjeto={'MiniGameCalculator(Mobile)'}
                tags={[{ nome: 'React Native', cor: '#05d2fe' }, { nome: 'Firebase', cor: '#f88008' }, { nome: 'Expo Go', cor: '#000021' }]}
                descricaoProjeto='Criação de layout' />
            </div>

            <p className='tagsAssunto'>Contato</p>

            <div className='entreEmContato'>
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

      <footer className='footer'>
        <div className='footerLogo'>
          <img id='imgfooter' src={jhopnLogo} alt="" />
          <p>Jhopn ©</p>
        </div>
        <div className='contatoFooter'>
          <p >SIGA-ME</p>
          <a href="https://github.com/Jhopn">Github</a>
          <a href="https://www.linkedin.com/in/jhoaosantos/">Linkedin</a>
          <a href="https://www.instagram.com/jhoao_ns/">Instagram</a>
        </div>
      </footer>
    </>
  );
}

export default Home;
