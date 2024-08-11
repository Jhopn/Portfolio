import '../styles/project/projeto.scss';
import { MultiActionAreaCard } from "../components/MultiActionAreaCard.tsx";
import imagemProjeto from '../assets/Projetos/TaskApp/taskapp-home.png';
import imagemProjeto2 from '../assets/Projetos/Timhontel/timhontel-navegue.png';
import imagemProjeto2Api from '../assets/Projetos/TaskApp/Taskapp-Api/api-taskapp.png';
import imagemProjeto3 from '../assets/Projetos/EcommerceApi/ecommerce-api.png';
import imagemProjeto4 from '../assets/Projetos/MiniGameCalculator/Minigamecalculator.jpeg';

function Projetos() {

  return (
    <div className='containerProjetos'>

      <h1>Olá, esses são os Projetos...</h1>

      <div className='pagProjetos'>
        <MultiActionAreaCard imagemProjeto={imagemProjeto3} nomeProjeto={'Ecommerce'}
          tags={[{ nome: 'NodeJs', cor: '#3e873e' }, { nome: 'Express', cor: '#222323' }, { nome: 'Prisma', cor: '#0d344b' },
          { nome: 'Zod', cor: '#284c83' }, { nome: 'Docker', cor: '#139edd' }]} descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

        <MultiActionAreaCard imagemProjeto={imagemProjeto} nomeProjeto={'Task App(Frontend)'}
          tags={[{ nome: 'React', cor: '#05d2fe' }, { nome: 'Material UI', cor: '#0081cc' }, { nome: 'Vite', cor: '#aa4cff' }]}
          descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

        <MultiActionAreaCard imagemProjeto={imagemProjeto2Api}
          nomeProjeto={'Task App'}
          tags={[{ nome: 'Typescript', cor: '#3178c6' }, { nome: 'NodeJs', cor: '#3e873e' },
          { nome: 'Express', cor: '#222323' }, { nome: 'Prisma', cor: '#0d344b' }]}
          descricaoProjeto='Gerenciador de Tarefas com autenticação e Jwt' />

        <MultiActionAreaCard
          imagemProjeto={imagemProjeto4}
          nomeProjeto={'MiniGameCalculator'}
          tags={[{ nome: 'React Native', cor: '#05d2fe' }, { nome: 'Firebase', cor: '#f88008' }, { nome: 'Expo Go', cor: '#000021' }]}
          descricaoProjeto='Criação de layout' />

        <MultiActionAreaCard imagemProjeto={imagemProjeto2}
          nomeProjeto={'TimHontel'}
          tags={[{ nome: 'Javascript', cor: '#f6df1c' }, { nome: 'Html', cor: '#e44c26' }, { nome: 'Css', cor: '#274de5' }]}
          descricaoProjeto='Criação de layout' />
      </div>
    </div>
  );
}

export default Projetos;
