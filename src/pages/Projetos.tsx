import { useState } from 'react';
import { ProjetosRow, todosProjetos } from '../components/ProjetosRow.tsx';
import '../styles/project/projeto.css';

const uniqueTags = Array.from(
  new Map(
    todosProjetos.flatMap(projeto =>
      projeto.tags.map(tag => [tag.nome, tag])
    )
  ).values()
).sort((a, b) => a.nome.localeCompare(b.nome));

function Projetos() {
  const [filtro, setFiltro] = useState<string[]>([]);
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);

  const total = filtro.length === 0
    ? todosProjetos.length
    : todosProjetos.filter(projeto => projeto.tags.some(tag => filtro.includes(tag.nome))).length;

  function handleFiltro(name: string) {
    setFiltro(prevFiltro =>
      prevFiltro.includes(name)
        ? prevFiltro.filter(tag => tag !== name)
        : [...prevFiltro, name]
    );
  }

  return (
    <main className="containerProjetos pagina">
      <header className="projetosCabecalho">
        <p className="secaoEyebrow">Portfólio</p>
        <h1 className="projetosTitulo">Projetos</h1>
        <p className="secaoSubtitulo">
          Aqui estão todos os projetos que desenvolvi com suas determinadas tecnologias, até o momento.
        </p>
      </header>

      <div className="projetosFiltroBarra">
        <button
          className={`botao botaoSecundario ${filtrosAbertos ? 'ativo' : ''}`}
          onClick={() => setFiltrosAbertos(!filtrosAbertos)}
          aria-expanded={filtrosAbertos}
        >
          <i className="fas fa-filter"></i> Filtrar por tecnologia
          {filtro.length > 0 && <span className="projetosFiltroContador">{filtro.length}</span>}
        </button>
        <p className="projetosTotal">
          <span className="destaque">{total}</span> {total === 1 ? 'projeto' : 'projetos'}
        </p>
      </div>

      <div className={`projetosFiltros ${filtrosAbertos ? 'aberto' : ''}`}>
        <div className="projetosFiltrosInterno">
          {uniqueTags.map((tag) => (
            <button
              key={tag.nome}
              className={`filtroChip ${filtro.includes(tag.nome) ? 'selecionado' : ''}`}
              onClick={() => handleFiltro(tag.nome)}
              aria-pressed={filtro.includes(tag.nome)}
            >
              <span className="filtroChipCor" style={{ backgroundColor: tag.cor }} />
              {tag.nome}
            </button>
          ))}
          {filtro.length > 0 && (
            <button className="filtroLimpar" onClick={() => setFiltro([])}>
              <i className="fas fa-times"></i> Limpar filtros
            </button>
          )}
        </div>
      </div>

      <ProjetosRow Filtros={filtro} />
    </main>
  );
}

export default Projetos;
