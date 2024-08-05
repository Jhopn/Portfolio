import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface RepoData {
  html_url: string;
  language: string;
}

export function GitStatus() {
  const [contaRepositorio, setContaRepositorio] = useState<number>(0);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const ContaRepositorio = async () => {
      setCarregando(true); 
      try {
        const resposta: AxiosResponse<RepoData[]> = await axios.get<RepoData[]>(
          'https://api.github.com/users/jhopn/repos'
        );
        setContaRepositorio(resposta.data.length);
      } catch (error) {
        console.error(error);
      } finally{
        setCarregando(false); 
      }
    };

    ContaRepositorio();
  }, []);

  return (
    <>
      {carregando && <p>Loading quantidade repositorios...</p>}
      <div>{contaRepositorio}</div>
    </>
  )
}
