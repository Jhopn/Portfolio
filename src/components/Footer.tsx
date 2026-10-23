import jhopnLogo from '../assets/Logo/logo-developer.webp';
import { Wavify } from './Wavify.tsx';
import '../styles/footer/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Wavify />
      <div className="footerConteudo">
        <div className="footerMarca">
          <img src={jhopnLogo} alt="Jhopn" className="footerLogo" />
          <div>
            <p className="footerNome">Jhoão Pedro</p>
            <p className="footerCargo">Desenvolvedor Full Stack</p>
          </div>
        </div>

        <div className="footerLinks">
          <p className="footerTitulo">Siga-me</p>
          <a href="https://github.com/Jhopn" target="_blank"><i className="fab fa-github"></i> Github</a>
          <a href="https://www.linkedin.com/in/jhoaosantos/" target="_blank"><i className="fab fa-linkedin-in"></i> Linkedin</a>
          <a href="https://www.instagram.com/jhoao_ns/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a>
        </div>
      </div>
      <p className="footerCopy">Jhopn © {new Date().getFullYear()}</p>
    </footer>
  );
}
