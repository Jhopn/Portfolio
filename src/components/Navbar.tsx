import { useNavigate } from 'react-router-dom';
import jhopnLogo from '../assets/Logo/logo-sem-fundo.webp';

export default function Navbar() {
  const navigate = useNavigate();

    return(
        <nav className='navbar Projetos'>
        <div>
          <img onClick={() => navigate('/')} src={jhopnLogo} alt="Logo" className='logoNavbar' style={{cursor: "pointer"}} />
        </div>
        <div>
          <a onClick={() => navigate('/')} href="#skills" >Habilidades</a>
          <a href="" onClick={() => navigate('/projetos')}>Projetos</a>
          <a  onClick={() => navigate('/')} href="#contateme">Contato</a>
        </div>
      </nav>
    );
}