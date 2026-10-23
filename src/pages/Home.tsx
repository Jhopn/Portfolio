import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import perfil from '../assets/Icons/foto.webp';
import { Skills } from '../components/Skills.tsx';
import { ProjetosSwiper } from '../components/ProjetosSwiper.tsx';
import { Experiencias, Patentes } from '../components/Experiencias.tsx';
import { patentes } from '../components/util/ConfigExperiencias.ts';
import { useReveal } from '../hooks/useReveal.ts';
import '../styles/home/home.css';

const WHATSAPP = 'https://api.whatsapp.com/send/?phone=559988320735&text&type=phone_number&app_absent=0';

function Home() {
  const [state, handleSubmit] = useForm("mblrbjpw");
  const navigate = useNavigate();
  const location = useLocation();

  useReveal([state.succeeded]);

  useEffect(() => {
    if (!location.hash) return;
    const timer = setTimeout(() => {
      document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [location.hash]);

  return (
    <main>
      <section className="hero pagina">
        <div className="heroTexto">
          <p className="heroOla">Olá, eu sou o</p>
          <h1 className="heroTitulo">
            Jhoão Pedro,
            <span className="heroSubtitulo">desenvolvedor Full Stack.</span>
          </h1>

          <p className="heroResumo">
            Sou graduado em Sistemas para Internet no
            <span className="destaque"> IFMA Campus Timon </span>
            e atualmente sou desenvolvedor Full Stack no
            <span className="destaque"> PIT - Piauí Instituto de Tecnologia</span>, onde trabalho em sistemas como o SUAP, o Piauí Oportunidades e o Piauí em Dados.
          </p>

          <div className="heroAcoes">
            <a className="botao botaoPrimario" href="/Curriculo.pdf" download="Curriculo.pdf">
              <i className="fas fa-download"></i> Download CV
            </a>
            <a className="botao botaoSecundario" href={WHATSAPP} target="_blank">
              <i className="fab fa-whatsapp"></i> Contate-me
            </a>
          </div>

          <div className="heroSociais">
            <a href="https://www.linkedin.com/in/jhoaosantos/" target="_blank" aria-label="Linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Jhopn" target="_blank" aria-label="Github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.instagram.com/jhoao_ns/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="heroFoto">
          <div className="heroAnel" />
          <img src={perfil} alt="Foto de Jhoão Pedro" />
          <span className="heroChip heroChip1"><i className="fab fa-python"></i> Python</span>
          <span className="heroChip heroChip2"><i className="fab fa-react"></i> React</span>
          <span className="heroChip heroChip3"><i className="fab fa-vuejs"></i> Vue</span>
        </div>

        <a href="#habilidades" className="heroScroll" aria-label="Rolar para habilidades">
          <span />
        </a>
      </section>

      <section id="habilidades" className="secao pagina">
        <div className="secaoCabecalho reveal">
          <div>
            <p className="secaoEyebrow">01 — Habilidades</p>
            <h2 className="secaoTitulo">Minha stack</h2>
            <p className="secaoSubtitulo">Ferramentas que já utilizei em meus projetos.</p>
          </div>
        </div>
        <Skills />
      </section>

      <section id="experiencias" className="secao pagina">
        <div className="secaoCabecalho reveal">
          <div>
            <p className="secaoEyebrow">02 — Experiências</p>
            <h2 className="secaoTitulo">Trajetória</h2>
            <p className="secaoSubtitulo">Onde trabalhei e o que desenvolvi.</p>
          </div>
        </div>
        <Experiencias />
      </section>

      {patentes.length > 0 && (
        <section id="registro" className="secao pagina">
          <div className="secaoCabecalho reveal">
            <div>
              <p className="secaoEyebrow">03 — Propriedade intelectual</p>
              <h2 className="secaoTitulo">Registro de Software</h2>
            </div>
          </div>
          <Patentes />
        </section>
      )}

      <section id="projetos" className="secao pagina">
        <div className="secaoCabecalho reveal">
          <div>
            <p className="secaoEyebrow">04 — Projetos</p>
            <h2 className="secaoTitulo">Em destaque</h2>
            <p className="secaoSubtitulo">Projetos que participei.</p>
          </div>
          <button className="botao botaoSecundario" onClick={() => { navigate('/projetos'); window.scrollTo(0, 0); }}>
            Veja todos os projetos <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <div className="reveal">
          <ProjetosSwiper />
        </div>
      </section>

      <section id="contato" className="secao pagina">
        <div className="contato reveal">
          <div className="contatoTexto">
            <p className="secaoEyebrow">05 — Contato</p>
            <h2 className="secaoTitulo">Entre em contato comigo!</h2>
            <p className="secaoSubtitulo">
              Tem um projeto em mente ou uma oportunidade? Me mande uma mensagem.
            </p>
            <a className="contatoWhats" href={WHATSAPP} target="_blank">
              <span className="contatoWhatsIcone"><i className="fab fa-whatsapp"></i></span>
              <span>
                <strong>Info:</strong> você também pode entrar em contato pelo meu whatsapp!
              </span>
            </a>
          </div>

          {state.succeeded ? (
            <div className="contatoSucesso">
              <i className="fas fa-check-circle"></i>
              <p>Mensagem enviada!</p>
              <button className="botao botaoSecundario" onClick={() => window.location.reload()}>
                Voltar à tela inicial
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contatoForm">
              <label htmlFor="email">Email</label>
              <input
                className="inputDados"
                placeholder="Digite o seu email"
                id="email"
                type="email"
                name="email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="contatoErro" />

              <label htmlFor="message">Mensagem</label>
              <textarea
                className="inputDados textArea"
                id="message"
                name="message"
                placeholder="Escreva um breve resumo sobre seu projeto"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="contatoErro" />

              <button className="botao botaoPrimario" type="submit" disabled={state.submitting}>
                {state.submitting ? 'Enviando...' : 'Enviar'} <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
