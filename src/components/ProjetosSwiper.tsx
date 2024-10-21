import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { projetosConfiguracao } from './util/ConfigProjetosSwipper.ts';


export function ProjetosSwiper() {
  return (
    <div style={{ position: 'relative', padding: '20px 0' }}>
      <div
        className="swiper-button-prev"
        style={{
          position: 'absolute',
          top: '50%',
          left: '-40px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      ></div>
      <div
        className="swiper-button-next"
        style={{
          position: 'absolute',
          top: '50%',
          right: '-40px',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
        }}
      ></div>
      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 40 },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{ margin: -5 }}
      >
        {projetosConfiguracao.map((projeto, index) => (
          <SwiperSlide key={index}>
            <MultiActionAreaCard
              imagemProjeto={projeto.imagem}
              nomeProjeto={projeto.nome}
              tags={projeto.tags}
              link={projeto.link}
              descricaoProjeto={projeto.descricao}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
      {`
            .swiper-pagination-bullet {
              background-color: #ccc;
              opacity: 1;
            }
            .swiper-pagination-bullet-active {
              background-color: #ffa800;
            }
            .swiper-pagination {
              bottom: 10px; /* Ajuste de posição para garantir que as bolinhas apareçam */
            }
          `}
      </style>
    </div>
  );
}
