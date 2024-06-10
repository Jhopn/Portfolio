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

export function GitLanguages(){
    const [linguagens, setLinguagens] = useState(['']);
    const [carregando, setCarregando] = useState(false);

  
    useEffect(() => {
      const dadosLinguagens = async () => {
        setCarregando(true); 
        try {
          const resposta:  AxiosResponse<RepoData[]> = await axios.get(`https://api.github.com/users/jhopn/repos`);
          const linguagens = resposta.data.map(repo => repo.language);
          setLinguagens(linguagens);
        } catch (error) {
          console.error(error);
        } finally {
          setCarregando(false); 
        }
      };
    
      dadosLinguagens();
    }, []); 

    return(
          <div>
          {carregando && <p>Loading linguagens...</p>}
          {/* {error && <p>Error fetching languages: {error.message}</p>} */}
          {linguagens.length > 0 && (
            <ul>
              {linguagens.map(language => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          )}
      </div>
    )
}
