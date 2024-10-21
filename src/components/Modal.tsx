import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import '../styles/modal/modal.css';
import { DeviceFrameset } from 'react-device-frameset';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typography from '@mui/material/Typography';
// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

interface Tag {
  nome: string;
  cor: string;
}

interface BasicModalProps {
  open: boolean;
  handleClose: () => void;
  handleClick: () => void;
  imagemProjeto: string[];
  nomeProjeto: string;
  descricao: string;
  tags: Tag[];
}

export default function BasicModal({
  open,
  handleClose,
  imagemProjeto = [],
  nomeProjeto,
  handleClick,
  tags,
  descricao,
}: BasicModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal-conteudo"
    >
      <Box className="modalBox">
        {/* Carrossel de imagens dentro do DeviceFrameset */}
        <DeviceFrameset device="iPhone 8" color="gold" landscape>
          <div
            className="swiper-button-prev"
            style={{
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
            pagination={{
              type: 'fraction',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {imagemProjeto.map((imagem, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imagem}
                  alt={`${nomeProjeto} - imagem ${index + 1}`}
                  className="modalImagem"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // ou 'contain' dependendo do seu objetivo
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </DeviceFrameset>

        {/* Nome do Projeto */}
        <p className="modalTitulo">
          {nomeProjeto}
        </p>

        {/* Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2 }}>
          {tags.map((tag, index) => (
            <Typography
              key={index}
              sx={{
                color: '#ffffff',
                textShadow: '1px 2px 4px #000000',
                borderRadius: 1,
                padding: '5px 10px',
                margin: 0.5,
                textAlign: 'center',
                backgroundColor: tag.cor,
                fontFamily: 'Arial',
                cursor: 'pointer',
              }}
              variant="body2"
              color="text.secondary"
            >
              {tag.nome}
            </Typography>
          ))}
        </Box>

        {/* Descrição do Projeto */}
        <p className="modalDescricao">
          {descricao}
        </p>

        <div className='modal-butoes'>
          <Button
            onClick={handleClick}
            sx={{
              backgroundColor: "#000000",
              fontFamily: 'Arial',
              color: "#ffffff",
              '&:hover': {
                color: "#000000",
              },
            }}
          >
            Acessar Projeto
          </Button>

          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#000000",
              fontFamily: 'Arial',
              color: "#ff0000",
              '&:hover': {
                color: "#000000",
              },
            }}
          >
            Fechar
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
