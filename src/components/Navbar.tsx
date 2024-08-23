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
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar Projetos ${isScrolled ? 'scrolled' : ''}`}>
      <div>
        <img
          onClick={() => navigate('/')}
          src={jhopnLogo}
          alt="Logo"
          className='logoNavbar'
          style={{ cursor: "pointer" }}
        />
      </div>
      <span className="menu-icon" onClick={toggleMenu}>&#9776;</span>
      <div className={isMenuOpen ? 'open' : ''}>
        <a onClick={() => navigate('/')} href="#skills">Habilidades</a>
        <a onClick={() => navigate('/projetos')} href="#projetos">Projetos</a>
        <a onClick={() => navigate('/')} href="#contateme">Contato</a>
      </div>
    </nav>
  );
}
