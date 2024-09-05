import jhopnLogo from '../assets/Logo/logo-developer.webp';
import '../styles/footer/footer.css';

export default function Footer() {
    return(
        <footer className='footer'>
        <div className='footerLogo'>
          <img id='imgfooter' src={jhopnLogo} alt="" />
          <p>Jhopn ©</p>
        </div>
        <div className='contatoFooter'>
          <p >SIGA-ME</p>
          <a href="https://github.com/Jhopn" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/jhoaosantos/" target="_blank" >Linkedin</a>
          <a href="https://www.instagram.com/jhoao_ns/" target="_blank">Instagram</a>
        </div>
      </footer>
    );
}