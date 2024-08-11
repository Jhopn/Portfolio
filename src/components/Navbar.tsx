import { useNavigate } from 'react-router-dom';
import jhopnLogo from '../assets/jhopn.png';

export default function Navbar() {
  const navigate = useNavigate();

    return(
        <nav className='navbar Projetos'>
        <div>
          <img onClick={() => navigate('/')} src={jhopnLogo} alt="Logo" className='logoNavbar' />
        </div>
        <div>
          <a onClick={() => navigate('/')} href="#skills" >Habilidades</a>
          <a href="" onClick={() => navigate('/projetos')}>Projetos</a>
          <a  onClick={() => navigate('/')} href="#contateme">Contato</a>
        </div>
      </nav>
    );
}