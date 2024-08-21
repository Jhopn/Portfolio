import perfil from '../assets/Icons/perfil2.jpg';
import linkedinLogo from "../assets/Icons/ri_linkedin-fill.png";
import instaLogo from "../assets/Icons/bi_instagram.png";
import '../styles/home/home.scss';
// import { Chart } from "react-google-charts";
// import { motion } from "framer-motion";
// import { color } from 'framer-motion';
import { Skills } from '../components/Skills.tsx';
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjetosSwiper } from "../components/ProjetosSwiper.js"
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/projetos')
  }
  return (
    <>
      <div id='contentTotal'>
        <div className='background'></div>

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
            <Skills/>
          </div>

          <p className='tagsAssunto'>Projetos</p>

          <div className='textoProjeto'>
            <p>Projetos no qual já participei</p>
            <Button size="medium" color="info" sx={{
              backgroundColor: "#000000",
              fontFamily: 'Arial', border: '1px solid #ffffff', color: "#ffffff", marginLeft: 1,
              '&:hover': {
                color: '#ffa800',
                border: '1px solid #ffa800'
              }
            }}
            onClick={handleClick}
            >
              Veja todos os projetos
            </Button>
          </div>

          <div className='projetos'>
            <ProjetosSwiper/>
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
        </div>

      </div>

    </>
  );
}

export default Home;
