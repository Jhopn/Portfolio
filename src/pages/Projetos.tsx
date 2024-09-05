import '../styles/project/projeto.css';
import { ProjetosRow } from "../components/ProjetosRow.js";
import { projetosConfiguracao } from '../components/util/ConfigProjetosSwipper.js';
import { useState } from 'react';

function Projetos() {
  const [filtro, setFiltro] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


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

      <div>
        <button className='buttonFiltro'  onClick={() => setIsModalOpen(true)}>
          <i className="fas fa-filter" style={{ marginRight: '8px' }}></i>
          Filtrar
        </button>

        {isModalOpen && (
          <>
            <div className='tagsModal' onClick={() => setIsModalOpen(false)} />
            <div className='containerModal'>
              <h2 className='destaque'>FILTRAR POR TAG</h2>
              <div className='contentTags'>
                {uniqueTags.map((tag) => (
                  <div key={tag.nome} className='checkbox'>
                      <input
                        type="checkbox"
                        name={tag.nome}
                        id={`checkbox-${tag.nome}`} 
                        checked={filtro.includes(tag.nome)}
                        onChange={() => handleFiltro(tag.nome)}
                        style={{ marginLeft: '10px' }}
                      />
                    <label  htmlFor={`checkbox-${tag.nome}`} style={{ marginRight: '10px', fontWeight: 'bold' }}>
                      {tag.nome}
                    </label>
                  </div>
                ))}
              </div>
              <button onClick={() => setIsModalOpen(false)} className='buttonFecharModal'>
                Fechar
              </button>
            </div>
          </>
        )}
      </div>

      <div className='pagProjetos'>
        <ProjetosRow Filtros={filtro} />
      </div>
    </div >
  );
}

export default Projetos;
