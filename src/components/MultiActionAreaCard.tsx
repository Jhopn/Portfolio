import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import BasicModal from '../components/Modal.tsx';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import React from 'react';

interface Tag {
  nome: string;
  cor: string;
}

interface MultiActionAreaCardProps {
  imagemProjeto: string;
  nomeProjeto: string;
  descricaoProjeto: string;
  tags: Tag[];
  link: string;
}

export function MultiActionAreaCard({ imagemProjeto, nomeProjeto, descricaoProjeto, tags = [], link }: MultiActionAreaCardProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Card sx={{ maxWidth: 450, marginBottom: 5, height: 500 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            height={280}
            component="img"
            image={imagemProjeto}
            alt={nomeProjeto}
          />
          <CardContent sx={{ backgroundColor: "#ffa800" }}>
            <Swiper
              spaceBetween={2}
              slidesPerView={'auto'}
              freeMode={true}
              scrollbar={{ draggable: true, hide: false }}
              style={{ width: '100%', padding: '10px 0' }}
            >
              {tags.map((tag, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <Typography
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
                </SwiperSlide>
              ))}
            </Swiper>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                color: '#000000',
                margin: 0.5,
                fontFamily: 'Arial',
                fontWeight: 'bold',
              }}
              component="div"
            >
              {nomeProjeto}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#000000', marginLeft: 0.5, fontFamily: 'Arial', height: 40 }}
            >
              {descricaoProjeto}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ backgroundColor: "#ffa800" }}>
          <Button
            size="medium"
            color="info"
            onClick={handleClick}
            sx={{
              backgroundColor: "#000000",
              fontFamily: 'Arial',
              color: "#ffffff",
              textTransform: "capitalize",
              marginLeft: 1,
              '&:hover': {
                color: '#ffa800',
                backgroundColor: "#000000",
              }
            }}
          >
            Ver Mais
          </Button>
        </CardActions>
      </Card>
      <BasicModal
        open={open}
        handleClose={handleClose}
        descricao={descricaoProjeto}
        imagemProjeto={imagemProjeto}
        nomeProjeto={nomeProjeto}
        link={link}
      />
    </>
  );
}
