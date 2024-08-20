import '../styles/project/projeto.scss';
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

      <h2>Projetos que participei</h2>

      <p>Filtrar</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            {uniqueTags.map((tag, projetoIndex) => (
                <div key={projetoIndex} style={{ display: 'flex'}}>
                            <p>{tag.nome}</p>
                            <input
                                type="checkbox"
                                // checked={checkedTags[`${projetoIndex}-${tagIndex}`] || false}
                                // onChange={handleCheckboxChange(projetoIndex, tagIndex)}
                            />
                </div>
            ))}
        </div>

      <div className='pagProjetos'>
        <ProjetosRow />
      </div>
    </div>
  );
}

export default Projetos;
