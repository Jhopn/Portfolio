import jhopnLogo from '../assets/Logo/logo-jhopn.webp';

export default function Footer() {
    return(
        <footer className='footer'>
        <div className='footerLogo'>
          <img id='imgfooter' src={jhopnLogo} alt="" />
          <p>Jhopn ©</p>
        </div>
        <div className='contatoFooter'>
          <p >SIGA-ME</p>
          <a href="https://github.com/Jhopn">Github</a>
          <a href="https://www.linkedin.com/in/jhoaosantos/">Linkedin</a>
          <a href="https://www.instagram.com/jhoao_ns/">Instagram</a>
        </div>
      </footer>
    );
}