import perfil from '../assets/Icons/perfil2.webp';
import linkedinLogo from "../assets/Icons/ri_linkedin-fill.webp";
import instaLogo from "../assets/Icons/bi_instagram.webp";
import '../styles/home/home.css';
import { Skills } from '../components/Skills.tsx';
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjetosSwiper } from "../components/ProjetosSwiper.js"
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projetos')
  }
  return (
    <>
      <div id='contentTotal'>

        <div className="custom-shape-divider-top-1724337576">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>

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
            <h1 id='titulo'>Jhoão Pedro,<span className='subtitulo'> desenvolvedor Full Stack.</span> </h1>


            <p className='resumo'>Sou estudante de Sistema para Internet no
              <span className='destaque'> IFMA Campus Timon </span>
              e participo da
              <span className='destaque'> Developer Community </span>
              em seus principais projetos.</p>
            <Button size="medium" color="info" sx={{
              backgroundColor: "#000000",
              fontFamily: 'Arial', border: '1px solid #ffffff', color: "#ffffff", 
              '&:hover': {
                color: '#ffa800',
                border: '1px solid #ffa800'
              }
            }}>Download CV</Button>
          </div>

        </div>

        <div>
          <p className='tagsAssunto' id='skills'>Habilidades</p>
          <p>Possuo habilidades em frontend e em backend, segue abaixo as ferramentas das quais já usei</p>
          <div className='contentSkills'>
            <Skills />
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
            <ProjetosSwiper />
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
