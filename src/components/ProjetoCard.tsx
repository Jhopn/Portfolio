import { useState } from 'react';
import ProjetoModal from './Modal.tsx';
import '../styles/projetoCard/projetoCard.css';

export interface Tag {
  nome: string;
  cor: string;
}

export interface Projeto {
  imagem: string[];
  nome: string;
  tags: Tag[];
  descricao: string;
  link: string;
  linkSite: string;
}

const MAX_TAGS = 4;

export function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const [open, setOpen] = useState(false);
  const tagsVisiveis = projeto.tags.slice(0, MAX_TAGS);
  const tagsRestantes = projeto.tags.length - tagsVisiveis.length;

  return (
    <>
      <article className="projetoCard">
        <button className="projetoCardImagem" onClick={() => setOpen(true)} aria-label={`Ver detalhes de ${projeto.nome}`}>
          <img src={projeto.imagem[0]} alt={projeto.nome} loading="lazy" />
          <span className="projetoCardOverlay">
            <i className="fas fa-expand"></i> Ver detalhes
          </span>
        </button>

        <div className="projetoCardCorpo">
          <div className="projetoCardTags">
            {tagsVisiveis.map((tag) => (
              <span key={tag.nome} className="projetoCardTag">
                <span className="projetoCardTagCor" style={{ backgroundColor: tag.cor }} />
                {tag.nome}
              </span>
            ))}
            {tagsRestantes > 0 && <span className="projetoCardTag">+{tagsRestantes}</span>}
          </div>

          <h3 className="projetoCardTitulo">{projeto.nome}</h3>
          <p className="projetoCardDescricao">{projeto.descricao.trim()}</p>

          <div className="projetoCardAcoes">
            <button className="projetoCardDetalhes" onClick={() => setOpen(true)}>
              Detalhes <i className="fas fa-arrow-right"></i>
            </button>
            <div className="projetoCardLinks">
              <a
                href={projeto.linkSite || undefined}
                target="_blank"
                className="projetoCardIcone"
                aria-disabled={!projeto.linkSite}
                title={projeto.linkSite ? 'Acessar site' : 'Site indisponível'}
                onClick={(e) => !projeto.linkSite && e.preventDefault()}
              >
                <i className="fas fa-globe"></i>
              </a>
              <a
                href={projeto.link || undefined}
                target="_blank"
                className="projetoCardIcone"
                aria-disabled={!projeto.link}
                title={projeto.link ? 'Ver repositório' : 'Repositório privado'}
                onClick={(e) => !projeto.link && e.preventDefault()}
              >
                <i className={projeto.link ? 'fab fa-github' : 'fas fa-lock'}></i>
              </a>
            </div>
          </div>
        </div>
      </article>

      <ProjetoModal open={open} handleClose={() => setOpen(false)} projeto={projeto} />
    </>
  );
}
