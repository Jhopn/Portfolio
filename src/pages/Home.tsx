import perfil from '../assets/Icons/perfil.webp';
import linkedinLogo from "../assets/Icons/ri_linkedin-fill.webp";
import instaLogo from "../assets/Icons/bi_instagram.webp";
import '../styles/home/home.css';
import { Skills } from '../components/Skills.tsx';
import { Button } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjetosSwiper } from "../components/ProjetosSwiper.js";
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

function Home() {
  const [state, handleSubmit] = useForm("mblrbjpw");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projetos')
  }

  if (state.succeeded) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#000000'
    }}>
      <p style={{
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        color: '#ffa800'
      }}>
        Mensagem enviada!
      </p>
      <Button size="medium" color="info" sx={{
        backgroundColor: "#000000",
        fontFamily: 'Arial',
        border: '1px solid #ffffff',
        color: "#ffffff",
        '&:hover': {
          color: '#ffa800',
          border: '1px solid #ffa800',
        },
      }} onClick={() => window.location.reload()}>
        Voltar à tela inicial
      </Button>
    </div>
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
              <a href="https://www.instagram.com/jhoao_ns/" target="_blank">
                <img src={instaLogo} className="logo" alt="" />
              </a>

              <a href="https://www.linkedin.com/in/jhoaosantos/" target="_blank">
                <img src={linkedinLogo} className="logo" alt="" />
              </a>
            </div>

            <a href="https://api.whatsapp.com/send/?phone=559988320735&text&type=phone_number&app_absent=0" target="_blank" className='contate-me'>
              Contate-me
            </a>
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
              fontFamily: 'Arial', border: '1px solid #ffffff', color: "#ffa800",
              '&:hover': {
                border: '1px solid #ffa800',
                color: "#ffa800"
              }
            }}
            href="/Curriculo.pdf" 
            download="Curriculo.pdf"
            >Download CV</Button>
          </div>

        </div>

        <div>
          <p className='tagsAssunto' id='skills'>Habilidades</p>
          <p>Ferramentas que já utilizei em meus projetos.</p>
          <div className='contentSkills'>
            <Skills />
          </div>

          <p className='tagsAssunto'>Projetos</p>

          <div className='textoProjeto'>
            <p>Alguns dos projetos que participei:</p>
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

          <form onSubmit={handleSubmit} className='entreEmContato' id='contateme'>
            <h2>Entre em contato comigo!</h2>
            <p> <span style={{color: '#ffffff'}}>Info:</span> Você também pode entrar em contato pelo meu <a href="https://api.whatsapp.com/send/?phone=559988320735&text&type=phone_number&app_absent=0"  target="_blank">whatsapp</a>!</p>
            <p>Email</p>
            <input
              className='inputDados'
              placeholder='Digite o seu email'
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <br />
            <p>Mensagem</p>
            <textarea
              className='textArea'
              id="message"
              name="message"
              placeholder='Escreva um breve resumo sobre seu projeto'
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <br />
            <button id='buttonEnviar' type='submit' disabled={state.submitting}>Enviar</button>
          </form>


        </div>

      </div>

    </>
  );
}

export default Home;
