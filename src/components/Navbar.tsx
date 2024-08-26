import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jhopnLogo from '../assets/Logo/logo-sem-fundo.webp';
import '../styles/navbar/navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <img
          onClick={() => navigate('/')}
          src={jhopnLogo}
          alt="Logo"
          className='logoNavbar'
          style={{ cursor: "pointer" }}
        />
      </div>
      <span className="menu-icon" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </span>
      <div className={isMenuOpen ? 'menu open' : 'menu off'}
       onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <a onClick={() => navigate('/')} href="#skills" about='Minhas Habilidades'>Habilidades</a>
        <a onClick={() => navigate('/projetos')} href='' >Projetos</a>
        <a onClick={() => navigate('/')} href="#contateme">Contato</a>
      </div>
    </nav>
  );
}
