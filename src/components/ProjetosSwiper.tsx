import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ProjetoCard } from './ProjetoCard.tsx';
import { projetosConfiguracao } from './util/ConfigProjetosSwipper.ts';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/projetosRow/projetosRow.css';

export function ProjetosSwiper() {
  return (
    <div className="projetosSwiper">
      <Swiper
        spaceBetween={24}
        slidesPerView={1.1}
        pagination={{ clickable: true, el: '.projetosSwiperPaginacao' }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        navigation={{
          nextEl: '.projetosSwiperProximo',
          prevEl: '.projetosSwiperAnterior',
        }}
        modules={[Pagination, Navigation]}
      >
        {projetosConfiguracao.map((projeto) => (
          <SwiperSlide key={projeto.nome}>
            <ProjetoCard projeto={projeto} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="projetosSwiperControles">
        <div className="projetosSwiperPaginacao" />
        <button className="projetosSwiperAnterior" aria-label="Projeto anterior">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="projetosSwiperProximo" aria-label="Próximo projeto">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
