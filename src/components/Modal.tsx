import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import '../styles/modal/modal.css';
import { DeviceFrameset } from 'react-device-frameset';
import { Swiper, SwiperSlide } from 'swiper/react';
import Typography from '@mui/material/Typography';
import ButtonRepository from './ButtonRepository';
import ButtonSite from './ButtonSite';
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
  imagemProjeto: string[];
  nomeProjeto: string;
  descricao: string;
  tags: Tag[];
  link: string;
  linkSite: string;
}

export default function BasicModal({
  open,
  handleClose,
  imagemProjeto = [],
  nomeProjeto,
  link,
  linkSite,
  tags,
  descricao,
}: BasicModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal-conteudo"
    >
      <Box className="modalBox" sx={{
        position: "relative",
      }}>
        <div className="curved-edge"/>
        <Button
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "0px",
            right: "0px",
            backgroundColor: "rgba(180, 83, 107, 0.3)",
            fontFamily: "Arial",
            color: "#ffffff",
            height: 40, 
            width: 40, 
            minWidth: 40, 
            padding: 0,
            zIndex: '10',
            fontSize: "0.75rem", 
            borderRadius: '100%', 
            margin: 1,
            '&:hover': {
              backgroundColor: "red",
            },
          }}
        >
          X
        </Button>

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
            {imagemProjeto.slice(1).map((imagem, index) => (
              <SwiperSlide key={index + 1}>
                <p className="modalTitulo">
                  {nomeProjeto}
                </p>
                <img
                  src={imagem}
                  alt={`${nomeProjeto} - imagem ${index + 2}`}
                  className="modalImagem"
                  style={{
                    width: '100%',
                    height: '50%',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    objectFit: 'cover',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </DeviceFrameset>


        <p className='topicoTitulo'>Ferramentas Usadas</p>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2,  borderBottom: '2px solid #000000', paddingBottom: 2}}>
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
        
        <div className='centralizadaDiv '>
          <p className='topicoTitulo'>Descrição do Projeto</p>
          <p className="modalDescricao">
            {descricao}
          </p>
        </div>

        <div style={{ backgroundColor: "#ffa800", display: 'flex', justifyContent: 'center', gap: 10 }}>
          <ButtonRepository link={link} />
          <ButtonSite linkSite={linkSite} />
        </div>

      </Box>
    </Modal>
  );
}
