import '../styles/project/projeto.css';
import { ProjetosRow } from "../components/ProjetosRow.js";
import { projetosConfiguracao } from '../components/util/ConfigProjetosSwipper.js';
import { useState } from 'react';

function Projetos() {
  const [filtro, setFiltro] = useState<string[]>([]);

  const todosProjetos = projetosConfiguracao;
  const uniqueTags = Array.from(
    new Map(
      todosProjetos.flatMap(projeto =>
        projeto.tags.map(tag => [tag.nome, tag])
      )
    ).values()
  );

  function handleFiltro(name: string) {
    setFiltro(prevFiltro => {
      if (prevFiltro.includes(name)) {
        return prevFiltro.filter(tag => tag !== name);
      } else {
        return [...prevFiltro, name];
      }
    });
  }

  return (
    <div className='containerProjetos'>
      <h2 className='subtitulo'>Projetos</h2>
      <p>Aqui estão todos os projetos que desenvolvi com suas determinadas tecnologias, até o momento.</p>

      <p className='destaque'>Filtrar</p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '5px',
        padding: '10px',
        width: '95%',
        height: '15%',
        backgroundColor: '#ffa800',
        borderRadius: '8px'
      }}>
        {uniqueTags.map((tag) => (
          <div key={tag.nome} style={{
            display: 'flex',
            alignItems: 'center',
            flexBasis: 'calc(20% - 10px)',
            boxSizing: 'border-box',
            padding: '5px',
            width: '200px',
            height: 'initial',
            borderRadius: '5px',
            color: '#000000'
          }}>
            <div>
              <p style={{ marginRight: '10px', fontWeight: 'bold', margin: 0 }}>{tag.nome}</p>
              <input
                type="checkbox"
                checked={filtro.includes(tag.nome)}
                onChange={() => handleFiltro(tag.nome)}
                className='checkboxFiltro'
              />
            </div>
          </div>
        ))}
      </div>

      <div className='pagProjetos'>
        <ProjetosRow Filtros={filtro} />
      </div>
    </div>
  );
}

export default Projetos;
