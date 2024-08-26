import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import { projetosConfiguracao } from "./util/ConfigProjetosSwipper.ts";
import { projetosRow } from './util/ConfigProjetosColumn.ts';
import  { useEffect, useState } from  'react';
import '../styles/projetosRow/projetosRow.css'

const todosProjetos = [...projetosConfiguracao, ...projetosRow];

interface Filtro {
  Filtros: string[];
}

export function ProjetosRow({ Filtros }: Filtro) {
  const [projetosFiltrados, setProjetosFiltrados] = useState(todosProjetos);

  useEffect(() => {
    if (Filtros.length === 0) {
      setProjetosFiltrados(todosProjetos);
    } else {
      const novosProjetosFiltrados = todosProjetos.filter(projeto =>
        projeto.tags.some(tag => Filtros.includes(tag.nome))
      );
      setProjetosFiltrados(novosProjetosFiltrados);
    }
  }, [Filtros]);

  return (
    <div className="cardProjetos">
      {projetosFiltrados.map((projeto, index) => (
        <div key={index} className="containerContent">
          <MultiActionAreaCard
            imagemProjeto={projeto.imagem}
            nomeProjeto={projeto.nome}
            tags={projeto.tags}
            link={projeto.link}
            descricaoProjeto={projeto.descricao}
          />
        </div>
      ))}
    </div>
  );
}
