import { MultiActionAreaCard } from "./MultiActionAreaCard.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { projetosConfiguracao } from './util/ConfigProjetosSwipper.ts';

export function ProjetosSwiper() {
    return (
        <Swiper
            spaceBetween={50}
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 40 },
            }}
            modules={[Pagination]}
            className="mySwiper"
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
    );
}
