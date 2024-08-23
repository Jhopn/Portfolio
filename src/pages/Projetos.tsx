import '../styles/project/projeto.css';
import { ProjetosRow } from "../components/ProjetosRow.js"
import { projetosConfiguracao } from '../components/ProjetosSwiper.js';
import { projetos } from '../components/ProjetosRow.js';

const todosProjetos = [...projetosConfiguracao, ...projetos];
const uniqueTags = Array.from(
  new Map(
    todosProjetos.flatMap(projeto =>
      projeto.tags.map(tag => [tag.nome, tag])
    )
  ).values()
);

function Projetos() {

  return (
    <div className='containerProjetos'>

      <h2 className='subtitulo'>Projetos</h2>

      <p>Aqui estão todos os projetos que desenvolvi com suas determinadas tecnologias, até o momento.</p>

        <p className='destaque'>Filtrar</p>
      {/* <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}> */}

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '5px', // Espaçamento entre as tags
          padding: '10px',
          width: '95%',
          height: '15%',
          backgroundColor: '#ffa800', // Fundo para destacar a área de filtro
          borderRadius: '8px' // Bordas arredondadas para suavizar a apresentação
        }}>
          {uniqueTags.map((tag, projetoIndex) => (
            <div key={projetoIndex} style={{
              display: 'flex',
              alignItems: 'center',
              flexBasis: 'calc(20% - 10px)', // Cada item ocupa 20% da largura, menos o gap
              boxSizing: 'border-box',
              padding: '5px',
              width: '200px',
              height: 'initial',
              borderRadius: '5px', // Bordas arredondadas
              color: '#000000' // Cor do texto branca para contraste
            }}>
              <p style={{ marginRight: '10px', fontWeight: 'bold', margin: 0 }}>{tag.nome}</p>
              <input type="checkbox" />
            </div>
          ))}
        </div>

        <div className='pagProjetos' style={{ marginTop: '20px' }}>
          <ProjetosRow />
        </div>
      {/* </div> */}

    </div>
  );
}

export default Projetos;
