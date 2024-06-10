import perfil from './assets/perfil2.jpg'
import linkedinLogo from "./assets/ri_linkedin-fill.png"
import instaLogo from "./assets/bi_instagram.png"
import cssLogo from './assets/akar-icons--css-fill.png'
import htmlLogo from './assets/akar-icons--html-fill.png'
import sqlLogo from './assets/simple-icons--mysql.png'
import nodeLogo from './assets/la--node.png'
import pythonLogo from './assets/akar-icons--python-fill.png'
import reactLogo from './assets/uil--react.png'
import javascriptLogo from './assets/ri--javascript-fill.png'
import './App.css'
import './style.scss'
import { GitStatus, GitLanguages }from './services/statusGit.tsx';

function App() {
  return (
    <>
    <div id='contentTotal'>

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

          <a href="">
            <div className='contact'>
              <p id='hireme'>
                Contate-me
              </p>
            </div>
          </a>
          

        </div>
        <div className='contentor'>


          <p className='tagsAssunto'>Olá, eu sou o</p>
          <h1 id='titulo'>Jhoão Pedro, desenvolvedor Full Stack, desenvolvo sites e aplicativos.</h1>
          <p>Sou estudante de Sistema para Internet no IFMA Campus Timon e participo da Developer Community em seus principais projetos.</p>

          <div id='respositorioStatus'>
            <p>Repositorios no Git Hub: </p>
            <p id='respositorioQuant'>
              <GitStatus/>
            </p>
          </div>

          
          <p className='tagsAssunto'>About</p>
          <p>Sou aluno de Sistema para a Internet e a minha jornada se iniciou com projetos pessoais, mas quero ir além e tenho habilidades que podem me ajudar a alcançar esse objetivo.</p>


          <div>
            <p>Linguagens desses Repositorios: </p>
            <GitLanguages/>
          </div>

          <p className='tagsAssunto'>Career</p>
          <p className='tagsAssunto'>Skills</p>
          <p>Possuo habilidades em frontend e em backend, segue a baixo as ferramentas das quais já usei</p>
          <div className='contentSkills'>
            <img className='imgSkills' src={cssLogo} alt="" />
            <img className='imgSkills' src={htmlLogo} alt="" />
            <img className='imgSkills' src={sqlLogo} alt="" /> 
            <img className='imgSkills' src={nodeLogo} alt="" />
            <img className='imgSkills' src={pythonLogo} alt="" />
            <img className='imgSkills' src={reactLogo} alt="" />
            <img className='imgSkills' src={javascriptLogo} alt="" />
          </div>

          <p className='tagsAssunto'>Portfolio</p>
          <p>Projetos no qual já participei</p>
          

          <p className='tagsAssunto'>Contact</p>

          <div className='entreEmContatos'>
            <p>Vamos trabalhar juntos!</p>
            <input type="text" name="" id="" />
            <br />
            <input type="text" name="" id="" />
            <br />
            <input type="text" name="" id="" />
            <br />
            <input type="text" name="" id="" />
            <br />
            <button>Send</button>
          </div>


        </div>

      </div>

    </div>

      <footer className='footer'>
        <img id='imgfooter' src="./src/assets/logo-jhopn (2).png" alt="" />
        <p>Jhopn ©</p>

        <p>Contatos</p>
        <a href="">Github</a>
        <a href="">Linkedin</a>
        <a href="">Instagram</a>
        <a href="">Email</a>
      </footer>
    </>
  )
}

export default App

