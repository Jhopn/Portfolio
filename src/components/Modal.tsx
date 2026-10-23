import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode, Keyboard } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { Projeto } from './ProjetoCard.tsx';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import '../styles/modal/modal.css';

interface ProjetoModalProps {
  open: boolean;
  handleClose: () => void;
  projeto: Projeto;
}

export default function ProjetoModal({ open, handleClose, projeto }: ProjetoModalProps) {
  const { nome, tags, descricao, link, linkSite } = projeto;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const imagens = Array.from(new Set(projeto.imagem));
  const idTitulo = `modal-titulo-${nome.replace(/\s+/g, '-')}`;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby={idTitulo}
      closeAfterTransition
      slotProps={{
        backdrop: { sx: { backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(6px)' } },
      }}
    >
      <Fade in={open}>
        <div className="modalBox">
          <header className="modalCabecalho">
            <div>
              <p className="modalEyebrow">Projeto</p>
              <h2 id={idTitulo} className="modalTitulo">{nome}</h2>
            </div>
            <button className="modalFechar" onClick={handleClose} aria-label="Fechar detalhes do projeto">
              <i className="fas fa-times"></i>
            </button>
          </header>

          <div className="modalCorpo">
            <div className="modalGaleria">
              <div className="modalNavegador">
                <span /><span /><span />
              </div>
              <Swiper
                modules={[Navigation, Pagination, Thumbs, Keyboard]}
                navigation={imagens.length > 1}
                pagination={imagens.length > 1 ? { type: 'fraction' } : false}
                keyboard={{ enabled: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="modalSwiper"
              >
                {imagens.map((imagem, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={imagem}
                      alt={`${nome} - imagem ${index + 1}`}
                      className="modalImagem"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {imagens.length > 1 && (
                <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[FreeMode, Thumbs]}
                  spaceBetween={8}
                  slidesPerView={'auto'}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="modalMiniaturas"
                >
                  {imagens.map((imagem, index) => (
                    <SwiperSlide key={index} className="modalMiniatura">
                      <img src={imagem} alt={`Miniatura ${index + 1}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <div className="modalInfo">
              <p className="topicoTitulo">Ferramentas usadas</p>
              <div className="modalTags">
                {tags.map((tag) => (
                  <span key={tag.nome} className="modalTag">
                    <span className="modalTagCor" style={{ backgroundColor: tag.cor }} />
                    {tag.nome}
                  </span>
                ))}
              </div>

              <p className="topicoTitulo">Sobre o projeto</p>
              <p className="modalDescricao">{descricao.trim()}</p>

              <div className="modalBotoes">
                <a
                  className="botao botaoPrimario"
                  href={linkSite || undefined}
                  target="_blank"
                  aria-disabled={!linkSite}
                  onClick={(e) => !linkSite && e.preventDefault()}
                >
                  <i className="fas fa-globe"></i> {linkSite ? 'Acessar site' : 'Site indisponível'}
                </a>
                <a
                  className="botao botaoSecundario"
                  href={link || undefined}
                  target="_blank"
                  aria-disabled={!link}
                  onClick={(e) => !link && e.preventDefault()}
                >
                  <i className={link ? 'fab fa-github' : 'fas fa-lock'}></i> {link ? 'Repositório' : 'Privado'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
