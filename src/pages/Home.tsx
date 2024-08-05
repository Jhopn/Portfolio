import { useState, useEffect, useRef } from 'react';
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
import { motion } from "framer-motion";
import image1 from "../assets/Carrosel/gojo.jpg";
import image2 from "../assets/Carrosel/gojo2.jfif";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  useNavigate } from 'react-router-dom';

const images = [image1, image2];

function Home() {
  const carousel = useRef<HTMLDivElement>(null); 
  const [width, setWidth] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (carousel.current) {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div>
          <img src={jhopnLogo} alt="" className='logoNavbar'/>
        </div>
        <div>
          <a href="">Habilidades</a>
          <a href="" onClick={() => navigate('/Projetos')} >Projetos</a>
          {/* <a href="">Contato</a> */}
        </div>
      </nav>

      <div id='contentTotal'>
        <div className='background'></div>

        <div className='container'>
          <div className='perfilConfig'>
            <img src={perfil} className="perfilFoto" alt="Vite logo" />

            <div className='logosContatos'>
              <a href="https://www.instagram.com/jhoao_ns/">
                <img src={instaLogo} className="logo" alt="" />
              </a>

              <a href="https://www.linkedin.com/in/jho%C3%A3o-santos-b0b633284/">
                <img src={linkedinLogo} className="logo" alt="" />
              </a>
            </div>

            <a href="" className='divContato'>
              <div className='contact'>
                <p id='hireme'>
                  Contate-me
                </p>
              </div>
            </a>
          </div>

          <div className='contentor'>
            <p id='ola'>Olá, eu sou o</p>
            <h1 id='titulo'>Jhoão Pedro, desenvolvedor Full Stack, desenvolvo sites e aplicativos.</h1>
            <p>Sou estudante de Sistema para Internet no IFMA Campus Timon e participo da Developer Community em seus principais projetos.</p>

       

            <p className='tagsAssunto'>Habilidades</p>
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

            {/* <motion.div ref={carousel} className="carrosel"  whileTap={{cursor: "grabbing"}}>
              <motion.div className="inner"
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                initial={{ x:  100}}
                animate={{ x: 0}}
                transition={{duration: 0.8}}
              >
                {images.map(image => 
                  <motion.div className="imagemProjetos" key={image}>
                    <img src={image} alt="projeto" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div> */}

            <p className='tagsAssunto'>Contato</p>

            <div className='entreEmContato'>
              <h2>Entre em contato comigo!</h2>
              <p>Full name</p>
              <input className='inputDados' type="text" placeholder='Enter full name' name="" id="" />
              <br />
              <p>Email</p>
              <input className='inputDados' type="text"  placeholder='Enter email' name="" id="" />
              <br />
              <p>Phone</p>
              <input className='inputDados'  type="text"  placeholder='+00 000 000 0000' name="" id="" />
              <br />
              <p>Message</p>
              <input className='inputDados'  type="text"  placeholder='Write a little brief about your project or scope of work.' name="" id="" />
              <br />
              <button id='buttonEnviar'>Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <footer className='footer'>
        <img id='imgfooter' src={jhopnLogo} alt="" />
        <p>Jhopn ©</p>
        <div>
          <p>SIGA-ME</p>
          <a href="">Github</a>
          <a href="">Linkedin</a>
          <a href="">Instagram</a>
        </div>
      </footer>
    </>
  );
}

export default Home;
