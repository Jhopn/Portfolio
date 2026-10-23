import type { CSSProperties } from 'react';
import { ProjetoCard } from './ProjetoCard.tsx';
import { projetosConfiguracao } from './util/ConfigProjetosSwipper.ts';
import { projetosRow } from './util/ConfigProjetosColumn.ts';
import { useReveal } from '../hooks/useReveal.ts';
import '../styles/projetosRow/projetosRow.css';

export const todosProjetos = [...projetosConfiguracao, ...projetosRow];

interface Filtro {
  Filtros: string[];
}

export function ProjetosRow({ Filtros }: Filtro) {
  const projetosFiltrados = Filtros.length === 0
    ? todosProjetos
    : todosProjetos.filter(projeto => projeto.tags.some(tag => Filtros.includes(tag.nome)));

  useReveal([Filtros]);

  if (projetosFiltrados.length === 0) {
    return <p className="projetosVazio">Nenhum projeto encontrado com esses filtros.</p>;
  }

  return (
    <div className="cardProjetos">
      {projetosFiltrados.map((projeto, index) => (
        <div
          key={projeto.nome}
          className="reveal"
          style={{ '--d': `${(index % 3) * 0.08}s` } as CSSProperties}
        >
          <ProjetoCard projeto={projeto} />
        </div>
      ))}
    </div>
  );
}
