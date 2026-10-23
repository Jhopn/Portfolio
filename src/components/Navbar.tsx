import { useState, useEffect, type CSSProperties } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import jhopnLogo from '../assets/Logo/logo-sem-fundo.webp';
import '../styles/navbar/navbar.css';

const links = [
  { id: 'habilidades', nome: 'Habilidades' },
  { id: 'experiencias', nome: 'Experiências' },
  { id: 'projetos', nome: 'Projetos' },
  { id: 'contato', nome: 'Contato' },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const irPara = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'projetos' && location.pathname !== '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}>
      <div className="navbarConteudo">
        <img
          onClick={() => { setIsMenuOpen(false); navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          src={jhopnLogo}
          alt="Jhopn - página inicial"
          className="logoNavbar"
        />

        <button
          className={`menuIcone ${isMenuOpen ? 'aberto' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span /><span /><span />
        </button>

        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              style={{ '--d': `${index * 0.05}s` } as CSSProperties}
              onClick={(e) => { e.preventDefault(); irPara(link.id); }}
            >
              {link.nome}
            </a>
          ))}
          <a
            className="botao botaoPrimario navbarCta"
            href="https://api.whatsapp.com/send/?phone=559988320735&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            Contate-me
          </a>
        </div>
      </div>
    </nav>
  );
}
